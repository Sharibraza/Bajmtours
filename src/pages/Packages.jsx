import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PackageCard from '../components/PackageCard';
import packagesData from '../data/packages.json';
import './Packages.css';

gsap.registerPlugin(ScrollTrigger);

const Packages = () => {
  const [filter, setFilter] = useState('All');
  const headerRef = useRef(null);

  const categories = ['All', 'Hajj', 'Umrah'];
  const filtered = filter === 'All' ? packagesData : packagesData.filter(p => p.category === filter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.packages-page-header > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.all-packages-grid .package-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    });
    return () => ctx.revert();
  }, [filter]);

  return (
    <div className="packages-page">
      <section className="packages-page-hero">
        <div className="container">
          <div className="packages-page-header" ref={headerRef}>
            <span className="section-badge">Our Packages</span>
            <h1>Hajj & Umrah <span className="gold-accent">Packages</span></h1>
            <p className="section-subtitle">
              Choose from our carefully curated packages designed for comfort, 
              convenience, and a deeply fulfilling spiritual experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${filter === cat ? 'filter-tab-active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
                <span className="filter-count">
                  {cat === 'All' ? packagesData.length : packagesData.filter(p => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          <div className="all-packages-grid">
            {filtered.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
