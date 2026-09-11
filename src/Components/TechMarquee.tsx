import { motion } from 'framer-motion';

export const TechMarquee = () => {
  return (
    <section className="bg-[#FD48F2] text-white py-16 overflow-hidden relative">
      <div className="text-center mb-8 px-6">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-2">Technologies & Stack</h2>
        <p className="font-script text-2xl md:text-3xl text-black font-bold transform -rotate-1">
          Tools I use to bring ideas to life
        </p>
      </div>

      {/* Animated Marquee Ticker */}
      <div className="flex whitespace-nowrap overflow-hidden py-4 border-t border-b border-white/20 bg-black/10">
        <motion.div 
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 text-3xl md:text-5xl font-black tracking-tight text-white"
        >
          <span>HTML · CSS · JavaScript</span>
          <span>✦</span>
          <span>React · Next.js · Tailwind</span>
          <span>✦</span>
          <span>Node.js · Express · MySQL</span>
          <span>✦</span>
          <span>REST APIs · GSAP · AI & Research</span>
          <span>✦</span>
          <span>HTML · CSS · JavaScript</span>
          <span>✦</span>
          <span>React · Next.js · Tailwind</span>
          <span>✦</span>
          <span>Node.js · Express · MySQL</span>
          <span>✦</span>
          <span>REST APIs · GSAP · AI & Research</span>
        </motion.div>
      </div>
    </section>
  );
};

export default TechMarquee;
