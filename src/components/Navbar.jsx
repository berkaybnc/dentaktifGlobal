import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const langDropdownRef = useRef(null);
  const { setLanguage, t, languages, currentLanguageObj, lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target)) {
        setLangDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLangDropdownOpen(false);
      }
    };

    if (langDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [langDropdownOpen]);

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
          <div className="lang-selector" ref={langDropdownRef}>
            <button 
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`lang-btn ${langDropdownOpen ? 'active' : ''}`}
              aria-label="Select Language"
              aria-expanded={langDropdownOpen}
              aria-haspopup="listbox"
            >
              <span className="lang-flag-badge" aria-hidden="true">
                {currentLanguageObj.flag}
              </span>
              <span className="lang-code-badge">
                {currentLanguageObj.code?.toUpperCase()}
              </span>
              <span className="lang-label-text">
                {currentLanguageObj.label}
              </span>
              <svg 
                className={`lang-chevron ${langDropdownOpen ? 'rotated' : ''}`} 
                width="13" 
                height="13" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {langDropdownOpen && (
              <div className="lang-dropdown-panel" role="listbox" aria-label="Languages">
                <div className="lang-dropdown-header">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span>Language / Dil</span>
                </div>
                <div className="lang-dropdown-list">
                  {languages.map((l) => {
                    const isSelected = (currentLanguageObj.code || lang) === l.code;
                    return (
                      <button
                        type="button"
                        key={l.code}
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => { 
                          setLanguage(l.code); 
                          setLangDropdownOpen(false); 
                        }}
                        className={`lang-dropdown-item ${isSelected ? 'selected' : ''}`}
                      >
                        <div className="lang-item-content">
                          <span className="lang-item-flag">{l.flag}</span>
                          <span className="lang-item-label">{l.label}</span>
                        </div>
                        <div className="lang-item-meta">
                          <span className="lang-item-code">{l.code.toUpperCase()}</span>
                          {isSelected && (
                            <svg 
                              className="lang-item-check" 
                              width="14" 
                              height="14" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="3" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
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
