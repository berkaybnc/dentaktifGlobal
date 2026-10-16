const fs = require('fs');
const path = require('path');

const treatmentsFilePath = path.join(__dirname, '..', 'src', 'data', 'treatmentsData.js');
let fileContent = fs.readFileSync(treatmentsFilePath, 'utf8');

const deData = `
treatmentsI18n.de = {
  pageHeader: {
    badge: 'Weltklasse-Zahnbehandlung & Spezialisierte Fachabteilungen',
    title: 'Unsere Spezialisierten Abteilungen für Zahnbehandlung',
    desc: 'Entdecken Sie unsere 6 hochspezialisierten Klinikteams in Istanbul, ausgestattet mit modernster deutscher CAD/CAM 3D-Frästechnologie, Morita CBCT 3D-Tomographie und zertifizierten Chirurgen.'
  },
  filterTabs: [
    { id: 'all', label: 'Alle 6 Behandlungen' },
    { id: 'aesthetic', label: 'Ästhetik & Lächeln' },
    { id: 'prosthetics', label: 'Veneers & Kronen' },
    { id: 'surgery-implants', label: 'Zahnimplantate' },
    { id: 'endodontics', label: 'Wurzelbehandlung' }
  ],
  ui: {
    stay: 'Aufenthalt in Istanbul:',
    warranty: 'Garantie:',
    highlightsTitle: 'Wichtigste Behandlungsvorteile:',
    viewDetails: 'Details & Behandlungsplan →',
    bookNow: 'Termin Buchen →',
    breadcrumbHome: 'Startseite',
    breadcrumbTreatments: 'Behandlungen',
    quoteBtn: 'Kostenloses Angebot & 3D-Plan →',
    whatsappBtn: 'WhatsApp Arzt-Hotline',
    estimatorTitle: 'Interaktiver Behandlungskalkulator',
    teethCount: 'Gewünschte Zahnanzahl:',
    teeth: 'Zähne',
    vitoTransfer: 'VIP Vito Transfer:',
    vitoIncluded: 'KOSTENLOS Inklusive',
    hotelStay: '5-Sterne Hotel:',
    hotelIncluded: 'KOSTENLOS Inklusive',
    hotelPartner: 'Partnerpreise',
    whatIs: 'Behandlungsübersicht',
    keyHighlights: 'Klinische Vorteile & Sicherheit',
    insightsBadge: 'Klinische Fachexpertise',
    insightsTitle: 'Detaillierter Leitfaden für',
    stepBadge: 'Ihr Behandlungsablauf',
    stepTitle: 'Ihr 3-Schritte-Weg in Istanbul',
    vipBadge: 'All-Inclusive Rundum-Sorglos-Paket',
    vipTitle: 'VIP-Komfort & Luxus-Vorteile',
    vipDesc: 'Genießen Sie private Chauffeur-Transfers in einer Mercedes Vito Limousine und 5-Sterne-Partnerhotels am Bosporus für eine absolut stressfreie Zahnreise.',
    matrixBadge: 'Optionen Vergleichen',
    matrixTitle: 'Zahnbehandlungs-Vergleichsmatrix',
    matrixDesc: 'Vergleichen Sie mechanische Festigkeit, Aufenthaltsdauer und Lichtdurchlässigkeit für Ihre ideale Restauration.',
    reviewsBadge: 'Verifizierte Erfahrungen',
    reviewsTitle: 'Kundenbewertungen & Echte Patientenerfahrungen',
    faqTitle: 'Häufig Gestellte Fragen',
    bottomCtaTitle: 'Bereit für Ihre Lächeln-Transformation?',
    bottomCtaDesc: 'Laden Sie Ihr Röntgenbild hoch oder schreiben Sie uns per WhatsApp für Ihren persönlichen 3D-Behandlungsplan innerhalb von 24 Stunden.',
    bottomCtaBtn: 'Kostenlose 3D-Beratung Starten →'
  },
  matrixColumns: {
    procedure: 'Behandlung',
    strength: 'Festigkeit / Technologie',
    stay: 'Aufenthalt Istanbul',
    warranty: 'Garantie',
    translucency: 'Ästhetische Transluzenz',
    prep: 'Zahnpräparation'
  },
  vipTabs: [
    {
      title: '01 – Fachärztliche Betreuung',
      subtitle: '10+ Jahre Chirurgische Exzellenz',
      desc: 'Europäische Sterilisationsstandards, zertifizierte Spezialisten und vom Gesundheitsministerium lizenzierte Operationssäle.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg'
    },
    {
      title: '02 – VIP Chauffeur-Transfer',
      subtitle: 'Privater Mercedes-Benz Vito',
      desc: 'Flughafen-, Hotel- und Klinikfahrten mit mehrsprachigen Chauffeuren für entspannte Mobilität.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/11/DENT-AKTIF-VITO.jpg'
    },
    {
      title: '03 – 5-Sterne Luxushotel',
      subtitle: 'Premium Partnerhotels',
      desc: 'Erholen Sie sich in erstklassigen Partnerhotels mit Highspeed-WLAN und persönlicher Betreuung.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Basliksiz-1-1.png'
    }
  ],
  items: {
    'aesthetic-dentistry': {
      ...treatmentsI18n.en.items['aesthetic-dentistry'],
      name: 'Ästhetische Zahnheilkunde',
      badge: 'Lächeln-Design',
      tagline: 'Laser-Bleaching, Digitales Lächeln-Design & Minimal-Invasive Kunst',
      heroDesc: 'Verjüngen Sie Ihr natürliches Lächeln mit sanften ästhetischen Methoden: Philips Zoom Laser-Bleaching, Composite Bonding und Zahnfleischharmonisierung in 1-3 Tagen.',
      stay: '1 - 3 Tage',
      warranty: '10 Jahre Garantie'
    },
    'hollywood-smile': {
      ...treatmentsI18n.en.items['hollywood-smile'],
      name: 'Hollywood Smile',
      badge: 'Premium Lächeln',
      tagline: 'Original Ivoclar E-Max® Porzellan-Veneers & Digitaler Goldener Schnitt',
      heroDesc: 'Ihr perfektes Hollywood-Lächeln in 5 Tagen in Istanbul. Nur 0,3 mm Mikropräparation und individuelle Schichtung durch Meister-Zahntechniker.',
      stay: '5 Tage',
      warranty: 'Lebenslange Garantie'
    },
    'dental-veneers': {
      ...treatmentsI18n.en.items['dental-veneers'],
      name: 'Zirkon Veneers & Verblendungen',
      badge: 'Höchste Festigkeit',
      tagline: '1200+ MPa Diamant-Festigkeit mit Katana™ Zirkonkeramik',
      heroDesc: 'Metallfreie, 100% biokompatible deutsche Multilayer-Zirkonrestaurationen für ein absolut natürliches und belastbares Traumlächeln.',
      stay: '4 - 5 Tage',
      warranty: '20 Jahre Garantie'
    },
    'dental-crowns': {
      ...treatmentsI18n.en.items['dental-crowns'],
      name: 'Zahnkronen & Brücken',
      badge: 'Voller Schutz & Beißkraft',
      tagline: 'CAD/CAM Monolithische Zirkon- & E-Max Kronen',
      heroDesc: 'Präzisionsgefräste Kronen zum Schutz stark geschädigter Zähne in natürlicher Schmelzoptik mit Mikron-Genauigkeit.',
      stay: '4 - 5 Tage',
      warranty: '15 Jahre Garantie'
    },
    'dental-implants': {
      ...treatmentsI18n.en.items['dental-implants'],
      name: 'Zahnimplantate & All-on-4/6',
      badge: 'Original Swiss Straumann®',
      tagline: 'Computergestützte Navigierte Nahtlose Implantatchirurgie',
      heroDesc: 'Ersetzen Sie fehlende Zähne dauerhaft mit lebenslanger Schweizer Straumann® Garantie und festen Zähnen innerhalb von 48 Stunden.',
      stay: '5 Tage (Sofortbelastung)',
      warranty: 'Internationaler Lebenslanger Pass'
    },
    'root-canal': {
      ...treatmentsI18n.en.items['root-canal'],
      name: 'Wurzelkanalbehandlung (Endodontie)',
      badge: 'Schmerzfreie Zahnerhaltung',
      tagline: 'Mikroskopgestützte Wurzelkanaltherapie in einer Sitzung',
      heroDesc: 'Rettet entzündete Zähne vor dem Ziehen. Schmerzfrei in unter 60 Minuten mit modernsten rotierenden Nickel-Titan-Instrumenten.',
      stay: '1 Tag',
      warranty: '10 Jahre Garantie'
    }
  }
};
`;

