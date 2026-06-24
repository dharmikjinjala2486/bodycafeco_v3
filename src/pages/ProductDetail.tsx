import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { SuperfoodSection } from '../components/ui/SuperfoodSection';
import { ExpandableInfoSection } from '../components/ui/ExpandableInfoSection';
import { AffirmationVideoSection } from '../components/ui/AffirmationVideoSection';
import { SustainableRefillSection } from '../components/ui/SustainableRefillSection';
import { CommunityReviewsSection } from '../components/ui/CommunityReviewsSection';
import { WellnessJournalSection } from '../components/ui/WellnessJournalSection';
import { BrandMarqueeStrip } from '../components/ui/BrandMarqueeStrip';
import { FinalCTASection } from '../components/ui/FinalCTASection';
import godRayImg from '../assets/godray.webp';

const productEditorialData: Record<string, {
  titleLines: string[];
  mainSubtitle: string;
  italicSubtitle: string;
  benefits: { icon: string; text: string }[];
}> = {
  'omega-3-fish-oil': {
    titleLines: ['Omega-3', 'Fish Oil'],
    mainSubtitle: 'Ultra-concentrated, molecularly distilled fatty acids for cardiovascular safety and',
    italicSubtitle: 'cognitive synergy.',
    benefits: [
      { icon: '🧠', text: 'The most potent & pure marine omega-3 source on Earth' },
      { icon: '❤️', text: 'Supports cardiovascular defense and arterial elasticity' },
      { icon: '💧', text: 'Molecularly distilled to ensure absolute concentration' }
    ]
  },
  'creatine-monohydrate': {
    titleLines: ['Creatine', 'Monohydrate'],
    mainSubtitle: 'Science-backed performance support for strength, recovery and',
    italicSubtitle: 'cognitive resilience.',
    benefits: [
      { icon: '⚡', text: 'The most potent & pure creatine monohydrate on Earth' },
      { icon: '💪', text: 'Maximizes cellular ATP output and explosive strength' },
      { icon: '🥄', text: 'Micro-milled to 200 mesh for instant mixability' }
    ]
  },
  'vitamin-d3-k2': {
    titleLines: ['Vitamin D3', '+ K2'],
    mainSubtitle: 'Bioactive liposomal matrix formula for skeletal strength, immune response, and',
    italicSubtitle: 'arterial defense.',
    benefits: [
      { icon: '☀️', text: 'The most potent & bioavailable liposomal synergy on Earth' },
      { icon: '🦴', text: 'Coordinates calcium distribution directly to bones' },
      { icon: '🛡️', text: 'Supports peak immune response and vascular resilience' }
    ]
  },
  'nootropic-brain-booster': {
    titleLines: ['Nootropic', 'Brain Booster'],
    mainSubtitle: 'A clinical stack of Alpha-GPC and medicinal mushroom extracts for flow state focus and',
    italicSubtitle: 'neurogenesis.',
    benefits: [
      { icon: '🍄', text: 'The most potent & pure cognitive focus stack on Earth' },
      { icon: '🎯', text: 'Induces calm, jitter-free flow state alertness' },
      { icon: '🧠', text: 'Improves working memory, verbal recall, and speed' }
    ]
  },
  'longevity-complex': {
    titleLines: ['Longevity', 'Complex'],
    mainSubtitle: 'Advanced cellular protection stacking NMN and Trans-Resveratrol to activate sirtuins and',
    italicSubtitle: 'optimize NAD+.',
    benefits: [
      { icon: '🔋', text: 'The most potent & pure NAD+ cellular activator on Earth' },
      { icon: '🧬', text: 'Activates critical biological longevity pathways' },
      { icon: '🌱', text: 'Contains ultra-pure NMN and Trans-Resveratrol' }
    ]
  },
  'magnesium-l-threonate': {
    titleLines: ['Magnesium', 'L-Threonate'],
    mainSubtitle: 'Bioavailable MIT-developed form of magnesium validated to cross the blood-brain barrier for',
    italicSubtitle: 'synapse density.',
    benefits: [
      { icon: '🌌', text: 'The most potent & bioavailable neuro-magnesium on Earth' },
      { icon: '🧠', text: 'Effectively crosses the blood-brain barrier' },
      { icon: '💤', text: 'Promotes restorative deep sleep and synapse health' }
    ]
  },
  'hydrolyzed-collagen-peptides': {
    titleLines: ['Hydrolyzed', 'Collagen'],
    mainSubtitle: 'Grass-fed Type I & III collagen peptides, enzymatically hydrolyzed for structural support of',
    italicSubtitle: 'skin and joints.',
    benefits: [
      { icon: '🐄', text: 'The most potent & pure grass-fed collagen peptides on Earth' },
      { icon: '✨', text: 'Promotes skin elasticity, hydration, and tone' },
      { icon: '🦴', text: 'Strengthens joint cartilage, tendons, and gut barrier' }
    ]
  },
  'pre-workout-ignition': {
    titleLines: ['Pre-Workout', 'Ignition'],
    mainSubtitle: 'A clinical dose of N.O. expansion and muscular endurance buffer for clean training energy and',
    italicSubtitle: 'focus.',
    benefits: [
      { icon: '🔥', text: 'The most potent & clean performance ignition stack on Earth' },
      { icon: '🫁', text: 'Maximizes nitric oxide production for enhanced flow' },
      { icon: '☕', text: 'Provides natural green coffee bean sustained energy' }
    ]
  }
};

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart } = useCart();

  const product = useMemo(() => {
    return products.find((p) => p.slug === slug);
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[70vh] flex flex-col items-center justify-center bg-[#EBEAF2]">
        <h2 className="font-serif font-bold text-2xl text-[#1D1D1F]">Formula Not Found</h2>
        <p className="text-sm text-[#4E4E52] mt-2">The requested supplement formula does not exist in our scientific database.</p>
        <Link to="/shop" className="mt-6 px-8 py-3 bg-white text-[#1D1D1F] text-xs font-bold uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all">
          Browse All Supplements
        </Link>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(product.galleryUrls[0] || product.imageUrl);

  const thumbnails = useMemo(() => {
    const list = [...(product.galleryUrls || [])];
    if (list.length === 0 && product.imageUrl) {
      list.push(product.imageUrl);
    }
    while (list.length < 5) {
      const originalLength = list.length;
      for (let i = 0; i < originalLength && list.length < 5; i++) {
        list.push(list[i]);
      }
    }
    return list.slice(0, 5);
  }, [product]);

  const editorial = useMemo(() => {
    return productEditorialData[product.slug] || {
      titleLines: product.name.split(' '),
      mainSubtitle: product.shortDescription,
      italicSubtitle: '',
      benefits: product.benefits.slice(0, 3).map((b, i) => ({ icon: ['⚡', '💪', '🔬'][i] || '✓', text: b }))
    };
  }, [product]);

  const handleAddToCart = () => {
    addToCart(product, 1, false);
  };

  const renderTitleLine = (line: string) => {
    if (line.includes('&')) {
      const parts = line.split('&');
      return (
        <>
          {parts[0]}
          <span className="font-serif italic font-light lowercase">&</span>
          {parts[1]}
        </>
      );
    }
    return line;
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F7FB] text-[#1D1D1F] font-sans flex flex-col items-center relative overflow-hidden">
      {/* Background Light Rays */}
      <div 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
        style={{
          backgroundImage: `url(${godRayImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          opacity: 0.12,
          mixBlendMode: 'screen'
        }}
      />
      <div className="max-w-[1200px] w-full mx-auto px-8 py-10 bg-transparent pt-32 pb-12 z-10 relative">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-0">

          {/* LEFT SIDE: PRODUCT GALLERY (568px wide on desktop, top-aligned) */}
          <div className="w-full lg:w-[568px] flex flex-col mx-auto lg:mx-0">
            {/* Large hero image card - square, rounded-[28px] */}
            <div className="w-full aspect-square rounded-[28px] bg-[#F3F3F0] overflow-hidden flex items-center justify-center relative select-none">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Centered pagination dots overlay near bottom - smaller dots, tight spacing */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {thumbnails.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(thumb)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${selectedImage === thumb ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Horizontal thumbnail gallery underneath - exactly 5 image-only thumbnails, fixed 104x104px, rounded-12px, gap-3 */}
            <div className="flex gap-3 w-full mt-3.5 select-none">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(thumb)}
                  className={`w-[104px] h-[104px] rounded-[12px] overflow-hidden border cursor-pointer transition-all duration-300 ${selectedImage === thumb ? 'border-[#1D1D1F]' : 'border-[#E5E7EB] hover:border-[#1D1D1F]/20'
                    }`}
                >
                  <img src={thumb} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: PRODUCT INFORMATION (480px wide on desktop, top-aligned) */}
          <div className="w-full lg:w-[480px] flex flex-col justify-start text-left pt-0 space-y-6 md:space-y-8">

            {/* Star Rating & Text */}
            <div className="flex items-center gap-3 select-none">
              <span className="text-[20px] text-[#D4A054] tracking-[0.05em] leading-none">★★★★★</span>
              <span className="text-[13px] font-sans font-normal text-[#4E4E52] tracking-wide mt-0.5">
                Rated 4.8/5 by the Body Cafe Co. Community
              </span>
            </div>

            {/* Product Title - Large editorial serif, tight line-height, mt-1 to sit close to rating */}
            <h1 className="font-serif font-normal text-[52px] sm:text-[68px] md:text-[80px] lg:text-[90px] xl:text-[95px] text-[#1D1D1F] leading-[0.85] tracking-[-0.02em] mt-1 select-none">
              {editorial.titleLines.map((line, idx) => (
                <React.Fragment key={idx}>
                  {renderTitleLine(line)}
                  {idx < editorial.titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>

            {/* Subtitle - Narrowed max-width */}
            <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[1.25] text-[#2C2C2E] font-sans font-light tracking-wide max-w-[440px] mt-6 select-none">
              {editorial.mainSubtitle}{' '}
              <span className="font-serif italic font-normal text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] text-[#1D1D1F]">
                {editorial.italicSubtitle}
              </span>
            </p>

            {/* Benefits List - Reduced vertical spacing */}
            <ul className="space-y-2.5 pt-2 select-none">
              {editorial.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-4 text-[15px] sm:text-[16px] text-[#3A3A3C] font-sans font-normal tracking-wide">
                  <span className="text-xl flex-shrink-0 leading-none">{benefit.icon}</span>
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button - Pill, refined 190x58px */}
            <div className="pt-2">
              <button
                onClick={handleAddToCart}
                className="w-[190px] h-[58px] flex items-center justify-center bg-white text-[#1D1D1F] text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.18em] rounded-full shadow-sm border border-[#E5E7EB]/40 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                ADD TO CART
              </button>
            </div>

          </div>

        </div>
      </div>

      <SuperfoodSection />
      <ExpandableInfoSection product={product} />
      <AffirmationVideoSection />
      <BrandMarqueeStrip />
      <SustainableRefillSection />
      <CommunityReviewsSection />
      <WellnessJournalSection />
      <FinalCTASection />
    </div>
  );
};
