'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/navigation';
import { locales, Locale } from '@/i18n';

const LANGUAGES: Array<{ code: Locale; label: string }> = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
  { code: 'ru', label: 'RU' },
];

export default function Header() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_12px_rgba(33,17,100,0.05)]">
      {/* 1. Official Ministry of Health Licensure & Multilingual Bar */}
      <div className="border-b border-slate-100 bg-[#211164] text-white py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs tracking-tight">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded text-[11px] border border-emerald-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Clinical Triage Active
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="hidden md:inline text-slate-200 font-normal">
              Republic of Turkey Ministry of Health — Licensed International Health Tourism Provider (Auth No: TR-34-DH-4892)
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-bold text-white text-xs"
              href="tel:+902129008080"
            >
              <span className="material-symbols-outlined text-[15px] text-teal-300">call</span>
              <span>+90 (212) 900 8080</span>
            </a>
            <a
              className="hidden sm:inline-flex items-center gap-1 text-emerald-300 hover:text-white transition-colors text-xs font-semibold"
              href="https://wa.me/902129008080"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[15px]">chat</span>
              24/7 International Medical Officer
            </a>

            {/* Language Selector (Subpath routed, No TR option) */}
            <div className="flex items-center gap-1 border-l border-white/20 pl-3 text-[11px] font-bold">
              {LANGUAGES.map((lang) => (
                <Link
                  key={lang.code}
                  href={pathname}
                  locale={lang.code}
                  className={`px-1.5 py-0.5 rounded transition-colors ${
                    currentLocale === lang.code
                      ? 'text-white bg-white/25'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {lang.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand Identity & International Portal Badge */}
        <Link className="flex items-center gap-3 shrink-0 group" href="/">
          <img
            alt="Dent Aktif International Oral & Dental Hospital"
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg2HtnJiD5Dh50-Saff80Ad9XubIpYuGBJGp7E5Z7sEdBZXJLj1vZo2LqMHJ97jqJeSg4IBcFac-58zXYYNUJElZJAXE_SkPT2MBL9Dr7RLtWi3klbaGg-4MNZzl3UhpMbJrj9Ab1LM4a3lvDxtXjS5rufwppFvHnTeYzSpG7-npw_ekMVRkFmPIhpXKNQAdw6NSfcs9LYT0rXcUCU9BgJu9QZB7CNcnQe0-iFI5XMIKYqoSdZrkNJbA"
          />
          <div className="hidden xl:block border-l border-slate-200 pl-3 leading-tight">
            <span className="block text-[11px] font-extrabold uppercase tracking-wider text-primary">
              dentaktifglobal.com
            </span>
            <span className="block text-[10px] text-emerald-700 font-semibold">
              Official International Patient Portal
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-bold text-slate-700">
          {/* Treatments Dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 hover:text-primary transition-colors py-2 group-hover:text-primary"
            >
              <span>Treatments & Implants</span>
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
            <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-slate-100 p-2 hidden group-hover:block transition-all">
              <a
                className="flex items-center gap-2.5 p-2 rounded hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-800"
                href="#clinical-cases"
              >
                <span className="material-symbols-outlined text-teal-600 text-[18px]">auto_awesome</span>
                <div>
                  <span className="block">Smile Makeover (E-Max)</span>
                  <span className="text-[10px] text-slate-400 font-normal">Feldspathic micro-veneers</span>
                </div>
              </a>
              <a
                className="flex items-center gap-2.5 p-2 rounded hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-800"
                href="#clinical-cases"
              >
                <span className="material-symbols-outlined text-teal-600 text-[18px]">dentistry</span>
                <div>
                  <span className="block">All-on-4 / All-on-6 Implants</span>
                  <span className="text-[10px] text-slate-400 font-normal">Straumann® guided digital surgery</span>
                </div>
              </a>
              <a
                className="flex items-center gap-2.5 p-2 rounded hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-800"
                href="#clinical-cases"
              >
                <span className="material-symbols-outlined text-teal-600 text-[18px]">diamond</span>
                <div>
                  <span className="block">Monolithic Zirconia</span>
                  <span className="text-[10px] text-slate-400 font-normal">German CAD/CAM high-translucency</span>
                </div>
              </a>
            </div>
          </div>

          <a
            className="flex items-center gap-1 text-slate-700 hover:text-primary transition-colors font-bold"
            href="#cost-calculator-section"
          >
            <span className="material-symbols-outlined text-sm text-emerald-600">calculate</span>
            <span>Package Reference</span>
          </a>
          <a className="hover:text-primary transition-colors" href="#clinical-cases">
            Verified Cases & Results
          </a>
          <a className="hover:text-primary transition-colors" href="#patient-journey">
            5-Day Travel & Hotel Care
          </a>
          <a className="hover:text-primary transition-colors" href="#in-house-lab">
            In-House German Lab
          </a>
          <a className="hover:text-primary transition-colors" href="#concierge-section">
            Concierge & Doctors
          </a>
        </nav>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            className="hidden md:inline-flex items-center justify-center px-3.5 py-2 rounded text-xs font-bold text-primary border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
            href="#cost-calculator-section"
          >
            Itemized Cost Reference
          </a>
          <a
            className="inline-flex items-center gap-1.5 justify-center px-4 sm:px-5 py-2.5 rounded text-xs font-extrabold uppercase tracking-wide bg-gradient-to-r from-primary to-[#372b7a] text-white hover:opacity-95 shadow-md shadow-primary/20 transition-all"
            href="#consultation-wizard"
          >
            <span className="material-symbols-outlined text-sm text-teal-300">upload_file</span>
            <span>Upload X-Ray / Get Diagnosis</span>
          </a>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 shadow-xl">
          <a
            href="#cost-calculator-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800"
          >
            Package Reference
          </a>
          <a
            href="#clinical-cases"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800"
          >
            Verified Cases & Results
          </a>
          <a
            href="#patient-journey"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800"
          >
            5-Day Travel & Hotel Care
          </a>
          <a
            href="#in-house-lab"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800"
          >
            In-House German Lab
          </a>
          <a
            href="#concierge-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800"
          >
            Concierge & Doctors
          </a>
        </div>
      )}
    </header>
  );
}
