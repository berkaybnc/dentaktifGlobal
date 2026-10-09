'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';
import { getTreatmentsData } from '@/data/treatmentsData';

// Top 3 most requested flagship treatments configuration
const TOP_TREATMENTS_CONFIG = [
  {
    id: 'hollywood-smile',
    icon: '💎',
    badgeText: '✨ Most Requested • 5-Day Stay',
    gradient: 'from-[#211164] to-[#006972]',
    // Guaranteed high-resolution photography strictly curated for Hollywood Smile & E-Max veneers
    images: [
      '/images/cases/hollywood-after.jpg', // E-Max radiant clinical smile finish
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80', // Clinical operatory & shade matching
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80', // In-house precision ceramic laboratory
    ],
  },
  {
    id: 'dental-implants',
    icon: '⚙️',
    badgeText: '🏆 Swiss Straumann® • Lifetime Guarantee',
    gradient: 'from-[#006972] to-[#1e3a8a]',
    // Guaranteed high-resolution photography strictly curated for Dental Implants & All-on-4/6 surgical protocols
    images: [
      '/images/cases/allon6-after.jpg', // Full arch restored implant smile
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80', // 3D Guided stent surgical navigation
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80', // Precision titanium-zirconium implant bridge
    ],
  },
  {
    id: 'dental-veneers',
    icon: '👑',
    badgeText: '🌟 1200+ MPa Diamond Zirconia',
    gradient: 'from-[#1e3a8a] to-[#211164]',
    // Guaranteed high-resolution photography strictly curated for Dental Zirconium Veneers & robotic CAD/CAM milling
    images: [
      '/images/cases/zirconia-after.jpg', // Pristine aesthetic zirconia smile
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80', // 5-Axis robotic CAD/CAM milling of Katana Zirconia
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80', // Hand-glazed multi-layer natural finish
    ],
  },
];

