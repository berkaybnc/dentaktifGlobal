'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';
import { getTreatmentsList, getTreatmentsData } from '@/data/treatmentsData';

export default function TreatmentsSection() {
  const locale = useLocale();
  const treatmentsData = getTreatmentsData(locale);
  const allTreatments = getTreatmentsList(locale);

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = treatmentsData.filterTabs || [
    { id: 'all', label: 'All 12 Treatments' },
    { id: 'surgery-implants', label: '⚙️ Surgery & Implants' },
    { id: 'aesthetic-cosmetic', label: '✨ Aesthetic & Smile' },
    { id: 'prosthetics', label: '👑 Veneers & Crowns' },
    { id: 'general-care', label: '🔬 General & Endodontics' },
    { id: 'specialized', label: '🛡️ Specialized & Diagnostics' },
  ];

  const filteredTreatments = activeCategory === 'all'
    ? allTreatments
    : allTreatments.filter((t: any) => t.category === activeCategory);

  return (
    <section id="treatments-section" className="w-full bg-[#FAFBFC] py-16 sm:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold shadow-xs">
            <span className="material-symbols-outlined text-[16px] text-teal-600">verified</span>
            <span>{treatmentsData.pageHeader.badge}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-mono">12 Departments</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b0d52] tracking-tight">
            {treatmentsData.pageHeader.title}
          </h2>

          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
            {treatmentsData.pageHeader.desc}
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
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

        {/* 12 Treatments Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredTreatments.map((treatment: any) => (
            <div
              key={treatment.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Showcase with Warranty Overlay */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Warranty Tag */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold text-amber-700 shadow-md border border-amber-200/80 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">shield</span>
                    <span>{treatment.warranty}</span>
                  </div>

                  {/* Department Badge */}
                  <div className="absolute bottom-3 left-4 text-white flex items-center gap-2">
                    <span className="text-2xl">{treatment.icon}</span>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-300 block">
                        {treatment.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Treatment Content Details */}
                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="font-headline text-lg sm:text-xl font-extrabold text-[#1b0d52] group-hover:text-primary transition-colors leading-snug">
                    {treatment.name}
                  </h3>

                  <p className="text-xs font-bold text-[#006972] leading-snug">
                    {treatment.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {treatment.description}
                  </p>

                  {/* Stay Duration & VIP Protocol */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-sm text-teal-600">schedule</span>
                      <span>{treatment.duration}</span>
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      VIP Hotel Included
                    </span>
                  </div>

                  {/* Clinical Highlights Bullet Points */}
                  {treatment.highlights && treatment.highlights.length > 0 && (
                    <ul className="pt-2 space-y-1.5 text-[11px] text-slate-600">
                      {treatment.highlights.slice(0, 3).map((hl: string, i: number) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-xs text-emerald-600 mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span className="leading-tight line-clamp-1">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Action Buttons Link to Treatment Detail Page */}
              <div className="p-6 sm:p-7 pt-0 flex flex-col sm:flex-row items-center gap-2.5">
                <Link
                  href={`/treatments/${treatment.id}`}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#211164] to-[#006972] text-white text-xs font-extrabold uppercase tracking-wider text-center shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-1.5 group-hover:shadow-lg"
                >
                  <span>{treatmentsData.ui.viewDetails}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>

                <a
                  href={`https://wa.me/902129008080?text=Hello,%20I%20would%20like%20to%20consult%20about%20${encodeURIComponent(treatment.name)}%20at%20Dent%20Aktif.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-3.5 py-3 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold transition-colors flex items-center justify-center gap-1 shrink-0"
                  title="WhatsApp Consultation"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span className="sm:hidden">Consult</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Treatments Hub Link */}
        <div className="mt-12 text-center">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#1b0d52] font-black text-xs uppercase tracking-wider border border-slate-300 shadow-sm hover:bg-slate-50 hover:border-primary transition-all"
          >
            <span>View All 12 Departments Comprehensive Directory</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
