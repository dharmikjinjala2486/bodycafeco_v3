import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// @ts-expect-error - Vite handles m4v files as string URLs
import videoFile from '../../assets/Video.m4v';

export const AffirmationVideoSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Setup parallax scroll logic using Framer Motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Shift video slightly slower to create the cinematic parallax effect.
  // The video container will be 116% height, shifted by -8% to avoid gaps.
  const videoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={sectionRef}
      className="w-full relative overflow-hidden flex items-center justify-center select-none"
      style={{ height: '100vh', minHeight: '850px' }}
    >
      {/* Background Video with Cinematic Parallax */}
      <motion.div
        style={{ y: videoY }}
        className="absolute inset-0 w-full h-[116%] -top-[8%] z-0 pointer-events-none"
      >
        <video
          src={videoFile}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Overlay for readability */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'rgba(0, 0, 0, 0.25)' }}
      />

      {/* Centered Content with Entry Fade-in (1.2s duration) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 max-w-[1000px] px-6 text-center flex flex-col items-center justify-center"
      >
        {/* Small Title */}
        <h3
          className="text-[32px] md:text-[44px] lg:text-[56px] font-light text-white mb-10 leading-none"
          style={{ fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif" }}
        >
          Affirm.
        </h3>

        {/* Main Affirmation Text */}
        <p
          className="text-[30px] md:text-[52px] lg:text-[68px] font-medium text-white leading-[1.15] tracking-wide text-pretty"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
        >
          I am healthy. I am strong. I am energized. I am focused. I am resilient. I am balanced. I am confident. I am thriving. I am becoming my best self every day.
        </p>
      </motion.div>
    </div>
  );
};

export default AffirmationVideoSection;
