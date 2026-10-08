import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function BeforeAfterSlider() {
  const { t } = useLanguage();
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const wrapperRef = useRef(null);

  const cases = [
    {
      id: "hollywood-smile",
      name: "Hollywood Smile Makeover",
      description: "20 E-Max Porcelain Veneers with custom shade matching and digital smile design.",
      duration: "5 Days (2 Appointments)",
      patientOrigin: "London, United Kingdom",
      beforeImage: "https://dentaktifglobal.com/wp-content/uploads/2024/03/Hollywood-Smile-What-to-Expect.webp",
      afterImage: "https://dentaktifglobal.com/wp-content/uploads/2024/03/Benefits-of-Hollywood-Smile.webp",
      fallbackBefore: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
      fallbackAfter: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "full-arch-implants",
      name: "All-on-6 Dental Implants",
      description: "Full mouth restoration using Swiss Straumann implants and fixed Zirconia bridges.",
      duration: "6 Days (1st Phase)",
      patientOrigin: "Munich, Germany",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
      afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
      fallbackBefore: "https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg",
      fallbackAfter: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "zirconia-crowns",
      name: "Zirconia Porcelain Crowns",
      description: "Full makeover fixing severe wear, misalignment and discoloration.",
      duration: "4 Days",
      patientOrigin: "Dublin, Ireland",
      beforeImage: "https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg",
      afterImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80",
      fallbackBefore: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
      fallbackAfter: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const currentCase = cases[activeCaseIndex];

  const updatePos = (clientX) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updatePos(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updatePos(e.clientX);
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      updatePos(e.touches[0].clientX);
    }
  };

  return (
    <section id="before-after" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('baBadge')}</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            {t('baTitle')}
          </h2>
          <p style={{ fontSize: '1.15rem' }}>
            {t('baDesc')}
          </p>
        </div>

        {/* Case Navigation Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => { setActiveCaseIndex(idx); setSliderPos(50); }}
              style={{
                padding: '0.6rem 1.4rem', borderRadius: '99px',
                background: activeCaseIndex === idx ? 'var(--color-brand-deep)' : 'var(--bg-surface)',
                color: activeCaseIndex === idx ? '#ffffff' : 'var(--text-muted)',
                border: '1px solid var(--glass-border-subtle)',
                fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem',
                cursor: 'pointer', transition: 'all 0.2s ease'
              }}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Interactive Split Screen Slider */}
        <div
          ref={wrapperRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={(e) => {
            if (e.touches && e.touches[0]) updatePos(e.touches[0].clientX);
          }}
          onTouchMove={handleTouchMove}
          style={{
            position: 'relative', width: '100%', maxWidth: '900px', aspectRatio: '4 / 3',
            margin: '0 auto', borderRadius: '24px', overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(15, 23, 42, 0.15)', border: '1px solid var(--glass-border)',
            userSelect: 'none', cursor: 'ew-resize'
          }}
        >
          <span style={{
            position: 'absolute', top: '1.5rem', left: '1.5rem', padding: '0.4rem 1rem',
            borderRadius: '8px', background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)',
            color: 'white', fontWeight: 700, fontSize: '0.85rem', zIndex: 4
          }}>{t('baBefore')}</span>

          <span style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem', padding: '0.4rem 1rem',
            borderRadius: '8px', background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)',
            color: 'white', fontWeight: 700, fontSize: '0.85rem', zIndex: 4
          }}>{t('baAfter')}</span>

          {/* After Layer (Clipped) */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2,
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`
          }}>
            <img
              src={currentCase.afterImage}
              onError={(e) => { e.target.onerror = null; e.target.src = currentCase.fallbackAfter; }}
              alt={`${currentCase.name} After`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Before Layer (Base) */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <img
              src={currentCase.beforeImage}
              onError={(e) => { e.target.onerror = null; e.target.src = currentCase.fallbackBefore; }}
              alt={`${currentCase.name} Before`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Divider Handle */}
          <div style={{
            position: 'absolute', top: 0, bottom: 0, left: `${sliderPos}%`, width: '4px',
            background: '#ffffff', zIndex: 3, transform: 'translateX(-50%)',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.4)'
          }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '48px', height: '48px', borderRadius: '50%', background: '#ffffff',
              color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', boxShadow: '0 6px 20px rgba(0,0,0,0.3)', fontWeight: 'bold'
            }}>
              ◀ ▶
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '1rem' }}>
          <strong>{currentCase.name}</strong> — {currentCase.description}{' '}
          <span style={{ color: 'var(--color-brand-primary)', marginLeft: '0.5rem' }}>
            📍 {currentCase.patientOrigin} ({currentCase.duration})
          </span>
        </div>
      </div>
    </section>
  );
}

