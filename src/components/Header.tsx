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
                className="absolute top-full left-0 w-88 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 space-y-1.5 animate-in fade-in zoom-in-95 duration-150 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  href="#clinical-cases"
                  onClick={() => setTreatmentsOpen(false)}
                >
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 group-hover:bg-[#211164] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 group-hover:text-[#211164]">
                      Hollywood Smile Makeover
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal leading-tight">
                      16-20 Ivoclar Vivadent E-Max® ultra-thin porcelain laminates
                    </span>
                  </div>
                </a>

                <a
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  href="#clinical-cases"
                  onClick={() => setTreatmentsOpen(false)}
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 group-hover:bg-[#211164] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">dentistry</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 group-hover:text-[#211164]">
                      All-on-4 / All-on-6 Implants
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal leading-tight">
                      Swiss Straumann® SLA active guided flapless surgery
                    </span>
                  </div>
                </a>

                <a
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  href="#clinical-cases"
                  onClick={() => setTreatmentsOpen(false)}
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-[#211164] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">diamond</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 group-hover:text-[#211164]">
                      Monolithic Zirconia Full Bridges
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal leading-tight">
                      German Katana™ multilayer biocompatible aesthetic crowns
                    </span>
                  </div>
                </a>

                <a
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  href="#in-house-lab"
                  onClick={() => setTreatmentsOpen(false)}
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 group-hover:bg-[#211164] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 group-hover:text-[#211164]">
                      In-House German CAD/CAM Lab
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal leading-tight">
                      5-axis robotic milling & chairside master ceramist try-ins
                    </span>
                  </div>
                </a>
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
            <a
              href="#clinical-cases"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-teal-600 text-[20px]">auto_awesome</span>
                <span>Treatments & Implants</span>
              </span>
              <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
            </a>

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
