import React from 'react';
import Hero3D from '../components/Hero3D.jsx';
import TrustMarquee from '../components/TrustMarquee.jsx';
import BeforeAfterSlider from '../components/BeforeAfterSlider.jsx';
import JourneyTimeline from '../components/JourneyTimeline.jsx';

export default function HomePage({ onNavigate }) {
  return (
    <div className="page-home">
      <Hero3D />
      <TrustMarquee />
      <BeforeAfterSlider />
      <JourneyTimeline />

      {/* Fast CTA Banner */}
      <section style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, var(--color-brand-deep) 0%, #0369a1 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{
            background: 'rgba(255,255,255,0.15)', padding: '0.4rem 1rem', borderRadius: '99px',
            fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em'
          }}>
            ✨ Fast 2-Hour Response Time
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'white', margin: '1.2rem 0' }}>
            Ready to Begin Your Hollywood Smile Journey?
          </h2>
          <p style={{ color: '#e0f2fe', maxWidth: '650px', margin: '0 auto 2.5rem auto', fontSize: '1.15rem' }}>
            Submit your teeth photos or X-Ray online. Get a free custom 3D treatment plan and transparent pricing estimate from our head surgeons.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('consultation')} className="btn-primary btn-gold">
              🚀 Start Free Consultation Form
            </button>
            <a href="https://wa.me/+905521617377" target="_blank" rel="noreferrer" className="btn-secondary" style={{ background: '#25D366', color: 'white', borderColor: '#25D366' }}>
              💬 Chat Directly on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
