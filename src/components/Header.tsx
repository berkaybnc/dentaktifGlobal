'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/navigation';
import { Locale } from '@/i18n';

const LANGUAGES: Array<{ code: Locale; label: string; flag: string; title: string }> = [
  { code: 'en', label: 'EN', flag: '🇬🇧', title: 'English' },
  { code: 'de', label: 'DE', flag: '🇩🇪', title: 'Deutsch' },
  { code: 'ru', label: 'RU', flag: '🇷🇺', title: 'Русский' },
  { code: 'fr', label: 'FR', flag: '🇫🇷', title: 'Français' },
  { code: 'ar', label: 'AR', flag: '🇸🇦', title: 'العربية' },
];

const TREATMENT_LABELS: Record<string, Record<string, string>> = {
  'aesthetic-dentistry': {
    en: 'Aesthetic Dentistry',
    tr: 'Estetik Diş Hekimliği',
    de: 'Ästhetische Zahnheilkunde',
    ru: 'Эстетическая стоматология',
    fr: 'Dentisterie Esthétique',
    ar: 'طب الأسنان التجميلي',
  },
  'hollywood-smile': {
    en: 'Hollywood Smile',
    tr: 'Hollywood Smile',
    de: 'Hollywood Smile',
    ru: 'Голливудская улыбка',
    fr: 'Hollywood Smile',
    ar: 'ابتسامة هوليوود',
  },
  'dental-veneers': {
    en: 'Dental Zirconium Veneers',
    tr: 'Zirkonyum Kaplama & Lamine',
    de: 'Zirkon Veneers',
    ru: 'Циркониевые виниры',
    fr: 'Facettes Zircone',
    ar: 'قشور الزيركون التجميلية',
  },
  'dental-crowns': {
    en: 'Dental Crowns',
    tr: 'Diş Kuronları',
    de: 'Zahnkronen',
    ru: 'Зуبные коронки',
    fr: 'Couronnes Dentaires',
    ar: 'تيجان الأسنان',
  },
  'dental-implants': {
    en: 'Dental Implants',
    tr: 'Dental İmplantlar',
    de: 'Zahnimplantate',
    ru: 'Зубные импланты',
    fr: 'Implants Dentaires',
    ar: 'زراعة الأسنان',
  },
  'root-canal': {
    en: 'Root Canal Treatment',
    tr: 'Kanal Tedavisi',
    de: 'Wurzelkanalbehandlung',
    ru: 'Лечение каналов',
    fr: 'Traitement de Canal',
    ar: 'علاج جذور الأسنان',
  },
};

