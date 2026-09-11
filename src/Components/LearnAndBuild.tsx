import { motion } from 'framer-motion';

export const LearnAndBuild = () => {
  return (
    <section className="bg-[#FAF5EF] py-24 px-6 md:px-12 border-t border-b border-black/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-7xl font-black text-[#080909] tracking-tight mb-4">
              How I Learn & Build
            </h2>
            <p className="text-lg md:text-2xl text-[#080909]/75 max-w-xl font-medium">
              The continuous loop of curiosity, experimentation, and refinement.
            </p>
          </div>
          <p className="font-script text-2xl md:text-3xl text-[#C13A1F] transform -rotate-2 font-bold">
            Consider me a developer in constant evolution
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Step 1 */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-[#32225F] text-white p-8 rounded-[32px] flex flex-col justify-between shadow-xl min-h-[360px]"
          >
            <div>
              <span className="font-script text-2xl text-[#F9A220] font-bold block mb-4">Step #1</span>
              <h3 className="text-3xl font-black mb-4 leading-tight">Break Things & Experiment</h3>
              <p className="text-white/85 text-base leading-relaxed">
                My first step wasn't impressive. But code stopped being study material and became something I could make. I broke things, then I fixed them.
              </p>
            </div>
            <div className="pt-6 border-t border-white/20 mt-auto flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-widest text-[#F9A220]">Foundation</span>
              <span className="text-2xl">⚡</span>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-[#FD48F2] text-white p-8 rounded-[32px] flex flex-col justify-between shadow-xl min-h-[360px]"
          >
            <div>
              <span className="font-script text-2xl text-black font-bold block mb-4">Step #2</span>
              <h3 className="text-3xl font-black mb-4 leading-tight">Fetch Real Data</h3>
              <p className="text-white/90 text-base leading-relaxed">
                Connecting code to APIs. Suddenly, my applications weren't just displaying hardcoded elements—they fetched real data from the outside world.
              </p>
            </div>
            <div className="pt-6 border-t border-white/20 mt-auto flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-widest text-black">APIs & Connectivity</span>
              <span className="text-2xl">🌐</span>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-[#F9A220] text-black p-8 rounded-[32px] flex flex-col justify-between shadow-xl min-h-[360px]"
          >
            <div>
              <span className="font-script text-2xl text-[#32225F] font-bold block mb-4">Step #3</span>
              <h3 className="text-3xl font-black mb-4 leading-tight">Design Experiences</h3>
              <p className="text-black/85 text-base leading-relaxed">
                Thinking less about "Can I code this?" and more about "What does someone experience when they use this?" Micro-interactions & animations.
              </p>
            </div>
            <div className="pt-6 border-t border-black/20 mt-auto flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-widest text-[#32225F]">UI / UX Focus</span>
              <span className="text-2xl">✨</span>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-[#1CE8ED] text-black p-8 rounded-[32px] flex flex-col justify-between shadow-xl min-h-[360px]"
          >
            <div>
              <span className="font-script text-2xl text-[#3D3195] font-bold block mb-4">Step #4</span>
              <h3 className="text-3xl font-black mb-4 leading-tight">Scale Full Systems</h3>
              <p className="text-black/85 text-base leading-relaxed">
                Transitioning to full-stack architectures. Databases, authentication, CRUD operations, dashboards, and AI-driven solutions.
              </p>
            </div>
            <div className="pt-6 border-t border-black/20 mt-auto flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-widest text-[#3D3195]">Systems & AI</span>
              <span className="text-2xl">🚀</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LearnAndBuild;
