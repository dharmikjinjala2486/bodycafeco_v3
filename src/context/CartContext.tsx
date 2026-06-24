import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  isSubscription: boolean;
  frequency: number; // in days, e.g., 30, 45, 60
}

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Product, quantity: number, isSubscription: boolean, frequency?: number) => void;
  removeFromCart: (productId: string, isSubscription: boolean) => void;
  updateQuantity: (productId: string, isSubscription: boolean, quantity: number) => void;
  clearCart: () => void;
  toggleCart: (isOpen?: boolean) => void;
  cartCount: number;
  cartSubtotal: number;
  shippingCost: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem('bodycafe_cart');
    return stored ? JSON.parse(stored) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('bodycafe_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number, isSubscription: boolean, frequency: number = 30) => {
    setCart((prev) => {
      // Find if item already exists in the cart with the same subscription status
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.isSubscription === isSubscription
      );

      if (existingIndex > -1) {
        const newCart = [...prev];
        newCart[existingIndex].quantity += quantity;
        return newCart;
      }

      return [...prev, { product, quantity, isSubscription, frequency }];
    });
    setIsCartOpen(true); // Open the cart slide-over automatically when an item is added
  };

  const removeFromCart = (productId: string, isSubscription: boolean) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.isSubscription === isSubscription)));
  };

  const updateQuantity = (productId: string, isSubscription: boolean, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, isSubscription);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.isSubscription === isSubscription
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleCart = (isOpen?: boolean) => {
    setIsCartOpen((prev) => (isOpen !== undefined ? isOpen : !prev));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartSubtotal = cart.reduce((total, item) => {
    const basePrice = item.product.salePrice || item.product.price;
    const pricePerUnit = item.isSubscription
      ? basePrice * (1 - item.product.subscriptionDiscount / 100)
      : basePrice;
    return total + pricePerUnit * item.quantity;
  }, 0);

  // Free shipping over 999 INR, or always free for subscription items in cart
  const hasSubscription = cart.some((item) => item.isSubscription);
  const shippingCost = cart.length === 0 || cartSubtotal >= 999 || hasSubscription ? 0 : 99;

  const cartTotal = cartSubtotal + shippingCost;

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        cartCount,
        cartSubtotal,
        shippingCost,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
