'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/navigation';

interface CaseData {
  id: string;
  categoryTag: string;
  treatmentTitle: string;
  treatmentSubtitle: string;
  indication: string;
  highlights: string[];
  material: string;
  duration: string;
  precision: string;
  warranty: string;
  beforeImg: string;
  afterImg: string;
}

const CASES_BY_LOCALE: Record<string, Record<string, CaseData>> = {
  en: {
    hollywood: {
      id: '#CASE-8841',
      categoryTag: 'Smile Architecture',
      treatmentTitle: '20 Ivoclar Vivadent® E-Max® Veneers',
      treatmentSubtitle: 'BL1 Bleach White • Natural Enamel Translucency',
      indication: 'Severe staining, incisal wear and uneven tooth proportions.',
      highlights: [
        '3D Intraoral digital scanning & golden-ratio simulation',
        '0.3mm conservative micro-prep with painless anesthesia',
        'In-house master ceramist custom shade layering & glazing',
      ],
      material: 'IPS e.max® Press (Lithium Disilicate)',
      duration: '5 Days / 2 Visits',
      precision: 'Sub-15μm CAD/CAM Fit',
      warranty: 'Lifetime Certificate',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
    allon4: {
      id: '#CASE-7920',
      categoryTag: 'Full-Arch Implantology',
      treatmentTitle: 'All-on-6 Swiss Straumann® Full Arch',
      treatmentSubtitle: 'Roxolid® SLA Hybrid Bridge • 3D Guided Navigation',
      indication: 'Missing dentition, bone volume loss, and collapsed vertical bite.',
      highlights: [
        '3D CBCT bone mapping & digital surgical stent guide',
        'Flapless computer-navigated 6x Straumann® placement',
        'Immediate fixed monolithic bridge delivery within 48h',
      ],
      material: 'Swiss Straumann® Roxolid® & Zirconia',
      duration: '5 Days (Immediate Load)',
      precision: '0.1mm 3D Stent Precision',
      warranty: 'Global Lifetime Straumann®',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
    zirconia: {
      id: '#CASE-6514',
      categoryTag: 'Aesthetic Prosthodontics',
      treatmentTitle: '16 CAD/CAM Katana™ Zirconia Crowns',
      treatmentSubtitle: '1200+ MPa Diamond Strength Core • Multi-Layer Gradient',
      indication: 'Defective old metal fillings, chipped enamel and dark margins.',
      highlights: [
        'Digital shade spectrophotometry capturing root-to-tip tones',
        'Conservative preparation preserving dental pulp vitality',
        '5-Axis CNC milling & multi-tone oven glaze sintering',
      ],
      material: 'Katana™ Multi-Layered Zirconia',
      duration: '5 Days / 3 Visits',
      precision: '12-Micron CNC Precision',
      warranty: '15-Year Certificate',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
  },
  tr: {
    hollywood: {
      id: '#CASE-8841',
      categoryTag: 'Gülüş Mimarisi',
      treatmentTitle: '20 Üye Ivoclar Vivadent® E-Max® Lamine',
      treatmentSubtitle: 'BL1 Beyazlatılmış Beyaz • Doğal Mine Işık Geçirgenliği',
      indication: 'İleri derecede renklenme, kesici kenar aşınması ve asimetrik diş oranları.',
      highlights: [
        '3D Ağız içi dijital tarama & altın oran simülasyonu',
        '0.3mm koruyucu mikro-prep ile ağrısız anestezi',
        'Klinik bünyesinde master seramist özel katmanlama ve fırınlama',
      ],
      material: 'IPS e.max® Press (Lityum Disilikat)',
      duration: '5 Gün / 2 Seans',
      precision: '15 Mikron Altı CAD/CAM Uyumu',
      warranty: 'Ömür Boyu Garanti Sertifikası',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
    allon4: {
      id: '#CASE-7920',
      categoryTag: 'Tam Çene İmplantoloji',
      treatmentTitle: 'All-on-6 İsviçre Straumann® Tam Çene',
      treatmentSubtitle: 'Roxolid® SLA Hibrit Köprü • 3D Navigasyonlu Cerrahi',
      indication: 'Çoklu diş eksikliği, kemik hacmi kaybı ve dikey boyut çökmesi.',
      highlights: [
        '3D CBCT kemik haritalaması & cerrahi stent rehberi',
        'Dikişsiz bilgisayar kılavuzlu 6x Straumann® yerleşimi',
        '48 saat içinde anında sabit monolitik köprü teslimi',
      ],
      material: 'İsviçre Straumann® Roxolid® & Zirkonyum',
      duration: '5 Gün (Hemen Yükleme)',
      precision: '0.1mm 3D Cerrahi Kılavuz Hassasiyeti',
      warranty: 'Global Ömür Boyu Straumann® Pasaportu',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
    zirconia: {
      id: '#CASE-6514',
      categoryTag: 'Estetik Protetik Diş Tedavisi',
      treatmentTitle: '16 Üye CAD/CAM Katana™ Zirkonyum Kuron',
      treatmentSubtitle: '1200+ MPa Elmas Dayanımlı Çekirdek • Çok Katmanlı Gradyan',
      indication: 'Eski metal destekli kaplamalar, kırık mine ve koyu diş eti kenarları.',
      highlights: [
        'Kökten uca tonları yakalayan dijital spektrofotometre analizi',
        'Diş canlılığını koruyan minimal preparasyon',
        '5 Eksenli CNC kazıma ve fırınlama cilası',
      ],
      material: 'Katana™ Çok Katmanlı Zirkonyum',
      duration: '5 Gün / 3 Seans',
      precision: '12 Mikron CNC Hassasiyeti',
      warranty: '15 Yıl Garanti Sertifikası',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
  },
  de: {
    hollywood: {
      id: '#CASE-8841',
      categoryTag: 'Lächeln-Architektur',
      treatmentTitle: '20 Ivoclar Vivadent® E-Max® Veneers',
      treatmentSubtitle: 'BL1 Bleach White • Natürliche Schmelz-Transluzenz',
      indication: 'Starke Verfärbungen, Inzisalkantenabrieb und unregelmäßige Zahnproportionen.',
      highlights: [
        '3D-Intraoralscan & digitale Simulation im Goldenen Schnitt',
        '0,3 mm substanzschonende Mikropreparation mit schmerzfreier Anästhesie',
        'Individuelle Schichtung & Glasur durch unseren hauseigenen Keramikmeister',
      ],
      material: 'IPS e.max® Press (Lithiumdisilikat)',
      duration: '5 Tage / 2 Besuche',
      precision: 'Sub-15μm CAD/CAM Passung',
      warranty: 'Lebenslanges Zertifikat',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
    allon4: {
      id: '#CASE-7920',
      categoryTag: 'Vollkiefer-Implantologie',
      treatmentTitle: 'All-on-6 Schweizer Straumann® Vollkiefer',
      treatmentSubtitle: 'Roxolid® SLA Hybridbrücke • 3D-Navigation',
      indication: 'Zahnverlust, reduziertes Knochenvolumen und abgesenkter Biss.',
      highlights: [
        '3D-DVT-Knochenanalyse & navigierte Bohrschablone',
        'Schlüsselloch-geführte Implantation von 6x Straumann®',
        'Festsitzende monolithische Sofortbrücke innerhalb von 48 Std.',
      ],
      material: 'Schweizer Straumann® Roxolid® & Zirkon',
      duration: '5 Tage (Sofortbelastung)',
      precision: '0,1 mm 3D-Schablonen-Präzision',
      warranty: 'Globaler lebenslanger Straumann® Pass',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
    zirconia: {
      id: '#CASE-6514',
      categoryTag: 'Ästhetische Prothetik',
      treatmentTitle: '16 CAD/CAM Katana™ Zirkonkronen',
      treatmentSubtitle: '1200+ MPa Diamantfestigkeit • Multilayer-Farbverlauf',
      indication: 'Defekte alte Metallfüllungen, Schmelzabplatzungen und dunkle Ränder.',
      highlights: [
        'Digitale Farbspektrophotometrie von Wurzel bis Spitze',
        'Schonende Präparation zum Erhalt der Zahnvitalität',
        '5-Achs-CNC-Fräsen & mehrstufige Sinterglasur im Brennofen',
      ],
      material: 'Katana™ Multilayer-Zirkon',
      duration: '5 Tage / 3 Besuche',
      precision: '12-Mikron CNC-Präzision',
      warranty: '15-Jahre Zertifikat',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
  },
  ru: {
    hollywood: {
      id: '#CASE-8841',
      categoryTag: 'Архитектура улыбки',
      treatmentTitle: '20 виниров Ivoclar Vivadent® E-Max®',
      treatmentSubtitle: 'BL1 Bleach White • Натуральная прозрачность эмали',
      indication: 'Глубокая пигментация, истирание режущего края и диспропорция зубного ряда.',
      highlights: [
        '3D внутриротовое сканирование и расчет золотого сечения',
        'Щадящее препарирование 0.3 мм под безыгольной анестезией',
        'Индивидуальное послойное нанесение и глазурование в лаборатории клиники',
      ],
      material: 'IPS e.max® Press (дисиликат лития)',
      duration: '5 дней / 2 визита',
      precision: 'CAD/CAM прилегание до 15 мкм',
      warranty: 'Пожизненный сертификат',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
    allon4: {
      id: '#CASE-7920',
      categoryTag: 'Тотальная имплантация',
      treatmentTitle: 'All-on-6 на швейцарских Straumann®',
      treatmentSubtitle: 'Гибридный мост Roxolid® SLA • 3D навигационный шаблон',
      indication: 'Множественная адентия, атрофия кости и снижение высоты прикуса.',
      highlights: [
        '3D КЛКТ анализ плотности кости и цифровой хирургический шаблон',
        'Безоперационная навигационная установка 6 имплантов Straumann®',
        'Несъемный монолитный мост с немедленной нагрузкой за 48 часов',
      ],
      material: 'Швейцарский Straumann® Roxolid® и цирконий',
      duration: '5 дней (немедленная нагрузка)',
      precision: 'Точность шаблона 0.1 мм',
      warranty: 'Международный паспорт Straumann®',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
    zirconia: {
      id: '#CASE-6514',
      categoryTag: 'Эстетическое протезирование',
      treatmentTitle: '16 циркониевых коронок CAD/CAM Katana™',
      treatmentSubtitle: 'Прочность свыше 1200 МПа • Многослойный градиент',
      indication: 'Старые металлокерамические коронки, сколы и темный десневой край.',
      highlights: [
        'Спектрофотометрический подбор естественного тона эмали',
        'Минимальная обточка с сохранением витальности зубов',
        '5-осевая фрезеровка ЧПУ и высокотемпературный обжиг',
      ],
      material: 'Многослойный цирконий Katana™',
      duration: '5 дней / 3 визита',
      precision: 'ЧПУ точность 12 микрон',
      warranty: '15-летняя гарантия',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
  },
  fr: {
    hollywood: {
      id: '#CASE-8841',
      categoryTag: 'Architecture du Sourire',
      treatmentTitle: '20 Facettes Ivoclar Vivadent® E-Max®',
      treatmentSubtitle: 'BL1 Bleach White • Translucidité Naturelle de l’Émail',
      indication: 'Coloration sévère, usure incisive et proportions dentaires asymétriques.',
      highlights: [
        'Empreinte optique 3D & simulation numérique du nombre d’or',
        'Micro-préparation ultra-conservatrice de 0,3 mm sans douleur',
        'Stratification artisanale personnalisée et glaçage au laboratoire',
      ],
      material: 'IPS e.max® Press (Disilicate de Lithium)',
      duration: '5 Jours / 2 Séances',
      precision: 'Ajustement CAD/CAM < 15μm',
      warranty: 'Certificat à Vie',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
    allon4: {
      id: '#CASE-7920',
      categoryTag: 'Implantologie Arcade Complète',
      treatmentTitle: 'All-on-6 Implants Suisses Straumann®',
      treatmentSubtitle: 'Bridge Hybride Roxolid® SLA • Chirurgie Guidée 3D',
      indication: 'Pertes dentaires multiples, résorption osseuse et effondrement de l’occlusion.',
      highlights: [
        'Cartographie osseuse CBCT 3D & guide chirurgical de précision',
        'Pose guidée par ordinateur de 6 implants Straumann® sans ouverture gingivale',
        'Bridge monolithique fixe à chargement immédiat sous 48h',
      ],
      material: 'Straumann® Roxolid® Suisse & Zircone',
      duration: '5 Jours (Charge Immédiate)',
      precision: 'Précision du Guide 3D 0,1 mm',
      warranty: 'Passeport International Straumann® à Vie',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
    zirconia: {
      id: '#CASE-6514',
      categoryTag: 'Prothèse Dentaire Esthétique',
      treatmentTitle: '16 Couronnes Zircone CAD/CAM Katana™',
      treatmentSubtitle: 'Résistance Diamant 1200+ MPa • Dégradé Multicouche Naturel',
      indication: 'Anciennes obturations métalliques défectueuses et liserés grisâtres.',
      highlights: [
        'Spectrophotométrie numérique reproduisant la translucidité naturelle',
        'Préparation conservatrice préservant la vitalité pulpaire',
        'Usinage CNC 5 axes et cuisson de glaçage au four céramique',
      ],
      material: 'Zircone Multicouche Katana™',
      duration: '5 Jours / 3 Séances',
      precision: 'Précision CNC 12 Microns',
      warranty: 'Garantie Certifiée 15 Ans',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
  },
  ar: {
    hollywood: {
      id: '#CASE-8841',
      categoryTag: 'هندسة الابتسامة الرقمية',
      treatmentTitle: '20 قشرة فينير Ivoclar Vivadent® E-Max®',
      treatmentSubtitle: 'درجة بياض BL1 ناصعة • شفافية مينا طبيعية تحاكي الأصل',
      indication: 'تصبغات عميقة، تآكل الحواف القاطعة، وعدم تناسق أبعاد الأسنان.',
      highlights: [
        'مسح فموي رقمي ثلاثي الأبعاد ومحاكاة النسبة الذهبية للوجه',
        'برد تحفظي مجهري لا يتجاوز 0.3 مم تحت تخدير حاسوبي بدون ألم',
        'تلوين وتدرج طبقات الخزف يدوياً وصقلها في مختبر المستشفى الداخلي',
      ],
      material: 'IPS e.max® Press (دي سيليكات الليثيوم السويسرية)',
      duration: '5 أيام / جلستان',
      precision: 'تطابق CAD/CAM فائق الدقة أقل من 15 ميكرون',
      warranty: 'شهادة ضمان دولية مدى الحياة',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
    allon4: {
      id: '#CASE-7920',
      categoryTag: 'زراعة الفك الكامل',
      treatmentTitle: 'زراعة الفك الكامل All-on-6 بسويسرا Straumann®',
      treatmentSubtitle: 'جسر هجين Roxolid® SLA • جراحة موجهة بملاحة ثلاثية الأبعاد 3D',
      indication: 'فقدان كامل للأسنان، ضمور عظمي وانهيار ارتفاع عضة الفك.',
      highlights: [
        'تخطيط عظمي مقطعي ثلاثي الأبعاد 3D CBCT ودليل جراحي رقمي دقيق',
        'تثبيت موجه بالحاسوب لـ 6 زرعات Straumann® بدون شق جراحي واسع',
        'تسليم جسر أسنان متجانس مؤقت وثابت خلال 48 ساعة بالتحميل الفوري',
      ],
      material: 'زرعات سويسرية Straumann® Roxolid® وجسر زيركون',
      duration: '5 أيام (تحميل فوري)',
      precision: 'دقة دليل جراحي ثلاثي الأبعاد 0.1 مم',
      warranty: 'جواز سفر رسمي لزرعات Straumann® مدى الحياة',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
    zirconia: {
      id: '#CASE-6514',
      categoryTag: 'الاستعاضة السنية التجميلية',
      treatmentTitle: '16 تاج زيركون CAD/CAM Katana™ روبوتي',
      treatmentSubtitle: 'قوة ماسية تفوق 1200 ميجاباسكال • تدرج لوني متعدد الطبقات',
      indication: 'حشوات معدنية قديمة تالفة، كسور في المينا وهوامش لثوية داكنة.',
      highlights: [
        'مطابقة طيفية رقمية تحاكي انعكاس ونفاذية الضوء الطبيعية للسن',
        'تحضير تحفظي طفيف التوغل للحفاظ الكامل على حيوية وصحة العصب',
        'نحت روبوتي خماسي المحاور CNC ومعالجة حرارية تلميعية في أفران الخزف',
      ],
      material: 'زيركون ياباني متعدد الطبقات Katana™ Zirconia',
      duration: '5 أيام / 3 جلسات',
      precision: 'دقة روبوتية 12 ميكرون',
      warranty: 'شهادة ضمان معتمدة لمدة 15 عاماً',
      beforeImg: '/images/cases/.webp',
      afterImg: '/images/cases/.webp',
    },
  },
};

export default function CaseSlider() {
  const t = useTranslations('caseSlider');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<string>('hollywood');
  const [sliderVal, setSliderVal] = useState<number>(50);

  const localizedCases = CASES_BY_LOCALE[locale] || CASES_BY_LOCALE.en;
  const currentCase = localizedCases[activeTab] || localizedCases.hollywood;

  const categories = [
    { key: 'hollywood', label: t('tabHollywood'), subtitle: t('tabHollywoodSub'), icon: 'diamond' },
    { key: 'allon4', label: t('tabAllon4'), subtitle: t('tabAllon4Sub'), icon: 'dentistry' },
    { key: 'zirconia', label: t('tabZirconia'), subtitle: t('tabZirconiaSub'), icon: 'workspace_premium' },
  ];

  return (
    <section className="w-full py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 border-b border-slate-200" id="clinical-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 1. Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#006972] text-xs font-bold shadow-xs">
            <span className="material-symbols-outlined text-[15px] text-teal-600">verified</span>
            <span>{t('badge')}</span>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-black text-[#1b0d52] tracking-tight">
            {t('title')}
          </h2>

          {/* Treatment Category Switcher */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = activeTab === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => {
                    setActiveTab(cat.key);
                    setSliderVal(50);
                  }}
                  className={`
                    flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-left transition-all duration-200 border cursor-pointer
                    ${
                      isActive
                        ? 'bg-[#1b0d52] text-white border-[#1b0d52] shadow-md shadow-[#1b0d52]/20 scale-[1.02]'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                    }
                  `}
                >
                  <span className={`material-symbols-outlined text-lg shrink-0 ${isActive ? 'text-teal-300' : 'text-teal-600'}`}>{cat.icon}</span>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold leading-tight">
                      {cat.label}
                    </div>
                    <div
                      className={`text-[10px] font-medium leading-tight mt-0.5 ${
                        isActive ? 'text-teal-200 font-bold' : 'text-slate-500'
                      }`}
                    >
                      {cat.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT: Comparison Slider (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div
              className="relative w-full aspect-4/3 min-h-[320px] sm:min-h-[420px] rounded-3xl border-2 border-slate-300 overflow-hidden select-none bg-slate-950 shadow-xl group"
              id="case-slider-wrapper"
            >
              {/* AFTER IMAGE (Base Layer) */}
              <img
                key={`after-${activeTab}`}
                alt={`${currentCase.treatmentTitle} ${t('after')}`}
                className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
                src={currentCase.afterImg}
              />
              <span className="absolute top-3.5 right-3.5 z-20 px-3 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md border border-emerald-400/40 text-emerald-300 font-mono text-[11px] font-bold tracking-wider shadow-md pointer-events-none flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t('after')}</span>
              </span>

              {/* BEFORE IMAGE (Clipped Layer) */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderVal}% 0 0)` }}
              >
                <img
                  key={`before-${activeTab}`}
                  alt={`${currentCase.treatmentTitle} ${t('before')}`}
                  className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
                  src={currentCase.beforeImg}
                />
                <span className="absolute top-3.5 left-3.5 z-20 px-3 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] font-bold tracking-wider shadow-md pointer-events-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{t('before')}</span>
                </span>
              </div>

              {/* Split Divider Line & Floating Handle */}
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center -translate-x-1/2"
                style={{ left: `${sliderVal}%` }}
              >
                <div className="w-[2.5px] h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.9)]" />
                <div className="absolute w-10 h-10 rounded-full bg-white text-[#1b0d52] border-2 border-teal-500 shadow-xl flex items-center justify-center transform transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-[20px] font-black">swap_horiz</span>
                </div>
              </div>

              {/* Drag Range Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderVal}
                onChange={(e) => setSliderVal(Number(e.target.value))}
                aria-label="Before and After Split Slider"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40 m-0 p-0"
              />
            </div>

            {/* Micro Caption bar */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium px-1">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#006972]">drag_indicator</span>
                <span>{t('dragTip')}</span>
              </span>
              <span className="font-mono text-slate-600 bg-slate-200/70 px-2 py-0.5 rounded text-[10px] font-bold">
                {currentCase.id} • {t('lightingNotice')}
              </span>
            </div>
          </div>

          {/* RIGHT: Compact Clean Treatment Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
            
            {/* Header Badge & Title */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 text-[#006972] font-mono text-[10px] font-bold uppercase tracking-wider border border-teal-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  {currentCase.categoryTag}
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">task_alt</span>
                  {t('completedCase')}
                </span>
              </div>

              <h3 className="font-headline font-black text-lg sm:text-xl text-[#1b0d52] leading-snug">
                {currentCase.treatmentTitle}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {currentCase.treatmentSubtitle}
              </p>
            </div>

            {/* Baseline Diagnosis */}
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-0.5">
                {t('preOpDiag')}
              </span>
              <span className="text-slate-800 font-medium block leading-snug">
                {currentCase.indication}
              </span>
            </div>

            {/* Applied Treatment Protocol */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#006972] font-bold block">
                {t('appliedProtocol')}
              </span>
              <div className="space-y-1.5">
                {currentCase.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-teal-100 text-[#006972] text-[10px] font-bold flex items-center justify-center shrink-0">
                      ✓
                    </span>
                    <span className="font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compact Technical Specs (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">{t('specMaterial')}</span>
                <span className="text-xs font-bold text-[#1b0d52] block leading-tight mt-0.5">
                  {currentCase.material}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">{t('specDuration')}</span>
                <span className="text-xs font-bold text-[#1b0d52] block leading-tight mt-0.5">
                  {currentCase.duration}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">{t('specPrecision')}</span>
                <span className="text-xs font-bold text-[#1b0d52] block leading-tight mt-0.5">
                  {currentCase.precision}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">{t('specWarranty')}</span>
                <span className="text-xs font-bold text-teal-700 block leading-tight mt-0.5">
                  {currentCase.warranty}
                </span>
              </div>
            </div>

            {/* Direct Consultation CTA */}
            <div className="pt-1">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#211164] to-[#006972] text-white shadow-md shadow-[#211164]/15 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>{t('ctaEvaluate')}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
