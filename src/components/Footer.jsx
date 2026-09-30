import React from 'react';

export default function Footer() {
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
              International Premier Dental Tourism Center. Certified by Ministry of Health Republic of Turkey.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.2rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', lineHeight: 2.2, color: '#94a3b8' }}>
              <li><a href="#hero">Home</a></li>
              <li><a href="#before-after">Before & After Gallery</a></li>
              <li><a href="#journey">5-Step Travel Journey</a></li>
              <li><a href="#consultation">Online Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.2rem' }}>Contact Clinic</h4>
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
          © 2026 Dent Aktif Clinic Global. All Rights Reserved. Excellence in Every Detail.
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
