'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

// 3 Core Essential FAQs for Homepage (Full library available on /faq)
const HOME_FAQ_LIST: FaqItem[] = [
  {
    id: 'stay-duration',
    category: 'Travel & Schedule',
    question: 'How many days do I need to stay in Istanbul for a complete treatment?',
    answer:
      'For aesthetic smile makeovers (E-Max® veneers or monolithic zirconia crowns), a 5-day stay is standard. Thanks to our in-house German CAD/CAM milling laboratory, we complete design, chairside trial fitting, and permanent cementation on-site without external laboratory delays. For immediate-load Straumann® All-on-4 or All-on-6 implants, your temporary fixed teeth are placed within 48 to 72 hours during your first 5-day visit.',
  },
  {
    id: 'pain-anesthesia',
    category: 'Clinical & Comfort',
    question: 'Is dental implant surgery or veneer preparation painful?',
    answer:
      'No. All surgical and restorative procedures are performed under advanced computerized painless local anesthesia (painless Wand® micro-delivery) ensuring absolute numbness. For anxious patients or extensive full-mouth surgical rehabilitations, conscious IV sedation is administered by licensed hospital anesthesiologists. Patients experience minimal discomfort and return to their hotel the same afternoon.',
  },
  {
    id: 'material-authenticity',
    category: 'Quality & Materials',
    question: 'Are the materials genuine Swiss Straumann® and Ivoclar Vivadent E-Max®?',
    answer:
      'Yes, 100%. We exclusively use authentic Swiss Straumann® Roxolid and SLActive implants and genuine Liechtenstein Ivoclar Vivadent E-Max® ingots. Every patient receives an official manufacturer implant passport and holographic warranty card with registered batch serial numbers, verifiable worldwide through Straumann and Ivoclar international registers.',
  },
];

const LOCALIZED_FAQ_UI: Record<string, { badge: string; title: string; desc: string; viewAllBtn: string; askDoc: string }> = {
  en: {
    badge: 'Quick Patient FAQ',
    title: 'Frequently Asked Questions',
    desc: 'Quick answers about treatment durations, painless anesthesia, and authentic Swiss implants.',
    viewAllBtn: 'View All Frequently Asked Questions →',
    askDoc: 'Ask Doctor via WhatsApp'
  },
  de: {
    badge: 'Häufige Patientenfragen',
    title: 'Häufig gestellte Fragen',
    desc: 'Wichtige Antworten zu Behandlungsdauer, schmerzfreier Betäubung und originalen Schweizer Implantaten.',
    viewAllBtn: 'Alle häufig gestellten Fragen ansehen →',
    askDoc: 'Arzt per WhatsApp fragen'
  },
  fr: {
    badge: 'Questions Fréquentes',
    title: 'Foire Aux Questions',
    desc: 'Réponses essentielles sur la durée du séjour, l\'anesthésie indolore et les implants suisses authentiques.',
    viewAllBtn: 'Consulter toutes les questions fréquentes →',
    askDoc: 'Poser une question sur WhatsApp'
  },
  ru: {
    badge: 'Часто задаваемые вопросы',
    title: 'Вопросы и ответы',
    desc: 'Краткие ответы о сроках пребывания, безболезненной анестезии и оригинальных швейцарских имплантах.',
    viewAllBtn: 'Посмотреть все вопросы и ответы →',
    askDoc: 'Задать вопрос в WhatsApp'
  }
};

export default function FaqSection() {
  const locale = useLocale();
  const [openId, setOpenId] = useState<string>('stay-duration');
  const t = LOCALIZED_FAQ_UI[locale] || LOCALIZED_FAQ_UI.en;

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-white border-b border-slate-200" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#006972] font-extrabold bg-teal-50 border border-teal-200 px-3.5 py-1 rounded-full inline-block">
            {t.badge}
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-black text-[#1b0d52] tracking-tight">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* 3 Core FAQ Items Accordion */}
        <div className="space-y-3.5">
          {HOME_FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#211164]/30 bg-[#FAFBFC] shadow-md shadow-[#211164]/5'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700">
                      {faq.category}
                    </span>
                    <h3 className="font-headline text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#211164] text-white rotate-180'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between flex-wrap gap-2 text-xs">
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        Verified by Hospital Medical Board
                      </span>
                      <a
                        href="https://wa.me/902129008080"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#211164] font-bold hover:underline flex items-center gap-1"
                      >
                        <span>{t.askDoc}</span>
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All FAQs CTA to Dedicated Page */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/faq"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#211164] to-[#006972] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-100 group"
          >
            <span>{t.viewAllBtn}</span>
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>

          <a
            href="https://wa.me/902129008080"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold text-xs transition-colors"
          >
            <span className="material-symbols-outlined text-base text-emerald-600">chat</span>
            <span>{t.askDoc}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
