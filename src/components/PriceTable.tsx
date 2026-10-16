'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/navigation';

interface TreatmentPlan {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  techniqueHighlight: string;
  techniques: string[];
  ukEuropeBenchmark: string;
  advantage: string;
  ctaText: string;
}

const TREATMENTS_BY_LOCALE: Record<string, TreatmentPlan[]> = {
  en: [
    {
      id: 'veneers',
      badge: 'POPULAR AESTHETIC CHOICE',
      title: 'Smile Makeover (E-Max® Veneers)',
      subtitle: 'Minimally Invasive Aesthetic Restoration',
      techniqueHighlight: '0.3mm Micro-Prep & Chairside Master Ceramist Mock-Up',
      techniques: [
        '3D Digital Smile Design (DSD) with facial proportion alignment',
        'Minimal-invasive 0.3mm enamel preservation protocol',
        'Chairside master ceramist custom translucent shade stratification',
        'Original Ivoclar Vivadent IPS e.max® with Certificate of Authenticity',
      ],
      ukEuropeBenchmark: 'UK / EU Private Clinics: £15,000 – £18,500',
      advantage: 'Up to ~72% Direct Cost Advantage with All-Inclusive VIP Hospitality',
      ctaText: 'Request Custom Veneer Blueprint',
    },
    {
      id: 'implants',
      badge: 'SURGICAL EXCELLENCE',
      title: 'All-on-4 / All-on-6 Surgical Rehabilitation',
      subtitle: 'Full-Arch Bone-Integrated Fixed Bridge',
      techniqueHighlight: 'Computer-Guided Flapless 3D Digital Stent Surgery',
      techniques: [
        'Pre-op high-resolution 3D CBCT tomographic bone density mapping',
        'Computer-guided flapless surgery for minimal swelling & fast recovery',
        'Original Swiss Straumann® SLA implants with Lifetime Global Passport',
        'Same-day provisional fixed teeth loading (Immediate Function)',
      ],
      ukEuropeBenchmark: 'UK / EU Private Clinics: £14,000 – £19,000',
      advantage: 'Up to ~70% Direct Cost Advantage with Luxury Recovery Suite',
      ctaText: 'Consult With Chief Implantologist',
    },
    {
      id: 'zirconia',
      badge: 'MAXIMUM DURABILITY',
      title: 'Monolithic CAD/CAM Zirconia Crowns',
      subtitle: 'High-Strength Bio-Inert Full Rehabilitation',
      techniqueHighlight: 'Robotic 15-Micron Precision Multi-Layer Milling',
      techniques: [
        'German Katana™ multi-layered high-translucency gradient blocks',
        'Sub-gingival laser margin contouring preventing gum recession',
        'Zero metal framework — 100% hypoallergenic & biocompatible',
        'Direct in-house lab custom color grading for natural light transmission',
      ],
      ukEuropeBenchmark: 'UK / EU Private Clinics: £14,500 – £18,000',
      advantage: 'Up to ~74% Direct Cost Advantage with Hotel & Chauffeur Included',
      ctaText: 'Request Zirconia Specification Plan',
    },
  ],
  tr: [
    {
      id: 'veneers',
      badge: 'EN ÇOK TERCİH EDİLEN ESTETİK',
      title: 'Gülüş Tasarımı (E-Max® Lamine Veneer)',
      subtitle: 'Minimal İnvaziv Estetik Restorasyon',
      techniqueHighlight: '0.3mm Mikro-Prep & Baş Ucu Master Seramist Provası',
      techniques: [
        'Yüz oranlarına göre 3D Dijital Gülüş Tasarımı (DSD) analizi',
        'Mine dokusunu koruyan 0.3mm mikro-preparasyon protokolü',
        'Master seramist ile koltuk başında kişiye özel ışık geçirgenliği katmanlaması',
        'Orijinallik sertifikalı orijinal Ivoclar Vivadent IPS e.max® porselen',
      ],
      ukEuropeBenchmark: 'İngiltere / AB Özel Klinikleri: £15.000 – £18.500',
      advantage: 'Her Şey Dahil VIP Hizmetle %72\'ye Varan Doğrudan Fiyat Avantajı',
      ctaText: 'Özel Lamine Planı Talep Edin',
    },
    {
      id: 'implants',
      badge: 'CERRAHİ MÜKEMMELLİK',
      title: 'All-on-4 / All-on-6 Cerrahi Rehabilitasyon',
      subtitle: 'Tam Çene Kemiğe Entegre Sabit Köprü',
      techniqueHighlight: 'Bilgisayar Kılavuzlu Dikişsiz 3D Dijital Stent Cerrahisi',
      techniques: [
        'Operasyon öncesi yüksek çözünürlüklü 3D CBCT kemik yoğunluğu haritası',
        'Minimum şişlik ve hızlı iyileşme sağlayan dikişsiz cerrahi rehber',
        'Ömür boyu küresel pasaportlu orijinal İsviçre Straumann® SLA implantlar',
        'Aynı gün içinde sabit geçici diş yüklemesi (Anında Fonksiyon)',
      ],
      ukEuropeBenchmark: 'İngiltere / AB Özel Klinikleri: £14.000 – £19.000',
      advantage: 'Lüks İyileşme Süiti ile %70\'e Varan Doğrudan Fiyat Avantajı',
      ctaText: 'Baş Cerrah ile Görüşün',
    },
    {
      id: 'zirconia',
      badge: 'MAKSİMUM DAYANIKLILIK',
      title: 'Monolitik CAD/CAM Zirkonyum Kuronlar',
      subtitle: 'Yüksek Dayanımlı Biyo-Uyumlu Tam Çiğneme Rehabilitasyonu',
      techniqueHighlight: 'Robotik 15-Mikron Hassasiyette Çok Katmanlı Kazıma',
      techniques: [
        'Alman Katana™ çok katmanlı yüksek ışık geçirgenlikli zirkonyum bloklar',
        'Diş eti çekilmesini önleyen sub-gingival lazer basamak konturlama',
        'Metalsiz altyapı — %100 biyo-uyumlu ve alerji riski olmayan yapı',
        'Doğal ışık yansıması için klinik içi laboratuvarda doğrudan renk pişirimi',
      ],
      ukEuropeBenchmark: 'İngiltere / AB Özel Klinikleri: £14.500 – £18.000',
      advantage: 'Otel ve VIP Şoför Dahil %74\'e Varan Doğrudan Tasarruf',
      ctaText: 'Zirkonyum Şartname Planı İsteyin',
    },
  ],
  de: [
    {
      id: 'veneers',
      badge: 'BELIEBTE ÄSTHETISCHE WAHL',
      title: 'Smile Makeover (E-Max® Veneers)',
      subtitle: 'Minimal-invasive ästhetische Restauration',
      techniqueHighlight: '0,3 mm Mikropreparation & Vor-Ort-Anpassung durch den Keramikmeister',
      techniques: [
        '3D Digital Smile Design (DSD) mit Gesichtsproportionsanalyse',
        'Zahnhartsubstanzschonendes 0,3 mm Erhaltungsprotokoll',
        'Individuelle Transluzenzschichtung direkt am Behandlungsstuhl',
        'Original Ivoclar Vivadent IPS e.max® mit Echtheitszertifikat',
      ],
      ukEuropeBenchmark: 'UK / EU Privatkliniken: 15.000 £ – 18.500 £',
      advantage: 'Bis zu ~72 % direkter Kostenvorteil inkl. All-Inclusive VIP-Betreuung',
      ctaText: 'Individuellen Veneer-Plan anfordern',
    },
    {
      id: 'implants',
      badge: 'CHIRURGISCHE EXZELLENZ',
      title: 'All-on-4 / All-on-6 Chirurgische Rehabilitation',
      subtitle: 'Festsitzende Vollkiefer-Brücke',
      techniqueHighlight: 'Computergestützte, schlüssellochgeführte 3D-Stent-Chirurgie',
      techniques: [
        'Präoperative hochauflösende 3D-DVT Knochendichtemessung',
        'Geführte schlüssellochchirurgische Implantation für schnelle Genesung',
        'Original Schweizer Straumann® SLA Implantate mit lebenslangem Pass',
        'Feste provisorische Zähne am selben Tag (Sofortbelastung)',
      ],
      ukEuropeBenchmark: 'UK / EU Privatkliniken: 14.000 £ – 19.000 £',
      advantage: 'Bis zu ~70 % direkter Kostenvorteil mit Luxus-Erholungssuite',
      ctaText: 'Chefarzt für Implantologie konsultieren',
    },
    {
      id: 'zirconia',
      badge: 'MAXIMALE LANGLEBIGKEIT',
      title: 'Monolithische CAD/CAM Zirkonkronen',
      subtitle: 'Hochfeste bioinerte Gesamtrehabilitation',
      techniqueHighlight: 'Robotisches Fräsen mit 15-Mikron-Präzision in Multilayer-Technik',
      techniques: [
        'Deutsche Katana™ Multilayer-Blöcke mit natürlichem Farbgradienten',
        'Subgingivale Laserrandkonturierung gegen Zahnfleischrückgang',
        'Absolut metallfrei — 100 % hypoallergen und biokompatibel',
        'Farbabgleich direkt im hauseigenen Labor für lebendige Lichtbrechung',
      ],
      ukEuropeBenchmark: 'UK / EU Privatkliniken: 14.500 £ – 18.000 £',
      advantage: 'Bis zu ~74 % direkter Preisvorteil inklusive Hotel und Chauffeur',
      ctaText: 'Zirkon-Spezifikationsplan anfordern',
    },
  ],
  ru: [
    {
      id: 'veneers',
      badge: 'ПОПУЛЯРНЫЙ ЭСТЕТИЧЕСКИЙ ВЫБОР',
      title: 'Преображение улыбки (Виниры E-Max®)',
      subtitle: 'Минимально инвазивная эстетическая реставрация',
      techniqueHighlight: 'Микропрепарирование 0.3 мм и прямая примерка с керамистом',
      techniques: [
        '3D цифровое моделирование улыбки (DSD) с учетом черт лица',
        'Протокол сохранения эмали с микропрепарированием 0.3 мм',
        'Индивидуальная послойная передача прозрачности у кресла пациента',
        'Оригинальный дисиликат лития Ivoclar Vivadent IPS e.max® с сертификатом',
      ],
      ukEuropeBenchmark: 'Частные клиники Великобритании/ЕС: £15,000 – £18,500',
      advantage: 'Прямая выгода до ~72% с полным пакетом VIP-сервиса',
      ctaText: 'Запросить индивидуальный план виниров',
    },
    {
      id: 'implants',
      badge: 'ХИРУРГИЧЕСКОЕ СОВЕРШЕНСТВО',
      title: 'Хирургическая реабилитация All-on-4 / All-on-6',
      subtitle: 'Несъемный мостовидный протез на всю челюсть',
      techniqueHighlight: 'Навигационная 3D-хирургия по шаблону без разрезов',
      techniques: [
        'Предоперационная 3D КЛКТ томография плотности костной ткани',
        'Безоперационная установка по шаблону для быстрого заживления без отеков',
        'Оригинальные швейцарские импланты Straumann® SLA с международным паспортом',
        'Немедленная нагрузка несъемным адаптационным мостом в тот же день',
      ],
      ukEuropeBenchmark: 'Частные клиники Великобритании/ЕС: £14,000 – £19,000',
      advantage: 'Выгода до ~70% с проживанием в люкс-номере',
      ctaText: 'Консультация с главным хирургом',
    },
    {
      id: 'zirconia',
      badge: 'МАКСИМАЛЬНАЯ ПРОЧНОСТЬ',
      title: 'Монолитные коронки из циркония CAD/CAM',
      subtitle: 'Высокопрочная биосовместимая тотальная реабилитация',
      techniqueHighlight: 'Роботизированное фрезерование с точностью до 15 микрон',
      techniques: [
        'Немецкие многослойные циркониевые диски Katana™ с градиентом прозрачности',
        'Лазерная обработка десневого края для профилактики рецессии',
        '100% без металла — гипоаллергенный и биологически инертный материал',
        'Индивидуальный глазуровочный обжиг в собственной лаборатории клиники',
      ],
      ukEuropeBenchmark: 'Частные клиники Великобритании/ЕС: £14,500 – £18,000',
      advantage: 'Выгода до ~74% с отелем и персональным водителем',
      ctaText: 'Запросить спецификацию на цирконий',
    },
  ],
  fr: [
    {
      id: 'veneers',
      badge: 'CHOIX ESTHÉTIQUE PRIVILÉGIÉ',
      title: 'Transformation du Sourire (Facettes E-Max®)',
      subtitle: 'Restauration Esthétique Minimalement Invasive',
      techniqueHighlight: 'Micro-préparation de 0,3 mm et ajustement direct avec le maître céramiste',
      techniques: [
        'Digital Smile Design (DSD) 3D aligné sur les proportions faciales',
        'Protocole ultra-conservateur préservant l’émail avec micro-préparation 0,3 mm',
        'Stratification de translucidité sur-mesure réalisée au fauteuil',
        'IPS e.max® Ivoclar Vivadent d’origine avec certificat d’authenticité',
      ],
      ukEuropeBenchmark: 'Cliniques Privées UK/FR: 15 000 £ – 18 500 £',
      advantage: 'Jusqu’à ~72% d’économie directe avec conciergerie VIP tout compris',
      ctaText: 'Demander le Projet Personnalisé de Facettes',
    },
    {
      id: 'implants',
      badge: 'EXCELLENCE CHIRURGICALE',
      title: 'Réhabilitation Chirurgicale All-on-4 / All-on-6',
      subtitle: 'Bridge Fixe Ostéo-Intégré Arcade Complète',
      techniqueHighlight: 'Chirurgie guidée par stent 3D sans lambeau',
      techniques: [
        'Cartographie osseuse préopératoire haute résolution CBCT 3D',
        'Chirurgie guidée par ordinateur garantissant un rétablissement rapide sans œdème',
        'Implants suisses d’origine Straumann® SLA avec passeport mondial à vie',
        'Mise en charge immédiate de prothèse provisoire fixe le jour même',
      ],
      ukEuropeBenchmark: 'Cliniques Privées UK/FR: 14 000 £ – 19 000 £',
      advantage: 'Jusqu’à ~70% d’économie directe avec suite de convalescence VIP',
      ctaText: 'Consulter le Chirurgien Implantologue Chef',
    },
    {
      id: 'zirconia',
      badge: 'DURABILITÉ MAXIMALE',
      title: 'Couronnes Zircone Monolithiques CAD/CAM',
      subtitle: 'Réhabilitation Complète Haute Résistance Bio-Inerte',
      techniqueHighlight: 'Usinage robotisé multicouche avec précision de 15 microns',
      techniques: [
        'Blocs multicouches allemands Katana™ à dégradé de translucidité naturel',
        'Contournage laser sous-gingival prévenant toute récession',
        'Armature 100% sans métal, anallergique et biocompatible',
        'Teinte et glaçage individualisés directement dans notre laboratoire interne',
      ],
      ukEuropeBenchmark: 'Cliniques Privées UK/FR: 14 500 £ – 18 000 £',
      advantage: 'Jusqu’à ~74% d’économie directe avec hôtel et chauffeur inclus',
      ctaText: 'Demander la Spécification Zircone',
    },
  ],
  ar: [
    {
      id: 'veneers',
      badge: 'الخيار التجميلي الأكثر طلباً',
      title: 'تجميل الابتسامة (قشور E-Max®)',
      subtitle: 'ترميم تجميلي طفيف التوغل',
      techniqueHighlight: 'برد مجهري 0.3 مم وتجربة حية مباشرة مع كبير فناني الخزف',
      techniques: [
        'تصميم الابتسامة الرقمي 3D DSD بما ينسجم تماماً مع ملامح الوجه',
        'بروتوكول تحفظي للغاية يحافظ على مينا الأسنان ببرد 0.3 مم فقط',
        'تدرج لوني فائق الشفافية يتم تشكيله وصقله على كرسي العلاج',
        'قشور IPS e.max® الأصلية من Ivoclar Vivadent مع شهادة أصالة',
      ],
      ukEuropeBenchmark: 'العيادات الخاصة في أوروبا والمملكة المتحدة: £15,000 – £18,500',
      advantage: 'توفير مباشر يصل إلى ~72% مع باقة الضيافة الفاخرة VIP الشاملة كلياً',
      ctaText: 'طلب المخطط التجميلي للقشور',
    },
    {
      id: 'implants',
      badge: 'التميز الجراحي المتقدم',
      title: 'إعادة التأهيل الجراحي All-on-4 / All-on-6',
      subtitle: 'جسر ثابت متكامل ملتحم بالعظم للفك بالكامل',
      techniqueHighlight: 'جراحة ملاحة ثلاثية الأبعاد 3D موجهة بالحاسوب بدون شق جراحي',
      techniques: [
        'تخطيط عظمي مقطعي عالي الدقة 3D CBCT قبل الجراحة لقياس كثافة العظم',
        'جراحة بدون شق موجهة بالكمبيوتر لتعافي سريع جداً بدون تورم',
        'زرعات Straumann® SLA السويسرية الأصلية مع جواز سفر عالمي مدى الحياة',
        'تحميل فوري لأسنان ثابتة ومؤقتة في نفس اليوم (وظيفة مضغ فورية)',
      ],
      ukEuropeBenchmark: 'العيادات الخاصة في أوروبا والمملكة المتحدة: £14,000 – £19,000',
      advantage: 'توفير مباشر يصل إلى ~70% مع جناح إقامة واستشفاء فاخر',
      ctaText: 'استشارة مع كبير جراحي الزرع',
    },
    {
      id: 'zirconia',
      badge: 'أقصى درجات الصلابة والمتانة',
      title: 'تيجان الزيركون المتجانس CAD/CAM',
      subtitle: 'ترميم كامل عالي القوة ومتوافق حيوياً بنسبة 100%',
      techniqueHighlight: 'نحت روبوتي خماسي المحاور بدقة 15 ميكرون وتقنية الطبقات المتعددة',
      techniques: [
        'كتل Katana™ الألمانية متعددة الطبقات بتدرج لوني طبيعي يحاكي الضوء',
        'تحديد الحواف بالليزر تحت خط اللثة لمنع حدوث أي انحسار لثوي',
        'خالٍ تماماً من المعادن — متوافق حيوياً 100% ومضاد للتحسس',
        'مطابقة وتلميع الخزف داخل مختبرنا بالمستشفى لنفاذية ضوئية حيوية',
      ],
      ukEuropeBenchmark: 'العيادات الخاصة في أوروبا والمملكة المتحدة: £14,500 – £18,000',
      advantage: 'توفير مباشر يصل إلى ~74% مع الفندق والسائق الخاص مشمولين بالكامل',
      ctaText: 'طلب خطة مواصفات الزيركون',
    },
  ],
};

