import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaEnvelope, FaStar, FaClock, FaHotel, FaCheckCircle } from 'react-icons/fa';
import './PackageCard.css';

const PackageCard = ({ pkg, featured = false }) => {
  const whatsappMsg = encodeURIComponent(`Assalamu Alaikum, I am interested in the ${pkg.title} (${pkg.price}). Please share more details.`);

  return (
    <div id="package-card"className={`package-card ${featured ? 'package-card-featured' : ''}`}>
      {featured && <div className="package-badge">⭐ Popular</div>}
      
      <div className="package-image">
        <img 
          src={`/images/${pkg.image}`} 
          alt={pkg.title}
          loading="lazy"
        />
        <div className="package-category">{pkg.category}</div>
      </div>

      <div className="package-content">
        <h3 className="package-title">{pkg.title}</h3>
        
        <div className="package-meta">
          <span className="package-meta-item">
            <FaClock /> {pkg.duration}
          </span>
          <span className="package-meta-item">
            <FaHotel /> {pkg.hotel}
          </span>
        </div>

        <div className="package-price">
          <span className="price-amount">{pkg.price}</span>
          <span className="price-note">{pkg.priceNote}</span>
        </div>

        <ul className="package-inclusions">
          {pkg.inclusions.slice(0, 4).map((item, idx) => (
            <li key={idx}>
              <FaCheckCircle className="inclusion-icon" />
              <span>{item}</span>
            </li>
          ))}
          {pkg.inclusions.length > 4 && (
            <li className="more-inclusions">
              + {pkg.inclusions.length - 4} more inclusions
            </li>
          )}
        </ul>

        <div className="package-actions">
          <a
            href={`https://wa.me/919028889789?text=${whatsappMsg}`}
            className="btn btn-whatsapp btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="tel:+919028889789" className="btn btn-call btn-sm">
            <FaPhone /> Call
          </a>
          <a 
            href={`mailto:info@bajmtours.com?subject=Inquiry: ${pkg.title}&body=I am interested in the ${pkg.title} package.`}
            className="btn btn-email btn-sm"
          >
            <FaEnvelope /> Email
          </a>
        </div>

        <Link to={`/packages/${pkg.id}`} className="package-details-link">
          View Full Details →
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
