import React from 'react';

/**
 * BrandMarqueeStrip
 *
 * Seamless infinite horizontal ticker.
 *
 * Technique:
 *  - One "unit" contains the full desired sequence once.
 *  - We render exactly TWO identical units side-by-side inside a flex row.
 *  - The CSS animation translates the row by exactly -50% (= one unit width),
 *    then resets to 0 — creating a perfectly seamless, gap-free loop.
 *  - All spacing lives as explicit `margin-right` on every child so it is
 *    completely independent of `gap`, `padding`, or track width calculations.
 */

const LOGO_SRC = '/Body Cafe Co logo-01.png';

/** Spacing between every logo / text item (px). */
const GAP = 220; // px – generous enough so logo never touches text

// Inline style helpers (keeps JSX clean)
const gapStyle: React.CSSProperties = { marginRight: GAP, flexShrink: 0 };

const textBase: React.CSSProperties = {
  lineHeight: 1,
  color: '#232323',
  whiteSpace: 'nowrap',
  flexShrink: 0,
};

/** One full sequence: [VITAMIN YOU NEED] → [LOGO] → [THE ONLY MULTIVITAMIN YOU NEED] → [LOGO] */
const MarqueeUnit: React.FC = () => (
  <>
    {/* ── Text block 1 ── */}
    <span
      className="font-sans font-semibold uppercase text-[56px] md:text-[110px] lg:text-[170px]"
      style={{ ...textBase, ...gapStyle }}
    >
      THE ONLY MULTIVITAMIN YOU NEED
    </span>

    {/* ── Logo separator ── */}
    <img
      src={LOGO_SRC}
      alt="Body Cafe Co."
      className="h-[44px] md:h-[80px] lg:h-[120px] w-auto"
      style={{ ...gapStyle, display: 'block' }}
      draggable={false}
    />

    {/* ── Text block 2 ── */}
    <span
      className="font-serif font-light text-[56px] md:text-[110px] lg:text-[170px]"
      style={{ ...textBase, ...gapStyle }}
    >
      The Only Multivitamin
    </span>

    {/* ── Logo separator ── */}
    <img
      src={LOGO_SRC}
      alt="Body Cafe Co."
      className="h-[44px] md:h-[80px] lg:h-[120px] w-auto"
      style={{ ...gapStyle, display: 'block' }}
      draggable={false}
    />
  </>
);

export const BrandMarqueeStrip: React.FC = () => {
  return (
    <div
      className="relative w-full overflow-hidden flex items-center h-[100px] md:h-[150px] lg:h-[210px] select-none border-t border-b border-[#2B2B2B]"
      style={{
        backgroundColor: '#F4F3FB',
        backgroundImage:
          'radial-gradient(circle at top center, rgba(255,255,255,0.8), rgba(244,243,251,1))',
      }}
    >
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-row {
          display: flex;
          align-items: center;
          /* width is determined by content — two units make 200% */
          width: max-content;
          animation: marquee-scroll 40s linear infinite;
          will-change: transform;
        }
        .marquee-row:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/*
        Two identical MarqueeUnit copies placed directly inside one animated row.
        translateX(-50%) moves exactly one unit's width, producing a seamless loop.
      */}
      <div className="marquee-row">
        {/* Unit A */}
        <MarqueeUnit />
        {/* Unit B — invisible duplicate that makes the loop seamless */}
        <MarqueeUnit />
      </div>
    </div>
  );
};

export default BrandMarqueeStrip;
