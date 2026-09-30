import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-contact section-padding" style={{ paddingTop: '10.5rem' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">We Are Here For You</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', marginBottom: '1.25rem' }}>
            Contact Dent Aktif Clinic Global
          </h1>
          <p style={{ fontSize: '1.15rem' }}>
            Get in touch with our international patient coordinator team in Istanbul via WhatsApp, phone, or instant inquiry.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Contact Details Column */}
          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.5rem' }}>Clinic Headquarters</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(2, 132, 199, 0.08)', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                  📍
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-main)' }}>Location & Address</strong>
                  <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    Cevatpaşa Mah. Eski Edirne Asfaltı Cad. No:407/409 A-1, Bayrampaşa & Levent Hub, İstanbul, Türkiye
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(37, 211, 102, 0.1)', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                  💬
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-main)' }}>WhatsApp & Phone Line</strong>
                  <p style={{ margin: '0 0 0.3rem 0', color: 'var(--text-muted)' }}>+90 552 161 7377</p>
                  <a href="https://wa.me/+905521617377" target="_blank" rel="noreferrer" style={{ color: '#25D366', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                    Open Direct WhatsApp Chat →
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(217, 119, 6, 0.1)', color: 'var(--color-brand-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                  ✉️
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-main)' }}>Email Inquiries</strong>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>info@dentaktifglobal.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(2, 132, 199, 0.08)', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                  🕒
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.05rem', color: 'var(--text-main)' }}>Working Hours</strong>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>Monday - Saturday: 09:00 - 19:00 (GMT+3)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form Column */}
          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.5rem' }}>Send Us a Message</h2>
                
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>Full Name *</label>
                  <input
                    type="text" required
                    className="form-input"
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    style={{ width: '100%', padding: '0.85rem 1.2rem', borderRadius: '14px', border: '1px solid var(--glass-border-subtle)' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>Phone / WhatsApp *</label>
                    <input
                      type="tel" required
                      className="form-input"
                      value={formState.phone}
                      onChange={e => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+44 7700 900000"
                      style={{ width: '100%', padding: '0.85rem 1.2rem', borderRadius: '14px', border: '1px solid var(--glass-border-subtle)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>Email *</label>
                    <input
                      type="email" required
                      className="form-input"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      placeholder="sarah@example.com"
                      style={{ width: '100%', padding: '0.85rem 1.2rem', borderRadius: '14px', border: '1px solid var(--glass-border-subtle)' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>Message</label>
                  <textarea
                    rows="4"
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    placeholder="How can we assist your dental journey?"
                    style={{ width: '100%', padding: '0.85rem 1.2rem', borderRadius: '14px', border: '1px solid var(--glass-border-subtle)' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message Now →
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '70px', height: '70px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 1.5rem auto' }}>
                  ✓
                </div>
                <h3>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem 0' }}>
                  Thank you, {formState.name}. A representative will respond via WhatsApp or email shortly.
                </p>
                <a href="https://wa.me/+905521617377" target="_blank" rel="noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>
                  💬 Chat on WhatsApp Now
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Embedded Map Section */}
        <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '28px', overflow: 'hidden' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', paddingLeft: '0.5rem' }}>Find Our Clinic in Istanbul</h3>
          <div style={{ width: '100%', height: '380px', borderRadius: '20px', overflow: 'hidden' }}>
            <iframe
              title="Dent Aktif Clinic Global Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12034.428456108183!2d29.00628375!3d41.08051785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab65d4b8f395b%3A0x86915b2e9e802bd0!2sLevent%2C%20Be%C5%9Fikta%C5%9F%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
