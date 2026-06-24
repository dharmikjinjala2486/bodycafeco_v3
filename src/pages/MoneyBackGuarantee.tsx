import React from 'react';
import { ShieldCheck, ArrowRight, Dna } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MoneyBackGuarantee: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg px-6 min-h-screen font-sans">
      <div className="max-w-3xl mx-auto space-y-10 text-left">
        
        <div className="space-y-2 border-b border-brand-border/60 pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" /> 100% Risk Free
          </span>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight">
            60-Day Money Back Guarantee
          </h1>
        </div>

        <div className="space-y-6 text-xs md:text-sm text-text-secondary leading-relaxed bg-white p-6 md:p-8 border border-brand-border rounded">
          
          <div className="space-y-3">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">Our Trust Promise</h3>
            <p>
              Many wellness brands ask you to buy supplements blindly, with no recourse if the product is ineffective or causes digestive discomfort. At Body Cafe Co., we stand behind our chemical purity and clinical research.
            </p>
            <p>
              If your biological focus, workout stamina, or Oura sleep scores do not show positive shifts after taking our formulas consistently for 30 days, we do not want your money. You have a full 60 days from purchase to return the bottle (completely empty if you wish) for a 100% refund.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/40">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">Terms of the Guarantee</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Applicable to your first order of any individual supplement formula.</li>
              <li>You may request a return within 60 days of the shipping date.</li>
              <li>Zero return fees. We pay for the return shipment courier.</li>
              <li>Includes subscription and one-time purchases.</li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/40">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider flex items-center gap-1.5">
              <Dna className="w-4 h-4 text-accent" /> Why We Offer This
            </h3>
            <p>
              We formulation-test our active ingredients using patented compounds at exact clinical amounts. We know they are highly bioavailable, and we are confident they will deliver results you can measure.
            </p>
          </div>

        </div>

        <div className="text-center pt-4">
          <Link to="/shop" className="inline-flex items-center gap-2 bg-primary text-white font-bold text-xs uppercase tracking-widest px-6 py-4 hover:bg-accent transition-colors cursor-pointer">
            <span>Shop Stacks Risk-Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
