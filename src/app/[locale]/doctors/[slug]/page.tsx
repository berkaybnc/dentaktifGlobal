'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { Link } from '@/navigation';
import { getDoctorDetail, getDoctorsList } from '@/data/doctorsData';

export default function DoctorDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const doctor = getDoctorDetail(slug);

  if (!doctor) {
    notFound();
  }

  const otherDoctors = getDoctorsList().filter((d) => d.id !== doctor.id);

  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen pb-24">
      {/* 1. Breadcrumb Bar */}
      <section className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#doctors-section" className="hover:text-primary transition-colors">
            Medical Faculty
          </Link>
          <span>/</span>
          <span className="text-[#1b0d52] font-bold">{doctor.name}</span>
        </div>
      </section>

      {/* 2. Doctor Profile Hero */}
      <section className="relative bg-gradient-to-b from-white via-[#F0F4F7]/60 to-[#FAFBFC] border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Doctor Portrait & Quick Badges */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start space-y-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-900 w-full max-w-md">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-auto max-h-[460px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/40 shadow-lg flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                      Clinical Standing
                    </span>
                    <span className="font-extrabold text-[#1b0d52]">
                      {doctor.experience}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200">
                    {doctor.treatedCases}
                  </span>
                </div>
              </div>

              {/* Languages & Hospital Registry Tag */}
              <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 p-4 space-y-2.5 shadow-xs text-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">Faculty Hospital:</span>
                  <span className="font-bold text-slate-800">Dent Aktif • Levent Suites</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">Consultation Languages:</span>
                  <span className="font-bold text-[#006699]">{doctor.languages.join(' • ')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Regulatory Status:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                    MOH Registered
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Name, Department, Bio & Clinical Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#006699] bg-sky-50 px-3 py-1 rounded-full border border-sky-200 inline-block">
                  {doctor.department}
                </span>

                <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b0d52] tracking-tight">
                  {doctor.name}
                </h1>

                <p className="font-headline text-base sm:text-lg font-bold text-teal-800">
                  {doctor.title}
                </p>

                <p className="text-xs sm:text-sm text-slate-500 font-mono">
                  {doctor.licenseId}
                </p>
              </div>

              {/* Quote Callout */}
              <div className="p-5 rounded-2xl bg-[#1b0d52]/5 border-l-4 border-[#1b0d52] text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                “{doctor.quote}”
              </div>

              {/* Narrative Bio */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {doctor.extendedBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Action Consultation Links */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#211164] to-[#006972] text-white font-extrabold text-xs uppercase tracking-wider text-center shadow-md hover:opacity-95 transition-all"
                >
                  Request Consultation with {doctor.name.split(' ')[1]}
                </Link>

                <Link
                  href="/#consultation-wizard"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider text-center transition-colors"
                >
                  Upload X-Ray for Doctor Review
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Credentials, Education & Specializations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education & Academic History (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
            <h3 className="font-headline text-lg sm:text-xl font-bold text-[#1b0d52] border-b border-slate-100 pb-3">
              Academic Education &amp; Residencies
            </h3>

            <div className="space-y-4">
              {doctor.education.map((edu, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {edu.year.slice(2)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      {edu.institution} • {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Areas of Clinical Practice (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
            <h3 className="font-headline text-lg sm:text-xl font-bold text-[#1b0d52] border-b border-slate-100 pb-3">
              Core Areas of Clinical Practice
            </h3>

            <ul className="space-y-2.5">
              {doctor.specializations.map((spec, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                  <span className="leading-snug">{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Official Certifications & Faculty Memberships */}
        <div className="mt-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <h3 className="font-headline text-lg sm:text-xl font-bold text-[#1b0d52] border-b border-slate-100 pb-3">
            Accreditations &amp; Professional Memberships
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {doctor.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#FAFBFC] border border-slate-200/80 text-xs font-semibold text-slate-800 flex items-center gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Meet Other Doctors of the Faculty */}
      {otherDoctors.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
          <div className="border-t border-slate-200 pt-10">
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#1b0d52] mb-6">
              Other Faculty Specialists at Dent Aktif
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherDoctors.map((other) => (
                <div
                  key={other.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <img
                    src={other.image}
                    alt={other.name}
                    className="w-20 h-20 rounded-xl object-cover border border-slate-200 shrink-0"
                  />
                  <div className="space-y-1">
                    <h4 className="font-headline text-sm font-bold text-[#1b0d52]">
                      {other.name}
                    </h4>
                    <p className="text-xs text-slate-500">{other.title}</p>
                    <Link
                      href={`/doctors/${other.id}`}
                      className="text-xs font-bold text-primary hover:underline inline-block pt-1"
                    >
                      View Profile &amp; Bio →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
