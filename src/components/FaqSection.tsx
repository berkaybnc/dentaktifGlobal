'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_LIST_BY_LOCALE: Record<string, FaqItem[]> = {
  en: [
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
  ],
  tr: [
    {
      id: 'stay-duration',
      category: 'Seyahat & Takvim',
      question: 'Eksiksiz bir tedavi için İstanbul\'da kaç gün kalmam gerekiyor?',
      answer:
        'Estetik gülüş tasarımları (E-Max® lamine veya monolitik zirkonyum kuronlar) için standart kalış süresi yalnızca 5 gündür. Bünyemizdeki Alman CAD/CAM kazıma laboratuvarı sayesinde tasarım, prova ve daimi yapıştırma dış laboratuvar gecikmesi olmaksızın hastanemizde tamamlanır. All-on-4 / All-on-6 implantlarda ise ilk 5 günlük ziyaretinizde 48-72 saat içinde sabit geçici dişleriniz hemen takılır.',
    },
    {
      id: 'pain-anesthesia',
      category: 'Klinik Konfor & Anestezi',
      question: 'İmplant cerrahisi veya lamine kaplama aşamaları ağrılı mıdır?',
      answer:
        'Kesinlikle hayır. Tüm cerrahi ve estetik işlemler, iğnesiz bilgisayarlı dijital anestezi (Wand® sistemi) ile tam uyuşma sağlanarak gerçekleştirilir. İleri düzey diş hekimi korkusu olan veya kapsamlı cerrahi geçiren hastalarımız için lisanslı anestezi uzmanlarımız gözetiminde sedasyon seçeneği sunulmaktadır. Hastalarımız işlem sonrası aynı gün dinlenmek üzere otellerine döner.',
    },
    {
      id: 'material-authenticity',
      category: 'Orijinallik & Garanti',
      question: 'Kullanılan materyaller orijinal İsviçre Straumann® ve Ivoclar E-Max® midir?',
      answer:
        'Evet, %100 orijinaldir. Hastanemizde yalnızca orijinal İsviçre Straumann® Roxolid/SLActive implantlar ve Lihtenştayn üretimi orijinal Ivoclar Vivadent E-Max® bloklar kullanılır. Her hastamıza tedavi sonunda seri numaralı resmi üretici garanti pasaportu ve sertifikası teslim edilir. Bu belgeler dünya çapında sorgulanabilir.',
    },
  ],
  de: [
    {
      id: 'stay-duration',
      category: 'Reise & Zeitplan',
      question: 'Wie viele Tage muss ich für eine vollständige Behandlung in Istanbul bleiben?',
      answer:
        'Für ein ästhetisches Smile Makeover (E-Max® Veneers oder Zirkonkronen) ist ein 5-tägiger Aufenthalt Standard. Dank unseres hauseigenen deutschen CAD/CAM-Labors erfolgen Design, Einprobe und Befestigung ohne externe Wartezeiten direkt vor Ort. Bei Straumann® All-on-4/6 Implantaten erhalten Sie Ihre festsitzenden provisorischen Zähne innerhalb von 48 bis 72 Stunden.',
    },
    {
      id: 'pain-anesthesia',
      category: 'Klinik & Komfort',
      question: 'Ist die Implantation oder die Veneer-Vorbereitung schmerzhaft?',
      answer:
        'Nein. Alle Eingriffe werden unter moderner, schmerzfreier digitaler Lokalanästhesie durchgeführt, die eine vollständige Taubheit gewährleistet. Für Angstpatienten steht eine Dämmerschlaf-Sedierung unter Aufsicht von Fachanästhesisten zur Verfügung. Patienten spüren so gut wie keine Schmerzen.',
    },
    {
      id: 'material-authenticity',
      category: 'Qualität & Materialien',
      question: 'Sind die Materialien originale Schweizer Straumann® und Ivoclar Vivadent E-Max®?',
      answer:
        'Ja, zu 100%. Wir verwenden ausschließlich authentische Schweizer Straumann® Roxolid Implantate und originale Ivoclar Vivadent E-Max® Keramik. Jeder Patient erhält einen offiziellen Implantatpass mit registrierter Seriennummer und internationaler lebenslanger Garantie.',
    },
  ],
  ru: [
    {
      id: 'stay-duration',
      category: 'Поездка и график',
      question: 'Сколько дней нужно провести в Стамбуле для завершения лечения?',
      answer:
        'Для эстетического преображения улыбки (виниры E-Max® или циркониевые коронки) стандартный срок составляет 5 дней. Благодаря собственной немецкой CAD/CAM лаборатории моделирование, примерка и фиксация проходят в здании клиники. При имплантации All-on-4/6 несъемный мост устанавливается уже через 48–72 часа.',
    },
    {
      id: 'pain-anesthesia',
      category: 'Комфорт и анестезия',
      question: 'Болезненна ли установка имплантов или обработка зубов под виниры?',
      answer:
        'Нет. Все процедуры выполняются под современной компьютеризированной безыгольной анестезией, обеспечивающей полное обезболивание. Для пациентов с дентофобией доступна седация во сне под контролем штатного анестезиолога.',
    },
    {
      id: 'material-authenticity',
      category: 'Качество и гарантия',
      question: 'Являются ли материалы оригинальными Straumann® и Ivoclar Vivadent E-Max®?',
      answer:
        'Да, на 100%. Мы используем только оригинальные швейцарские импланты Straumann® Roxolid и блоки дисиликата лития Ivoclar Vivadent. Каждый пациент получает официальный международный паспорт имплантации с серийными номерами и голограммой.',
    },
  ],
  fr: [
    {
      id: 'stay-duration',
      category: 'Séjour & Planning',
      question: 'Combien de jours dois-je séjourner à Istanbul pour un traitement complet ?',
      answer:
        'Pour la transformation du sourire (facettes E-Max® ou couronnes en zircone), un séjour de 5 jours est suffisant. Notre laboratoire CAD/CAM intégré réalise conception, essayages et collage définitif sur place. Pour les implants All-on-4/6, vos dents provisoires fixes sont posées sous 48 à 72 heures.',
    },
    {
      id: 'pain-anesthesia',
      category: 'Confort Clinique',
      question: 'La pose d\'implants ou la préparation des facettes est-elle douloureuse ?',
      answer:
        'Absolument pas. Tous nos actes sont pratiqués sous anesthésie locale assistée par ordinateur sans seringue (système Wand®). Pour les patients anxieux, une sédation consciente intraveineuse est assurée par un anesthésiste hospitalier.',
    },
    {
      id: 'material-authenticity',
      category: 'Matériaux & Garantie',
      question: 'Les matériaux sont-ils d\'authentiques Straumann® et Ivoclar E-Max® ?',
      answer:
        'Oui, à 100%. Nous utilisons exclusivement des implants suisses Straumann® Roxolid et des vitrocéramiques Ivoclar Vivadent E-Max®. Chaque patient reçoit son passeport implantaire officiel avec numéros de série et garantie internationale.',
    },
  ],
};

