import React from 'react';
import { FileText } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg px-6 min-h-screen font-sans">
      <div className="max-w-3xl mx-auto space-y-10 text-left">
        
        <div className="space-y-2 border-b border-brand-border/60 pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1">
            <FileText className="w-4 h-4" /> Legal
          </span>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight">
            Terms of Service
          </h1>
        </div>

        <div className="space-y-6 text-xs md:text-sm text-text-secondary leading-relaxed bg-white p-6 md:p-8 border border-brand-border rounded">
          
          <div className="space-y-3">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">1. Agreement to Terms</h3>
            <p>
              By accessing the Body Cafe Co. website or utilizing our clinical supplement quiz, you agree to comply with and be bound by these Terms of Service and all applicable guidelines.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/40">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">2. Medical Disclaimer</h3>
            <p>
              Supplement details, ingredients listings, and customized quiz recommendation stacks provided on this website are for educational purposes only. They do not substitute for professional medical counsel. Always seek advice from your physician regarding personal metabolic or health changes.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/40">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">3. Subscription Agreements</h3>
            <p>
              When subscribing to auto-ship products, you authorize recurring billing to your credit card at the specified time intervals. You can modify billing addresses, change delivery dates, pause, or cancel subscriptions at any time through your account console with zero penalty fees.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/40">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">4. Billing and Pricing</h3>
            <p>
              Prices for supplement items are listed in Indian Rupees (INR) and are subject to adjustment. We reserve the right to limit order quantities on best-selling batches or refuse transactions suspected of commercial resale abuse.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