const LOCALIZED_UI = {
  en: {
    sectionBadge: 'Specialized Treatments • Top 3 Patient Choices',
    sectionTitle: 'Our Most Preferred Dental Treatments',
    sectionDesc: 'Selected by over 85% of international patients visiting our Istanbul hospital for aesthetic smile makeovers and precision implant restorations.',
    stayLabel: 'Stay Duration:',
    vipHotel: 'VIP 5★ Hotel Included',
    viewDetails: 'View Full Procedure & 3D Plan →',
    contactUs: 'Contact Us',
    viewAllButton: 'Compare All 6 Treatment Options →',
    loadingText: 'Loading Treatment Data...',
    tab1Label: '✨ 1. Overview & Results',
    tab2Label: '📋 2. 3-Step Protocol',
    tab3Label: '🔬 3. Materials & FAQs',
    specMaterial: 'Material Standard',
    specAnesthesia: 'Comfort & Anesthesia',
    certifiedHighlights: 'Certified Clinical Advantages',
    frequentlyAsked: 'Frequently Asked Questions',
  },
  de: {
    sectionBadge: 'Spezialisierte Behandlungen • Top 3 Patientenwahl',
    sectionTitle: 'Unsere meistgewählten Zahnbehandlungen',
    sectionDesc: 'Ausgewählt von über 85 % der internationalen Patienten, die unser Krankenhaus in Istanbul für Lächeln-Makeovers und Präzisionsimplantate besuchen.',
    stayLabel: 'Aufenthaltsdauer:',
    vipHotel: 'VIP 5★ Hotel Inklusive',
    viewDetails: 'Vollständiges Verfahren & 3D-Plan ansehen →',
    contactUs: 'Kontaktieren Sie uns',
    viewAllButton: 'Alle 6 Behandlungsoptionen vergleichen →',
    loadingText: 'Behandlungsdaten werden geladen...',
    tab1Label: '✨ 1. Übersicht & Ergebnisse',
    tab2Label: '📋 2. 3-Schritte-Protokoll',
    tab3Label: '🔬 3. Materialien & FAQ',
    specMaterial: 'Materialstandard',
    specAnesthesia: 'Komfort & Anästhesie',
    certifiedHighlights: 'Zertifizierte klinische Vorteile',
    frequentlyAsked: 'Häufig gestellte Fragen',
  },
  fr: {
    sectionBadge: 'Traitements Spécialisés • Top 3 Choix des Patients',
    sectionTitle: 'Nos Traitements Dentaires les Plus Demandés',
    sectionDesc: 'Choisis par plus de 85% des patients internationaux venant dans notre hôpital d\'Istanbul pour la réhabilitation du sourire et les implants.',
    stayLabel: 'Durée du séjour:',
    vipHotel: 'Hôtel 5★ VIP Inclus',
    viewDetails: 'Voir la procédure complète & Plan 3D →',
    contactUs: 'Contactez-nous',
    viewAllButton: 'Comparer les 6 options de traitement →',
    loadingText: 'Chargement des données du traitement...',
    tab1Label: '✨ 1. Aperçu & Résultats',
    tab2Label: '📋 2. Protocole en 3 Étapes',
    tab3Label: '🔬 3. Matériaux & FAQ',
    specMaterial: 'Standard des Matériaux',
    specAnesthesia: 'Confort & Anesthésie',
    certifiedHighlights: 'Avantages Cliniques Certifiés',
    frequentlyAsked: 'Questions Fréquentes',
  },
  ru: {
    sectionBadge: 'Специализированное лечение • Топ-3 выбора пациентов',
    sectionTitle: 'Наши самые популярные направления лечения',
    sectionDesc: 'Выбирают более 85% международных пациентов нашей больницы в Стамбуле для эстетического преображения улыбки и швейцарской имплантации.',
    stayLabel: 'Срок пребывания:',
    vipHotel: '5★ VIP-отель включен',
    viewDetails: 'Посмотреть полный протокол и 3D-план →',
    contactUs: 'Связаться с нами',
    viewAllButton: 'Сравнить все 6 направлений лечения →',
    loadingText: 'Загрузка данных лечения...',
    tab1Label: '✨ 1. Обзор и результаты',
    tab2Label: '📋 2. Протокол из 3 шагов',
    tab3Label: '🔬 3. Материалы и вопросы',
    specMaterial: 'Стандарт материалов',
    specAnesthesia: 'Комфорт и анестезия',
    certifiedHighlights: 'Сертифицированные клинические преимущества',
    frequentlyAsked: 'Часто задаваемые вопросы',
  },
};

