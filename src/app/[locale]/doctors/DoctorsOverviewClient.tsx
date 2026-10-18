'use client';

import React from 'react';
import { Link } from '@/navigation';

interface DoctorsOverviewClientProps {
  ui: any;
  doctors: any[];
}

export default function DoctorsOverviewClient({
  ui,
  doctors,
}: DoctorsOverviewClientProps) {
  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen pb-24">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#1b0d52] via-[#211164] to-[#120733] text-white py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#2BA598_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {ui.title}
          </h1>

          <p className="font-sans text-sm sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            {ui.description}
          </p>
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
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F5F8FA]">
                    <img
                      src={doctor.image}
                      alt={`${doctor.name} - ${doctor.specialty} at Dent Aktif Global`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Department Tag Overlay */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-[11px] font-mono uppercase tracking-wider font-bold bg-[#211164]/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                        {doctor.specialty}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-300 font-bold bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-400/20">
                        {doctor.experience}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-700">
                        {doctor.academicTitle}
                      </span>
                      <h3 className="font-headline text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-[#211164] transition-colors">
                        {doctor.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {doctor.department} • {doctor.clinicLocation}
                      </p>
                    </div>

                    {/* Verified Ministry License Badges */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">{ui.licenseNo || 'Ministry License'}:</span>
                        <span className="font-mono font-bold text-slate-800">{doctor.licenseId}</span>
                      </div>
                      {primaryEducation && (
                        <div className="pt-1 border-t border-slate-200/60 truncate">
                          <span className="text-slate-400 block text-[10px]">{ui.education || 'Education'}:</span>
                          <span className="font-medium text-slate-700">{primaryEducation.institution}</span>
                        </div>
                      )}
                    </div>

                    {/* Bio quote snippet */}
                    <p className="text-xs text-slate-600 line-clamp-3 italic leading-relaxed">
                      "{doctor.quote}"
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/doctors/${doctor.id}`}
                    className="w-full py-3 rounded-xl bg-slate-900 group-hover:bg-[#211164] text-white text-xs font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>{ui.viewProfile || 'View Full Medical Profile'}</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20">
        <div className="bg-gradient-to-r from-[#211164] to-[#006972] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-300">
              {ui.consultationBadge || 'Online Medical Triage'}
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-black">
              {ui.consultationTitle || 'Direct Case Evaluation by Chief Oral Surgeons'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              {ui.consultationDesc || 'Upload your panoramic X-ray or smile photos to receive an itemized treatment proposal directly from our faculty within 4 to 12 hours.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/#consultation-wizard"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#211164] font-black text-xs uppercase tracking-wider shadow-md hover:bg-slate-100 transition-all text-center"
            >
              {ui.uploadXrayBtn || 'Upload X-Ray / Free Plan'}
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all text-center"
            >
              {ui.contactDesk || 'Contact Clinic Desk'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
