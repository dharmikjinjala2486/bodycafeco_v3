import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { ChevronLeft, ArrowRight, Calendar, BookOpen } from 'lucide-react';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = useMemo(() => {
    return blogPosts.find((p) => p.slug === slug);
  }, [slug]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts.filter((p) => p.id !== post.id).slice(0, 2);
  }, [post]);

  if (!post) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[70vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="font-display font-extrabold text-2xl text-primary">Article Not Found</h2>
        <p className="text-sm text-text-secondary">This research paper or journal does not exist in our library.</p>
        <Link to="/blog" className="px-6 py-2.5 bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-accent transition-colors">
          Back to Library
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-brand-bg px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-12 text-left">
        
        {/* Back navigation */}
        <Link to="/blog" className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-text-secondary hover:text-accent transition-colors">
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>Back to Library</span>
        </Link>

        {/* Article Meta Header */}
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">{post.category}</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary leading-tight tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-brand-border/60 text-xs text-text-secondary">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-brand-border">
                <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <cite className="font-semibold text-primary not-italic">{post.author.name}</cite>
                <p className="text-[9px] uppercase font-bold text-text-secondary">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>{post.date}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-gray-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-[21/9] bg-white border border-brand-border overflow-hidden">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content Body */}
        <article
          className="prose prose-sm md:prose-base max-w-none text-xs md:text-sm text-text-secondary leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tag list */}
        {post.tags && post.tags.length > 0 && (
          <div className="pt-6 border-t border-brand-border/40 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[10px] bg-white border border-brand-border px-3 py-1 font-semibold text-primary">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Newsletter Box */}
        <div className="p-8 bg-white border border-brand-border space-y-6">
          <div className="space-y-2">
            <h3 className="font-display font-extrabold text-lg text-primary uppercase">Subscribe to Research</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              We send concise summaries of peer-reviewed clinical research and longevity breakthroughs twice a month. Zero spam, unsubscribe anytime.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border border-brand-border text-xs outline-none focus:border-primary text-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Related articles */}
        <div className="border-t border-brand-border/40 pt-12 space-y-6">
          <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary">Related Research</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((r) => (
              <div key={r.id} className="p-5 bg-white border border-brand-border rounded flex flex-col justify-between h-48">
                <div>
                  <span className="text-[9px] text-accent uppercase font-bold tracking-wider">{r.category}</span>
                  <h4 className="font-display font-bold text-xs text-primary line-clamp-2 mt-1">
                    <Link to={`/blog/${r.slug}`}>{r.title}</Link>
                  </h4>
                  <p className="text-[10px] text-text-secondary line-clamp-2 mt-1 leading-relaxed">
                    {r.excerpt}
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-border/40 flex justify-between items-center text-[9px] uppercase font-bold">
                  <span className="text-text-secondary">{r.readTime}</span>
                  <Link to={`/blog/${r.slug}`} className="text-accent hover:text-primary flex items-center gap-1 transition-colors">
                    <span>Read Journal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
