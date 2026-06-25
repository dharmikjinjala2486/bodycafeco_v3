import React, { useEffect, useRef, useCallback } from 'react';

// ─── Frame constants ───────────────────────────────────────────────────────────
const TOTAL_FRAMES = 100;

/** Zero-pad to 3 digits: 1 → "001" */
const pad = (n: number) => String(n).padStart(3, '0');

/** Public-folder URL for frame i (1-based) */
const frameUrl = (i: number) => `/frames/cropped/frame${pad(i)}.png`;

// ─── Component ────────────────────────────────────────────────────────────────
export const SustainableRefillSection: React.FC = () => {
  const sectionRef  = useRef<HTMLElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);

  /** Preloaded Image objects, index 0 = frame 1 */
  const frameImgs   = useRef<HTMLImageElement[]>([]);
  /** Index currently painted on the canvas (0-based), -1 = nothing yet */
  const paintedIdx  = useRef(-1);
  /** rAF token */
  const rafHandle   = useRef(0);
  /** Guard: prevent double-preload */
  const didPreload  = useRef(false);

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
      // Repaint current frame after dimension change
      if (paintedIdx.current >= 0) drawFrame(paintedIdx.current);
    }
  // drawFrame defined below — stable because it never changes deps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Draw one frame onto the canvas (object-cover: fills edge-to-edge, centred) ─
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

    // Cover: scale so the image fills the canvas in both dimensions.
    // The larger scale factor wins — excess is clipped, nothing is distorted.
    const scale = Math.max(cw / iw, ch / ih);

    // Source rect: the portion of the original image that maps onto the canvas.
    // We centre-clip, so the bottle stays centred and only the surplus is hidden.
    const srcW = cw / scale;          // how many source px wide the canvas shows
    const srcH = ch / scale;          // how many source px tall the canvas shows
    const srcX = (iw - srcW) / 2;    // centre-align horizontally
    const srcY = (ih - srcH) / 2;    // centre-align vertically

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, cw, ch);
    paintedIdx.current = idx;
  }, []);

  // ── Preload all frames eagerly once triggered ─────────────────────────────────
  const preload = useCallback(() => {
    if (didPreload.current) return;
    didPreload.current = true;

    frameImgs.current = new Array(TOTAL_FRAMES);
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = () => {
        // As soon as frame 0 loads, draw it so the canvas isn't blank
        if (i === 0 && paintedIdx.current < 0) {
          resizeCanvas();
          drawFrame(0);
        }
        // If this is the frame we're currently supposed to show, repaint it
        // (handles the case where scroll moved ahead of loading)
        if (i === paintedIdx.current) drawFrame(i);
      };
      img.src = frameUrl(i + 1);
      frameImgs.current[i] = img;
    }
  }, [drawFrame, resizeCanvas]);

  // ── Scroll handler: map page position → frame index ──────────────────────────
  //
  // TIMELINE (using getBoundingClientRect, which is live):
  //
  //   rect.top = +0.75 * viewH  → progress 0, frame 0
  //     (section enters from bottom — user is still in the Affirm section)
  //
  //   rect.top = -(sectionH * 0.3)  → progress 1, frame 99
  //     (user has scrolled 30% through the Reduce Waste section)
  //
  // Total travel distance = 0.75 * viewH + 0.3 * sectionH
  // progress = (0.75 * viewH - rect.top) / totalTravel
  //
  const onScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rect    = section.getBoundingClientRect();
    const viewH   = window.innerHeight;
    const sectionH = rect.height;

    const startEdge  =  viewH * 0.75;          // rect.top value where anim starts
    const endEdge    = -(sectionH * 0.30);      // rect.top value where anim ends
    const totalTravel = startEdge - endEdge;    // positive number

    const progress = Math.max(0, Math.min(1, (startEdge - rect.top) / totalTravel));
    const targetIdx = Math.min(TOTAL_FRAMES - 1, Math.round(progress * (TOTAL_FRAMES - 1)));

    if (targetIdx === paintedIdx.current) return;

    // Trigger preload the moment we first need frames
    if (!didPreload.current) preload();

    cancelAnimationFrame(rafHandle.current);
    rafHandle.current = requestAnimationFrame(() => drawFrame(targetIdx));
  }, [drawFrame, preload]);

  // ── Effects ───────────────────────────────────────────────────────────────────
  useEffect(() => {
    // Start preloading early — when section is within 1 full viewport below
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) preload(); },
      { rootMargin: '100% 0px 0px 0px', threshold: 0 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);

    // Scroll drives everything
    window.addEventListener('scroll', onScroll, { passive: true });

    // Keep canvas pixel-perfect on resize
    const ro = new ResizeObserver(resizeCanvas);
    if (canvasRef.current) ro.observe(canvasRef.current);

    resizeCanvas();
    onScroll(); // evaluate on mount in case page already scrolled

    return () => {
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafHandle.current);
    };
  }, [onScroll, preload, resizeCanvas]);

  // ── Render ────────────────────────────────────────────────────────────────────
  return (
    <section
      ref={sectionRef}
      className="w-full border-t border-[#2B2B2B] grid grid-cols-1 md:grid-cols-2 md:h-[850px] overflow-hidden select-none"
      style={{
        backgroundColor: '#F4F3FB',
        backgroundImage: 'radial-gradient(circle at top center, rgba(255,255,255,0.8), rgba(244,243,251,1))',
      }}
    >
      {/* ── LEFT: Canvas frame animation ── */}
      <div
        className="w-full h-full flex items-center justify-center border-b md:border-b-0 md:border-r border-[#2B2B2B] overflow-hidden"
        style={{ backgroundColor: '#F3DDE8', minHeight: '340px' }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100%', display: 'block' }}
          aria-label="Supplement capsules scroll animation"
        />
      </div>

      {/* ── RIGHT: Editorial content — exactly as before ── */}
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
