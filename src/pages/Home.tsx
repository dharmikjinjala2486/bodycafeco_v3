import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Heart, Brain, Zap, Dumbbell, Sparkles, ChevronRight, MessageSquare, HelpCircle } from 'lucide-react';
import { products } from '../data/products';
import { blogPosts } from '../data/blog';
import { testimonialHighlights } from '../data/reviews';
import { homePageFaqs } from '../data/faq';
import { ProductCard } from '../components/ui/ProductCard';

export const Home: React.FC = () => {
  // Best Sellers (Omega-3, Creatine, Vitamin D3+K2)
  const bestSellers = products.filter((p) =>
    ['omega-3', 'creatine', 'vit-d3-k2'].includes(p.id)
  );

  // Latest 3 blog articles
  const latestBlogs = blogPosts.slice(0, 3);

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: '-100px' } as any,
    transition: { duration: 0.6, ease: 'easeOut' } as any
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true, margin: '-100px' } as any
  };


  const cardHoverEffect = {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.3 }
  };

  return (
    <div className="pt-20 font-sans bg-brand-bg">
      {/* SECTION 3: Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#FAFAF8] overflow-hidden px-6 border-b border-brand-border/40">
        {/* Background grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/20 bg-accent/5 text-accent text-[10px] font-bold uppercase tracking-widest rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Human Optimization</span>
              </div>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-7xl text-primary leading-[1.05] tracking-tight text-balance">
                Formulations Built for Human <span className="underline decoration-accent decoration-wavy decoration-3 underline-offset-8">Performance.</span>
              </h1>
              <p className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed text-pretty">
                Science-backed clinical formulations designed to support physical strength, cognitive clarity, rapid muscular recovery, and long-term biological longevity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                to="/shop"
                className="px-8 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/10 hover:shadow-accent/15 cursor-pointer"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/quiz"
                className="px-8 py-4 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest hover:bg-white hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Take The Quiz</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Premium Product Render (Mocked elegantly with glassmorphic visuals) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] aspect-[4/5] bg-white border border-brand-border p-6 shadow-2xl flex flex-col justify-between">
              {/* Product Label top */}
              <div className="flex justify-between items-start border-b border-brand-border/40 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">BODY CAFE CO. STACK</span>
                  <h3 className="font-display font-bold text-lg text-primary mt-0.5">Longevity Core</h3>
                </div>
                <div className="px-2 py-1 rounded bg-primary text-white text-[8px] uppercase tracking-widest font-bold font-display">
                  Grade A
                </div>
              </div>

              {/* Central render overlay */}
              <div className="my-8 flex-1 flex items-center justify-center relative">
                <div className="absolute w-44 h-44 rounded-full bg-accent/5 filter blur-3xl" />
                <div className="w-36 h-36 border border-brand-border flex items-center justify-center relative bg-gradient-to-tr from-brand-bg to-white shadow-inner select-none rotate-6 group hover:rotate-12 transition-transform duration-500">
                  <div className="w-12 h-20 bg-primary/95 border-b border-white/20 relative flex flex-col items-center justify-between py-2 text-white">
                    <span className="text-[7px] font-bold tracking-widest uppercase">NMN</span>
                    <div className="w-8 h-8 rounded-full border border-accent/20 bg-accent flex items-center justify-center text-[8px] font-extrabold">Co.</div>
                  </div>
                  <div className="absolute -bottom-2 -right-4 w-12 h-20 bg-white border border-brand-border flex flex-col items-center justify-between py-2 rotate-12 shadow-md">
                    <span className="text-[6px] font-bold tracking-widest uppercase text-primary">D3+K2</span>
                    <div className="w-8 h-8 rounded-full border border-primary bg-primary/5 flex items-center justify-center text-[8px] text-primary font-bold">Bio</div>
                  </div>
                </div>
              </div>

              {/* Clinical Spec tags */}
              <div className="border-t border-brand-border/40 pt-4 space-y-2">
                <div className="flex justify-between text-[10px] text-text-secondary">
                  <span>Standard</span>
                  <span className="font-semibold text-primary">GMP Certified Lab</span>
                </div>
                <div className="flex justify-between text-[10px] text-text-secondary">
                  <span>Integrity</span>
                  <span className="font-semibold text-brand-success uppercase tracking-widest text-[9px]">100% Purity Verified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Trust Indicators */}
      <section className="bg-white py-12 border-b border-brand-border/40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-brand-border/60"
          >
            {[
              { title: 'Third Party Tested', desc: 'Accredited lab clearance for raw materials.' },
              { title: 'Clinically Studied', desc: 'Formulated with clinically-backed dosages.' },
              { title: 'Transparent Formulas', desc: 'Zero proprietary blends, exact labels.' },
              { title: 'Made For Daily Use', desc: 'Bioavailable matrices for optimized loading.' }
            ].map((indicator) => (
              <motion.div
                key={indicator.title}
                variants={fadeInUp}
                className="pt-6 md:pt-0 md:px-6 space-y-1.5"
              >
                <div className="w-8 h-8 bg-brand-bg border border-brand-border rounded-full flex items-center justify-center mx-auto mb-2 text-primary">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary">
                  {indicator.title}
                </h3>
                <p className="text-[11px] text-text-secondary">
                  {indicator.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Best Sellers */}
      <section className="py-24 px-6 border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <motion.div {...fadeInUp} className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Curated Solutions</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight">
              Best Sellers
            </h2>
            <p className="text-sm text-text-secondary max-w-lg mx-auto">
              Invest in your foundation. These clinical-grade formulas represent the core supplement choices for daily human optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="pt-6">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 border-b border-primary hover:border-accent text-primary hover:text-accent font-semibold text-xs uppercase tracking-widest pb-1 transition-colors duration-300"
            >
              <span>Explore All Formulations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: Science Section */}
      <section className="bg-white py-24 px-6 border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Scientific Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 bg-brand-bg border border-brand-border p-8 shadow-inner flex flex-col justify-between aspect-square"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Lab Report #9041</span>
                <span className="text-[8px] bg-primary text-white font-mono px-2 py-0.5">HPLC VERIFIED</span>
              </div>

              {/* Graphic cell rendering */}
              <div className="my-8 flex justify-center items-center">
                <div className="relative w-48 h-48 border border-dashed border-gray-300 rounded-full flex items-center justify-center p-4">
                  <div className="w-full h-full border border-gray-200 rounded-full flex items-center justify-center relative">
                    <span className="font-mono text-[9px] text-gray-400 absolute top-4">Receptor site</span>
                    <div className="w-24 h-24 border border-accent bg-accent/5 rounded-full flex items-center justify-center text-center p-2 shadow-inner">
                      <span className="font-display font-bold text-[9px] text-primary uppercase leading-tight">Cellular Uptake 98.4%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-brand-border pt-4">
                <p className="text-[10px] text-text-secondary leading-relaxed">
                  High-Performance Liquid Chromatography validation shows consistent active nutrient molecular counts, guaranteeing dose integrity across batches.
                </p>
              </div>
            </motion.div>

            {/* Right: Scientific copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div {...fadeInUp} className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Science First</span>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary leading-tight tracking-tight">
                  The Science Behind Every Single Formula.
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Traditional supplements rely on generic ingredients with low bioavailability and high filler ratios. At Body Cafe Co., we source pure, bio-identical compound variants and pair them with clinically proven absorption accelerators—such as liposomal matrices and active amino chelates.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-brand-border/40">
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-primary">Bio-identical Sourcing</h4>
                  <p className="text-[11px] text-text-secondary leading-relaxed">
                    We use ingredients matching the body's natural form (e.g. lichen-sourced Cholecalciferol D3 rather than lanolin D3) for intuitive receptor signaling.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-primary">Liposomal Shielding</h4>
                  <p className="text-[11px] text-text-secondary leading-relaxed">
                    Vitamins are encapsulated in phospholipid bubbles, protecting them from aggressive gastric acids and delivering directly into the lymphatic bloodstream.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/science"
                  className="px-6 py-3.5 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-300 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Read Scientific References</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Health Benefits Section */}
      <section className="py-24 px-6 border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div {...fadeInUp} className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Clinical Targets</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight">
              Optimized Biological Pathways
            </h2>
            <p className="text-sm text-text-secondary max-w-lg mx-auto">
              Our clinical formulations are designed to optimize core wellness systems, driving long-term longevity and performance.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {[
              { icon: Heart, name: 'Heart Health', desc: 'Optimize arterial elasticity, sweeping calcium out of blood vessels.' },
              { icon: Brain, name: 'Brain Health', desc: 'Promote neural speed, synapse growth, and deeper circadian cycles.' },
              { icon: Zap, name: 'Performance', desc: 'Replenish creatine ATP energy reserves and enhance vascular nitric oxide.' },
              { icon: Dumbbell, name: 'Recovery', desc: 'Buffer lactic acid build-up to delay muscle exhaustion and recovery time.' },
              { icon: Sparkles, name: 'Longevity', desc: 'Directly support cellular repair, sirtuin genes, and NAD+ levels.' }
            ].map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.name}
                  variants={fadeInUp}
                  whileHover={cardHoverEffect}
                  className="p-6 border border-brand-border bg-white hover:border-primary transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="w-10 h-10 bg-brand-bg border border-brand-border flex items-center justify-center text-accent mb-6 rounded">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-xs uppercase tracking-wider text-primary mb-2">
                      {benefit.name}
                    </h3>
                    <p className="text-[11px] text-text-secondary leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: Quiz CTA */}
      <section className="bg-primary text-white py-20 px-6 border-b border-brand-border/40 relative overflow-hidden">
        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl select-none pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full filter blur-2xl select-none pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <motion.div {...fadeInUp} className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Biological Discovery</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
              Find the Right Supplements in 60 Seconds
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Every body has a unique biological thumbprint. Answer a few questions about your diet, sleep, and physical output, and we will formulate a personalized, science-backed supplement stack.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-2"
          >
            <Link
              to="/quiz"
              className="px-8 py-4 bg-accent text-white hover:bg-white hover:text-primary transition-all duration-300 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 shadow-lg shadow-accent/20 cursor-pointer"
            >
              <span>Take The Quiz</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: Testimonials */}
      <section className="py-24 px-6 border-b border-brand-border/40 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div {...fadeInUp} className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Real Experiences</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight">
              What Pioneers Say About Us
            </h2>
            <p className="text-sm text-text-secondary max-w-lg mx-auto">
              Our customers verify their lab results and biological performance. Here is how our supplement stack impacted their daily routines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialHighlights.map((testimonial, idx) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 border border-brand-border bg-brand-bg flex flex-col justify-between text-left h-full relative"
              >
                <div>
                  <div className="flex items-center gap-1 text-accent mb-6">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <blockquote className="text-sm text-primary italic leading-relaxed mb-6 font-display font-medium">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-brand-border/60">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-border flex-shrink-0">
                    <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <cite className="font-display font-bold text-xs uppercase tracking-wider text-primary not-italic">{testimonial.author}</cite>
                    <p className="text-[10px] text-text-secondary font-semibold uppercase mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Blog Preview */}
      <section className="py-24 px-6 border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div {...fadeInUp} className="space-y-3 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Longevity Insights</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary tracking-tight">
                Latest From The Lab
              </h2>
              <p className="text-sm text-text-secondary max-w-lg">
                Explore the latest clinical research on cellular biology, neural transmission pathways, and physical performance optimization.
              </p>
            </motion.div>
            <div>
              <Link
                to="/blog"
                className="px-6 py-3.5 border border-primary/20 text-primary hover:border-primary transition-colors duration-300 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Read All Research</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-brand-border flex flex-col justify-between group hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-brand-bg relative border-b border-brand-border/40">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-white text-primary text-[8px] uppercase tracking-widest font-bold px-2 py-0.5 border border-brand-border">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 text-left">
                    <span className="text-[10px] text-text-secondary font-semibold uppercase">{post.date}</span>
                    <h3 className="font-display font-bold text-sm text-primary group-hover:text-accent transition-colors duration-300 mt-2 line-clamp-2 min-h-[40px]">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-xs text-text-secondary line-clamp-2 mt-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-brand-border/40 flex justify-between items-center">
                  <span className="text-[10px] text-text-secondary uppercase font-semibold">{post.readTime}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-accent group-hover:text-primary font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: Instagram Gallery */}
      <section className="bg-white py-24 px-6 border-b border-brand-border/40">
        <div className="max-w-7xl mx-auto space-y-12 text-center">
          <motion.div {...fadeInUp} className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Social Community</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-primary tracking-tight">
              Follow Us @BodyCafeCo
            </h2>
            <p className="text-xs text-text-secondary">
              Join our premium community of biohackers, human athletes, and longevity researchers.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=300',
              'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&q=80&w=300',
              'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=300',
              'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&q=80&w=300',
              'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=300',
              'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80&w=300'
            ].map((imgUrl, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="aspect-square bg-brand-bg border border-brand-border overflow-hidden relative group cursor-pointer"
              >
                <img src={imgUrl} alt={`Body Cafe social post ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold uppercase tracking-wider border border-white px-3 py-1 bg-primary/20">View Post</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: FAQ Preview */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div {...fadeInUp} className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Got Questions?</span>
            <h2 className="font-display font-extrabold text-3xl text-primary tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-text-secondary max-w-md mx-auto">
              Our support team and research scientists cover everything from formulation absorption to active dosage schedules.
            </p>
          </motion.div>

          <div className="space-y-4">
            {homePageFaqs.map((faq, idx) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="border border-brand-border bg-white rounded overflow-hidden"
              >
                <details className="group cursor-pointer">
                  <summary className="flex justify-between items-center p-6 text-left font-display font-semibold text-sm text-primary select-none list-none pr-12 relative">
                    <span>{faq.question}</span>
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center justify-center p-1 rounded-full border border-brand-border text-gray-400 group-open:rotate-45 transition-transform duration-300">
                      <HelpCircle className="w-4 h-4 text-accent" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 border-t border-brand-border/40 text-left text-xs text-text-secondary leading-relaxed bg-brand-bg/30">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 border-b border-primary hover:border-accent text-primary hover:text-accent font-semibold text-xs uppercase tracking-widest pb-1 transition-colors duration-300"
            >
              <span>View All FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
