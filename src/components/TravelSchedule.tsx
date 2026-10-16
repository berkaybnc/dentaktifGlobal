'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function TravelSchedule() {
  const t = useTranslations('schedule');

  const days = [
    {
      day: 'Day 01',
      phase: 'Diagnostics',
      title: t('day1Title'),
      desc: t('day1Desc'),
      metric: '• 3D CBCT & Triage',
      time: 'Day 1',
    },
    {
      day: 'Day 02',
      phase: 'Design & Prep',
      title: t('day2Title'),
      desc: t('day2Desc'),
      metric: '• Digital Mock-Up',
      time: 'Day 2',
    },
    {
      day: 'Day 03',
      phase: 'CAD/CAM Lab',
      title: t('day3Title'),
      desc: t('day3Desc'),
      metric: '• In-House Milling',
      time: 'Day 3',
    },
    {
      day: 'Day 04',
      phase: 'Try-in',
      title: t('day4Title'),
      desc: t('day4Desc'),
      metric: '• Shade Grading',
      time: 'Day 4',
    },
    {
      day: 'Day 05',
      phase: 'Final Bond',
      title: t('day5Title'),
      desc: t('day5Desc'),
      metric: '• Official Passport',
      time: 'Day 5',
    },
  ];

  return (
    <section className="w-full py-20 bg-white border-b border-slate-200" id="patient-journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-secondary font-extrabold">
            {t('badge')}
          </span>
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
