'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

interface Testimonial {
  name: string;
  location: string;
  date: string;
  flag: string;
  treatment: string;
  quote: string;
  highlight: string;
  image?: string;
}

const GoogleIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

const REVIEWER_AVATARS: Record<string, string> = {
  'James Wilson': '/images/testimonials/hasta-1.jpg',
  'Anke Becker': '/images/testimonials/hasta-2.jpg',
  'Laurent Dubois': '/images/testimonials/hasta-3.jpg',
  'Emily Campbell': '/images/testimonials/hasta-4.jpg',
  'Джеймс Уилсон': '/images/testimonials/hasta-1.jpg',
  'Анке Беккер': '/images/testimonials/hasta-2.jpg',
  'Лоран Дюбуа': '/images/testimonials/hasta-3.jpg',
  'Эмили Кэмпбелл': '/images/testimonials/hasta-4.jpg',
  'جيمس ويلسون': '/images/testimonials/hasta-1.jpg',
  'أنكي بيكر': '/images/testimonials/hasta-2.jpg',
  'لوران دوبوا': '/images/testimonials/hasta-3.jpg',
  'إميلي كامبل': '/images/testimonials/hasta-4.jpg',
};

const DEFAULT_AVATARS_BY_INDEX = [
  '/images/testimonials/hasta-1.jpg',
  '/images/testimonials/hasta-2.jpg',
  '/images/testimonials/hasta-3.jpg',
  '/images/testimonials/hasta-4.jpg',
];

