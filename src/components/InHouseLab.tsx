'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function InHouseLab() {
  const t = useTranslations('inHouseLab');

  return (
    <section className="w-full py-20 bg-[#FAFBFC] border-b border-slate-200" id="in-house-lab">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Ceramist Laboratory Visual */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xl bg-slate-900 group">
              <div className="aspect-4/3 w-full overflow-hidden">
                <img
                  alt="Dent Aktif In-House Master Ceramist Laboratory"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src="/images/in-house-lab.webp"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4 bg-slate-950 text-white flex flex-wrap items-center justify-between gap-2 text-xs border-t border-white/10">
                <span className="font-mono text-slate-300 font-medium">{t('imageFooterLeft')}</span>
                <span className="font-bold text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {t('imageFooterRight')}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Lab Quality Differentiators */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#006972] font-bold">
                {t('badge')}
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#1b0d52] tracking-tight">
                {t('title')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t('desc')}
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span className="material-symbols-outlined text-[#006972] text-xl shrink-0 mt-0.5">palette</span>
                <div>
                  <h4 className="font-headline text-xs font-bold text-[#1b0d52]">{t('feature1Title')}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    {t('feature1Desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border border-slate-200 rounded-xl bg-white shadow-xs">
                <span className="material-symbols-outlined text-[#006972] text-xl shrink-0 mt-0.5">precision_manufacturing</span>
                <div>
                  <h4 className="font-headline text-xs font-bold text-[#1b0d52]">{t('feature2Title')}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    {t('feature2Desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border border-slate-200 rounded-xl bg-white shadow-xs">
                <span className="material-symbols-outlined text-[#006972] text-xl shrink-0 mt-0.5">timer</span>
                <div>
                  <h4 className="font-headline text-xs font-bold text-[#1b0d52]">{t('feature3Title')}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                    {t('feature3Desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
