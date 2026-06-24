import React from 'react';

// Icon assets from src/assets/Icons/
import scienceIcon from '../../assets/Icons/gmo-icon.webp';
import thirdPartyIcon from '../../assets/Icons/canada-icon.webp';
import madeInIndiaIcon from '../../assets/Icons/usa-icon.webp';
import clinicallyIcon from '../../assets/Icons/gluten-icon.webp';
import absorptionIcon from '../../assets/Icons/vegan.webp';
import cleanIcon from '../../assets/Icons/preservatives-icon.webp';

// Right-side artwork
import openedPill from '../../assets/Opened Pill.webp';

interface BenefitItemProps {
  icon: string;
  label: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, label }) => (
  <div className="flex items-center gap-[14px]">
    {/* Icon wrapper with custom premium gold filter */}
    <div 
      className="w-[38px] h-[38px] flex-shrink-0 flex items-center justify-center select-none"
      style={{
        filter: 'sepia(0.8) saturate(2.5) hue-rotate(5deg) brightness(0.85) contrast(1.1)'
      }}
    >
      <img
        src={icon}
        alt={label}
        className="w-full h-full object-contain"
        draggable={false}
      />
    </div>
    {/* Uppercase Small Label */}
    <span 
      className="font-sans text-[11px] font-semibold tracking-[0.12em] text-[#2E2E36] uppercase leading-tight"
      style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
    >
      {label}
    </span>
  </div>
);

// Map benefits row-by-row to achieve the exact 2-column visual grid requested:
// Left Column: SCIENCE BACKED, THIRD-PARTY TESTED, MADE IN INDIA
// Right Column: CLINICALLY STUDIED, HIGH ABSORPTION, CLEAN FORMULATION
const benefits = [
  { icon: scienceIcon,     label: 'SCIENCE BACKED' },
  { icon: clinicallyIcon,  label: 'CLINICALLY STUDIED' },
  { icon: thirdPartyIcon,  label: 'THIRD-PARTY TESTED' },
  { icon: absorptionIcon,  label: 'HIGH ABSORPTION' },
  { icon: madeInIndiaIcon, label: 'MADE IN INDIA' },
  { icon: cleanIcon,      label: 'CLEAN FORMULATION' },
];

export const SuperfoodSection: React.FC = () => {
  return (
    <section 
      className="w-full bg-[#F4F3F9] border-t border-[#2E2E36] flex flex-col md:flex-row items-stretch relative overflow-hidden"
      style={{ height: '800px' }}
    >
      {/* Thin vertical divider line in center (only on desktop md+) */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#2E2E36] z-10" />

      {/* LEFT COLUMN: Heading, Description, and Benefits Grid */}
      <div className="w-full md:w-1/2 flex flex-col justify-center pl-6 md:pl-[80px] pr-6 md:pr-[60px] py-12 md:py-0 box-border z-0">
        {/* Heading: Elegant luxury serif similar to Canela */}
        <h2 
          className="font-serif text-[42px] md:text-[82px] font-light text-[#2E2E36] leading-[0.95] tracking-[-0.02em] mb-6 md:mb-[36px] p-0"
          style={{ fontFamily: "'Cormorant Garamond', 'EB Garamond', 'Playfair Display', Georgia, serif" }}
        >
          The Ultimate Superfood.
        </h2>

        {/* Description */}
        <p 
          className="font-sans text-[18px] md:text-[28px] leading-[1.6] text-[#4D4D58] max-w-[650px] mb-8 md:mb-[52px] font-normal"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
        >
          Our formulation provides vital nutrition for your daily lifestyle and optimal health. 
          Crafted using science-backed ingredients that support long-term wellness, performance, 
          and cellular health.
        </p>

        {/* Benefits Grid: 2-Column Grid */}
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[28px] max-w-[520px]">
          {benefits.map((b) => (
            <BenefitItem key={b.label} icon={b.icon} label={b.label} />
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: Supplied artwork image only */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-[40px] overflow-hidden select-none z-0">
        <img
          src={openedPill}
          alt="Body Cafe Co. opened capsule superfood artwork"
          className="w-full h-full object-contain object-center block max-h-[720px]"
          draggable={false}
        />
      </div>
    </section>
  );
};

export default SuperfoodSection;
