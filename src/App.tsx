import { useState, useEffect } from 'react'
import './App.css'

const currentlyBuilding = [
  { title: 'AI Citizen Copilot', tags: ['AI', 'Conversational UX', 'LLMs', 'Citizen Services'], description: 'An AI-powered chatbot designed to help citizens navigate information, services and everyday government-related processes through a simpler conversational experience.', image: '/ai-systems-artifact.jpg', video: '', color: '#9580dc' },
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
  return <main id="top">
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}><a className="brand" href="#top" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}><div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#080909', color: '#F9A220', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '20px' }}>J</div><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}><span style={{ fontWeight: 900, fontSize: '24px', lineHeight: 1, color: '#080909' }}>Jaya Patel</span><span style={{ fontSize: '12px', color: 'rgba(8,9,9,0.7)', fontWeight: 700, letterSpacing: '0.05em', fontFamily: 'var(--font-script, "Gochi Hand", cursive)' }}>Full Stack Developer</span></div></a><nav className={menuOpen ? 'open' : ''}><a href="#home" onClick={() => setMenuOpen(false)}>Home</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#process" onClick={() => setMenuOpen(false)}>Process</a><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav><a className="login" href="#contact">Let's Talk <Arrow /></a><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? '×' : '☰'}</button></header>
    <section className="hero" id="home"><div className="hero-shapes" /><div className="hero-copy"><h1>WORK.<br />Things I've<br />built.</h1><p>Things I'm building. Things I'm still figuring out. I don't have a perfectly linear path. I've built websites, cloned products, experimented with full-stack systems, worked with APIs, and explored AI. This is a collection of that journey.</p><a href="#work" className="button hero-cta">See my work <Arrow /></a></div></section>
    
    <section className="monthly about-section" id="about">
      <div className="section-intro">
        <div className="scribble discover">Who am I?</div>
        <div>
          <h2>About Me</h2>
          <p className="about-text">I'm a full stack developer passionate about creating digital experiences that are intuitive, accessible, and meaningful. I love bridging the gap between complex engineering and elegant, user-friendly design.</p>
        </div>
      </div>
    </section>

    <section className="box-section services-section" id="services">
      <div className="section-intro center-intro">
        <h2>Services I Offer</h2>
        <p>What I bring to the table.</p>
      </div>
      <div className="services-grid">
        <article className="service-card">
          <h3>Web Development</h3>
          <p>Building fast, responsive, and accessible websites using modern frameworks and standard web practices.</p>
        </article>
        <article className="service-card">
          <h3>Backend Systems</h3>
          <p>Designing robust APIs, managing databases, and ensuring scalable server architectures.</p>
        </article>
        <article className="service-card">
          <h3>UI/UX Design</h3>
          <p>Crafting user-centric interfaces that communicate clearly and guide users naturally.</p>
        </article>
        <article className="service-card">
          <h3>Open to Anything</h3>
          <p>Digital marketing, content creation, or just a weird experiment? I'm open to learning and trying new things. Let's talk!</p>
        </article>
      </div>
    </section>
    <section className="monthly" id="work" style={{ paddingBottom: '30px' }}><div className="section-intro"><div className="scribble discover">What's cooking</div><div><h2>Currently Building</h2><p>Projects I am actively working on right now.<br />Exploring the intersection of tech and people.</p></div></div><div className="book-grid">{currentlyBuilding.map((book) => <article className="book" key={book.title} style={{ '--card': book.color } as React.CSSProperties}>{book.video ? <video src={book.video} autoPlay loop muted playsInline poster={book.image} /> : <img src={book.image} alt={book.title} />}<div className="tags">{book.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{book.title}</h3><p>{book.description}</p></article>)}</div></section>
    <section className="monthly" style={{ paddingTop: '30px', paddingBottom: '30px' }}><div className="section-intro"><div><h2>Built & Shipped</h2><p>Projects completed and deployed.<br />Designing for trust and creating full systems.</p></div></div><div className="book-grid">{builtAndShipped.map((book) => <article className="book" key={book.title} style={{ '--card': book.color } as React.CSSProperties}>{'video' in book && book.video ? <video src={book.video as string} autoPlay loop muted playsInline poster={book.image} /> : <img src={book.image} alt={book.title} />}<div className="tags">{book.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{book.title}</h3><p>{book.description}</p></article>)}</div></section>
    <section className="monthly" style={{ paddingTop: '30px' }}><div className="section-intro"><div><h2>Built To Learn</h2><p>Some projects weren't about building the next big product.<br />They were about figuring something out.</p></div></div><div className="book-grid">{builtToLearn.map((book) => <article className="book" key={book.title} style={{ '--card': book.color } as React.CSSProperties}>{'video' in book && book.video ? <video src={book.video as string} autoPlay loop muted playsInline poster={book.image} /> : <img src={book.image} alt={book.title} />}<div className="tags">{book.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{book.title}</h3><p>{book.description}</p></article>)}</div></section>
    <section className="works" id="process"><div className="works-head"><div><p className="eyebrow">THE PATTERN</p><h2>How I learn.</h2></div><p>That's probably the most accurate description of how I've learned so far.</p></div><div className="steps">{[
      ['Step #1', 'Build.', 'Start creating. Take an idea and put together the basic pieces to see how they fit.', '/aardvark/step-1.webp'],
      ['Step #2', 'Break.', 'Push the limits. Rip it apart, see what causes errors, and intentionally crash things.', '/aardvark/step-2.webp'],
      ['Step #3', 'Figure it out.', 'The messy part. Read docs, debug, ask questions, and slowly put the puzzle back together.', '/aardvark/step-3.webp'],
      ['Step #4', 'Build again.', 'Take everything learned and build it better, stronger, and more thoughtfully this time.', '/aardvark/step-4.webp'],
    ].map(([number, title, copy, art], index) => <article className={`step-card card-${index + 1}`} key={number}><span className="step-number">{number}</span><img src={art} alt="" /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="monthly testimonials-section" id="testimonials">
      <div className="section-intro">
        <div className="scribble discover kind-words">Kind words</div>
        <div>
          <h2>Testimonials</h2>
          <p>What people say about working with me.</p>
        </div>
      </div>
      <div className="testimonials-grid">
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
      </div>
    </section>

    <section className="box-section contact-section" id="contact">
      <div className="contact-header">
        <p className="eyebrow">LET'S BUILD SOMETHING</p>
        <h2>Let's work together.</h2>
        <p>Have an idea? A project? A weird experiment? A problem worth solving? I'd love to talk. Drop me a message below!</p>
      </div>
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
        <button type="submit" className="button pink" style={{ width: '100%' }}>SEND VIA WHATSAPP <Arrow /></button>
      </form>
    </section>
    <footer><h2 style={{ fontSize: '32px', margin: 0 }}>Jaya Patel</h2><div><p className="eyebrow">LET'S CONNECT</p><form className="email" onSubmit={(e) => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const email = fd.get('email') || '';
      const text = `Hi Jaya! I'd like to connect. My email is: ${email}`;
      window.open(`https://wa.me/917209892701?text=${encodeURIComponent(text)}`, '_blank');
    }}><input name="email" type="email" placeholder="Email address" aria-label="Email address" required /><button type="submit">→</button></form></div><p className="copyright">© 2026 Jaya Patel. All rights reserved.</p></footer>
  </main>
}
