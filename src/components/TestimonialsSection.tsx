'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

interface Testimonial {
  name: string;
  location: string;
  flag: string;
  treatment: string;
  quote: string;
  highlight: string;
}

const REVIEWS_BY_LOCALE: Record<string, Testimonial[]> = {
  en: [
    {
      name: 'James Wilson',
      location: 'Manchester, United Kingdom',
      flag: '🇬🇧',
      treatment: '20 Ivoclar E-Max® Veneers (BL1)',
      quote:
        '“I was quoted over £17,500 by private clinics in the UK for a full set of veneers. At Dent Aktif, my entire package with 5-star hotel and private chauffeur was £4,250. The master ceramist in their on-site lab crafted each tooth to perfection.”',
      highlight: 'Saved ~£13,200 with 5-star luxury care',
    },
    {
      name: 'Anke Becker',
      location: 'Frankfurt, Germany',
      flag: '🇩🇪',
      treatment: 'Swiss Straumann® All-on-6 Rehabilitation',
      quote:
        '“German precision right in Istanbul. Having original Swiss Straumann implants with official guarantee passports gave me complete confidence. The surgery was 100% painless thanks to computer-guided digital templates.”',
      highlight: 'Full chewing strength restored in 5 days',
    },
    {
      name: 'Laurent Dubois',
      location: 'Lyon, France',
      flag: '🇫🇷',
      treatment: '16 Units Katana™ Monolithic Zirconia',
      quote:
        '“L’accueil était exceptionnel du premier jour jusqu’au départ. La clinique est ultra-moderne, les scanners 3D sont impressionnants, et le chauffeur VIP Mercedes nous a conduits partout sans stress.”',
      highlight: 'Exceptionnelle clinique & résultat parfait',
    },
    {
      name: 'Emily Campbell',
      location: 'Dublin, Ireland',
      flag: '🇮🇪',
      treatment: 'Hollywood Smile & Laser Gingivectomy',
      quote:
        '“I was terrified of dentists for years, but the painless anesthesia and the gentle care of the surgical team completely eliminated my anxiety. My smile looks like something out of a magazine.”',
      highlight: 'Zero pain and life-changing smile confidence',
    },
  ],
  tr: [
    {
      name: 'James Wilson',
      location: 'Manchester, İngiltere',
      flag: '🇬🇧',
      treatment: '20 Üye Ivoclar E-Max® Lamine (BL1)',
      quote:
        '“İngiltere’deki özel kliniklerde 17.500 £ üzeri teklif almıştım. Dent Aktif’te 5 yıldızlı otel ve özel VIP şoför dahil tüm paketim 4.250 £ tuttu. Bünyelerindeki laboratuvarda seramist dişlerimi tam istediğim doğallıkta işledi.”',
      highlight: '5 yıldızlı lüks hizmetle ~13.200 £ doğrudan tasarruf',
    },
    {
      name: 'Anke Becker',
      location: 'Frankfurt, Almanya',
      flag: '🇩🇪',
      treatment: 'İsviçre Straumann® All-on-6 Tam Çene',
      quote:
        '“İstanbul’un kalbinde Alman disiplini ve kusursuz hassasiyet. Orijinal İsviçre Straumann garanti pasaportu almak bana tam güven verdi. 3D dijital cerrahi rehber sayesinde operasyon tamamen ağrısız geçti.”',
      highlight: '5 günde tam çiğneme konforu ve yeni dişler',
    },
    {
      name: 'Laurent Dubois',
      location: 'Lyon, Fransa',
      flag: '🇫🇷',
      treatment: '16 Üye Katana™ Monolitik Zirkonyum',
      quote:
        '“İlk günden dönüş anına kadar karşılama ve ilgi kusursuzdu. Klinik inanılmaz modern, 3D tomografi tarayıcıları son teknoloji ve Mercedes VIP transfer her yere stressiz ulaştırdı. Herkese tavsiye ediyorum.”',
      highlight: 'Kusursuz klinik mimari & mükemmel sonuç',
    },
    {
      name: 'Emily Campbell',
      location: 'Dublin, İrlanda',
      flag: '🇮🇪',
      treatment: 'Hollywood Smile & Lazer Diş Eti Şekillendirme',
      quote:
        '“Yıllarca diş hekimi korkum vardı ama ağrısız anestezi ve cerrahi ekibin nezaketi tüm endişemi sildi. Yeni gülüşüm dergilerden fırlamış gibi duruyor ama tamamen kendi dişim gibi hissettiriyor.”',
      highlight: 'Sıfır acı & hayatımı değiştiren gülüş özgüveni',
    },
  ],
  de: [
    {
      name: 'James Wilson',
      location: 'Manchester, Großbritannien',
      flag: '🇬🇧',
      treatment: '20 Ivoclar E-Max® Veneers (BL1)',
      quote:
        '“In England wurden mir über 17.500 £ veranschlagt. Bei Dent Aktif kostete mein gesamtes All-Inclusive-Paket mit 5-Sterne-Hotel und Chauffeur nur 4.250 £. Der Keramikmeister im hauseigenen Labor fertigte jeden Zahn perfekt an.”',
      highlight: 'Rund 13.200 £ gespart bei erstklassiger Betreuung',
    },
    {
      name: 'Anke Becker',
      location: 'Frankfurt, Deutschland',
      flag: '🇩🇪',
      treatment: 'Schweizer Straumann® All-on-6 Rehabilitation',
      quote:
        '“Deutsche Präzision mitten in Istanbul. Die originalen Straumann-Implantate mit offiziellem Garantiepass gaben mir maximale Sicherheit. Dank digitaler Schablonen war die OP vollkommen schmerzfrei.”',
      highlight: 'Volle Kaukraft in nur 5 Tagen wiedererlangt',
    },
    {
      name: 'Laurent Dubois',
      location: 'Lyon, Frankreich',
      flag: '🇫🇷',
      treatment: '16 Einheiten Katana™ Monolithisches Zirkon',
      quote:
        '“Der Empfang war vom ersten Tag an außergewöhnlich. Die Klinik ist hochmodern, die 3D-Scans beeindruckend und der Mercedes-VIP-Transfer absolut stressfrei.”',
      highlight: 'Hervorragende Klinik & perfektes Ergebnis',
    },
    {
      name: 'Emily Campbell',
      location: 'Dublin, Irland',
      flag: '🇮🇪',
      treatment: 'Hollywood Smile & Laser-Gingivektomie',
      quote:
        '“Ich hatte jahrelang Angst vor dem Zahnarzt, aber die schmerzfreie Betäubung und das einfühlsame Team haben mir jede Sorge genommen. Mein Lächeln sieht umwerfend aus!”',
      highlight: 'Schmerzfreie Behandlung & neues Selbstvertrauen',
    },
  ],
  ru: [
    {
      name: 'Джеймс Уилсон',
      location: 'Манчестер, Великобритания',
      flag: '🇬🇧',
      treatment: '20 виниров Ivoclar E-Max® (BL1)',
      quote:
        '“В Англии мне выставили счет более 17 500 £. В Dent Aktif весь пакет с 5-звездочным отелем и личным водителем обошелся в 4 250 £. Мастер-керамист в лаборатории клиники создал естественную и идеальную форму.”',
      highlight: 'Экономия ~13 200 £ с премиальным комфортом',
    },
    {
      name: 'Анке Беккер',
      location: 'Франкфурт, Германия',
      flag: '🇩🇪',
      treatment: 'Имплантация Straumann® All-on-6',
      quote:
        '“Немецкая точность в Стамбуле. Оригинальные швейцарские импланты с международным паспортом дали мне 100% уверенность. Операция по 3D-шаблону прошла абсолютно безболезненно.”',
      highlight: 'Полное восстановление функции жевания за 5 дней',
    },
    {
      name: 'Лоран Дюбуа',
      location: 'Лион, Франция',
      flag: '🇫🇷',
      treatment: '16 коронок из циркония Katana™',
      quote:
        '“Встреча и сервис были безупречными. Клиника ультрасовременная, 3D-томографы впечатляют, а персональный Mercedes Vito возил нас без малейшего стресса.”',
      highlight: 'Превосходная клиника и безупречный результат',
    },
    {
      name: 'Эмили Кэмпбелл',
      location: 'Дублин, Ирландия',
      flag: '🇮🇪',
      treatment: 'Голливудская улыбка и лазерная пластика десны',
      quote:
        '“Я годами боялась стоматологов, но мягкая безыгольная анестезия полностью сняла страх. Улыбка выглядит великолепно и ощущается как свои родные зубы.”',
      highlight: 'Ноль боли и улыбка мечты',
    },
  ],
  fr: [
    {
      name: 'James Wilson',
      location: 'Manchester, Royaume-Uni',
      flag: '🇬🇧',
      treatment: '20 Facettes Ivoclar E-Max® (BL1)',
      quote:
        '“Au Royaume-Uni, le devis dépassait 17 500 £. Chez Dent Aktif, l’ensemble de mon séjour avec hôtel 5 étoiles et chauffeur privé m’a coûté 4 250 £. Le maître céramiste a façonné chaque dent à la perfection.”',
      highlight: 'Économie de ~13 200 £ avec soins de luxe',
    },
    {
      name: 'Anke Becker',
      location: 'Francfort, Allemagne',
      flag: '🇩🇪',
      treatment: 'Réhabilitation All-on-6 Straumann® Suisse',
      quote:
        '“Une précision chirurgicale irréprochable. Disposer d’implants Straumann d’origine avec passeport international m’a apporté une sérénité totale. Pose guidée par ordinateur 100% indolore.”',
      highlight: 'Pleine mastication retrouvée en 5 jours',
    },
    {
      name: 'Laurent Dubois',
      location: 'Lyon, France',
      flag: '🇫🇷',
      treatment: '16 Couronnes Zircone Katana™ Monolithiques',
      quote:
        '“L’accueil était exceptionnel du premier jour jusqu’au départ. La clinique est ultra-moderne, les scanners 3D sont impressionnants, et le chauffeur VIP Mercedes nous a conduits partout sans stress.”',
      highlight: 'Clinique d’exception & résultat parfait',
    },
    {
      name: 'Emily Campbell',
      location: 'Dublin, Irlande',
      flag: '🇮🇪',
      treatment: 'Hollywood Smile & Gingivectomie Laser',
      quote:
        '“J’avais une phobie du dentiste depuis l’enfance, mais la douceur de l’équipe chirurgicale a dissipé toute anxiété. Mon sourire semble sorti d’un magazine tout en restant très naturel.”',
      highlight: 'Zéro douleur & confiance retrouvée',
    },
  ],
  ar: [
    {
      name: 'جيمس ويلسون',
      location: 'مانشستر، المملكة المتحدة',
      flag: '🇬🇧',
      treatment: '20 قشرة فينير Ivoclar E-Max® (BL1)',
      quote:
        '“تلقيت عرضاً بأكثر من 17,500 جنيه إسترليني في عيادات لندن. في دنت أكتيف، كانت باقتي الشاملة بالكامل مع فندق 5 نجوم وسائق خاص 4,250 جنيهاً فقط. فنان الخزف في مختبرهم الداخلي صنع كل سن بإتقان مذهل.”',
      highlight: 'توفير ~13,200 جنيه إسترليني مع رعاية فندقية فاخرة',
    },
    {
      name: 'أنكي بيكر',
      location: 'فرانكفورت، ألمانيا',
      flag: '🇩🇪',
      treatment: 'إعادة تأهيل All-on-6 بزرعات Straumann® السويسرية',
      quote:
        '“دقة وجودة ألمانية في قلب إسطنبول. الحصول على زرعات Straumann الأصلية مع جوازات السفر الرسمية منحني ثقة مطلقة. الجراحة تمت بدون أي ألم على الإطلاق بفضل القوالب الرقمية الموجهة.”',
      highlight: 'استعادة كامل قوة المضغ الطبيعية خلال 5 أيام',
    },
    {
      name: 'لوران دوبوا',
      location: 'ليون، فرنسا',
      flag: '🇫🇷',
      treatment: '16 تاج زيركون متجانس Katana™',
      quote:
        '“الاستقبال والخدمة كانا استثنائيين من اليوم الأول وحتى المغادرة. المستشفى فائق الحداثة، وأجهزة الأشعة 3D مبهرة، وسائق المرسيدس فيتو VIP كان يرافقنا في كل خطوة براحة تامة.”',
      highlight: 'مستشفى استثنائي ونتيجة علاجية مثالية',
    },
    {
      name: 'إميلي كامبل',
      location: 'دبلن، أيرلندا',
      flag: '🇮🇪',
      treatment: 'ابتسامة هوليوود وتجميل اللثة بالليزر',
      quote:
        '“كنت أعاني من فوبيا أطباء الأسنان لسنوات طويلة، لكن التخدير المريح بدون ألم والتعامل الراقي من الفريق الجراحي أزالا خوفي تماماً. ابتسامتي الجديدة تبدو كأنها من غلاف مجلة.”',
      highlight: 'صفر ألم وثقة متجددة بالابتسامة غيرت حياتي',
    },
  ],
};

