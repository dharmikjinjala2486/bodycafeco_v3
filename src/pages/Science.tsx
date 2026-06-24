import React from 'react';
import { FileText, CheckCircle, ArrowRight, Dna, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Science: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-bg font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* Section 1: Hero */}
        <section className="text-left space-y-6 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1.5">
            <Dna className="w-4 h-4 animate-pulse" />
            Clinical Validation
          </span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-[1.1]">
            Scientifically Formulated. Biologically Proven.
          </h1>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            We reject proprietary blends, anecdotal dosing, and synthetic fillers. Every Body Cafe Co. formula is engineered based on verified clinical human trials, utilizing bio-identical compound matrices.
          </p>
        </section>

        {/* Section 2: Research Philosophy */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 aspect-video bg-white border border-brand-border p-6 shadow-inner flex flex-col justify-between h-80">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest font-mono">Molecular Profile</span>
              <span className="text-[8px] bg-primary text-white font-mono px-2 py-0.5">NMR VERIFIED</span>
            </div>
            
            {/* Mock molecular graph */}
            <div className="flex-1 my-4 flex items-end justify-between px-4 gap-1.5 h-32">
              {[80, 45, 95, 20, 60, 85, 30, 75, 50, 90].map((h, i) => (
                <div key={i} className="flex-1 bg-primary/20 hover:bg-accent border border-primary/10 transition-colors" style={{ height: `${h}%` }} />
              ))}
            </div>

            <div className="border-t border-brand-border/40 pt-4 flex justify-between text-[8px] text-text-secondary font-mono uppercase">
              <span>Active Target Match</span>
              <span>100% Purity Saturation</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Analytical Chemistry</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary tracking-tight">
              Rigorous Lab Validation Process
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed text-pretty">
              Before any batch is packaged, raw ingredients undergo High-Performance Liquid Chromatography (HPLC) and Nuclear Magnetic Resonance (NMR) spectroscopy. These analytical verification tests establish exact molecular structures, ensuring raw materials are completely free from toxic heavy metals, pesticides, and bacterial micro-contaminants.
            </p>
          </div>
        </section>

        {/* Section 3: Ingredient Standards */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Source Sincerity</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary tracking-tight">
              Patented Bioactive Ingredients
            </h2>
            <p className="text-sm text-text-secondary max-w-lg mx-auto">
              We coordinate with leading global laboratories to secure verified, high-purity compound patents. We never substitute with cheap generic raw materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { name: 'Magtein®', source: 'MIT, USA', desc: 'The only clinically validated form of Magnesium L-Threonate proven to penetrate the blood-brain barrier and elevate synaptic density in the hippocampus.' },
              { name: 'Creapure®', source: 'Alzchem, Germany', desc: 'The gold standard in Creatine Monohydrate. Synthesized under strict cGMP standards to guarantee 99.99% pure molecular creatine with zero creatinine conversion.' },
              { name: 'Liposomal Matrix MK-7', source: 'Gnosis, Italy', desc: 'Lecithin-based encapsulation matrix that coats D3 and K2 molecules, bypassing cellular destruction during stomach digestion for direct arterial protection.' }
            ].map((ing) => (
              <div key={ing.name} className="p-6 border border-brand-border bg-white rounded space-y-4">
                <div className="flex justify-between items-center border-b border-brand-border/40 pb-3">
                  <h3 className="font-display font-bold text-base text-primary">{ing.name}</h3>
                  <span className="text-[10px] text-text-secondary uppercase font-bold tracking-wider">{ing.source}</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {ing.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Third Party Testing */}
        <section className="bg-white border border-brand-border p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="w-10 h-10 bg-brand-bg border border-brand-border flex items-center justify-center text-accent rounded mb-2">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="font-display font-extrabold text-2xl text-primary tracking-tight">
              Access Certificate of Analysis (CoA)
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              We believe in 100% molecular transparency. Every single production batch is verified by Eurofins Laboratories. Enter your package lot code at checkout or inspect our catalog-wide average reports here.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#download" className="px-5 py-3 bg-primary text-white text-[10px] uppercase font-bold tracking-wider hover:bg-accent transition-colors duration-200">
                Download Latest CoA Summary
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 border border-brand-border bg-brand-bg/50 p-6 rounded space-y-3">
            <h4 className="text-[10px] font-bold text-accent uppercase tracking-widest">Lab Safety Summary</h4>
            <ul className="space-y-2">
              {['Heavy Metals Detection: < 0.01 ppm', 'Microbial Contamination: Negative', 'Active Purity Score: > 99.4%', 'Synthetic Binders: 0.0%'].map((pt) => (
                <li key={pt} className="flex gap-2 text-[10px] font-semibold text-primary items-center">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 5: Clinical Evidence */}
        <section className="space-y-8 text-left max-w-4xl mx-auto">
          <div className="space-y-2 border-b border-brand-border/40 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Literature & Trials</span>
            <h2 className="font-display font-extrabold text-2xl text-primary tracking-tight">
              Clinical Evidence Review
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Magnesium L-Threonate (Magtein®) for cognitive performance and neurogenesis',
                pub: 'Journal of Neuroscience, MIT (2010)',
                summary: 'Clinical evaluation demonstrating that oral administration of Magnesium L-Threonate increases cerebrospinal fluid magnesium concentration, promoting synaptic density in the prefrontal cortex and hippocampus to recover memory deficits.'
              },
              {
                title: 'Beta-Nicotinamide Mononucleotide (NMN) cellular energy and NAD+ safety',
                pub: 'Cell Metabolism, Washington University School of Medicine (2016)',
                summary: 'Clinical study verifying that oral delivery of NMN boosts systemic NAD+ biosynthesis, showing immediate cellular protection, mitochondrial efficiency restoration, and activation of SIRT1 sirtuin genes.'
              },
              {
                title: 'Nitric Oxide expansion and athletic time-to-exhaustion buffer',
                pub: 'Medicine & Science in Sports & Exercise (2015)',
                summary: 'Verifying that high-dosage L-Citrulline Malate intake significantly increases plasma arginine levels, accelerating nitric oxide vasodilation, delaying training lactic fatigue, and lessening muscular soreness.'
              }
            ].map((study) => (
              <div key={study.title} className="p-5 bg-white border border-brand-border space-y-2">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                  <h4 className="font-display font-semibold text-xs text-primary leading-snug">{study.title}</h4>
                  <span className="text-[8px] bg-primary/10 text-primary font-bold uppercase tracking-wider px-2 py-0.5 whitespace-nowrap">{study.pub}</span>
                </div>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  {study.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Scientific References (Bibliography) */}
        <section className="border-t border-brand-border/40 pt-16 text-left max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-text-secondary">
            <AlertCircle className="w-4 h-4 text-accent" />
            <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary">Scientific Bibliography</h3>
          </div>
          <ol className="list-decimal pl-5 text-[10px] text-text-secondary space-y-1.5 leading-relaxed">
            <li>Slutsky I, et al. Enhancement of learning and memory by elevating brain magnesium. <i>Neuron. 2010 Jan 28;65(2):165-77.</i></li>
            <li>Yoshino J, et al. Nicotinamide Mononucleotide (NMN) supplementation increases muscle insulin sensitivity in prediabetic women. <i>Science. 2021 Jun 11;372(6547):1224-1229.</i></li>
            <li>Pérez-Guisado J, Jakeman PM. Citrulline malate enhances athletic anaerobic performance and relieves muscle soreness. <i>J Strength Cond Res. 2010 May;24(5):1215-22.</i></li>
            <li>Harris RC, et al. Elevation of creatine in resting and exercised muscle of normal subjects by creatine supplementation. <i>Clin Sci (Colch). 1992 Sep;83(3):367-74.</i></li>
          </ol>
        </section>

        {/* bottom redirect */}
        <div className="pt-6 border-t border-brand-border/40 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-4 hover:bg-accent transition-colors cursor-pointer"
          >
            <span>Explore Clinical Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
