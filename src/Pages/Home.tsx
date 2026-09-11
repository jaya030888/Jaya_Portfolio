import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import BooksSlider from '../Components/BooksSlider';
import LearnAndBuild from '../Components/LearnAndBuild';
import BoxShowcase from '../Components/BoxShowcase';
import TechMarquee from '../Components/TechMarquee';
import FaqExclusiveSection from '../Components/FaqExclusiveSection';
import ContactSection from '../Components/ContactSection';

export const Home = () => {
  const [easterEggOpen, setEasterEggOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-[#FAF7F2] text-[#231F20] font-sans overflow-x-hidden min-h-screen relative">
      
      {/* 1. Authentic Aardvark Floating Header Navigation */}
      <Navbar />

      {/* 2. Authentic Aardvark Yellow Wave Hero Banner */}
      <Hero />

      {/* 3. Authentic Aardvark Horizontal Book/Project Card Slider */}
      <BooksSlider />

      {/* 4. Authentic Aardvark 4-Step 'How It Works' Spread */}
      <LearnAndBuild />

      {/* 5. Authentic Aardvark 3D Box Showcase & Feature Badges */}
      <BoxShowcase />

      {/* 6. Authentic Aardvark Overlapping Tilted Ticker Banners */}
      <TechMarquee />

      {/* 7. Authentic Aardvark Exclusive Card & FAQ Accordion */}
      <FaqExclusiveSection />

      {/* 8. Authentic Aardvark Deep Purple Footer & Newsletter Form */}
      <ContactSection />

      {/* Interactive Floating Aardvark Easter Egg Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setEasterEggOpen(!easterEggOpen)}
          className="w-14 h-14 rounded-full bg-[#EC278E] text-white flex items-center justify-center shadow-[0_6px_0_#231F20] hover:scale-110 transition-transform border-3 border-[#231F20]"
          aria-label="Toggle Easter Egg"
        >
          <span className="text-2xl font-black">✦</span>
        </button>

        <AnimatePresence>
          {easterEggOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-20 right-0 w-80 bg-[#FFC83B] text-[#231F20] p-6 rounded-[32px] shadow-[0_8px_0_#231F20] border-4 border-[#231F20] relative overflow-hidden"
            >
              <div className="absolute top-2 right-3">
                <button onClick={() => setEasterEggOpen(false)} className="font-black text-xl">✕</button>
              </div>
              <p className="font-script text-2xl font-bold mb-2">Want to build something together?</p>
              <p className="text-sm font-bold mb-4 opacity-90">Come with a thought, a question, or an idea. Let's make it real.</p>
              <a 
                href="#talk" 
                onClick={() => setEasterEggOpen(false)} 
                className="aardvark-pill-btn text-sm px-5 py-2.5"
              >
                <span>SAY HELLO NOW →</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </main>
  );
};

export default Home;
