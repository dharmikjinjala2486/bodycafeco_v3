import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import pillImage from '../../assets/Pill.png';
import openedPillImage from '../../assets/Opened Pill.webp';

interface CapsuleScrollSectionProps {
  slug: string;
}

interface ScrollContent {
  heading: string;
  paragraph: string;
  benefits: { icon: string; title: string; desc: string }[];
}

const scrollStorytellingData: Record<string, ScrollContent> = {
  'omega-3-fish-oil': {
    heading: "The Marine Synergy.",
    paragraph: "A pure, ultra-concentrated marine lipid complex harvested from sustainable deep-sea reserves. Molecularly distilled to shield cellular structures and enhance cardiovascular resilience.",
    benefits: [
      { icon: "🧠", title: "Cognitive Defense", desc: "Supports neural membrane fluidity and cognitive longevity." },
      { icon: "❤️", title: "Cardio Integrity", desc: "Promotes vascular elasticity and optimal lipid metrics." },
      { icon: "💧", title: "Absolute Purity", desc: "Exceeds clinical standards for heavy metal filtration." }
    ]
  },
  'creatine-monohydrate': {
    heading: "The Ultimate Superfood.",
    paragraph: "A clean, micro-milled performance catalyst engineered to accelerate ATP resynthesis, maximize explosive power, and support neuromuscular resilience during intense cellular workload.",
    benefits: [
      { icon: "⚡", title: "ATP Resynthesis", desc: "Replenishes cellular energy reserves in real-time." },
      { icon: "💪", title: "Cellular Hydration", desc: "Promotes muscle cell volumization and protein synthesis." },
      { icon: "🔬", title: "200-Mesh Purity", desc: "Micro-milled to maximize instant biological absorption." }
    ]
  },
  'vitamin-d3-k2': {
    heading: "The Skeletal Synergy.",
    paragraph: "A bioactive liposomal matrix that coordinates calcium distribution, routing it directly into bone tissue while protecting vascular walls from calcium build-up.",
    benefits: [
      { icon: "🦴", title: "Calcium Routing", desc: "Directs calcium to bones, preventing arterial calcification." },
      { icon: "🛡️", title: "Immune Response", desc: "Modulates immune cell pathways for baseline system defense." },
      { icon: "☀️", title: "Liposomal Delivery", desc: "Encapsulated in lipids to survive gastric passages." }
    ]
  },
  'nootropic-brain-booster': {
    heading: "The Cognitive Stack.",
    paragraph: "A clinically dosed synergy of Alpha-GPC and adaptogenic extracts, designed to cross the blood-brain barrier and sustain clean, jitter-free flow state focus.",
    benefits: [
      { icon: "🎯", title: "Flow State Focus", desc: "Promotes alpha brainwave activity without caffeine crash." },
      { icon: "🧠", title: "Neuro Protection", desc: "Supports acetylcholine levels for synaptic density." },
      { icon: "🌱", title: "Adaptogenic Shield", desc: "Buffers stress-induced cognitive fatigue and brain fog." }
    ]
  },
  'longevity-complex': {
    heading: "The Cellular Activator.",
    paragraph: "An advanced longevity stack combining ultra-pure NMN and Trans-Resveratrol to stimulate sirtuin pathways and optimize cellular NAD+ levels.",
    benefits: [
      { icon: "🧬", title: "Sirtuin Activation", desc: "Mimics caloric restriction pathways to repair cellular DNA." },
      { icon: "🔋", title: "NAD+ Precursor", desc: "Restores juvenile cellular energy metrics at a mitochondrial level." },
      { icon: "🛡️", title: "Mito Shield", desc: "Neutralizes oxidative stress to prevent accelerated decay." }
    ]
  },
  'magnesium-l-threonate': {
    heading: "The Neuro Magnesium.",
    paragraph: "The only form of magnesium validated to effectively cross the blood-brain barrier, reinforcing synaptic connections and promoting deep, restorative sleep.",
    benefits: [
      { icon: "🌌", title: "BBB Penetration", desc: "Elevates magnesium levels in cerebrospinal fluid." },
      { icon: "🧠", title: "Synapse Density", desc: "Supports structural density of brain connections." },
      { icon: "💤", title: "Restorative Sleep", desc: "Calms the central nervous system for deep neurological recovery." }
    ]
  },
  'hydrolyzed-collagen-peptides': {
    heading: "The Structural Matrix.",
    paragraph: "Grass-fed Type I & III peptides enzymatically cleaved to the perfect molecular weight for rapid tissue integration and cellular replenishment.",
    benefits: [
      { icon: "✨", title: "Dermal Elasticity", desc: "Stimulates natural collagen synthesis in skin layers." },
      { icon: "🦴", title: "Joint Lubrication", desc: "Supports cartilage matrix strength and recovery." },
      { icon: "🐄", title: "Grass-Fed Purity", desc: "Ethically sourced, hormone-free clean peptides." }
    ]
  },
  'pre-workout-ignition': {
    heading: "The Energy Catalyst.",
    paragraph: "A clinical vaso-expansion stack that maximizes oxygen delivery, delays muscular fatigue, and maintains razor-sharp focus during intense training.",
    benefits: [
      { icon: "🔥", title: "Nitric Oxide Flow", desc: "Promotes extreme vascular expansion and muscle pump." },
      { icon: "🫁", title: "Endurance Buffer", desc: "Helps buffer lactic acid accumulation during workload." },
      { icon: "☕", title: "Clean Alertness", desc: "Sustained clean energy from natural green coffee extracts." }
    ]
  }
};

