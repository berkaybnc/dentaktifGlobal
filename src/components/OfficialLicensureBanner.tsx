'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ShieldCheck, Award, FileCheck2 } from 'lucide-react';

export default function OfficialLicensureBanner() {
  const t = useTranslations('licensure');

  return (
    <aside 
      aria-label="Official Ministry Licensure Notice"
      className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border-b border-sky-500/20 text-white py-2 px-4 text-xs"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded-full border border-amber-500/30">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            {t('badge')}
          </span>
          <span className="hidden sm:inline text-slate-300 font-medium">
            {t('title')}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-mono text-sky-300 font-bold tracking-wide">
            <FileCheck2 className="w-3.5 h-3.5 text-sky-400" />
            <span>{t('regNo')}</span>
          </div>

          <div className="hidden md:flex items-center gap-1 text-slate-400 text-[11px]">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>{t('verifiedNotice')}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
