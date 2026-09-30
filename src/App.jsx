import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import TreatmentsPage from './pages/TreatmentsPage.jsx';
import TreatmentDetailPage from './pages/TreatmentDetailPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ConsultationPage from './pages/ConsultationPage.jsx';
import AdminPage from './pages/AdminPage.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const validPages = [
    'home', 
    'treatments', 
    'aesthetic-dentistry', 
    'hollywood-smile', 
    'dental-veneers', 
    'dental-crowns', 
    'dental-implants', 
    'root-canal',
    'blog', 
    'contact', 
    'consultation', 
    'admin'
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageKey) => {
    setCurrentPage(pageKey);
    window.location.hash = pageKey;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'treatments':
        return <TreatmentsPage onNavigate={navigateTo} />;
      case 'aesthetic-dentistry':
      case 'hollywood-smile':
      case 'dental-veneers':
      case 'dental-crowns':
      case 'dental-implants':
      case 'root-canal':
        return <TreatmentDetailPage treatmentId={currentPage} onNavigate={navigateTo} />;
      case 'blog':
        return <BlogPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'consultation':
        return <ConsultationPage onNavigate={navigateTo} />;
      case 'admin':
        return <AdminPage onNavigate={navigateTo} />;
      case 'home':
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="app-root">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      <main className="main-content">
        {renderPage()}
      </main>

      {currentPage !== 'admin' && <Footer />}
    </div>
  );
}