const REVIEWS_BY_LOCALE: Record<string, Testimonial[]> = {
  en: [
    {
      name: 'James Wilson',
      location: 'Manchester, United Kingdom',
      date: '2 weeks ago',
      flag: '🇬🇧',
      treatment: '20 Ivoclar E-Max® Veneers (BL1)',
      quote:
        '“I was quoted over £17,500 by private clinics in the UK for a full set of veneers. At Dent Aktif, my entire package with 5-star hotel and private chauffeur was £4,250. The master ceramist in their on-site lab crafted each tooth to perfection.”',
      highlight: 'Saved ~£13,200 with 5-star luxury care',
    },
    {
      name: 'Anke Becker',
      location: 'Frankfurt, Germany',
      date: '3 weeks ago',
      flag: '🇩🇪',
      treatment: 'Swiss Straumann® All-on-6 Rehabilitation',
      quote:
        '“German precision right in Istanbul. Having original Swiss Straumann implants with official guarantee passports gave me complete confidence. The surgery was 100% painless thanks to computer-guided digital templates.”',
      highlight: 'Full chewing strength restored in 5 days',
    },
    {
      name: 'Laurent Dubois',
      location: 'Lyon, France',
      date: '1 month ago',
      flag: '🇫🇷',
      treatment: '16 Units Katana™ Monolithic Zirconia',
      quote:
        '“L’accueil était exceptionnel du premier jour jusqu’au départ. La clinique est ultra-moderne, les scanners 3D sont impressionnants, et le chauffeur VIP Mercedes nous a conduits partout sans stress.”',
      highlight: 'Exceptionnelle clinique & résultat parfait',
    },
    {
      name: 'Emily Campbell',
      location: 'Dublin, Ireland',
      date: '2 months ago',
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
      date: '2 hafta önce',
      flag: '🇬🇧',
      treatment: '20 Üye Ivoclar E-Max® Lamine (BL1)',
      quote:
        '“İngiltere’deki özel kliniklerde 17.500 £ üzeri teklif almıştım. Dent Aktif’te 5 yıldızlı otel ve özel VIP şoför dahil tüm paketim 4.250 £ tuttu. Bünyelerindeki laboratuvarda seramist dişlerimi tam istediğim doğallıkta işledi.”',
      highlight: '5 yıldızlı lüks hizmetle ~13.200 £ doğrudan tasarruf',
    },
    {
      name: 'Anke Becker',
      location: 'Frankfurt, Almanya',
      date: '3 hafta önce',
      flag: '🇩🇪',
      treatment: 'İsviçre Straumann® All-on-6 Tam Çene',
      quote:
        '“İstanbul’un kalbinde Alman disiplini ve kusursuz hassasiyet. Orijinal İsviçre Straumann garanti pasaportu almak bana tam güven verdi. 3D dijital cerrahi rehber sayesinde operasyon tamamen ağrısız geçti.”',
      highlight: '5 günde tam çiğneme konforu ve yeni dişler',
    },
    {
      name: 'Laurent Dubois',
      location: 'Lyon, Fransa',
      date: '1 ay önce',
      flag: '🇫🇷',
      treatment: '16 Üye Katana™ Monolitik Zirkonyum',
      quote:
        '“İlk günden dönüş anına kadar karşılama ve ilgi kusursuzdu. Klinik inanılmaz modern, 3D tomografi tarayıcıları son teknoloji ve Mercedes VIP transfer her yere stressiz ulaştırdı. Herkese tavsiye ediyorum.”',
      highlight: 'Kusursuz klinik mimari & mükemmel sonuç',
    },
    {
      name: 'Emily Campbell',
      location: 'Dublin, İrlanda',
      date: '2 ay önce',
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
      date: 'vor 2 Wochen',
      flag: '🇬🇧',
      treatment: '20 Ivoclar E-Max® Veneers (BL1)',
      quote:
        '“In England wurden mir über 17.500 £ veranschlagt. Bei Dent Aktif kostete mein gesamtes All-Inclusive-Paket mit 5-Sterne-Hotel und Chauffeur nur 4.250 £. Der Keramikmeister im hauseigenen Labor fertigte jeden Zahn perfekt an.”',
      highlight: 'Rund 13.200 £ gespart bei erstklassiger Betreuung',
    },
    {
      name: 'Anke Becker',
      location: 'Frankfurt, Deutschland',
      date: 'vor 3 Wochen',
      flag: '🇩🇪',
      treatment: 'Schweizer Straumann® All-on-6 Rehabilitation',
      quote:
        '“Deutsche Präzision mitten in Istanbul. Die originalen Straumann-Implantate mit offiziellem Garantiepass gaben mir maximale Sicherheit. Dank digitaler Schablonen war die OP vollkommen schmerzfrei.”',
      highlight: 'Volle Kaukraft in nur 5 Tagen wiedererlangt',
    },
    {
      name: 'Laurent Dubois',
      location: 'Lyon, Frankreich',
      date: 'vor 1 Monat',
      flag: '🇫🇷',
      treatment: '16 Einheiten Katana™ Monolithisches Zirkon',
      quote:
        '“Der Empfang war vom ersten Tag an außergewöhnlich. Die Klinik ist hochmodern, die 3D-Scans beeindruckend und der Mercedes-VIP-Transfer absolut stressfrei.”',
      highlight: 'Hervorragende Klinik & perfektes Ergebnis',
    },
    {
      name: 'Emily Campbell',
      location: 'Dublin, Irland',
      date: 'vor 2 Monaten',
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
      date: '2 недели назад',
      flag: '🇬🇧',
      treatment: '20 виниров Ivoclar E-Max® (BL1)',
      quote:
        '“В Англии мне выставили счет более 17 500 £. В Dent Aktif весь пакет с 5-звездочным отелем и личным водителем обошелся в 4 250 £. Мастер-керамист в лаборатории клиники создал естественную и идеальную форму.”',
      highlight: 'Экономия ~13 200 £ с премиальным комфортом',
    },
    {
      name: 'Анке Беккер',
      location: 'Франкфурт, Германия',
      date: '3 недели назад',
      flag: '🇩🇪',
      treatment: 'Имплантация Straumann® All-on-6',
      quote:
        '“Немецкая точность в Стамбуле. Оригинальные швейцарские импланты с международным паспортом дали мне 100% уверенность. Операция по 3D-шаблону прошла абсолютно безболезненно.”',
      highlight: 'Полное восстановление функции жевания за 5 дней',
    },
    {
      name: 'Лоран Дюбуа',
      location: 'Лион, Франция',
      date: '1 месяц назад',
      flag: '🇫🇷',
      treatment: '16 коронок из циркония Katana™',
      quote:
        '“Встреча и сервис были безупречными. Клиника ультрасовременная, 3D-томографы впечатляют, а персональный Mercedes Vito возил нас без малейшего стресса.”',
      highlight: 'Превосходная клиника и безупречный результат',
    },
    {
      name: 'Эмили Кэмпбелл',
      location: 'Дублин, Ирландия',
      date: '2 месяца назад',
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
      date: 'il y a 2 semaines',
      flag: '🇬🇧',
      treatment: '20 Facettes Ivoclar E-Max® (BL1)',
      quote:
        '“Au Royaume-Uni, le devis dépassait 17 500 £. Chez Dent Aktif, l’ensemble de mon séjour avec hôtel 5 étoiles et chauffeur privé m’a coûté 4 250 £. Le maître céramiste a façonné chaque dent à la perfection.”',
      highlight: 'Économie de ~13 200 £ avec soins de luxe',
    },
    {
      name: 'Anke Becker',
      location: 'Francfort, Allemagne',
      date: 'il y a 3 semaines',
      flag: '🇩🇪',
      treatment: 'Réhabilitation All-on-6 Straumann® Suisse',
      quote:
        '“Une précision chirurgicale irréprochable. Disposer d’implants Straumann d’origine avec passeport international m’a apporté une sérénité totale. Pose guidée par ordinateur 100% indolore.”',
      highlight: 'Pleine mastication retrouvée en 5 jours',
    },
    {
      name: 'Laurent Dubois',
      location: 'Lyon, France',
      date: 'il y a 1 mois',
      flag: '🇫🇷',
      treatment: '16 Couronnes Zircone Katana™ Monolithiques',
      quote:
        '“L’accueil était exceptionnel du premier jour jusqu’au départ. La clinique est ultra-moderne, les scanners 3D sont impressionnants, et le chauffeur VIP Mercedes nous a conduits partout sans stress.”',
      highlight: 'Clinique d’exception & résultat parfait',
    },
    {
      name: 'Emily Campbell',
      location: 'Dublin, Irlande',
      date: 'il y a 2 mois',
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
      date: 'منذ أسبوعين',
      flag: '🇬🇧',
      treatment: '20 قشرة فينير Ivoclar E-Max® (BL1)',
      quote:
        '“تلقيت عرضاً بأكثر من 17,500 جنيه إسترليني في عيادات لندن. في دنت أكتيف، كانت باقتي الشاملة بالكامل مع فندق 5 نجوم وسائق خاص 4,250 جنيهاً فقط. فنان الخزف في مختبرهم الداخلي صنع كل سن بإتقان مذهل.”',
      highlight: 'توفير ~13,200 جنيه إسترليني مع رعاية فندقية فاخرة',
    },
    {
      name: 'أنكي بيكر',
      location: 'فرانكفورت، ألمانيا',
      date: 'منذ 3 أسابيع',
      flag: '🇩🇪',
      treatment: 'إعادة تأهيل All-on-6 بزرعات Straumann® السويسرية',
      quote:
        '“دقة وجودة ألمانية في قلب إسطنبول. الحصول على زرعات Straumann الأصلية مع جوازات السفر الرسمية منحني ثقة مطلقة. الجراحة تمت بدون أي ألم على الإطلاق بفضل القوالب الرقمية الموجهة.”',
      highlight: 'استعادة كامل قوة المضغ الطبيعية خلال 5 أيام',
    },
    {
      name: 'لوران دوبوا',
      location: 'ليون، فرنسا',
      date: 'منذ شهر',
      flag: '🇫🇷',
      treatment: '16 تاج زيركون متجانس Katana™',
      quote:
        '“الاستقبال والخدمة كانا استثنائيين من اليوم الأول وحتى المغادرة. المستشفى فائق الحداثة، وأجهزة الأشعة 3D مبهرة، وسائق المرسيدس فيتو VIP كان يرافقنا في كل خطوة براحة تامة.”',
      highlight: 'مستشفى استثنائي ونتيجة علاجية مثالية',
    },
    {
      name: 'إميلي كامبل',
      location: 'دبلن، أيرلندا',
      date: 'منذ شهرين',
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
    'Google Maps Verified Healthcare Facility (4.8 ★)',
    '100% Genuine Manufacturer Passports',
    '5-Star Levent Hotel Accommodations',
    'VIP Mercedes Vito Transfers Included',
  ],
  tr: [
    'Google Haritalar Onaylı Sağlık Merkezi (4.8 ★)',
    '%100 Orijinal Üretici Garanti Pasaportu',
    '5 Yıldızlı Partner Otel Konaklaması',
    'Özel Mercedes Vito VIP Transfer Dahil',
  ],
  de: [
    'Google Maps Verifizierte Zahnklinik (4.8 ★)',
    '100% Originale Hersteller-Garantiepässe',
    '5-Sterne-Partnerhotel-Unterkunft',
    'VIP Mercedes Vito Transfers inklusive',
  ],
  ru: [
    'Верифицированная клиника в Google Maps (4.8 ★)',
    '100% оригинальные международные паспорта',
    'Проживание в 5-звездочном отеле',
    'VIP-трансферы на Mercedes Vito включены',
  ],
  fr: [
    'Établissement Médical Vérifié sur Google Maps (4.8 ★)',
    'Passeports Garantie Fabricant 100% d’Origine',
    'Hébergement en Hôtel 5 Étoiles',
    'Transferts Privés VIP Mercedes Vito Inclus',
  ],
  ar: [
    'مركز طبي معتمد على خرائط Google (4.8 ★)',
    'جوازات سفر وضمان 100% أصلية من المصنع',
    'إقامة فاخرة في فنادق ليفنت الشريكة 5 نجوم',
    'تنقلات خاصة بسيارات مرسيدس فيتو VIP مشمولة',
  ],
};

export default function TestimonialsSection() {
  const t = useTranslations('testimonialsSection');
  const locale = useLocale();

  const reviews = REVIEWS_BY_LOCALE[locale] || REVIEWS_BY_LOCALE.en;
  const stripBadges = STRIP_BADGES_BY_LOCALE[locale] || STRIP_BADGES_BY_LOCALE.en;

  const verifiedLabel = {
    en: 'Verified Google Review',
    tr: 'Doğrulanmış Google Yorumu',
    de: 'Verifizierte Google-Bewertung',
    ru: 'Проверенный отзыв в Google',
    fr: 'Avis Google Vérifié',
    ar: 'تقييم Google معتمد',
  }[locale] || 'Verified Google Review';

  const viewAllLabel = {
    en: 'Read All 230+ Reviews on Google Maps →',
    tr: 'Google Haritalar’da Tüm 230+ Yorumu İnceleyin →',
    de: 'Alle 230+ Google-Bewertungen auf Google Maps ansehen →',
    ru: 'Смотреть все 230+ отзывов на Google Maps →',
    fr: 'Voir tous les 230+ avis sur Google Maps →',
    ar: 'عرض جميع التقييمات (230+) على خرائط Google ←',
  }[locale] || 'Read All 230+ Reviews on Google Maps →';

  return (
    <section className="w-full py-20 bg-[#F0F4F7]/60 border-b border-slate-200" id="patient-reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-bold text-slate-800">
            <GoogleIcon className="w-4 h-4 shrink-0" />
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
          {reviews.map((review, idx) => {
            const avatarSrc =
              review.image ||
              REVIEWER_AVATARS[review.name] ||
              DEFAULT_AVATARS_BY_INDEX[idx % DEFAULT_AVATARS_BY_INDEX.length];

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#211164] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Rating stars & Google Icon & Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <GoogleIcon className="w-4 h-4 shrink-0" />
                      <div className="flex items-center gap-0.5 text-[#FBBC05]">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-[16px]">
                            star
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                      <span>{review.date}</span>
                      <span className="text-sm" title={review.location}>
                        {review.flag}
                      </span>
                    </div>
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
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center gap-3.5">
                  <div className="relative shrink-0">
                    <img
                      src={avatarSrc}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover object-[center_20%] border-2 border-white ring-2 ring-slate-100 shadow-xs group-hover:ring-[#211164]/30 transition-all duration-300"
                      loading="lazy"
                    />
                    <span
                      className="absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full bg-white border border-slate-200 flex items-center justify-center p-0.5 shadow-xs"
                      title={verifiedLabel}
                    >
                      <GoogleIcon className="w-3 h-3 shrink-0" />
                    </span>
                  </div>

                  <div className="flex-1 min-w-0 space-y-0.5">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-headline text-xs font-bold text-slate-900 truncate">
                        {review.name}
                      </span>
                    </div>
                    <div className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px] text-emerald-500">verified</span>
                      <span className="truncate">{verifiedLabel}</span>
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">
                      {review.location}
                    </div>
                    <div className="text-[10px] font-semibold text-[#006972] truncate">
                      {review.highlight}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Google Maps External Link Button */}
        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Dentaktif+A%C4%9F%C4%B1z+ve+Di%C5%9F+Sa%C4%9Fl%C4%B1%C4%9F%C4%B1+Poliklini%C4%9Fi+Bayrampa%C5%9Fa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 shadow-xs text-xs font-bold text-slate-700 hover:text-[#211164] hover:border-[#211164] transition-all duration-200"
          >
            <GoogleIcon className="w-4 h-4 shrink-0" />
            <span>{viewAllLabel}</span>
          </a>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-10 p-4 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-around gap-4 text-xs font-bold text-slate-600">
          <div className="flex items-center gap-2">
            <GoogleIcon className="w-4 h-4 shrink-0" />
            <span>{stripBadges[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">verified</span>
            <span>{stripBadges[1]}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">hotel</span>
            <span>{stripBadges[2]}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">airport_shuttle</span>
            <span>{stripBadges[3]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
