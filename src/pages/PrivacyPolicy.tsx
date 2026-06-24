import React from 'react';
import { Lock } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg px-6 min-h-screen font-sans">
      <div className="max-w-3xl mx-auto space-y-10 text-left">
        
        <div className="space-y-2 border-b border-brand-border/60 pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1">
            <Lock className="w-4 h-4" /> Security
          </span>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight">
            Privacy Policy
          </h1>
        </div>

        <div className="space-y-6 text-xs md:text-sm text-text-secondary leading-relaxed bg-white p-6 md:p-8 border border-brand-border rounded">
          
          <div className="space-y-3">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">1. Data Collection</h3>
            <p>
              We collect information necessary to process orders and customize supplement recommendation quizzes. This includes your name, shipping address, email, phone number, and answers regarding your diet, physical activity, and biological objectives.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/40">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">2. Payment Integrity</h3>
            <p>
              Your payment information is processed securely using PCI-compliant, 256-bit encrypted gateways. Body Cafe Co. never logs, holds, or has access to your full credit card digits or CVV parameters on our servers.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/40">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">3. Third Party Disclosures</h3>
            <p>
              We do not distribute or sell your personal details to advertising networks. Information is only shared with trusted operators required for core store transactions: courier shipping partners (e.g. BlueDart) and billing processors (e.g. Razorpay).
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/40">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">4. Cookies & Choice</h3>
            <p>
              We utilize browser cookies to remember items added to your Cart drawer, quiz responses, and to analyze layout traffic performance. You can manage or disable cookie tracking preferences through our cookie preferences console.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