const ruData = `
treatmentsI18n.ru = {
  pageHeader: {
    badge: 'Стоматология мирового уровня и профильные отделения',
    title: 'Наши Специализированные Отделения Стоматологии',
    desc: 'Ознакомьтесь с 6 профильными направлениями нашей клиники в Стамбуле: собственная лаборатория CAD/CAM 3D, томограф Morita CBCT и ведущие хирурги.'
  },
  filterTabs: [
    { id: 'all', label: 'Все 6 процедур' },
    { id: 'aesthetic', label: 'Эстетика и отбеливание' },
    { id: 'prosthetics', label: 'Виниры и коронки' },
    { id: 'surgery-implants', label: 'Имплантация' },
    { id: 'endodontics', label: 'Лечение каналов' }
  ],
  ui: {
    stay: 'Срок пребывания:',
    warranty: 'Гарантия:',
    highlightsTitle: 'Ключевые преимущества:',
    viewDetails: 'Подробнее и план →',
    bookNow: 'Записаться на прием →',
    breadcrumbHome: 'Главная',
    breadcrumbTreatments: 'Процедуры',
    quoteBtn: 'Бесплатный расчет и 3D-план →',
    whatsappBtn: 'WhatsApp врача',
    estimatorTitle: 'Калькулятор стоимости лечения',
    teethCount: 'Количество зубов:',
    teeth: 'зубов',
    vitoTransfer: 'VIP трансфер Vito:',
    vitoIncluded: 'БЕСПЛАТНО включено',
    hotelStay: 'Отель 5 звезд:',
    hotelIncluded: 'БЕСПЛАТНО включено',
    hotelPartner: 'Специальная цена',
    whatIs: 'Обзор процедуры',
    keyHighlights: 'Клинические преимущества и безопасность',
    insightsBadge: 'Мнение ведущего эксперта',
    insightsTitle: 'Подробное руководство по процедуре:',
    stepBadge: 'Этапы вашего лечения',
    stepTitle: '3 шага к вашей новой улыбке в Стамбуле',
    vipBadge: 'Сервис «Все включено»',
    vipTitle: 'VIP-комфорт и премиальные преимущества',
    vipDesc: 'Индивидуальные трансферы на автомобиле Mercedes Vito и отдых в 5-звездочном отеле на Босфоре для максимального комфорта.',
    matrixBadge: 'Сравнение методов',
    matrixTitle: 'Сравнительная таблица видов реставрации',
    matrixDesc: 'Сравните прочность, сроки пребывания и эстетические свойства для выбора идеального решения.',
    reviewsBadge: 'Проверенные отзывы',
    reviewsTitle: 'Отзывы и реальные истории наших пациентов',
    faqTitle: 'Часто задаваемые вопросы',
    bottomCtaTitle: 'Готовы к преображению вашей улыбки?',
    bottomCtaDesc: 'Загрузите снимок зубов или напишите в WhatsApp, чтобы получить индивидуальный план лечения в течение 24 часов.',
    bottomCtaBtn: 'Начать бесплатную 3D-консультацию →'
  },
  matrixColumns: {
    procedure: 'Процедура',
    strength: 'Прочность / Технология',
    stay: 'Дней в Стамбуле',
    warranty: 'Гарантия',
    translucency: 'Светопроницаемость',
    prep: 'Обточка зуба'
  },
  vipTabs: [
    {
      title: '01 – Экспертная хирургия',
      subtitle: 'Более 10 лет клинического лидерства',
      desc: 'Европейские стандарты стерилизации, ведущие хирурги и операционные с государственной лицензией.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg'
    },
    {
      title: '02 – Персональный VIP трансфер',
      subtitle: 'Комфортабельный Mercedes-Benz Vito',
      desc: 'Поездки из аэропорта, отеля и клиники с водителем и персональным русскоязычным куратором.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/11/DENT-AKTIF-VITO.jpg'
    },
    {
      title: '03 – Отель 5 звезд',
      subtitle: 'Премиальные партнерские отели',
      desc: 'Комфортный отдых между визитами в клинику в лучших отелях Стамбула.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Basliksiz-1-1.png'
    }
  ],
  items: {
    'aesthetic-dentistry': {
      ...treatmentsI18n.en.items['aesthetic-dentistry'],
      name: 'Эстетическая стоматология',
      badge: 'Дизайн улыбки',
      tagline: 'Лазерное отбеливание, цифровое моделирование и микроинвазивная эстетика',
      heroDesc: 'Освежите улыбку безопасными методами: отбеливание Philips Zoom, художественная реставрация и пластика десны за 1-3 дня.',
      stay: '1 - 3 дня',
      warranty: '10 лет гарантии'
    },
    'hollywood-smile': {
      ...treatmentsI18n.en.items['hollywood-smile'],
      name: 'Голливудская улыбка (Hollywood Smile)',
      badge: 'Премиальная эстетика',
      tagline: 'Оригинальные виниры Ivoclar E-Max® и расчет золотого сечения',
      heroDesc: 'Безупречная голливудская улыбка за 5 дней в Стамбуле. Микрообточка всего 0,3 мм и индивидуальная работа мастера-керамиста.',
      stay: '5 дней',
      warranty: 'Пожизненная гарантия'
    },
    'dental-veneers': {
      ...treatmentsI18n.en.items['dental-veneers'],
      name: 'Циркониевые виниры и коронки',
      badge: 'Максимальная прочность',
      tagline: 'Алмазная прочность 1200+ МПа с немецким диоксидом циркония Katana™',
      heroDesc: 'Безметалловые биосовместимые циркониевые реставрации естественного цвета для безупречной прочности и эстетики.',
      stay: '4 - 5 дней',
      warranty: '20 лет гарантии'
    },
    'dental-crowns': {
      ...treatmentsI18n.en.items['dental-crowns'],
      name: 'Зубные коронки и мосты',
      badge: 'Защита и жевательная сила',
      tagline: 'Монолитные коронки CAD/CAM из циркония и E-Max®',
      heroDesc: 'Сверхточная защита сильно разрушенных зубов с анатомическим рельефом и безупречным прилеганием.',
      stay: '4 - 5 дней',
      warranty: '15 лет гарантии'
    },
    'dental-implants': {
      ...treatmentsI18n.en.items['dental-implants'],
      name: 'Имплантация зубов и All-on-4/6',
      badge: 'Оригинал Straumann® (Швейцария)',
      tagline: 'Навигационная бесшовная 3D-имплантация без разрезов',
      heroDesc: 'Восстановление отсутствующих зубов швейцарскими имплантами Straumann® с фиксацией несъемного моста за 48 часов.',
      stay: '5 дней (немедленная нагрузка)',
      warranty: 'Международный пожизненный паспорт'
    },
    'root-canal': {
      ...treatmentsI18n.en.items['root-canal'],
      name: 'Лечение каналов (Эндодонтия)',
      badge: 'Спасение зуба без боли',
      tagline: 'Одноэтапная эндодонтия под операционным микроскопом',
      heroDesc: 'Сохранение сильно воспаленных зубов от удаления. Безболезненная стерилизация и 3D-пломбирование каналов за 60 минут.',
      stay: '1 день',
      warranty: '10 лет гарантии'
    }
  }
};
`;

