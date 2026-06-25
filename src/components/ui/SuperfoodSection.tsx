import React, { useEffect, useRef, useCallback } from 'react';

// Icon assets from src/assets/Icons/
import scienceIcon from '../../assets/Icons/gmo-icon.webp';
import thirdPartyIcon from '../../assets/Icons/canada-icon.webp';
import madeInIndiaIcon from '../../assets/Icons/usa-icon.webp';
import clinicallyIcon from '../../assets/Icons/gluten-icon.webp';
import absorptionIcon from '../../assets/Icons/vegan.webp';
import cleanIcon from '../../assets/Icons/preservatives-icon.webp';

// ─── Frame constants ──────────────────────────────────────────────────────────
const TOTAL_FRAMES = 14;

/** Zero-pad to 3 digits: 1 → "001" */
const pad = (n: number) => String(n).padStart(3, '0');

/** Public-folder URL for superfood frame i (1-based) */
const frameUrl = (i: number) => `/frames/superfood/ezgif-frame-${pad(i)}.jpg`;

// ─── Easing ───────────────────────────────────────────────────────────────────
/** Cubic ease-in-out: slow start, fast middle, slow end */
const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// ─── Benefit item sub-component ───────────────────────────────────────────────
interface BenefitItemProps {
  icon: string;
  label: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, label }) => (
  <div className="flex items-center gap-[14px]">
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
    <span
      className="font-sans text-[11px] font-semibold tracking-[0.12em] text-[#2E2E36] uppercase leading-tight"
      style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
    >
      {label}
    </span>
  </div>
);

const benefits = [
  { icon: scienceIcon,     label: 'SCIENCE BACKED'     },
  { icon: clinicallyIcon,  label: 'CLINICALLY STUDIED'  },
  { icon: thirdPartyIcon,  label: 'THIRD-PARTY TESTED'  },
  { icon: absorptionIcon,  label: 'HIGH ABSORPTION'     },
  { icon: madeInIndiaIcon, label: 'MADE IN INDIA'       },
  { icon: cleanIcon,       label: 'CLEAN FORMULATION'   },
];

