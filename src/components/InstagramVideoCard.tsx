'use client';

import React from 'react';
import { InstagramReel } from '@/data/blogData';

interface Props {
  reel: InstagramReel;
  locale: string;
}

export default function InstagramVideoCard({ reel, locale }: Props) {
  const title =
    (reel.title && typeof reel.title === 'object'
      ? reel.title[locale] || reel.title.en
      : reel.title) || 'Dent Aktif Global';

  const caption =
    (reel.caption && typeof reel.caption === 'object'
      ? reel.caption[locale] || reel.caption.en
      : reel.caption) || '';

  const topicLabel =
    (reel.doctorRole && typeof reel.doctorRole === 'object'
      ? reel.doctorRole[locale] || reel.doctorRole.en
      : reel.doctorRole) || 'Instagram Reel';

  const isHorizontal = reel.aspectRatio === 'horizontal';
  const isPortrait = reel.aspectRatio === 'portrait';

  // Dynamic aspect ratio container tailored for horizontal (16:9), portrait (4:5), or vertical (9:16)
  const aspectClass = isHorizontal
    ? 'aspect-video'
    : isPortrait
    ? 'aspect-[4/5]'
    : 'aspect-[9/16]';

  // Precision CSS scaling and transform origin to push iframe header and footer outside container
  const iframeStyle = isHorizontal
    ? {
        transform: 'scale(1.72)',
        transformOrigin: '50% 28%',
        width: '100%',
        height: '100%',
      }
    : isPortrait
    ? {
        transform: 'scale(1.35)',
        transformOrigin: '50% 36%',
        width: '100%',
        height: '100%',
      }
    : {
        transform: 'scale(1.48)',
        transformOrigin: '50% 42%',
        width: '100%',
        height: '100%',
      };

  const CTA_TEXT: Record<string, string> = {
    tr: "Instagram'da İzle & Keşfet",
    en: 'Watch & Explore',
    de: 'Auf Instagram ansehen',
    ru: 'Смотреть в Instagram',
    fr: 'Voir sur Instagram',
    ar: 'مشاهدة على إنستغرام',
  };

  const PINNED_TEXT: Record<string, string> = {
    tr: 'Öne Çıkan',
    en: 'Featured',
    de: 'Vorgestellt',
    ru: 'В топе',
    fr: 'À la une',
    ar: 'مميز',
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md shadow-slate-200/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-teal-400 group">
      {/* 1. Dynamic Responsive Media Container (Auto-adjusts for 16:9 horizontal, 4:5 portrait, and 9:16 vertical reels) */}
      <div className={`relative w-full ${aspectClass} bg-slate-950 overflow-hidden rounded-t-3xl`}>
        <iframe
          src={`${reel.embedUrl}?autoplay=0`}
          className="w-full h-full border-0 pointer-events-auto"
          style={iframeStyle}
          loading="lazy"
          allowFullScreen
          scrolling="no"
          title={title}
        />
      </div>

      {/* 2. Content & Curiosity Hook */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <div className="space-y-2.5">
          {/* Topic / Pinned Badge */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/60 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
              <span>{topicLabel}</span>
            </div>

            {reel.isPinned && (
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/70">
                <span className="material-symbols-outlined text-[13px] text-amber-600">push_pin</span>
                <span>{PINNED_TEXT[locale] || PINNED_TEXT.en}</span>
              </div>
            )}
          </div>

          {/* Video Title */}
          <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug group-hover:text-teal-700 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Curiosity Teaser (Short snippet that drives user curiosity towards Instagram) */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {caption}
          </p>
        </div>

        {/* Footer Actions with Direct Instagram Link */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400">
            <span className="material-symbols-outlined text-[14px]">
              {isHorizontal ? 'movie' : isPortrait ? 'photo_library' : 'videocam'}
            </span>
            <span>
              {isHorizontal ? '16:9 Video' : isPortrait ? 'Post' : 'Reel'}
            </span>
          </div>

          <a
            href={reel.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-xs hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>{CTA_TEXT[locale] || CTA_TEXT.en}</span>
            <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
          </a>
        </div>
      </div>
    </div>
  );
}
