import { Link } from 'react-router-dom';
import { FaMosque, FaWhatsapp, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* CTA Banner */}
      <div className="footer-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Ready to Begin Your <span className="gold-accent">Spiritual Journey?</span></h2>
              <p>Contact us today and let us help you plan the perfect Hajj or Umrah experience.</p>
            </div>
            <div className="cta-buttons">
              <a
                href="https://wa.me/919028889789?text=AssalamuAlaikum, I would like to know about Umrah packages"
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
              <a href="tel:+919028889789" className="btn btn-secondary btn-lg">
                <FaPhone /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <FaMosque className="footer-logo-icon" />
                <div>
                  <span className="footer-logo-name">Bajm Tours</span>
                  <span className="footer-logo-tagline">Hajj & Umrah Services</span>
                </div>
              </Link>
              <p className="footer-description">
                Your trusted partner for sacred journeys to Makkah and Madinah. 
                We provide professional, comfortable, and spiritually enriching 
                Hajj & Umrah services.
              </p>
              <div className="footer-socials">
                <a href="https://www.instagram.com/niyazahmed_kazi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bajmtours.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                  <FaEnvelope />
                </a>
                <a href="https://youtube.com/@bazmislamic?si=KRHR-oOeSzbHKyhq" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/packages">Our Packages</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/packages">Hajj Packages</Link></li>
                <li><Link to="/packages">Umrah Packages</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <FaPhone className="footer-contact-icon" />
                  <a href="tel:+919028889789">+91 90288 89789 <br />+91 84214 69789 <br />+91 73857 29930 </a>
                </li>
                <li>
                  <FaWhatsapp className="footer-contact-icon" />
                  <a href="https://wa.me/919080809330" target="_blank" rel="noopener noreferrer">Moulana Niyaz <br />Ahmad Alvi</a>
                </li>
                <li>
                  <FaEnvelope className="footer-contact-icon" />
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bajmtours.com" target="_blank" rel="noopener noreferrer">info@bajmtours.in</a>
                </li>
                <li>
                  <FaMapMarkerAlt className="footer-contact-icon" />
                  <span>B-4 Ratnai Park Akluj, Maharashtra, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Bajm Tours Hajj & Umrah Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
