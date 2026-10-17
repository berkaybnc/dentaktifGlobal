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
  const topicLabel = reel.doctorRole[locale] || reel.doctorRole.en;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md shadow-slate-200/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-teal-400 group">
      {/* 1. Clean Edge-to-Edge Video Player Container
          - Uses aspect-[9/16] native Reel aspect ratio
          - transform: scale(1.48) with origin 50% 42% zooms directly into the video pixels,
            pushing all side black bars, top header, and bottom like/comment icons completely off-screen
      */}
      <div className="relative w-full aspect-[9/16] bg-slate-100 overflow-hidden rounded-t-3xl">
        <iframe
          src={`${reel.embedUrl}?autoplay=0`}
          className="w-full h-full border-0 pointer-events-auto"
          style={{
            transform: 'scale(1.48)',
            transformOrigin: '50% 42%',
            width: '100%',
            height: '100%',
          }}
          loading="lazy"
          allowFullScreen
          scrolling="no"
          title={title}
        />
      </div>

      {/* 2. Content & Accurate Instagram Caption */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <div className="space-y-2.5">
          {/* Topic Badge (Doctor names completely removed) */}
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/60 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
            <span>{topicLabel}</span>
          </div>

          {/* Video Title */}
          <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug group-hover:text-teal-700 transition-colors">
            {title}
          </h3>

          {/* Real Instagram Description */}
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
