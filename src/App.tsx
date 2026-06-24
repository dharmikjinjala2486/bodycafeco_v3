import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';

// Layout elements
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { SearchOverlay } from './components/ui/SearchOverlay';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Quiz } from './pages/Quiz';
import { Science } from './pages/Science';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Account } from './pages/Account';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { OrderSuccess } from './pages/OrderSuccess';
import { ShippingReturns } from './pages/ShippingReturns';
import { MoneyBackGuarantee } from './pages/MoneyBackGuarantee';
import { Accessibility } from './pages/Accessibility';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePreferences } from './pages/CookiePreferences';

// Scroll Restoration helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-primary selection:bg-primary selection:text-white">
      <ScrollToTop />
      <AnnouncementBar />
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/science" element={<Science />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Transactions / Account */}
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />

          {/* Legal / Policies */}
          <Route path="/shipping-returns" element={<ShippingReturns />} />
          <Route path="/money-back-guarantee" element={<MoneyBackGuarantee />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-preferences" element={<CookiePreferences />} />

          {/* Fallback redirect */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      
      {/* Dynamic Slide Drawer & Search overlay */}
      <CartDrawer />
      <SearchOverlay />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <CartProvider>
        <SearchProvider>
          <AppContent />
        </SearchProvider>
      </CartProvider>
    </Router>
  );
}