const frData = `
treatmentsI18n.fr = {
  pageHeader: {
    badge: 'Soins Dentaires d’Excellence & Pôles de Spécialités',
    title: 'Nos Départements Spécialisés de Soins Dentaires',
    desc: 'Découvrez nos 6 départements hospitaliers spécialisés à Istanbul : laboratoire d’usinage 3D CAD/CAM allemand sur place, tomographie Morita CBCT et chirurgiens certifiés.'
  },
  filterTabs: [
    { id: 'all', label: 'Tous les 6 Traitements' },
    { id: 'aesthetic', label: 'Esthétique & Sourire' },
    { id: 'prosthetics', label: 'Facettes & Couronnes' },
    { id: 'surgery-implants', label: 'Implants Dentaires' },
    { id: 'endodontics', label: 'Traitement de Canal' }
  ],
  ui: {
    stay: 'Séjour à Istanbul :',
    warranty: 'Garantie :',
    highlightsTitle: 'Avantages Clés de la Procédure :',
    viewDetails: 'Détails & Devis Gratuit →',
    bookNow: 'Prendre Rendez-vous →',
    breadcrumbHome: 'Accueil',
    breadcrumbTreatments: 'Traitements',
    quoteBtn: 'Devis Gratuit & Simulation 3D →',
    whatsappBtn: 'Ligne Directe WhatsApp',
    estimatorTitle: 'Calculateur Interactif de Soins',
    teethCount: 'Nombre de Dents :',
    teeth: 'dents',
    vitoTransfer: 'Transfert VIP Vito :',
    vitoIncluded: 'GRATUIT Inclus',
    hotelStay: 'Hôtel 5 Étoiles :',
    hotelIncluded: 'GRATUIT Inclus',
    hotelPartner: 'Tarif Partenaire',
    whatIs: 'Présentation du Traitement',
    keyHighlights: 'Avantages Cliniques & Sécurité',
    insightsBadge: 'Expertise Médicale Clinique',
    insightsTitle: 'Guide Médical Détaillé pour',
    stepBadge: 'Votre Parcours de Soins',
    stepTitle: 'Votre Parcours en 3 Étapes à Istanbul',
    vipBadge: 'Prise en Charge VIP Tout Inclus',
    vipTitle: 'Confort VIP & Avantages Exclusifs',
    vipDesc: 'Profitez de transferts privés avec chauffeur en Mercedes Vito et d’un hébergement dans des hôtels partenaires 5 étoiles pour un voyage médical serein.',
    matrixBadge: 'Comparer les Options',
    matrixTitle: 'Matrice Comparative des Soins Dentaires',
    matrixDesc: 'Comparez la résistance mécanique, la durée du séjour et la translucidité pour choisir la restauration optimale.',
    reviewsBadge: 'Avis Vérifiés',
    reviewsTitle: 'Témoignages & Retours d’Expérience de Nos Patients',
    faqTitle: 'Foire Aux Questions',
    bottomCtaTitle: 'Prêt à Transformer Votre Sourire ?',
    bottomCtaDesc: 'Envoyez votre radiographie dentaire ou écrivez-nous sur WhatsApp pour recevoir votre plan de traitement 3D sous 24 heures.',
    bottomCtaBtn: 'Démarrer Votre Consultation 3D Gratuite →'
  },
  matrixColumns: {
    procedure: 'Traitement',
    strength: 'Résistance / Technologie',
    stay: 'Séjour Istanbul',
    warranty: 'Garantie',
    translucency: 'Translucidité Esthétique',
    prep: 'Préparation Dentaire'
  },
  vipTabs: [
    {
      title: '01 – Équipe Chirurgicale Experte',
      subtitle: 'Plus de 10 ans d\\x27Excellence',
      desc: 'Normes de stérilisation européennes, chirurgiens certifiés et blocs opératoires agréés par le Ministère de la Santé.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg'
    },
    {
      title: '02 – Transfert Chauffeur VIP',
      subtitle: 'Mercedes-Benz Vito Privé',
      desc: 'Trajets aéroport, hôtel et clinique avec chauffeurs multilingues pour un confort absolu.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/11/DENT-AKTIF-VITO.jpg'
    },
    {
      title: '03 – Hôtel 5 Étoiles',
      subtitle: 'Hôtels Partenaires de Prestige',
      desc: 'Reposez-vous dans nos hôtels 5 étoiles partenaires avec Wi-Fi haut débit et conciergerie dédiée.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Basliksiz-1-1.png'
    }
  ],
  items: {
    'aesthetic-dentistry': {
      ...treatmentsI18n.en.items['aesthetic-dentistry'],
      name: 'Dentisterie Esthétique',
      badge: 'Design du Sourire',
      tagline: 'Blanchiment Laser, Design Digital du Sourire & Soins Micro-Invasifs',
      heroDesc: 'Sublimez votre sourire grâce à des techniques douces : blanchiment laser Philips Zoom, composite stratifié et réalignement gingival en 1 à 3 jours.',
      stay: '1 - 3 Jours',
      warranty: 'Garantie 10 Ans'
    },
    'hollywood-smile': {
      ...treatmentsI18n.en.items['hollywood-smile'],
      name: 'Hollywood Smile',
      badge: 'Sourire Prestige',
      tagline: 'Facettes Porcelaine Ivoclar E-Max® & Harmonisation au Nombre d’Or',
      heroDesc: 'Votre sourire de star en 5 jours à Istanbul. Micro-préparation de 0,3 mm seulement et travail d’orfèvre par nos maîtres-céramistes.',
      stay: '5 Jours',
      warranty: 'Garantie à Vie'
    },
    'dental-veneers': {
      ...treatmentsI18n.en.items['dental-veneers'],
      name: 'Facettes & Couronnes Zircone',
      badge: 'Haute Résistance',
      tagline: 'Résistance Diamant 1200+ MPa avec la Zircone Allemande Katana™',
      heroDesc: 'Restaurations multicouches 100% biocompatibles sans métal pour un rendu naturel et une solidité à toute épreuve.',
      stay: '4 - 5 Jours',
      warranty: 'Garantie 20 Ans'
    },
    'dental-crowns': {
      ...treatmentsI18n.en.items['dental-crowns'],
      name: 'Couronnes & Bridges Dentaires',
      badge: 'Protection & Confort de Mastication',
      tagline: 'Couronnes Monolithiques CAD/CAM en Zircone et E-Max®',
      heroDesc: 'Protection sur mesure pour les dents fragilisées avec une précision microscopique reproduisant l’émail naturel.',
      stay: '4 - 5 Jours',
      warranty: 'Garantie 15 Ans'
    },
    'dental-implants': {
      ...treatmentsI18n.en.items['dental-implants'],
      name: 'Implants Dentaires & All-on-4/6',
      badge: 'Original Straumann® Suisse',
      tagline: 'Chirurgie Implantaire Naviguée 3D Sans Incision Ni Suture',
      heroDesc: 'Remplacez vos dents manquantes avec la garantie mondiale Straumann® et la pose de dents fixes temporaires en 48 heures.',
      stay: '5 Jours (Mise en charge immédiate)',
      warranty: 'Passeport International à Vie'
    },
    'root-canal': {
      ...treatmentsI18n.en.items['root-canal'],
      name: 'Traitement de Canal (Endodontie)',
      badge: 'Sauvetage Dentaire Indolore',
      tagline: 'Endodontie au Microscope Opératoire en Une Seule Séance',
      heroDesc: 'Préservez vos dents naturelles et soulagez toute douleur en moins de 60 minutes grâce à des instruments rotatifs de haute technologie.',
      stay: '1 Jour',
      warranty: 'Garantie 10 Ans'
    }
  }
};
`;

