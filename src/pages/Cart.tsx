import React from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';

export const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, cartSubtotal, shippingCost, cartTotal } = useCart();
  const navigate = useNavigate();

  // Find upsell product: choose a product from the database that is NOT in the cart
  const inCartIds = cart.map((item) => item.product.id);
  const upsells = products.filter((p) => !inCartIds.includes(p.id)).slice(0, 2);

  return (
    <div className="pt-32 pb-24 bg-brand-bg px-6 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto space-y-12 text-left">
        
        {/* Header */}
        <div className="space-y-2 border-b border-brand-border/60 pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Review Order</span>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight">
            Shopping Cart
          </h1>
        </div>

        {cart.length === 0 ? (
          /* EMPTY STATE */
          <div className="max-w-md mx-auto text-center py-16 bg-white border border-brand-border rounded space-y-6">
            <div className="p-4 rounded-full bg-brand-bg border border-brand-border w-16 h-16 flex items-center justify-center mx-auto text-gray-400">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-primary text-base">Your Cart is Empty</h3>
            <p className="text-xs text-text-secondary max-w-xs mx-auto">
              Ready to invest in your physical and mental longevity? Browse our clinical product catalog.
            </p>
            <Link
              to="/shop"
              className="inline-block px-6 py-3 bg-primary text-white hover:bg-accent font-bold text-xs uppercase tracking-widest transition-colors duration-300"
            >
              Shop All Supplements
            </Link>
          </div>
        ) : (
          /* CART ACTIVE VIEW */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Items List Left (lg:col-span-8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-4">
                {cart.map((item) => {
                  const basePrice = item.product.salePrice || item.product.price;
                  const finalPrice = item.isSubscription
                    ? basePrice * (1 - item.product.subscriptionDiscount / 100)
                    : basePrice;

                  return (
                    <div
                      key={`${item.product.id}-${item.isSubscription ? 'sub' : 'one'}`}
                      className="flex flex-col sm:flex-row gap-4 p-5 bg-white border border-brand-border rounded"
                    >
                      {/* Image */}
                      <div className="w-20 h-20 bg-brand-bg border border-brand-border rounded overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                        <img src={item.product.imageUrl} alt={item.product.name} className="w-full h-full object-cover" />
                      </div>

                      {/* Info & Quantity controls */}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex justify-between items-start gap-4">
                            <h3 className="font-display font-semibold text-sm text-primary hover:text-accent">
                              <Link to={`/product/${item.product.slug}`}>{item.product.name}</Link>
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.product.id, item.isSubscription)}
                              className="text-gray-400 hover:text-accent p-1 cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <p className="text-[10px] text-text-secondary mt-0.5 uppercase tracking-wider font-semibold">
                            {item.product.category}
                          </p>
                          {item.isSubscription && (
                            <span className="inline-block mt-2 text-[9px] bg-emerald-50 text-emerald-700 px-2 py-0.5 border border-emerald-100 rounded font-semibold uppercase tracking-wider">
                              Auto-Ship Stack (Every {item.frequency} Days) - 15% Off
                            </span>
                          )}
                        </div>

                        {/* quantity adjustments and total price */}
                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-brand-border/40">
                          <div className="flex items-center border border-brand-border bg-brand-bg rounded">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.isSubscription, item.quantity - 1)}
                              className="px-3 py-1.5 text-gray-500 hover:text-primary transition-colors cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 text-xs font-semibold text-primary">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.isSubscription, item.quantity + 1)}
                              className="px-3 py-1.5 text-gray-500 hover:text-primary transition-colors cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-display text-sm font-semibold text-primary">
                            ₹{Math.round(finalPrice * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Smart Cross-Sells (Upsells) */}
              {upsells.length > 0 && (
                <div className="border border-brand-border bg-white p-5 rounded space-y-4">
                  <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-primary">Recommended Additions</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {upsells.map((up) => (
                      <div key={up.id} className="p-3 border border-brand-border bg-brand-bg/20 rounded flex gap-3">
                        <div className="w-12 h-12 bg-white rounded overflow-hidden flex-shrink-0 border border-brand-border">
                          <img src={up.imageUrl} alt={up.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                          <div>
                            <h5 className="font-display font-semibold text-xs text-primary truncate">{up.name}</h5>
                            <span className="text-[10px] text-text-secondary block mt-0.5">₹{up.price}</span>
                          </div>
                          <button
                            onClick={() => updateQuantity(up.id, false, 1)}
                            className="text-[9px] font-bold text-accent hover:text-primary uppercase tracking-widest text-left cursor-pointer mt-1"
                          >
                            + Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Checkout Summary Box Right (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-brand-border p-6 rounded space-y-6">
                <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary">Order Summary</h3>
                
                <div className="space-y-3 text-xs text-text-secondary">
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
                    <span>₹{Math.round(cartTotal).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full py-4 bg-primary text-white hover:bg-accent font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-colors"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badge panel */}
              <div className="bg-white border border-brand-border p-6 rounded space-y-3 text-xs text-text-secondary leading-relaxed">
                <div className="flex gap-2 items-center text-primary font-semibold uppercase tracking-wider text-[9px] border-b border-brand-border pb-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Clinical Guarantee</span>
                </div>
                <p>
                  Every purchase carries a 60-day money-back guarantee. If you are not satisfied with the molecular performance or health absorption results, return empty bottles for a full refund.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
