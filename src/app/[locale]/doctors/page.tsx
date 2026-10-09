'use client';

import React from 'react';
import { Link } from '@/navigation';
import { getDoctorsList } from '@/data/doctorsData';

export default function DoctorsOverviewPage() {
  const doctors = getDoctorsList();

  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen pb-24">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-white via-[#F0F4F7]/60 to-[#FAFBFC] border-b border-slate-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Permanent In-House Medical Faculty</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-mono">Levent Hospital Suites</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b0d52] tracking-tight">
            Meet Our Medical Directors &amp; Specialists
          </h1>

          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our specialized surgical and cosmetic dental faculty brings 18+ years of clinical excellence, German CAD/CAM precision, and personalized international patient care.
          </p>
        </div>
      </section>

      {/* 2. Doctors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-teal-300 font-bold block">
                      {doctor.experience}
                    </span>
                    <h3 className="font-headline text-lg font-bold text-white leading-tight">
                      {doctor.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-xs font-bold text-[#006699]">
                    {doctor.title}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {doctor.bio}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-700 font-medium">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      Specializations:
                    </span>
                    {doctor.specializations.slice(0, 2).map((sp, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                        <span className="line-clamp-1">{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/doctors/${doctor.id}`}
                  className="w-full py-3 rounded-xl bg-[#211164] hover:bg-[#006699] text-white text-xs font-bold uppercase tracking-wider text-center transition-colors block"
                >
                  View Profile &amp; Credentials →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