const AMENITIES_BY_LOCALE: Record<string, Array<{ icon: string; title: string; desc: string }>> = {
  en: [
    { icon: 'hotel', title: '5-Star Partner Hotel', desc: '4-5 Nights luxury stay in Levent / Bosphorus' },
    { icon: 'airport_shuttle', title: 'VIP Mercedes Vito Chauffeur', desc: 'Airport (IST/SAW) ↔ Hotel ↔ Hospital clinic' },
    { icon: 'translate', title: 'Dedicated Medical Coordinator', desc: 'Native EN, DE, FR, RU, TR patient support' },
    { icon: 'verified_user', title: 'Comprehensive 3D Diagnostics', desc: 'CBCT scans, medication kit & warranty passport' },
  ],
  tr: [
    { icon: 'hotel', title: '5 Yıldızlı Partner Otel', desc: 'Levent / Boğaz hattında 4-5 gece lüks konaklama' },
    { icon: 'airport_shuttle', title: 'Özel Mercedes Vito Şoför', desc: 'Havalimanı (IST/SAW) ↔ Otel ↔ Hastane transferi' },
    { icon: 'translate', title: 'Kişisel Sağlık Koordinatörü', desc: 'TR, EN, DE, FR, RU ana dilde 7/24 rehberlik' },
    { icon: 'verified_user', title: 'Kapsamlı 3D Teşhis & Garanti', desc: '3D CBCT tomografi, ilaç kiti & uluslararası pasaport' },
  ],
  de: [
    { icon: 'hotel', title: '5-Sterne Partnerhotel', desc: '4-5 Nächte Luxusaufenthalt in Levent / Bosporus' },
    { icon: 'airport_shuttle', title: 'VIP Mercedes Vito Chauffeur', desc: 'Flughafen (IST/SAW) ↔ Hotel ↔ Klinikum' },
    { icon: 'translate', title: 'Persönlicher Koordinator', desc: 'Muttersprachliche DE, EN, FR, RU Patientenbetreuung' },
    { icon: 'verified_user', title: 'Umfassende 3D-Diagnostik', desc: 'DVT-Scans, Medikamentenpaket & Garantiepass' },
  ],
  ru: [
    { icon: 'hotel', title: '5-звездочный отель-партнер', desc: '4-5 ночей в люксовом отеле в Левенте / Босфоре' },
    { icon: 'airport_shuttle', title: 'Личный Mercedes Vito с водителем', desc: 'Аэропорт (IST/SAW) ↔ Отель ↔ Больница' },
    { icon: 'translate', title: 'Русскоязычный координатор', desc: 'Полная поддержка на родном языке 24/7' },
    { icon: 'verified_user', title: 'Полная 3D-диагностика', desc: 'КЛКТ-снимки, аптечный набор и гарантийный паспорт' },
  ],
  fr: [
    { icon: 'hotel', title: 'Hôtel Partenaire 5 Étoiles', desc: '4-5 nuits dans un établissement de luxe à Levent / Bosphore' },
    { icon: 'airport_shuttle', title: 'Chauffeur Privé Mercedes Vito', desc: 'Aéroport (IST/SAW) ↔ Hôtel ↔ Clinique hospitalière' },
    { icon: 'translate', title: 'Coordinateur Médical Francophone', desc: 'Assistance dédiée dans votre langue 24h/24' },
    { icon: 'verified_user', title: 'Diagnostic 3D & Passeport Garantie', desc: 'Scanner CBCT 3D, kit de soins et garantie internationale' },
  ],
  ar: [
    { icon: 'hotel', title: 'فندق شريك فاخر 5 نجوم', desc: 'إقامة 4-5 ليالٍ في منطقة ليفنت / البوسفور' },
    { icon: 'airport_shuttle', title: 'سائق خاص وسيارة مرسيدس فيتو VIP', desc: 'المطار (IST/SAW) ↔ الفندق ↔ المستشفى' },
    { icon: 'translate', title: 'منسق طبي شخصي مخصص', desc: 'دعم ورعاية للمرضى باللغة العربية والإنجليزية 24/7' },
    { icon: 'verified_user', title: 'فحوصات وتشخيص 3D شامل', desc: 'أشعة CBCT مقطعية، باقة الأدوية وجواز سفر الضمان' },
  ],
};

