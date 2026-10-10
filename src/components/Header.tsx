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
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [langOpen, setLangOpen] = useState<boolean>(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const langTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleLangEnter = () => {
    if (langTimeoutRef.current) clearTimeout(langTimeoutRef.current);
    setLangOpen(true);
  };

  const handleLangLeave = () => {
    langTimeoutRef.current = setTimeout(() => {
      setLangOpen(false);
    }, 180);
  };

  useEffect(() => {
    const handleScroll = () => {
      setTreatmentsOpen(false);
      setLangOpen(false);
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      if (langTimeoutRef.current) {
        clearTimeout(langTimeoutRef.current);
      }
    };
  }, []);

  const isHome = pathname === '/' || pathname === '';
  const isTransparent = isHome && !isScrolled;
  const activeLang = LANGUAGES.find((l) => l.code === currentLocale) || LANGUAGES[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent border-b border-white/10 shadow-none'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_25px_rgba(33,17,100,0.06)]'
      }`}
    >
      {/* Main Navigation Bar */}
      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] sm:h-[76px] flex items-center justify-between gap-4 lg:gap-6">
        {/* Brand Logo & Hospital Crest */}
        <Link className="flex items-center gap-3 shrink-0 group py-1" href="/">
          <div className="flex items-center relative">
            <img
              src="/images/logo.png"
              alt="DentAktif Oral & Dental Hospital"
              className={`h-9 sm:h-11 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                isTransparent ? 'brightness-0 invert' : ''
              }`}
            />
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8 text-[13px] font-bold whitespace-nowrap">
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
                isTransparent
                  ? (treatmentsOpen ? 'text-teal-300' : 'text-white hover:text-teal-300')
                  : (treatmentsOpen ? 'text-[#211164]' : 'text-slate-800 hover:text-[#211164]')
              }`}
              aria-expanded={treatmentsOpen}
            >
              <span className="whitespace-nowrap">Treatments & Implants</span>
              <span
                className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                  treatmentsOpen
                    ? `rotate-180 ${isTransparent ? 'text-teal-300' : 'text-[#211164]'}`
                    : (isTransparent ? 'text-white/70' : 'text-slate-500')
                }`}
              >
                expand_more
              </span>
            </button>

            {treatmentsOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-[280px] bg-slate-950/95 backdrop-blur-2xl text-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-white/15 p-2 animate-in fade-in zoom-in-95 duration-150 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col space-y-1">
                  <Link
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:text-teal-300 hover:bg-teal-500/10 rounded-xl transition-all border border-transparent hover:border-teal-500/20 text-left group"
                    href="/treatments/aesthetic-dentistry"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform" />
                    <span>Aesthetic Dentistry</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:text-teal-300 hover:bg-teal-500/10 rounded-xl transition-all border border-transparent hover:border-teal-500/20 text-left group"
                    href="/treatments/hollywood-smile"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform" />
                    <span>Hollywood Smile</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:text-teal-300 hover:bg-teal-500/10 rounded-xl transition-all border border-transparent hover:border-teal-500/20 text-left group"
                    href="/treatments/dental-veneers"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform" />
                    <span>Dental Zirconium Veneers</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:text-teal-300 hover:bg-teal-500/10 rounded-xl transition-all border border-transparent hover:border-teal-500/20 text-left group"
                    href="/treatments/dental-crowns"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform" />
                    <span>Dental Crowns</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:text-teal-300 hover:bg-teal-500/10 rounded-xl transition-all border border-transparent hover:border-teal-500/20 text-left group"
                    href="/treatments/dental-implants"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform" />
                    <span>Dental Implants</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:text-teal-300 hover:bg-teal-500/10 rounded-xl transition-all border border-transparent hover:border-teal-500/20 text-left group"
                    href="/treatments/root-canal"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform" />
                    <span>Root Canal Treatment</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <a
            className={`transition-colors py-2 flex items-center gap-1 whitespace-nowrap shrink-0 ${
              isTransparent ? 'text-white/90 hover:text-teal-300' : 'text-slate-800 hover:text-[#211164]'
            }`}
            href="#cost-calculator-section"
          >
            <span>Techniques & Plans</span>
          </a>

          <a
            className={`transition-colors py-2 whitespace-nowrap shrink-0 ${
              isTransparent ? 'text-white/90 hover:text-teal-300' : 'text-slate-800 hover:text-[#211164]'
            }`}
            href="#clinical-cases"
          >
            Clinical Cases
          </a>

          <a
            className={`transition-colors py-2 whitespace-nowrap shrink-0 ${
              isTransparent ? 'text-white/90 hover:text-teal-300' : 'text-slate-800 hover:text-[#211164]'
            }`}
            href="#patient-journey"
          >
            5-Day Journey
          </a>

          <a
            className={`transition-colors py-2 whitespace-nowrap shrink-0 ${
              isTransparent ? 'text-white/90 hover:text-teal-300' : 'text-slate-800 hover:text-[#211164]'
            }`}
            href="#doctors-section"
          >
            Doctors
          </a>

          <Link
            className={`transition-colors py-2 whitespace-nowrap shrink-0 ${
              isTransparent ? 'text-white/90 hover:text-teal-300' : 'text-slate-800 hover:text-[#211164]'
            }`}
            href="/faq"
          >
            FAQ
          </Link>

          <Link
            className={`transition-colors py-2 whitespace-nowrap shrink-0 ${
              isTransparent ? 'text-white/90 hover:text-teal-300' : 'text-slate-800 hover:text-[#211164]'
            }`}
            href="/about"
          >
            About Us
          </Link>

          <Link
            className={`transition-colors py-2 whitespace-nowrap shrink-0 ${
              isTransparent ? 'text-white/90 hover:text-teal-300' : 'text-slate-800 hover:text-[#211164]'
            }`}
            href="/contact"
          >
            Contact Us
          </Link>
        </nav>

        {/* Header Action Buttons & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Elegant Luxury Language Capsule */}
          <div
            className="relative"
            onMouseEnter={handleLangEnter}
            onMouseLeave={handleLangLeave}
          >
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs font-bold transition-all ${
                isTransparent
                  ? 'bg-white/10 hover:bg-white/20 border-white/25 text-white backdrop-blur-md shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200/80 border-slate-200 text-slate-800 shadow-xs'
              }`}
              aria-label="Select Language"
              aria-expanded={langOpen}
            >
              <span className="text-sm leading-none">{activeLang.flag}</span>
              <span className="uppercase text-[11px] font-extrabold tracking-wide">{activeLang.label}</span>
              <span
                className={`material-symbols-outlined text-[15px] transition-transform duration-200 ${
                  langOpen ? 'rotate-180' : ''
                } ${isTransparent ? 'text-white/70' : 'text-slate-500'}`}
              >
                expand_more
              </span>
            </button>

            {langOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-36 bg-slate-950/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] p-1.5 animate-in fade-in zoom-in-95 duration-150 z-50"
                onMouseEnter={handleLangEnter}
                onMouseLeave={handleLangLeave}
              >
                <div className="flex flex-col space-y-0.5">
                  {LANGUAGES.map((lang) => (
                    <Link
                      key={lang.code}
                      href={pathname}
                      locale={lang.code}
                      onClick={() => setLangOpen(false)}
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        currentLocale === lang.code
                          ? 'bg-teal-500 text-slate-950 font-black shadow-sm'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-sm">{lang.flag}</span>
                        <span>{lang.title}</span>
                      </span>
                      {currentLocale === lang.code && (
                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Full button on sm+ screens */}
          <a
            className={`hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wide transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 ${
              isTransparent
                ? 'bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 text-[#0d072b] shadow-lg shadow-teal-500/25 hover:shadow-teal-400/40 hover:scale-[1.02]'
                : 'bg-gradient-to-r from-[#211164] via-[#2d1980] to-[#006972] text-white hover:opacity-95 shadow-md shadow-[#211164]/25'
            }`}
            href="#consultation-wizard"
          >
            <span className="whitespace-nowrap">Upload X-Ray / Free Quote</span>
          </a>

          {/* Compact icon button on mobile screens */}
          <a
            className={`sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl shadow-md active:scale-95 text-xs font-bold ${
              isTransparent
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-[#0d072b]'
                : 'bg-gradient-to-r from-[#211164] to-[#006972] text-white'
            }`}
            href="#consultation-wizard"
            title="Upload X-Ray / Free Quote"
          >
            +
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isTransparent
                ? 'text-white hover:bg-white/10'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
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
