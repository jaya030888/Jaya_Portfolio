import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-md' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#080909] text-[#F9A220] flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl md:text-2xl tracking-tight leading-none text-[#080909]">
                Portfolio<span className="text-[#F9A220]">.</span>
              </span>
              <span className="font-script text-xs text-[#080909]/70 font-bold tracking-wider">
                dev story
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider text-[#080909]">
            <a href="#hero" className="hover:text-[#F9A220] transition-colors py-1">Beginning</a>
            <a href="#chapters" className="hover:text-[#F9A220] transition-colors py-1">Chapters</a>
            <a href="#shift" className="hover:text-[#F9A220] transition-colors py-1">The Shift</a>
            <a href="#talk" className="hover:text-[#F9A220] transition-colors py-1">Let's Talk</a>
          </nav>

          {/* Right Action & Socials */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              aria-label="GitHub" 
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#080909] hover:text-white transition-all duration-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            
            <a 
              href="#talk" 
              className="button-alt"
            >
              <span>Say Hello</span>
              <span className="button-alt__icon-wrap">
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full border border-black/20 font-bold text-sm"
          >
            <span>Menu</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#F9A220] flex flex-col justify-center items-center text-center p-8 md:hidden"
          >
            <nav className="flex flex-col gap-8 text-3xl font-black tracking-tight mb-12">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Beginning</a>
              <a href="#chapters" onClick={() => setMobileMenuOpen(false)}>Chapters</a>
              <a href="#shift" onClick={() => setMobileMenuOpen(false)}>The Shift</a>
              <a href="#talk" onClick={() => setMobileMenuOpen(false)}>Let's Talk</a>
            </nav>
            <a 
              href="#talk" 
              onClick={() => setMobileMenuOpen(false)}
              className="button-alt text-xl px-8 py-4"
            >
              <span>Say Hello</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
