import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Truck, CreditCard, Check, ArrowRight, ArrowLeft } from 'lucide-react';

export const Checkout: React.FC = () => {
  const { cart, cartSubtotal, shippingCost, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState<1 | 2>(1);

  // Form values
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[70vh] flex flex-col items-center justify-center space-y-4 bg-brand-bg">
        <h2 className="font-display font-extrabold text-2xl text-primary">Checkout Empty</h2>
        <p className="text-sm text-text-secondary">No supplement stacks are queued for purchase.</p>
        <Link to="/shop" className="px-6 py-2.5 bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-accent transition-colors">
          Go to Shop
        </Link>
      </div>
    );
  }

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (email && name && address && city && zip) {
        setStep(2);
      }
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cardNumber && cardExpiry && cardCvv) {
      // Successful order mock
      clearCart();
      navigate('/order-success');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-brand-bg px-6 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto space-y-12 text-left">
        
        {/* Header */}
        <div className="space-y-2 border-b border-brand-border/60 pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Purchase Funnel</span>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight">
            Checkout Setup
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form left (lg:col-span-8) */}
          <div className="lg:col-span-8 bg-white border border-brand-border p-6 md:p-8 rounded">
            
            {/* Step Indicators */}
            <div className="flex gap-4 border-b border-brand-border/40 pb-6 mb-6 text-xs font-bold uppercase tracking-wider select-none">
              <div className={`flex items-center gap-1.5 ${step === 1 ? 'text-primary' : 'text-gray-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center border text-[10px] ${
                  step === 1 ? 'border-primary bg-primary text-white' : 'border-gray-300'
                }`}>1</span>
                <span>Shipping Info</span>
              </div>
              <div className="w-12 h-[2px] bg-brand-border self-center" />
              <div className={`flex items-center gap-1.5 ${step === 2 ? 'text-primary' : 'text-gray-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center border text-[10px] ${
                  step === 2 ? 'border-primary bg-primary text-white' : 'border-gray-300'
                }`}>2</span>
                <span>Secure Payment</span>
              </div>
            </div>

            {/* STEP 1: Shipping */}
            {step === 1 && (
              <form onSubmit={handleNextStep} className="space-y-6">
                <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary flex items-center gap-2">
                  <Truck className="w-4 h-4 text-accent" /> Shipping Details
                </h3>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-primary tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. aravind@domain.com"
                    className="w-full px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-primary tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aravind Sharma"
                      className="w-full px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-primary tracking-wider">ZIP / Postal Code</label>
                    <input
                      type="text"
                      required
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      placeholder="e.g. 560103"
                      className="w-full px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-primary tracking-wider">Shipping Address</label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. Outer Ring Road, Block 4A"
                      className="w-full px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-primary tracking-wider">City</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Bengaluru"
                      className="w-full px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white hover:bg-accent font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg"
                >
                  <span>Continue to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* STEP 2: Secure Payment */}
            {step === 2 && (
              <form onSubmit={handleCompleteOrder} className="space-y-6">
                <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-accent" /> Secure Payment Detail
                </h3>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold text-primary tracking-wider">Card Number</label>
                  <input
                    type="text"
                    required
                    maxLength={19}
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="•••• •••• •••• ••••"
                    className="w-full px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-primary tracking-wider">Expiry Date</label>
                    <input
                      type="text"
                      required
                      maxLength={5}
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary font-mono"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-primary tracking-wider">CVV Code</label>
                    <input
                      type="password"
                      required
                      maxLength={3}
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      placeholder="•••"
                      className="w-full px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary font-mono"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 border border-primary/20 text-primary hover:bg-brand-bg font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Shipping</span>
                  </button>

                  <button
                    type="submit"
                    className="flex-1 py-4 bg-accent text-white hover:bg-primary font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-accent/15"
                  >
                    <span>Complete Order</span>
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Sidebar right order totals (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-brand-border p-6 rounded space-y-6">
              <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary">Summary</h3>
              
              <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
                {cart.map((item) => {
                  const basePrice = item.product.salePrice || item.product.price;
                  const finalPrice = item.isSubscription
                    ? basePrice * (1 - item.product.subscriptionDiscount / 100)
                    : basePrice;

                  return (
                    <div key={`${item.product.id}-${item.isSubscription ? 'sub' : 'one'}`} className="flex justify-between items-start text-xs text-text-secondary gap-3">
                      <div className="min-w-0">
                        <span className="font-semibold text-primary block truncate">{item.product.name}</span>
                        <span className="text-[10px] text-text-secondary block mt-0.5">
                          Qty: {item.quantity} {item.isSubscription && ' (Auto-ship)'}
                        </span>
                      </div>
                      <span className="font-mono text-primary font-semibold whitespace-nowrap">₹{Math.round(finalPrice * item.quantity).toLocaleString('en-IN')}</span>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2 pt-4 border-t border-brand-border/40 text-xs text-text-secondary">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-primary">₹{Math.round(cartSubtotal).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? <span className="text-brand-success font-semibold uppercase">Free</span> : `₹${shippingCost}`}</span>
                </div>
                <div className="flex justify-between border-t border-brand-border pt-3 text-sm font-semibold text-primary">
                  <span>Total Amount</span>
                  <span className="font-mono text-primary">₹{Math.round(cartTotal).toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Secure note */}
            <div className="flex items-center justify-center gap-2 p-4 border border-brand-border bg-white rounded text-[10px] font-semibold text-text-secondary">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>SSL Secure 256-bit encrypted transaction</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
