import React from 'react';
import { Truck, RefreshCw, AlertCircle } from 'lucide-react';

export const ShippingReturns: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg px-6 min-h-screen font-sans">
      <div className="max-w-3xl mx-auto space-y-10 text-left">
        
        <div className="space-y-2 border-b border-brand-border/60 pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1">
            <Truck className="w-4 h-4" /> Customer Support
          </span>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight">
            Shipping & Returns
          </h1>
        </div>

        <div className="space-y-6 text-xs md:text-sm text-text-secondary leading-relaxed bg-white p-6 md:p-8 border border-brand-border rounded">
          
          <div className="space-y-3">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">1. Dispatch & Shipping Speeds</h3>
            <p>
              We process and dispatch all orders within 24 hours of confirmation. Orders made before 2:00 PM IST are dispatched same-day from our Bengaluru central lab facility.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Free Shipping:</strong> Automatically applied to all orders above ₹999 or any recurring Subscription items.</li>
              <li><strong>Standard Shipping:</strong> Orders under ₹999 carry a flat delivery fee of ₹99.</li>
              <li><strong>Transit Times:</strong> Metros take 2-3 business days. Rest of India takes 4-5 business days.</li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/40">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider flex items-center gap-1.5">
              <RefreshCw className="w-4 h-4 text-accent" /> 2. 60-Day Satisfaction Returns
            </h3>
            <p>
              We design our clinical formulas to work. If you do not experience positive biomarker shifts or physical benefits, you can return your purchase (even empty bottles) within 60 days for a full refund of the product purchase price.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/40">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">3. How to Initiate a Return</h3>
            <p>
              Write directly to our support team at <a href="mailto:support@bodycafeco.com" className="text-accent hover:underline font-bold">support@bodycafeco.com</a> detailing your order number. We will supply you with a pre-paid courier shipping label. Pack your bottle securely and schedule a home pick-up at no cost to you.
            </p>
          </div>

          <div className="p-4 bg-amber-50 border border-amber-100 flex gap-3 text-[11px] text-text-secondary">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span>Refunds are processed to the original payment channel within 5-7 business days of the package arrival at our verification laboratory.</span>
          </div>

        </div>

      </div>
    </div>
  );
};
