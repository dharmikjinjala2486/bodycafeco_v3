import React from 'react';
import pillPacketImg from '../../assets/Pill_Packet.webp';

export const SustainableRefillSection: React.FC = () => {
  return (
    <section
      className="w-full border-t border-[#2B2B2B] grid grid-cols-1 md:grid-cols-2 md:h-[850px] overflow-hidden select-none"
      style={{
        backgroundColor: '#F4F3FB',
        backgroundImage: 'radial-gradient(circle at top center, rgba(255,255,255,0.8), rgba(244,243,251,1))'
      }}
    >
      {/* LEFT SIDE: Transparent Product Image */}
      <div className="w-full h-full flex items-center justify-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#2B2B2B]">
        <img
          src={pillPacketImg}
          alt="Sustainable Refill Packaging"
          className="h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[75%] w-auto object-contain pointer-events-none"
        />
      </div>

      {/* RIGHT SIDE: Editorial Content */}
      <div className="w-full h-full flex items-center justify-center p-8 md:p-12 lg:p-16">
        <div className="max-w-[600px] w-full flex flex-col items-center text-center">
          {/* Eyebrow Label & Pill Badge */}
          <div className="flex items-center gap-3.5 mb-8 md:mb-10">
            <span className="text-[12px] font-sans font-medium tracking-[0.18em] text-[#2B2B2B]">
              HELP US TO
            </span>
            <span className="h-[34px] px-4.5 border border-[#2B2B2B] rounded-full flex items-center justify-center text-[12px] font-sans font-semibold tracking-[0.18em] text-[#2B2B2B] leading-none">
              REDUCE WASTE
            </span>
          </div>

          {/* Main Editorial Headline */}
          <h2 className="font-serif font-light text-[40px] md:text-[56px] lg:text-[72px] leading-[0.95] text-[#232323] tracking-[-0.02em] text-pretty">
            Save <span className="italic font-light font-serif">on</span> packaging:
            <br className="hidden md:inline" /> Refill your jar.
          </h2>

          {/* Body Text Paragraph */}
          <p className="font-sans text-[18px] md:text-[20px] lg:text-[24px] font-normal text-[#555555] leading-[1.6] max-w-[500px] mt-8 md:mt-10 text-pretty">
            Reduce packaging waste with our sustainable refill system. Designed for conscious wellness and a more sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SustainableRefillSection;
