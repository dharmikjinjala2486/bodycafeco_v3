import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X, ArrowRight } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, searchQuery, setSearchQuery, toggleSearch } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  // Filter products by name, category, and tags
  const filteredProducts = searchQuery
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white/95 backdrop-blur-md z-[999] flex flex-col"
        >
          {/* Header */}
          <div className="max-w-6xl mx-auto w-full px-6 py-6 flex items-center justify-between border-b border-brand-border/40">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-primary">Search Catalog</span>
            <button
              onClick={() => toggleSearch(false)}
              className="p-2 hover:bg-brand-bg rounded-full transition-colors cursor-pointer text-gray-500 hover:text-primary"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Input Container */}
          <div className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 flex flex-col justify-start">
            <div className="relative border-b-2 border-primary/20 focus-within:border-primary transition-colors py-4 flex items-center">
              <SearchIcon className="w-8 h-8 text-gray-400 mr-4" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search supplements, ingredients, benefits..."
                className="w-full text-2xl md:text-3xl font-display font-medium text-primary outline-none placeholder-gray-300 bg-transparent"
              />
            </div>

            {/* Recommendations / Search Results */}
            <div className="mt-12 overflow-y-auto max-h-[60vh] pr-2">
              {searchQuery === '' ? (
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-text-secondary mb-4">Trending Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Creatine', 'Omega-3', 'Brain Focus', 'Deep Sleep', 'Longevity', 'Vitamin D3'].map((trend) => (
                      <button
                        key={trend}
                        onClick={() => setSearchQuery(trend)}
                        className="px-4 py-2 border border-brand-border bg-brand-bg hover:border-primary rounded-full text-sm text-primary transition-colors cursor-pointer"
                      >
                        {trend}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-text-secondary">
                      Results ({filteredProducts.length})
                    </h3>
                  </div>

                  {filteredProducts.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-gray-400">No products found matching "{searchQuery}"</p>
                      <p className="text-xs text-text-secondary mt-1">Try searching for generic terms like "performance" or "sleep"</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredProducts.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.slug}`}
                          onClick={() => toggleSearch(false)}
                          className="flex gap-4 p-4 border border-brand-border hover:border-primary rounded bg-white transition-colors duration-300"
                        >
                          <div className="w-16 h-16 bg-brand-bg rounded overflow-hidden flex-shrink-0 border border-brand-border">
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <h4 className="font-display font-semibold text-sm text-primary truncate hover:text-accent transition-colors">
                              {product.name}
                            </h4>
                            <p className="text-xs text-text-secondary truncate mt-0.5">{product.shortDescription}</p>
                            <span className="text-xs font-semibold text-primary mt-1">
                              ₹{product.price}
                            </span>
                          </div>
                          <div className="flex items-center text-gray-300 hover:text-primary">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
