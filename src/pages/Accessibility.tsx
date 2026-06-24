import React from 'react';
import { Eye, HelpCircle } from 'lucide-react';

export const Accessibility: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg px-6 min-h-screen font-sans">
      <div className="max-w-3xl mx-auto space-y-10 text-left">
        
        <div className="space-y-2 border-b border-brand-border/60 pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1">
            <Eye className="w-4 h-4" /> Compliance
          </span>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight">
            Accessibility Statement
          </h1>
        </div>

        <div className="space-y-6 text-xs md:text-sm text-text-secondary leading-relaxed bg-white p-6 md:p-8 border border-brand-border rounded">
          
          <div className="space-y-3">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">Our Commitment</h3>
            <p>
              Body Cafe Co. is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to maximize usability.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/40">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">Conformance Standard</h3>
            <p>
              We target conformance with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with sensory, cognitive, and mobility difficulties.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/40">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider">Accessibility Measures</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>High-contrast text declarations across all layout templates.</li>
              <li>Semantic HTML elements to ensure correct reading flows on screen readers.</li>
              <li>Aria labels and labels on form inputs.</li>
              <li>Keyboard-navigable overlays (such as our search overlay).</li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/40">
            <h3 className="font-display font-bold text-primary text-sm uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-accent" /> Feedback & Assistance
            </h3>
            <p>
              If you experience any barriers to reading or browsing our store templates, please email our accessibility officer at <a href="mailto:accessibility@bodycafeco.com" className="text-accent hover:underline font-bold">accessibility@bodycafeco.com</a>. We will assist you with order processing or supply product facts in alternative formats.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
