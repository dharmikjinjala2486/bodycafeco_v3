import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { Search, SlidersHorizontal, ArrowUpDown, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ITEMS_PER_PAGE = 6;

export const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState<boolean>(false);

  const categories = ['All', 'Daily Essentials', 'Performance', 'Longevity', 'Cognitive Health'];

  // Handle filtering & sorting
  const processedProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } // 'featured' keeps original array order

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(processedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return processedProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [processedProducts, currentPage]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('featured');
    setCurrentPage(1);
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-brand-bg font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Shop Header */}
        <div className="text-left space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Clinical Store</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary tracking-tight">
            Supplement Catalog
          </h1>
          <p className="text-sm text-text-secondary max-w-xl leading-relaxed">
            All formulations are third-party tested, GMP certified, and built at target clinical dosages. Filter by health targets below.
          </p>
        </div>

        {/* Filter / Search Bar controls */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between border-b border-brand-border/60 pb-6">
          {/* Category Tabs (Desktop) */}
          <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto w-full max-w-2xl">
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

          {/* Mobile Filter toggle */}
          <div className="flex lg:hidden w-full items-center justify-between gap-3">
            <button
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border border-brand-border text-xs uppercase font-bold tracking-wider text-primary cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-accent" />
              <span>Filter Categories ({selectedCategory})</span>
            </button>
          </div>

          {/* Search and Sort controls */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 items-center justify-end">
            <div className="relative w-full sm:w-64 bg-white border border-brand-border flex items-center px-3 py-2 rounded">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search catalog..."
                className="w-full text-xs outline-none bg-transparent text-primary"
              />
            </div>

            <div className="relative w-full sm:w-48 bg-white border border-brand-border flex items-center px-3 py-2 rounded">
              <ArrowUpDown className="w-4 h-4 text-gray-400 mr-2" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full text-xs bg-transparent outline-none text-primary font-semibold uppercase tracking-wider appearance-none cursor-pointer"
              >
                <option value="featured">Featured Stacks</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating Reviews</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Filter Expandable Panel */}
        <AnimatePresence>
          {isFilterMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border border-brand-border p-4 space-y-3 overflow-hidden"
            >
              <h4 className="text-[10px] uppercase tracking-wider font-bold text-accent">Select Health Category</h4>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsFilterMenuOpen(false);
                    }}
                    className={`px-3 py-2 text-[10px] uppercase font-semibold border tracking-wider text-center cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-primary text-white border-primary'
                        : 'bg-brand-bg text-primary border-brand-border'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products Grid */}
        <div>
          {paginatedProducts.length === 0 ? (
            <div className="text-center py-20 bg-white border border-brand-border max-w-md mx-auto space-y-4">
              <RefreshCw className="w-8 h-8 text-accent mx-auto animate-spin" />
              <h3 className="font-display font-bold text-primary text-base">No matches found</h3>
              <p className="text-xs text-text-secondary max-w-xs mx-auto">
                No supplements match category "{selectedCategory}" or search query "{searchQuery}".
              </p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-2 bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-accent transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
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
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 border text-xs font-bold transition-all rounded cursor-pointer ${
                    currentPage === page
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-primary border-brand-border hover:border-primary/50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 border border-brand-border bg-white text-primary hover:border-primary disabled:opacity-30 disabled:hover:border-brand-border transition-colors cursor-pointer rounded"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