// Replace lines 278-281:
// treatmentsI18n.de = { ...treatmentsI18n.en, pageHeader: { ...treatmentsI18n.en.pageHeader, title: 'Unsere Spezialisierten Abteilungen für Zahnbehandlung' } };
// treatmentsI18n.fr = { ...treatmentsI18n.en, pageHeader: { ...treatmentsI18n.en.pageHeader, title: 'Nos Départements Spécialisés de Soins Dentaires' } };
// treatmentsI18n.ru = { ...treatmentsI18n.en, pageHeader: { ...treatmentsI18n.en.pageHeader, title: 'Наши Специализированные Отделения Стоматологии' } };

const targetString = `// Mirror translations for other locales
treatmentsI18n.de = { ...treatmentsI18n.en, pageHeader: { ...treatmentsI18n.en.pageHeader, title: 'Unsere Spezialisierten Abteilungen für Zahnbehandlung' } };
treatmentsI18n.fr = { ...treatmentsI18n.en, pageHeader: { ...treatmentsI18n.en.pageHeader, title: 'Nos Départements Spécialisés de Soins Dentaires' } };
treatmentsI18n.ru = { ...treatmentsI18n.en, pageHeader: { ...treatmentsI18n.en.pageHeader, title: 'Наши Специализированные Отделения Стоматологии' } };`;

fileContent = fileContent.replace(/\r\n/g, '\n');

if (!fileContent.includes(targetString)) {
  console.error('Target string not matched in treatmentsData.js');
  process.exit(1);
}

fileContent = fileContent.replace(targetString, deData + '\n' + ruData + '\n' + frData + '\n');
fs.writeFileSync(treatmentsFilePath, fileContent, 'utf8');
console.log('Successfully updated treatmentsData.js with full DE, RU, FR translations!');


