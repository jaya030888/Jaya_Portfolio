import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import './App.css'
import SmoothScroll from './Components/SmoothScroll'
import CustomCursor from './Components/CustomCursor'
import ScrollReveal from './Components/ScrollReveal'
import TiltCard from './Components/TiltCard'
import MagneticButton from './Components/MagneticButton'
import Loader from './Components/Loader'
import ScrollProgress from './Components/ScrollProgress'
import AnimatedText from './Components/AnimatedText'
import Parallax from './Components/Parallax'
import ImageReveal from './Components/ImageReveal'
import Marquee from './Components/Marquee'
import HorizontalScrollShowcase from './Components/HorizontalScrollShowcase'

const allProjects = [
  { title: 'AI Citizen Copilot', tags: ['AI', 'Conversational UX'], description: 'An AI-powered chatbot designed to help citizens navigate information and services.', image: '/ai_citizen_copilot.jpg', video: '', color: '#9580dc' },
  { title: 'Amiti Healthcare', tags: ['WEB DESIGN', 'DEVELOPMENT'], description: 'A digital experience for a healthcare brand, focused on clear communication.', image: '/amiti.png', color: '#ff9d1c', link: 'https://amitihealthcare.org/' },
  { title: 'Riyaviz', tags: ['CREATIVE DEVELOPMENT', 'UI/UX'], description: 'An experiment in personal branding and creative web development.', image: '/launchanything.png', color: '#ff008c', link: 'https://riyaviz.me' },
  { title: 'Student Management System', tags: ['NODE.JS', 'MYSQL'], description: 'A full-stack application for managing student information and interactions.', image: '/iti.png', color: '#6ABF4C', link: 'https://sms-tawny-rho.vercel.app/' },
  { title: 'Computer-Based Testing', tags: ['Full Stack', 'Database'], description: 'A CBT platform focused on making assessments more structured.', image: '/computer_based_testing.jpg', color: '#38265d' },
  { title: 'Blinkit Clone', tags: ['HTML', 'CSS', 'JS'], description: 'A Blinkit-inspired e-commerce experience.', image: '/blinkit_clone.png', color: '#F8CB46', link: 'https://blinkit-clone-gold.vercel.app/' },
  { title: 'Movie Browser', tags: ['REACT', 'API'], description: 'A dynamic movie discovery application integrating with a third-party API.', image: '/movie_browser.png', color: '#E42E2D', link: 'https://movie-browser-plum.vercel.app/' },
  { title: 'Weather App', tags: [], description: 'Where APIs entered the picture.', image: '/weather.png', color: '#9580dc', link: 'https://jaya030888.github.io/weather/' },
  { title: 'Quiz Platform', tags: [], description: 'Where interaction became part of the problem.', image: '/quiz_platform.png', color: '#ff008c', link: 'https://online-quiz-platform-seven-peach.vercel.app/' },
];

function Arrow() { return <span aria-hidden="true" style={{ transition: 'transform 0.2s', display: 'inline-block' }}>↗</span> }

