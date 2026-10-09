'use client';

import React from 'react';
import { Link } from '@/navigation';
import SocialDock from './SocialDock';

export default function Footer() {
  const treatmentsCol1 = [
    { label: 'Aesthetic Dentistry', href: '/treatments/aesthetic-dentistry' },
    { label: 'Hollywood Smile', href: '/treatments/hollywood-smile' },
    { label: 'Dental Zirconium Veneers', href: '/treatments/dental-veneers' },
  ];

  const treatmentsCol2 = [
    { label: 'Dental Crowns', href: '/treatments/dental-crowns' },
    { label: 'Dental Implants', href: '/treatments/dental-implants' },
    { label: 'Root Canal Treatment', href: '/treatments/root-canal' },
  ];

  return (
    <footer className="relative w-full bg-[#1b0d52] text-white overflow-hidden border-t-2 border-[#006972]/40">
      {/* Subtle Vector Dental Art Silhouette Background (Pure SVG - Zero External Heavy Images) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-10">
        {/* Repeating/Styled Stylized Vector Tooth & Smile Waves */}
        <svg
          className="absolute -right-10 -bottom-16 w-[450px] h-[450px] text-[#2BA598]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M100 20 C60 20 40 45 40 85 C40 125 55 175 75 185 C85 190 92 155 100 155 C108 155 115 190 125 185 C145 175 160 125 160 85 C160 45 140 20 100 20 Z" />
          <path d="M60 80 Q100 120 140 80" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <svg
          className="absolute -left-16 -top-16 w-80 h-80 text-[#2BA598]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M20 140 Q100 70 180 140" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M100 30 C75 30 60 50 60 80 C60 115 72 150 85 160 C90 165 95 140 100 140 C105 140 110 165 115 160 C128 150 140 115 140 80 C140 50 125 30 100 30 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        {/* Top Grid: Brand & Treatments & Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/15">
          {/* 1. Brand Identity (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <Link href="/" className="inline-block group">
              <img
                src="/images/logo-white.png"
                alt="DentAktif Global"
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="font-headline text-2xl font-black text-white tracking-tight block">
                DentAktif
              </span>
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Dent Aktif International Oral &amp; Dental Hospital. Delivering world-class digital aesthetic smile design, precision Swiss implantology, and biocompatible restorations.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Accredited International Patient Centre • Istanbul</span>
            </div>
          </div>

          {/* 2. Our Treatments (5 cols - 2 clean sub-columns) */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="font-headline text-sm font-black uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BA598]" />
              Our Treatments
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs">
              <ul className="space-y-2">
                {treatmentsCol1.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-white transition-colors block hover:translate-x-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {treatmentsCol2.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-white transition-colors block hover:translate-x-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Social Media (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-headline text-sm font-black uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BA598]" />
              Official Channels
            </h4>
            <p className="text-[11px] text-slate-300">
              Connect with our international clinical concierge:
            </p>
            <div className="pt-1">
              <SocialDock />
            </div>
          </div>
        </div>

        {/* Bottom Contact Trio */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* 1. Address */}
          <div className="flex flex-col items-center justify-center space-y-1">
            <svg className="w-6 h-6 text-[#2BA598] mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <div className="font-bold text-xs text-white">Dent Aktif Surgical Suites</div>
            <div className="text-[11px] text-slate-300 leading-snug">
              Cevatpaşa District, Eski Edirne Asfaltı St. No:407/409 A-1<br />
              34045 Bayrampasa, Istanbul, Turkey
            </div>
          </div>

          {/* 2. Phone */}
          <div className="flex flex-col items-center justify-center space-y-1">
            <svg className="w-6 h-6 text-[#2BA598] mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div className="font-bold text-xs text-white">
              Direct Contact:{' '}
              <a href="tel:+905521617377" className="text-[#2BA598] hover:text-white transition-colors underline">
                +90 552 161 73 77
              </a>
            </div>
            <div className="text-[11px] text-slate-400">WhatsApp &amp; International Patient Hotline</div>
          </div>

          {/* 3. Email */}
          <div className="flex flex-col items-center justify-center space-y-1">
            <svg className="w-6 h-6 text-[#2BA598] mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <div>
              <a href="mailto:info@dentaktif.com" className="font-bold text-xs text-[#2BA598] hover:text-white transition-colors underline">
                info@dentaktif.com
              </a>
            </div>
            <div className="text-[11px] text-slate-400">Official Clinical Advisory Desk</div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-6 border-t border-white/10 text-center text-[11px] text-slate-400">
          © 2026 Dent Aktif International Dental Hospital. All Rights Reserved. Republic of Turkey Ministry of Health Authorization Certificate No: 2026034015610080000425805 (Doc: 305180775) • USHAŞ &amp; HealthTürkiye Accredited.
        </div>
      </div>
    </footer>
  );
}

