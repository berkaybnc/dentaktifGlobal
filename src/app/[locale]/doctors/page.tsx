'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';
import { getDoctorsList } from '@/data/doctorsData';
import { getDoctorsOverviewUi } from '@/data/doctorsI18n';

export default function DoctorsOverviewPage() {
  const locale = useLocale();
  const ui = getDoctorsOverviewUi(locale);
  const doctors = getDoctorsList(locale);

  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen pb-24">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#1b0d52] via-[#211164] to-[#120733] text-white py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#2BA598_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-teal-400/30 text-teal-200 text-xs font-bold font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{ui.badge}</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {ui.title}
          </h1>

          <p className="font-sans text-sm sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {ui.description}
          </p>

          {/* Quick Credential Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-teal-100">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-teal-400">verified</span>
              {ui.credentialSurgeons}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-teal-400">precision_manufacturing</span>
              {ui.credentialTech}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-teal-400">workspace_premium</span>
              {ui.credentialSmiles}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Doctors Grid (4 Column Prestige Faculty With Deep Clinical Details) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {doctors.map((doctor) => {
            const primaryEducation = doctor.education[0];
            return (
              <div
                key={doctor.id}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Doctor Portrait Container */}
                  <div className="relative h-84 w-full overflow-hidden bg-slate-950">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Standing and Cases Badge */}
                    <div className="absolute top-3.5 right-3.5 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20 text-white text-[10px] font-mono font-bold flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{doctor.treatedCases}</span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-3.5 left-4 right-4 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-teal-300 font-extrabold block">
                        {doctor.experience}
                      </span>
                      <h3 className="font-headline text-lg sm:text-xl font-black text-white leading-tight">
                        {doctor.name}
                      </h3>
                      <p className="text-[11px] text-slate-300 font-medium line-clamp-1 mt-0.5">
                        {doctor.academicTitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3.5">
                    {/* Education Pill */}
                    {primaryEducation && (
                      <div className="p-2.5 rounded-xl bg-teal-50/70 border border-teal-100 flex items-center gap-2 text-[11px]">
                        <span className="material-symbols-outlined text-teal-700 text-sm shrink-0">school</span>
                        <div className="min-w-0">
                          <span className="font-bold text-[#1b0d52] block truncate">
                            {primaryEducation.institution}
                          </span>
                          <span className="text-[10px] text-teal-800 block">
                            {primaryEducation.degree} • {primaryEducation.year}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Narrative Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {doctor.bio}
                    </p>

                    {/* 3 Core Clinical Procedures */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700 font-medium">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#006972] font-bold block">
                        {ui.clinicalFocus}
                      </span>
                      {doctor.specializations.slice(0, 3).map((sp, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                          <span className="text-[11px] leading-snug line-clamp-1 text-slate-700">
                            {sp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-5 pt-0">
                  <Link
                    href={`/doctors/${doctor.id}`}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#211164] to-[#006972] hover:opacity-95 text-white text-xs font-black uppercase tracking-wider text-center transition-all block shadow-sm"
                  >
                    {ui.fullBioBtn}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Clinical Guarantee & Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#006972] font-bold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              {ui.bannerBadge}
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-black text-[#1b0d52]">
              {ui.bannerTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {ui.bannerDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/#consultation-wizard"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-gradient-to-r from-[#211164] to-[#006972] text-white font-extrabold text-xs uppercase tracking-wider text-center shadow-md hover:opacity-95 transition-all"
            >
              {ui.bannerBtnPlan}
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider text-center transition-colors"
            >
              {ui.bannerBtnContact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
