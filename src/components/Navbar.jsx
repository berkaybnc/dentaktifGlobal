import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
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
    onNavigate(pageKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-brand">
          <div className="brand-icon">🦷</div>
          <span>DENT AKTİF <span style={{ fontWeight: 400, color: 'var(--color-brand-primary)' }}>GLOBAL</span></span>
        </a>

        <ul className="nav-menu">
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
              onClick={(e) => handleNavClick(e, 'treatments')} 
              className={`nav-link dropdown-trigger ${['treatments', 'aesthetic-dentistry', 'hollywood-smile', 'dental-veneers', 'dental-crowns', 'dental-implants', 'root-canal'].includes(currentPage) ? 'active' : ''}`}
            >
              {t('navTreatments')} <span className="dropdown-arrow">▾</span>
            </a>
            <div className={`treatments-dropdown glass-card ${treatmentsOpen ? 'is-open' : ''}`}>
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
        </ul>

        <div className="nav-actions">
          {/* LANGUAGE SELECTOR */}
          <div className="lang-selector">
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="lang-btn"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}
            >
              <span>{currentLanguageObj.flag}</span>
              <span>{currentLanguageObj.label}</span> ▾
            </button>

            {langDropdownOpen && (
              <ul className="lang-dropdown glass-card" style={{ zIndex: 100 }}>
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

          {/* ONLINE CONSULTATION BUTTON */}
          <button 
            onClick={(e) => handleNavClick(e, 'consultation')} 
            className="btn-primary"
          >
            {t('navConsultationBtn')}
          </button>
        </div>
      </div>
    </nav>
  );
}
