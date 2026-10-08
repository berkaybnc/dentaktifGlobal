import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { getTreatmentDetail } from '../data/treatmentsData.js';

export default function TreatmentDetailPage({ treatmentId, onNavigate }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeVipTab, setActiveVipTab] = useState(0);
  const [toothCount, setToothCount] = useState(10);
  const { lang } = useLanguage();

  const data = getTreatmentDetail(treatmentId, lang);
  const vipTabs = data.vipTabs;
  const comparisonMatrix = data.comparisonMatrix;
  const ui = data.ui;
  const matrixCols = data.matrixColumns;

  return (
    <div className="page-treatment-detail section-padding" style={{ paddingTop: '10.5rem' }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          <button onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', color: 'var(--color-brand-primary)', cursor: 'pointer', fontWeight: 600 }}>
            {ui.breadcrumbHome}
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('treatments')} style={{ background: 'none', border: 'none', color: 'var(--color-brand-primary)', cursor: 'pointer', fontWeight: 600 }}>
            {ui.breadcrumbTreatments}
          </button>
          <span>/</span>
          <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>{data.name}</span>
        </div>

        {/* Hero Section Banner */}
        <div className="glass-card" style={{ padding: 'clamp(1.5rem, 4vw, 3.5rem) clamp(1rem, 3.5vw, 3rem)', borderRadius: '28px', background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,249,255,0.9))', marginBottom: '3.5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(2,132,199,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: '1 1 500px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(2, 132, 199, 0.08)', color: 'var(--color-brand-primary)', padding: '0.4rem 1.2rem', borderRadius: '99px', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.25rem', border: '1px solid rgba(2, 132, 199, 0.2)' }}>
                <span>{data.icon}</span> {data.badge}
              </div>

              <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.15, marginBottom: '1rem' }}>
                {data.name}
              </h1>

              <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-brand-primary)', marginBottom: '1.25rem' }}>
                {data.tagline}
              </p>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '650px' }}>
                {data.heroDesc}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate('consultation')} className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                  {ui.quoteBtn}
                </button>
                <a href="https://wa.me/+905521617377" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  💬 {ui.whatsappBtn}
                </a>
              </div>
            </div>

            {/* Quick Specs & Interactive Tooth Calculator */}
            <div className="glass-card" style={{ flex: '0 1 340px', padding: '2rem', borderRadius: '24px', background: 'white', border: '1px solid var(--glass-border-subtle)', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.2rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.6rem' }}>
                {ui.estimatorTitle}
              </h3>

              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                  <span>{ui.teethCount}</span>
                  <span style={{ color: 'var(--color-brand-primary)', fontSize: '1rem' }}>{toothCount} {ui.teeth}</span>
                </div>
                <input
                  type="range" min="1" max="20" value={toothCount}
                  onChange={(e) => setToothCount(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--color-brand-primary)' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f8fafc', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>⏱️ {ui.stay}</span>
                  <strong>{toothCount > 10 ? (lang === 'tr' ? '5 Gün' : lang === 'de' ? '5 Tage' : lang === 'ru' ? '5 дней' : '5 Days') : data.stay}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f8fafc', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>🚘 {ui.vitoTransfer}</span>
                  <strong style={{ color: '#059669' }}>{toothCount >= 6 ? ui.vitoIncluded : (lang === 'tr' ? 'Mevcut' : 'Available')}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f8fafc', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>🏨 {ui.hotelStay}</span>
                  <strong style={{ color: '#059669' }}>{toothCount >= 10 ? ui.hotelIncluded : ui.hotelPartner}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>🛡️ {ui.warranty}</span>
                  <strong style={{ color: 'var(--color-brand-gold)' }}>{data.warranty}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What is Treatment Overview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.2rem' }}>
              {data.name} {ui.whatIs}
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              {data.overview}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', background: 'rgba(2, 132, 199, 0.03)' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.2rem', color: 'var(--color-brand-deep)' }}>
              {ui.keyHighlights}
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', fontSize: '0.98rem', color: 'var(--text-main)' }}>
                  <span style={{ color: 'var(--color-brand-primary)', fontSize: '1.2rem', fontWeight: 'bold' }}>✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dynamic Image & Content Feature Grid */}
        {data.sections && data.sections.length > 0 && (
          <div style={{ marginBottom: '4rem' }}>
            <div className="section-header" style={{ marginBottom: '2.5rem' }}>
              <span className="section-badge">{ui.insightsBadge}</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>
                {ui.insightsTitle} {data.name}
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {data.sections.map((sec, idx) => (
                <div 
                  key={idx} 
                  className="glass-card treatment-feature-card" 
                  style={{ 
                    padding: '2.5rem', borderRadius: '28px', background: 'white',
                    display: 'grid', gridTemplateColumns: idx % 2 === 0 ? '1.2fr 0.8fr' : '0.8fr 1.2fr',
                    gap: '2.5rem', alignItems: 'center'
                  }}
                >
                  <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-brand-deep)', marginBottom: '1rem' }}>
                      {sec.title}
                    </h3>
                    <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                      {sec.desc}
                    </p>
                    <button onClick={() => onNavigate('consultation')} className="btn-secondary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}>
                      {ui.quoteBtn}
                    </button>
                  </div>

                  {sec.image && (
                    <div className="treatment-img-wrap" style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                      <img src={sec.image} alt={sec.title} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3-Step Journey Cards */}
        {data.steps && data.steps.length > 0 && (
          <div style={{ marginBottom: '4.5rem' }}>
            <div className="section-header" style={{ marginBottom: '2.5rem' }}>
              <span className="section-badge">{ui.stepBadge}</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>{ui.stepTitle}</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {data.steps.map((st, i) => (
                <div key={i} className="glass-card" style={{ padding: '2.2rem', borderRadius: '24px', background: 'white', borderTop: '4px solid var(--color-brand-primary)' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--color-brand-primary)', opacity: 0.35, display: 'block', marginBottom: '0.5rem' }}>
                    {st.step}
                  </span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.8rem', color: 'var(--text-main)' }}>
                    {st.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interactive VIP Health Tourism Experience Carousel Tabs */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-badge">{ui.vipBadge}</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>{ui.vipTitle}</h2>
            <p style={{ color: 'var(--text-muted)' }}>{ui.vipDesc}</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {vipTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveVipTab(i)}
                className={`vip-experience-tab ${activeVipTab === i ? 'active' : ''}`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="glass-card dark-card" style={{ padding: '3rem', borderRadius: '28px', background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--color-brand-gold)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {vipTabs[activeVipTab].subtitle}
              </span>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1rem', color: '#ffffff' }}>
                {vipTabs[activeVipTab].title}
              </h3>
              <p style={{ color: '#e2e8f0', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                {vipTabs[activeVipTab].desc}
              </p>
              <button onClick={() => onNavigate('consultation')} className="btn-primary" style={{ padding: '0.9rem 1.8rem' }}>
                {ui.quoteBtn}
              </button>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', height: '300px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <img src={vipTabs[activeVipTab].image} alt={vipTabs[activeVipTab].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Interactive Treatment Comparison Matrix */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-badge">{ui.matrixBadge}</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>{ui.matrixTitle}</h2>
            <p style={{ color: 'var(--text-muted)' }}>{ui.matrixDesc}</p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>{matrixCols.procedure}</th>
                  <th>{matrixCols.strength}</th>
                  <th>{matrixCols.stay}</th>
                  <th>{matrixCols.warranty}</th>
                  <th>{matrixCols.translucency}</th>
                  <th>{matrixCols.prep}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMatrix.map((item, idx) => (
                  <tr key={idx} style={{ background: item.name === data.name ? 'rgba(2, 132, 199, 0.06)' : 'transparent', fontWeight: item.name === data.name ? 700 : 400 }}>
                    <td>
                      <strong style={{ color: item.name === data.name ? 'var(--color-brand-primary)' : 'var(--text-main)' }}>
                        {item.name} {item.name === data.name && '👈'}
                      </strong>
                    </td>
                    <td>{item.strength}</td>
                    <td>{item.stay}</td>
                    <td><span style={{ color: 'var(--color-brand-gold)', fontWeight: 700 }}>{item.warranty}</span></td>
                    <td>{item.translucency}</td>
                    <td>{item.prep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        {data.faq && (
          <div style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2rem' }}>
              {ui.faqTitle}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data.faq.map((f, i) => (
                <div key={i} className="glass-card" style={{ borderRadius: '16px', padding: '1.25rem 1.5rem', cursor: 'pointer' }} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, fontSize: '1.05rem' }}>
                    <span>{f.q}</span>
                    <span style={{ fontSize: '1.4rem', color: 'var(--color-brand-primary)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <p style={{ marginTop: '0.8rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, borderTop: '1px solid var(--glass-border-subtle)', paddingTop: '0.8rem' }}>
                      {f.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="glass-card" style={{ textAlign: 'center', padding: '3.5rem 2rem', borderRadius: '28px', background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.08), rgba(217, 119, 6, 0.08))' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: '1rem' }}>
            {data.name} – {ui.bottomCtaTitle}
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            {ui.bottomCtaDesc}
          </p>
          <button onClick={() => onNavigate('consultation')} className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            {ui.bottomCtaBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
