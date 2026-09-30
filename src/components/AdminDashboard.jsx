import React, { useState, useEffect } from 'react';
import { fetchLeadsApi, updateLeadStatusApi, deleteLeadApi } from '../api/consultationApi.js';

export default function AdminDashboard({ onClose }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('ALL');

  const loadLeads = async () => {
    setLoading(true);
    const data = await fetchLeadsApi();
    setLeads(data);
    setLoading(false);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    const success = await updateLeadStatusApi(id, newStatus);
    if (success) {
      setLeads(prev => prev.map(l => l.id === id ? { ...l, status: newStatus } : l));
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bu hasta kaydını silmek istediğinize emin misiniz?')) {
      const success = await deleteLeadApi(id);
      if (success) {
        setLeads(prev => prev.filter(l => l.id !== id));
      }
    }
  };

  const filteredLeads = leads.filter(l => {
    if (filter === 'ALL') return true;
    return l.status === filter;
  });

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'New Lead':
        return { background: 'rgba(2, 132, 199, 0.25)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)' };
      case 'Offer Sent':
        return { background: 'rgba(245, 158, 11, 0.25)', color: '#fbbf24', border: '1px solid rgba(251, 191, 36, 0.3)' };
      case 'Flight Booked':
        return { background: 'rgba(16, 185, 129, 0.25)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.3)' };
      case 'Completed':
        return { background: 'rgba(168, 85, 247, 0.25)', color: '#c084fc', border: '1px solid rgba(192, 132, 252, 0.3)' };
      default:
        return { background: 'rgba(148, 163, 184, 0.2)', color: '#cbd5e1' };
    }
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(7, 13, 25, 0.96)', backdropFilter: 'blur(20px)',
      zIndex: 1000, overflowY: 'auto', padding: '2rem 1rem'
    }}>
      <div className="container" style={{ maxWidth: '1240px' }}>
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <h1 style={{ color: 'white', fontSize: '2rem', margin: 0 }}>Dent Aktif CMS Portal</h1>
              <span style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600 }}>
                ⚡ SQLite Connected
              </span>
            </div>
            <p style={{ color: '#94a3b8', margin: '0.4rem 0 0 0', fontSize: '0.9rem' }}>
              Canlı Hasta Konsültasyon Havuzu & Medikal Turizm Yönetimi
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={loadLeads}
              className="btn-secondary"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'white', borderColor: 'rgba(255,255,255,0.15)' }}
            >
              🔄 Yenile
            </button>
            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.3)' }}
            >
              ✕ Çıkış Yap
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          <div style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.25rem' }}>
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Toplam Başvuru (SQLite)</span>
            <h2 style={{ fontSize: '2.2rem', color: '#38bdf8', margin: '0.4rem 0 0 0' }}>{leads.length}</h2>
          </div>
          <div style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.25rem' }}>
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Yeni Başvurular (New)</span>
            <h2 style={{ fontSize: '2.2rem', color: '#fbbf24', margin: '0.4rem 0 0 0' }}>
              {leads.filter(l => l.status === 'New Lead').length}
            </h2>
          </div>
          <div style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.25rem' }}>
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Uçuşu Onaylananlar</span>
            <h2 style={{ fontSize: '2.2rem', color: '#34d399', margin: '0.4rem 0 0 0' }}>
              {leads.filter(l => l.status === 'Flight Booked').length}
            </h2>
          </div>
          <div style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '1.25rem' }}>
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Veritabanı Durumu</span>
            <h2 style={{ fontSize: '1.4rem', color: '#a78bfa', margin: '0.7rem 0 0 0' }}>Aktif & Canlı</h2>
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          {['ALL', 'New Lead', 'Offer Sent', 'Flight Booked', 'Completed'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              style={{
                padding: '0.4rem 0.9rem',
                borderRadius: '8px',
                border: filter === status ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)',
                background: filter === status ? 'rgba(56, 189, 248, 0.2)' : 'rgba(15, 23, 42, 0.6)',
                color: filter === status ? '#38bdf8' : '#94a3b8',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600
              }}
            >
              {status === 'ALL' ? 'Tümü' : status}
            </button>
          ))}
        </div>

        {/* Table Card */}
        <div style={{ background: 'rgba(30, 41, 59, 0.7)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '1.5rem', overflowX: 'auto' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
              ⏳ Veriler SQLite'tan yükleniyor...
            </div>
          ) : filteredLeads.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
              Kayıt bulunamadı. Siteden bir konsültasyon formu gönderildiğinde burada görünecektir.
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', color: 'white', minWidth: '850px' }}>
              <thead>
                <tr style={{ color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem' }}>
                  <th style={{ padding: '0.9rem' }}>REF KODU</th>
                  <th style={{ padding: '0.9rem' }}>HASTA ADI</th>
                  <th style={{ padding: '0.9rem' }}>ÜLKE</th>
                  <th style={{ padding: '0.9rem' }}>TEDAVİ</th>
                  <th style={{ padding: '0.9rem' }}>TARİH / NOT</th>
                  <th style={{ padding: '0.9rem' }}>DURUM</th>
                  <th style={{ padding: '0.9rem' }}>İŞLEMLER</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((l) => {
                  const rawPhone = (l.phone || '').replace(/[^0-9]/g, '');
                  const waUrl = rawPhone ? `https://wa.me/${rawPhone}` : '#';

                  return (
                    <tr key={l.id || l.ref} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <td style={{ padding: '0.9rem', fontFamily: 'monospace', color: '#38bdf8', fontWeight: 600 }}>
                        {l.ref}
                      </td>
                      <td style={{ padding: '0.9rem' }}>
                        <div><strong>{l.name}</strong></div>
                        {l.email && <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{l.email}</div>}
                        {l.phone && <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{l.phone}</div>}
                      </td>
                      <td style={{ padding: '0.9rem', fontSize: '0.9rem' }}>{l.country}</td>
                      <td style={{ padding: '0.9rem', fontSize: '0.9rem', color: '#e2e8f0' }}>{l.treatment}</td>
                      <td style={{ padding: '0.9rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                        <div>{l.preferred_date || l.preferredDate || 'Belirtilmedi'}</div>
                        {l.notes && <div style={{ color: '#cbd5e1', fontStyle: 'italic', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.notes}</div>}
                      </td>
                      <td style={{ padding: '0.9rem' }}>
                        <select
                          value={l.status || 'New Lead'}
                          onChange={(e) => handleStatusChange(l.id, e.target.value)}
                          style={{
                            ...getStatusBadgeStyle(l.status),
                            padding: '0.35rem 0.6rem',
                            borderRadius: '8px',
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                            outline: 'none'
                          }}
                        >
                          <option value="New Lead" style={{ background: '#1e293b', color: '#38bdf8' }}>New Lead</option>
                          <option value="Offer Sent" style={{ background: '#1e293b', color: '#fbbf24' }}>Offer Sent</option>
                          <option value="Flight Booked" style={{ background: '#1e293b', color: '#34d399' }}>Flight Booked</option>
                          <option value="Completed" style={{ background: '#1e293b', color: '#c084fc' }}>Completed</option>
                        </select>
                      </td>
                      <td style={{ padding: '0.9rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                          {rawPhone ? (
                            <a
                              href={waUrl}
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                background: '#25D366',
                                color: 'white',
                                padding: '0.35rem 0.75rem',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                              }}
                            >
                              💬 WhatsApp
                            </a>
                          ) : (
                            <span style={{ color: '#64748b', fontSize: '0.8rem' }}>No Phone</span>
                          )}

                          <button
                            onClick={() => handleDelete(l.id)}
                            title="Kaydı Sil"
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#ef4444',
                              cursor: 'pointer',
                              padding: '0.3rem',
                              fontSize: '1rem'
                            }}
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
