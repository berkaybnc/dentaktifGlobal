import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setLanguage, t, languages, currentLanguageObj } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const treatmentItems = [
    { id: 'aesthetic-dentistry', nameKey: 'treatAesthetic', icon: '✨', descKey: 'treatAestheticDesc' },
    { id: 'hollywood-smile', nameKey: 'treatHollywood', icon: '💎', descKey: 'treatHollywoodDesc' },
    { id: 'dental-veneers', nameKey: 'treatVeneers', icon: '🦷', descKey: 'treatVeneersDesc' },
    { id: 'dental-crowns', nameKey: 'treatCrowns', icon: '👑', descKey: 'treatCrownsDesc' },
    { id: 'dental-implants', nameKey: 'treatImplants', icon: '⚙️', descKey: 'treatImplantsDesc' },
    { id: 'root-canal', nameKey: 'treatRootCanal', icon: '🔬', descKey: 'treatRootCanalDesc' }
  ];

  const handleNavClick = (e, pageKey) => {
    if (e) e.preventDefault();
    setTreatmentsOpen(false);
    setMobileMenuOpen(false);
    onNavigate(pageKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand */}
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-brand">
          <div className="brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5.5 2.5 8 .8 2 1.5 4 3.5 4s2.7-2 3.5-4c1-2.5 2.5-5 2.5-8 0-3.5-2.5-6-6-6z" fill="rgba(255,255,255,0.25)" stroke="#fff" />
              <path d="M12 6v6m-3-3h6" stroke="#fff" strokeWidth="2" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ letterSpacing: '-0.02em', fontWeight: 800 }}>
              DENT AKTİF <span style={{ color: 'var(--color-brand-primary)' }}>GLOBAL</span>
            </span>
            <small style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.04em' }}>
              LEVENT, ISTANBUL • AUTH: TR-34-DH-4892
            </small>
          </div>
        </a>

        {/* Menu (Desktop & Mobile Drawer) */}
        <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {/* HOME */}
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')} 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            >
              {t('navHome')}
            </a>
          </li>

          {/* TREATMENTS DROPDOWN */}
          <li 
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setTreatmentsOpen(true)}
            onMouseLeave={() => setTreatmentsOpen(false)}
          >
            <a 
              href="#treatments" 
              onClick={(e) => {
                if (window.innerWidth <= 1024) {
                  e.preventDefault();
                  setTreatmentsOpen(!treatmentsOpen);
                } else {
                  handleNavClick(e, 'treatments');
                }
              }} 
              className={`nav-link dropdown-trigger ${['treatments', 'aesthetic-dentistry', 'hollywood-smile', 'dental-veneers', 'dental-crowns', 'dental-implants', 'root-canal'].includes(currentPage) ? 'active' : ''}`}
            >
              {t('navTreatments')} <span className="dropdown-arrow">{treatmentsOpen ? '▴' : '▾'}</span>
            </a>
            <div className={`treatments-dropdown glass-card ${treatmentsOpen ? 'is-open' : ''}`} style={{ display: treatmentsOpen ? 'block' : undefined }}>
              <div className="dropdown-grid">
                {treatmentItems.map((item) => (
                  <a 
                    href={`#${item.id}`} 
                    key={item.id} 
                    onClick={(e) => handleNavClick(e, item.id)} 
                    className={`dropdown-item ${currentPage === item.id ? 'active' : ''}`}
                    style={{ cursor: 'pointer', zIndex: 10 }}
                  >
                    <span className="item-icon">{item.icon}</span>
                    <div className="item-text">
                      <strong>{t(item.nameKey)}</strong>
                      <small>{t(item.descKey)}</small>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </li>

          {/* BLOG */}
          <li>
            <a 
              href="/blog" 
              onClick={(e) => handleNavClick(e, 'blog')} 
              className={`nav-link ${currentPage === 'blog' ? 'active' : ''}`}
            >
              {t('navBlog')}
            </a>
          </li>

          {/* CONTACT */}
          <li>
            <a 
              href="/contact" 
              onClick={(e) => handleNavClick(e, 'contact')} 
              className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            >
              {t('navContact')}
            </a>
          </li>

          {/* Mobile CTA inside Drawer */}
          <li className="mobile-cta-item" style={{ width: '100%', paddingTop: '1rem' }}>
            <button 
              onClick={(e) => handleNavClick(e, 'consultation')} 
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {t('navConsultationBtn')}
            </button>
          </li>
        </ul>

        {/* Actions (Language & Consultation Button & Mobile Toggle) */}
        <div className="nav-actions">
          {/* LANGUAGE SELECTOR */}
          <div className="lang-selector">
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="lang-btn"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}
              aria-label="Select Language"
            >
              <span>{currentLanguageObj.flag}</span>
              <span className="lang-label-text">{currentLanguageObj.label}</span> ▾
            </button>

            {langDropdownOpen && (
              <ul className="lang-dropdown glass-card" style={{ zIndex: 120 }}>
                {languages.map((l) => (
                  <li 
                    key={l.code}
                    onClick={() => { setLanguage(l.code); setLangDropdownOpen(false); }}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.8rem' }}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ONLINE CONSULTATION BUTTON (Desktop) */}
          <button 
            onClick={(e) => handleNavClick(e, 'consultation')} 
            className="btn-primary desktop-cta-btn"
          >
            {t('navConsultationBtn')}
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button 
            type="button"
            className="nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
}
