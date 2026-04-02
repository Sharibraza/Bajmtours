import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleContactClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${isOpen ? 'navbar-open' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <img src="./src/assets/bajm-tours-logo.png" alt="Bajm Tours Logo" className="logo-icon" />
          <div className="logo-text">
            <span className="logo-name">Bajm Tours</span>
            <span className="logo-tagline">Hajj & Umrah Services</span>
          </div>
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                onClick={link.path === '/#contact' ? handleContactClick : undefined}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/919028889789?text=AssalamuAlaikum, I am interested in your Umrah packages"
              className="btn btn-primary btn-sm nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>

      {isOpen && <div className="navbar-overlay" onClick={() => setIsOpen(false)} />}
    </nav>
  );
};

export default Navbar;
