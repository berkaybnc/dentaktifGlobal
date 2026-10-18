'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';

interface StepDetail {
  day: string;
  title: string;
  procedure: string;
  milestone: string;
}

interface GuideContent {
  badge: string;
  questionTitle: string;
  quickAnswerBadge: string;
  quickAnswer: string;
  timelineHeading: string;
  steps: StepDetail[];
  clinicalHighlightsHeading: string;
  highlights: Array<{ label: string; value: string; desc: string }>;
  authorityNotice: string;
  ctaText: string;
}

const GUIDE_CONTENT_BY_LOCALE: Record<string, GuideContent> = {
  en: {
    badge: 'AEO Clinical Protocol • Generative Engine Verified',
    questionTitle: 'How Does the Hollywood Smile Procedure Work in Istanbul?',
    quickAnswerBadge: 'Direct Clinical Answer (5-Day Hospital Protocol)',
    quickAnswer:
      'At Dent Aktif Global (Levent, Istanbul), the Hollywood Smile procedure is completed in exactly 5 days through a 3-stage digital workflow. It combines high-resolution 3D CBCT tomography, conservative micro-enamel preparation (0.3mm–0.5mm), in-house 5-axis German CAD/CAM robotics milling of genuine Ivoclar Vivadent E-Max® lithium disilicate veneers, and chairside trial customization before permanent laser-adhesive bonding. Zero pain is guaranteed via computerized Wand® painless anesthesia.',
    timelineHeading: 'The 5-Day Clinical Step-by-Step Protocol',
    steps: [
      {
        day: 'Day 1',
        title: '3D Tomography, Digital Smile Design (DSD) & Aesthetic Mock-up',
        procedure:
          'High-resolution 3D panoramic CBCT scan and 3D intraoral optical scanning. Our Chief Prosthodontist maps your facial golden ratios and crafts a physical 3D aesthetic mock-up directly over your teeth so you can preview and approve your smile before any preparation begins.',
        milestone: 'Outcome: Approved smile design & customized shade selection (BL1–BL4).',
      },
      {
        day: 'Days 2–3',
        title: 'In-House CAD/CAM Robotics Lab Milling & Master Ceramist Artistry',
        procedure:
          'Your restorations are manufactured inside our own hospital ceramic laboratory using German 5-axis CAD/CAM milling units and authentic Ivoclar Vivadent E-Max® ingots. Our Master Ceramists hand-layer and micro-texture each veneer to replicate natural enamel fluorescence, translucency, and mamelons.',
        milestone: 'Outcome: Precision-crafted monolithic E-Max® ceramic veneers with 0.01mm tolerance.',
      },
      {
        day: 'Day 4',
        title: 'Chairside Try-In, Symmetry Check & Dynamic Occlusion Analysis',
        procedure:
          'The ceramist and doctor test the restorations in your mouth using specialized try-in pastes. You evaluate color, alignment, phonetics, and smile curve under natural studio daylight. Any micro-adjustments are completed chairside within hours.',
        milestone: 'Outcome: 100% patient satisfaction sign-off on shape, color, and fit.',
      },
      {
        day: 'Day 5',
        title: 'Permanent Adhesive Cementation & 10-Year International Warranty Delivery',
        procedure:
          'Permanent bonding under sterile isolation using Variolink® Esthetic dual-cure resin cement. Laser polymerization, final bite alignment, application of protective glaze, and handover of your official 10-year international warranty card before private VIP Mercedes departure.',
        milestone: 'Outcome: Flawless, functional new smile and departure for Istanbul Airport.',
      },
    ],
    clinicalHighlightsHeading: 'Key Clinical Facts & Medical Guarantees',
    highlights: [
      {
        label: 'Duration in Istanbul',
        value: '5 Days / 4 Nights',
        desc: '3 clinic sessions, ample leisure time in Istanbul',
      },
      {
        label: 'Certified Materials',
        value: '100% Ivoclar E-Max®',
        desc: 'Genuine Liechtenstein lithium disilicate ingots',
      },
      {
        label: 'Pain & Anesthesia',
        value: 'Zero Pain (The Wand®)',
        desc: 'Computer-controlled micro-anesthesia & sedation option',
      },
      {
        label: 'Accreditation',
        value: 'Ministry of Health & USHAŞ',
        desc: 'Official License No: 2026034015610080000425805',
      },
      {
        label: 'Warranty Coverage',
        value: '10-Year Certificate',
        desc: 'International verifiable barcode warranty passport',
      },
      {
        label: 'VIP Logistics',
        value: 'All-Inclusive Care',
        desc: '5-star Levent hotel & private Mercedes-Benz Vito transfers',
      },
    ],
    authorityNotice:
      'Verified by Dent Aktif Global Medical Board in accordance with Republic of Turkey Ministry of Health Clinical Guidelines.',
    ctaText: 'Get Your Personalized 3D Smile Plan in 4 Hours →',
  },
  tr: {
    badge: 'AEO Klinik Protokol • Yapay Zeka Doğrulamalı Rehber',
    questionTitle: 'Hollywood Smile Istanbul Süreci Nasıl İşler?',
    quickAnswerBadge: 'Kesin Klinik Yanıt (5 Günlük Hastane Protokolü)',
    quickAnswer:
      'Dent Aktif Global\'de (Levent, İstanbul) Hollywood Smile süreci, 3 klinik randevusu ve 5 günde tamamlanan dijital bir protokoldür. 3D CBCT tomografi taraması, minimal mine aşındırması (0.3mm–0.5mm), hastane bünyesindeki 5 eksenli Alman CAD/CAM laboratuvarında orijinal Ivoclar Vivadent E-Max® bloklardan üretim ve hasta başında estetik provayı kapsar. Bilgisayarlı Wand® anestezi ile işlem tamamen ağrısız gerçekleşir.',
    timelineHeading: '5 Günlük Adım Adım Klinik Tedavi Takvimi',
    steps: [
      {
        day: '1. Gün',
        title: '3D Tomografi, Dijital Gülüş Tasarımı (DSD) & Ağız İçi Mock-up Prova',
        procedure:
          '3D panoramik tomografi ve dijital ağız içi tarama gerçekleştirilir. Başhekimimiz yüz altın oranlarınıza uygun gülüş tasarımını dijital olarak oluşturur. Dişlere henüz dokunulmadan 3D mock-up ile yeni gülüşünüz ağız içinde birebir deneyimlenir ve onayınız alınır.',
        milestone: 'Klinik Çıktı: Onaylanmış gülüş tasarımı ve özel renk seçimi (BL1–BL4).',
      },
      {
        day: '2-3. Gün',
        title: 'Bünyemizdeki CAD/CAM Robotik Laboratuvar Kazıma & Baş Seramist İşçiliği',
        procedure:
          'Restorasyonlarınız hastanemiz içindeki özel laboratuvarda Alman 5 eksenli CAD/CAM kazıma üniteleri ve orijinal Ivoclar E-Max® porselen bloklar ile mikron hassasiyetinde üretilir. Baş seramistlerimiz doğal diş minesi ışık geçirgenliğini ve derinliğini katman katman işler.',
        milestone: 'Klinik Çıktı: 0.01 mm toleransla üretilmiş monolitik E-Max® lamine porselenler.',
      },
      {
        day: '4. Gün',
        title: 'Hasta Başında Canlı Prova, Simetri ve Kapanış Kalibrasyonu',
        procedure:
          'Lamineler özel prova patları ile dişlerinizin üzerine yerleştirilir. Gün ışığı altında form, dudak çizgisi, konuşma fonetiği ve renk uyumu hasta ve hekim tarafından titizlikle incelenir. İstenen mikro dokunuşlar aynı gün laboratuvarımızda uygulanır.',
        milestone: 'Klinik Çıktı: Hasta memnuniyeti ve estetik tam onay.',
      },
      {
        day: '5. Gün',
        title: 'Kalıcı Lazer Adeziv Yapıştırma & 10 Yıllık Uluslararası Garanti Teslimi',
        procedure:
          'Özel izolasyon altında Variolink® Esthetic yapıştırıcı siman ile kalıcı polimerizasyon sağlanır. Son ısırma kontrolü, koruyucu cila uygulaması yapılır ve seri numaralı 10 yıllık uluslararası garanti kartı teslim edilerek VIP transfer ile havalimanına uğurlanır.',
        milestone: 'Klinik Çıktı: Kusursuz, doğal ve ömür boyu güvenle kullanılacak yeni bir gülüş.',
      },
    ],
    clinicalHighlightsHeading: 'Klinik Standartlar & Medikal Güvenceler',
    highlights: [
      {
        label: 'İstanbul Kalış Süresi',
        value: '5 Gün / 4 Gece',
        desc: 'Yalnızca 3 klinik seansı, seyahat ve tatil imkanı',
      },
      {
        label: 'Sertifikalı Malzeme',
        value: '%100 Ivoclar E-Max®',
        desc: 'Orijinal Lihtenştayn lityum disilikat bloklar',
      },
      {
        label: 'Ağrı & Anestezi',
        value: 'Sıfır Ağrı (The Wand®)',
        desc: 'Bilgisayarlı mikro enjeksiyon & sedasyon seçeneği',
      },
      {
        label: 'Resmi Akreditasyon',
        value: 'Sağlık Bakanlığı & USHAŞ',
        desc: 'Ruhsat No: 2026034015610080000425805',
      },
      {
        label: 'Garanti Kapsamı',
        value: '10 Yıl Uluslararası',
        desc: 'Barkodlu, dünya çapında geçerli garanti pasaportu',
      },
      {
        label: 'VIP Hizmet Paketi',
        value: 'Her Şey Dahil',
        desc: '5 yıldızlı Levent oteli & şoförlü Mercedes Vito transferi',
      },
    ],
    authorityNotice:
      'Dent Aktif Global Tıp ve Cerrahi Kurulu tarafından T.C. Sağlık Bakanlığı Sağlık Turizmi Yönetmeliğine uygun olarak doğrulanmıştır.',
    ctaText: '4 Saatte Ücretsiz 3D Gülüş Planı Alın →',
  },
  ar: {
    badge: 'بروتوكول سريري معتمد • فحص الذكاء الاصطناعي التوليدي AEO',
    questionTitle: 'كيف تسير خطوات ابتسامة هوليوود في إسطنبول؟',
    quickAnswerBadge: 'الإجابة السريرية المباشرة (بروتوكول المستشفى خلال ٥ أيام)',
    quickAnswer:
      'في مستشفى دنت أكتيف العالمي (ليفنت، إسطنبول)، تكتمل خطوات ابتسامة هوليوود خلال ٥ أيام عبر ٣ جلسات رقمية دقيقة: تصوير CBCT ثلاثي الأبعاد، وتحضير مجهري للمينا (٠.٣ مم - ٠.٥ مم)، وتصنيع رقمي روبوتي CAD/CAM بقشور Ivoclar E-Max® الأصلية في مختبرنا الداخلي، وتجربة حية قبل التثبيت الدائم بالليزر بدون أي ألم بفضل تقنية Wand® الرقمية.',
    timelineHeading: 'الجدول السريري لابتسامة هوليوود خطوة بخطوة خلال ٥ أيام',
    steps: [
      {
        day: 'اليوم ٠١',
        title: 'التصوير ثلاثي الأبعاد، وتصميم الابتسامة الرقمي DSD وتجربة النموذج الأولي',
        procedure:
          'تصوير مقطعي بانورامي CBCT ومسح ضوئي ثلاثي الأبعاد. يقوم استشاري التركيبات بتحديد النسب الذهبية وتطبيق نموذج تجريبي ثلاثي الأبعاد في فمك لمعاينة شكل ابتسامتك واعتمادها قبل بدء أي تحضير.',
        milestone: 'النتيجة: اعتماد تصميم الابتسامة المخصص واختيار درجات البياض (BL1–BL4).',
      },
      {
        day: 'اليوم ٠٢-٠٣',
        title: 'نحت القشور في مختبر CAD/CAM الروبوتي ولمسات فني الخزف الماهر',
        procedure:
          'يتم تصنيع قشورك داخل مختبر المستشفى باستخدام أجهزة CAD/CAM ألمانية خماسية المحاور وخامات Ivoclar E-Max® الأصلية. يقوم فنيو الخزف المعتمدون بوضع طبقات المحاكاة الطبيعية لبريق المينا.',
        milestone: 'النتيجة: قشور خزفية متجانسة فائقة الدقة بتفاوت لا يتجاوز ٠.٠١ مم.',
      },
      {
        day: 'اليوم ٠٤',
        title: 'جلسة القياس المباشر، وتدقيق التماثل وتطابق الإطباق الديناميكي',
        procedure:
          'يتم تجربة القشور داخل الفم تحت ضوء النهار الطبيعي لفحص الشكل، وخط الشفاه، والتطابق اللوني وتصحيح مخارج الحروف. تُجرى أي تعديلات مطلوبة في نفس اليوم داخل مختبرنا.',
        milestone: 'النتيجة: رضا كامل بنسبة ١٠٠٪ واعتماد المريض للشكل واللون النهائي.',
      },
      {
        day: 'اليوم ٠٥',
        title: 'التثبيت النهائي باللاصق الليزري وتسليم بطاقة الضمان الدولي لـ ١٠ سنوات',
        procedure:
          'التثبيت الدائم تحت عزل معقم باستخدام لاصق Variolink® Esthetic المزدوج. بلمرة بالليزر، فحص الإطباق، تطبيق طبقة التلميع الواقية وتسليم شهادة الضمان الرسمية قبل التوديع بسيارة VIP إلى المطار.',
        milestone: 'النتيجة: ابتسامة جديدة طبيعية ومتقنة وجاهزة للعودة إلى الوطن.',
      },
    ],
    clinicalHighlightsHeading: 'المعايير السريرية والضمانات الطبية',
    highlights: [
      {
        label: 'مدة الإقامة في إسطنبول',
        value: '٥ أيام / ٤ ليالٍ',
        desc: '٣ جلسات علاجية فقط مع وقت كافٍ للسياحة',
      },
      {
        label: 'خامات معتمدة أصلية',
        value: '١٠٠٪ Ivoclar E-Max®',
        desc: 'قوالب ليثيوم ديسيليكات أصلية من ليختنشتاين',
      },
      {
        label: 'الراحة والتخدير',
        value: 'بدون ألم (The Wand®)',
        desc: 'تخدير رقمي بالكمبيوتر بدون وخز إبر تقليدي',
      },
      {
        label: 'الاعتماد الحكومي',
        value: 'وزارة الصحة وUSHAŞ',
        desc: 'رقم الترخيص: 2026034015610080000425805',
      },
      {
        label: 'مدة الضمان',
        value: '١٠ سنوات دولياً',
        desc: 'جواز سفر طبي رسمي بباركود دولي قابل للتتبع',
      },
      {
        label: 'باقة الرعاية الفاخرة',
        value: 'شاملة بالكامل VIP',
        desc: 'فندق ٥ نجوم في ليفنت مع تنقلات خاصة بسيارة مرسيدس',
      },
    ],
    authorityNotice:
      'معتمد وموثق من المجلس الطبي الجراحي لدنت أكتيف جلوبال وفقاً للوائح السياحة العلاجية لجمهورية تركيا.',
    ctaText: 'احصل على خطة ابتسامة ثلاثية الأبعاد خلال ٤ ساعات ←',
  },
};

