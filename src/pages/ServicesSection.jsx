// ── Drop-in replacement for the Services Section in Home.jsx ──
//
// USAGE in Home.jsx:
//   1. import ServicesSection from '../components/ServicesSection';
//   2. Replace the entire <section className="section services-section" ...> block with:
//        <ServicesSection servicesRef={servicesRef} />
//   3. Add to GSAP useEffect in Home.jsx:
//        gsap.from('.svc-icon-card', {
//          scrollTrigger: { trigger: servicesRef.current, start: 'top 80%' },
//          y: 40, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
//        });

import {
  FaUserTie,
  FaGraduationCap,
  FaBed,
  FaTshirt,
  FaUtensils,
  FaBoxOpen,
  FaBus,
  FaPassport,
} from 'react-icons/fa';
import './ServicesSection.css';

const SERVICES = [
  { icon: <FaUserTie />,       label: 'Personal Guidance'    },
  { icon: <FaGraduationCap />, label: 'Pre-Umrah Training' },
  { icon: <FaBed />,           label: 'Accommodations'       },
  { icon: <FaTshirt />,        label: 'Laundry Services'     },
  { icon: <FaUtensils />,      label: 'Indian Food'                 },
  { icon: <FaBoxOpen />,       label: 'Umrah Kit'            },
  { icon: <FaBus />,           label: 'Transportation'       },
  { icon: <FaPassport />,      label: 'Visa Services'        },
];

const ServicesSection = ({ servicesRef }) => {
  return (
    <section className="section services-section" ref={servicesRef}>
      <div className="container">
        {/* ── 4×2 icon grid — matching image 2 ── */}
        <div className="services-icon-grid">
          {SERVICES.map((svc, idx) => (
            <div className="svc-icon-card" key={idx}>
              <div className="svc-icon-circle">
                {svc.icon}
              </div>
              <span className="svc-icon-label">{svc.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