export default function Header() {
  const currentLocale = useLocale();
  const t = useTranslations('header');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [langOpen, setLangOpen] = useState<boolean>(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const langTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const langRef = useRef<HTMLDivElement | null>(null);

  const getTreatmentLabel = (key: string) => {
    return TREATMENT_LABELS[key]?.[currentLocale] || TREATMENT_LABELS[key]?.['en'] || key;
  };

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLangOpen(false);
      }
    };

    if (langOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [langOpen]);

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
              <span className="whitespace-nowrap">{t('navTreatments')}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  treatmentsOpen ? 'rotate-180' : ''
                } ${isTransparent ? 'text-white/70' : 'text-slate-500'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
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
                    <span>{getTreatmentLabel('aesthetic-dentistry')}</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:text-teal-300 hover:bg-teal-500/10 rounded-xl transition-all border border-transparent hover:border-teal-500/20 text-left group"
                    href="/treatments/hollywood-smile"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform" />
                    <span>{getTreatmentLabel('hollywood-smile')}</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:text-teal-300 hover:bg-teal-500/10 rounded-xl transition-all border border-transparent hover:border-teal-500/20 text-left group"
                    href="/treatments/dental-veneers"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform" />
                    <span>{getTreatmentLabel('dental-veneers')}</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:text-teal-300 hover:bg-teal-500/10 rounded-xl transition-all border border-transparent hover:border-teal-500/20 text-left group"
                    href="/treatments/dental-crowns"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform" />
                    <span>{getTreatmentLabel('dental-crowns')}</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:text-teal-300 hover:bg-teal-500/10 rounded-xl transition-all border border-transparent hover:border-teal-500/20 text-left group"
                    href="/treatments/dental-implants"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform" />
                    <span>{getTreatmentLabel('dental-implants')}</span>
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:text-teal-300 hover:bg-teal-500/10 rounded-xl transition-all border border-transparent hover:border-teal-500/20 text-left group"
                    href="/treatments/root-canal"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform" />
                    <span>{getTreatmentLabel('root-canal')}</span>
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
            <span>{t('navPricing')}</span>
          </a>

          <a
            className={`transition-colors py-2 whitespace-nowrap shrink-0 ${
              isTransparent ? 'text-white/90 hover:text-teal-300' : 'text-slate-800 hover:text-[#211164]'
            }`}
            href="#clinical-cases"
          >
            {t('navCases')}
          </a>

          <a
            className={`transition-colors py-2 whitespace-nowrap shrink-0 ${
              isTransparent ? 'text-white/90 hover:text-teal-300' : 'text-slate-800 hover:text-[#211164]'
            }`}
            href="#patient-journey"
          >
            {t('navSchedule')}
          </a>

          <a
            className={`transition-colors py-2 whitespace-nowrap shrink-0 ${
              isTransparent ? 'text-white/90 hover:text-teal-300' : 'text-slate-800 hover:text-[#211164]'
            }`}
            href="#doctors-section"
          >
            {t('navDoctors')}
          </a>

          <Link
            className={`transition-colors py-2 whitespace-nowrap shrink-0 ${
              isTransparent ? 'text-white/90 hover:text-teal-300' : 'text-slate-800 hover:text-[#211164]'
            }`}
            href="/faq"
          >
            {t('navFaq')}
          </Link>

          <Link
            className={`transition-colors py-2 whitespace-nowrap shrink-0 ${
              isTransparent ? 'text-white/90 hover:text-teal-300' : 'text-slate-800 hover:text-[#211164]'
            }`}
            href="/about"
          >
            {t('navAbout')}
          </Link>

          <Link
            className={`transition-colors py-2 whitespace-nowrap shrink-0 ${
              isTransparent ? 'text-white/90 hover:text-teal-300' : 'text-slate-800 hover:text-[#211164]'
            }`}
            href="/contact"
          >
            {t('navContact')}
          </Link>
        </nav>

        {/* Header Action Buttons & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Elegant Luxury Language Capsule */}
          <div
            ref={langRef}
            className="relative"
            onMouseEnter={handleLangEnter}
            onMouseLeave={handleLangLeave}
          >
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full border text-xs font-bold transition-all shadow-xs ${
                isTransparent
                  ? 'bg-white/10 hover:bg-white/20 border-white/25 text-white backdrop-blur-md hover:border-white/40'
                  : 'bg-white/90 hover:bg-white border-slate-200/90 hover:border-sky-400 text-slate-800 hover:shadow-sky-500/10'
              }`}
              aria-label="Select Language"
              aria-expanded={langOpen}
            >
              <span className="w-5 h-5 rounded-full bg-slate-100/90 dark:bg-white/10 flex items-center justify-center text-xs shadow-xs shrink-0 leading-none">
                {activeLang.flag}
              </span>
              <span className={`text-[11px] font-extrabold tracking-wider px-1.5 py-0.5 rounded ${
                isTransparent ? 'bg-white/15 text-white' : 'bg-sky-50 text-sky-700'
              }`}>
                {activeLang.label}
              </span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                  langOpen ? 'rotate-180' : ''
                } ${isTransparent ? 'text-white/80' : 'text-slate-500'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-48 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/90 dark:border-white/15 rounded-2xl shadow-[0_20px_45px_-10px_rgba(15,23,42,0.18)] p-1.5 animate-in fade-in zoom-in-95 duration-150 z-50"
                onMouseEnter={handleLangEnter}
                onMouseLeave={handleLangLeave}
              >
                <div className="flex items-center gap-1.5 px-3 py-1.5 mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-white/10">
                  <svg className="w-3 h-3 text-sky-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span>Select Language</span>
                </div>
                <div className="flex flex-col space-y-1">
                  {LANGUAGES.map((lang) => {
                    const isSelected = currentLocale === lang.code;
                    return (
                      <Link
                        key={lang.code}
                        href={pathname}
                        locale={lang.code}
                        onClick={() => {
                          setLangOpen(false);
                          try {
                            localStorage.setItem('dentaktif_lang', lang.code);
                          } catch (e) {}
                        }}
                        className={`flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs transition-all ${
                          isSelected
                            ? 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-bold border border-sky-200/60 dark:border-sky-800/60'
                            : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/10'
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-xs shadow-xs shrink-0 leading-none">
                            {lang.flag}
                          </span>
                          <span className="font-semibold">{lang.title}</span>
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                            isSelected ? 'bg-sky-100 dark:bg-sky-900/80 text-sky-800 dark:text-sky-200' : 'bg-slate-100 dark:bg-white/10 text-slate-500'
                          }`}>
                            {lang.label}
                          </span>
                          {isSelected && (
                            <svg className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </Link>
                    );
                  })}
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
            <span className="whitespace-nowrap">{t('ctaQuote')}</span>
          </a>

          {/* Compact icon button on mobile screens */}
          <a
            className={`sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl shadow-md active:scale-95 text-xs font-bold ${
              isTransparent
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-[#0d072b]'
                : 'bg-gradient-to-r from-[#211164] to-[#006972] text-white'
            }`}
            href="#consultation-wizard"
            title={t('ctaQuote')}
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
                <span>{t('navTreatments')}</span>
                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${treatmentsOpen ? 'rotate-90' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {treatmentsOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50/70 rounded-xl my-1 border border-slate-100">
                  <Link
                    href="/treatments/aesthetic-dentistry"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium"
                  >
                    {getTreatmentLabel('aesthetic-dentistry')}
                  </Link>
                  <Link
                    href="/treatments/hollywood-smile"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium"
                  >
                    {getTreatmentLabel('hollywood-smile')}
                  </Link>
                  <Link
                    href="/treatments/dental-veneers"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium"
                  >
                    {getTreatmentLabel('dental-veneers')}
                  </Link>
                  <Link
                    href="/treatments/dental-crowns"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium"
                  >
                    {getTreatmentLabel('dental-crowns')}
                  </Link>
                  <Link
                    href="/treatments/dental-implants"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium"
                  >
                    {getTreatmentLabel('dental-implants')}
                  </Link>
                  <Link
                    href="/treatments/root-canal"
                    onClick={() => { setMobileMenuOpen(false); setTreatmentsOpen(false); }}
                    className="block py-1.5 text-xs text-slate-700 hover:text-primary font-medium"
                  >
                    {getTreatmentLabel('root-canal')}
                  </Link>
                </div>
              )}
            </div>

            <a
              href="#cost-calculator-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>{t('navPricing')}</span>
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#clinical-cases"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>{t('navCases')}</span>
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#patient-journey"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>{t('navSchedule')}</span>
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#doctors-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>{t('navDoctors')}</span>
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>{t('navFaq')}</span>
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>{t('navAbout')}</span>
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <span>{t('navContact')}</span>
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="#consultation-wizard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#211164] to-[#006972] text-white text-xs font-bold uppercase tracking-wider text-center shadow-md flex items-center justify-center"
            >
              {t('ctaQuote')}
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-slate-800 text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center"
            >
              {t('navContact')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
