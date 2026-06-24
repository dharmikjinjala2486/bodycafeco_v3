import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, X, Menu, ArrowRight, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────
   Navigation items  (left pill group)
───────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: 'HOME', path: '/' },
  { label: 'SHOP', path: '/shop' },
  { label: 'SCIENCE', path: '/science' },
  { label: 'QUIZ', path: '/quiz' },
];

const MOBILE_NAV = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Science', path: '/science' },
  { label: 'Quiz', path: '/quiz' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();

  /* sticky scroll effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* close mobile menu on route change */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      {/* ══════════════════════════ DESKTOP HEADER ══════════════════════════ */}
      <header
        aria-label="Main site header"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '90px',
          zIndex: 40,
          backgroundColor: '#FFFFFF',
          borderBottom: isScrolled ? '1px solid #F1F1F1' : '1px solid #F1F1F1',
          boxShadow: isScrolled
            ? '0 4px 24px rgba(0,0,0,0.06)'
            : '0 1px 0 0 #F1F1F1',
          transition: 'box-shadow 0.3s ease',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {/* ── LEFT: Pill Navigation ── */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <nav
              aria-label="Primary navigation"
              className="hidden md:flex"
              style={{
                backgroundColor: '#F7F7F7',
                borderRadius: '999px',
                padding: '6px 6px',
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
              }}
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    aria-current={active ? 'page' : undefined}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '7px 18px',
                      borderRadius: '999px',
                      fontSize: '11px',
                      fontWeight: active ? 600 : 500,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: active ? '#111111' : '#6B7280',
                      textDecoration: 'none',
                      backgroundColor: active ? '#FFFFFF' : 'transparent',
                      boxShadow: active
                        ? '0 1px 6px rgba(0,0,0,0.10), 0 0 0 0.5px rgba(0,0,0,0.04)'
                        : 'none',
                      transition: 'all 0.22s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLElement).style.color = '#111111';
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          'rgba(255,255,255,0.6)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLElement).style.color = '#6B7280';
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          'transparent';
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                color: '#111111',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Menu size={22} />
            </button>
          </div>

          {/* ── CENTER: Wordmark Logo ── */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/" aria-label="Body Cafe Co. – go to homepage">
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: '15px',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  color: '#1A1A1A',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  lineHeight: 1,
                  display: 'block',
                  userSelect: 'none',
                }}
              >
                BODY CAFE CO.
              </span>
            </Link>
          </div>

          {/* ── RIGHT: Actions ── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '4px',
            }}
          >
            {/* LOGIN */}
            <Link
              to="/account"
              aria-label="Login to your account"
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: '#4B4B4B',
                textDecoration: 'none',
                padding: '7px 14px',
                borderRadius: '999px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#F5F5F5';
                (e.currentTarget as HTMLElement).style.color = '#111111';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLElement).style.color = '#4B4B4B';
              }}
              className="hidden md:inline-flex items-center"
            >
              LOGIN
            </Link>

            {/* Currency Selector */}
            <button
              aria-label="Select currency"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.06em',
                color: '#4B4B4B',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '7px 12px',
                borderRadius: '999px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#F5F5F5';
                (e.currentTarget as HTMLElement).style.color = '#111111';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLElement).style.color = '#4B4B4B';
              }}
              className="hidden md:flex"
            >
              INR
              <ChevronDown size={12} strokeWidth={2} />
            </button>

            {/* Cart */}
            <button
              onClick={() => toggleCart(true)}
              aria-label={`Open cart, ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1px solid #EBEBEB',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginLeft: '4px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  '0 4px 16px rgba(0,0,0,0.12)';
                (e.currentTarget as HTMLElement).style.borderColor = '#D0D0D0';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  '0 1px 4px rgba(0,0,0,0.08)';
                (e.currentTarget as HTMLElement).style.borderColor = '#EBEBEB';
              }}
            >
              <ShoppingBag size={17} color="#1A1A1A" strokeWidth={1.8} />
              {cartCount > 0 && (
                <span
                  aria-live="polite"
                  style={{
                    position: 'absolute',
                    top: '-2px',
                    right: '-2px',
                    minWidth: '17px',
                    height: '17px',
                    backgroundColor: '#D9302C',
                    color: '#FFFFFF',
                    fontSize: '9px',
                    fontWeight: 700,
                    letterSpacing: '0',
                    borderRadius: '999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingInline: '3px',
                    border: '1.5px solid #FFFFFF',
                    lineHeight: 1,
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ══════════════════════════ MOBILE MENU ══════════════════════════ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.35)',
                backdropFilter: 'blur(4px)',
                zIndex: 45,
              }}
            />

            {/* Drawer */}
            <motion.div
              key="mobile-drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                width: '80%',
                maxWidth: '340px',
                backgroundColor: '#FFFFFF',
                zIndex: 50,
                display: 'flex',
                flexDirection: 'column',
                padding: '0',
                boxShadow: '4px 0 32px rgba(0,0,0,0.12)',
              }}
            >
              {/* Drawer Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '24px 24px 20px',
                  borderBottom: '1px solid #F1F1F1',
                }}
              >
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Body Cafe Co. Home"
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      color: '#1A1A1A',
                      textTransform: 'uppercase',
                    }}
                  >
                    BODY CAFE CO.
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '6px',
                    color: '#4B4B4B',
                    display: 'flex',
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav
                aria-label="Mobile navigation"
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '12px 0',
                  overflowY: 'auto',
                }}
              >
                {MOBILE_NAV.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px 24px',
                        fontSize: '14px',
                        fontWeight: active ? 600 : 500,
                        color: active ? '#111111' : '#555555',
                        textDecoration: 'none',
                        backgroundColor: active ? '#F7F9FC' : 'transparent',
                        borderLeft: active ? '3px solid #1A1A1A' : '3px solid transparent',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <span>{item.label}</span>
                      <ArrowRight size={14} color="#C0C0C0" />
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile footer actions */}
              <div
                style={{
                  padding: '20px 24px',
                  borderTop: '1px solid #F1F1F1',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <Link
                  to="/quiz"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '13px 20px',
                    backgroundColor: '#111111',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    transition: 'background 0.2s ease',
                  }}
                >
                  Take the Supplement Quiz
                </Link>
                <p
                  style={{
                    fontSize: '10px',
                    color: '#9CA3AF',
                    textAlign: 'center',
                    letterSpacing: '0.02em',
                    margin: 0,
                  }}
                >
                  Body Cafe Co. — Science-Backed Human Performance
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
