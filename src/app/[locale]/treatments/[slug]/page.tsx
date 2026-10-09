'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';
import { getTreatmentDetail, getTreatmentsData } from '@/data/treatmentsData';

const VALID_SLUGS = [
  'aesthetic-dentistry',
  'hollywood-smile',
  'dental-veneers',
  'dental-crowns',
  'dental-implants',
  'root-canal',
];

export default function TreatmentDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const locale = useLocale();

  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  const [toothCount, setToothCount] = useState<number>(10);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const data = getTreatmentDetail(slug, locale);
  const treatmentsData = getTreatmentsData(locale);
  const ui = data.ui;

  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen pb-24">
      {/* 1. Breadcrumb Bar */}
      <div className="border-b border-slate-200 bg-white py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-primary transition-colors">
            {ui.breadcrumbHome}
          </Link>
          <span>/</span>
          <Link href="/treatments" className="hover:text-primary transition-colors">
            {ui.breadcrumbTreatments}
          </Link>
          <span>/</span>
          <span className="text-[#1b0d52] font-extrabold">{data.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 space-y-14">
        {/* 2. Hero Section Banner with Interactive Estimator Box */}
        <section className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Clinical Title & Descriptions */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold">
                <span>{data.icon}</span>
                <span>{data.badge}</span>
                <span className="text-slate-300">•</span>
                <span className="text-secondary font-mono">Ministry Auth #4892</span>
              </div>

              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b0d52] tracking-tight leading-tight">
                {data.name}
              </h1>

              <p className="text-sm sm:text-base font-bold text-secondary">
                {data.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {data.heroDesc}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/#consultation-wizard"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#211164] to-[#006972] text-white text-xs font-black uppercase tracking-wider shadow-md hover:opacity-95 transition-all"
                >
                  {ui.quoteBtn}
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs transition-all text-center"
                >
                  Contact Clinic Desk
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Procedure Estimator Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1b0d52] via-[#241366] to-[#006972] text-white rounded-2xl p-6 sm:p-7 shadow-xl space-y-4">
              <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-300">
                    {ui.estimatorTitle}
                  </span>
                  <h3 className="font-headline text-base font-extrabold text-white">
                    {data.name}
                  </h3>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Teeth Count Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">{ui.teethCount}</span>
                  <span className="text-teal-300 text-sm font-extrabold">
                    {toothCount} {ui.teeth}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={toothCount}
                  onChange={(e) => setToothCount(Number(e.target.value))}
                  className="w-full accent-teal-400 cursor-pointer h-2 bg-white/20 rounded-lg appearance-none"
                />
              </div>

              {/* Inclusions List */}
              <div className="space-y-2.5 pt-2 text-xs border-t border-white/10">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-300">⏱️ {ui.stay}</span>
                  <strong className="text-white">{data.stay}</strong>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-300">🚘 {ui.vitoTransfer}</span>
                  <strong className="text-emerald-300">
                    {toothCount >= 6 ? ui.vitoIncluded : 'Partner Rate'}
                  </strong>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-300">🏨 {ui.hotelStay}</span>
                  <strong className="text-emerald-300">
                    {toothCount >= 10 ? ui.hotelIncluded : ui.hotelPartner}
                  </strong>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-300">🛡️ {ui.warranty}</span>
                  <strong className="text-amber-300 font-extrabold">{data.warranty}</strong>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/#consultation-wizard"
                  className="w-full py-3 rounded-xl bg-white text-[#1b0d52] font-black text-xs uppercase tracking-wider text-center block shadow-md hover:bg-slate-100 transition-all"
                >
                  Confirm Free Estimate & Diagnosis →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2.5 Clinical Operatory Photography Showcase */}
        <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
          <img
            src={data.image}
            alt={`${data.name} Clinical Operatory Suite at Dent Aktif`}
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end p-6 sm:p-10">
            <div className="text-white space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/25 backdrop-blur-md border border-teal-400/40 text-teal-300 text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Dent Aktif Hospital • Official Operatory Suite</span>
              </div>
              <h3 className="font-headline text-xl sm:text-3xl font-black text-white">
                {data.name} — Clinical Documentation & Surgical Suite
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Conducted under surgical magnification with genuine manufacturer warranty passports in Levent, Istanbul.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Clinical Overview & Key Highlights */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-7 sm:p-8 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-wider font-extrabold text-secondary">
              {ui.insightsBadge}
            </span>
            <h2 className="font-headline text-2xl font-black text-[#1b0d52]">
              {data.name} — {ui.whatIs}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {data.overview}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Anesthesia & Sedation</span>
                <span className="font-bold text-slate-900 mt-0.5 block">{data.anesthesia}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Certified Materials</span>
                <span className="font-bold text-slate-900 mt-0.5 block">{data.material}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-7 sm:p-8 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-wider font-extrabold text-secondary">
              Clinical Advantages
            </span>
            <h3 className="font-headline text-xl font-black text-[#1b0d52]">
              {ui.keyHighlights}
            </h3>

            {data.highlights && (
              <ul className="space-y-3 pt-1 text-xs text-slate-600">
                {data.highlights.map((hl: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-base text-emerald-600 shrink-0 mt-0.5">check_circle</span>
                    <span className="leading-relaxed font-medium">{hl}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* 4. 3-Step Journey in Istanbul */}
        {data.steps && data.steps.length > 0 && (
          <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-6">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-secondary">
                {ui.stepBadge}
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-black text-[#1b0d52]">
                {ui.stepTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {data.steps.map((st: { step: string; title: string; desc: string }, i: number) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-headline text-2xl font-black text-[#1b0d52]">
                    {st.step}
                  </div>
                  <h4 className="font-headline text-sm font-bold text-slate-900">
                    {st.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Dental Treatment Comparison Matrix */}
        {data.comparisonMatrix && (
          <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-6">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-secondary">
                {ui.matrixBadge}
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-black text-[#1b0d52]">
                {ui.matrixTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {ui.matrixDesc}
              </p>
            </div>

            <div className="overflow-x-auto pt-4">
              <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-[#1b0d52] text-white">
                  <tr>
                    <th className="p-3.5 font-bold">{data.matrixColumns?.procedure || 'Procedure'}</th>
                    <th className="p-3.5 font-bold">{data.matrixColumns?.strength || 'Strength'}</th>
                    <th className="p-3.5 font-bold">{data.matrixColumns?.stay || 'Stay in Istanbul'}</th>
                    <th className="p-3.5 font-bold">{data.matrixColumns?.warranty || 'Warranty'}</th>
                    <th className="p-3.5 font-bold">{data.matrixColumns?.translucency || 'Translucency'}</th>
                    <th className="p-3.5 font-bold">{data.matrixColumns?.prep || 'Tooth Prep'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {data.comparisonMatrix.map((row: any, i: number) => (
                    <tr
                      key={i}
                      className={row.name.toLowerCase().includes(data.name.toLowerCase()) ? 'bg-teal-50/70 font-bold' : 'hover:bg-slate-50'}
                    >
                      <td className="p-3.5 text-slate-900 font-bold">{row.name}</td>
                      <td className="p-3.5 text-slate-600">{row.strength}</td>
                      <td className="p-3.5 text-slate-600">{row.stay}</td>
                      <td className="p-3.5 text-amber-700 font-extrabold">{row.warranty}</td>
                      <td className="p-3.5 text-slate-600">{row.translucency}</td>
                      <td className="p-3.5 text-slate-600">{row.prep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 6. Procedure Specific FAQ */}
        {data.faq && data.faq.length > 0 && (
          <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 space-y-5">
            <h2 className="font-headline text-2xl font-black text-[#1b0d52] text-center">
              {ui.faqTitle}
            </h2>

            <div className="space-y-3 max-w-3xl mx-auto pt-2">
              {data.faq.map((item: { q: string; a: string }, i: number) => (
                <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 flex justify-between items-center hover:bg-slate-50"
                  >
                    <span>{item.q}</span>
                    <span className="material-symbols-outlined text-slate-400 text-lg">
                      {activeFaq === i ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  {activeFaq === i && (
                    <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Bottom CTA */}
        <section className="bg-gradient-to-r from-[#1b0d52] via-[#241366] to-[#006972] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h2 className="font-headline text-2xl sm:text-3xl font-black text-white">
            {ui.bottomCtaTitle}
          </h2>
          <p className="text-xs sm:text-sm text-teal-100 max-w-2xl mx-auto leading-relaxed">
            {ui.bottomCtaDesc}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/#consultation-wizard"
              className="px-6 py-3.5 rounded-xl bg-white text-[#1b0d52] font-black text-xs uppercase tracking-wider shadow-md hover:bg-slate-100 transition-all"
            >
              {ui.bottomCtaBtn}
            </Link>
            <Link
              href="/treatments"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              ← All Other Treatments
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
