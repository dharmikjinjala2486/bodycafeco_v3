import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '../../data/products';

// Icon assets from src/assets/Icons/
import canadaIcon from '../../assets/Icons/canada-icon.webp'; // heart
import gmoIcon from '../../assets/Icons/gmo-icon.webp';       // brain
import glutenIcon from '../../assets/Icons/gluten-icon.webp'; // mood
import veganIcon from '../../assets/Icons/vegan.webp';       // energy
import usaIcon from '../../assets/Icons/usa-icon.webp';       // joint
import preservativesIcon from '../../assets/Icons/preservatives-icon.webp'; // immune

interface ExpandableInfoSectionProps {
  product: Product;
}

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="w-full flex flex-col border-b border-[#2E2E36]">
      {/* Header Row: 120px tall, center aligned, dark charcoal, subtle hover */}
      <button
        onClick={onToggle}
        className="w-full h-[120px] flex items-center justify-between text-left px-6 md:px-[80px] bg-transparent hover:bg-[#2E2E36]/[0.02] active:bg-[#2E2E36]/[0.04] transition-colors duration-300 cursor-pointer select-none border-none outline-none"
      >
        <span 
          className="text-[28px] sm:text-[40px] md:text-[64px] font-normal uppercase tracking-wider text-[#2E2E36] leading-none"
          style={{ fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif" }}
        >
          {title}
        </span>
        <span className="text-[24px] sm:text-[36px] md:text-[64px] font-light text-[#2E2E36] leading-none ml-4 transition-transform duration-300">
          {isOpen ? '↑' : '↓'}
        </span>
      </button>

      {/* Expandable Content Container */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.4, delay: 0.1 }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-[80px] pt-4 pb-16 md:pb-[80px] box-border">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Custom high-impact editorial statements mapping for each product
const productDescriptionMap: Record<string, string> = {
  'omega-3-fish-oil': 'A high-concentration marine lipid complex engineered to support cardiovascular integrity and optimize neural performance.',
  'creatine-monohydrate': 'A clinically dosed bio-energetic catalyst designed to maximize cellular work capacity and muscular resilience.',
  'vitamin-d3-k2': 'A highly bioavailable liposomal matrix coordinating skeletal density and peak immune defense.',
  'nootropic-brain-booster': 'An advanced synergistic neural stack formulated to enhance acetylcholine synthesis and induce focused flow states.',
  'longevity-complex': 'A cellular longevity matrix stacking NMN and Trans-Resveratrol to activate sirtuins and optimize healthspan.',
  'magnesium-l-threonate': 'A specialized neuro-magnesium complex validated to cross the blood-brain barrier for enhanced synaptic plasticity.',
  'hydrolyzed-collagen-peptides': 'Grass-fed type I & III collagen peptides enzymatically hydrolyzed for systemic structural support.',
  'pre-workout-ignition': 'A clinical-strength nitric oxide expander and energetic buffer to ignite training intensity.'
};

export const ExpandableInfoSection: React.FC<ExpandableInfoSectionProps> = ({ product }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const editorialDescription = productDescriptionMap[product.slug] || product.shortDescription;

  // Benefits data mapping with specific icons
  const leftColumnBenefits = [
    { icon: canadaIcon, title: 'Heart Health', description: 'Supports cardiovascular wellness and healthy circulation.' },
    { icon: gmoIcon, title: 'Brain Function', description: 'Supports focus, memory, and cognitive performance.' },
    { icon: glutenIcon, title: 'Mood Support', description: 'Helps promote emotional balance and well-being.' },
    { icon: veganIcon, title: 'Energy Production', description: 'Supports cellular energy and daily vitality.' },
  ];

  const rightColumnBenefits = [
    { icon: usaIcon, title: 'Joint Health', description: 'Supports mobility and joint comfort.' },
    { icon: preservativesIcon, title: 'Immune Support', description: 'Supports healthy immune system function.' },
    { icon: glutenIcon, title: 'Stress Management', description: 'Helps maintain a positive mood and stress response.' },
    { icon: veganIcon, title: 'Healthy Aging', description: 'Supports long-term wellness and healthy aging.' },
  ];

  // Standard FAQ items
  const faqItems = [
    {
      q: 'What is the recommended serving size?',
      a: `For ${product.name}, the recommended serving size is ${product.servingSize || 'as noted on the container'}. We suggest following this dosage daily to maintain stable levels in your system.`
    },
    {
      q: 'Can I take this daily?',
      a: 'Yes, this formula is engineered for safe, daily, long-term cellular support. Consistent intake helps optimize wellness results and cellular recovery pathways.'
    },
    {
      q: 'When should I consume this supplement?',
      a: product.howToUse || 'Take daily in the morning with a meal to support optimal absorption and sustain peak vitality levels throughout the day.'
    },
    {
      q: 'Is it suitable for vegetarians?',
      a: product.tags.some(tag => tag.toLowerCase().includes('vegan') || tag.toLowerCase().includes('plant'))
        ? 'Yes, this particular formulation is 100% plant-based and suitable for vegetarians and vegans.'
        : 'Please review the active capsules information. Certain gel formulations utilize high-grade bovine gelatin, while others utilize plant cellulose.'
    },
    {
      q: 'Can it be combined with other supplements?',
      a: 'Absolutely. Our product lineup is built for compatibility and synergy. Stacking these formulas together delivers clean, non-competing support tailored to your lifestyle.'
    },
    {
      q: 'Does it contain artificial additives?',
      a: 'No. We strictly exclude synthetic additives, artificial sweeteners, colors, silicon dioxide, or chemical preservatives from all configurations.'
    },
    {
      q: 'How long before results may be noticed?',
      a: 'Initial cognitive and metabolic enhancements are typically noticed within 7–10 days of consistent daily use, while structural tissue and deep systemic support accumulate over 6–8 weeks.'
    },
    {
      q: 'Who should avoid this product?',
      a: 'Individuals with pre-existing medical conditions, those who are pregnant or nursing, or taking prescription blood thinners should consult their healthcare provider before beginning use.'
    }
  ];

  return (
    <section className="w-full bg-[#F4F3F9] text-[#2E2E36] py-16 md:py-[100px] border-t border-[#2E2E36] flex flex-col items-center">
      {/* Intro Content Container */}
      <div className="w-full max-w-[1400px] px-6 md:px-[80px] box-border mb-12 md:mb-[80px]">
        {/* Outline Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-[#2E2E36] text-[11px] md:text-[14px] font-semibold uppercase tracking-[0.15em] mb-6 select-none">
          PACKED WITH NUTRITION
        </div>
        {/* Large Editorial Description */}
        <h2 
          className="font-serif text-[32px] sm:text-[48px] md:text-[72px] font-normal leading-[1.05] text-[#2E2E36] text-balance"
          style={{ fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif" }}
        >
          {editorialDescription}
        </h2>
      </div>

      {/* Accordion System Container */}
      <div className="w-full border-t border-[#2E2E36] z-0">
        
        {/* Accordion 1: BENEFITS */}
        <AccordionItem
          title="BENEFITS"
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        >
          {/* Organimo 2-Column Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-[80px] gap-y-10 mt-6">
            
            {/* Left Column */}
            <div className="flex flex-col gap-10">
              {leftColumnBenefits.map((item) => (
                <div key={item.title} className="flex gap-6 md:gap-[32px] items-start">
                  {/* Circular Icon Container: 130px, white border, gold icon */}
                  <div
                    className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full border border-white flex-shrink-0 flex items-center justify-center bg-transparent select-none"
                    style={{
                      filter: 'sepia(0.8) saturate(2.5) hue-rotate(5deg) brightness(0.85) contrast(1.1)'
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-[45%] h-[45%] object-contain"
                      draggable={false}
                    />
                  </div>
                  {/* Text Details */}
                  <div className="flex-grow flex flex-col pt-2">
                    <h3 
                      className="font-serif text-[28px] md:text-[40px] font-normal text-[#2E2E36] leading-tight mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="font-sans text-[18px] md:text-[24px] text-[#4D4D58] leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-[10px] cursor-pointer hover:opacity-85 transition-opacity duration-300">
                      <span className="font-sans text-[16px] md:text-[22px] font-medium text-[#2E2E36]">Read more</span>
                      <button className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border border-[#2E2E36]/10 flex items-center justify-center text-[#2E2E36] text-[18px] md:text-[22px] font-light shadow-sm cursor-pointer">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-10">
              {rightColumnBenefits.map((item) => (
                <div key={item.title} className="flex gap-6 md:gap-[32px] items-start">
                  {/* Circular Icon Container */}
                  <div
                    className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full border border-white flex-shrink-0 flex items-center justify-center bg-transparent select-none"
                    style={{
                      filter: 'sepia(0.8) saturate(2.5) hue-rotate(5deg) brightness(0.85) contrast(1.1)'
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-[45%] h-[45%] object-contain"
                      draggable={false}
                    />
                  </div>
                  {/* Text Details */}
                  <div className="flex-grow flex flex-col pt-2">
                    <h3 
                      className="font-serif text-[28px] md:text-[40px] font-normal text-[#2E2E36] leading-tight mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="font-sans text-[18px] md:text-[24px] text-[#4D4D58] leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-[10px] cursor-pointer hover:opacity-85 transition-opacity duration-300">
                      <span className="font-sans text-[16px] md:text-[22px] font-medium text-[#2E2E36]">Read more</span>
                      <button className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border border-[#2E2E36]/10 flex items-center justify-center text-[#2E2E36] text-[18px] md:text-[22px] font-light shadow-sm cursor-pointer">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </AccordionItem>

        {/* Accordion 2: ADDITIONAL INFO */}
        <AccordionItem
          title="ADDITIONAL INFO"
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
        >
          {/* Two Column Additional Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] items-start mt-6">
            
            {/* Left Side */}
            <div className="flex flex-col justify-start">
              <div className="inline-block self-start px-4 py-1.5 rounded-full border border-[#2E2E36] text-[11px] md:text-[14px] font-semibold uppercase tracking-[0.15em] mb-6 select-none">
                SCIENCE-BACKED FORMULATION
              </div>
              <h3 
                className="text-[32px] sm:text-[42px] md:text-[56px] font-normal leading-[1.1] text-[#2E2E36]"
                style={{ fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif" }}
              >
                Clinically studied <span className="font-serif italic font-light">ingredients.</span> Designed for <span className="font-serif italic font-light">long-term wellness.</span>
              </h3>
            </div>

            {/* Right Side: Paragraphs */}
            <div className="max-w-[650px] flex flex-col gap-6 text-[18px] md:text-[24px] leading-[1.8] text-[#4D4D58] font-sans">
              <p>
                Our scientific formulation represents a breakthrough in cellular nourishment and daily energy management. By selecting only clinically validated bioactive compounds, we ensure that every serving delivers optimal synergy for cardiovascular strength, brain health, and metabolic balance.
              </p>
              <p>
                We prioritize absolute transparency and purity. Every batch of Body Cafe Co. supplements undergoes rigorous third-party analytical testing to confirm compound concentrations and verify the absence of heavy metals, fillers, or artificial chemicals. The result is a clean, honest, and high-performance stack you can trust daily.
              </p>
              <p>
                Designed to integrate seamlessly into your morning routine, this formula is engineered for rapid absorption and long-term biological support. We invest in high-end ingredient forms, such as micro-milled and liposomal matrices, to bypass traditional digestive limitations and deliver direct cellular vitality.
              </p>
            </div>

          </div>
        </AccordionItem>

        {/* Accordion 3: FAQs */}
        <AccordionItem
          title="FAQs"
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
        >
          {/* FAQ 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-[80px] gap-y-12 mt-6">
            {faqItems.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 
                  className="font-serif text-[22px] md:text-[36px] font-medium text-[#2E2E36] leading-snug mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif" }}
                >
                  {item.q}
                </h4>
                <p className="font-sans text-[16px] md:text-[24px] text-[#4D4D58] leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </AccordionItem>

      </div>
    </section>
  );
};

export default ExpandableInfoSection;
