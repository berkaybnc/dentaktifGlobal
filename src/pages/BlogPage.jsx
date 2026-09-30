import React, { useState } from 'react';

export default function BlogPage({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "Why Over 50,000 International Patients Choose Istanbul for Dental Tourism",
      category: "Medical Tourism Guide",
      date: "October 14, 2026",
      readTime: "5 min read",
      author: "Dr. Mehmet Yılmaz",
      summary: "Discover how Istanbul became the world's premier capital for VIP cosmetic dentistry, offering European-standard care, Swiss Straumann® implants, and 5-star hospitality at 70% savings.",
      content: `Istanbul has established itself as the global destination for medical tourism. Patients from Europe, the UK, the US, and the Gulf regions travel to Dent Aktif Global for top-tier aesthetic restorations. 

Our clinic combines world-renowned specialists, CAD/CAM 3D intraoral technology, and all-inclusive luxury hotel packages with private chauffeured VIP transfers. You get international accredited care while saving up to 70% compared to Western Europe and North America.`,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Hollywood Smile vs Zirconia Veneers: Which Treatment Fits Your Smile?",
      category: "Cosmetic Guide",
      date: "September 28, 2026",
      readTime: "4 min read",
      author: "Dr. Mehmet Yılmaz",
      summary: "A detailed comparison between ultra-thin E-Max® porcelain veneers and high-durability German Zirconia crowns to help you choose the ideal option for your dental goals.",
      content: `When designing your dream smile, choosing the right material is paramount. E-Max® porcelain veneers offer unmatched light translucency and natural depth, ideal for front teeth aesthetic makeovers. 

On the other hand, German Zirconium crowns provide extraordinary flexural strength (over 1200 MPa), making them ideal for heavy bite forces, worn enamel, or full arch restorations.`,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "The Complete 5-Day VIP Journey: What to Expect During Your Clinic Stay",
      category: "Patient Experience",
      date: "September 15, 2026",
      readTime: "6 min read",
      author: "Dent Aktif Patient Team",
      summary: "Step-by-step breakdown of your Istanbul stay: from airport VIP Mercedes pickup to 3D Digital Intraoral scanning, temporary fitting, and final celebratory reveal.",
      content: `From the moment you touch down at Istanbul International Airport, our private chauffeur greets you in a luxury Mercedes Vito. 

Day 1 involves 3D CBCT tomography scanning, Digital Smile Design previewing, and initial consultation. 
Day 2 consists of gentle tooth preparation and temporary crown fitting. 
Day 5 concludes with your permanent E-Max or Zirconium fitting and a radiant celebratory photo session.`,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "How 3D CAD/CAM Computer Milling Guarantees 99.8% Precision in Dental Implants",
      category: "Dental Technology",
      date: "August 30, 2026",
      readTime: "4 min read",
      author: "Lab Specialist Team",
      summary: "Learn how digital 3D CBCT tomography scans and computer-guided milling eliminate guesswork and deliver painless single-session implant placement.",
      content: `Modern implantology relies on 3D computer surgical guides. By mapping nerve pathways and jawbone density with 3D CBCT scans down to the millimeter, implant surgery becomes a quick 15-minute keyhole procedure with zero suturing or bleeding.`,
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredArticles = articles.filter(art => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-blog section-padding" style={{ paddingTop: '10.5rem' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Dent Aktif Journal</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', marginBottom: '1.25rem' }}>
            Dental Tourism & Smile Insights
          </h1>
          <p style={{ fontSize: '1.15rem' }}>
            Expert advice, treatment comparisons, and travel preparation guides written by senior aesthetic surgeons at Dent Aktif Clinic Global.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {['All', 'Medical Tourism Guide', 'Cosmetic Guide', 'Patient Experience', 'Dental Technology'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.6rem 1.2rem', borderRadius: '99px',
                  background: selectedCategory === cat ? 'var(--color-brand-deep)' : 'white',
                  color: selectedCategory === cat ? 'white' : 'var(--text-muted)',
                  border: '1px solid var(--glass-border-subtle)',
                  fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', width: '280px' }}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '0.65rem 1.2rem', borderRadius: '99px', border: '1px solid var(--glass-border-subtle)', fontSize: '0.9rem', outline: 'none' }}
            />
          </div>
        </div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <span style={{ background: 'rgba(2, 132, 199, 0.08)', color: 'var(--color-brand-primary)', padding: '0.3rem 0.8rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 700 }}>
                FEATURED ARTICLE
              </span>
              <h2 style={{ fontSize: '2rem', margin: '1rem 0', lineHeight: '1.3' }}>
                {filteredArticles[0].title}
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                {filteredArticles[0].summary}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                <span>✍️ {filteredArticles[0].author}</span>
                <span>📅 {filteredArticles[0].date}</span>
                <span>⏱️ {filteredArticles[0].readTime}</span>
              </div>
              <button onClick={() => setActiveArticle(filteredArticles[0])} className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                Read Full Article →
              </button>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', height: '300px' }}>
              <img src={filteredArticles[0].image} alt="Dental Tourism Guide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        )}

        {/* Blog Articles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {filteredArticles.slice(1).map(art => (
            <div key={art.id} className="glass-card" style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '20px' }}>
              <div>
                <div style={{ borderRadius: '14px', overflow: 'hidden', height: '200px', marginBottom: '1.2rem' }}>
                  <img src={art.image} alt={art.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-brand-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {art.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0.6rem 0' }}>{art.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                  {art.summary}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--glass-border-subtle)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <span>📅 {art.date}</span>
                <button onClick={() => setActiveArticle(art)} style={{ background: 'none', border: 'none', color: 'var(--color-brand-primary)', fontWeight: 700, cursor: 'pointer' }}>
                  Read Article →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reading Modal */}
        {activeArticle && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
            <div className="glass-card" style={{ maxWidth: '750px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '3rem', borderRadius: '28px', background: 'white', position: 'relative' }}>
              <button onClick={() => setActiveArticle(null)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#f1f5f9', border: 'none', width: '36px', height: '36px', borderRadius: '50%', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
              
              <span style={{ color: 'var(--color-brand-primary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>{activeArticle.category}</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1rem' }}>{activeArticle.title}</h2>
              
              <div style={{ display: 'flex', gap: '1.2rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                <span>✍️ {activeArticle.author}</span>
                <span>📅 {activeArticle.date}</span>
                <span>⏱️ {activeArticle.readTime}</span>
              </div>

              <img src={activeArticle.image} alt={activeArticle.title} style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '16px', marginBottom: '1.5rem' }} />

              <div style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.8, whiteSpace: 'pre-line', marginBottom: '2rem' }}>
                {activeArticle.content}
              </div>

              <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
                <button onClick={() => { setActiveArticle(null); onNavigate('consultation'); }} className="btn-primary" style={{ padding: '0.8rem 1.8rem' }}>
                  Book Free Consultation →
                </button>
                <button onClick={() => setActiveArticle(null)} className="btn-secondary" style={{ padding: '0.8rem 1.5rem' }}>
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
