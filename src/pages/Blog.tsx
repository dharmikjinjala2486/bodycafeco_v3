import React, { useState, useMemo } from 'react';
import { blogPosts } from '../data/blog';
import { Link } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

const POSTS_PER_PAGE = 6;

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = ['All', 'Science', 'Longevity', 'Nutrition', 'Performance'];

  // Handle filtering
  const filteredPosts = useMemo(() => {
    let result = [...blogPosts];

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  // Reset pagination
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  return (
    <div className="pt-32 pb-24 bg-brand-bg px-6 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-left space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Science Journals</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary tracking-tight">
            The Longevity Library
          </h1>
          <p className="text-sm text-text-secondary max-w-xl leading-relaxed">
            Clinical reviews, neurochemical stack design, and training science written by our researchers and human performance specialists.
          </p>
        </div>

        {/* Filters and search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-brand-border/60 pb-6">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 border rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-primary border-brand-border hover:border-primary/45'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64 bg-white border border-brand-border flex items-center px-3 py-2 rounded">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search journals..."
              className="w-full text-xs outline-none bg-transparent text-primary"
            />
          </div>
        </div>

        {/* Blog listing */}
        <div>
          {paginatedPosts.length === 0 ? (
            <div className="text-center py-20 bg-white border border-brand-border max-w-md mx-auto space-y-4">
              <BookOpen className="w-8 h-8 text-accent mx-auto" />
              <h3 className="font-display font-bold text-primary text-base">No Articles Found</h3>
              <p className="text-xs text-text-secondary">
                No research articles match your search parameters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <article
                  key={post.id}
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
                      <h3 className="font-display font-bold text-base text-primary group-hover:text-accent transition-colors duration-300 mt-2 line-clamp-2 min-h-[48px]">
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
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 pt-12 border-t border-brand-border/40">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 border border-brand-border bg-white text-primary hover:border-primary disabled:opacity-30 disabled:hover:border-brand-border transition-colors cursor-pointer rounded"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-bold text-primary font-mono">Page {currentPage} of {totalPages}</span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 border border-brand-border bg-white text-primary hover:border-primary disabled:opacity-30 disabled:hover:border-brand-border transition-colors cursor-pointer rounded"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
