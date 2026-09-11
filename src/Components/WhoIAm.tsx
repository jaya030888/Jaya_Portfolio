import { motion } from 'framer-motion';

export const WhoIAm = () => {
  return (
    <section className="bg-[#FAF5EF] text-[#080909] py-28 px-6 md:px-12 border-t-4 border-b-4 border-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#F9A220] p-8 md:p-16 rounded-[48px] border-4 border-black shadow-2xl relative overflow-hidden"
        >
          
          {/* Decorative Tag */}
          <div className="inline-block bg-[#080909] text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-8">
            PERSONAL MANIFESTO
          </div>

          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8 text-[#080909]">
            SO, WHAT AM I <br />
            <span className="text-[#3D3195]">BECOMING?</span>
          </h2>

          <div className="space-y-6 text-xl md:text-3xl font-bold leading-relaxed text-[#080909] max-w-4xl">
            <p>
              I'm a <span className="bg-[#080909] text-[#1CE8ED] px-3 py-1 rounded-lg">CSE student</span>, but I don't want my world to be limited to code alone.
            </p>
            
            <p className="font-script text-3xl md:text-5xl text-[#3D3195] font-bold transform -rotate-1">
              "I'm interested in software, AI, design, digital marketing, content, startups, research, and building things that people actually want to use."
            </p>

            <p className="text-lg md:text-2xl font-medium opacity-90 pt-4">
              I believe the most compelling work happens at the intersection of technical depth, aesthetic intuition, and deep human empathy.
            </p>
          </div>

          {/* Sticker Badge */}
          <div className="mt-12 flex flex-wrap gap-4 items-center pt-8 border-t-2 border-black/20">
            <span className="tag-small bg-[#080909] text-white">SOFTWARE DEVELOPMENT</span>
            <span className="tag-small bg-[#1CE8ED] text-black">ARTIFICIAL INTELLIGENCE</span>
            <span className="tag-small bg-[#FD48F2] text-white">UI/UX DESIGN</span>
            <span className="tag-small bg-[#3D3195] text-white">GROWTH & MARKETING</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default WhoIAm;
