import { useRef } from 'react';
import { motion } from 'framer-motion';

interface Tag {
  text: string;
  bg?: string;
  color?: string;
}

interface Chapter {
  id: string;
  number: string;
  title: string;
  cover: string;
  bg: string;
  color: string;
  desc: string[];
  tags: Tag[];
}

const chapters: Chapter[] = [
  {
    id: 'ch1',
    number: '01 — The first thing I made',
    title: 'Todo App',
    cover: '/assets/book1.png',
    bg: '#32225F',
    color: '#ffffff',
    desc: [
      "My first step wasn't impressive. It was a Todo app.",
      "But it was the first time code stopped being something I was studying and became something I could make.",
      "I learned how things connect. I broke things. I fixed them. And I wanted to build another one."
    ],
    tags: [
      { text: 'HTML', bg: 'rgba(255,255,255,0.2)', color: 'white' },
      { text: 'CSS', bg: 'rgba(255,255,255,0.2)', color: 'white' },
      { text: 'JavaScript', bg: 'rgba(255,255,255,0.2)', color: 'white' },
      { text: 'React', bg: 'rgba(255,255,255,0.2)', color: 'white' },
      { text: 'Express', bg: 'rgba(255,255,255,0.2)', color: 'white' }
    ]
  },
  {
    id: 'ch2',
    number: '02 — Real data',
    title: 'Weather App',
    cover: '/assets/book2.png',
    bg: '#1CE8ED',
    color: '#080909',
    desc: [
      "So I learned APIs.",
      "Suddenly, my application wasn't just displaying things I had written—it could fetch something that existed outside my code."
    ],
    tags: [
      { text: 'REST API', bg: 'rgba(0,0,0,0.15)', color: 'black' },
      { text: 'JavaScript', bg: 'rgba(0,0,0,0.15)', color: 'black' }
    ]
  },
  {
    id: 'ch3',
    number: '03 — Interaction',
    title: 'Quiz Platform',
    cover: '/assets/book3.png',
    bg: '#C13A1F',
    color: '#ffffff',
    desc: [
      "Real-time questions. Instant feedback. Score tracking.",
      "I was slowly learning that building software wasn't only about making it work."
    ],
    tags: [
      { text: 'JavaScript', bg: 'rgba(255,255,255,0.2)', color: 'white' },
      { text: 'UI Design', bg: 'rgba(255,255,255,0.2)', color: 'white' },
      { text: 'Interaction', bg: 'rgba(255,255,255,0.2)', color: 'white' }
    ]
  },
  {
    id: 'ch4',
    number: '04 — The aesthetic',
    title: 'My Portfolio',
    cover: '/assets/book4.jpg',
    bg: '#3D3195',
    color: '#ffffff',
    desc: [
      "I wanted to build a place that felt like me.",
      "That meant learning animations, responsive design and thinking about how someone moves through a website.",
      "Somewhere here, I realised: I don't just enjoy coding. I enjoy creating experiences."
    ],
    tags: [
      { text: 'Next.js', bg: 'rgba(255,255,255,0.2)', color: 'white' },
      { text: 'Tailwind', bg: 'rgba(255,255,255,0.2)', color: 'white' },
      { text: 'GSAP', bg: 'rgba(255,255,255,0.2)', color: 'white' }
    ]
  },
  {
    id: 'ch5',
    number: '05 — The deep end',
    title: 'Student System',
    cover: '/assets/book1.png',
    bg: '#6ABF4C',
    color: '#080909',
    desc: [
      "Multiple users. Databases. Authentication. CRUD operations. Dashboards.",
      "I went from asking 'How do I make this button work?' to asking 'How should this entire system work?'"
    ],
    tags: [
      { text: 'Next.js', bg: 'rgba(0,0,0,0.15)', color: 'black' },
      { text: 'Node.js', bg: 'rgba(0,0,0,0.15)', color: 'black' },
      { text: 'MySQL', bg: 'rgba(0,0,0,0.15)', color: 'black' }
    ]
  },
  {
    id: 'ch6',
    number: 'The shift',
    title: 'CodeForge & AI',
    cover: '/assets/book2.png',
    bg: '#FF9D00',
    color: '#080909',
    desc: [
      "That's where AI entered my journey. Hackathons. Ideas. Research. Building solutions for real people.",
      "I started moving from 'What can I build?' to 'What should I build?'"
    ],
    tags: [
      { text: 'Hackathons', bg: 'rgba(0,0,0,0.15)', color: 'black' },
      { text: 'Community', bg: 'rgba(0,0,0,0.15)', color: 'black' },
      { text: 'Research', bg: 'rgba(0,0,0,0.15)', color: 'black' }
    ]
  }
];