export default function PriceTable() {
  const t = useTranslations('priceTable');
  const locale = useLocale();

  const treatments = TREATMENTS_BY_LOCALE[locale] || TREATMENTS_BY_LOCALE.en;
  const amenities = AMENITIES_BY_LOCALE[locale] || AMENITIES_BY_LOCALE.en;

  const protocolIncludesLabel = {
    en: 'What Our Clinical Protocol Includes:',
    tr: 'Klinik Protokolümüzün Kapsamı:',
    de: 'Was unser klinisches Protokoll beinhaltet:',
    ru: 'Что включает наш клинический протокол:',
    fr: 'Ce que comprend notre protocole clinique :',
    ar: 'ما تتضمنه باقة البروتوكول السريري في المستشفى:',
  }[locale] || 'What Our Clinical Protocol Includes:';

  const hospitalProtocolTag = {
    en: 'Hospital Protocol',
    tr: 'Hastane Protokolü',
    de: 'Klinikprotokoll',
    ru: 'Протокол клиники',
    fr: 'Protocole Hospitalier',
    ar: 'بروتوكول المستشفى',
  }[locale] || 'Hospital Protocol';

  const keyTechLabel = {
    en: 'Key Surgical / Lab Technique:',
    tr: 'Temel Cerrahi / Laboratuvar Tekniği:',
    de: 'Wesentliche chirurgische / labortechnische Methode:',
    ru: 'Ключевая хирургическая / лабораторная методика:',
    fr: 'Technique Chirurgicale / Laboratoire Clé :',
    ar: 'التقنية الجراحية والمخبرية الرئيسية:',
  }[locale] || 'Key Surgical / Lab Technique:';

  const wizardBtnLabel = {
    en: 'Or use our 3-Step Online Form',
    tr: 'Veya 3 Adımlı Online Formu Kullanın',
    de: 'Oder nutzen Sie unser 3-Schritte-Online-Formular',
    ru: 'Или воспользуйтесь нашей 3-этапной онлайн-формой',
    fr: 'Ou utilisez notre formulaire en 3 étapes',
    ar: 'أو استخدم نموذجنا الإلكتروني في 3 خطوات',
  }[locale] || 'Or use our 3-Step Online Form';

  return (
    <section className="w-full py-20 bg-slate-50 border-b border-slate-200" id="cost-calculator-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#006699] font-extrabold flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#006699] animate-pulse"></span>
            {t('badge')}
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-black text-[#211164] tracking-tight">
            {t('title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {t('desc')}
          </p>
        </div>

        {/* Why We Don't Provide Flat Quotes Banner */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#211164]/5 via-white to-emerald-50/50 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#211164] text-white flex items-center justify-center shrink-0 shadow-md">
              <span className="material-symbols-outlined text-[22px]">vital_signs</span>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-[#211164] font-headline">
                {t('bannerTitle')}
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                {t('bannerDesc')}
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#1b0d52] hover:bg-[#281570] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
          >
            {locale === 'tr' ? 'Ücretsiz Değerlendirme İçin Gönderin' : 'Submit Records for Free Evaluation'}
          </Link>
        </div>

        {/* Technique & Value Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12">
          {treatments.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Card Top / Header */}
              <div className="p-6 sm:p-7 border-b border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-extrabold uppercase tracking-wider bg-[#211164]/10 text-[#211164]">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-emerald-700 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    {hospitalProtocolTag}
                  </span>
                </div>

                <div>
                  <h3 className="font-headline text-lg sm:text-xl font-black text-[#211164]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{item.subtitle}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                    {keyTechLabel}
                  </span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                    {item.techniqueHighlight}
                  </span>
                </div>
              </div>

              {/* Card Body / Technique Checklist */}
              <div className="p-6 sm:p-7 space-y-4 flex-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                  {protocolIncludesLabel}
                </span>
                <ul className="space-y-2.5">
                  {item.techniques.map((tech, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                      <span className="material-symbols-outlined text-emerald-600 text-[18px] shrink-0 mt-[-1px]">
                        check_circle
                      </span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>

                {/* Benchmark & Advantage Highlight */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] text-slate-400 line-through font-medium">
                    {item.ukEuropeBenchmark}
                  </div>
                  <div className="text-xs font-extrabold text-emerald-800 bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-200 flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-700 text-sm">trending_down</span>
                    <span>{item.advantage}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer / Action Button */}
              <div className="p-6 sm:p-7 pt-0 space-y-2.5">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#211164] text-white hover:bg-opacity-90 transition-all shadow-md group-hover:shadow-lg text-center"
                >
                  {item.ctaText}
                </Link>

                <a
                  href="#consultation-wizard"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-[11px] font-bold text-slate-600 hover:text-[#211164] transition-colors"
                >
                  <span>{wizardBtnLabel}</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Evidence of Full International Care Package Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 text-xs shadow-sm">
          {amenities.map((amenity, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">{amenity.icon}</span>
              </div>
              <div>
                <div className="font-bold text-slate-900 font-headline text-xs">{amenity.title}</div>
                <div className="text-[11px] text-slate-500">{amenity.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
