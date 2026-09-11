import { motion } from 'framer-motion';

export const BeginningSection = () => {
  return (
    <section id="beginning" className="relative min-h-screen bg-[#3D3195] text-white py-28 px-6 md:px-12 flex items-center overflow-hidden z-20">
      
      {/* Background Graphic Watermark */}
      <div className="absolute -top-12 -left-12 opacity-10 pointer-events-none select-none text-[18rem] font-black leading-none text-white font-display">
        01
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10">
        
        {/* Left Column Text Story */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="bg-[#F9A220] text-black font-black text-xs uppercase px-4 py-1.5 rounded-full border border-black tracking-widest">
              CHAPTER 01 • FOUNDATION
            </span>
            <span className="font-script text-2xl text-[#1CE8ED] font-bold">
              Where it all began
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-7xl font-black leading-[0.96] tracking-tighter uppercase mb-6"
          >
            Everyone starts <br />
            <span className="text-[#F9A220]">somewhere.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-script text-3xl md:text-5xl text-[#1CE8ED] mb-8 font-bold transform -rotate-1"
          >
            My first build wasn't impressive. <br />
            It was a Todo App.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed space-y-6 mb-10 border-l-4 border-[#F9A220] pl-6 bg-white/5 py-4 rounded-r-2xl"
          >
            <p>
              My first step wasn't impressive. It was a Todo app.
            </p>
            <p className="font-bold text-white">
              But it was the first time code stopped being something I was studying and became something I could make.
            </p>
            <p className="text-white/80">
              I broke things. I fixed them. And I wanted to build another one.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <span className="tag-small bg-white/15 text-white">HTML / CSS / JS</span>
            <span className="tag-small bg-white/15 text-white">DOM Manipulation</span>
            <span className="tag-small bg-[#1CE8ED] text-black">First Spark</span>
          </motion.div>

        </div>

        {/* Right Column: Giant Visual Artifact Overlapping Typography */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[620px] lg:-mr-12"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#1CE8ED]/20 blur-3xl rounded-full transform scale-110 pointer-events-none"></div>

            {/* Oversized Image Container with Cutouts & Overlaps */}
            <div className="relative rounded-[40px] overflow-hidden border-4 border-black bg-[#080909] p-3 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/todo-app-artifact.jpg" 
                alt="Todo App - The First Build" 
                className="w-full h-auto object-cover rounded-[30px]"
              />

              {/* Overlapping Editorial Stickers */}
              <div className="absolute -bottom-4 -left-4 bg-[#F9A220] text-black p-4 md:p-6 rounded-[28px] border-3 border-black shadow-2xl transform -rotate-6 max-w-xs">
                <span className="font-script text-xl md:text-2xl font-bold block mb-1">
                  "It worked!"
                </span>
                <span className="text-xs uppercase font-black tracking-widest opacity-80">
                  First deployment moment
                </span>
              </div>

              <div className="absolute -top-4 -right-4 bg-[#FD48F2] text-white px-6 py-3 rounded-full border-3 border-black shadow-2xl font-black text-sm uppercase tracking-widest transform rotate-6">
                CHAPTER 01
              </div>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default BeginningSection;
