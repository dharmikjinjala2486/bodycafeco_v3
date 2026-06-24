import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export const OrderSuccess: React.FC = () => {
  // Generate random order number
  const orderNumber = React.useMemo(() => {
    return `BC-${Math.floor(100000 + Math.random() * 900000)}`;
  }, []);

  return (
    <div className="pt-32 pb-24 bg-brand-bg px-6 min-h-screen flex items-center justify-center font-sans">
      <div className="max-w-md mx-auto w-full bg-white border border-brand-border p-8 rounded shadow-xl text-center space-y-6">
        
        {/* Success Icon */}
        <div className="relative w-16 h-16 bg-emerald-50 rounded-full border border-emerald-150 flex items-center justify-center mx-auto text-emerald-600">
          <Check className="w-8 h-8" />
          <div className="absolute top-0 right-0 w-4 h-4 bg-accent text-white rounded-full flex items-center justify-center">
            <Sparkles className="w-2.5 h-2.5" />
          </div>
        </div>

        {/* Messaging */}
        <div className="space-y-2">
          <h1 className="font-display font-extrabold text-2xl text-primary uppercase tracking-tight">Order Confirmed</h1>
          <p className="text-xs text-text-secondary leading-relaxed">
            Your molecular supplement stack is successfully queued for packing. A confirmation receipt has been sent to your email.
          </p>
        </div>

        {/* Details Box */}
        <div className="bg-brand-bg p-4 border border-brand-border text-left text-xs text-text-secondary space-y-2 rounded">
          <div className="flex justify-between">
            <span>Order Number</span>
            <span className="font-mono text-primary font-bold">{orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Speed</span>
            <span className="text-primary font-semibold">Priority Delivery (3–5 Days)</span>
          </div>
          <div className="flex justify-between">
            <span>Payment Method</span>
            <span className="text-primary font-semibold">SSL Credit Card (Verified)</span>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <Link
            to="/shop"
            className="w-full py-4 bg-primary text-white hover:bg-accent font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
