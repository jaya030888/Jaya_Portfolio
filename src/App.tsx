import { useState, useEffect } from 'react'
import './App.css'

const currentlyBuilding = [
  { title: 'AI Citizen Copilot', tags: ['AI', 'Conversational UX', 'LLMs', 'Citizen Services'], description: 'An AI-powered chatbot designed to help citizens navigate information, services and everyday government-related processes through a simpler conversational experience.', image: '/ai-systems-artifact.jpg', color: '#9580dc' },
  { title: 'Computer-Based Testing', tags: ['Full Stack', 'Database Systems', 'UI/UX', 'Assessment Systems'], description: 'A Computer-Based Testing platform focused on making assessments more structured, interactive and easier to manage.', image: '/aardvark/mazywood.png', color: '#38265d' }
];

const builtAndShipped = [
  { title: 'Amiti Healthcare', tags: ['WEB DESIGN', 'DEVELOPMENT', 'UX'], description: 'A digital experience for a healthcare brand, focused on clear communication, accessibility and creating an interface people can feel comfortable navigating.', image: '/aardvark/crone.png', color: '#ff9d1c' },
  { title: 'Riyaviz', tags: ['CREATIVE DEVELOPMENT', 'UI/UX', 'RESPONSIVE DESIGN'], description: 'An experiment in personal branding and creative web development — exploring how a portfolio can communicate personality instead of simply listing achievements.', image: '/aardvark/secret-dinner.png', color: '#ff008c' },
  { title: 'Student Management System', tags: ['NODE.JS', 'EXPRESS', 'MYSQL', 'CRUD'], description: 'A full-stack application for managing student information and interactions, giving me hands-on experience with the relationship between frontend, backend and database.', image: '/aardvark/scion.png', color: '#6ABF4C' }
];

