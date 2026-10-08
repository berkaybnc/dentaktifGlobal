'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/navigation';
import { Locale } from '@/i18n';

const LANGUAGES: Array<{ code: Locale; label: string; flag: string; title: string }> = [
  { code: 'en', label: 'EN', flag: '🇬🇧', title: 'English' },
  { code: 'de', label: 'DE', flag: '🇩🇪', title: 'Deutsch' },
  { code: 'fr', label: 'FR', flag: '🇫🇷', title: 'Français' },
  { code: 'ru', label: 'RU', flag: '🇷🇺', title: 'Русский' },
];

export default function Header() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState<boolean>(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setTreatmentsOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setTreatmentsOpen(false);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_25px_rgba(33,17,100,0.06)]">
      {/* 1. Official Ministry of Health Licensure & Accreditation Top Bar */}
      <div className="bg-[#120a33] text-white py-1.5 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs tracking-tight">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full text-[11px] border border-emerald-400/30 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Triage Active
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-slate-300 font-medium text-[11px]">
              Republic of Turkey Ministry of Health • Licensed International Provider (Auth: <span className="text-white font-mono font-bold">TR-34-DH-4892</span>)
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <a
              className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-bold text-white text-xs"
              href="tel:+902129008080"
              title="Hospital Direct Phone Line"
            >
              <span className="material-symbols-outlined text-[15px] text-teal-300">call</span>
              <span className="hidden sm:inline">+90 (212) 900 8080</span>
              <span className="sm:hidden text-[11px]">Call Desk</span>
            </a>

            <a
              className="hidden md:inline-flex items-center gap-1 text-emerald-300 hover:text-white transition-colors text-xs font-semibold"
              href="https://wa.me/902129008080"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[15px]">chat</span>
              <span>24/7 Medical Coordinator</span>
            </a>

            {/* Language Switcher (Subpath routed, strictly EN, DE, FR, RU - No domestic Turkish) */}
            <div className="flex items-center gap-0.5 sm:gap-1 border-l border-white/20 pl-2 sm:pl-3">
              {LANGUAGES.map((lang) => (
                <Link
                  key={lang.code}
                  href={pathname}
                  locale={lang.code}
                  title={lang.title}
                  className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-[11px] transition-all flex items-center gap-1 ${
                    currentLocale === lang.code
                      ? 'text-white bg-white/25 font-extrabold shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-white/10 font-semibold'
                  }`}
                >
                  <span className="text-[10px] sm:text-[11px]">{lang.flag}</span>
                  <span className="hidden xs:inline">{lang.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] sm:h-[76px] flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Logo & Hospital Crest */}
        <Link className="flex items-center gap-2.5 sm:gap-3 shrink-0 group" href="/">
          {/* Custom Medical Hospital Emblem SVG */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#1b0d52] via-[#281570] to-[#006972] p-[1.5px] shadow-md shadow-[#211164]/25 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
            <div className="w-full h-full bg-[#1b0d52] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-300 transition-transform duration-300 group-hover:rotate-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5.5 2.5 8 .8 2 1.5 4 3.5 4s2.7-2 3.5-4c1-2.5 2.5-5 2.5-8 0-3.5-2.5-6-6-6z" fill="rgba(43,165,152,0.18)" stroke="#2BA598" />
                <path d="M12 6v6m-3-3h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-headline text-lg sm:text-2xl font-extrabold tracking-tight text-[#1b0d52]">
                DENT AKTİF
              </span>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#006972] px-1.5 sm:px-2 py-0.5 rounded-md bg-teal-50 border border-teal-200">
                Hospital
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold tracking-wide flex items-center gap-1">
              <span>Levent, Istanbul</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700 font-bold hidden sm:inline">Official International Portal</span>
              <span className="text-emerald-700 font-bold sm:hidden">Portal</span>
            </div>
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-[13px] font-bold text-slate-700">
          {/* Treatments Dropdown with Safe Hover Bridge */}
          <div
            className="relative py-3"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setTreatmentsOpen(!treatmentsOpen)}
              className={`flex items-center gap-1 transition-colors ${
                treatmentsOpen ? 'text-[#211164]' : 'text-slate-800 hover:text-[#211164]'
              }`}
              aria-expanded={treatmentsOpen}
            >
              <span>Treatments & Implants</span>
              <span
                className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                  treatmentsOpen ? 'rotate-180 text-[#211164]' : 'text-slate-500'
                }`}
              >
                expand_more
              </span>
            </button>

            {treatmentsOpen && (
              <div
                className="absolute top-full -left-20 w-[720px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-5 animate-in fade-in zoom-in-95 duration-150 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-100">
                  {/* Category 1: Surgery & Implants */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 px-2 py-0.5 rounded bg-teal-50 inline-block mb-1">
                      ⚙️ Surgery & Implants
                    </span>
                    <Link
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      href="/treatments/dental-implants"
                      onClick={() => setTreatmentsOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[18px] text-sky-600 mt-0.5 group-hover:text-primary">dentistry</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-primary">
                          Dental Implants (Swiss Straumann®)
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal leading-tight block">
                          All-on-4 / All-on-6 immediate load
                        </span>
                      </div>
                    </Link>

                    <Link
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      href="/treatments/oral-surgery"
                      onClick={() => setTreatmentsOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[18px] text-teal-600 mt-0.5 group-hover:text-primary">medical_services</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-primary">
                          Oral & Maxillofacial Surgery
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal leading-tight block">
                          3D bone grafting & sinus lift
                        </span>
                      </div>
                    </Link>

                    <Link
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      href="/treatments/sedation-anesthesia"
                      onClick={() => setTreatmentsOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[18px] text-indigo-600 mt-0.5 group-hover:text-primary">bedtime</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-primary">
                          General Anesthesia & Sedation
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal leading-tight block">
                          Painless fear-free twilight sleep
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Category 2: Aesthetic & Smile */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 px-2 py-0.5 rounded bg-amber-50 inline-block mb-1">
                      ✨ Aesthetic & Cosmetic
                    </span>
                    <Link
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      href="/treatments/hollywood-smile"
                      onClick={() => setTreatmentsOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[18px] text-amber-600 mt-0.5 group-hover:text-primary">auto_awesome</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-primary">
                          Hollywood Smile Makeover
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal leading-tight block">
                          20 Ivoclar Vivadent E-Max® veneers
                        </span>
                      </div>
                    </Link>

                    <Link
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      href="/treatments/aesthetic-dentistry"
                      onClick={() => setTreatmentsOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[18px] text-teal-600 mt-0.5 group-hover:text-primary">magic_button</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-primary">
                          Aesthetic Dentistry & Whitening
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal leading-tight block">
                          Philips Zoom laser & composite artistry
                        </span>
                      </div>
                    </Link>

                    <Link
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      href="/treatments/orthodontics"
                      onClick={() => setTreatmentsOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[18px] text-purple-600 mt-0.5 group-hover:text-primary">straighten</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-primary">
                          Orthodontics & Clear Aligners
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal leading-tight block">
                          Invisible teeth straightening
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Category 3: Prosthetics & Restorations */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 px-2 py-0.5 rounded bg-rose-50 inline-block mb-1">
                      👑 Prosthetics & Crowns
                    </span>
                    <Link
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      href="/treatments/dental-veneers"
                      onClick={() => setTreatmentsOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[18px] text-rose-600 mt-0.5 group-hover:text-primary">diamond</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-primary">
                          Monolithic Zirconia Bridges
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal leading-tight block">
                          German Katana™ 1200+ MPa strength
                        </span>
                      </div>
                    </Link>

                    <Link
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      href="/treatments/dental-crowns"
                      onClick={() => setTreatmentsOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[18px] text-emerald-600 mt-0.5 group-hover:text-primary">crown</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-primary">
                          Dental Crowns & Restorations
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal leading-tight block">
                          Full-coverage CAD/CAM porcelain caps
                        </span>
                      </div>
                    </Link>

                    <Link
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      href="/treatments/restorative-dentistry"
                      onClick={() => setTreatmentsOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[18px] text-cyan-600 mt-0.5 group-hover:text-primary">build</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-primary">
                          Conservative & Restorative Care
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal leading-tight block">
                          Nano-composite fillings & ceramic inlays
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Category 4: Specialized & Diagnostics */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 px-2 py-0.5 rounded bg-blue-50 inline-block mb-1">
                      🔬 Specialized & Endodontics
                    </span>
                    <Link
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      href="/treatments/root-canal"
                      onClick={() => setTreatmentsOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[18px] text-blue-600 mt-0.5 group-hover:text-primary">biotech</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-primary">
                          Endodontics (Root Canal)
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal leading-tight block">
                          Microscopic single-visit root therapy
                        </span>
                      </div>
                    </Link>

                    <Link
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      href="/treatments/periodontics"
                      onClick={() => setTreatmentsOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[18px] text-emerald-600 mt-0.5 group-hover:text-primary">spa</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-primary">
                          Periodontology (Gum Care)
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal leading-tight block">
                          Laser gum recession & deep pocket care
                        </span>
                      </div>
                    </Link>

                    <Link
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group"
                      href="/treatments/digital-radiology"
                      onClick={() => setTreatmentsOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[18px] text-slate-700 mt-0.5 group-hover:text-primary">perm_media</span>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 group-hover:text-primary">
                          3D CBCT Volumetric Tomography
                        </span>
                        <span className="text-[11px] text-slate-500 font-normal leading-tight block">
                          On-site Morita ultra low-dose diagnostics
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* View All Treatments Hub Footer */}
                <div className="pt-3 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    All treatments backed by official manufacturer warranty passport.
                  </span>
                  <Link
                    href="/treatments"
                    onClick={() => setTreatmentsOpen(false)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1b0d52] hover:bg-[#281570] text-xs font-bold text-white transition-colors shadow-xs"
                  >
                    <span>View All 12 Departments →</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <a
            className="hover:text-[#211164] text-slate-800 transition-colors py-2 flex items-center gap-1"
            href="#cost-calculator-section"
          >
            <span>Cost & Inclusions</span>
          </a>

          <a
            className="hover:text-[#211164] text-slate-800 transition-colors py-2"
            href="#clinical-cases"
          >
            Clinical Cases
          </a>

          <a
            className="hover:text-[#211164] text-slate-800 transition-colors py-2"
            href="#patient-journey"
          >
            5-Day Journey
          </a>

          <a
            className="hover:text-[#211164] text-slate-800 transition-colors py-2"
            href="#in-house-lab"
          >
            German Lab
          </a>

          <a
            className="hover:text-[#211164] text-slate-800 transition-colors py-2"
            href="#concierge-section"
          >
            Doctors
          </a>

          <a
            className="hover:text-[#211164] text-slate-800 transition-colors py-2"
            href="#faq-section"
          >
            FAQ
          </a>
        </nav>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            className="hidden xl:inline-flex items-center justify-center px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#211164] border border-[#211164]/20 bg-[#211164]/5 hover:bg-[#211164]/10 transition-colors"
            href="#cost-calculator-section"
          >
            Itemized Pricing
          </a>

          {/* Full button on sm+ screens */}
          <a
            className="hidden sm:inline-flex items-center gap-2 justify-center px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wide bg-gradient-to-r from-[#211164] via-[#2d1980] to-[#006972] text-white hover:opacity-95 shadow-md shadow-[#211164]/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
            href="#consultation-wizard"
          >
            <span className="material-symbols-outlined text-[16px] text-teal-300">upload_file</span>
            <span>Upload X-Ray / Free Quote</span>
          </a>

          {/* Compact icon button on mobile screens */}
          <a
            className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-r from-[#211164] to-[#006972] text-white shadow-md active:scale-95"
            href="#consultation-wizard"
            title="Upload X-Ray / Free Quote"
          >
            <span className="material-symbols-outlined text-[18px]">upload_file</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Navigation Menu
          </div>

          <nav className="space-y-1 font-bold text-sm text-slate-800">
            {/* Mobile Treatments Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors text-left"
              >
                <span className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-teal-600 text-[20px]">auto_awesome</span>
                  <span>12 Clinical Treatment Departments</span>
                </span>
                <span className={`material-symbols-outlined text-slate-400 text-sm transition-transform duration-200 ${treatmentsOpen ? 'rotate-90' : ''}`}>
                  chevron_right
                </span>
              </button>

              {treatmentsOpen && (
                <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-50/70 rounded-xl my-1 border border-slate-100">
                  <Link
                    href="/treatments"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1.5 text-xs font-bold text-primary hover:underline"
                  >
                    ✦ View All 12 Treatments Overview
                  </Link>
                  <Link
                    href="/treatments/dental-implants"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1 text-xs text-slate-700 hover:text-primary"
                  >
                    • Dental Implants (Swiss Straumann®)
                  </Link>
                  <Link
                    href="/treatments/hollywood-smile"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1 text-xs text-slate-700 hover:text-primary"
                  >
                    • Hollywood Smile Makeover (E-Max®)
                  </Link>
                  <Link
                    href="/treatments/oral-surgery"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1 text-xs text-slate-700 hover:text-primary"
                  >
                    • Oral & Maxillofacial Surgery
                  </Link>
                  <Link
                    href="/treatments/dental-veneers"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1 text-xs text-slate-700 hover:text-primary"
                  >
                    • Monolithic Zirconia Full Bridges
                  </Link>
                  <Link
                    href="/treatments/dental-crowns"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1 text-xs text-slate-700 hover:text-primary"
                  >
                    • Dental Crowns & Restorations
                  </Link>
                  <Link
                    href="/treatments/root-canal"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1 text-xs text-slate-700 hover:text-primary"
                  >
                    • Endodontics (Microscopic Root Canal)
                  </Link>
                  <Link
                    href="/treatments/sedation-anesthesia"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1 text-xs text-slate-700 hover:text-primary"
                  >
                    • General Anesthesia & Sedation
                  </Link>
                  <Link
                    href="/treatments/aesthetic-dentistry"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1 text-xs text-slate-700 hover:text-primary"
                  >
                    • Aesthetic Dentistry & Whitening
                  </Link>
                  <Link
                    href="/treatments/restorative-dentistry"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1 text-xs text-slate-700 hover:text-primary"
                  >
                    • Conservative & Restorative Care
                  </Link>
                  <Link
                    href="/treatments/periodontics"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1 text-xs text-slate-700 hover:text-primary"
                  >
                    • Periodontology (Laser Gum Care)
                  </Link>
                  <Link
                    href="/treatments/orthodontics"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1 text-xs text-slate-700 hover:text-primary"
                  >
                    • Orthodontics & Clear Aligners
                  </Link>
                  <Link
                    href="/treatments/digital-radiology"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1 text-xs text-slate-700 hover:text-primary"
                  >
                    • 3D CBCT Volumetric Tomography
                  </Link>
                </div>
              )}
            </div>

            <a
              href="#cost-calculator-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-teal-600 text-[20px]">payments</span>
                <span>Transparent Cost & Inclusions</span>
              </span>
              <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            </a>

            <a
              href="#clinical-cases"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-teal-600 text-[20px]">compare</span>
                <span>Verified Clinical Outcomes</span>
              </span>
              <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            </a>

            <a
              href="#patient-journey"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-teal-600 text-[20px]">flight_land</span>
                <span>5-Day Travel & Hotel Protocol</span>
              </span>
              <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            </a>

            <a
              href="#in-house-lab"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-teal-600 text-[20px]">precision_manufacturing</span>
                <span>In-House German CAD/CAM Lab</span>
              </span>
              <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            </a>

            <a
              href="#concierge-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-teal-600 text-[20px]">medical_services</span>
                <span>Surgical Faculty & Concierge</span>
              </span>
              <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            </a>

            <a
              href="#faq-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-teal-600 text-[20px]">help_outline</span>
                <span>Frequently Asked Questions</span>
              </span>
              <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="#consultation-wizard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#211164] to-[#006972] text-white text-xs font-bold uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base text-teal-300">upload_file</span>
              <span>Upload X-Ray / Free Plan</span>
            </a>

            <a
              href="https://wa.me/902129008080"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>WhatsApp Medical Officer</span>
            </a>

            <a
              href="tel:+902129008080"
              className="w-full py-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base text-slate-600">call</span>
              <span>Direct Hospital Call (+90 212 900 8080)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
