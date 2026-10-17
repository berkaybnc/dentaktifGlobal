'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function TravelSchedule() {
  const t = useTranslations('schedule');
  const locale = useLocale();

  const isAr = locale === 'ar';
  const isTr = locale === 'tr';

  const days = [
    {
      day: isAr ? 'اليوم 01' : isTr ? '1. Gün' : 'Day 01',
      phase: isAr ? 'التشخيص والفحص' : isTr ? 'Teşhis & Planlama' : 'Diagnostics',
      title: t('day1Title'),
      desc: t('day1Desc'),
      metric: isAr ? '• أشعة 3D والفرز الطبي' : isTr ? '• 3D CBCT & Triyaj' : '• 3D CBCT & Triage',
      time: isAr ? 'اليوم الأول' : isTr ? '1. Gün' : 'Day 1',
    },
    {
      day: isAr ? 'اليوم 02' : isTr ? '2. Gün' : 'Day 02',
      phase: isAr ? 'التصميم والتحضير' : isTr ? 'Tasarım & Hazırlık' : 'Design & Prep',
      title: t('day2Title'),
      desc: t('day2Desc'),
      metric: isAr ? '• المعاينة الرقمية للابتسامة' : isTr ? '• Dijital Mock-Up' : '• Digital Mock-Up',
      time: isAr ? 'اليوم الثاني' : isTr ? '2. Gün' : 'Day 2',
    },
    {
      day: isAr ? 'اليوم 03' : isTr ? '3. Gün' : 'Day 03',
      phase: isAr ? 'مختبر CAD/CAM' : isTr ? 'CAD/CAM Laboratuvarı' : 'CAD/CAM Lab',
      title: t('day3Title'),
      desc: t('day3Desc'),
      metric: isAr ? '• نحت رقمي داخلي' : isTr ? '• Klinik İçi Kazıma' : '• In-House Milling',
      time: isAr ? 'اليوم الثالث' : isTr ? '3. Gün' : 'Day 3',
    },
    {
      day: isAr ? 'اليوم 04' : isTr ? '4. Gün' : 'Day 04',
      phase: isAr ? 'جلسة القياس والتجربة' : isTr ? 'Prova & Renk Uyumu' : 'Try-in',
      title: t('day4Title'),
      desc: t('day4Desc'),
      metric: isAr ? '• ضبط ومطابقة التدرج اللوني' : isTr ? '• Renk Katmanlama' : '• Shade Grading',
      time: isAr ? 'اليوم الرابع' : isTr ? '4. Gün' : 'Day 4',
    },
    {
      day: isAr ? 'اليوم 05' : isTr ? '5. Gün' : 'Day 05',
      phase: isAr ? 'التثبيت النهائي والاحتفال' : isTr ? 'Kalıcı Yapıştırma & Teslim' : 'Final Bond',
      title: t('day5Title'),
      desc: t('day5Desc'),
      metric: isAr ? '• تسليم جواز السفر الرسمي' : isTr ? '• Orijinal Pasaport' : '• Official Passport',
      time: isAr ? 'اليوم الخامس' : isTr ? '5. Gün' : 'Day 5',
    },
  ];

  return (
    <section className="w-full py-20 bg-white border-b border-slate-200" id="patient-journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-14">
          <h2 className="font-headline text-3xl sm:text-4xl font-black text-[#211164] tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {days.map((d) => (
            <div
              key={d.day}
              className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-[#FAFBFC] flex flex-col justify-between hover:border-primary hover:shadow-premium-hover transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-3">
                  <span className="font-headline text-2xl font-black text-[#211164] group-hover:text-primary-hover">
                    {d.day}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-secondary uppercase bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {d.phase}
                  </span>
                </div>
                <h4 className="font-headline text-sm font-bold text-slate-900 mb-2 leading-snug">
                  {d.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {d.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-emerald-700 font-bold">{d.metric}</span>
                <span className="text-slate-400 font-medium">{d.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
