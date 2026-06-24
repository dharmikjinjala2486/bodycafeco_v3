import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import type { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const basePrice = product.price;
  const salePrice = product.salePrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group bg-white border border-brand-border/60 flex flex-col justify-between h-full hover:shadow-md hover:border-primary/20 transition-all duration-300 relative"
    >
      {/* Product Image & Badges */}
      <div className="relative overflow-hidden aspect-square bg-brand-bg border-b border-brand-border/40">
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          <motion.img
            src={product.imageUrl}
            alt={product.name}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </Link>
        
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 border border-brand-border">
          {product.category}
        </span>

        {/* Subscription discount indicator */}
        <span className="absolute top-3 right-3 bg-accent text-white text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5">
          {product.subscriptionDiscount}% Off Subs
        </span>
      </div>

      {/* Product Information */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3 h-3 fill-amber-400 stroke-amber-400" />
            <span className="text-[10px] font-bold text-primary">{product.rating}</span>
            <span className="text-[9px] text-text-secondary">({product.reviewsCount} reviews)</span>
          </div>

          {/* Name */}
          <h3 className="font-display font-semibold text-sm text-primary group-hover:text-accent transition-colors duration-300 line-clamp-2 min-h-[40px]">
            <Link to={`/product/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-xs text-text-secondary line-clamp-2 mt-1 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-brand-border/40 flex items-center justify-between">
          {/* Pricing */}
          <div className="flex items-baseline gap-1.5">
            {salePrice ? (
              <>
                <span className="font-display text-sm font-semibold text-primary">₹{salePrice.toLocaleString('en-IN')}</span>
                <span className="font-display text-xs text-text-secondary line-through">₹{basePrice.toLocaleString('en-IN')}</span>
              </>
            ) : (
              <span className="font-display text-sm font-semibold text-primary">₹{basePrice.toLocaleString('en-IN')}</span>
            )}
          </div>

          {/* Cart CTA */}
          <button
            onClick={() => addToCart(product, 1, false)}
            className="p-2 border border-primary hover:bg-primary hover:text-white transition-colors duration-300 text-primary cursor-pointer flex items-center gap-1 uppercase text-[9px] tracking-wider font-bold"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
