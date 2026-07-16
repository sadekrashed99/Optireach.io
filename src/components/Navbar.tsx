import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Results', href: '/#results' },
    { name: 'CRM', href: '/#crm' },
    { name: 'Offer', href: '/offer' },
  ];

  return (
    <>
      <div className="bg-[#ccff00] text-zinc-950 text-[11px] sm:text-xs font-bold tracking-wide py-2.5 px-4 text-center flex items-center justify-center gap-2 z-50 relative uppercase">
        <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
        Stay Sharp Live 2026 - AI Era - 10X Your Business - Aug 8 - Riga
        <a href="#event" className="underline ml-2 inline-flex items-center gap-1 hover:opacity-70 transition-opacity">
          Learn more <ArrowRight className="w-3 h-3" />
        </a>
      </div>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-3 mt-8'
            : 'bg-transparent py-5 mt-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="font-heading font-bold text-2xl tracking-tighter text-white">
                sharpify
                <span className="text-brand">.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-3 py-1">
                 <span className="text-xs text-zinc-400 font-medium">EN</span>
              </div>
              <a href="#login" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors px-2">
                Log In
              </a>
              <a
                href="#demo"
                className="bg-brand hover:bg-brand-hover text-zinc-950 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                Book a demo
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-zinc-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-zinc-950 pt-28 px-4 pb-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-center mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-2xl font-heading font-semibold text-zinc-200 hover:text-brand"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <a
                href="#login"
                className="text-center text-lg font-medium text-zinc-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log In
              </a>
              <a
                href="#demo"
                className="bg-brand text-white text-center text-lg font-medium px-6 py-4 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
