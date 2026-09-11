import { motion } from 'framer-motion';

const featureStickers = [
  { text: 'Range of stack', bg: '#EC278E', color: '#FFFFFF', rotate: '-rotate-3' },
  { text: 'Clean architecture', bg: '#FFC83B', color: '#231F20', rotate: 'rotate-2' },
  { text: 'User-centered UX', bg: '#807BE3', color: '#FFFFFF', rotate: '-rotate-1' },
  { text: 'High quality code', bg: '#6ABF4C', color: '#231F20', rotate: 'rotate-3' },
  { text: 'AI Driven solutions', bg: '#F9A220', color: '#231F20', rotate: '-rotate-2' }
];

export const BoxShowcase = () => {
  return (
    <section className="bg-[#FAF7F2] py-24 px-6 md:px-12 border-b-4 border-[#231F20] relative">
      <div className="max-w-7xl mx-auto bg-[#1CE8ED] rounded-[44px] border-4 border-[#231F20] p-8 md:p-16 shadow-[0_10px_0_#231F20] relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-6">
            <span className="font-script text-2xl text-[#231F20] font-bold block mb-2">
              Why build with Jaya Patel?
            </span>

            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-[#231F20] leading-none mb-6">
              THINK INSIDE <br />
              <span className="text-white underline decoration-wavy decoration-[#231F20]">THE BOX.</span>
            </h2>

            <p className="text-xl md:text-2xl font-medium text-[#231F20] leading-relaxed mb-8 max-w-lg">
              Every project comes as a full package — combining thoughtful UI/UX, robust frontend logic, scalable backend APIs, and clean documentation.
            </p>

            <div className="font-script text-2xl md:text-3xl text-[#231F20] font-bold bg-white p-5 rounded-2xl border-2 border-[#231F20] shadow-[0_4px_0_#231F20] mb-8 inline-block">
              "Each build includes a responsive layout, custom design system, and clean code!"
            </div>

            {/* Feature Stickers */}
            <div className="flex flex-wrap gap-3">
              {featureStickers.map((stk, idx) => (
                <div 
                  key={idx}
                  className={`px-4 py-2 rounded-full border-2 border-[#231F20] shadow-[0_3px_0_#231F20] font-black text-xs uppercase tracking-wider ${stk.rotate}`}
                  style={{ backgroundColor: stk.bg, color: stk.color }}
                >
                  ✦ {stk.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Box Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div 
              whileHover={{ rotate: 2, scale: 1.02 }}
              className="relative w-full max-w-[480px] bg-white rounded-[36px] border-4 border-[#231F20] p-6 shadow-[0_12px_0_#231F20]"
            >
              <img 
                src="/hero-composition.jpg" 
                alt="Aardvark Style Developer Box" 
                className="w-full h-auto object-cover rounded-[24px] border-2 border-[#231F20]"
              />
              <div className="mt-4 flex items-center justify-between">
                <span className="font-black text-sm uppercase tracking-widest text-[#231F20]">
                  JAYA BUILDER BOX
                </span>
                <span className="aardvark-tag bg-[#EC278E] text-white">
                  VERIFIED QUALITY
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BoxShowcase;
