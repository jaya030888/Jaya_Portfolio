import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'
import SmoothScroll from './Components/SmoothScroll'
import CustomCursor from './Components/CustomCursor'
import ScrollReveal from './Components/ScrollReveal'
import TiltCard from './Components/TiltCard'
import MagneticButton from './Components/MagneticButton'

const currentlyBuilding = [
  { title: 'AI Citizen Copilot', tags: ['AI', 'Conversational UX', 'LLMs', 'Citizen Services'], description: 'An AI-powered chatbot designed to help citizens navigate information, services and everyday government-related processes through a simpler conversational experience.', image: '/ai_citizen_copilot.jpg', video: '', color: '#9580dc' },
  { title: 'Computer-Based Testing', tags: ['Full Stack', 'Database Systems', 'UI/UX', 'Assessment Systems'], description: 'A Computer-Based Testing platform focused on making assessments more structured, interactive and easier to manage.', image: '/computer_based_testing.jpg', color: '#38265d' }
];

const builtAndShipped = [
  { title: 'Amiti Healthcare', tags: ['WEB DESIGN', 'DEVELOPMENT', 'UX'], description: 'A digital experience for a healthcare brand, focused on clear communication, accessibility and creating an interface people can feel comfortable navigating.', image: '/amiti.png', color: '#ff9d1c', link: 'https://amitihealthcare.org/' },
  { title: 'Riyaviz', tags: ['CREATIVE DEVELOPMENT', 'UI/UX', 'RESPONSIVE DESIGN'], description: 'An experiment in personal branding and creative web development — exploring how a portfolio can communicate personality instead of simply listing achievements.', image: '/launchanything.png', color: '#ff008c', link: 'https://riyaviz.me' },
  { title: 'Student Management System', tags: ['NODE.JS', 'EXPRESS', 'MYSQL', 'CRUD'], description: 'A full-stack application for managing student information and interactions, giving me hands-on experience with the relationship between frontend, backend and database.', image: '/iti.png', color: '#6ABF4C', link: 'https://sms-tawny-rho.vercel.app/' }
];

const builtToLearn = [
  { title: 'Blinkit Clone', tags: ['HTML', 'CSS', 'JAVASCRIPT'], description: 'A Blinkit-inspired e-commerce experience built to understand how a real-world product handles product discovery, categories, shopping flows and interface design.', image: '/blinkit_clone.png', color: '#F8CB46', link: 'https://blinkit-clone-gold.vercel.app/' },
  { title: 'Movie Browser', tags: ['REACT', 'API', 'UI/UX'], description: 'A dynamic movie discovery application integrating with a third-party API to search, filter, and explore a vast database of films in a clean interface.', image: '/movie_browser.png', color: '#E42E2D', link: 'https://movie-browser-plum.vercel.app/' },
  { title: 'Todo App', tags: ['HTML', 'CSS', 'JS'], description: 'Where it all started. A simple task tracker to understand the basics of DOM manipulation and state management.', image: '/todo.png', color: '#ffd955', link: 'https://my-todo-app-frontend-lo64.vercel.app/' },
  { title: 'Weather App', tags: [], description: 'Where APIs entered the picture.', image: '/weather.png', color: '#9580dc', link: 'https://jaya030888.github.io/weather/' },
  { title: 'Quiz Platform', tags: [], description: 'Where interaction became part of the problem.', image: '/quiz_platform.png', color: '#ff008c', link: 'https://online-quiz-platform-seven-peach.vercel.app/' },
  { title: 'Guess the Number', tags: ['JAVASCRIPT', 'DOM', 'LOGIC'], description: 'A classic logic game built to practice core JavaScript concepts like DOM manipulation, state management, and event handling.', image: '/guess_the_number_new.png', color: '#1B2430', link: 'https://guess-the-number-sandy.vercel.app/' }
];