const STRIP_BADGES_BY_LOCALE: Record<string, string[]> = {
  en: [
    '100% Genuine Manufacturer Passports',
    '5-Star Levent Hotel Accommodations',
    'VIP Mercedes Vito Transfers Included',
    'Lifetime Cross-Border Follow-up Support',
  ],
  tr: [
    '%100 Orijinal Üretici Garanti Pasaportu',
    '5 Yıldızlı Partner Otel Konaklaması',
    'Özel Mercedes Vito VIP Transfer Dahil',
    'Ömür Boyu Uluslararası Takip Desteği',
  ],
  de: [
    '100% Originale Hersteller-Garantiepässe',
    '5-Sterne-Partnerhotel-Unterkunft',
    'VIP Mercedes Vito Transfers inklusive',
    'Lebenslange grenzüberschreitende Nachsorge',
  ],
  ru: [
    '100% оригинальные международные паспорта',
    'Проживание в 5-звездочном отеле',
    'VIP-трансферы на Mercedes Vito включены',
    'Пожизненное дистанционное наблюдение',
  ],
  fr: [
    'Passeports Garantie Fabricant 100% d’Origine',
    'Hébergement en Hôtel 5 Étoiles',
    'Transferts Privés VIP Mercedes Vito Inclus',
    'Suivi Médical International à Vie',
  ],
  ar: [
    'جوازات سفر وضمان 100% أصلية من المصنع',
    'إقامة فاخرة في فنادق ليفنت الشريكة 5 نجوم',
    'تنقلات خاصة بسيارات مرسيدس فيتو VIP مشمولة',
    'متابعة ورعاية طبية دولية مدى الحياة',
  ],
};

