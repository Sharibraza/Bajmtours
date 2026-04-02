import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaEnvelope, FaCheckCircle, FaTimesCircle, FaClock, FaHotel, FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';
import packagesData from '../data/packages.json';
import './PackageDetails.css';

const PackageDetails = () => {
  const { id } = useParams();
  const pkg = packagesData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!pkg) {
    return (
      <div className="not-found-page">
        <div className="container" style={{ textAlign: 'center', paddingTop: '10rem' }}>
          <h1>Package Not Found</h1>
          <p>The package you're looking for doesn't exist.</p>
          <Link to="/packages" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            View All Packages
          </Link>
        </div>
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent(`Assalamu Alaikum, I am interested in the ${pkg.title} (${pkg.price}). Please share more details and availability.`);

  return (
    <div className="package-details-page">
      {/* Hero Banner */}
      <section className="details-hero">
        <div className="details-hero-bg">
          <img src={`/images/${pkg.image}`} alt={pkg.title} />
          <div className="details-hero-overlay" />
        </div>
        <div className="container details-hero-content">
          <Link to="/packages" className="details-back">
            <FaArrowLeft /> Back to Packages
          </Link>
          <span className="details-category">{pkg.category}</span>
          <h1>{pkg.title}</h1>
          <div className="details-hero-meta">
            <span><FaClock /> {pkg.duration}</span>
            <span><FaHotel /> {pkg.hotel}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="details-layout">
            {/* Main Content */}
            <div className="details-main">
              <div className="details-card">
                <h2>About This Package</h2>
                <p className="details-description">{pkg.description}</p>
              </div>

              <div className="details-card">
                <h2>Hotel Accommodation</h2>
                <div className="hotel-info">
                  <div className="hotel-item">
                    <FaMapMarkerAlt className="hotel-icon" />
                    <div>
                      <h4>Makkah</h4>
                      <p>{pkg.hotelMakkah}</p>
                    </div>
                  </div>
                  <div className="hotel-item">
                    <FaMapMarkerAlt className="hotel-icon" />
                    <div>
                      <h4>Madinah</h4>
                      <p>{pkg.hotelMadinah}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="details-card">
                <h2>What's Included</h2>
                <ul className="details-list included">
                  {pkg.inclusions.map((item, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="list-icon included-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="details-card">
                <h2>What's Not Included</h2>
                <ul className="details-list excluded">
                  {pkg.exclusions.map((item, idx) => (
                    <li key={idx}>
                      <FaTimesCircle className="list-icon excluded-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="details-sidebar">
              <div className="price-card">
                <div className="price-card-header">
                  <span className="price-label">Starting from</span>
                  <span className="price-value">{pkg.price}</span>
                  <span className="price-per">{pkg.priceNote}</span>
                </div>

                <div className="price-card-actions">
                  <a
                    href={`https://wa.me/919028889789?text=${whatsappMsg}`}
                    className="btn btn-whatsapp btn-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: '100%' }}
                  >
                    <FaWhatsapp /> Enquire on WhatsApp
                  </a>
                  <a href="tel:+919028889789" className="btn btn-call btn-lg" style={{ width: '100%' }}>
                    <FaPhone /> Call Now
                  </a>
                  <a
                    href={`mailto:info@bajmtours.com?subject=Inquiry: ${pkg.title}&body=I am interested in the ${pkg.title} (${pkg.price}). Please share availability and more details.`}
                    className="btn btn-email btn-lg"
                    style={{ width: '100%' }}
                  >
                    <FaEnvelope /> Email Inquiry
                  </a>
                </div>

                <div className="price-card-note">
                  <p>✦ Prices may vary based on season and availability</p>
                  <p>✦ Group discounts available</p>
                  <p>✦ Customizable packages on request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetails;
