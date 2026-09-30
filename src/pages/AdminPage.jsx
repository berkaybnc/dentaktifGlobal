import React from 'react';
import AdminDashboard from '../components/AdminDashboard.jsx';

export default function AdminPage({ onNavigate }) {
  return (
    <div className="page-admin">
      <AdminDashboard onClose={() => onNavigate('home')} />
    </div>
  );
}