const defaultContent: ScrollContent = {
  heading: "The Ultimate Superfood.",
  paragraph: "Our clinical-grade formulation delivers maximum bioavailability and purity, meticulously engineered to optimize cellular health, enhance cognitive endurance, and fuel daily performance.",
  benefits: [
    { icon: "🔬", title: "Clinical Purity", desc: "Molecularly verified for maximum potency and safety." },
    { icon: "⚡", title: "Bioavailable Matrix", desc: "Optimized absorption pathways for rapid cellular uptake." },
    { icon: "🛡️", title: "Defensive Synergy", desc: "Supports long-term biological resilience and vitality." }
  ]
};

export const CapsuleScrollSection: React.FC<CapsuleScrollSectionProps> = ({ slug }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const content = useMemo(() => {
    return scrollStorytellingData[slug] || defaultContent;
  }, [slug]);

  // Track scroll progress through the 280vh section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Apply smoothing to the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
    mass: 0.5,
    restDelta: 0.001
  });

  // --- Animation Transformations ---

  // 1. Closed Capsule (Wrapper)
  const capsuleScale = useTransform(smoothProgress, [0, 0.3], [1, 0.9]);
  const capsuleRotate = useTransform(smoothProgress, [0, 0.3], [0, -15]);
  const capsuleY = useTransform(smoothProgress, [0, 0.3], [0, -60]);
  const closedCapsuleOpacity = useTransform(smoothProgress, [0.55, 0.72], [1, 0]);

  // 2. Closed Capsule Halves (Splitting)
  const topShellY = useTransform(smoothProgress, [0.25, 0.6], [0, -180]);
  const topShellRotate = useTransform(smoothProgress, [0.25, 0.6], [0, 20]);
  const bottomShellY = useTransform(smoothProgress, [0.25, 0.6], [0, 40]);

  // 3. Ingredient Sphere
  const sphereOpacity = useTransform(smoothProgress, [0.32, 0.52, 0.65, 0.72], [0, 1, 1, 0]);
  const sphereScale = useTransform(smoothProgress, [0.32, 0.6], [0.6, 1]);
  const sphereY = useTransform(smoothProgress, [0.32, 0.6], [120, -50]);

  // 4. Soft Glow Behind Sphere
  const glowOpacity = useTransform(smoothProgress, [0.32, 0.6, 0.75], [0, 0.8, 0]);

  // 5. Final Opened Composition
  const openedCapsuleOpacity = useTransform(smoothProgress, [0.58, 0.78], [0, 1]);

  // 6. Particles Opacity
  const particlesOpacity = useTransform(smoothProgress, [0.5, 0.75], [0, 1]);

  // --- Left Content Transformations ---
  const headingOpacity = useTransform(smoothProgress, [0.15, 0.35], [0, 1]);
  const headingY = useTransform(smoothProgress, [0.15, 0.35], [30, 0]);

  const paragraphOpacity = useTransform(smoothProgress, [0.35, 0.55], [0, 1]);
  const paragraphY = useTransform(smoothProgress, [0.35, 0.55], [30, 0]);

  const benefit1Opacity = useTransform(smoothProgress, [0.5, 0.65], [0, 1]);
  const benefit1Y = useTransform(smoothProgress, [0.5, 0.65], [20, 0]);

  const benefit2Opacity = useTransform(smoothProgress, [0.6, 0.75], [0, 1]);
  const benefit2Y = useTransform(smoothProgress, [0.6, 0.75], [20, 0]);

  const benefit3Opacity = useTransform(smoothProgress, [0.7, 0.85], [0, 1]);
  const benefit3Y = useTransform(smoothProgress, [0.7, 0.85], [20, 0]);

  // Continuous micro-floating offsets for particle coordinates
  const particles = [
    { x: -90, y: -110, size: 5, duration: 6 },
    { x: 100, y: -130, size: 7, duration: 8 },
    { x: -70, y: 90, size: 6, duration: 7 },
    { x: 120, y: 70, size: 4, duration: 5 },
    { x: -120, y: 10, size: 5, duration: 9 },
    { x: 70, y: -50, size: 6, duration: 6.5 }
  ];

  return (
    <div ref={sectionRef} className="relative w-full h-[280vh] bg-[#F3F1F8]">
      {/* Sticky Content Window */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-24 py-12 lg:py-0">
        
        {/* Left Side: Editorial Content */}
        <div className="w-full lg:w-[48%] flex flex-col justify-center order-2 lg:order-1 text-left select-none pt-4 lg:pt-0">
          <motion.h2 
            style={{ opacity: headingOpacity, y: headingY }}
            className="font-serif font-light text-[40px] sm:text-[52px] md:text-[62px] text-[#1D1D1F] leading-[1.05] tracking-tight mb-5"
          >
            {content.heading}
          </motion.h2>

          <motion.p
            style={{ opacity: paragraphOpacity, y: paragraphY }}
            className="font-sans font-light text-[16px] sm:text-[18px] text-[#4E4E52] leading-relaxed max-w-[460px] mb-8"
          >
            {content.paragraph}
          </motion.p>

          <div className="space-y-5 max-w-[440px]">
            {content.benefits.map((b, i) => {
              const opacity = i === 0 ? benefit1Opacity : i === 1 ? benefit2Opacity : benefit3Opacity;
              const y = i === 0 ? benefit1Y : i === 1 ? benefit2Y : benefit3Y;

              return (
                <motion.div
                  key={i}
                  style={{ opacity, y }}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl mt-0.5 select-none">{b.icon}</span>
                  <div>
                    <h4 className="font-sans font-semibold text-[15px] sm:text-[16px] text-[#1D1D1F] tracking-wide">
                      {b.title}
                    </h4>
                    <p className="font-sans font-light text-[13px] sm:text-[14px] text-[#5C5C60] leading-normal mt-0.5">
                      {b.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Animated Capsule Visualization */}
        <div className="w-full lg:w-[50%] h-[40vh] sm:h-[45vh] lg:h-full flex items-center justify-center order-1 lg:order-2 relative select-none">
          
          {/* Dynamic Glow Element behind the capsule */}
          <motion.div
            style={{ opacity: glowOpacity }}
            className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-[#E5DDF5] blur-[80px] z-0 pointer-events-none"
          />

          {/* Capsule Scale/Rotate Wrapper */}
          <motion.div
            style={{
              scale: capsuleScale,
              rotate: capsuleRotate,
              y: capsuleY,
              opacity: closedCapsuleOpacity
            }}
            className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] relative z-10 flex items-center justify-center pointer-events-none"
          >
            {/* Top Shell Halves of Closed Capsule (Pill.png) */}
            <motion.div
              style={{
                y: topShellY,
                rotate: topShellRotate,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <img
                src={pillImage}
                alt=""
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Bottom Shell Halves of Closed Capsule (Pill.png) */}
            <motion.div
              style={{
                y: bottomShellY,
                clipPath: 'polygon(0 0, 0 100%, 100% 100%)'
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <img
                src={pillImage}
                alt=""
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Individual Active Ingredient Sphere (Clipped from Opened Pill.webp) */}
          <motion.div
            style={{
              opacity: sphereOpacity,
              scale: sphereScale,
              y: sphereY
            }}
            className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] absolute z-20 pointer-events-none flex items-center justify-center"
          >
            {/* Circular Clip to Extract the Main Floating Sphere on the Left of Opened Pill.webp */}
            <div
              style={{
                clipPath: 'circle(14% at 22.5% 38.5%)',
                transform: 'scale(3.5) translate(27.5%, 11.5%)' // Scale and shift to center the sphere in the container
              }}
              className="w-full h-full absolute"
            >
              <img
                src={openedPillImage}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Final Opened Composition (Full Opened Pill.webp) */}
          <motion.div
            style={{
              opacity: openedCapsuleOpacity
            }}
            className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] absolute z-15 pointer-events-none flex items-center justify-center"
          >
            <img
              src={openedPillImage}
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Floating Scientific Particles */}
          <motion.div
            style={{ opacity: particlesOpacity }}
            className="absolute inset-0 w-full h-full pointer-events-none z-30 flex items-center justify-center"
          >
            {particles.map((p, idx) => (
              <motion.div
                key={idx}
                animate={{
                  x: [p.x, p.x + (idx % 2 === 0 ? 8 : -8), p.x],
                  y: [p.y, p.y + (idx % 2 === 0 ? -12 : 12), p.y]
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  width: p.size,
                  height: p.size,
                  position: 'absolute'
                }}
                className="rounded-full bg-[#8E7BB0]/30 shadow-[0_0_8px_rgba(142,123,176,0.5)] border border-[#8E7BB0]/10"
              />
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};
