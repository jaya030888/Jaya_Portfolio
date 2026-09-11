import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[95vh] bg-[#F9A220] flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden z-10">
      
      {/* Background SVG Wave */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg className="w-full h-full" viewBox="0 0 1920 1403" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M1695.07 151.632c64.24-31.904 131.73-7.088 176.11 42.102 40.17 44.528 55.82 98.753 61.56 156.949 6.14 62.16-2.03 123.84-5.58 185.677-3.39 59.179-3.64 118.025 17.39 174.679 10.72 28.85 25.42 55.218 51.77 73.069 37.97 25.728 81.74 25.202 122.06-1.291 30.97-20.344 55.08-47.559 77.62-76.157" stroke="#080909" strokeWidth="12" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10">
        
        {/* Left Column Content */}
        <div className="lg:col-span-7 text-left">
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-script text-3xl md:text-5xl text-[#080909] mb-4 transform -rotate-2 font-bold"
          >
            The story of me becoming a builder.
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-8xl font-black text-[#080909] leading-[0.96] tracking-tight mb-8"
          >
            I didn't know what I was doing when I started.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-3xl font-medium text-[#080909]/85 mb-10 max-w-xl leading-relaxed"
          >
            I just knew I wanted to build something.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a href="#talk" className="button-alt text-lg md:text-2xl px-8 py-4 font-black">
              <span>Say Hello</span>
              <span className="button-alt__icon-wrap">
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor"/>
                </svg>
              </span>
            </a>

            <p className="font-script text-2xl text-[#080909]/80 transform rotate-1 font-bold">
              Building experiences, line by line.
            </p>
          </motion.div>

        </div>

        {/* Right Column Visual: Iconic Aardvark Box Visual with Floating Animation */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -14, 0] 
            }}
            transition={{ 
              opacity: { duration: 0.9, delay: 0.2 },
              scale: { duration: 0.9, delay: 0.2 },
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="relative"
          >
            <img 
              src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual.webp" 
              alt="Aardvark Developer Story Box" 
              className="w-full max-w-[540px] h-auto object-contain filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.3)] transform hover:rotate-2 transition-transform duration-500"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
