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
            <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="material-symbols-outlined text-teal-400" style={{ fontSize: '1.8rem' }}>dentistry</span>
              <span>DENT AKTİF GLOBAL</span>
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
            <div style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '2', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span className="material-symbols-outlined text-teal-400" style={{ fontSize: '1.1rem', marginTop: '0.2rem' }}>location_on</span>
                <span>Cevatpaşa Mah. Eski Edirne Asfaltı Cad. No:407/409 Bayrampaşa / Levent, İstanbul</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="material-symbols-outlined text-teal-400" style={{ fontSize: '1.1rem' }}>call</span>
                <span>Phone / WhatsApp: +90 552 161 7377</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="material-symbols-outlined text-teal-400" style={{ fontSize: '1.1rem' }}>mail</span>
                <span>Email: info@dentaktifglobal.com</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '2rem', color: '#64748b', fontSize: '0.85rem'
        }}>
          {t('footerCopyright')}
        </div>
      </footer>

    </>
  );
}
