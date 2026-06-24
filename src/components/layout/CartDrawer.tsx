import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import { Link, useNavigate } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, toggleCart, addToCart, updateQuantity, removeFromCart, cartSubtotal, shippingCost, cartTotal } = useCart();
  const navigate = useNavigate();

  // Find an upsell product: choose a product from the database that is NOT in the cart
  const inCartIds = cart.map((item) => item.product.id);
  const upsellProduct = products.find((p) => !inCartIds.includes(p.id)) || products[0];

  const handleCheckoutClick = () => {
    toggleCart(false);
    navigate('/checkout');
  };

  const handleCartPageClick = () => {
    toggleCart(false);
    navigate('/cart');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleCart(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 cursor-pointer"
          />

          {/* Drawer panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-bg shadow-2xl z-50 flex flex-col border-l border-brand-border"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-border flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <span className="font-display font-semibold text-lg text-primary">Your Cart</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={() => toggleCart(false)}
                className="p-2 hover:bg-brand-bg rounded-full transition-colors cursor-pointer text-gray-500 hover:text-primary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart items list / Empty state */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-white border border-brand-border">
                    <ShoppingBag className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="font-display font-semibold text-primary text-lg">Your cart is empty</h3>
                  <p className="text-sm text-text-secondary max-w-[250px] mx-auto">
                    Invest in your longevity. Discover scientific supplement stacks to boost performance.
                  </p>
                  <button
                    onClick={() => {
                      toggleCart(false);
                      navigate('/shop');
                    }}
                    className="px-6 py-2.5 bg-primary text-white text-xs font-semibold uppercase tracking-wider hover:bg-accent transition-colors duration-300"
                  >
                    Shop All Products
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    {cart.map((item) => {
                      const basePrice = item.product.salePrice || item.product.price;
                      const finalPrice = item.isSubscription
                        ? basePrice * (1 - item.product.subscriptionDiscount / 100)
                        : basePrice;

                      return (
                        <div
                          key={`${item.product.id}-${item.isSubscription ? 'sub' : 'one'}`}
                          className="flex gap-4 p-4 bg-white border border-brand-border hover:shadow-sm transition-shadow rounded"
                        >
                          <div className="w-20 h-20 bg-brand-bg rounded overflow-hidden flex-shrink-0 border border-brand-border">
                            <img
                              src={item.product.imageUrl}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex-1 flex flex-col justify-between min-w-0">
                            <div>
                              <div className="flex justify-between items-start gap-2">
                                <h4 className="font-display text-xs font-semibold text-primary hover:text-accent transition-colors truncate">
                                  <Link
                                    to={`/product/${item.product.slug}`}
                                    onClick={() => toggleCart(false)}
                                  >
                                    {item.product.name}
                                  </Link>
                                </h4>
                                <button
                                  onClick={() => removeFromCart(item.product.id, item.isSubscription)}
                                  className="text-gray-400 hover:text-accent p-0.5 cursor-pointer"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              <p className="text-[10px] text-text-secondary mt-0.5 uppercase tracking-wider font-semibold">
                                {item.product.category}
                              </p>
                              {item.isSubscription && (
                                <span className="inline-block mt-1 text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100 font-medium">
                                  Auto-ship: every {item.frequency} days (15% Off)
                                </span>
                              )}
                            </div>

                            <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-border/40">
                              <div className="flex items-center border border-brand-border bg-brand-bg rounded">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.isSubscription, item.quantity - 1)}
                                  className="px-2 py-1 text-gray-500 hover:text-primary transition-colors cursor-pointer"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="px-2 text-xs font-semibold text-primary">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.isSubscription, item.quantity + 1)}
                                  className="px-2 py-1 text-gray-500 hover:text-primary transition-colors cursor-pointer"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                              <span className="font-display text-sm font-semibold text-primary">
                                ₹{Math.round(finalPrice * item.quantity).toLocaleString('en-IN')}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Scientific Supplement Upsell */}
                  {upsellProduct && (
                    <div className="border border-brand-border bg-emerald-50/50 p-4 rounded mt-6">
                      <p className="text-xs text-emerald-800 font-semibold uppercase tracking-wider mb-2">Recommended Add-on</p>
                      <div className="flex gap-3">
                        <div className="w-14 h-14 bg-white rounded overflow-hidden flex-shrink-0 border border-brand-border">
                          <img
                            src={upsellProduct.imageUrl}
                            alt={upsellProduct.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-display font-semibold text-xs text-primary truncate">{upsellProduct.name}</h5>
                          <p className="text-[10px] text-text-secondary truncate mt-0.5">{upsellProduct.shortDescription}</p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs font-semibold text-primary">₹{upsellProduct.price}</span>
                            <button
                              onClick={() => addToCart(upsellProduct, 1, false)}
                              className="text-[10px] font-bold text-accent hover:text-primary cursor-pointer flex items-center gap-1 uppercase tracking-widest"
                            >
                              Add to Stack <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer Summary / Checkout actions */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-brand-border bg-white space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-text-secondary">
                    <span>Subtotal</span>
                    <span className="font-semibold text-primary">₹{Math.round(cartSubtotal).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-xs text-text-secondary">
                    <span>Shipping</span>
                    <span>{shippingCost === 0 ? <span className="text-brand-success font-semibold">FREE</span> : `₹${shippingCost}`}</span>
                  </div>
                  <div className="flex justify-between border-t border-brand-border pt-2 text-sm font-semibold text-primary">
                    <span>Estimated Total</span>
                    <span>₹{Math.round(cartTotal).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={handleCartPageClick}
                    className="w-full py-3 border border-primary text-primary hover:bg-brand-bg transition-colors duration-300 font-semibold text-xs uppercase tracking-wider text-center"
                  >
                    View Full Cart
                  </button>
                  <button
                    onClick={handleCheckoutClick}
                    className="w-full py-3 bg-primary text-white hover:bg-accent transition-colors duration-300 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Checkout <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[10px] text-center text-text-secondary">
                  Free shipping on subscription items. 60-day money-back guarantee applies automatically.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
