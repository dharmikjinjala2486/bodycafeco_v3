import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* Section 1: Hero Story */}
        <section className="text-left space-y-6 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Origins</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-[1.1]">
            We Formulate for Human Performance.
          </h1>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            Body Cafe Co. was founded to address a systemic problem in modern wellness: supplement formulations containing trace amounts of active ingredients padded with chemical binders and proprietary blends. We believe you have the right to know what compounds enter your biology.
          </p>
        </section>

        {/* Section 2: Mission & Values */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-left">
          <div className="space-y-4">
            <h2 className="font-display font-extrabold text-xl md:text-2xl text-primary uppercase tracking-wider">Our Mission</h2>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
              To design and distribute the world’s most bioavailable, clinically sound cellular supplements. We target biomarkers of aging, physical power, and neural latency, providing human athletes and longevity pioneers with the absolute best inputs to build a healthier, higher-performing lifespan.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="font-display font-extrabold text-xl md:text-2xl text-primary uppercase tracking-wider">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-primary">Science First</h4>
                <p className="text-[10px] text-text-secondary">We only use active ingredient doses verified in peer-reviewed clinical human trials.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-primary">Full Disclosure</h4>
                <p className="text-[10px] text-text-secondary">Zero proprietary blends. We publish full molecular dosages for every capsule batch.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-primary">Patented Quality</h4>
                <p className="text-[10px] text-text-secondary">We secure patented ingredients (Creapure, Neuro-Mag) to guarantee raw molecular purity.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-primary">Long-Term Focus</h4>
                <p className="text-[10px] text-text-secondary">Formulating for longevity, physical output, and sustained performance, not quick fixes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why Body Cafe Co. (Comparison Table) */}
        <section className="space-y-8 text-left">
          <div className="space-y-2 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Clinical Breakdown</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary tracking-tight">
              Why Body Cafe Co.?
            </h2>
            <p className="text-xs text-text-secondary max-w-md mx-auto">
              How we differentiate ourselves from mass-market supplement brands.
            </p>
          </div>

          <div className="border border-brand-border bg-white rounded overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-bg text-primary border-b border-brand-border text-[10px] font-bold uppercase tracking-wider">
                  <th className="p-4 md:p-6">Parameter</th>
                  <th className="p-4 md:p-6 text-accent bg-accent/5">Body Cafe Co. Formulation</th>
                  <th className="p-4 md:p-6 text-gray-500">Standard Supplement Brands</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border/60 text-xs text-text-secondary">
                <tr>
                  <td className="p-4 md:p-6 font-display font-bold text-primary">Ingredient Blending</td>
                  <td className="p-4 md:p-6 text-primary font-medium bg-accent/5">100% Transparent dosing with exact milligrams listed.</td>
                  <td className="p-4 md:p-6">Proprietary blends that hide low-grade ingredient ratios.</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-display font-bold text-primary">Molecular Dosages</td>
                  <td className="p-4 md:p-6 text-primary font-medium bg-accent/5">Exact therapeutic target doses verified by human studies.</td>
                  <td className="p-4 md:p-6">Underdosed ingredients used purely for marketing buzzwords.</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-display font-bold text-primary">Third-Party Testing</td>
                  <td className="p-4 md:p-6 text-primary font-medium bg-accent/5">Accredited laboratory CoAs available for every single lot batch.</td>
                  <td className="p-4 md:p-6">Rarely tested, or test results hidden from customer eyes.</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-6 font-display font-bold text-primary">Chemical Binders</td>
                  <td className="p-4 md:p-6 text-primary font-medium bg-accent/5">0% artificial coloring, zero magnesium stearate, clean vegan capsules.</td>
                  <td className="p-4 md:p-6">Heavy use of chemical flowing agents and synthetic fillers.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Timeline */}
        <section className="space-y-12 text-left max-w-4xl mx-auto">
          <div className="space-y-2 border-b border-brand-border/40 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Journey</span>
            <h2 className="font-display font-extrabold text-2xl text-primary tracking-tight">
              Evolution of Transparency
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-border">
            {[
              { year: '2024', title: 'Conceptualization & Advisory Setup', desc: 'Body Cafe Co was conceived by a team of neurobiologists and athletic coaches frustrated with opaque market supplement labels. Created our scientific advisory board.' },
              { year: '2025', title: 'Patented Sourcing & Launch', desc: 'Secured critical ingredient patents including Magtein® and Creapure®. Launched V1 website with first 3 core longevity products, proving molecular transparency.' },
              { year: '2026', title: 'Body Cafe Co. Version 3', desc: 'Introduced liposomal matrices, scaled our third-party testing with Eurofins labs, and launched V3 website to provide an unmatched, high-conversion wellness experience.' }
            ].map((milestone) => (
              <div key={milestone.year} className="relative pl-12">
                {/* indicator */}
                <div className="absolute left-[11px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-white ring-1 ring-accent" />
                <div className="space-y-1">
                  <span className="font-display font-extrabold text-xs text-accent uppercase tracking-wider">{milestone.year}</span>
                  <h4 className="font-display font-bold text-sm text-primary">{milestone.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* bottom redirect */}
        <div className="pt-6 border-t border-brand-border/40 text-center">
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-4 hover:bg-accent transition-colors cursor-pointer"
          >
            <span>Take Supplement Quiz</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