export default function TreatmentsSection() {
  const locale = useLocale();
  const [activeTabId, setActiveTabId] = useState<string>('hollywood-smile');
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const treatmentsData = getTreatmentsData(locale);
  const itemsDict = treatmentsData.items || {};
  const ui = LOCALIZED_UI[locale as keyof typeof LOCALIZED_UI] || LOCALIZED_UI.en;

  // Active treatment object strictly pulled from treatmentsData
  const activeTreatment = itemsDict[activeTabId] || itemsDict['hollywood-smile'];
  const activeConfig = TOP_TREATMENTS_CONFIG.find((t) => t.id === activeTabId) || TOP_TREATMENTS_CONFIG[0];
  const treatmentImages = activeConfig.images;

  // Reset section tab on treatment change
  const handleTreatmentChange = (id: string) => {
    if (id === activeTabId) return;
    setIsLoading(true);
    setActiveTabId(id);
    setActiveSectionIndex(0);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  };

  const sectionTabs = [ui.tab1Label, ui.tab2Label, ui.tab3Label];

  return (
    <section id="treatments-section" className="w-full bg-[#FAFBFC] py-16 sm:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold shadow-xs">
            <span className="material-symbols-outlined text-[16px] text-teal-600">verified</span>
            <span>{ui.sectionBadge}</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b0d52] tracking-tight">
            {ui.sectionTitle}
          </h2>

          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
            {ui.sectionDesc}
          </p>
        </div>

        {/* Main Tabs + Details View */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          {/* 1. Left Sidebar Navigation Tabs */}
          <div className="lg:w-80 shrink-0 flex flex-col gap-2.5 p-2 sm:p-3 rounded-2xl bg-slate-100/90 border border-slate-200 backdrop-blur-md">
            <div className="px-3 pt-1 pb-2 hidden lg:flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold border-b border-slate-200/60">
              <span>Flagship Departments</span>
              <span className="text-teal-700">Top 3</span>
            </div>

            {TOP_TREATMENTS_CONFIG.map((tab) => {
              const item = itemsDict[tab.id];
              const isSelected = activeTabId === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTreatmentChange(tab.id)}
                  className={`
                    relative group flex items-center justify-between w-full px-4 py-3.5 sm:py-4 rounded-xl text-left transition-all duration-200 select-none
                    ${
                      isSelected
                        ? 'bg-gradient-to-r ' + tab.gradient + ' text-white shadow-lg shadow-[#211164]/20 scale-[1.01]'
                        : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-[#1b0d52] border border-slate-200/60 shadow-xs'
                    }
                  `}
                >
                  {/* Left Icon & Treatment Name */}
                  <div className="flex items-center gap-3.5 z-10 min-w-0 pr-3">
                    <span className="text-2xl shrink-0 p-1 rounded-lg bg-white/10 backdrop-blur-xs flex items-center justify-center">
                      {tab.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="font-headline font-extrabold text-sm sm:text-base tracking-tight truncate leading-tight">
                        {item?.name || tab.id}
                      </div>
                      <div
                        className={`text-[11px] font-medium tracking-tight mt-0.5 truncate ${
                          isSelected ? 'text-teal-200 font-bold' : 'text-slate-500'
                        }`}
                      >
                        {tab.badgeText}
                      </div>
                    </div>
                  </div>

                  {/* Right Active Indicator Dot */}
                  <div className="shrink-0 flex items-center justify-center">
                    {isSelected ? (
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white shadow-xs" />
                      </span>
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-slate-400 transition-colors" />
                    )}
                  </div>
                </button>
              );
            })}

            {/* Compare All 6 Treatments Button in Sidebar */}
            <div className="mt-auto pt-3 border-t border-slate-200/80 space-y-2">
              <Link
                href="/treatments"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#211164] via-[#281570] to-[#006972] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="material-symbols-outlined text-base shrink-0">apps</span>
                  <span className="truncate">{ui.viewAllButton.replace('→', '').trim()}</span>
                </div>
                <span className="material-symbols-outlined text-base shrink-0 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <div className="px-1 text-[11px] text-slate-500 leading-tight">
                Explore Aesthetic Dentistry, Dental Crowns &amp; Root Canal
              </div>
            </div>
          </div>

          {/* 2. Right Interactive Content Box with ONE Unified Segmented Tab Bar */}
          <div className="flex-1 relative rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between min-h-[560px]">
            {/* Loading Micro-Overlay */}
            {isLoading && (
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-white/85 backdrop-blur-xs transition-opacity duration-200">
                <svg
                  className="animate-spin h-9 w-9 text-[#006972] mb-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span className="text-xs font-mono font-bold text-slate-600 tracking-wide">
                  {ui.loadingText}
                </span>
              </div>
            )}

            {/* SINGLE, CLEAR & INTUITIVE NAVIGATION BAR (Segmented Control Tabs) */}
            <div className="p-4 sm:p-5 bg-slate-50/90 border-b border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-slate-200/70 rounded-2xl border border-slate-300/60">
                {sectionTabs.map((tabLabel, idx) => {
                  const isActive = activeSectionIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSectionIndex(idx)}
                      className={`
                        w-full py-2.5 px-3 rounded-xl text-xs sm:text-[13px] font-extrabold transition-all duration-200 text-center select-none
                        ${
                          isActive
                            ? 'bg-[#1b0d52] text-white shadow-md shadow-[#1b0d52]/20 scale-[1.01]'
                            : 'text-slate-700 hover:text-[#1b0d52] hover:bg-white/60'
                        }
                      `}
                    >
                      {tabLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section Content Area - 100% Focused on Selected Treatment */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              {/* ------------------------------------------------------------------------- */}
              {/* TAB 1: OVERVIEW & RESULTS */}
              {/* ------------------------------------------------------------------------- */}
              {activeSectionIndex === 0 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Treatment Photo 1 with fallback protection */}
                    <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 aspect-4/3 lg:aspect-auto lg:h-[260px] group">
                      <img
                        src={treatmentImages[0]}
                        alt={activeTreatment.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                      {/* Top Badge: Department Name */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#1b0d52] shadow-md border border-slate-200">
                        {activeTreatment.name}
                      </div>

                      {/* Bottom Badge: Stay & Sessions */}
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[11px] font-mono font-bold text-teal-300 block">
                          ⏱️ Stay: {activeTreatment.stay}
                        </span>
                      </div>
                    </div>

                    {/* Overview Text Content */}
                    <div className="lg:col-span-7 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#006972]">
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        <span>{activeTreatment.badge || 'Certified Treatment Department'}</span>
                      </div>

                      <h3 className="font-headline text-xl sm:text-2xl font-black text-[#1b0d52] leading-tight">
                        {activeTreatment.name}
                      </h3>

                      <p className="text-xs sm:text-sm font-bold text-[#006972]">
                        {activeTreatment.tagline}
                      </p>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {activeTreatment.overview || activeTreatment.heroDesc}
                      </p>

                      {/* Warranty Pill */}
                      {activeTreatment.warranty && (
                        <div className="pt-2">
                          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-xl px-3 py-1.5 text-[11px] text-amber-900 font-bold">
                            <span className="material-symbols-outlined text-[16px] text-amber-600">verified</span>
                            <span>{activeTreatment.warranty}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Highlights Checklist for this Treatment */}
                  <div className="bg-[#FAFBFC] border border-slate-200/80 rounded-2xl p-4 sm:p-5">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#006972] mb-3 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base">check_circle</span>
                        <span>{ui.certifiedHighlights}</span>
                      </span>
                      <span className="text-slate-400 font-normal">Section 1 of 3</span>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                      {(activeTreatment.highlights || []).map((hl: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-teal-600 font-bold text-sm shrink-0">✓</span>
                          <span className="leading-snug">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* ------------------------------------------------------------------------- */}
              {/* TAB 2: 3-STEP CLINICAL PROCEDURE PROTOCOL */}
              {/* ------------------------------------------------------------------------- */}
              {activeSectionIndex === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Treatment Photo 2 with fallback */}
                    <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 aspect-4/3 lg:aspect-auto lg:h-[260px] group">
                      <img
                        src={treatmentImages[1]}
                        alt={`${activeTreatment.name} Clinical Protocol`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#1b0d52] shadow-md border border-slate-200">
                        {activeTreatment.name} • Protocol
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[11px] font-mono font-bold text-teal-300 block">
                          🏥 In-House Surgical &amp; Lab Suite
                        </span>
                      </div>
                    </div>

                    {/* 3 Step Protocol Cards */}
                    <div className="lg:col-span-7 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#006972]">
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        <span>3-Step Hospital Clinical Timeline</span>
                      </div>

                      <h3 className="font-headline text-xl sm:text-2xl font-black text-[#1b0d52] leading-tight">
                        Your Treatment Steps for {activeTreatment.name}
                      </h3>

                      <div className="space-y-2.5 pt-1">
                        {(activeTreatment.steps || []).map((stepItem: any, sIdx: number) => (
                          <div
                            key={sIdx}
                            className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                          >
                            <span className="font-mono font-black text-xs text-[#006972] bg-teal-100/70 border border-teal-200 px-2 py-0.5 rounded-md shrink-0">
                              {stepItem.step || `0${sIdx + 1}`}
                            </span>
                            <div>
                              <strong className="block text-xs font-bold text-[#1b0d52] leading-tight mb-0.5">
                                {stepItem.title}
                              </strong>
                              <p className="text-[11px] text-slate-600 leading-snug">
                                {stepItem.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Anesthesia and Comfort Row */}
                  <div className="bg-[#FAFBFC] border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-700">
                      <span className="material-symbols-outlined text-teal-600">medical_services</span>
                      <span>
                        <strong className="text-[#1b0d52]">{ui.specAnesthesia}:</strong>{' '}
                        {activeTreatment.anesthesia || 'Painless Computer-Controlled Anesthesia'}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 shrink-0">
                      <span className="material-symbols-outlined text-sm">hotel</span>
                      <span>{ui.vipHotel}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* ------------------------------------------------------------------------- */}
              {/* TAB 3: MATERIALS, TECHNOLOGY & CLINICAL FAQS */}
              {/* ------------------------------------------------------------------------- */}
              {activeSectionIndex === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Treatment Photo 3 with fallback */}
                    <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 aspect-4/3 lg:aspect-auto lg:h-[260px] group">
                      <img
                        src={treatmentImages[2]}
                        alt={`${activeTreatment.name} Material Standard`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#1b0d52] shadow-md border border-slate-200">
                        {activeTreatment.name} • Materials
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[11px] font-mono font-bold text-teal-300 block">
                          🔬 Certified Genuine Ingot / Implant Alloy
                        </span>
                      </div>
                    </div>

                    {/* Materials & FAQs Content */}
                    <div className="lg:col-span-7 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#006972]">
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                        <span>Materials &amp; Clinical Knowledge</span>
                      </div>

                      <h3 className="font-headline text-xl sm:text-2xl font-black text-[#1b0d52] leading-tight">
                        Certified Specifications for {activeTreatment.name}
                      </h3>

                      {/* Material Spec Card */}
                      <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200 text-xs text-teal-900">
                        <strong className="text-[#006972] block mb-0.5 font-extrabold">
                          {ui.specMaterial}:
                        </strong>
                        <span className="leading-relaxed font-medium">
                          {activeTreatment.material || 'Genuine European / Swiss Medical Standard'}
                        </span>
                      </div>

                      {/* FAQs specific only to this treatment */}
                      <div className="space-y-2 pt-1">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                          {ui.frequentlyAsked}:
                        </span>
                        {(activeTreatment.faq || []).map((faqItem: any, fIdx: number) => (
                          <div key={fIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
                            <strong className="text-[#1b0d52] block font-bold leading-tight">
                              Q: {faqItem.q}
                            </strong>
                            <p className="text-slate-600 text-[11px] leading-relaxed">
                              {faqItem.a}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quality Assurance Strip */}
                  <div className="bg-[#FAFBFC] border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-600 text-base">verified_user</span>
                      <span>Ministry of Health &amp; USHAŞ Certified Health Tourism Center</span>
                    </span>
                    <span className="font-mono text-[11px] text-slate-500 font-bold hidden sm:inline">
                      Official Manufacturer Barcode Provided
                    </span>
                  </div>
                </div>
              )}

              {/* Bottom Actions Bar - Clean and uncluttered with ZERO duplicate pagination */}
              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                <Link
                  href={`/treatments/${activeTabId}`}
                  className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-gradient-to-r from-[#211164] to-[#006972] text-white text-xs font-extrabold uppercase tracking-wider text-center shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>{ui.viewDetails}</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold uppercase tracking-wider transition-colors text-center shrink-0 shadow-2xs"
                >
                  {ui.contactUs}
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