export default function TestimonialsSection() {
  const t = useTranslations('testimonialsSection');
  const locale = useLocale();

  const reviews = REVIEWS_BY_LOCALE[locale] || REVIEWS_BY_LOCALE.en;
  const stripBadges = STRIP_BADGES_BY_LOCALE[locale] || STRIP_BADGES_BY_LOCALE.en;

  const verifiedLabel = {
    en: 'Verified',
    tr: 'Doğrulandı',
    de: 'Verifiziert',
    ru: 'Проверено',
    fr: 'Vérifié',
    ar: 'معتمد وموثق',
  }[locale] || 'Verified';

  return (
    <section className="w-full py-20 bg-[#F0F4F7]/60 border-b border-slate-200" id="patient-reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
            <span className="material-symbols-outlined text-[16px] text-amber-500">star</span>
            <span>{t('badge')}</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#211164] tracking-tight">
            {t('title')}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {t('desc')}
          </p>
        </div>

        {/* Grid of Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#211164] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Rating stars & flag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-xl" title={review.location}>
                    {review.flag}
                  </span>
                </div>

                {/* Treatment Badge */}
                <div className="inline-block px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200/60 text-[11px] font-bold text-teal-800">
                  {review.treatment}
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  {review.quote}
                </p>
              </div>

              {/* Patient Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-headline text-xs font-bold text-slate-900">
                    {review.name}
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[13px]">verified</span>
                    {verifiedLabel}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400">
                  {review.location}
                </div>
                <div className="text-[10px] font-semibold text-[#006972] pt-0.5">
                  {review.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-around gap-4 text-xs font-bold text-slate-600">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">verified</span>
            <span>{stripBadges[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">hotel</span>
            <span>{stripBadges[1]}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">airport_shuttle</span>
            <span>{stripBadges[2]}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">support_agent</span>
            <span>{stripBadges[3]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
