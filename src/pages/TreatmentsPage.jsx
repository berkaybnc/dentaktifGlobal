import React, { useState } from 'react';

export default function TreatmentsPage({ onNavigate }) {
  const [filter, setFilter] = useState('all');

  const treatmentsList = [
    {
      id: "aesthetic-dentistry",
      category: "cosmetic",
      name: "Aesthetic Dentistry",
      icon: "✨",
      tagline: "Smile Makeovers & Digital Bonding",
      description: "Comprehensive cosmetic care combining laser tooth whitening, composite digital bonding, and laser gum contouring for naturally harmonious smile aesthetics.",
      duration: "1 - 3 Days",
      warranty: "10 Years",
      image: "https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg",
      highlights: [
        "In-office laser whitening (up to 8 shades whiter)",
        "Micro-invasive digital composite bonding",
        "Painless laser gum recontouring",
        "Zero tooth structure damage"
      ]
    },
    {
      id: "hollywood-smile",
      category: "cosmetic",
      name: "Hollywood Smile",
      icon: "💎",
      tagline: "Complete Porcelain Veneer Transformation",
      description: "Our world-renowned signature treatment. Full arch 20 E-Max® porcelain veneers customized to your skin tone, facial symmetry, and shade preferences.",
      duration: "5 Days (2 Appointments)",
      warranty: "Lifetime Warranty",
      image: "https://dentaktifglobal.com/wp-content/uploads/2024/03/Benefits-of-Hollywood-Smile.webp",
      highlights: [
        "20 E-Max® ultra-thin porcelain veneers",
        "Digital Intraoral 3D Smile Design preview",
        "VIP Bosphorus hotel & luxury transfer included",
        "Custom translucent natural shade matching"
      ]
    },
    {
      id: "dental-veneers",
      category: "veneers",
      name: "Dental Zirconium Veneers",
      icon: "🦷",
      tagline: "High-Durability Translucent Zirconia",
      description: "Unmatched mechanical strength blended with natural translucency. Ideal for patients fixing heavy discoloration, worn enamel, or minor misalignments.",
      duration: "4 - 5 Days",
      warranty: "20 Years Warranty",
      image: "https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-1024x853-1.webp",
      highlights: [
        "Premium German Zirconia blocks",
        "CAD/CAM precision computer milling",
        "Stain-resistant smooth glazed surface",
        "High resistance to fracture & bite forces"
      ]
    },
    {
      id: "dental-crowns",
      category: "veneers",
      name: "Dental Crowns",
      icon: "👑",
      tagline: "Full Coverage Porcelain & E-Max® Crowns",
      description: "Full-coverage dental crowns protecting compromised teeth or crowning dental implants with unmatched bio-compatibility and brilliant aesthetics.",
      duration: "4 - 5 Days",
      warranty: "15 Years Warranty",
      image: "https://dentaktifglobal.com/wp-content/uploads/2024/03/Hollywood-Smile-What-to-Expect.webp",
      highlights: [
        "Full 360-degree anatomical tooth protection",
        "E-Max Press or Monolithic Zirconia options",
        "Custom shade & texture hand-layering",
        "Perfect margin fit with 3D scanners"
      ]
    },
    {
      id: "dental-implants",
      category: "implants",
      name: "Dental Implants",
      icon: "⚙️",
      tagline: "Swiss Straumann® Permanent Arch Restoration",
      description: "Lifetime titanium and ceramic dental implants replacing missing teeth. Available in Single Implant, All-on-4, and All-on-6 full arch configurations.",
      duration: "5 Days (1st Phase)",
      warranty: "Lifetime International Guarantee",
      image: "https://dentaktifglobal.com/wp-content/uploads/2025/11/DENT-AKTIF-VITO.jpg",
      highlights: [
        "Official Swiss Straumann® Platinum Partner",
        "Pain-free computer-guided implant surgery",
        "Fixed Zirconia bridges & temporary teeth",
        "Includes 3D CBCT Tomography scan"
      ]
    },
    {
      id: "root-canal",
      category: "endodontics",
      name: "Root Canal Treatment",
      icon: "🔬",
      tagline: "Painless Single-Session Endodontic Care",
      description: "State-of-the-art microscopic endodontic therapy saving severely damaged teeth from extraction with 100% painless computerized local anesthesia.",
      duration: "1 Day",
      warranty: "10 Years",
      image: "https://dentaktifglobal.com/wp-content/uploads/2025/09/Basliksiz-1-1.png",
      highlights: [
        "3D Endodontic Rotary Microscopy",
        "100% Pain-free computerized anesthesia",
        "Biocompatible gutta-percha canal sealing",
        "Preserves natural root foundation"
      ]
    }
  ];

  const filteredTreatments = filter === 'all' 
    ? treatmentsList 
    : treatmentsList.filter(t => t.category === filter);

  return (
    <div className="page-treatments section-padding" style={{ paddingTop: '10.5rem' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">World-Class Dental Care</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', marginBottom: '1.25rem' }}>
            Our Specialized Dental Treatments
          </h1>
          <p style={{ fontSize: '1.15rem' }}>
            Explore our comprehensive range of international dental procedures performed in Istanbul with cutting-edge CAD/CAM 3D digital technology.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Treatments' },
            { id: 'cosmetic', label: '✨ Cosmetic Dentistry' },
            { id: 'veneers', label: '🦷 Veneers & Crowns' },
            { id: 'implants', label: '⚙️ Dental Implants' },
            { id: 'endodontics', label: '🔬 Root Canal Care' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setFilter(t.id)}
              style={{
                padding: '0.65rem 1.5rem', borderRadius: '99px',
                background: filter === t.id ? 'var(--color-brand-deep)' : 'white',
                color: filter === t.id ? 'white' : 'var(--text-muted)',
                border: '1px solid var(--glass-border-subtle)',
                fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer',
                transition: 'all 0.25s ease', boxShadow: filter === t.id ? '0 8px 20px rgba(2,132,199,0.2)' : 'none'
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Treatment Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
          {filteredTreatments.map(t => (
            <div key={t.id} className="glass-card treatment-feature-card" style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '28px', background: 'white' }}>
              <div>
                {/* Image Header */}
                <div className="treatment-img-wrap" style={{ marginBottom: '1.5rem', height: '220px' }}>
                  <img src={t.image} alt={t.name} />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', padding: '0.35rem 0.85rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-brand-gold)' }}>
                    🛡️ {t.warranty}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(2, 132, 199, 0.08)', color: 'var(--color-brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                    {t.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, margin: 0 }}>{t.name}</h3>
                    <span style={{ color: 'var(--color-brand-primary)', fontWeight: 600, fontSize: '0.85rem' }}>{t.tagline}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: '1.6' }}>
                  {t.description}
                </p>

                <div style={{ background: 'rgba(248, 250, 252, 0.9)', padding: '1.1rem', borderRadius: '16px', marginBottom: '1.5rem', border: '1px solid var(--glass-border-subtle)' }}>
                  <strong style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Key Treatment Highlights:</strong>
                  <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                    {t.highlights.map((h, i) => (
                      <li key={i}>✓ {h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--glass-border-subtle)', flexWrap: 'wrap', gap: '0.8rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  ⏱️ Stay: <strong>{t.duration}</strong>
                </span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => onNavigate(t.id)} className="btn-secondary" style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}>
                    View Details →
                  </button>
                  <button onClick={() => onNavigate('consultation')} className="btn-primary" style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}>
                    Book →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
