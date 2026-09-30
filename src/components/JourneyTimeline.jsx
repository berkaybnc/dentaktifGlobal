import React, { useState, useEffect } from 'react';

export default function JourneyTimeline() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const steps = [
    {
      step: 1,
      title: "1. Online Free Consultation & 3D Plan",
      subtitle: "Step 1 - From Home",
      icon: "📱",
      description: "Send your teeth photos or X-Ray via our secure form. Our head dental surgeon evaluates your case and provides a detailed 3D digital smile design treatment plan & transparent quote within 2 hours.",
      badge: "100% Free & No Obligation"
    },
    {
      step: 2,
      title: "2. VIP Airport Arrival & Luxury Transfer",
      subtitle: "Step 2 - Welcome to Istanbul",
      icon: "✈️",
      description: "Arrive at Istanbul Airport (IST / SAW). Our private VIP chauffeur greets you at the gate and escorts you in a Mercedes V-Class to your 5-star ocean-view hotel partner.",
      badge: "VIP Transfer Included"
    },
    {
      step: 3,
      title: "3. In-Person Consultation & 3D Scanning",
      subtitle: "Step 3 - Day 1 at Clinic",
      icon: "🦷",
      description: "Visit Dent Aktif Clinic Global for high-resolution 3D Tomography (CBCT) and intraoral scanning. Review your mock-up smile in real-time with our specialist team.",
      badge: "State-of-the-Art Technology"
    },
    {
      step: 4,
      title: "4. Painless Treatment & Micro-Aesthetics",
      subtitle: "Step 4 - Days 2 to 4",
      icon: "✨",
      description: "Under pain-free local computer-controlled anesthesia or sedation, your veneers/implants are crafted using CAD/CAM milling in our in-house dental laboratory.",
      badge: "Pain-Free Computerized Delivery"
    },
    {
      step: 5,
      title: "5. Final Fit, Warranty Certificate & Celebration",
      subtitle: "Step 5 - Day 5 & Beyond",
      icon: "👑",
      description: "Walk out with your picture-perfect Hollywood Smile! Receive your international lifetime warranty certificate, aftercare kit, and VIP transfer back to the airport.",
      badge: "Lifetime International Guarantee"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('journey-section');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const totalHeight = rect.height;
        const progress = Math.min(100, Math.max(0, ((windowHeight - rect.top) / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="journey" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Seamless 5-Step Process</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            Your 5-Day VIP Journey in Istanbul
          </h2>
          <p style={{ fontSize: '1.15rem' }}>
            From your initial WhatsApp consultation to your flight home with a glowing new smile, every single detail is taken care of.
          </p>
        </div>

        <div id="journey-section" style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
          {/* Vertical Progress Line */}
          <div style={{
            position: 'absolute', top: 0, bottom: 0, left: '50%', width: '3px',
            background: 'rgba(226, 232, 240, 0.8)', transform: 'translateX(-50%)'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%',
              height: `${scrollProgress}%`,
              background: 'linear-gradient(to bottom, var(--color-brand-primary), var(--color-brand-gold))',
              transition: 'height 0.1s linear'
            }} />
          </div>

          {/* Step Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {steps.map((s, idx) => (
              <div
                key={s.step}
                style={{
                  position: 'relative', display: 'flex', width: '50%',
                  justifyContent: idx % 2 === 0 ? 'flex-end' : 'flex-start',
                  alignSelf: idx % 2 === 0 ? 'flex-start' : 'flex-end',
                  paddingLeft: idx % 2 === 0 ? 0 : '2rem',
                  paddingRight: idx % 2 === 0 ? '2rem' : 0
                }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute', top: 0,
                  right: idx % 2 === 0 ? '-17px' : 'auto',
                  left: idx % 2 === 0 ? 'auto' : '-17px',
                  width: '34px', height: '34px', borderRadius: '50%',
                  background: 'var(--color-brand-primary)', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '0.85rem', zIndex: 2,
                  boxShadow: '0 0 15px rgba(2, 132, 199, 0.4)'
                }}>
                  {s.step}
                </div>

                <div className="glass-card" style={{ padding: '2rem', width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-brand-primary)', textTransform: 'uppercase' }}>
                      {s.subtitle}
                    </span>
                    <span style={{
                      background: 'rgba(2, 132, 199, 0.08)', color: 'var(--color-brand-primary)',
                      fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: '99px'
                    }}>
                      {s.badge}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px',
                      background: 'rgba(2, 132, 199, 0.08)', color: 'var(--color-brand-primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem'
                    }}>
                      {s.icon}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{s.title}</h3>
                  </div>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
