import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Riscos', href: '#casos' },
  { label: 'Programa', href: '#programa' },
  { label: 'Processo', href: '#timeline' },
  { label: 'Contato', href: '#contato' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  const updateActiveSection = useCallback(() => {
    const sections = navLinks.map((l) => l.href.substring(1));
    let current = 'hero';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          current = id;
        }
      }
    }
    setActiveSection(`#${current}`);
  }, []);

  useEffect(() => {
    const lastCall = { current: 0 };
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastCall.current < 100) return;
      lastCall.current = now;
      setScrolled(window.scrollY > 50);
      updateActiveSection();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [updateActiveSection]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-verde-escuro/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="flex items-center">
            <img
              src="/logos/x4agro-logo.svg"
              alt="X4AGRO"
              className={`transition-all duration-300 w-auto ${
                scrolled ? 'h-8' : 'h-10'
              }`}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative font-medium text-sm transition-colors duration-200 ${
                  activeSection === link.href
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-verde-claro rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => handleClick(e, '#contato')}
              className="bg-verde-claro hover:bg-verde-medio text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 text-sm"
            >
              Agendar Diagnóstico
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-0 bg-verde-escuro z-40 flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-5">
              <img
                src="/logos/x4agro-logo.svg"
                alt="X4AGRO"
                className="h-10 w-auto"
                loading="lazy"
              />
              <button onClick={() => setMobileOpen(false)} className="text-white p-2">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className={`text-xl font-medium transition-colors ${
                    activeSection === link.href
                      ? 'text-verde-claro'
                      : 'text-white hover:text-verde-claro'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contato"
                onClick={(e) => handleClick(e, '#contato')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
                className="mt-4 bg-verde-claro hover:bg-verde-medio text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 text-lg"
              >
                Agendar Diagnóstico
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