function Arrow() { return <span aria-hidden="true" style={{ transition: 'transform 0.2s', display: 'inline-block' }}>↗</span> }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const shapeRotation1 = useTransform(scrollY, [0, 1000], [-32, -10]);
  const shapeRotation2 = useTransform(scrollY, [0, 1000], [48, 70]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const headingText = "WORK. Things I've built.".split(" ");

  return (
    <SmoothScroll>
      <CustomCursor />
      <main id="top">
        <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
          <a className="brand" href="#top" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#080909', color: '#F9A220', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '20px' }}>J</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontWeight: 900, fontSize: '24px', lineHeight: 1, color: '#080909' }}>Jaya Patel</span>
              <span style={{ fontSize: '12px', color: 'rgba(8,9,9,0.7)', fontWeight: 700, letterSpacing: '0.05em', fontFamily: 'var(--font-script, "Gochi Hand", cursive)' }}>Full Stack Developer</span>
            </div>
          </a>
          <nav className={menuOpen ? 'open' : ''}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#journey" onClick={() => setMenuOpen(false)}>Journey</a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <MagneticButton>
            <a className="login" href="#contact">Let's Talk <Arrow /></a>
          </MagneticButton>
          <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? '×' : '☰'}</button>
        </header>

        <section className="hero" id="home">
          <motion.div className="hero-shapes" style={{ y: y1, rotate: shapeRotation1 }} />
          <motion.div className="hero-shapes" style={{ y: y2, rotate: shapeRotation2, right: '-5%', top: '10%', position: 'absolute', width: '43%', height: '56%', background: '#fff4a5', borderRadius: '45%' }} />
          <div className="hero-copy">
            <h1 style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
              {headingText.map((word, i) => (
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
            >
              <MagneticButton>
                <a href="#work" className="button hero-cta">See my work <Arrow /></a>
              </MagneticButton>
            </motion.div>
          </div>
        </section>
        
        <section className="monthly about-section" id="about">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="section-intro">
              <div className="scribble discover">Who am I?</div>
              <div>
                <h2>About Me</h2>
                <p className="about-text">I'm a full stack developer passionate about creating digital experiences that are intuitive, accessible, and meaningful. I love bridging the gap between complex engineering and elegant, user-friendly design.</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="box-section services-section" id="services">
          <ScrollReveal direction="up">
            <div className="section-intro center-intro">
              <h2>Services I Offer</h2>
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
                  <article className="service-card">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </article>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="monthly" id="work" style={{ paddingBottom: '30px' }}>
          <ScrollReveal direction="up">
            <div className="section-intro">
              <div className="scribble discover">What's cooking</div>
              <div><h2>Currently Building</h2><p>Projects I am actively working on right now.<br />Exploring the intersection of tech and people.</p></div>
            </div>
          </ScrollReveal>
          <div className="book-grid">
            {currentlyBuilding.map((book, i) => (
              <ScrollReveal key={book.title} direction="left" delay={i * 0.1}>
                <TiltCard>
                  <article className="book" style={{ '--card': book.color } as React.CSSProperties} onClick={() => setSelectedProject(book)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} style={{ overflow: 'hidden', borderRadius: '12px' }}>
                      {book.video ? <video src={book.video} autoPlay loop muted playsInline poster={book.image} /> : <img src={book.image} alt={book.title} />}
                    </motion.div>
                    <div className="tags">{book.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                  </article>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="monthly" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <ScrollReveal direction="up">
            <div className="section-intro">
              <div><h2>Built & Shipped</h2><p>Projects completed and deployed.<br />Designing for trust and creating full systems.</p></div>
            </div>
          </ScrollReveal>
          <div className="book-grid">
            {builtAndShipped.map((book, i) => (
              <ScrollReveal key={book.title} direction="left" delay={i * 0.1}>
                <TiltCard>
                  <article className="book" style={{ '--card': book.color, cursor: 'pointer' } as React.CSSProperties} onClick={() => setSelectedProject(book)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} style={{ overflow: 'hidden', borderRadius: '12px' }}>
                      {'video' in book && book.video ? <video src={book.video as string} autoPlay loop muted playsInline poster={book.image} /> : <img src={book.image} alt={book.title} />}
                    </motion.div>
                    <div className="tags">{book.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                  </article>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="monthly" style={{ paddingTop: '30px' }}>
          <ScrollReveal direction="up">
            <div className="section-intro">
              <div><h2>Built To Learn</h2><p>Some projects weren't about building the next big product.<br />They were about figuring something out.</p></div>
            </div>
          </ScrollReveal>
          <div className="book-grid">
            {builtToLearn.map((book, i) => (
              <ScrollReveal key={book.title} direction="left" delay={i * 0.1}>
                <TiltCard>
                  <article className="book" style={{ '--card': book.color, cursor: 'pointer' } as React.CSSProperties} onClick={() => setSelectedProject(book)}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} style={{ overflow: 'hidden', borderRadius: '12px' }}>
                      {'video' in book && book.video ? <video src={book.video as string} autoPlay loop muted playsInline poster={book.image} /> : <img src={book.image} alt={book.title} />}
                    </motion.div>
                    <div className="tags">{book.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                  </article>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="works" id="journey">
          <ScrollReveal direction="up">
            <div className="works-head">
              <div>
                <p className="eyebrow">MY JOURNEY</p>
                <h2>From learning to building real products.</h2>
              </div>
              <p>I started with curiosity about how websites and applications actually work. Over time, that curiosity turned into hands-on development — building projects, breaking things, fixing them, and learning by doing.</p>
            </div>
          </ScrollReveal>
          <div className="timeline">
            {[
              { step: '01', title: 'Started Building', description: 'Learned the fundamentals of web development and started creating small projects to understand how frontend and backend systems work together.' },
              { step: '02', title: 'First Real Projects', description: 'Built projects like a Blinkit-inspired clone, weather applications, quizzes, and other web experiences. These helped me move from tutorials to actually solving problems.' },
              { step: '03', title: 'Going Beyond UI', description: 'Started working with React, APIs, databases, authentication, and backend development, learning how a complete application works behind the interface.' },
              { step: '04', title: 'Building Real Systems', description: 'Worked on a CBT examination platform, including the student examination flow, and explored how real-world systems handle users, exams, questions, submissions, and results.' },
              { step: '05', title: 'Exploring AI', description: 'Started building an AI Copilot chatbot, exploring how AI can be integrated into applications to create more useful and interactive experiences.' },
              { step: '06', title: 'Where I Am Now', description: "I'm still building, experimenting, and learning — turning ideas into working products and constantly improving how I design and develop them." },
            ].map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.15}>
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
            <ScrollReveal direction="up" delay={0.9}>
              <div className="timeline-item timeline-end">
                <div className="timeline-dot end-dot"></div>
                <div className="timeline-content end-content">
                  <h3>Next &rarr;</h3>
                  <p>The journey is still being built.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="monthly testimonials-section" id="testimonials">
          <ScrollReveal direction="up">
            <div className="section-intro">
              <div className="scribble discover kind-words">Kind words</div>
              <div>
                <h2>Testimonials</h2>
                <p>What people say about working with me.</p>
              </div>
            </div>
          </ScrollReveal>
          <div className="testimonials-grid">
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

        <section className="box-section contact-section" id="contact">
          <ScrollReveal direction="up">
            <div className="contact-header">
              <p className="eyebrow">LET'S BUILD SOMETHING</p>
              <h2>Let's work together.</h2>
              <p>Have an idea? A project? A weird experiment? A problem worth solving? I'd love to talk. Drop me a message below!</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
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
        
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="modal-overlay" 
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
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
      </main>
    </SmoothScroll>
  )
}
