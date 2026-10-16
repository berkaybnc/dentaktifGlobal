'use client';

import React from 'react';
import { InstagramReel } from '@/data/blogData';

interface Props {
  reel: InstagramReel;
  locale: string;
}

export default function InstagramVideoCard({ reel, locale }: Props) {
  const title = reel.title[locale] || reel.title.en;
  const caption = reel.caption[locale] || reel.caption.en;
  const doctorRole = reel.doctorRole[locale] || reel.doctorRole.en;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md shadow-slate-200/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-teal-400 group">
      {/* 1. Video Player Container
          - Uses 9:16 aspect ratio (standard Instagram Reel ratio)
          - iframe scaled slightly (scale-105) to eliminate Instagram's letterboxing/pillarboxing black bars
      */}
      <div className="relative w-full aspect-[9/16] bg-slate-900 overflow-hidden flex items-center justify-center">
        <iframe
          src={`${reel.embedUrl}?autoplay=0`}
          className="w-full h-full border-0 scale-[1.04] origin-center"
          allowFullScreen
          scrolling="no"
          title={title}
        />
      </div>

      {/* 2. Clean Clinical Context & Caption Card */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <div className="space-y-2">
          {/* Doctor Badge */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
            <span className="material-symbols-outlined text-[15px] text-teal-600">verified</span>
            <span className="text-slate-900 font-bold">{reel.doctor}</span>
            <span>•</span>
            <span className="text-[11px] text-slate-500">{doctorRole}</span>
          </div>

          {/* Video Title */}
          <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug group-hover:text-teal-700 transition-colors">
            {title}
          </h3>

          {/* Video Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {caption}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400">
            <span className="material-symbols-outlined text-[14px]">videocam</span>
            <span>Instagram Reel</span>
          </div>

          <a
            href={reel.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-xs hover:opacity-95 transition-all"
          >
            <span>Instagram'da Aç</span>
            <span className="material-symbols-outlined text-[13px]">open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  );
}
