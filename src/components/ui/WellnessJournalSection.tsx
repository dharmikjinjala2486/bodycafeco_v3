import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

import blogImg1 from '../../assets/Blog-11_Breaking-Free-From-The-Limits-We-Create-For-Ourselves-scaled-640x420.webp';
import blogImg2 from '../../assets/Blog-12_The-Oceans-Best-Kept-Secret-scaled-640x420.webp';
import blogImg3 from '../../assets/Blog-13_The-Ancient-Healing-Tradition-of-Sea-Moss-and-Bladderwrack_A-Journey-Through-Time-and-Culture-1-scaled-640x420.webp';

interface Article {
  date: string;
  title: string;
  image: string;
}

const articles: Article[] = [
  {
    date: '03.05.25',
    title: 'The Science Behind Better Daily Nutrition',
    image: blogImg1
  },
  {
    date: '05.05.25',
    title: 'Why Consistency Matters More Than Intensity',
    image: blogImg2
  },
  {
    date: '08.05.25',
    title: 'Building Healthy Habits That Last',
    image: blogImg3
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

export const WellnessJournalSection: React.FC = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full border-t border-[#2B2B2B] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:h-[900px] h-auto overflow-hidden"
      style={{
        backgroundColor: '#F4F3FB',
        backgroundImage: 'radial-gradient(circle at top center, rgba(255,255,255,0.8), rgba(244,243,251,1))'
      }}
    >
      {articles.map((article, idx) => (
        <motion.div
          key={idx}
          variants={cardVariants}
          className={`group relative w-full h-[500px] md:h-[600px] lg:h-full flex flex-col justify-between p-10 md:p-12 overflow-hidden border-[#2B2B2B] ${
            idx === 0
              ? 'border-b md:border-r lg:border-b-0'
              : idx === 1
              ? 'border-b md:border-r-0 lg:border-r lg:border-b-0'
              : 'border-b md:border-r-0 lg:border-r-0 lg:border-b-0'
          }`}
        >
          {/* Background Image & washed-out hover effect container */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            {/* Washed-out overlay (active default, fades away on desktop hover) */}
            <div
              className="absolute inset-0 bg-[#F4F4FF]/75 transition-opacity duration-500 ease-in-out lg:opacity-100 group-hover:lg:opacity-0"
            />
          </div>

          {/* TOP CARD CONTENT */}
          <div className="flex flex-col items-start gap-6 z-10 relative">
            {/* Date Badge */}
            <span className="h-[34px] px-4.5 border border-[#2B2B2B] rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center text-[14px] font-sans font-semibold tracking-wider text-[#232323] select-none">
              {article.date}
            </span>

            {/* Title */}
            <h3 className="font-sans font-medium text-[32px] md:text-[44px] lg:text-[56px] leading-[1.05] text-[#232323] max-w-[85%] text-pretty">
              {article.title}
            </h3>
          </div>

          {/* BOTTOM CARD CONTENT: CTA Button */}
          <div className="z-10 relative">
            <button
              className="h-[64px] min-w-[210px] w-fit rounded-full bg-white border border-black/[0.05] pl-7 pr-3 flex items-center justify-between gap-5 cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span className="font-sans font-bold text-[18px] tracking-[0.05em] text-[#232323] select-none">
                READ MORE
              </span>
              <div className="w-[44px] h-[44px] rounded-full bg-[#232323] flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  width="18"
                  height="18"
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
      ))}
    </motion.section>
  );
};

export default WellnessJournalSection;
