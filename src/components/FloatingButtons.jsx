import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import './FloatingButtons.css';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a
        href="tel:+919028889789"
        className="floating-btn floating-call"
        aria-label="Call Now"
      >
        <FaPhone />
        <span className="floating-label">Call</span>
      </a>
      <a
        href="https://wa.me/919028889789?text=Assalamu Alaikum, I am interested in your Umrah packages"
        className="floating-btn floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
        <span className="floating-label">WhatsApp</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
