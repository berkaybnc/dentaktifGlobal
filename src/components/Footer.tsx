'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/navigation';
import SocialDock from './SocialDock';

const FOOTER_TREATMENTS: Record<string, Record<string, string>> = {
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
    ru: 'Зубные коронки',
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

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const getLabel = (key: string) => {
    return FOOTER_TREATMENTS[key]?.[locale] || FOOTER_TREATMENTS[key]?.['en'] || key;
  };

  const treatmentsCol1 = [
    { label: getLabel('aesthetic-dentistry'), href: '/treatments/aesthetic-dentistry' },
    { label: getLabel('hollywood-smile'), href: '/treatments/hollywood-smile' },
    { label: getLabel('dental-veneers'), href: '/treatments/dental-veneers' },
  ];

  const treatmentsCol2 = [
    { label: getLabel('dental-crowns'), href: '/treatments/dental-crowns' },
    { label: getLabel('dental-implants'), href: '/treatments/dental-implants' },
    { label: getLabel('root-canal'), href: '/treatments/root-canal' },
  ];

  return (
    <footer className="relative w-full bg-[#1b0d52] text-white overflow-hidden border-t-2 border-[#006972]/40">
      {/* Vector Dental Art Emblems (Distinct, High-Contrast & Neatly Contained Watermarks) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Left Tooth Crest Emblem (Clearly visible, centered vertically, safely contained) */}
        <div className="absolute left-2 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 text-teal-300/85 transition-all pointer-events-none">
          <svg
            className="h-28 sm:h-32 lg:h-36 w-auto drop-shadow-[0_0_20px_rgba(45,212,191,0.3)]"
            viewBox="0 0 140 140"
            fill="none"
            stroke="currentColor"
          >
            <defs>
              <linearGradient id="toothGlowLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.22" />
                <stop offset="60%" stopColor="#0d9488" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#0f766e" stopOpacity="0.03" />
              </linearGradient>
            </defs>

            {/* Subtle Geometric Orbital Accent Rings */}
            <circle cx="70" cy="70" r="58" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
            <circle cx="70" cy="70" r="50" strokeWidth="1" opacity="0.35" />

            {/* Anatomical Tooth Contour with Luminous Fill */}
            <path
              d="M 70 34
                 C 62 30, 52 28, 46 34
                 C 36 42, 36 58, 40 76
                 C 42 86, 44 98, 48 106
                 C 50 110, 55 109, 58 102
                 C 62 92, 66 78, 70 78
                 C 74 78, 78 92, 82 102
                 C 85 109, 90 110, 92 106
                 C 96 98, 98 86, 100 76
                 C 104 58, 104 42, 94 34
                 C 88 28, 78 30, 70 34 Z"
              fill="url(#toothGlowLeft)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Gentle Smile Accent */}
            <path
              d="M 52 54 Q 70 66 88 54"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Aesthetic Sparkle Accent */}
            <path
              d="M 88 38 L 89 41 L 92 42 L 89 43 L 88 46 L 87 43 L 84 42 L 87 41 Z"
              fill="currentColor"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Right Tooth Crest Emblem (Clearly visible, centered vertically, safely contained) */}
        <div className="absolute right-2 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 text-teal-300/85 transition-all pointer-events-none">
          <svg
            className="h-28 sm:h-32 lg:h-36 w-auto drop-shadow-[0_0_20px_rgba(45,212,191,0.3)]"
            viewBox="0 0 140 140"
            fill="none"
            stroke="currentColor"
          >
            <defs>
              <linearGradient id="toothGlowRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.22" />
                <stop offset="60%" stopColor="#0d9488" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#0f766e" stopOpacity="0.03" />
              </linearGradient>
            </defs>

            {/* Subtle Geometric Orbital Accent Rings */}
            <circle cx="70" cy="70" r="58" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
            <circle cx="70" cy="70" r="50" strokeWidth="1" opacity="0.35" />

            {/* Anatomical Tooth Contour with Luminous Fill */}
            <path
              d="M 70 34
                 C 62 30, 52 28, 46 34
                 C 36 42, 36 58, 40 76
                 C 42 86, 44 98, 48 106
                 C 50 110, 55 109, 58 102
                 C 62 92, 66 78, 70 78
                 C 74 78, 78 92, 82 102
                 C 85 109, 90 110, 92 106
                 C 96 98, 98 86, 100 76
                 C 104 58, 104 42, 94 34
                 C 88 28, 78 30, 70 34 Z"
              fill="url(#toothGlowRight)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Gentle Smile Accent */}
            <path
              d="M 52 54 Q 70 66 88 54"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Symmetrical Sparkle Accent */}
            <path
              d="M 52 38 L 53 41 L 56 42 L 53 43 L 52 46 L 51 43 L 48 42 L 51 41 Z"
              fill="currentColor"
              opacity="0.9"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-6">
        {/* Main Unified 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* 1. Brand Identity & Accreditations (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="inline-block group">
              <img
                src="/images/logo.webp"
                alt="DentAktif Global"
                className="h-9 sm:h-10 w-auto object-contain brightness-0 invert transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {t('about')}
            </p>

            {/* Official Accreditations Logos */}
            <div className="pt-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-md shrink-0">
                <img
                  src="/images/saglikBakanligi.webp"
                  alt="Republic of Turkey Ministry of Health"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="h-10 px-2 rounded-xl bg-white flex items-center justify-center shadow-md shrink-0">
                <img
                  src="/images/heart-of-health1-1logo.svg"
                  alt="HealthTürkiye"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 pl-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>{locale === 'ar' ? 'مرخص من وزارة الصحة' : 'Ministry Licensed'}</span>
              </div>
            </div>
          </div>

          {/* 2. Our Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-headline text-xs font-black uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BA598]" />
              {locale === 'ar' ? 'علاجاتنا' : locale === 'tr' ? 'Tedavilerimiz' : locale === 'de' ? 'Unsere Behandlungen' : locale === 'ru' ? 'Наши услуги' : locale === 'fr' ? 'Nos Traitements' : 'Our Treatments'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
              <ul className="space-y-1.5">
                {treatmentsCol1.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-teal-300 transition-colors block text-[11.5px]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-1.5">
                {treatmentsCol2.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-teal-300 transition-colors block text-[11.5px]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Direct Contact Details (Location, Phone, Email) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-headline text-xs font-black uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BA598]" />
              {locale === 'ar' ? 'اتصل بالمستشفى' : locale === 'tr' ? 'Klinik İletişim' : locale === 'de' ? 'Klinik-Kontakt' : locale === 'ru' ? 'Контакты клиники' : locale === 'fr' ? 'Contact Clinique' : 'Hospital Contact'}
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              {/* Address */}
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#2BA598] text-base shrink-0 mt-0.5">location_on</span>
                <div className="text-[11px] leading-snug">
                  <span className="font-bold text-white block">
                    {locale === 'ar' ? 'أجنحة دنت أكتيف الجراحية' : 'Dent Aktif Surgical Suites'}
                  </span>
                  {t('address')}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#2BA598] text-base shrink-0 mt-0.5">call</span>
                <div className="text-[11px] leading-snug">
                  <span className="font-bold text-white block">
                    {locale === 'ar' ? 'الخط الساخن وواتساب:' : 'Hotline & WhatsApp:'}
                  </span>
                  <a href="tel:+905521617377" className="text-[#2BA598] hover:text-white transition-colors underline font-semibold">
                    {t('phone')}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#2BA598] text-base shrink-0 mt-0.5">mail</span>
                <div className="text-[11px] leading-snug">
                  <span className="font-bold text-white block">
                    {locale === 'ar' ? 'الاستشارات السريرية:' : 'Clinical Advisory:'}
                  </span>
                  <a href="mailto:international@dentaktifglobal.com" className="text-[#2BA598] hover:text-white transition-colors underline">
                    {t('email')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Official Channels & Social Media */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="font-headline text-xs font-black uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BA598]" />
              {locale === 'ar' ? 'القنوات الرسمية' : locale === 'tr' ? 'Resmi Kanallar' : locale === 'de' ? 'Offizielle Kanäle' : locale === 'ru' ? 'Официальные каналы' : locale === 'fr' ? 'Canaux Officiels' : 'Official Channels'}
            </h4>
            <p className="text-[11px] text-slate-300">
              {locale === 'ar' ? 'تنسيق المرضى الدوليين:' : locale === 'tr' ? 'Uluslararası hasta koordinasyonu:' : locale === 'de' ? 'Internationaler Patientenservice:' : locale === 'ru' ? 'Международный отдел пациентов:' : locale === 'fr' ? 'Conciergerie internationale :' : 'International clinical concierge:'}
            </p>
            <div className="pt-0.5">
              <SocialDock />
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-5 mt-7 border-t border-white/10 text-center text-[10.5px] text-slate-400">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
