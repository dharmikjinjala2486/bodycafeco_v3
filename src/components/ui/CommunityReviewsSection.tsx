import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: number;
  avatar: string;
  text: string;
  name: string;
  country: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80',
    text: '“Body Cafe Co. has completely transformed my daily wellness routine. I feel more energized, focused, and balanced throughout the day. The quality is exceptional and I can genuinely feel the difference.”',
    name: 'DHARMIK J.',
    country: 'INDIA'
  },
  {
    id: 2,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
    text: '“The transparency of the ingredients and the purity of their supplements is unmatched. My cognitive focus and physical recovery have improved significantly since starting their clean formulas.”',
    name: 'SARAH M.',
    country: 'UNITED STATES'
  },
  {
    id: 3,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
    text: '“I love the sustainable refill model. It is rare to find a brand that prioritizes both high-potency science and conscious environmental footprint. The packaging is gorgeous, too.”',
    name: 'OLIVER K.',
    country: 'GERMANY'
  },
  {
    id: 4,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
    text: '“Their formulations are clinically backed and it shows. No fillers, no artificial coloring, just clean science. This is exactly what the modern wellness industry has been missing.”',
    name: 'ELENA R.',
    country: 'SPAIN'
  }
];

export const CommunityReviewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const leftIndex = (activeIndex - 1 + reviewsData.length) % reviewsData.length;
  const centerIndex = activeIndex;
  const rightIndex = (activeIndex + 1) % reviewsData.length;

  return (
    <section
      className="w-full py-[140px] px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: '#F3F4FF',
        backgroundImage: 'radial-gradient(circle at top center, rgba(255,255,255,0.85), rgba(243,244,255,1))'
      }}
    >
      {/* Editorial Heading: scroll entry fade-up */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col items-center text-center leading-[1.05] tracking-tight mb-12 select-none"
      >
        <span className="font-serif font-light text-[40px] md:text-[56px] lg:text-[72px] text-[#232323]">
          Hear from the
        </span>
        <span className="font-sans font-semibold text-[40px] md:text-[56px] lg:text-[72px] text-[#232323]">
          Body Cafe Co. community.
        </span>
      </motion.div>

      {/* Reviewer Avatars: small -> large -> small, scroll entry fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        className="w-full max-w-[800px] flex items-center justify-center gap-6 md:gap-10 my-10 select-none"
      >
        {/* Left Side Avatar */}
        <div
          onClick={handlePrev}
          className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden border-[3px] border-white/80 cursor-pointer flex-shrink-0 transition-opacity duration-300 hover:opacity-90"
        >
          <img
            src={reviewsData[leftIndex].avatar}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Avatar */}
        <div
          className="w-[140px] h-[140px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden border-[3px] border-white/80 flex-shrink-0"
        >
          <img
            src={reviewsData[centerIndex].avatar}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Avatar */}
        <div
          onClick={handleNext}
          className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden border-[3px] border-white/80 cursor-pointer flex-shrink-0 transition-opacity duration-300 hover:opacity-90"
        >
          <img
            src={reviewsData[rightIndex].avatar}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Testimonial Text & Author: scroll entry fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        className="w-full max-w-[1100px] flex flex-col items-center min-h-[380px] md:min-h-[300px]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col items-center w-full"
          >
            {/* Review Quote */}
            <p className="font-sans text-[28px] md:text-[48px] lg:text-[72px] font-medium leading-[1.1] text-[#232323] text-center text-pretty">
              {reviewsData[activeIndex].text}
            </p>

            {/* Reviewer Name */}
            <span className="font-sans text-[18px] md:text-[22px] font-bold text-[#232323] tracking-[0.08em] uppercase mt-8 md:mt-10">
              {reviewsData[activeIndex].name} – {reviewsData[activeIndex].country}
            </span>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Navigation Buttons: scroll entry fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
        className="flex items-center gap-4 mt-10 md:mt-12 select-none"
      >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="w-[60px] h-[60px] rounded-full bg-white border border-black/[0.08] flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
          aria-label="Previous review"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#232323"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-[60px] h-[60px] rounded-full bg-white border border-black/[0.08] flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
          aria-label="Next review"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#232323"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
};

export default CommunityReviewsSection;
