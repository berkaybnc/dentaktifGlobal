'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function TravelSchedule() {
  const t = useTranslations('schedule');
  const locale = useLocale();

  const SCHEDULE_BY_LOCALE: Record<string, Array<{ day: string; phase: string; metric: string; time: string }>> = {
    en: [
      { day: 'Day 01', phase: 'Diagnostics', metric: '• 3D CBCT & Triage', time: 'Day 1' },
      { day: 'Day 02', phase: 'Design & Prep', metric: '• Digital Mock-Up', time: 'Day 2' },
      { day: 'Day 03', phase: 'CAD/CAM Lab', metric: '• In-House Milling', time: 'Day 3' },
      { day: 'Day 04', phase: 'Try-in', metric: '• Shade Grading', time: 'Day 4' },
      { day: 'Day 05', phase: 'Final Bond', metric: '• Official Passport', time: 'Day 5' },
    ],
    tr: [
      { day: '1. Gün', phase: 'Teşhis & Planlama', metric: '• 3D CBCT & Triyaj', time: '1. Gün' },
      { day: '2. Gün', phase: 'Tasarım & Hazırlık', metric: '• Dijital Mock-Up', time: '2. Gün' },
      { day: '3. Gün', phase: 'CAD/CAM Laboratuvarı', metric: '• Klinik İçi Kazıma', time: '3. Gün' },
      { day: '4. Gün', phase: 'Prova & Renk Uyumu', metric: '• Renk Katmanlama', time: '4. Gün' },
      { day: '5. Gün', phase: 'Kalıcı Yapıştırma & Teslim', metric: '• Orijinal Pasaport', time: '5. Gün' },
    ],
    de: [
      { day: 'Tag 01', phase: 'Diagnose & Planung', metric: '• 3D-DVT & Triage', time: 'Tag 1' },
      { day: 'Tag 02', phase: 'Design & Präparation', metric: '• Digitales Mock-Up', time: 'Tag 2' },
      { day: 'Tag 03', phase: 'CAD/CAM-Labor', metric: '• Hauseigenes Fräsen', time: 'Tag 3' },
      { day: 'Tag 04', phase: 'Einprobe & Farbanpassung', metric: '• Farbschichtung', time: 'Tag 4' },
      { day: 'Tag 05', phase: 'Finale Befestigung & Pass', metric: '• Offizieller Pass', time: 'Tag 5' },
    ],
    fr: [
      { day: 'Jour 01', phase: 'Diagnostics & Plan', metric: '• CBCT 3D & Triage', time: 'Jour 1' },
      { day: 'Jour 02', phase: 'Design & Préparation', metric: '• Mock-up Numérique', time: 'Jour 2' },
      { day: 'Jour 03', phase: 'Labo CAD/CAM Interne', metric: '• Usinage Intégré', time: 'Jour 3' },
      { day: 'Jour 04', phase: 'Essai & Teinte', metric: '• Dégradé de Teinte', time: 'Jour 4' },
      { day: 'Jour 05', phase: 'Collage Définitif & Remise', metric: '• Passeport Officiel', time: 'Jour 5' },
    ],
    ru: [
      { day: 'День 01', phase: 'Диагностика и план', metric: '• 3D КЛКТ и осмотр', time: 'День 1' },
      { day: 'День 02', phase: 'Дизайн и препарирование', metric: '• Цифровой мокап', time: 'День 2' },
      { day: 'День 03', phase: 'Лаборатория CAD/CAM', metric: '• Фрезерование в клинике', time: 'День 3' },
      { day: 'День 04', phase: 'Примерка и коррекция', metric: '• Индивидуальный оттенок', time: 'День 4' },
      { day: 'День 05', phase: 'Окончательная фиксация', metric: '• Официальный паспорт', time: 'День 5' },
    ],
    ar: [
      { day: 'اليوم ٠١', phase: 'التشخيص والفحص', metric: '• أشعة 3D والفرز الطبي', time: 'اليوم الأول' },
      { day: 'اليوم ٠٢', phase: 'التصميم والتحضير', metric: '• المعاينة الرقمية للابتسامة', time: 'اليوم الثاني' },
      { day: 'اليوم ٠٣', phase: 'مختبر CAD/CAM', metric: '• نحت رقمي داخلي', time: 'اليوم الثالث' },
      { day: 'اليوم ٠٤', phase: 'جلسة القياس والتجربة', metric: '• ضبط ومطابقة التدرج اللوني', time: 'اليوم الرابع' },
      { day: 'اليوم ٠٥', phase: 'التثبيت النهائي والاحتفال', metric: '• تسليم جواز السفر الرسمي', time: 'اليوم الخامس' },
    ],
  };

  const currentSchedule = SCHEDULE_BY_LOCALE[locale] || SCHEDULE_BY_LOCALE.en;

  const days = [
    {
      ...currentSchedule[0],
      title: t('day1Title'),
      desc: t('day1Desc'),
    },
    {
      ...currentSchedule[1],
      title: t('day2Title'),
      desc: t('day2Desc'),
    },
    {
      ...currentSchedule[2],
      title: t('day3Title'),
      desc: t('day3Desc'),
    },
    {
      ...currentSchedule[3],
      title: t('day4Title'),
      desc: t('day4Desc'),
    },
    {
      ...currentSchedule[4],
      title: t('day5Title'),
      desc: t('day5Desc'),
    },
  ];

  return (
    <section className="w-full py-20 bg-white border-b border-slate-200" id="patient-journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-14">
          <h2 className="font-headline text-3xl sm:text-4xl font-black text-[#211164] tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
            {t('desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {days.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all relative group hover:border-[#211164]/30"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-[#006972] uppercase tracking-wider">
                    {item.day}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-bold px-2 py-0.5 rounded-full bg-slate-200/60">
                    {item.time}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    {item.phase}
                  </span>
                  <h4 className="font-headline text-sm font-bold text-[#1b0d52] group-hover:text-[#006972] transition-colors leading-snug">
                    {item.title}
                  </h4>
                </div>

                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[10px] font-mono font-semibold text-slate-500">
                <span>{item.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
