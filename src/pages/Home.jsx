import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaWhatsapp, FaPhone, FaEnvelope, FaKaaba, FaMosque, FaMapMarkedAlt, FaStar, FaQuoteLeft, FaUsers, FaAward, FaGlobe, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import PackageCard from '../components/PackageCard';
import packagesData from '../data/packages.json';
import reviewsData from '../data/reviews.json';
import heroImage from '../assets/images/hero-mecca.png';
import './Home.css';
import ServicesSection from './ServicesSection';
import { FaYoutube } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const packagesRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactRef = useRef(null);
  const videosRef = useRef(null);

  const featuredPackages = packagesData.filter(p => p.featured);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from('.hero-content > *', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3,
      });

      // Services cards
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });

      // Stats counter animation
      gsap.from('.stat-number', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
        textContent: 0,
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        stagger: 0.2,
      });

      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });

      // Package cards
      gsap.from('.packages-grid .package-card', {
        scrollTrigger: {
          trigger: packagesRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });

      // Review cards
      gsap.from('.review-card', {
        scrollTrigger: {
          trigger: reviewsRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });

      // Contact section
      gsap.from('.contact-card', {
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });
    });

    gsap.from('.video-card', {
      scrollTrigger: { trigger: videosRef.current, start: 'top 80%' },
      y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
    });

    return () => ctx.revert();
  }, []);

  const VIDEOS = [
    {
      id: 'v1',
      youtubeId: '9BOcqK8kX1M', // Replace with your actual YouTube video ID
      title: 'Complete Umrah Guide',
      desc: 'Step-by-step instructions for performing Umrah correctly.',
    },
    {
      id: 'v2',
      youtubeId: 'jud44wLATcM', // Replace with your actual YouTube video ID
      title: 'Past Umrah Journey',
      desc: 'Photos and insights about your previous Umrah journey.',
    },
    {
      id: 'v3',
      youtubeId: 'wz9iayjtXhU', // Replace with your actual YouTube video ID
      title: 'Interview about Umrah Experience',
      desc: 'An interview with a pilgrim sharing their Umrah experience and tips.',
    },
    {
      id: 'v4',
      youtubeId: '0ud5QN0FH4U', // Replace with your actual YouTube video ID
      title: 'Umrah Journey Experience',
      desc: 'Step-by-step instructions for performing Umrah correctly.',
    },
    {
      id: 'v5',
      youtubeId: 'zRNYe4WBNRg', // Replace with your actual YouTube video ID
      title: 'Meals in Makkah al-Mukarramah',
      desc: 'Authentic Indian food options and hospitality services available for pilgrims in Makkah.',
    },
    {
      id: 'v6',
      youtubeId: 'kpsu-cDJyCg', // Replace with your actual YouTube video ID
      title: 'Meals in Madinah Al Munawwarah ',
      desc: 'Indian Meal options available for pilgrims in Madinah.',
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <img src={heroImage} alt="Masjid al-Haram, Mecca" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content container">
          <span className="hero-badge" lang='arabic' dir='rtl'>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ✦</span>
          <h1>
            Experience the Sacred Journey of
            <span className="hero-highlight"> Hajj & Umrah</span>
          </h1>
          <p className="hero-subtitle">
            Professional and trusted service for your spiritual journey to the holy cities
            of Makkah and Madinah. Let us guide you every step of the way.
          </p>
          <div className="hero-buttons">
            <Link to="/packages" className="btn btn-primary btn-lg">
              Explore Packages <FaArrowRight />
            </Link>
            <a
              href="https://wa.me/919028889789?text=AssalamuAlaikum, I would like to know about your packages"
              className="btn btn-secondary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Contact Us
            </a>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section" ref={servicesRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Services</span>
            <h2>Complete <span className="gold-accent">Hajj & Umrah</span> Solutions</h2>
            <p className="section-subtitle">
              We provide end-to-end services ensuring your pilgrimage is comfortable,
              safe, and spiritually fulfilling.
            </p>
          </div>
          <ServicesSection servicesRef={servicesRef} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number" data-value="1000">1000</span>
              <span className="stat-suffix">+</span>
              <p className="stat-label">Happy Pilgrims</p>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-value="9">9</span>
              <span className="stat-suffix">+</span>
              <p className="stat-label">Years of Experience</p>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-value="30">30</span>
              <span className="stat-suffix">+</span>
              <p className="stat-label">Ziyarat sites Covered</p>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-value="100">100</span>
              <span className="stat-suffix">%</span>
              <p className="stat-label">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="section packages-section" ref={packagesRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Packages</span>
            <h2>Popular <span className="gold-accent">Travel Packages</span></h2>
            <p className="section-subtitle">
              Choose from our carefully curated Hajj and Umrah packages designed for every budget and comfort level.
            </p>
          </div>
          <div className="packages-grid">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} featured />
            ))}
          </div>
          <div className="packages-cta">
            <Link to="/packages" className="btn btn-outline btn-lg">
              View All Packages <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section reviews-section" ref={reviewsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Testimonials</span>
            <h2>What Our <span className="gold-accent">Pilgrims Say</span></h2>
            <p className="section-subtitle">
              Read heartfelt experiences from those who trusted us with their sacred journey.
            </p>
          </div>
          <div className="reviews-grid">
            {reviewsData.slice(0, 4).map((review) => (
              <div key={review.id} className="review-card">
                <FaQuoteLeft className="review-quote-icon" />
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="review-text">{review.text}</p>
                <div className="review-author">
                  <div className="review-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="review-name">{review.name}</h4>
                    <span className="review-location">{review.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="section videos-section" ref={videosRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Videos</span>
            <h2>Watch Our <span className="gold-accent">Videos</span></h2>
            <p className="section-subtitle">
              Experience the spiritual journey through our video collection
              of Hajj and Umrah pilgrimages.
            </p>
          </div>

          <div className="videos-grid">
            {VIDEOS.map(video => (
              <div key={video.id} className="video-card">
                <div className="video-embed">
                  <iframe  
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="video-card-body">
                  <h3 className="video-card-title">{video.title}</h3>
                  <p className="video-card-desc">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="videos-cta">
            <a
              href="https://www.youtube.com/@bazmislamic"
              className="btn-youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube /> Visit our YouTube Channel →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact" ref={contactRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Get in Touch</span>
            <h2>Contact <span className="gold-accent">Us Today</span></h2>
            <p className="section-subtitle">
              Ready to embark on your spiritual journey? Reach out through any of these channels.
            </p>
          </div>
          <div className="contact-grid">
            <a
              href="https://wa.me/919028889789?text=AssalamuAlaikum, I would like to know more about your packages"
              className="contact-card contact-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="contact-icon" />
              <h3>WhatsApp</h3>
              <p>Chat with us instantly</p>
              <span className="contact-value">+91 90288 89789</span>
            </a>
            <a href="tel:+919028889789" className="contact-card contact-phone">
              <FaPhone className="contact-icon" />
              <h3>Call Us</h3>
              <p>Speak directly with our team</p>
              <span className="contact-value">+91 90288 89789</span>
            </a>
            <a href="mailto:info@bajmtours.com" className="contact-card contact-email-card">
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <p>Send us a detailed inquiry</p>
              <span className="contact-value">info@bajmtours.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