const builtToLearn = [
  { title: 'Blinkit Clone', tags: ['HTML', 'CSS', 'JAVASCRIPT'], description: 'A Blinkit-inspired e-commerce experience built to understand how a real-world product handles product discovery, categories, shopping flows and interface design.', image: '/aardvark/blacktail.png', color: '#102c62' },
  { title: 'Todo App', tags: [], description: 'Where I started.', image: '/todo-app-artifact.jpg', color: '#ffd955' },
  { title: 'Weather App', tags: [], description: 'Where APIs entered the picture.', image: '/weather-app-artifact.jpg', color: '#9580dc' },
  { title: 'Quiz Platform', tags: [], description: 'Where interaction became part of the problem.', image: '/quiz-platform-artifact.jpg', color: '#ff008c' },
  { title: 'Other Experiments', tags: [], description: 'Where I kept breaking things just to understand how they worked.', image: '/aardvark/fruit-fly.png', color: '#050505' }
];
function Arrow() { return <span aria-hidden="true">↗</span> }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(0)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return <main>
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}><a className="brand" href="#top" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}><div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#080909', color: '#F9A220', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '20px' }}>J</div><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}><span style={{ fontWeight: 900, fontSize: '24px', lineHeight: 1, color: '#080909' }}>Jaya Patel</span><span style={{ fontSize: '12px', color: 'rgba(8,9,9,0.7)', fontWeight: 700, letterSpacing: '0.05em', fontFamily: 'var(--font-script, "Gochi Hand", cursive)' }}>Full Stack Developer</span></div></a><nav className={menuOpen ? 'open' : ''}><a href="#home" onClick={() => setMenuOpen(false)}>Home</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#process" onClick={() => setMenuOpen(false)}>Process</a><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav><a className="login" href="#contact">Let's Talk <Arrow /></a><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? '×' : '☰'}</button></header>
    <section className="hero" id="hero"><div className="hero-shapes" /><div className="hero-copy"><h1>WORK.<br />Things I've<br />built.</h1><p>Things I'm building. Things I'm still figuring out. I don't have a perfectly linear path. I've built websites, cloned products, experimented with full-stack systems, worked with APIs, and explored AI. This is a collection of that journey.</p><a href="#chapters" className="button hero-cta">See my work <Arrow /></a></div><div className="hero-volume" aria-label="Jaya Portfolio Story"><i /><b>✦</b></div><div className="scribble hero-scribble">My Dev<br />Story</div></section>
    <section className="monthly" id="chapters" style={{ paddingBottom: '30px' }}><div className="section-intro"><div className="scribble discover">What's cooking</div><div><h2>Currently Building</h2><p>Projects I am actively working on right now.<br />Exploring the intersection of tech and people.</p></div></div><div className="book-grid">{currentlyBuilding.map((book) => <article className="book" key={book.title} style={{ '--card': book.color } as React.CSSProperties}><img src={book.image} alt={book.title} /><div className="tags">{book.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{book.title}</h3><p>{book.description}</p></article>)}</div></section>
    <section className="monthly" style={{ paddingTop: '30px', paddingBottom: '30px' }}><div className="section-intro"><div><h2>Built & Shipped</h2><p>Projects completed and deployed.<br />Designing for trust and creating full systems.</p></div></div><div className="book-grid">{builtAndShipped.map((book) => <article className="book" key={book.title} style={{ '--card': book.color } as React.CSSProperties}><img src={book.image} alt={book.title} /><div className="tags">{book.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{book.title}</h3><p>{book.description}</p></article>)}</div></section>
    <section className="monthly" style={{ paddingTop: '30px' }}><div className="section-intro"><div><h2>Built To Learn</h2><p>Some projects weren't about building the next big product.<br />They were about figuring something out.</p></div></div><div className="book-grid">{builtToLearn.map((book) => <article className="book" key={book.title} style={{ '--card': book.color } as React.CSSProperties}><img src={book.image} alt={book.title} /><div className="tags">{book.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{book.title}</h3><p>{book.description}</p></article>)}</div></section>
    <section className="works" id="shift"><div className="works-head"><div><p className="eyebrow">THE PATTERN</p><h2>How I learn.</h2></div><p>That's probably the most accurate description of how I've learned so far.</p></div><div className="steps">{[
      ['Step #1', 'Build.', 'Start creating. Take an idea and put together the basic pieces to see how they fit.', '/aardvark/step-1.webp'],
      ['Step #2', 'Break.', 'Push the limits. Rip it apart, see what causes errors, and intentionally crash things.', '/aardvark/step-2.webp'],
      ['Step #3', 'Figure it out.', 'The messy part. Read docs, debug, ask questions, and slowly put the puzzle back together.', '/aardvark/step-3.webp'],
      ['Step #4', 'Build again.', 'Take everything learned and build it better, stronger, and more thoughtfully this time.', '/aardvark/step-4.webp'],
    ].map(([number, title, copy, art], index) => <article className={`step-card card-${index + 1}`} key={number}><span className="step-number">{number}</span><img src={art} alt="" /><h3>{title}</h3><p>{copy}</p></article>)}</div><a className="button cream" href="#talk">LET'S TALK <Arrow /></a></section>
    <section className="box-section" id="talk"><div className="box-copy"><p className="eyebrow">WHAT'S NEXT?</p><h2>The space where<br />technology meets <em>people.</em></h2><p>I'm still exploring where all of that leads. AI. Software. Design. Digital experiences. Research. Marketing. Real-world problems.</p><div className="perks"><span>AI</span><span>Software</span><span>Design</span><span>Research</span><span>Marketing</span></div><a className="button pink" href="#gifts">LET'S BUILD SOMETHING <Arrow /></a></div><img src="/aardvark/package.webp" alt="Colourful Aardvark Book Club package" /></section>
    <section className="gift" id="gifts"><div><p className="eyebrow">LET'S BUILD SOMETHING</p><h2>Have an idea?</h2><p>A project? A weird experiment? A problem worth solving? I'd love to talk.</p><a href="mailto:hello@example.com" className="button dark">SAY HELLO <Arrow /></a></div><div className="gift-card"><span>LET'S<br />TALK<br />SOON</span><i>✦</i></div></section>
    <footer><img src="/aardvark/logo.svg" alt="Aardvark Book Club" /><div><p className="eyebrow">JOIN OUR MAILING LIST</p><div className="email"><input placeholder="Email address" aria-label="Email address" /><button>→</button></div></div><p className="copyright">© 2026 Jaya Patel. All rights reserved.</p></footer>
  </main>
}
