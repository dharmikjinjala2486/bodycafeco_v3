import React, { useState } from 'react';
import { quizQuestions, calculateQuizResult } from '../data/quiz';
import type { QuizResult } from '../data/quiz';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Sparkles, RefreshCcw, ShoppingBag, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [addedAll, setAddedAll] = useState(false);
  const { addToCart } = useCart();

  const activeQuestion = quizQuestions[currentStep];

  const handleSelectOption = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [activeQuestion.id]: value
    }));

    // Auto-advance to next step for single choice questions
    if (currentStep < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 300);
    } else {
      // Last question completed - calculate results
      setTimeout(() => {
        const finalAnswers = { ...answers, [activeQuestion.id]: value };
        const scoreResult = calculateQuizResult(finalAnswers);
        setResult(scoreResult);
      }, 400);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
    setAddedAll(false);
  };

  const handleAddAllToCart = () => {
    if (!result) return;
    result.recommendedProductIds.forEach((pid) => {
      const prod = products.find((p) => p.id === pid);
      if (prod) {
        addToCart(prod, 1, true); // Recommend subscription as primary option
      }
    });
    setAddedAll(true);
  };

  // Progress percentage
  const progressPercent = Math.round((currentStep / quizQuestions.length) * 100);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-brand-bg flex items-center justify-center font-sans">
      <div className="max-w-3xl mx-auto w-full">
        
        {/* Results Page view */}
        {result ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-brand-border p-6 md:p-12 shadow-xl text-left space-y-8"
          >
            {/* Header Result */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-border/40 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Your Customized Stack
                </span>
                <h1 className="font-display font-extrabold text-2xl md:text-3xl text-primary mt-2">
                  Biological Analysis Complete
                </h1>
              </div>
              <button
                onClick={handleReset}
                className="self-start md:self-auto text-xs uppercase font-bold text-primary hover:text-accent flex items-center gap-1.5 py-2 px-3 border border-brand-border bg-brand-bg cursor-pointer transition-colors"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>

            {/* Explanation paragraph */}
            <div className="p-5 bg-brand-bg/50 border-l-2 border-accent">
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                {result.explanation}
              </p>
            </div>

            {/* Science Stagger logic list */}
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary">Biomarker Logic</h3>
              <ul className="space-y-2.5">
                {result.reasoningList.map((reason, idx) => (
                  <li key={idx} className="flex gap-3 text-xs text-text-secondary items-start">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Products Grid */}
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary">Recommended Formulas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {result.recommendedProductIds.map((pid) => {
                  const prod = products.find((p) => p.id === pid);
                  if (!prod) return null;
                  return (
                    <div key={prod.id} className="border border-brand-border bg-brand-bg/25 hover:border-primary/20 transition-all rounded p-4 flex flex-col justify-between h-full">
                      <div className="space-y-2">
                        <div className="aspect-square bg-white border border-brand-border rounded overflow-hidden">
                          <img src={prod.imageUrl} alt={prod.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-display font-bold text-xs text-primary line-clamp-2 mt-1">
                          <Link to={`/product/${prod.slug}`}>{prod.name}</Link>
                        </h4>
                        <p className="text-[10px] text-text-secondary line-clamp-2 leading-relaxed">
                          {prod.shortDescription}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-brand-border/40 flex items-center justify-between">
                        <span className="font-display font-bold text-xs text-primary">₹{(prod.salePrice || prod.price).toLocaleString('en-IN')}</span>
                        <button
                          onClick={() => addToCart(prod, 1, true)}
                          className="p-1.5 border border-primary hover:bg-primary hover:text-white transition-colors cursor-pointer rounded"
                          aria-label={`Add ${prod.name} to stack`}
                        >
                          <Plus className="w-3.5 h-3.5 text-primary hover:text-white" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="pt-4 border-t border-brand-border/40 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddAllToCart}
                disabled={addedAll}
                className="flex-1 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-accent disabled:bg-emerald-600 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                {addedAll ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added Stack to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Entire Stack to Cart (15% Off)</span>
                  </>
                )}
              </button>
              <Link
                to="/shop"
                className="py-4 px-6 border border-primary/20 hover:border-primary text-primary hover:bg-brand-bg font-bold text-xs uppercase tracking-widest text-center transition-all duration-300"
              >
                Back to Shop
              </Link>
            </div>

          </motion.div>
        ) : (
          /* Questionnaire state view */
          <div className="bg-white border border-brand-border p-6 md:p-12 shadow-xl space-y-8 text-left">
            
            {/* Header progress info */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-text-secondary select-none">
                <span>Quiz Progress</span>
                <span className="font-mono text-accent">Question {currentStep + 1} of {quizQuestions.length}</span>
              </div>
              <div className="h-1 bg-brand-bg w-full overflow-hidden border border-brand-border">
                <div
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Current Question copy */}
            <div className="space-y-2">
              <h2 className="font-display font-extrabold text-xl md:text-2xl text-primary leading-tight">
                {activeQuestion.question}
              </h2>
              {activeQuestion.subtitle && (
                <p className="text-xs text-text-secondary leading-relaxed">
                  {activeQuestion.subtitle}
                </p>
              )}
            </div>

            {/* Choices list */}
            <div className="grid grid-cols-1 gap-3">
              {activeQuestion.options.map((opt) => {
                const isSelected = answers[activeQuestion.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleSelectOption(opt.value)}
                    className={`text-left p-4 border transition-all duration-300 cursor-pointer flex justify-between items-center rounded ${
                      isSelected
                        ? 'border-primary bg-white shadow-sm ring-1 ring-primary'
                        : 'border-brand-border bg-brand-bg/40 hover:border-primary/45 hover:bg-white'
                    }`}
                  >
                    <div className="pr-4">
                      <span className="font-display font-semibold text-xs uppercase tracking-wider text-primary">
                        {opt.label}
                      </span>
                      {opt.description && (
                        <p className="text-[10px] text-text-secondary mt-1 leading-relaxed">
                          {opt.description}
                        </p>
                      )}
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-all ${
                      isSelected ? 'border-primary bg-primary text-white' : 'border-brand-border bg-white'
                    }`}>
                      {isSelected && <Check className="w-2.5 h-2.5" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Back button */}
            {currentStep > 0 && (
              <div className="pt-4 border-t border-brand-border/40">
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-text-secondary hover:text-primary transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Question</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
