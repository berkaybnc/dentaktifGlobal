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
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs tracking-tight">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-slate-300 font-medium text-[11px]">
              Republic of Turkey Ministry of Health • USHAŞ &amp; HealthTürkiye Accredited (Cert No: <span className="text-white font-mono font-bold">2026034015610080000425805</span>)
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

            <Link
              className="hidden md:inline-flex items-center gap-1 text-teal-300 hover:text-white transition-colors text-xs font-semibold"
              href="/contact"
            >
              <span>International Patient Desk</span>
            </Link>

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
      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] sm:h-[76px] flex items-center justify-between gap-4 lg:gap-6">
        {/* Brand Logo & Hospital Crest */}
        <Link className="flex items-center gap-3 shrink-0 group py-1" href="/">
          {/* Official DentAktif Color Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="DentAktif Oral & Dental Hospital"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8 text-[13px] font-bold text-slate-700 whitespace-nowrap">
          {/* Treatments Dropdown with Safe Hover Bridge */}
          <div
            className="relative py-3 shrink-0"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setTreatmentsOpen(!treatmentsOpen)}
              className={`flex items-center gap-1 transition-colors whitespace-nowrap ${
                treatmentsOpen ? 'text-[#211164]' : 'text-slate-800 hover:text-[#211164]'
              }`}
              aria-expanded={treatmentsOpen}
            >
              <span className="whitespace-nowrap">Treatments & Implants</span>
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
                className="absolute top-full left-0 w-[260px] bg-[#281566] text-white rounded-2xl shadow-2xl border border-white/10 p-2 animate-in fade-in zoom-in-95 duration-150 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col space-y-0.5">
                  <Link
                    className="px-3.5 py-2.5 text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors block text-left"
                    href="/treatments/aesthetic-dentistry"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    Aesthetic Dentistry
                  </Link>
                  <Link
                    className="px-3.5 py-2.5 text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors block text-left"
                    href="/treatments/hollywood-smile"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    Hollywood Smile
                  </Link>
                  <Link
                    className="px-3.5 py-2.5 text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors block text-left"
                    href="/treatments/dental-veneers"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    Dental Zirconium Veneers
                  </Link>
                  <Link
                    className="px-3.5 py-2.5 text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors block text-left"
                    href="/treatments/dental-crowns"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    Dental Crowns
                  </Link>
                  <Link
                    className="px-3.5 py-2.5 text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors block text-left"
                    href="/treatments/dental-implants"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    Dental Implants
                  </Link>
                  <Link
                    className="px-3.5 py-2.5 text-xs font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors block text-left"
                    href="/treatments/root-canal"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    Root Canal Treatment
                  </Link>
                </div>
              </div>
            )}
          </div>

          <a
            className="hover:text-[#211164] text-slate-800 transition-colors py-2 flex items-center gap-1 whitespace-nowrap shrink-0"
            href="#cost-calculator-section"
          >
            <span>Techniques & Plans</span>
          </a>

          <a
            className="hover:text-[#211164] text-slate-800 transition-colors py-2 whitespace-nowrap shrink-0"
            href="#clinical-cases"
          >
            Clinical Cases
          </a>

          <a
            className="hover:text-[#211164] text-slate-800 transition-colors py-2 whitespace-nowrap shrink-0"
            href="#patient-journey"
          >
            5-Day Journey
          </a>

          <a
            className="hover:text-[#211164] text-slate-800 transition-colors py-2 whitespace-nowrap shrink-0"
            href="#doctors-section"
          >
            Doctors
          </a>

          <Link
            className="hover:text-[#211164] text-slate-800 transition-colors py-2 whitespace-nowrap shrink-0"
            href="/faq"
          >
            FAQ
          </Link>

          <Link
            className="hover:text-[#211164] text-slate-800 transition-colors py-2 whitespace-nowrap shrink-0"
            href="/contact"
          >
            Contact Us
          </Link>
        </nav>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Full button on sm+ screens */}
          <a
            className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wide bg-gradient-to-r from-[#211164] via-[#2d1980] to-[#006972] text-white hover:opacity-95 shadow-md shadow-[#211164]/25 transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            href="#consultation-wizard"
          >
            <span className="whitespace-nowrap">Upload X-Ray / Free Quote</span>
          </a>

          {/* Compact icon button on mobile screens */}
          <a
            className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-r from-[#211164] to-[#006972] text-white shadow-md active:scale-95 text-xs font-bold"
            href="#consultation-wizard"
            title="Upload X-Ray / Free Quote"
          >
            +
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
                <span>Treatments</span>
                <span className={`material-symbols-outlined text-slate-400 text-sm transition-transform duration-200 ${treatmentsOpen ? 'rotate-90' : ''}`}>
                  chevron_right
                </span>
              </button>

              {treatmentsOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/70 rounded-xl my-1 border border-slate-100">
                  <Link
                    href="/treatments/aesthetic-dentistry"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium"
                  >
                    Aesthetic Dentistry
                  </Link>
                  <Link
                    href="/treatments/hollywood-smile"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium"
                  >
                    Hollywood Smile
                  </Link>
                  <Link
                    href="/treatments/dental-veneers"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium"
                  >
                    Dental Zirconium Veneers
                  </Link>
                  <Link
                    href="/treatments/dental-crowns"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium"
                  >
                    Dental Crowns
                  </Link>
                  <Link
                    href="/treatments/dental-implants"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium"
                  >
                    Dental Implants
                  </Link>
                  <Link
                    href="/treatments/root-canal"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium"
                  >
                    Root Canal Treatment
                  </Link>
                </div>
              )}
            </div>

            <a
              href="#cost-calculator-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>Techniques &amp; Plans</span>
              <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            </a>

            <a
              href="#clinical-cases"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>Verified Clinical Outcomes</span>
              <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            </a>

            <a
              href="#patient-journey"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>5-Day Travel &amp; Hotel Protocol</span>
              <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            </a>

            <a
              href="#doctors-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>Doctors &amp; Medical Faculty</span>
              <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            </a>

            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>Frequently Asked Questions</span>
              <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>Contact &amp; International Concierge</span>
              <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            </Link>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="#consultation-wizard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#211164] to-[#006972] text-white text-xs font-bold uppercase tracking-wider text-center shadow-md flex items-center justify-center"
            >
              Upload X-Ray / Free Plan
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-slate-800 text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center"
            >
              Contact Us &amp; Location
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
