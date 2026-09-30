import React, { useState } from 'react';
import AdminDashboard from '../components/AdminDashboard.jsx';

export default function AdminPage({ onNavigate }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Default demo secure access key
  const ADMIN_KEY = 'dentaktif2026';

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_KEY) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Geçersiz yönetici parolası / Invalid credentials');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <div className="glass-card" style={{
          maxWidth: '420px',
          width: '100%',
          padding: '2.5rem',
          borderRadius: '20px',
          textAlign: 'center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔐</div>
          <h2 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Dent Aktif CMS Portal</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '2rem' }}>
            Yetkisiz erişim yasaktır. Lütfen yönetici şifrenizi girin.
          </p>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.2rem', textAlign: 'left' }}>
              <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.8rem', marginBottom: '0.4rem', fontWeight: 600 }}>
                YÖNETİCİ PAROLASI
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none'
                }}
                autoFocus
              />
            </div>

            {error && (
              <div style={{ color: '#f87171', fontSize: '0.85rem', marginBottom: '1rem' }}>
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem', justifyContent: 'center' }}
            >
              Güvenli Giriş Yap →
            </button>

            <button
              type="button"
              onClick={() => onNavigate('home')}
              style={{
                marginTop: '1.2rem',
                background: 'none',
                border: 'none',
                color: '#64748b',
                fontSize: '0.85rem',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              ← Ana Sayfaya Geri Dön
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="page-admin">
      <AdminDashboard onClose={() => {
        setIsAuthenticated(false);
        onNavigate('home');
      }} />
    </div>
  );
}
