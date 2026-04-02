import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheckCircle, FaUsers, FaHandshake, FaShieldAlt, FaHeart, FaMosque, FaArrowRight } from 'react-icons/fa';
import bajmlogo from '../../public/images/bajm.jpg';
import heroImage from '../assets/images/hero-medina.png';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const whyRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.about-hero-content > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });

      gsap.from('.story-content > *', {
        scrollTrigger: { trigger: storyRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });

      gsap.from('.value-card', {
        scrollTrigger: { trigger: valuesRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });

      gsap.from('.why-item', {
        scrollTrigger: { trigger: whyRef.current, start: 'top 80%' },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src={heroImage} alt="Al-Masjid an-Nabawi" />
          <div className="about-hero-overlay" />
        </div>
        <div className="container about-hero-content">
          <span className="section-badge">About Us</span>
          <h1>Your Trusted Partner for <span className="hero-highlight">Sacred Journeys</span></h1>
          <p>Over a decade of guiding pilgrims with care, comfort, and devotion to the holy cities of Makkah and Madinah.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story" ref={storyRef}>
        <div className="container">
          <div className="story-layout">
            <div className="story-image">
              <img src={bajmlogo} alt="Our Story" />
              <div className="story-experience">
                <span className="exp-number">9+</span>
                <span className="exp-text">Years of Excellence</span>
              </div>
            </div>
            <div className="story-content">
              <span className="section-badge">Our Story</span>
              <h2>A Journey Built on <span className="gold-accent">Faith & Trust</span></h2>
              <p>
                Bajm Tours Hajj & Umrah Services was founded with a simple yet profound mission — to make 
                the sacred journey of Hajj and Umrah accessible, comfortable, and spiritually enriching 
                for every Muslim.
              </p>
              <p>
                Starting from Akluj, we have grown into a trusted name, serving over 500+ pilgrims 
                with our personalized service and attention to detail. Our team of experienced guides 
                ensures that every aspect of your journey — from accommodation to Ziyarah — is handled 
                with the utmost care.
              </p>
              <p>
                We take pride in treating every pilgrim like a member of our own family. Our Indian 
                Meals, comfortable hotel arrangements near the Haram, and knowledgeable guides make 
                your spiritual journey truly memorable.
              </p>
              <Link to="/packages" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Explore Our Packages <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section" ref={valuesRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Values</span>
            <h2>What <span className="gold-accent">Drives Us</span></h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <FaShieldAlt className="value-icon" />
              <h3>Trust & Safety</h3>
              <p>Your safety and peace of mind are our top priorities. We ensure secure, well-organized journeys.</p>
            </div>
            <div className="value-card">
              <FaHeart className="value-icon" />
              <h3>Devotion</h3>
              <p>Every pilgrimage is sacred. We serve with sincere devotion and spiritual awareness in everything we do.</p>
            </div>
            <div className="value-card">
              <FaHandshake className="value-icon" />
              <h3>Personalized Care</h3>
              <p>We treat every pilgrim like family, providing individual attention and customized experiences.</p>
            </div>
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>Experienced Team</h3>
              <p>Our multilingual guides have years of experience navigating the holy cities with expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section" ref={whyRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Why Choose Us</span>
            <h2>The <span className="gold-accent">Bajm Tours</span> Difference</h2>
          </div>
          <div className="why-grid">
            {[
              'Hotels within walking distance of the Haram',
              'Authentic Indian food throughout the journey',
              'Experienced Aalim guides for Ziyarah',
              '24/7 on-ground support for all pilgrims',
              'Flexible packages for every budget',
              'Family-friendly tours with individual attention',
              'Quick visa processing and documentation',
              'Group and private transportation options',
            ].map((item, idx) => (
              <div key={idx} className="why-item">
                <FaCheckCircle className="why-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
