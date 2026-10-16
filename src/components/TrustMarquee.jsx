import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function TrustMarquee() {
  const { lang } = useLanguage();

  const BADGES_BY_LANG = {
    ar: [
      { title: "مرخص من وزارة الصحة ومؤسسة USHAŞ", detail: "مستشفى معتمد للسياحة الصحية الدولية" },
      { title: "شريك Straumann® البلاتيني السويسري", detail: "شريك جراحي معتمد رسمياً" },
      { title: "معتمد بمعيار ISO 9001:2015", detail: "معايير الجودة الدولية الموثقة" },
      { title: "مختبر Ivoclar Vivadent® E-Max", detail: "مختبر خزف رئيسي معتمد" },
      { title: "تقييم Trustpilot 4.9 / 5.0", detail: "+2,400 تقييم موثق للمرضى" },
      { title: "ضمان المصنع مدى الحياة", detail: "جواز سفر رسمي مع باركود الزرعات" }
    ],
    de: [
      { title: "Gesundheitsministerium & USHAŞ", detail: "Lizenziertes Gesundheitstourismus-Zentrum" },
      { title: "Swiss Straumann® Platinum", detail: "Offizieller chirurgischer Partner" },
      { title: "ISO 9001:2015 Zertifiziert", detail: "Internationale Qualitätsstandards" },
      { title: "Ivoclar Vivadent® E-Max", detail: "Zertifiziertes Meisterlabor" },
      { title: "Trustpilot 4.9 / 5.0", detail: "2.400+ verifizierte Bewertungen" },
      { title: "Lebenslange Herstellergarantie", detail: "Offizieller Pass & Barcode" }
    ],
    ru: [
      { title: "Минздрав Турции и USHAŞ", detail: "Лицензированный центр медицинского туризма" },
      { title: "Swiss Straumann® Platinum", detail: "Официальный хирургический партнер" },
      { title: "Сертификация ISO 9001:2015", detail: "Международные стандарты качества" },
      { title: "Ivoclar Vivadent® E-Max", detail: "Сертифицированная зуботехническая лаборатория" },
      { title: "Trustpilot 4.9 / 5.0", detail: "Более 2400 проверенных отзывов" },
      { title: "Пожизненная гарантия производителя", detail: "Официальный паспорт и штрихкод" }
    ],
    fr: [
      { title: "Ministère de la Santé & USHAŞ", detail: "Centre Agréé de Tourisme Médical" },
      { title: "Partenaire Platine Straumann® Suisse", detail: "Partenaire Chirurgical Officiel" },
      { title: "Certifié ISO 9001:2015", detail: "Normes Internationales de Qualité" },
      { title: "Ivoclar Vivadent® E-Max", detail: "Laboratoire Maître Céramiste Agréé" },
      { title: "Trustpilot 4.9 / 5.0", detail: "+2 400 avis patients vérifiés" },
      { title: "Garantie Fabricant à Vie", detail: "Passeport Officiel & Code-Barres" }
    ],
    en: [
      { title: "Ministry of Health & USHAŞ", detail: "Licensed Health Tourism Hospital" },
      { title: "Swiss Straumann® Platinum", detail: "Official Surgical Partner" },
      { title: "ISO 9001:2015 Certified", detail: "International Quality Standards" },
      { title: "Ivoclar Vivadent® E-Max", detail: "Certified Master Ceramist Lab" },
      { title: "Trustpilot 4.9 / 5.0", detail: "2,400+ Verified Patient Reviews" },
      { title: "Lifetime Manufacturer Warranty", detail: "Official Passport & Barcode" }
    ]
  };

  const trustBadges = BADGES_BY_LANG[lang] || BADGES_BY_LANG.en;

  const renderItems = (items) => items.map((item, idx) => (
    <div key={idx} className="flex items-center gap-3 px-6 py-2 border-r border-slate-200/60 last:border-r-0">
      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
      <div>
        <strong className="block text-xs font-bold text-slate-800 whitespace-nowrap">{item.title}</strong>
        <span className="text-[11px] text-slate-500 whitespace-nowrap block">{item.detail}</span>
      </div>
    </div>
  ));

  return (
    <section className="py-4 bg-[#FAFBFC] border-y border-slate-200 overflow-hidden">
      <div className="marquee-container flex">
        <div className="marquee-track flex shrink-0 items-center">
          {renderItems(trustBadges)}
          {renderItems(trustBadges)}
        </div>
      </div>
    </section>
  );
}
