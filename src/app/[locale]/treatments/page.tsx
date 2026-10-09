'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';
import { getTreatmentsList, getTreatmentsData } from '@/data/treatmentsData';

export default function TreatmentsOverviewPage() {
  const locale = useLocale();
  const treatmentsData = getTreatmentsData(locale);
  const allTreatments = getTreatmentsList(locale);

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = treatmentsData.filterTabs || [
    { id: 'all', label: 'All 6 Treatments' },
    { id: 'aesthetic', label: '✨ Aesthetic & Smile' },
    { id: 'prosthetics', label: '👑 Veneers & Crowns' },
    { id: 'surgery-implants', label: '⚙️ Implants' },
    { id: 'endodontics', label: '🔬 Root Canal' },
  ];

  const filteredTreatments = activeCategory === 'all'
    ? allTreatments
    : allTreatments.filter((t: any) => t.category === activeCategory);

  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen pb-24">
      {/* 1. Page Header & Prestige Badge */}
      <section className="relative bg-gradient-to-b from-white via-[#F0F4F7]/60 to-[#FAFBFC] border-b border-slate-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold shadow-xs">
            <span className="material-symbols-outlined text-[16px] text-teal-600">verified</span>
            <span>{treatmentsData.pageHeader.badge}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-mono">Cert: 2026034015610080000425805</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b0d52] tracking-tight max-w-4xl mx-auto">
            {treatmentsData.pageHeader.title}
          </h1>

          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {treatmentsData.pageHeader.desc}
          </p>

          {/* Quick Breadcrumb */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-primary transition-colors">
              {treatmentsData.ui.breadcrumbHome}
            </Link>
            <span>/</span>
            <span className="text-[#1b0d52] font-bold">{treatmentsData.ui.breadcrumbTreatments}</span>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat: { id: string; label: string }) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-[#1b0d52] text-white border-[#1b0d52] shadow-md shadow-[#1b0d52]/20 scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Treatments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment: any) => (
            <div
              key={treatment.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Header with Warranty Overlay */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Warranty Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold text-amber-700 shadow-md border border-amber-200/80 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">shield</span>
                    <span>{treatment.warranty}</span>
                  </div>

                  {/* Icon & Category */}
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-2xl mr-2">{treatment.icon}</span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-300">
                      {treatment.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3.5">
                  <h3 className="font-headline text-xl font-extrabold text-[#1b0d52] group-hover:text-primary transition-colors leading-snug">
                    {treatment.name}
                  </h3>

                  <p className="text-xs font-bold text-secondary">
                    {treatment.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {treatment.description}
                  </p>

                  {/* Duration & Highlights */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-sm text-teal-600">schedule</span>
                      <span>{treatment.duration}</span>
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      VIP Hotel Included
                    </span>
                  </div>

                  {treatment.highlights && treatment.highlights.length > 0 && (
                    <ul className="pt-2 space-y-1.5 text-[11px] text-slate-600">
                      {treatment.highlights.slice(0, 3).map((hl: string, i: number) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-xs text-emerald-600 mt-0.5">check_circle</span>
                          <span className="leading-tight">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-7 pt-0 flex items-center gap-3">
                <Link
                  href={`/treatments/${treatment.id}`}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#211164] to-[#006972] text-white text-xs font-extrabold uppercase tracking-wider text-center shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-1.5 group-hover:shadow-lg"
                >
                  <span>{treatmentsData.ui.viewDetails}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-20">
        <div className="bg-gradient-to-r from-[#1b0d52] via-[#281570] to-[#006972] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-300">
              {treatmentsData.ui.vipBadge}
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-black text-white">
              {treatmentsData.ui.bottomCtaTitle}
            </h2>
            <p className="text-xs sm:text-sm text-teal-100 leading-relaxed">
              {treatmentsData.ui.bottomCtaDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full md:w-auto">
            <Link
              href="/#consultation-wizard"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#1b0d52] font-black text-xs uppercase tracking-wider text-center shadow-lg hover:bg-slate-100 transition-all"
            >
              {treatmentsData.ui.bottomCtaBtn}
            </Link>
            <a
              href="https://wa.me/902129008080"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>WhatsApp Medical Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
