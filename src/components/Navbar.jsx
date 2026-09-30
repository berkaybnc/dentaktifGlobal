import React, { useState, useEffect } from 'react';

export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('ENGLISH');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const treatmentItems = [
    { id: 'aesthetic-dentistry', name: 'Aesthetic Dentistry', icon: '✨', desc: 'Smile Makeovers & Whitening' },
    { id: 'hollywood-smile', name: 'Hollywood Smile', icon: '💎', desc: 'Complete Smile Transformations' },
    { id: 'dental-veneers', name: 'Dental Zirconium Veneers', icon: '🦷', desc: 'High-Durability Porcelain Veneers' },
    { id: 'dental-crowns', name: 'Dental Crowns', icon: '👑', desc: 'Custom Porcelain & Gold Crowns' },
    { id: 'dental-implants', name: 'Dental Implants', icon: '⚙️', desc: 'Swiss Straumann® Permanent Implants' },
    { id: 'root-canal', name: 'Root Canal Treatment', icon: '🔬', desc: 'Painless Endodontic Therapy' }
  ];

  const languages = [
    { code: 'ENGLISH', flag: '🇬🇧', label: 'English' },
    { code: 'DEUTSCH', flag: '🇩🇪', label: 'Deutsch' },
    { code: 'RUSSIAN', flag: '🇷🇺', label: 'Russian' },
    { code: 'TÜRKÇE', flag: '🇹🇷', label: 'Türkçe' },
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
              HOME
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
              TREATMENTS <span className="dropdown-arrow">▾</span>
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
                      <strong>{item.name}</strong>
                      <small>{item.desc}</small>
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
              BLOG
            </a>
          </li>

          {/* CONTACT */}
          <li>
            <a 
              href="/contact" 
              onClick={(e) => handleNavClick(e, 'contact')} 
              className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
            >
              CONTACT
            </a>
          </li>

          {/* CMS ADMIN */}
          <li>
            <button onClick={() => onNavigate('admin')} className="nav-admin-btn">
              CMS Admin
            </button>
          </li>
        </ul>

        <div className="nav-actions">
          {/* LANGUAGE SELECTOR */}
          <div className="lang-selector">
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="lang-btn"
            >
              🌐 <span>{currentLang}</span> ▾
            </button>

            {langDropdownOpen && (
              <ul className="lang-dropdown glass-card">
                {languages.map((l) => (
                  <li 
                    key={l.code}
                    onClick={() => { setCurrentLang(l.code); setLangDropdownOpen(false); }}
                  >
                    {l.flag} {l.label}
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
            Online Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}