// ─── Main component ───────────────────────────────────────────────────────────
export const SuperfoodSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);

  /** Preloaded Image objects, index 0 = frame 1 */
  const frameImgs = useRef<HTMLImageElement[]>([]);

  /** The last integer frame index drawn to the canvas */
  const paintedIdx = useRef(-1);

  /** The "raw" 0→1 progress driven purely by scroll position */
  const scrollProgress = useRef(0);

  /** The "display" progress that smoothly lerps toward scrollProgress each rAF tick */
  const displayProgress = useRef(0);

  /** Whether the lerp rAF loop is currently running */
  const loopRunning = useRef(false);

  /** rAF token for the lerp loop */
  const rafHandle = useRef(0);

  /** Guard: prevent double-preload */
  const didPreload = useRef(false);

  // ── Canvas sizing ─────────────────────────────────────────────────────────────
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { width, height } = canvas.getBoundingClientRect();
    const w = Math.round(width);
    const h = Math.round(height);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width  = w;
      canvas.height = h;
      if (paintedIdx.current >= 0) drawFrame(paintedIdx.current);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Draw one frame with object-cover centring ─────────────────────────────────
  const drawFrame = useCallback((idx: number) => {
    const img    = frameImgs.current[idx];
    const canvas = canvasRef.current;
    if (!canvas || !img?.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // object-cover: scale so image fills canvas, clip the excess, keep centred
    const scale = Math.max(cw / iw, ch / ih);
    const srcW  = cw / scale;
    const srcH  = ch / scale;
    const srcX  = (iw - srcW) / 2;
    const srcY  = (ih - srcH) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, cw, ch);
    paintedIdx.current = idx;
  }, []);

  // ── Preload all frames eagerly ────────────────────────────────────────────────
  const preload = useCallback(() => {
    if (didPreload.current) return;
    didPreload.current = true;

    frameImgs.current = new Array(TOTAL_FRAMES);
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = () => {
        if (i === 0 && paintedIdx.current < 0) {
          resizeCanvas();
          drawFrame(0);
        }
        if (i === paintedIdx.current) drawFrame(i);
      };
      img.src = frameUrl(i + 1);
      frameImgs.current[i] = img;
    }
  }, [drawFrame, resizeCanvas]);

  // ── Continuous lerp rAF loop ──────────────────────────────────────────────────
  //
  // This loop runs every animation frame and smoothly "chases" the scroll-driven
  // target. Because we lerp the float progress (not the integer frame index), the
  // transition between any two frames is interpolated at sub-frame granularity,
  // giving a perfectly fluid, jitter-free feel regardless of scroll speed.
  //
  const startLoop = useCallback(() => {
    if (loopRunning.current) return;
    loopRunning.current = true;

    const LERP_SPEED = 0.18; // 0–1: higher = snappier; 0.18 = smooth but responsive

    const tick = () => {
      const target  = scrollProgress.current;
      const current = displayProgress.current;
      const delta   = target - current;

      // Stop when close enough to avoid burning CPU when nothing is animating
      if (Math.abs(delta) < 0.0005) {
        displayProgress.current = target;
        loopRunning.current = false;
        // Paint the exact target frame one last time
        const easedFinal = easeInOutCubic(Math.max(0, Math.min(1, target)));
        const finalIdx   = Math.min(TOTAL_FRAMES - 1, Math.round(easedFinal * (TOTAL_FRAMES - 1)));
        drawFrame(finalIdx);
        return; // exit loop
      }

      // Lerp displayProgress toward target
      displayProgress.current = current + delta * LERP_SPEED;

      // Apply easing to convert continuous display progress → frame index
      const easedP   = easeInOutCubic(Math.max(0, Math.min(1, displayProgress.current)));
      const frameIdx = Math.min(TOTAL_FRAMES - 1, Math.round(easedP * (TOTAL_FRAMES - 1)));

      // Only redraw when the index actually changes (avoids redundant canvas ops)
      if (frameIdx !== paintedIdx.current) {
        drawFrame(frameIdx);
      }

      rafHandle.current = requestAnimationFrame(tick);
    };

    rafHandle.current = requestAnimationFrame(tick);
  }, [drawFrame]);

  // ── Scroll handler ────────────────────────────────────────────────────────────
  //
  // THREE-ZONE MODEL (section progress = how far section has scrolled into view):
  //
  //   sectionProgress = (viewH - rect.top) / sectionH
  //     0   → section top just hits bottom of viewport (section fully below)
  //     1   → section top has moved one full section height above viewport bottom
  //
  //   Zone A  0%  – 25%  → hold frame 0  (static entry)
  //   Zone B  25% – 50%  → animate all 14 frames (cinematic reveal)
  //   Zone C  50% – 100% → hold last frame (pinned exit)
  //
  //   Inside Zone B the animation is compressed into only 25% of section height
  //   ≈ 200px of scroll for 14 frames → ~14px per frame — fast, Apple-style.
  //
  const ANIM_START = 0.25; // section progress where animation begins
  const ANIM_END   = 0.50; // section progress where animation ends

  const onScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect     = section.getBoundingClientRect();
    const viewH    = window.innerHeight;
    const sectionH = rect.height;

    // Normalised section progress: how far through the section the user has scrolled
    // 0 = section just entered from the bottom, 1 = section scrolled one full height
    const sectionProgress = (viewH - rect.top) / sectionH;

    let target: number;
    if (sectionProgress <= ANIM_START) {
      // Zone A: static — hold on frame 0
      target = 0;
    } else if (sectionProgress >= ANIM_END) {
      // Zone C: pinned — hold on last frame
      target = 1;
    } else {
      // Zone B: animate — map 25%→50% section progress to 0→1 anim progress
      target = (sectionProgress - ANIM_START) / (ANIM_END - ANIM_START);
    }

    if (target === scrollProgress.current) return;

    scrollProgress.current = target;

    // Trigger preload on first scroll interaction near the section
    if (!didPreload.current) preload();

    // Wake up the lerp loop
    startLoop();
  }, [preload, startLoop]);

  // ── Effects ────────────────────────────────────────────────────────────────────
  useEffect(() => {
    // Begin preloading when section is one full viewport away
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) preload(); },
      { rootMargin: '100% 0px 0px 0px', threshold: 0 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);

    window.addEventListener('scroll', onScroll, { passive: true });

    const ro = new ResizeObserver(resizeCanvas);
    if (canvasRef.current) ro.observe(canvasRef.current);

    resizeCanvas();
    onScroll(); // evaluate on mount if page already scrolled

    return () => {
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafHandle.current);
    };
  }, [onScroll, preload, resizeCanvas]);

  // ── Render ─────────────────────────────────────────────────────────────────────
  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F4F3F9] border-t border-[#2E2E36] flex flex-col md:flex-row items-stretch relative overflow-hidden"
      style={{ height: '800px' }}
    >
      {/* Thin vertical divider in center (desktop only) */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-[#2E2E36] z-10" />

      {/* ── LEFT COLUMN: static — heading, description, benefits ── */}
      <div className="w-full md:w-1/2 flex flex-col justify-center pl-6 md:pl-[80px] pr-6 md:pr-[60px] py-12 md:py-0 box-border z-0">
        <h2
          className="font-serif text-[42px] md:text-[82px] font-light text-[#2E2E36] leading-[0.95] tracking-[-0.02em] mb-6 md:mb-[36px] p-0"
          style={{ fontFamily: "'Cormorant Garamond', 'EB Garamond', 'Playfair Display', Georgia, serif" }}
        >
          The Ultimate Superfood.
        </h2>

        <p
          className="font-sans text-[18px] md:text-[28px] leading-[1.6] text-[#4D4D58] max-w-[650px] mb-8 md:mb-[52px] font-normal"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
        >
          Our formulation provides vital nutrition for your daily lifestyle and optimal health.
          Crafted using science-backed ingredients that support long-term wellness, performance,
          and cellular health.
        </p>

        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[28px] max-w-[520px]">
          {benefits.map((b) => (
            <BenefitItem key={b.label} icon={b.icon} label={b.label} />
          ))}
        </div>
      </div>

      {/* ── RIGHT COLUMN: scroll-driven canvas frame animation ── */}
      <div
        className="w-full md:w-1/2 h-full overflow-hidden select-none z-0"
        style={{ minHeight: '340px' }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100%', display: 'block' }}
          aria-label="Superfood ingredient scroll animation"
        />
      </div>
    </section>
  );
};

export default SuperfoodSection;
