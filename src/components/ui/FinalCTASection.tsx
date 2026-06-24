import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import bgImg from '../../assets/product-affirm.webp';

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }
};

export const FinalCTASection: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[900px] overflow-hidden flex items-center justify-center select-none">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={bgImg}
          alt="Inspirational Wellness"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dreamy Pastel Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
      />

      {/* Centered Content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-[1200px] w-full"
      >
        {/* Main Headline */}
        <h2 className="font-serif font-light text-[60px] md:text-[110px] lg:text-[170px] leading-[0.9] text-white tracking-[-0.02em] text-pretty">
          You are <span className="italic font-light font-serif">unstoppable</span>
        </h2>

        {/* Subtitle */}
        <p className="font-serif font-light italic text-[22px] md:text-[34px] text-white/90 mt-8 tracking-wide">
          A Wellness Journey by Body Cafe Co.
        </p>

        {/* CTA Button */}
        <div className="mt-12">
          <button
            className="h-[60px] md:h-[72px] min-w-[260px] md:min-w-[300px] rounded-full bg-white pl-9 pr-3.5 flex items-center justify-between gap-6 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-[0.98] transition-all duration-300"
          >
            <span className="font-sans font-bold text-[18px] tracking-[0.05em] text-[#232323]">
              BEGIN YOUR JOURNEY
            </span>
            <div className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full bg-[#232323] flex items-center justify-center text-white flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTASection;
