'use client';

import React, { useState } from 'react';
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen pb-24 text-slate-800">
      {/* 1. Breadcrumb Bar */}
      <section className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link href="/" className="hover:text-[#006972] transition-colors">
            Ana Sayfa
          </Link>
          <span>/</span>
          <Link href="/doctors" className="hover:text-[#006972] transition-colors">
            Hekim Kadromuz
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
                  className="w-full h-auto max-h-[480px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

                {/* Experience & Cases Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                      Klinik Deneyim
                    </span>
                    <span className="font-extrabold text-[#1b0d52]">
                      {doctor.experience}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1.5 rounded-xl border border-teal-200">
                    {doctor.treatedCases}
                  </span>
                </div>
              </div>

              {/* Clinic Registry & Regulatory Tag Card */}
              <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 p-4 space-y-3 shadow-xs text-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">Görev Yeri:</span>
                  <span className="font-bold text-slate-800 text-right">{doctor.clinicLocation}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">Konsültasyon Dilleri:</span>
                  <span className="font-bold text-[#006699]">{doctor.languages.join(' • ')}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-medium">Meslek Ruhsatı:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 text-[11px]">
                    {doctor.licenseId}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-medium">Meslek Odası Sicili:</span>
                  <span className="font-semibold text-slate-700 text-[11px]">
                    {doctor.registrationNumber}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Name, Department, Quote & Narrative Bio */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#006699] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200 inline-block">
                  {doctor.department}
                </span>

                <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b0d52] tracking-tight">
                  {doctor.name}
                </h1>

                <p className="font-headline text-base sm:text-lg font-bold text-teal-800">
                  {doctor.title}
                </p>

                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {doctor.specialty}
                </p>
              </div>

              {/* Quote Callout */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#1b0d52]/5 border-l-4 border-[#1b0d52] text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                “{doctor.quote}”
              </div>

              {/* Detailed Narrative Bio */}
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {doctor.extendedBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Action Consultation Links */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#211164] to-[#006972] text-white font-extrabold text-xs uppercase tracking-wider text-center shadow-md hover:opacity-95 transition-all"
                >
                  {doctor.name} ile Randevu Planla
                </Link>

                <Link
                  href="/#consultation-wizard"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider text-center transition-colors"
                >
                  Röntgen / Tomografi Gönder
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Specialized Procedures & Clinical Methods (Detailed Procedure Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>Klinik Uzmanlık &amp; İleri Prosedürler</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-black text-[#1b0d52]">
            {doctor.name} Tarafından Uygulanan İleri Tedavi Yöntemleri
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            Hekimimizin uzmanlık alanına giren her prosedür, uluslararası protokoller, en güncel teknolojik donanım ve doku dostu malzemelerle bizzat gerçekleştirilmektedir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctor.specializedProcedures.map((proc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-[#211164]/10 text-[#211164] font-mono font-bold text-xs flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  {proc.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[10px] font-bold">
                      {proc.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-headline text-base font-bold text-[#1b0d52] group-hover:text-[#006972] transition-colors leading-snug">
                  {proc.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {proc.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] font-bold text-[#006972]">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span>Kişiye Özel Klinik Protokol</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Career Timeline & Clinical Philosophy Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Career Timeline (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#006972] font-bold block">
                Mesleki Geçmiş &amp; Kronoloji
              </span>
              <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#1b0d52] mt-1">
                Kariyer ve Klinik Deneyim Zaman Çizelgesi
              </h3>
            </div>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {doctor.careerTimeline.map((item, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-6 top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#211164]" />

                  <div className="bg-[#FAFBFC] rounded-2xl border border-slate-200/90 p-4 space-y-1.5">
                    <span className="text-[11px] font-mono font-bold text-[#006972] bg-teal-50 px-2 py-0.5 rounded inline-block">
                      {item.year}
                    </span>
                    <h4 className="font-headline text-sm font-bold text-slate-900">
                      {item.role}
                    </h4>
                    <p className="text-xs font-semibold text-slate-600">
                      {item.organization}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed pt-1">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Approach & Patient Care Standards (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#006972] font-bold block">
                Hasta Bakım Standartları
              </span>
              <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#1b0d52] mt-1">
                Klinik Yaklaşım ve Tedavi İlkeleri
              </h3>
            </div>

            <div className="space-y-3.5">
              {doctor.clinicalApproach.map((point, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100/80 flex items-start gap-3"
                >
                  <span className="material-symbols-outlined text-teal-700 text-lg shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#1b0d52] text-white space-y-2">
              <h5 className="font-headline text-xs font-bold uppercase tracking-wider text-teal-300">
                Uluslararası Hasta Garantisi
              </h5>
              <p className="text-xs text-slate-200 leading-relaxed">
                Tüm cerrahi ve protetik uygulamalarımızda sertifikalı, barkodlu ve uluslararası geçerliliğe sahip pasaport belgeli malzemeler kullanılmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Academic Degrees & Accreditations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education & Academic History (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
            <h3 className="font-headline text-lg sm:text-xl font-bold text-[#1b0d52] border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Akademik Eğitim &amp; Lisans Geçmişi</span>
              <span className="material-symbols-outlined text-slate-400">school</span>
            </h3>

            <div className="space-y-4">
              {doctor.education.map((edu, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {edu.year.slice(0, 4)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-semibold text-[#006972] mt-0.5">
                      {edu.institution} • {edu.year}
                    </p>
                    {edu.details && (
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accreditations & Scientific Memberships (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5 shadow-xs">
            <h3 className="font-headline text-lg sm:text-xl font-bold text-[#1b0d52] border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Sertifikalar &amp; Mesleki Dernek Üyelikleri</span>
              <span className="material-symbols-outlined text-slate-400">workspace_premium</span>
            </h3>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                  Bilimsel &amp; Mesleki Üyelikler:
                </span>
                <div className="flex flex-wrap gap-2">
                  {doctor.scientificMemberships.map((membership, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                    >
                      {membership}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                  Resmi Sertifikasyonlar:
                </span>
                <div className="space-y-2">
                  {doctor.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#FAFBFC] border border-slate-200/90 text-xs font-medium text-slate-700 flex items-center gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Doctor FAQ Section */}
      {doctor.faq && doctor.faq.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#006972] font-bold block">
                Merak Edilenler
              </span>
              <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#1b0d52] mt-1">
                {doctor.name} Hakkında Sıkça Sorulan Sorular
              </h3>
            </div>

            <div className="space-y-3">
              {doctor.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-100/50 transition-colors"
                  >
                    <span className="font-bold text-xs sm:text-sm text-slate-900">
                      {item.question}
                    </span>
                    <span className="material-symbols-outlined text-slate-500 text-lg shrink-0">
                      {openFaq === idx ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                    </span>
                  </button>

                  {openFaq === idx && (
                    <div className="p-4 sm:p-5 pt-0 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Meet Other Doctors of the Faculty */}
      {otherDoctors.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
          <div className="border-t border-slate-200 pt-10">
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#1b0d52] mb-6">
              Dentaktif’in Diğer Uzman Hekimleri
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherDoctors.map((other) => (
                <div
                  key={other.id}
                  className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={other.image}
                      alt={other.name}
                      className="w-20 h-20 rounded-2xl object-cover object-top border border-slate-200 shrink-0"
                    />
                    <div className="space-y-1 min-w-0">
                      <h4 className="font-headline text-sm font-bold text-[#1b0d52] truncate">
                        {other.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium line-clamp-1">{other.academicTitle}</p>
                      <span className="text-[10px] font-mono text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 inline-block">
                        {other.treatedCases}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100">
                    <Link
                      href={`/doctors/${other.id}`}
                      className="text-xs font-bold text-[#006972] hover:text-[#1b0d52] flex items-center justify-between group-hover:translate-x-1 transition-all"
                    >
                      <span>Detaylı Özgeçmişi İncele</span>
                      <span>→</span>
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
