import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqList = [
  {
    q: 'What technologies do you work with?',
    a: 'I specialize in full-stack web applications using HTML5, CSS3, JavaScript/TypeScript, React, Next.js, Node.js, Express, MySQL, Tailwind CSS, GSAP, and AI model integrations.'
  },
  {
    q: 'Are you available for freelance projects or internships?',
    a: 'Yes! I am open to freelance collaborations, tech internships, research opportunities, and exciting project builds.'
  },
  {
    q: 'How do you approach UI/UX design and development?',
    a: 'I start with clean architecture and user-centered design, prototyping layout flows, choosing bold typography and color systems, and building responsive, interactive components.'
  },
  {
    q: 'Can I collaborate with you even if I don\'t have a job offer?',
    a: 'Absolutely! You don\'t have to come with a job opportunity. Come with an idea, a question, a research thought, or just say hi!'
  }
];

export const FaqExclusiveSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#FAF7F2] py-24 px-6 md:px-12 border-b-4 border-[#231F20] relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Featured Exclusive Card */}
        <div className="lg:col-span-5 bg-[#FCE7F3] rounded-[36px] border-4 border-[#231F20] p-8 shadow-[0_10px_0_#231F20] relative overflow-hidden">
          <div className="flex items-center justify-between gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest bg-[#EC278E] text-white border-2 border-[#231F20]">
              JAYA EXCLUSIVE ✦
            </span>
            <span className="font-bold text-sm text-[#231F20] flex items-center gap-1">
              ★ 5.0 Rating
            </span>
          </div>

          <h3 className="text-3xl font-black uppercase tracking-tight text-[#231F20] mb-4">
            "BUILDING EXPERIENCES, LINE BY LINE."
          </h3>

          <p className="text-base font-medium text-[#231F20] leading-relaxed mb-6">
            "Jaya approaches code not just as logic, but as an editorial visual canvas — combining engineering rigor with high aesthetics."
          </p>

          <div className="bg-white p-5 rounded-2xl border-2 border-[#231F20] shadow-[0_4px_0_#231F20] mb-6">
            <span className="font-script text-xl font-bold text-[#EC278E] block mb-1">
              Developer Profile:
            </span>
            <p className="text-sm font-bold text-[#231F20]">
              CSE Student • Frontend & Full-Stack Builder • AI Enthusiast
            </p>
          </div>

          <a href="#talk" className="aardvark-pill-btn w-full justify-center">
            <span>SAY HELLO NOW →</span>
          </a>
        </div>

        {/* Right Column: FAQ Accordion List */}
        <div className="lg:col-span-7">
          <span className="font-script text-2xl text-[#EC278E] font-bold block mb-2">
            Got questions? We've got answers!
          </span>

          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-[#231F20] leading-none mb-8">
            COMMON <span className="text-[#1CE8ED]">QUESTIONS.</span>
          </h2>

          <div className="space-y-4">
            {faqList.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#1CE8ED]/20 rounded-[24px] border-3 border-[#231F20] shadow-[0_4px_0_#231F20] overflow-hidden transition-all"
                >
                  <button 
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-black text-xl text-[#231F20]"
                  >
                    <span>{item.q}</span>
                    <span className="w-10 h-10 rounded-full bg-white border-2 border-[#231F20] flex items-center justify-center text-2xl leading-none">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 pt-0 text-base font-medium text-[#231F20]/90 leading-relaxed border-t border-[#231F20]/15"
                      >
                        {item.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqExclusiveSection;
