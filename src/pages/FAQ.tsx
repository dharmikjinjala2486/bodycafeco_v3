import React, { useState, useMemo } from 'react';
import { faqs } from '../data/faq';
import { HelpCircle, Search } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Products', 'Subscriptions', 'Quality & Testing', 'Shipping & Returns'];

  const filteredFaqs = useMemo(() => {
    let result = [...faqs];

    if (activeCategory !== 'All') {
      result = result.filter((f) => f.category === activeCategory);
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (f) =>
          f.question.toLowerCase().includes(query) ||
          f.answer.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-32 pb-24 bg-brand-bg px-6 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto space-y-12 text-left">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Answering Your Doubts</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-text-secondary max-w-xl leading-relaxed">
            Our researchers, human performance coaches, and customer support representatives cover everything from active ingredient absorption to automated billing schedules.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-brand-border/60 pb-6">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 border rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
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
              placeholder="Search questions..."
              className="w-full text-xs outline-none bg-transparent text-primary"
            />
          </div>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white border border-brand-border rounded max-w-md mx-auto">
              <p className="text-gray-400 text-xs">No FAQs found matching your parameters.</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => (
              <div key={faq.question} className="border border-brand-border bg-white rounded">
                <details className="group cursor-pointer">
                  <summary className="flex justify-between items-center p-6 font-display font-semibold text-sm text-primary select-none list-none pr-12 relative">
                    <span>{faq.question}</span>
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center justify-center p-1 rounded-full border border-brand-border text-gray-400 group-open:rotate-45 transition-transform duration-300">
                      <HelpCircle className="w-4 h-4 text-accent" />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 border-t border-brand-border/40 text-xs text-text-secondary leading-relaxed bg-brand-bg/20">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
