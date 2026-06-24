import React, { useState } from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export const CookiePreferences: React.FC = () => {
  const [preferences, setPreferences] = useState({
    essential: true,
    functional: true,
    analytics: false,
    marketing: false,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 5000);
  };

  return (
    <div className="pt-32 pb-24 bg-brand-bg px-6 min-h-screen font-sans">
      <div className="max-w-3xl mx-auto space-y-10 text-left">
        
        <div className="space-y-2 border-b border-brand-border/60 pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" /> Privacy Controls
          </span>
          <h1 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight">
            Cookie Preferences
          </h1>
        </div>

        <div className="bg-white border border-brand-border p-6 md:p-8 rounded space-y-6">
          
          <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
            We use browser cookies to optimize checkout pathways, maintain your active shopping cart state, verify user login dashboards, and analyze site performance. Configure your choice criteria below.
          </p>

          {saved && (
            <div className="flex gap-2.5 items-center p-4 border border-dashed border-emerald-300 bg-emerald-50 text-emerald-800 text-xs rounded">
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Cookie preferences successfully updated. Changes have been loaded.</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            
            {/* Essential */}
            <div className="flex items-start justify-between gap-4 border-b border-brand-border/40 pb-4">
              <div className="space-y-1 pr-4">
                <span className="font-display font-bold text-xs uppercase text-primary tracking-wide">Essential Cookies (Always Active)</span>
                <p className="text-[10px] text-text-secondary leading-relaxed">
                  Required to remember cart items, track quiz recommendations, and verify user login sessions.
                </p>
              </div>
              <input type="checkbox" checked disabled className="mt-1 accent-primary" />
            </div>

            {/* Functional */}
            <div className="flex items-start justify-between gap-4 border-b border-brand-border/40 pb-4">
              <div className="space-y-1 pr-4">
                <span className="font-display font-bold text-xs uppercase text-primary tracking-wide">Functional Cookies</span>
                <p className="text-[10px] text-text-secondary leading-relaxed">
                  Allows our site to remember settings like layout preferences or search history.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                className="mt-1 accent-primary cursor-pointer"
              />
            </div>

            {/* Analytics */}
            <div className="flex items-start justify-between gap-4 border-b border-brand-border/40 pb-4">
              <div className="space-y-1 pr-4">
                <span className="font-display font-bold text-xs uppercase text-primary tracking-wide">Analytics Cookies</span>
                <p className="text-[10px] text-text-secondary leading-relaxed">
                  Helps us analyze layout performance, loading times, and aggregate visitor flows.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="mt-1 accent-primary cursor-pointer"
              />
            </div>

            {/* Marketing */}
            <div className="flex items-start justify-between gap-4 pb-2">
              <div className="space-y-1 pr-4">
                <span className="font-display font-bold text-xs uppercase text-primary tracking-wide">Marketing Cookies</span>
                <p className="text-[10px] text-text-secondary leading-relaxed">
                  Used to deliver relevant advertising campaigns regarding longevity stacks on external platforms.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                className="mt-1 accent-primary cursor-pointer"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-white hover:bg-accent font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
            >
              Save Preferences
            </button>
          </form>

        </div>

      </div>
    </div>
  );
};