export const BooksSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="chapters" className="bg-white py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-7xl font-black text-[#080909] tracking-tight mb-4">
              The Chapters of My Growth
            </h2>
            <p className="text-lg md:text-2xl text-[#080909]/75 max-w-xl font-medium">
              The point isn't how many projects I made—the point is what changed in me between each one.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="font-script text-2xl md:text-3xl text-[#32225F] transform -rotate-2 font-bold">
              Discover the milestones of my journey
            </p>
            
            {/* Scroll Navigation Controls */}
            <div className="flex gap-3">
              <button 
                onClick={() => handleScroll('left')}
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-[#080909] hover:text-white transition-colors"
                aria-label="Previous Chapter"
              >
                <svg className="w-5 h-5 rotate-180" viewBox="0 0 14 13" fill="none">
                  <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor" />
                </svg>
              </button>
              <button 
                onClick={() => handleScroll('right')}
                className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-[#080909] hover:text-white transition-colors"
                aria-label="Next Chapter"
              >
                <svg className="w-5 h-5" viewBox="0 0 14 13" fill="none">
                  <path d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Card Track */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 pt-8 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {chapters.map((ch) => (
            <motion.article 
              key={ch.id}
              whileHover={{ y: -8, rotate: -0.5 }}
              transition={{ duration: 0.3 }}
              className="min-w-[340px] md:min-w-[420px] max-w-[420px] rounded-[36px] p-8 flex flex-col justify-between relative shadow-2xl snap-start flex-shrink-0"
              style={{ backgroundColor: ch.bg, color: ch.color }}
            >
              {/* Signature Ear Cutouts */}
              <div className="absolute top-0 left-0 right-0 h-12 pointer-events-none flex justify-between opacity-20">
                <svg className="w-10 h-10 text-current" viewBox="0 0 44 45" fill="none">
                  <path fill="currentColor" d="M1.335.198c.671-.316 1.5-.254 2.186.187C27.678 16.847 39.839 36.953 44 45h-6.048c-2.382-1.604-6.964-3.674-15.652-4.814C2.999 37.666-.665 14.174.09 2.04.152 1.28.589.515 1.335.198Z" />
                </svg>
                <svg className="w-6 h-16 text-current" viewBox="0 0 29 80" fill="none">
                  <path fill="currentColor" d="M19.388.879c.667-.771 1.647-1.018 2.559-.807.912.21 1.682.956 1.926 1.861C34.595 38.09 25.79 69.237 21.823 80h-4.188c-.17-4.22-2.739-13.318-10.975-22.064-8.493-9.099-8.88-21.913-1.063-37.23C11.221 9.603 19.091 1.266 19.388.879Z" />
                </svg>
              </div>

              <div>
                {/* Book Cover Image Mockup */}
                <div className="w-full flex justify-center mb-6">
                  <img 
                    src={ch.cover} 
                    alt={ch.title} 
                    className="w-48 h-64 object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] transform transition-transform hover:scale-105" 
                  />
                </div>

                <p className="font-script text-xl md:text-2xl mb-2 opacity-90 font-bold">
                  {ch.number}
                </p>

                <h3 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tight">
                  {ch.title}
                </h3>

                <div className="text-base md:text-lg opacity-90 leading-relaxed font-medium space-y-2 mb-8">
                  {ch.desc.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Tags Footer */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-current/20 mt-auto">
                {ch.tags.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="tag-small"
                    style={{ backgroundColor: t.bg, color: t.color }}
                  >
                    {t.text}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BooksSlider;
