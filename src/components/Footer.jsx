import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <>
      <footer style={{
        background: 'var(--bg-dark)', color: 'white',
        padding: '4rem 0 2rem 0', borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem', marginBottom: '3rem'
        }}>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
              🦷 DENT AKTİF GLOBAL
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
              {t('footerDesc')}
            </p>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.2rem' }}>{t('footerQuickLinks')}</h4>
            <ul style={{ listStyle: 'none', lineHeight: 2.2, color: '#94a3b8' }}>
              <li><a href="#hero">{t('navHome')}</a></li>
              <li><a href="#before-after">{t('baTitle')}</a></li>
              <li><a href="#journey">{t('journeyTitle')}</a></li>
              <li><a href="#consultation">{t('navConsultationBtn')}</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.2rem' }}>{t('footerContactClinic')}</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.8' }}>
              📍 Cevatpaşa Mah. Eski Edirne Asfaltı Cad. No:407/409 Bayrampaşa / Levent, İstanbul<br />
              📞 Phone / WhatsApp: +90 552 161 7377<br />
              ✉️ Email: info@dentaktifglobal.com
            </p>
          </div>
        </div>

        <div style={{
          textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '2rem', color: '#64748b', fontSize: '0.85rem'
        }}>
          {t('footerCopyright')}
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="floating-cta">
        <a
          href="https://wa.me/+905521617377?text=Hello,%20I%20am%20reaching%20out%20via%20your%20website.%20Could%20I%20get%20information%20about%20treatments%20and%20pricing?"
          target="_blank"
          className="btn-float-wa"
          title="Instant WhatsApp Chat"
        >
          💬
        </a>
      </div>
    </>
  );
}