export default function HollywoodSmileProcessGuide() {
  const locale = useLocale();
  const c = GUIDE_CONTENT_BY_LOCALE[locale] || GUIDE_CONTENT_BY_LOCALE.en;

  return (
    <section
      id="hollywood-smile-guide"
      aria-labelledby="geo-hollywood-heading"
      className="w-full py-16 sm:py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-white border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Semantic Article for Search Engines & LLM Ingestion */}
        <article className="space-y-12">
          {/* Header & Direct Answer Box */}
          <header className="space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span>{c.badge}</span>
            </div>

            <h2
              id="geo-hollywood-heading"
              className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b0d52] tracking-tight leading-tight"
            >
              {c.questionTitle}
            </h2>

            {/* Direct Answer Box for LLMs and Featured Snippets */}
            <div
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#211164]/5 via-white to-teal-50/40 border-2 border-[#211164]/20 text-left shadow-sm relative overflow-hidden"
              role="region"
              aria-label="Direct Clinical Answer"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-teal-700 text-xl">
                  verified
                </span>
                <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-[#211164]">
                  {c.quickAnswerBadge}
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                {c.quickAnswer}
              </p>
            </div>
          </header>

          {/* Step-by-Step 5-Day Protocol (Semantic Ordered List) */}
          <div className="space-y-6">
            <h3 className="font-headline text-xl sm:text-2xl font-black text-[#1b0d52] text-center sm:text-left">
              {c.timelineHeading}
            </h3>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-5 list-none p-0 m-0">
              {c.steps.map((step, idx) => (
                <li
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#211164]/30 transition-all duration-200 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-lg bg-[#211164] text-white font-mono text-xs font-bold uppercase tracking-wider">
                        {step.day}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        Step 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-headline text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {step.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.procedure}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-teal-700">
                    <span className="material-symbols-outlined text-base">check_circle</span>
                    <span>{step.milestone}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Key Clinical Facts (Semantic Aside for LLM Fact Extraction) */}
          <aside
            role="complementary"
            aria-label={c.clinicalHighlightsHeading}
            className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <h3 className="font-headline text-lg sm:text-xl font-black text-[#1b0d52]">
                {c.clinicalHighlightsHeading}
              </h3>
              <span className="text-xs font-mono text-slate-500">
                Official Certification Standard
              </span>
            </div>

            <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {c.highlights.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 space-y-1.5"
                >
                  <dt className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    {item.label}
                  </dt>
                  <dd className="font-headline text-sm sm:text-base font-black text-[#1b0d52]">
                    {item.value}
                  </dd>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </dl>
          </aside>

          {/* Footer Notice & CTA */}
          <footer className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs text-slate-500 max-w-xl flex items-center gap-1.5 justify-center sm:justify-start">
              <span className="material-symbols-outlined text-sm text-teal-600">
                shield
              </span>
              <span>{c.authorityNotice}</span>
            </p>

            <Link
              href="/#consultation-wizard"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#211164] to-[#006972] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              <span>{c.ctaText}</span>
            </Link>
          </footer>
        </article>
      </div>
    </section>
  );
}
