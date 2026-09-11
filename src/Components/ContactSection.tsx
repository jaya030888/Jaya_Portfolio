import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <section id="talk" className="bg-[#372B83] text-white py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Top Protruding 3D Box Visual */}
      <div className="max-w-7xl mx-auto -mt-36 mb-12 flex justify-center">
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-[#FFC83B] text-[#231F20] p-6 rounded-[32px] border-4 border-[#231F20] shadow-[0_12px_0_#231F20] flex flex-col md:flex-row items-center gap-6 max-w-2xl"
        >
          <div className="w-20 h-20 rounded-full bg-[#EC278E] text-white border-2 border-[#231F20] flex items-center justify-center font-black text-3xl flex-shrink-0 shadow-[0_4px_0_#231F20]">
            JP
          </div>
          <div>
            <span className="font-script text-2xl font-bold block mb-1">
              "Let's build something together!"
            </span>
            <p className="text-base font-bold">
              You don't have to come with a job opportunity. Come with a thought, a question, an idea — or just say hi.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
        
        {/* Left Column: Brand & Social Links */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#EC278E] text-white border-2 border-white flex items-center justify-center font-black text-2xl">
              JP
            </div>
            <span className="font-display font-black text-3xl uppercase tracking-tight text-white">
              JAYA PATEL <span className="text-[#FFC83B]">CLUB</span>
            </span>
          </div>

          <p className="text-lg text-white/80 font-medium max-w-md leading-relaxed">
            A digital storybook experience showcasing how code, AI, UI design, and research connect.
          </p>

          {/* Social Pill Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[#EC278E] text-white font-black text-xs uppercase tracking-widest border-2 border-white shadow-[0_4px_0_#000] hover:bg-[#ff3da6] transition-colors"
            >
              GITHUB ↗
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[#1CE8ED] text-[#231F20] font-black text-xs uppercase tracking-widest border-2 border-[#231F20] shadow-[0_4px_0_#000] hover:bg-[#6effff] transition-colors"
            >
              LINKEDIN ↗
            </a>
            <a 
              href="mailto:jayapatel.dev@gmail.com" 
              className="px-6 py-3 rounded-full bg-[#FFC83B] text-[#231F20] font-black text-xs uppercase tracking-widest border-2 border-[#231F20] shadow-[0_4px_0_#000] hover:bg-[#ffd666] transition-colors"
            >
              EMAIL ↗
            </a>
          </div>
        </div>

        {/* Right Column: Contact / Say Hello Form Pill */}
        <div className="lg:col-span-6 bg-white/10 p-8 rounded-[36px] border-3 border-white/20">
          <h3 className="text-3xl font-black uppercase tracking-tight mb-2 text-white">
            SAY HELLO NOW.
          </h3>
          <p className="font-script text-2xl text-[#FFC83B] font-bold mb-6">
            Get in touch directly with Jaya Patel ✦
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address..."
                className="w-full px-6 py-4 rounded-full bg-white text-[#231F20] font-bold placeholder-[#231F20]/50 border-2 border-[#231F20] shadow-[0_4px_0_#231F20] outline-none"
              />
              <button 
                type="submit"
                className="aardvark-pill-btn text-base px-8 py-4 flex-shrink-0"
              >
                <span>SAY HELLO →</span>
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Bottom Black Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-white/60 gap-4">
        <p>© {new Date().getFullYear()} Jaya Patel. 1:1 Visual Clone of Aardvark Book Club UI.</p>
        <p className="font-script text-lg text-[#FFC83B]">Unbox your potential ✦</p>
      </div>

    </section>
  );
};

export default ContactSection;
