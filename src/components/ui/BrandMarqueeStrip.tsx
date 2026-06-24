import React from 'react';


export const BrandMarqueeStrip: React.FC = () => {
  return (
    <div
      className="relative w-full overflow-hidden flex items-center h-[110px] md:h-[160px] lg:h-[220px] select-none border-t border-b border-[#2B2B2B]"
      style={{
        backgroundColor: '#F4F3FB',
        backgroundImage: 'radial-gradient(circle at top center, rgba(255,255,255,0.8), rgba(244,243,251,1))'
      }}
    >
      <style>{`
        @keyframes marquee-horizontal {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 30px;
          padding-right: 30px;
          animation: marquee-horizontal 35s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }
        @media (min-width: 768px) {
          .marquee-track {
            gap: 60px;
            padding-right: 60px;
          }
        }
        @media (min-width: 1024px) {
          .marquee-track {
            gap: 100px;
            padding-right: 100px;
          }
        }
      `}</style>

      {/* Repeated marquee lists for infinite looping */}
      <div className="flex w-max">
        {/* Track 1 */}
        <div className="marquee-track">
          <span className="font-sans font-semibold text-[60px] md:text-[120px] lg:text-[180px] leading-none text-[#232323] uppercase">
            You Need
          </span>
          <img src="/Body Cafe Co logo-01.png" alt="Body Cafe Co. Logo" className="h-[50px] md:h-[90px] lg:h-[130px] w-auto flex-shrink-0" />
          <div className="flex items-center gap-2.5 md:gap-5">
            <span className="font-serif font-light text-[60px] md:text-[120px] lg:text-[180px] leading-none text-[#232323]">
              The Only
            </span>
            <span className="font-sans font-semibold text-[60px] md:text-[120px] lg:text-[180px] leading-none text-[#232323] uppercase">
              Multivitamin
            </span>
          </div>
          <img src="/Body Cafe Co logo-01.png" alt="Body Cafe Co. Logo" className="h-[50px] md:h-[90px] lg:h-[130px] w-auto flex-shrink-0" />
        </div>

        {/* Track 2 */}
        <div className="marquee-track" aria-hidden="true">
          <span className="font-sans font-semibold text-[60px] md:text-[120px] lg:text-[180px] leading-none text-[#232323] uppercase">
            You Need
          </span>
          <img src="/Body Cafe Co logo-01.png" alt="Body Cafe Co. Logo" className="h-[50px] md:h-[90px] lg:h-[130px] w-auto flex-shrink-0" />
          <div className="flex items-center gap-2.5 md:gap-5">
            <span className="font-serif font-light text-[60px] md:text-[120px] lg:text-[180px] leading-none text-[#232323]">
              The Only
            </span>
            <span className="font-sans font-semibold text-[60px] md:text-[120px] lg:text-[180px] leading-none text-[#232323] uppercase">
              Multivitamin
            </span>
          </div>
          <img src="/Body Cafe Co logo-01.png" alt="Body Cafe Co. Logo" className="h-[50px] md:h-[90px] lg:h-[130px] w-auto flex-shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default BrandMarqueeStrip;
