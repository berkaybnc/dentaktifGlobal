import React, { useState } from 'react';
import { submitConsultationApi } from '../api/consultationApi.js';

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'United Kingdom',
    treatment: 'Hollywood Smile',
    preferredDate: '',
    notes: ''
  });

  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer && e.dataTransfer.files) {
      setFiles(prev => [...prev, ...Array.from(e.dataTransfer.files)]);
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
        alert('Lütfen kişisel bilgilerinizi eksiksiz doldurunuz.');
        return;
      }
    }
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await submitConsultationApi({ ...formData, filesCount: files.length });
      if (response.success) {
        setIsSuccess(true);
      } else {
        alert('Başvuru gönderilirken bir sorun oluştu.');
      }
    } catch (err) {
      console.error(err);
      alert('İletişim hatası oluştu, doğrudan WhatsApp üzerinden iletişime geçiniz.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation" className="section-padding" style={{
      background: 'radial-gradient(circle at 50% 50%, rgba(2, 132, 199, 0.05) 0%, transparent 70%)'
    }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Zero Cost • Fast Quote</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            Get Your Free 3D Dental Quote & Plan
          </h2>
          <p style={{ fontSize: '1.15rem' }}>
            Fill out 4 simple steps below. Receive your personalized treatment plan & estimated cost within 2 hours.
          </p>
        </div>

        <div className="glass-card" style={{ maxWidth: '850px', margin: '0 auto', padding: '3rem' }}>
          {!isSuccess ? (
            <>
              {/* Progress Steps Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginBottom: '3rem' }}>
                {['Personal', 'Treatment', 'Photos / X-Ray', 'Date & Submit'].map((label, idx) => {
                  const stepNum = idx + 1;
                  const isActive = stepNum === currentStep;
                  const isCompleted = stepNum < currentStep;
                  return (
                    <div key={stepNum} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 2 }}>
                      <div style={{
                        width: '42px', height: '42px', borderRadius: '50%',
                        background: isCompleted ? '#10B981' : isActive ? 'var(--color-brand-primary)' : 'var(--bg-surface)',
                        border: isCompleted ? '2px solid #10B981' : isActive ? '2px solid var(--color-brand-primary)' : '2px solid var(--glass-border-subtle)',
                        color: isActive || isCompleted ? 'white' : 'var(--text-muted)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700
                      }}>
                        {isCompleted ? '✓' : stepNum}
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>{label}</span>
                    </div>
                  );
                })}
              </div>

              {/* STEP 1 */}
              {currentStep === 1 && (
                <div>
                  <h3 style={{ marginBottom: '1.5rem' }}>Step 1: Your Contact Information</h3>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      style={{ width: '100%', padding: '0.9rem 1.2rem', borderRadius: '16px', border: '1px solid var(--glass-border-subtle)' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+44 7700 900000"
                        style={{ width: '100%', padding: '0.9rem 1.2rem', borderRadius: '16px', border: '1px solid var(--glass-border-subtle)' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Email Address *</label>
                      <input
                        type="email"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="sarah@example.com"
                        style={{ width: '100%', padding: '0.9rem 1.2rem', borderRadius: '16px', border: '1px solid var(--glass-border-subtle)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Country *</label>
                    <select
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      style={{ width: '100%', padding: '0.9rem 1.2rem', borderRadius: '16px', border: '1px solid var(--glass-border-subtle)', background: 'white' }}
                    >
                      <option value="United Kingdom">🇬🇧 United Kingdom</option>
                      <option value="Germany">🇩🇪 Germany</option>
                      <option value="United States">🇺🇸 United States</option>
                      <option value="Ireland">🇮🇪 Ireland</option>
                      <option value="France">🇫🇷 France</option>
                      <option value="Other">🌍 Other International</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {currentStep === 2 && (
                <div>
                  <h3 style={{ marginBottom: '1.5rem' }}>Step 2: Select Treatment</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                    {[
                      { name: 'Hollywood Smile', icon: '✨', detail: 'Veneers / E-Max Makeover' },
                      { name: 'All-on-4 / 6 Implants', icon: '🦷', detail: 'Swiss Straumann Full Arch' },
                      { name: 'Zirconia Crowns', icon: '💎', detail: 'High Aesthetic Durability' },
                      { name: 'Full Reconstruction', icon: '👑', detail: 'Complete Functional Makeover' }
                    ].map((t) => (
                      <div
                        key={t.name}
                        onClick={() => handleInputChange('treatment', t.name)}
                        style={{
                          padding: '1.5rem', borderRadius: '16px',
                          border: formData.treatment === t.name ? '2px solid var(--color-brand-primary)' : '2px solid var(--glass-border-subtle)',
                          background: formData.treatment === t.name ? 'rgba(2, 132, 199, 0.05)' : 'white',
                          cursor: 'pointer', textAlign: 'center'
                        }}
                      >
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{t.icon}</div>
                        <strong>{t.name}</strong>
                        <p style={{ fontSize: '0.8rem', marginTop: '0.4rem' }}>{t.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {currentStep === 3 && (
                <div>
                  <h3 style={{ marginBottom: '1.5rem' }}>Step 3: Upload Photos or Dental X-Ray</h3>
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleFileDrop}
                    style={{
                      border: '2px dashed var(--color-brand-primary)', borderRadius: '16px',
                      padding: '2.5rem', textAlign: 'center', background: 'rgba(2, 132, 199, 0.02)',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📷</div>
                    <strong style={{ display: 'block', fontSize: '1.1rem' }}>Drag & drop files here, or click to browse</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Supports JPG, PNG, PDF</span>
                  </div>
                  {files.length > 0 && (
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                      {files.map((f, i) => (
                        <div key={i} style={{ background: 'rgba(2, 132, 199, 0.1)', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.85rem' }}>
                          📄 {f.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4 */}
              {currentStep === 4 && (
                <div>
                  <h3 style={{ marginBottom: '1.5rem' }}>Step 4: Date Preference & Final Notes</h3>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Estimated Travel Date</label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      style={{ width: '100%', padding: '0.9rem 1.2rem', borderRadius: '16px', border: '1px solid var(--glass-border-subtle)' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Additional Notes or Questions</label>
                    <textarea
                      rows="3"
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      placeholder="Tell us if you have any dental fear or specific requests..."
                      style={{ width: '100%', padding: '0.9rem 1.2rem', borderRadius: '16px', border: '1px solid var(--glass-border-subtle)' }}
                    />
                  </div>
                </div>
              )}

              {/* Nav Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border-subtle)' }}>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="btn-secondary"
                  style={{ visibility: currentStep === 1 ? 'hidden' : 'visible' }}
                >
                  ← Previous Step
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className={`btn-primary ${currentStep === totalSteps ? 'btn-gold' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '⏳ Processing...' : currentStep === totalSteps ? '🚀 Submit & Get 3D Quote' : 'Continue to Next Step →'}
                </button>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{
                width: '80px', height: '80px', background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.5rem auto', color: '#10B981', fontSize: '2.5rem'
              }}>
                ✓
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem' }}>Free VIP Consultation Request Received!</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                Thank you, <strong>{formData.fullName}</strong>. Our senior dental specialist team has received your application. A coordinator will contact you via WhatsApp (<strong>{formData.phone}</strong>) within 2 hours.
              </p>
              <a href={`https://wa.me/+905521617377?text=Hello!%20I%20just%20submitted%20consultation%20for%20${encodeURIComponent(formData.fullName)}`} target="_blank" className="btn-primary btn-gold">
                💬 Speak Immediately on WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