export default function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.8]);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);
  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const journeyRef = useRef(null);
  const { scrollYProgress: journeyProgress } = useScroll({
    target: journeyRef,
    offset: ["start center", "end center"]
  });
  const pathLength = useSpring(journeyProgress, { stiffness: 400, damping: 90 });

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          <main id="top" style={{ overflow: 'hidden' }}>
            <header 
              className={`nav ${scrolled ? 'scrolled' : ''}`}
              style={{
                transform: scrolled ? 'translate(-50%, 0)' : 'none'
              }}
            >
              <a className="brand" href="#top" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#080909', color: '#F9A220', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '20px' }}>J</div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span style={{ fontWeight: 900, fontSize: '24px', lineHeight: 1, color: '#080909' }}>Jaya Patel</span>
                  <span style={{ fontSize: '12px', color: 'rgba(8,9,9,0.7)', fontWeight: 700, letterSpacing: '0.05em', fontFamily: 'var(--font-script, "Gochi Hand", cursive)' }}>Full Stack Developer</span>
                </div>
              </a>
              <nav className={menuOpen ? 'open' : ''}>
                {['home', 'about', 'services', 'work', 'journey', 'testimonials', 'contact'].map(link => (
                  <a key={link} href={`#${link}`} onClick={() => setMenuOpen(false)} style={{ textTransform: 'capitalize' }}>
                    {link}
                  </a>
                ))}
              </nav>
              <MagneticButton>
                <a className="login" href="#contact" data-cursor-text="SAY HI">Let's Talk <Arrow /></a>
              </MagneticButton>
              <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? '×' : '☰'}</button>
            </header>

            <section className="hero" id="home" ref={heroRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1000px' }}>
              <Parallax offset={200} className="hero-shapes" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
              
              <div className="hero-copy">
                <motion.div style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}>
                  <h1 style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                    {"WORK. Things I've built.".split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </h1>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Things I'm building. Things I'm still figuring out. I don't have a perfectly linear path. I've built websites, cloned products, experimented with full-stack systems, worked with APIs, and explored AI. This is a collection of that journey.
                  </motion.p>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    style={{ marginTop: '30px' }}
                  >
                    <MagneticButton>
                      <a href="#work" className="button hero-cta" data-cursor-text="SCROLL">See my work <Arrow /></a>
                    </MagneticButton>
                  </motion.div>
                </motion.div>
              </div>
            </section>
            
            <section className="monthly about-section" id="about">
              <ScrollReveal direction="up" delay={0.2}>
                <div className="section-intro">
                  <div className="scribble discover">Who am I?</div>
                  <div>
                    <AnimatedText el="h2" text="About Me" />
                    <p className="about-text">I'm a full stack developer passionate about creating digital experiences that are intuitive, accessible, and meaningful. I love bridging the gap between complex engineering and elegant, user-friendly design.</p>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            <section className="box-section services-section" id="services">
              <ScrollReveal direction="up">
                <div className="section-intro center-intro">
                  <AnimatedText el="h2" text="Services I Offer" />
                  <p>What I bring to the table.</p>
                </div>
              </ScrollReveal>
              <div className="services-grid">
                {[{ title: 'Web Development', desc: 'Building fast, responsive, and accessible websites using modern frameworks and standard web practices.' },
                  { title: 'Backend Systems', desc: 'Designing robust APIs, managing databases, and ensuring scalable server architectures.' },
                  { title: 'UI/UX Design', desc: 'Crafting user-centric interfaces that communicate clearly and guide users naturally.' },
                  { title: 'Open to Anything', desc: 'Digital marketing, content creation, or just a weird experiment? I\'m open to learning and trying new things. Let\'s talk!' }
                ].map((s, i) => (
                  <ScrollReveal key={s.title} direction="up" delay={i * 0.1}>
                    <TiltCard>
                      <article className="service-card" data-cursor-text="HOVER">
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                      </article>
                    </TiltCard>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            <div id="work">
              <HorizontalScrollShowcase>
                {allProjects.map((book, i) => (
                  <article key={i} className="book" style={{ '--card': book.color, cursor: 'none' } as React.CSSProperties} onClick={() => setSelectedProject(book)} data-cursor-preview={book.image}>
                    <ImageReveal>
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} style={{ overflow: 'hidden', borderRadius: '12px', width: '100%', height: '100%' }}>
                        {book.video ? <video src={book.video} autoPlay loop muted playsInline poster={book.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <img src={book.image} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                      </motion.div>
                    </ImageReveal>
                    <div className="tags" style={{ marginTop: '16px' }}>{book.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                  </article>
                ))}
              </HorizontalScrollShowcase>
            </div>

            <section className="works" id="journey" ref={journeyRef} style={{ position: 'relative', marginTop: '100px' }}>
              <ScrollReveal direction="up">
                <div className="works-head">
                  <div>
                    <p className="eyebrow">MY JOURNEY</p>
                    <AnimatedText el="h2" text="From learning to building." />
                  </div>
                </div>
              </ScrollReveal>
              <div className="timeline" style={{ position: 'relative' }}>
                <svg width="10" height="100%" style={{ position: 'absolute', left: '21px', top: 0, zIndex: 0 }} xmlns="http://www.w3.org/2000/svg">
                  <motion.line 
                    x1="5" y1="0" x2="5" y2="100%" 
                    stroke="var(--pink)" strokeWidth="4" strokeLinecap="round"
                    style={{ pathLength }}
                  />
                </svg>
                {[
                  { step: '01', title: 'Started Building', description: 'Learned the fundamentals of web development and started creating small projects to understand how frontend and backend systems work together.' },
                  { step: '02', title: 'First Real Projects', description: 'Built projects like a Blinkit-inspired clone, weather applications, quizzes, and other web experiences. These helped me move from tutorials to actually solving problems.' },
                  { step: '03', title: 'Going Beyond UI', description: 'Started working with React, APIs, databases, authentication, and backend development, learning how a complete application works behind the interface.' },
                  { step: '04', title: 'Building Real Systems', description: 'Worked on a CBT examination platform, including the student examination flow, and explored how real-world systems handle users, exams, questions, submissions, and results.' },
                  { step: '05', title: 'Exploring AI', description: 'Started building an AI Copilot chatbot, exploring how AI can be integrated into applications to create more useful and interactive experiences.' },
                  { step: '06', title: 'Where I Am Now', description: "I'm still building, experimenting, and learning — turning ideas into working products and constantly improving how I design and develop them." },
                ].map((item, index) => (
                  <ScrollReveal key={index} direction="up" delay={0.1}>
                    <div className="timeline-item">
                      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, type: 'spring' }} className="timeline-dot"></motion.div>
                      <div className="timeline-content">
                        <span className="timeline-year">{item.step}</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            <section className="monthly testimonials-section" id="testimonials">
              <ScrollReveal direction="up">
                <div className="section-intro">
                  <div className="scribble discover kind-words">Kind words</div>
                  <div>
                    <AnimatedText el="h2" text="Testimonials" />
                  </div>
                </div>
              </ScrollReveal>
              <div className="testimonials-grid" style={{ marginTop: '50px' }}>
                <ScrollReveal direction="up" delay={0.1}>
                  <TiltCard>
                    <div className="testimonial-card">
                      <p>"Jaya has an incredible eye for detail. They took our complex requirements and turned them into a seamless, intuitive experience. Highly recommended!"</p>
                      <div className="testimonial-author">
                        <div className="avatar avatar-1"></div>
                        <div>
                          <h4>Sarah Jenkins</h4>
                          <span>Product Manager, TechCorp</span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.3}>
                  <TiltCard>
                    <div className="testimonial-card">
                      <p>"Working with Jaya was a breeze. They don't just write code, they deeply understand the user and the business goals behind the product."</p>
                      <div className="testimonial-author">
                        <div className="avatar avatar-2"></div>
                        <div>
                          <h4>Marcus Thorne</h4>
                          <span>Founder, StartupX</span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              </div>
            </section>

            <section className="box-section contact-section" id="contact" style={{ minHeight: '100vh', justifyContent: 'center' }}>
              <div className="contact-header" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p className="eyebrow">LET'S BUILD SOMETHING</p>
                <motion.h2 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
                  style={{ fontSize: 'clamp(50px, 10vw, 150px)', whiteSpace: 'nowrap', lineHeight: 1 }}
                >
                  LET'S TALK
                </motion.h2>
                <p style={{ maxWidth: '600px', marginTop: '30px' }}>Have an idea? A project? A weird experiment? A problem worth solving? I'd love to talk. Drop me a message below!</p>
              </div>
              <ScrollReveal direction="up" delay={0.4}>
                <form className="contact-form" onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const name = fd.get('name') || '';
                  const email = fd.get('email') || '';
                  const message = fd.get('message') || '';
                  const text = `Hi Jaya! I'm ${name} (${email}).\n\n${message}`;
                  window.open(`https://wa.me/917209892701?text=${encodeURIComponent(text)}`, '_blank');
                }}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" name="name" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" name="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" rows={5} placeholder="Hello, I'd like to talk about..." required></textarea>
                  </div>
                  <MagneticButton>
                    <button type="submit" className="button pink" style={{ width: '100%' }}>SEND VIA WHATSAPP <Arrow /></button>
                  </MagneticButton>
                </form>
              </ScrollReveal>
            </section>

            <footer>
              <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1200px', flexWrap: 'wrap', gap: '40px' }}>
                <ScrollReveal direction="up">
                  <div className="footer-left" style={{ textAlign: 'left' }}>
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 64px)', margin: 0, textTransform: 'uppercase' }}>Jaya Patel</h2>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                  <div className="footer-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: '300px' }}>
                    <p className="eyebrow" style={{ textAlign: 'left', margin: '0 0 20px 0' }}>LET'S CONNECT</p>
                    <div className="social-links" style={{ display: 'flex', gap: '15px' }}>
                      <MagneticButton>
                        <a href="mailto:jayamyname19@gmail.com" target="_blank" rel="noreferrer" aria-label="Email" style={{ display: 'inline-flex', padding: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', color: '#fff', transition: 'all 0.2s', border: '1px solid rgba(255,255,255,0.2)' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </a>
                      </MagneticButton>
                      <MagneticButton>
                        <a href="https://wa.me/917209892701" target="_blank" rel="noreferrer" aria-label="WhatsApp" style={{ display: 'inline-flex', padding: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', color: '#fff', transition: 'all 0.2s', border: '1px solid rgba(255,255,255,0.2)' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        </a>
                      </MagneticButton>
                      <MagneticButton>
                        <a href="https://www.linkedin.com/in/jayapatel-dev" target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ display: 'inline-flex', padding: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', color: '#fff', transition: 'all 0.2s', border: '1px solid rgba(255,255,255,0.2)' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                      </MagneticButton>
                      <MagneticButton>
                        <a href="https://github.com/jaya030888/" target="_blank" rel="noreferrer" aria-label="GitHub" style={{ display: 'inline-flex', padding: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', color: '#fff', transition: 'all 0.2s', border: '1px solid rgba(255,255,255,0.2)' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                      </MagneticButton>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="up" delay={0.4}>
                <p className="copyright" style={{ marginTop: '70px', width: '100%' }}>© 2026 Jaya Patel. All rights reserved.</p>
              </ScrollReveal>
            </footer>
            
            <AnimatePresence>
              {selectedProject && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="modal-overlay" 
                  onClick={() => setSelectedProject(null)}
                >
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
                    className="modal-content" 
                    style={{ '--card': selectedProject.color } as React.CSSProperties} 
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
                    {selectedProject.video ? <video src={selectedProject.video} autoPlay loop muted playsInline poster={selectedProject.image} /> : <img src={selectedProject.image} alt={selectedProject.title} />}
                    <div className="modal-body">
                      <div className="tags">{selectedProject.tags.map((tag: string) => <span key={tag}>{tag}</span>)}</div>
                      <h2>{selectedProject.title}</h2>
                      <p>{selectedProject.description}</p>
                      {selectedProject.link && (
                        <MagneticButton>
                          <a href={selectedProject.link} target="_blank" rel="noreferrer" className="button pink" style={{ marginTop: '20px' }}>
                            Visit Project <Arrow />
                          </a>
                        </MagneticButton>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </SmoothScroll>
      )}
    </>
  )
}
