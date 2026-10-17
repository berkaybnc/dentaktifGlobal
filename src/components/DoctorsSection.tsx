'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/navigation';
import { getDoctorsList } from '@/data/doctorsData';

export default function DoctorsSection() {
  const t = useTranslations('doctorsSection');
  const locale = useLocale();
  const doctors = getDoctorsList(locale);

  const labels = {
    en: {
      focus: 'Key Clinical Focus:',
      profileBtn: 'Full Biography & Protocols →',
      trustTitle: 'Permanent Hospital Faculty',
      trustDesc: 'All surgical, prosthetic, and aesthetic treatments are directly administered by our certified medical faculty.',
      ctaBtn: 'Start Free Consultation',
    },
    tr: {
      focus: 'Temel Klinik Uzmanlıklar:',
      profileBtn: 'Detaylı Biyografi & Protokoller →',
      trustTitle: 'Daimi Hastane Hekim Kadrosu',
      trustDesc: 'Tüm cerrahi, protetik ve estetik tedaviler lisanslı uzman hekim kadromuz tarafından bizzat uygulanır.',
      ctaBtn: 'Ücretsiz Danışma Başlat',
    },
    de: {
      focus: 'Klinische Schwerpunkte:',
      profileBtn: 'Vollständige Biografie & Protokolle →',
      trustTitle: 'Ständiges Ärzteteam der Klinik',
      trustDesc: 'Alle chirurgischen und ästhetischen Eingriffe werden direkt von unseren lizenzierten Fachärzten durchgeführt.',
      ctaBtn: 'Kostenlose Beratung starten',
    },
    ru: {
      focus: 'Ключевая специализация:',
      profileBtn: 'Полная биография и протоколы →',
      trustTitle: 'Постоянный штат врачей клиники',
      trustDesc: 'Все хирургические и ортопедические процедуры выполняются постоянными врачами клиники.',
      ctaBtn: 'Начать бесплатную консультацию',
    },
    fr: {
      focus: 'Spécialités Cliniques Clés :',
      profileBtn: 'Biographie Complète & Protocoles →',
      trustTitle: 'Corps Médical Hospitalier Permanent',
      trustDesc: 'Tous les actes chirurgicaux et prothétiques sont réalisés par nos chirurgiens-dentistes titulaires.',
      ctaBtn: 'Démarrer la Consultation Gratuite',
    },
    ar: {
      focus: 'التخصصات والاهتمامات السريرية:',
      profileBtn: 'السيرة الذاتية الكاملة والبروتوكولات ←',
      trustTitle: 'الكادر الطبي الدائم في المستشفى',
      trustDesc: 'تُجرى كافة الإجراءات الجراحية والتعويضية والتجميلية حصرياً على يد أطبائنا الاستشاريين المرخصين.',
      ctaBtn: 'بدء الاستشارة المجانية',
    },
  }[locale] || {
    focus: 'Key Clinical Focus:',
    profileBtn: 'Full Biography & Protocols →',
    trustTitle: 'Permanent Hospital Faculty',
    trustDesc: 'All surgical, prosthetic, and aesthetic treatments are directly administered by our certified medical faculty.',
    ctaBtn: 'Start Free Consultation',
  };

  return (
    <section className="w-full py-20 bg-white border-b border-slate-200" id="doctors-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#006699] font-extrabold flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#006699] animate-pulse"></span>
            {t('badge')}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#211164] tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {t('desc')}
          </p>
        </div>

        {/* 4 Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              {/* Doctor Portrait Container with DentAktif Backdrop */}
              <div className="relative w-full aspect-[3/4] bg-[#F5F8FA] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Verified Badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-bold text-[#211164] flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-sm text-emerald-600">verified</span>
                  <span>{doctor.treatedCases}</span>
                </div>

                {/* Subtle Gradient Shadow at Bottom of Image */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-teal-300 font-extrabold block">
                    {doctor.experience}
                  </span>
                </div>
              </div>

              {/* Doctor Details Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div>
                    <h3 className="font-headline text-xl font-black text-[#211164] group-hover:text-[#006699] transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-500">{doctor.academicTitle}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1 line-clamp-3">
                    {doctor.bio}
                  </p>
                </div>

                {/* Clinical Focus List */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    {labels.focus}
                  </span>
                  <ul className="space-y-1.5">
                    {doctor.specializations.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006972] shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action / View Profile Button */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/doctors/${doctor.id}`}
                    className="w-full inline-flex items-center justify-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#211164] text-white hover:bg-[#006972] transition-all shadow-md group-hover:shadow-lg text-center"
                  >
                    <span>{labels.profileBtn}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Hospital Trust Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">shield_with_heart</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 block">{labels.trustTitle}</span>
              <span className="text-slate-500">{labels.trustDesc}</span>
            </div>
          </div>

          <a
            href="#consultation-wizard"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-[#211164] font-bold text-xs uppercase tracking-wide transition-colors"
          >
            <span>{labels.ctaBtn}</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