const LOCALIZED_FAQ_UI: Record<string, { badge: string; title: string; desc: string; viewAllBtn: string; askDoc: string; boardNotice: string; contactDesk: string }> = {
  en: {
    badge: 'Quick Patient FAQ',
    title: 'Frequently Asked Questions',
    desc: 'Quick answers about treatment durations, painless anesthesia, and authentic Swiss implants.',
    viewAllBtn: 'View All Frequently Asked Questions →',
    askDoc: 'Ask Doctor via Contact Desk',
    boardNotice: 'Verified by Hospital Medical Board',
    contactDesk: 'Contact Medical Desk',
  },
  tr: {
    badge: 'Sıkça Sorulan Sorular',
    title: 'Merak Edilen Konular & Yanıtlar',
    desc: 'Tedavi süreleri, ağrısız anestezi ve orijinal İsviçre implantları hakkında merak edilen temel soruların yanıtları.',
    viewAllBtn: 'Tüm Sıkça Sorulan Soruları Gör →',
    askDoc: 'Hekime Danışın',
    boardNotice: 'Hastane Tıp Kurulu Tarafından Doğrulanmıştır',
    contactDesk: 'Hasta Masası ile İletişim',
  },
  de: {
    badge: 'Häufige Patientenfragen',
    title: 'Häufig gestellte Fragen',
    desc: 'Wichtige Antworten zu Behandlungsdauer, schmerzfreier Betäubung und originalen Schweizer Implantaten.',
    viewAllBtn: 'Alle häufig gestellten Fragen ansehen →',
    askDoc: 'Arzt über Beratung kontaktieren',
    boardNotice: 'Verifiziert vom medizinischen Klinikbeirat',
    contactDesk: 'Medizinischen Schalter kontaktieren',
  },
  fr: {
    badge: 'Questions Fréquentes',
    title: 'Foire Aux Questions',
    desc: 'Réponses essentielles sur la durée du séjour, l\'anesthésie indolore et les implants suisses authentiques.',
    viewAllBtn: 'Consulter toutes les questions fréquentes →',
    askDoc: 'Contacter l\'équipe médicale',
    boardNotice: 'Validé par le Comité Médical Hospitalier',
    contactDesk: 'Contacter le Bureau Médical',
  },
  ru: {
    badge: 'Часто задаваемые вопросы',
    title: 'Вопросы и ответы',
    desc: 'Краткие ответы о сроках пребывания, безболезненной анестезии и оригинальных швейцарских имплантах.',
    viewAllBtn: 'Посмотреть все вопросы и ответы →',
    askDoc: 'Задать вопрос врачу',
    boardNotice: 'Подтверждено медицинским советом клиники',
    contactDesk: 'Связаться с координатором',
  },
};

export default function FaqSection() {
  const locale = useLocale();
  const [openId, setOpenId] = useState<string>('stay-duration');
  const t = LOCALIZED_FAQ_UI[locale] || LOCALIZED_FAQ_UI.en;
  const faqList = FAQ_LIST_BY_LOCALE[locale] || FAQ_LIST_BY_LOCALE.en;

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
          {faqList.map((faq) => {
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
                        {t.boardNotice}
                      </span>
                      <Link
                        href="/contact"
                        className="text-[#211164] font-bold hover:underline"
                      >
                        {t.askDoc} →
                      </Link>
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

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs transition-colors"
          >
            <span>{t.contactDesk}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
