import { motion } from 'framer-motion';

const shiftSteps = [
  { step: '01', title: 'LEARNING CODE', desc: 'Understanding syntax, variables, and logic fundamentals.', color: '#3D3195', tagBg: '#F9A220' },
  { step: '02', title: 'BUILDING PROJECTS', desc: 'Putting concepts into practice with Todo apps and mini builds.', color: '#FD48F2', tagBg: '#1CE8ED' },
  { step: '03', title: 'WORKING WITH REAL DATA', desc: 'Connecting to APIs, handling asynchronous state & JSON streams.', color: '#1CE8ED', tagBg: '#080909' },
  { step: '04', title: 'DESIGNING EXPERIENCES', desc: 'Caring deeply about typography, rhythm, motion, and visual clarity.', color: '#F9A220', tagBg: '#3D3195' },
  { step: '05', title: 'THINKING ABOUT USERS', desc: 'Asking "How does someone feel when interacting with this screen?"', color: '#6ABF4C', tagBg: '#080909' },
  { step: '06', title: 'BUILDING SYSTEMS', desc: 'Designing full-stack databases, authentication, and architectures.', color: '#C13A1F', tagBg: '#F9A220' },
  { step: '07', title: 'EXPLORING AI', desc: 'Leveraging intelligent models, prompts, and autonomous agent workflows.', color: '#3D3195', tagBg: '#1CE8ED' },
  { step: '08', title: 'CONNECTING TECH + DESIGN + MARKETING', desc: 'Building complete digital products people actually care about using.', color: '#080909', tagBg: '#FD48F2' }
];

export const TheShift = () => {
  return (
    <section id="shift" className="bg-[#080909] text-white py-28 px-6 md:px-12 relative overflow-hidden">
      
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="font-script text-3xl md:text-4xl text-[#F9A220] font-bold block mb-4 transform -rotate-2">
          How my perspective evolved over time
        </span>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none mb-6">
          THE SHIFT<span className="text-[#FD48F2]">.</span>
        </h2>
        <p className="text-xl md:text-3xl text-white/80 font-medium leading-relaxed max-w-2xl mx-auto">
          I didn't just learn more tools — I started asking completely different questions.
        </p>
      </div>

      {/* Visual Transformation Timeline Track */}
      <div className="max-w-3xl mx-auto relative">
        
        {/* Animated Vertical Connector Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#3D3195] via-[#1CE8ED] to-[#FD48F2] transform md:-translate-x-1/2 rounded-full"></div>

        <div className="space-y-12 relative z-10">
          {shiftSteps.map((node, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={node.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-8`}
              >
                
                {/* Content Box */}
                <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right pl-16 md:pl-0 md:pr-8' : 'md:text-left pl-16 md:pl-8'}`}>
                  <div 
                    className="p-6 rounded-3xl border-3 border-black shadow-2xl transition-transform hover:scale-105 inline-block text-left w-full"
                    style={{ backgroundColor: node.color, color: node.color === '#1CE8ED' || node.color === '#F9A220' || node.color === '#6ABF4C' ? '#080909' : '#FFFFFF' }}
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span 
                        className="px-3 py-1 rounded-full font-black text-xs uppercase tracking-widest"
                        style={{ backgroundColor: node.tagBg, color: node.tagBg === '#F9A220' || node.tagBg === '#1CE8ED' ? '#080909' : '#FFFFFF' }}
                      >
                        STEP {node.step}
                      </span>
                      <span className="font-display font-black text-xl opacity-60">
                        →
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                      {node.title}
                    </h3>
                    <p className="text-base font-medium opacity-90 leading-snug">
                      {node.desc}
                    </p>
                  </div>
                </div>

                {/* Center Circle Indicator */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-black bg-[#F9A220] flex items-center justify-center font-black text-xs text-black shadow-xl z-20">
                  ✦
                </div>

                {/* Empty opposite side for spacing */}
                <div className="hidden md:block w-1/2"></div>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default TheShift;
