import React from 'react';

export default function TrustMarquee() {
  const trustBadges = [
    { title: "JCI Accredited Clinic", icon: "💎", detail: "Global Healthcare Standard" },
    { title: "Republic of Turkey Ministry of Health", icon: "🏛️", detail: "Licensed Medical Tourism Clinic" },
    { title: "ISO 9001:2015 Certified", icon: "🛡️", detail: "Quality Management System" },
    { title: "Straumann® Official Center", icon: "🦷", detail: "Swiss Implant Platinum Partner" },
    { title: "Trustpilot ★ 4.9 / 5.0", icon: "⭐", detail: "Over 2,400+ Verified Patient Reviews" },
    { title: "TEMOS International", icon: "🌍", detail: "Excellence in Medical Tourism" },
    { title: "Lifetime Implant Warranty", icon: "📜", detail: "Official Certificate Provided" }
  ];

  const renderItems = (items) => items.map((item, idx) => (
    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
      <div style={{
        width: '36px', height: '36px', borderRadius: '8px',
        background: 'rgba(2, 132, 199, 0.08)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
        color: 'var(--color-brand-primary)'
      }}>
        {item.icon}
      </div>
      <div>
        <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-main)' }}>{item.title}</strong>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.detail}</span>
      </div>
    </div>
  ));

  return (
    <section style={{
      padding: '2.5rem 0', background: 'var(--bg-surface)',
      borderTop: '1px solid var(--glass-border-subtle)',
      borderBottom: '1px solid var(--glass-border-subtle)',
      overflow: 'hidden'
    }}>
      <div className="marquee-container">
        <div className="marquee-track">
          {renderItems(trustBadges)}
          {renderItems(trustBadges)}
        </div>
      </div>
    </section>
  );
}
