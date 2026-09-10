import { Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <a href="/">
            <img 
              src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696179694070e2fa9eca375f_logo.svg" 
              alt="Aardvark Book Club Logo" 
              width="200" 
              height="50" 
            />
          </a>
        </div>
        
        <nav className="navbar-links">
          <a href="/allbooks" className="nav-link">All Books</a>
          <a href="/gifting" className="nav-link">Gifting</a>
          <a href="/faq" className="nav-link">FAQ</a>
          <a href="/login" className="btn-primary" style={{ marginLeft: '1rem', padding: '10px 20px', fontSize: '14px' }}>
            <span>Log-in / Sign-up</span>
          </a>
        </nav>
        
        <div className="navbar-right">
          <div className="lang-switch">en</div>
          <a href="#" className="social-icon" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20" height="20">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="currentColor"></path>
            </svg>
          </a>
          <button className="menu-toggle" aria-label="Menu">
            <span style={{marginRight: '8px', fontWeight: '600'}}>Menu</span>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
