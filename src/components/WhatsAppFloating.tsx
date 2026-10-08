'use client';

import React from 'react';
import { useLocale } from 'next-intl';

const MESSAGES_BY_LOCALE: Record<string, string> = {
  en: 'Hello, I am inquiring about dental treatment and international packages at Dent Aktif.',
  de: 'Hallo, ich interessiere mich für Zahnbehandlungen und internationale Pakete bei Dent Aktif.',
  fr: 'Bonjour, je souhaite obtenir des informations sur les soins dentaires et les forfaits internationaux de Dent Aktif.',
  ru: 'Здравствуйте, меня интересует лечение зубов и международные пакеты в клинике Dent Aktif.',
};

export default function WhatsAppFloating() {
  const locale = useLocale();
  const text = encodeURIComponent(
    MESSAGES_BY_LOCALE[locale] || MESSAGES_BY_LOCALE.en
  );

  return (
    <aside aria-label="International Quick Contact" className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
      <a
        className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-white text-primary border border-slate-300 shadow-xl font-bold text-xs hover:bg-slate-50 transition-transform hover:scale-105"
        href="#cost-calculator-section"
      >
        <span className="material-symbols-outlined text-base text-emerald-600">calculate</span>
        <span>Package Reference</span>
      </a>

      <a
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl font-bold text-xs transition-transform hover:scale-105"
        href={`https://wa.me/902129008080?text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-symbols-outlined text-lg">chat</span>
        <span>WhatsApp Medical Coordinator</span>
      </a>
    </aside>
  );
}
