import React from 'react';

export default function AdminDashboard({ onClose }) {
  const leads = [
    { ref: '#DAC-849201', name: 'Sarah Jenkins', country: '🇬🇧 United Kingdom', treatment: 'Hollywood Smile (Veneers)', date: '2026-10-12', status: 'New Lead' },
    { ref: '#DAC-739104', name: 'Hans Weber', country: '🇩🇪 Germany', treatment: 'All-on-6 Dental Implants', date: '2026-10-18', status: 'Offer Sent' },
    { ref: '#DAC-520193', name: 'Claire Dubois', country: '🇫🇷 France', treatment: 'Zirconia Crowns Makeover', date: '2026-10-05', status: 'Flight Booked' }
  ];

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(7, 13, 25, 0.95)', backdropFilter: 'blur(20px)',
      zIndex: 1000, overflowY: 'auto', padding: '2rem'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
          <div>
            <h1 style={{ color: 'white', fontSize: '2.2rem' }}>Dent Aktif CMS Dashboard</h1>
            <p style={{ color: '#94a3b8' }}>Manage Before/After Transformations, Treatment Packages & Patient Leads</p>
          </div>
          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
          >
            ✕ Close Dashboard
          </button>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: 'rgba(28, 37, 65, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '1.5rem' }}>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Total Consultation Leads</span>
            <h2 style={{ fontSize: '2.4rem', color: '#38bdf8', marginTop: '0.5rem' }}>148</h2>
            <span style={{ color: '#34d399', fontSize: '0.85rem' }}>+24% this month</span>
          </div>
          <div style={{ background: 'rgba(28, 37, 65, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '1.5rem' }}>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Active Before/After Cases</span>
            <h2 style={{ fontSize: '2.4rem', color: '#fbbf24', marginTop: '0.5rem' }}>32</h2>
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Managed via CMS</span>
          </div>
          <div style={{ background: 'rgba(28, 37, 65, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '1.5rem' }}>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Avg. Response Time</span>
            <h2 style={{ fontSize: '2.4rem', color: '#34d399', marginTop: '0.5rem' }}>14 mins</h2>
            <span style={{ color: '#34d399', fontSize: '0.85rem' }}>WhatsApp Integration</span>
          </div>
          <div style={{ background: 'rgba(28, 37, 65, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '1.5rem' }}>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Google Calendar Sync</span>
            <h2 style={{ fontSize: '2.4rem', color: '#a78bfa', marginTop: '0.5rem' }}>Active</h2>
            <span style={{ color: '#34d399', fontSize: '0.85rem' }}>Synced with API</span>
          </div>
        </div>

        {/* Table */}
        <div style={{ background: 'rgba(28, 37, 65, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '1.5rem' }}>
          <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>📥 Live Patient Leads Inbox</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', color: 'white' }}>
            <thead>
              <tr style={{ color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '1rem' }}>REF CODE</th>
                <th style={{ padding: '1rem' }}>PATIENT NAME</th>
                <th style={{ padding: '1rem' }}>COUNTRY</th>
                <th style={{ padding: '1rem' }}>TREATMENT</th>
                <th style={{ padding: '1rem' }}>DATE</th>
                <th style={{ padding: '1rem' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.ref} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#38bdf8' }}>{l.ref}</td>
                  <td style={{ padding: '1rem' }}><strong>{l.name}</strong></td>
                  <td style={{ padding: '1rem' }}>{l.country}</td>
                  <td style={{ padding: '1rem' }}>{l.treatment}</td>
                  <td style={{ padding: '1rem' }}>{l.date}</td>
                  <td style={{ padding: '1rem' }}>
                    <a href="https://wa.me/905000000000" target="_blank" style={{ color: '#25D366', fontWeight: 'bold' }}>
                      WhatsApp Chat →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
