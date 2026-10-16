'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/navigation';

export default function ConciergeSection() {
  const t = useTranslations('concierge');
  const locale = useLocale();

  const features = [
    {
      icon: 'support_agent',
      title: t('card1Title'),
      badge: t('card1Badge'),
      desc: t('card1Desc'),
    },
    {
      icon: 'monitor_heart',
      title: t('card2Title'),
      badge: t('card2Badge'),
      desc: t('card2Desc'),
    },
    {
      icon: 'directions_car',
      title: t('card3Title'),
      badge: t('card3Badge'),
      desc: t('card3Desc'),
    },
    {
      icon: 'hotel',
      title: t('card4Title'),
      badge: t('card4Badge'),
      desc: t('card4Desc'),
    },
  ];

  const labels = {
    en: {
      strip: 'All-Inclusive Protocol: Hotel + Mercedes Chauffeur + All Meds Included.',
      zeroHidden: 'Zero Hidden Fees',
      deskSubtitle: 'Direct International Desk',
      deskTitle: 'Personal Patient Coordinator',
      activeNow: 'Active Now',
      deskDesc: 'Connect directly with our Chief Medical Concierge for instant radiograph preliminary review, airport schedule coordination, and tailored quotes.',
      phoneLabel: 'Direct 24/7 Telephone (English & Multilingual):',
      connectBtn: 'Connect with Concierge Desk →',
      emailLabel: 'Diagnostic X-Ray Submission:',
      hospitalCampus: 'Hospital Campus:',
      addressVal: 'Cevatpaşa Mah. Eski Edirne Asfaltı No:407/409, Istanbul, Turkey',
      licLabel: 'Health Tourism Licensed',
    },
    tr: {
      strip: 'Her Şey Dahil Protokol: Otel + Mercedes Vito Şoför + Tüm İlaçlar Dahil.',
      zeroHidden: 'Sıfır Gizli Maliyet',
      deskSubtitle: 'Uluslararası Doğrudan Danışma Masası',
      deskTitle: 'Kişisel Hasta Koordinatörünüz',
      activeNow: 'Şu An Çevrimiçi',
      deskDesc: 'Anında röntgen değerlendirmesi, havalimanı ve otel planlaması ile kişiselleştirilmiş teklifler için koordinatörümüzle doğrudan görüşün.',
      phoneLabel: '7/24 Doğrudan Telefon & WhatsApp Hattı:',
      connectBtn: 'Konsiyerj Masasına Bağlanın →',
      emailLabel: 'Röntgen & Belge Gönderimi:',
      hospitalCampus: 'Hastane / Klinik Adresi:',
      addressVal: 'Cevatpaşa Mah. Eski Edirne Asfaltı Cad. No:407/409, İstanbul, Türkiye',
      licLabel: 'Sağlık Turizmi Yetki Belgeli',
    },
    de: {
      strip: 'All-Inclusive-Protokoll: Hotel + Mercedes Chauffeur + Alle Medikamente inklusive.',
      zeroHidden: 'Keine versteckten Gebühren',
      deskSubtitle: 'Direkter internationaler Schalter',
      deskTitle: 'Persönlicher Patientenkoordinator',
      activeNow: 'Jetzt online',
      deskDesc: 'Kontaktieren Sie unseren Chefarzt-Koordinator für eine direkte Röntgenbeurteilung und Reiseplanung.',
      phoneLabel: '24/7 Direkttelefon (Deutsch & Mehrsprachig):',
      connectBtn: 'Mit dem Concierge-Desk verbinden →',
      emailLabel: 'Einreichung von Röntgenbildern:',
      hospitalCampus: 'Klinikstandort:',
      addressVal: 'Cevatpaşa Mah. Eski Edirne Asfaltı Cad. No:407/409, Istanbul, Türkei',
      licLabel: 'Zertifizierter Gesundheitstourismus',
    },
    ru: {
      strip: 'Протокол «Все включено»: Отель + Mercedes Vito + Все медикаменты включены.',
      zeroHidden: 'Без скрытых платежей',
      deskSubtitle: 'Международный координационный отдел',
      deskTitle: 'Ваш персональный координатор',
      activeNow: 'Сейчас на связи',
      deskDesc: 'Свяжитесь напрямую с координатором для предварительной оценки снимков, трансфера и расчета стоимости.',
      phoneLabel: 'Круглосуточный телефон и WhatsApp (на русском):',
      connectBtn: 'Связаться с международным отделом →',
      emailLabel: 'Отправка снимков и документов:',
      hospitalCampus: 'Адрес клиники:',
      addressVal: 'Cevatpaşa Mah. Eski Edirne Asfaltı Cad. No:407/409, Стамбул, Турция',
      licLabel: 'Лицензия Минздрава Турции',
    },
    fr: {
      strip: 'Protocole Tout Compris : Hôtel + Chauffeur Mercedes + Tous Médicaments Inclus.',
      zeroHidden: 'Aucun Frais Caché',
      deskSubtitle: 'Service International Direct',
      deskTitle: 'Coordinateur Médical Personnel',
      activeNow: 'En ligne maintenant',
      deskDesc: 'Contactez notre concierge médical pour une analyse immédiate de vos radios, la logistique de votre séjour et un devis personnalisé.',
      phoneLabel: 'Ligne Téléphonique 24/7 (Français & Multilingue) :',
      connectBtn: 'Contacter le Service Conciergerie →',
      emailLabel: 'Envoi des Radiographies & Dossiers :',
      hospitalCampus: 'Site Hospitalier :',
      addressVal: 'Cevatpaşa Mah. Eski Edirne Asfaltı Cad. No:407/409, Istanbul, Turquie',
      licLabel: 'Agréé Tourisme Médical',
    },
    ar: {
      strip: 'بروتوكول شامل كلياً: فندق 5 نجوم + سائق مرسيدس خاص + كافة الأدوية مشمولة.',
      zeroHidden: 'صفر تكاليف خفية',
      deskSubtitle: 'مكتب الاستقبال الدولي المباشر',
      deskTitle: 'منسق المرضى الشخصي المخصص',
      activeNow: 'متاح الآن',
      deskDesc: 'تواصل مباشرة مع كبير منسقي المستشفى للحصول على مراجعة فورية للأشعة وتنسيق حجوزات المطار وعروض الأسعار المفصلة.',
      phoneLabel: 'خط هاتفي وواتساب مباشر 24/7 (باللغة العربية):',
      connectBtn: 'التواصل مع مكتب الكونسيرج ←',
      emailLabel: 'إرسال صور الأشعة والملفات الطبية:',
      hospitalCampus: 'مقر المستشفى:',
      addressVal: 'Cevatpaşa Mah. Eski Edirne Asfaltı Cad. No:407/409, إسطنبول، تركيا',
      licLabel: 'مرخص للسياحة الصحية الدولية',
    },
  }[locale] || {
    strip: 'All-Inclusive Protocol: Hotel + Mercedes Chauffeur + All Meds Included.',
    zeroHidden: 'Zero Hidden Fees',
    deskSubtitle: 'Direct International Desk',
    deskTitle: 'Personal Patient Coordinator',
    activeNow: 'Active Now',
    deskDesc: 'Connect directly with our Chief Medical Concierge for instant radiograph preliminary review, airport schedule coordination, and tailored quotes.',
    phoneLabel: 'Direct 24/7 Telephone (English & Multilingual):',
    connectBtn: 'Connect with Concierge Desk →',
    emailLabel: 'Diagnostic X-Ray Submission:',
    hospitalCampus: 'Hospital Campus:',
    addressVal: 'Cevatpaşa Mah. Eski Edirne Asfaltı No:407/409, Istanbul, Turkey',
    licLabel: 'Health Tourism Licensed',
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-white via-[#F0F4F7]/50 to-white border-b border-slate-200 relative overflow-hidden" id="concierge-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200/90 rounded-3xl shadow-[0_20px_60px_-15px_rgba(27,13,82,0.08)] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Top Decorative Gradient Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#1b0d52] via-[#006972] to-emerald-400 absolute top-0 left-0 right-0" />

          {/* Section Header */}
          <div className="space-y-4 max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold shadow-xs">
              <span className="material-symbols-outlined text-[16px] text-teal-600">verified_user</span>
              <span>{t('badge')}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-mono">{t('cert')}</span>
            </div>

            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-black text-[#1b0d52] tracking-tight">
              {t('title')}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t('desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column (7 cols): 4 VIP Concierge Pillars Grid */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-[#1b0d52]/40 hover:shadow-lg transition-all duration-300 space-y-3 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-[#006972] group-hover:bg-[#1b0d52] group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-teal-800 bg-teal-50/80 px-2 py-0.5 rounded border border-teal-200/60">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="font-headline text-sm sm:text-base font-extrabold text-[#1b0d52] group-hover:text-[#006972] transition-colors leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Patient Reassurance Guarantee Strip */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3 text-xs text-slate-600">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-lg">flight_takeoff</span>
                  <span>{labels.strip}</span>
                </span>
                <span className="font-mono text-[11px] text-[#006972] font-bold hidden sm:inline">
                  {labels.zeroHidden}
                </span>
              </div>
            </div>

            {/* Right Column (5 cols): Luxury 24/7 Coordinator Desk Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1b0d52] via-[#24136e] to-[#006972] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] text-teal-300 font-mono uppercase tracking-wider font-extrabold block">
                      {labels.deskSubtitle}
                    </span>
                    <h3 className="font-headline text-lg sm:text-xl font-bold text-white mt-0.5">
                      {labels.deskTitle}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[11px] font-bold text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{labels.activeNow}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed">
                  {labels.deskDesc}
                </p>

                {/* Contact List */}
                <div className="space-y-3 pt-2 text-xs">
                  <a
                    href="tel:+905521617377"
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors group"
                  >
                    <span className="material-symbols-outlined text-teal-300 text-xl shrink-0 mt-0.5">call</span>
                    <div>
                      <div className="text-slate-300 text-[11px]">{labels.phoneLabel}</div>
                      <div className="font-bold text-white group-hover:text-teal-200 text-sm font-mono mt-0.5">
                        +90 552 161 7377
                      </div>
                    </div>
                  </a>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#1b0d52] font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                  >
                    <span>{labels.connectBtn}</span>
                  </Link>

                  <a
                    href="mailto:international@dentaktifglobal.com"
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors group"
                  >
                    <span className="material-symbols-outlined text-teal-300 text-xl shrink-0 mt-0.5">mail</span>
                    <div>
                      <div className="text-slate-300 text-[11px]">{labels.emailLabel}</div>
                      <div className="font-bold text-white group-hover:text-teal-200 text-xs font-mono mt-0.5">
                        international@dentaktifglobal.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="material-symbols-outlined text-teal-300 text-xl shrink-0 mt-0.5">location_on</span>
                    <div>
                      <div className="text-slate-300 text-[11px]">{labels.hospitalCampus}</div>
                      <div className="font-medium text-slate-100 text-xs mt-0.5">
                        {labels.addressVal}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Licensure Stamp */}
              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs relative z-10">
                <span className="text-emerald-300 font-bold flex items-center gap-1.5 text-[11px]">
                  <span className="material-symbols-outlined text-base">verified_user</span>
                  <span>{labels.licLabel}</span>
                </span>
                <span className="font-mono text-slate-200 font-extrabold bg-white/15 px-2.5 py-0.5 rounded text-[11px]">
                  #2026034015610080000425805
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
