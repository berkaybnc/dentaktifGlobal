/* ==========================================================================
   DENT AKTIF CLINIC GLOBAL - SPECIALIZED 6 FLAGSHIP TREATMENTS DATA
   Exact 6 Departments from official Dentaktif portal:
   1. Aesthetic Dentistry
   2. Hollywood Smile
   3. Dental Zirconium Veneers
   4. Dental Crowns
   5. Dental Implants
   6. Root Canal Treatment
   ========================================================================== */

export const treatmentsI18n = {
  // --------------------------------------------------------------------------
  // ENGLISH (EN)
  // --------------------------------------------------------------------------
  en: {
    pageHeader: {
      badge: 'World-Class Dental Care & Specialized Treatment Portfolio',
      title: 'Our Specialized Dental Treatment Departments',
      desc: 'Explore our 6 core specialized hospital departments in Istanbul equipped with in-house German CAD/CAM 3D milling, Morita CBCT tomography, and certified surgical faculties.'
    },
    filterTabs: [
      { id: 'all', label: 'All 6 Treatments' },
      { id: 'aesthetic', label: 'Aesthetic & Smile' },
      { id: 'prosthetics', label: 'Veneers & Crowns' },
      { id: 'surgery-implants', label: 'Dental Implants' },
      { id: 'endodontics', label: 'Root Canal' }
    ],
    ui: {
      stay: 'Stay in Istanbul:',
      warranty: 'Warranty:',
      highlightsTitle: 'Key Procedure Highlights:',
      viewDetails: 'View Details & Plan →',
      bookNow: 'Book Appointment →',
      breadcrumbHome: 'Home',
      breadcrumbTreatments: 'Treatments',
      quoteBtn: 'Get Free Quote & 3D Plan →',
      whatsappBtn: 'WhatsApp Doctor Line',
      estimatorTitle: 'Interactive Treatment Estimator',
      teethCount: 'Target Teeth Count:',
      teeth: 'Teeth',
      vitoTransfer: 'VIP Vito Transfer:',
      vitoIncluded: 'FREE Included',
      hotelStay: '5-Star Hotel Stay:',
      hotelIncluded: 'FREE Included',
      hotelPartner: 'Partner Rates',
      whatIs: 'Procedure Overview',
      keyHighlights: 'Clinical Advantages & Safety',
      insightsBadge: 'Specialist Clinical Insights',
      insightsTitle: 'Detailed Medical Guide for',
      stepBadge: 'Your Clinical Journey',
      stepTitle: 'Your 3-Step Journey in Istanbul',
      vipBadge: 'All-Inclusive Hospital Care',
      vipTitle: 'VIP Comfort & Luxury Benefits',
      vipDesc: 'Enjoy private chauffeured Mercedes Vito airport and clinic transfers along with 5-star Bosphorus hotel stays for a stress-free medical vacation.',
      matrixBadge: 'Compare Clinical Options',
      matrixTitle: 'Dental Treatment Comparison Matrix',
      matrixDesc: 'Compare mechanical strength, stay duration, and translucency to choose your ideal restoration.',
      reviewsBadge: 'Verified Reviews',
      reviewsTitle: 'Customer Comments & Real Patient Stories',
      faqTitle: 'Frequently Asked Questions',
      bottomCtaTitle: 'Ready for Your Smile Transformation?',
      bottomCtaDesc: 'Upload your dental X-ray or WhatsApp us to receive a personalized surgical treatment plan and binding quotation within 24 hours.',
      bottomCtaBtn: 'Start Free 3D Consultation Now →'
    },
    matrixColumns: {
      procedure: 'Procedure Name',
      strength: 'Strength / Tech',
      stay: 'Stay in Istanbul',
      warranty: 'Warranty',
      translucency: 'Aesthetics',
      prep: 'Tooth Prep'
    },
    vipTabs: [
      {
        title: '01 – Certified Surgical Care',
        subtitle: '18+ Years Chief Surgical Leadership',
        desc: 'European hospital sterilization standards, chief oral surgeons, and Ministry of Health licensed international clinical suites.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg'
      },
      {
        title: '02 – VIP Chauffeur Transfer',
        subtitle: 'Private Mercedes-Benz Vito',
        desc: 'Door-to-door private airport and hospital clinic transfers with bilingual VIP drivers for stress-free travel.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/11/DENT-AKTIF-VITO.jpg'
      },
      {
        title: '03 – 5-Star Hotel Stay',
        subtitle: 'Luxury Bosphorus & Levent Partners',
        desc: 'Relax in peaceful 5-star partner hotels with high-speed internet and personal international coordinators at your service.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Basliksiz-1-1.png'
      }
    ],
    items: {
      // 1. Aesthetic Dentistry
      'aesthetic-dentistry': {
        name: 'Aesthetic Dentistry',
        category: 'aesthetic',
        badge: 'Smile Aesthetics',
        icon: '✨',
        tagline: 'Laser Teeth Whitening, Digital Smile Design & Minimal-Invasive Artistry',
        heroDesc: 'Enhance your natural smile with non-invasive aesthetic procedures. Office-grade Philips Zoom laser whitening, artistic composite bonding, and painless laser gum contouring in just 1 to 3 days.',
        stay: '1 - 3 Days',
        warranty: '10-Year Clinical Warranty',
        anesthesia: 'Needle-Free Computerized Topical Anesthesia',
        material: 'Philips Zoom WhiteSpeed Laser & Tokuyama® Nano-Hybrid Resins',
        overview: 'Aesthetic dentistry focuses on fine-tuning natural tooth shape, enamel shade, and gum symmetry using micro-invasive techniques that preserve 100% of natural tooth vitality.',
        highlights: [
          'Up to 8 shades whiter with 45-minute Philips Zoom laser power',
          'No-prep aesthetic composite veneers for chips and minor gaps',
          'Laser gingivoplasty to correct uneven gumlines and gummy smiles',
          'Same-day immediate aesthetic confidence transformation'
        ],
        steps: [
          { step: '01', title: 'Shade Mapping & Gum Protection', desc: 'Digital spectrophotometer color baseline and protective gingival barrier application.' },
          { step: '02', title: 'Laser Activation Cycles', desc: 'Three 15-minute Philips Zoom laser cycles for maximum enamel brightness.' },
          { step: '03', title: 'Enamel Remineralization', desc: 'Application of ACP relief gel to eliminate post-whitening sensitivity.' }
        ],
        faq: [
          { q: 'How long do laser whitening results last?', a: 'With good oral hygiene and periodic home touch-ups, whitening results typically last 2 to 3 years.' },
          { q: 'Is aesthetic dentistry painful?', a: 'Not at all. Treatments are gentle, non-invasive, and completed with topical or computerized micro-anesthesia.' }
        ]
      },

      // 2. Hollywood Smile
      'hollywood-smile': {
        name: 'Hollywood Smile',
        category: 'aesthetic',
        badge: 'Cosmetic Makeover',
        icon: '💎',
        tagline: 'Signature Smile Transformations with Handcrafted Ivoclar Vivadent E-Max® Veneers',
        heroDesc: 'Transform your facial harmony with bespoke, ultra-thin Ivoclar Vivadent E-Max® porcelain laminates. Digital smile design, chairside master ceramist try-in, and natural translucency handcrafted in 5 days.',
        stay: '5 Days (2 Clinical Sessions)',
        warranty: 'Lifetime International Warranty Passport',
        anesthesia: 'Painless Wand® Micro-Delivery Anesthesia',
        material: 'Genuine Liechtenstein Ivoclar E-Max® Press Ingots',
        overview: 'Hollywood Smile is a comprehensive aesthetic smile architecture custom-designed to match your lips, facial midline, and skin undertones with lifelike light transmission and zero artificial chiclet look.',
        highlights: [
          '0.3mm ultra-thin minimal enamel preparation',
          'Live 3D intraoral mock-up preview before any tooth is touched',
          'Chairside Master Ceramist shade grading from natural to BL1 Bleach',
          'Permanent high-strength adhesive resin bonding'
        ],
        steps: [
          { step: '01', title: 'Digital Smile Design & Live Mock-Up', desc: 'Interactive smile preview directly on your teeth under studio lighting.' },
          { step: '02', title: 'Micro-Preparation & In-House Milling', desc: '0.3mm gentle enamel conditioning and German 5-axis robotic milling.' },
          { step: '03', title: 'Master Ceramist Glaze & Bonding', desc: 'Chairside shade customization and permanent high-strength adhesive cementation.' }
        ],
        faq: [
          { q: 'Will my teeth look overly white or artificial?', a: 'No. Our Master Ceramists hand-layer multi-gradient translucency into every veneer, replicating natural tooth anatomy and light reflections.' },
          { q: 'Do E-Max veneers stain from coffee or wine?', a: 'Never. Non-porous E-Max glass ceramics are 100% stain-resistant and will never discolor over time.' }
        ]
      },

      // 3. Dental Zirconium Veneers
      'dental-veneers': {
        name: 'Dental Zirconium Veneers',
        category: 'prosthetics',
        badge: 'Zirconium & Porcelain',
        icon: '👑',
        tagline: 'High-Strength Monolithic Kuraray Katana™ Multilayer Zirconia Veneers',
        heroDesc: 'Reconstruct discolored, chipped, or slightly misaligned teeth with ultra-durable monolithic zirconia veneers. German CAD/CAM 15-micron robotic milling combining 1200+ MPa diamond strength with optical translucency.',
        stay: '4 - 5 Days',
        warranty: '20-Year Guarantee Certificate',
        anesthesia: 'Painless Local Anesthesia',
        material: 'German Katana™ Ultra-Translucent Multilayer Zirconia',
        overview: 'Zirconium veneers combine the fracture resistance of high-grade zirconia with multi-layered color gradients, ideal for patients who want maximum longevity and resistance to heavy bite wear.',
        highlights: [
          '1200+ MPa flexural strength eliminating chipping or porcelain fracture',
          'Laser gingival margin scanning eliminating dark metal margins at gums',
          '15-micron precision marginal seal preventing bacterial micro-leakage',
          'Zero metal framework — 100% hypoallergenic and biologically inert'
        ],
        steps: [
          { step: '01', title: '3Shape TRIOS® Intraoral Scan', desc: 'Optical 3D scanning without messy impression trays or gagging.' },
          { step: '02', title: '5-Axis In-House Robotic Milling', desc: 'Robotic milling of Katana multilayer blocks directly in our hospital lab.' },
          { step: '03', title: 'Occlusal Try-in & Permanent Fit', desc: 'Dynamic bite balance verification and permanent resin cementation.' }
        ],
        faq: [
          { q: 'What is the difference between Zirconium and E-Max veneers?', a: 'E-Max offers maximum glass-ceramic translucency for front teeth, while Zirconium provides supreme flexural strength, ideal for high bite force and heavy grinders.' },
          { q: 'How long do zirconium veneers last?', a: 'With standard dental hygiene, zirconium veneers last 15 to 25+ years without staining or wear.' }
        ]
      },

      // 4. Dental Crowns
      'dental-crowns': {
        name: 'Dental Crowns',
        category: 'prosthetics',
        badge: 'Fixed Prosthetics',
        icon: '🛡️',
        tagline: '360° Full-Coverage Monolithic Zirconia & Ceramic Dental Crowns',
        heroDesc: 'Protect heavily damaged, cracked, or root-canal-treated teeth with custom-milled monolithic zirconia and porcelain crowns. 15-micron precision marginal fit handcrafted in our on-site dental laboratory.',
        stay: '4 - 5 Days',
        warranty: '15-Year Clinical Guarantee',
        anesthesia: 'Painless Computerized Local Anesthesia',
        material: 'Kuraray Noritake Katana™ Multi-Layer Zirconia & Ivoclar E-Max®',
        overview: 'Dental crowns provide full 360-degree anatomical encapsulation to reinforce compromised tooth roots, restore natural chewing forces, and protect against fracture.',
        highlights: [
          'Full anatomical chewing surface reconstruction',
          '15-micron margin precision eliminating gum irritation and dark borders',
          'Biocompatible 100% metal-free zirconia and glass-ceramic options',
          'Direct shade-matching under surgical operatory light with master ceramists'
        ],
        steps: [
          { step: '01', title: 'Optical 3D Intraoral Digital Scan', desc: 'Digital optical impression of prepared tooth and opposing bite alignment.' },
          { step: '02', title: '5-Axis Robotic CAD/CAM Milling', desc: 'In-house robotic milling with zero laboratory outsourcing delays.' },
          { step: '03', title: 'Chairside Try-In & Permanent Adhesive Bonding', desc: 'Micro-occlusal check and high-strength resin bonding.' }
        ],
        faq: [
          { q: 'When is a crown needed instead of a veneer?', a: 'A veneer covers only the front surface, whereas a crown encapsulates the entire tooth, recommended when significant tooth structure is lost or after root canal therapy.' },
          { q: 'Do crowns feel like natural teeth?', a: 'Yes. Modern CAD/CAM crowns replicate exact natural tooth morphology and bite balance.' }
        ]
      },

      // 5. Dental Implants
      'dental-implants': {
        name: 'Dental Implants',
        category: 'surgery-implants',
        badge: 'Implantology',
        icon: '⚙️',
        tagline: 'Swiss Straumann® Immediate-Load Implants & All-on-4 / All-on-6 Solutions',
        heroDesc: 'Replace missing teeth with world-renowned Swiss Straumann® Roxolid and SLActive implants. From single-tooth keyhole surgeries to full-arch All-on-4 immediate loading with fixed bridges.',
        stay: '5 Days (Phase 1)',
        warranty: 'Lifetime International Guarantee Passport',
        anesthesia: 'Painless Computer-Controlled Anesthesia / IV Sedation',
        material: 'Original Swiss Straumann® Titanium-Zirconium Alloy',
        overview: 'Dental implants act as biocompatible artificial tooth roots integrated directly into jawbone, permanently halting facial bone loss and restoring 100% natural chewing strength.',
        highlights: [
          'Official Swiss Straumann® Platinum Center of Excellence',
          'Computer-guided flapless 3D stent surgery (no scalpel, no stitches)',
          'Immediate temporary fixed aesthetic bridge within 48-72 hours',
          'Lifetime manufacturer warranty card with international barcode verification'
        ],
        steps: [
          { step: '01', title: '3D Tomography & Digital Stent', desc: 'Virtual computer simulation of optimal implant angulation and bone density.' },
          { step: '02', title: 'Keyhole Implant Surgery', desc: '10 to 15-minute gentle placement per implant using computer-guided surgical guides.' },
          { step: '03', title: 'Immediate Fixed Temporary Bridge', desc: 'Placement of high-aesthetic temporary teeth during the bone integration period.' }
        ],
        faq: [
          { q: 'Will I be left without teeth during healing?', a: 'Never. Our immediate-loading protocol equips you with aesthetic, fixed temporary teeth before you depart Istanbul.' },
          { q: 'What is the success rate of Straumann implants at Dent Aktif?', a: 'Our documented clinical osseointegration success rate exceeds 99.2% over 18+ years of surgical practice.' }
        ]
      },

      // 6. Root Canal Treatment
      'root-canal': {
        name: 'Root Canal Treatment',
        category: 'endodontics',
        badge: 'Endodontic Care',
        icon: '🔬',
        tagline: 'Microscopic Painless Root Canal Therapy to Save Natural Teeth',
        heroDesc: 'Save deeply decayed or infected teeth from extraction in a single comfortable visit. Our endodontic faculty utilizes high-magnification surgical operating microscopes and thermal biocompatible filling systems.',
        stay: '1 Day (Single Session)',
        warranty: '10-Year Clinical Guarantee',
        anesthesia: '100% Painless Computerized Anesthesia',
        material: 'Biocompatible Warm Gutta-Percha & Rotary Nickel-Titanium Files',
        overview: 'Endodontic therapy cleanses infected pulp tissue from inside root canals, sterilizes micro-channels under surgical magnification, and hermetically seals roots to prevent tooth loss.',
        highlights: [
          'High-power dental operating microscope for finding hidden canals',
          'Single-session completed in under 60 minutes with zero pain',
          'Preserves your natural tooth root for lifetime function',
          'Instant relief from throbbing pain and hot-cold sensitivity'
        ],
        steps: [
          { step: '01', title: 'Digital Periapical Diagnostics', desc: 'High-contrast imaging to trace canal curvature and infection apex.' },
          { step: '02', title: 'Microscopic Debridement', desc: 'Ultrasonic rotary cleaning and biocompatible antibacterial irrigation.' },
          { step: '03', title: 'Thermal 3D Canal Obturation', desc: 'Hermetic three-dimensional sealing with warm gutta-percha.' }
        ],
        faq: [
          { q: 'Is root canal treatment painful?', a: 'Not at all. With modern computerized anesthesia, the sensation is no different than receiving a simple filling.' },
          { q: 'Can a crowned tooth receive root canal treatment?', a: 'Yes, endodontic therapy can be performed through an existing restoration or followed by a new protective crown.' }
        ]
      }
    }
  }
};


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
      subtitle: 'Plus de 10 ans d\x27Excellence',
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


treatmentsI18n.tr = {
  pageHeader: {
    badge: 'Dünya Standartlarında Diş Tedavisi & Uzman Bölümler',
    title: 'Özel Diş Tedavisi Bölümlerimiz',
    desc: 'İstanbul merkezimizde Alman CAD/CAM 3D kazıma, Morita CBCT tomografi ve uzman cerrahi kadromuzla donatılmış 6 temel uzmanlık alanımızı keşfedin.'
  },
  filterTabs: [
    { id: 'all', label: 'Tüm 6 Tedavi' },
    { id: 'aesthetic', label: 'Estetik & Gülüş' },
    { id: 'prosthetics', label: 'Lamine & Kuron' },
    { id: 'surgery-implants', label: 'Dental İmplant' },
    { id: 'endodontics', label: 'Kanal Tedavisi' }
  ],
  ui: {
    stay: 'İstanbul Kalış Süresi:',
    warranty: 'Garanti:',
    highlightsTitle: 'Öne Çıkan Özellikler:',
    viewDetails: 'Detayları & Planı Gör →',
    bookNow: 'Randevu Al →',
    breadcrumbHome: 'Ana Sayfa',
    breadcrumbTreatments: 'Tedaviler',
    quoteBtn: 'Ücretsiz Teklif & 3D Plan Al →',
    whatsappBtn: 'WhatsApp Doktor Hattı',
    estimatorTitle: 'Etkileşimli Tedavi Hesaplayıcı',
    teethCount: 'Hedef Diş Sayısı:',
    teeth: 'Diş',
    vitoTransfer: 'VIP Vito Transfer:',
    vitoIncluded: 'ÜCRETSİZ Dahil',
    hotelStay: '5 Yıldızlı Otel:',
    hotelIncluded: 'ÜCRETSİZ Dahil',
    hotelPartner: 'Partner Fiyatı',
    whatIs: 'İşleme Genel Bakış',
    keyHighlights: 'Klinik Avantajlar & Güvenlik',
    insightsBadge: 'Uzman Klinik Görüşü',
    insightsTitle: 'Detaylı Medikal Rehber:',
    stepBadge: 'Tedavi Yolculuğunuz',
    stepTitle: "İstanbul'da 3 Adımlı Süreç",
    vipBadge: 'Her Şey Dahil Hastane Konforu',
    vipTitle: 'VIP Konfor & Ayrıcalıklar',
    vipDesc: 'Özel şoförlü Mercedes Vito havalimanı ve klinik transferleri ile 5 yıldızlı otel konaklamasının keyfini çıkarın.',
    matrixBadge: 'Seçenekleri Karşılaştırın',
    matrixTitle: 'Diş Tedavisi Karşılaştırma Tablosu',
    matrixDesc: 'Mekanik dayanım, kalış süresi ve ışık geçirgenliğini karşılaştırarak en uygun restorasyonu seçin.',
    reviewsBadge: 'Doğrulanmış Yorumlar',
    reviewsTitle: 'Gerçek Hasta Deneyimleri',
    faqTitle: 'Sıkça Sorulan Sorular',
    bottomCtaTitle: 'Gülüş Dönüşümünüze Başlamaya Hazır mısınız?',
    bottomCtaDesc: 'Röntgeninizi yükleyin veya WhatsApp ile iletişime geçerek 24 saat içinde kişiye özel cerrahi planınızı alın.',
    bottomCtaBtn: 'Ücretsiz 3D Konsültasyonu Başlat →'
  },
  matrixColumns: {
    procedure: 'Tedavi Adı',
    strength: 'Dayanım / Teknoloji',
    stay: 'İstanbul Süresi',
    warranty: 'Garanti',
    translucency: 'Estetik Işık Geçirgenliği',
    prep: 'Diş Aşındırması'
  },
  vipTabs: [
    {
      title: '01 – Uzman Cerrahi Bakım',
      subtitle: '10+ Yıl Klinik Liderlik',
      desc: 'Avrupa hastane sterilizasyon standartları, uzman cerrahlar ve Sağlık Bakanlığı lisanslı uluslararası ameliyathaneler.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg'
    },
    {
      title: '02 – VIP Şoför Transferi',
      subtitle: 'Özel Mercedes-Benz Vito',
      desc: 'Havalimanı, otel ve klinik arasında çok dilli özel şoförlerle stressiz kapıdan kapıya transfer.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/11/DENT-AKTIF-VITO.jpg'
    },
    {
      title: '03 – 5 Yıldızlı Otel',
      subtitle: 'Lüks Partner Oteller',
      desc: 'Yüksek hızlı interneti ve özel hasta koordinatörleriyle huzurlu 5 yıldızlı partner otellerde konaklayın.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Basliksiz-1-1.png'
    }
  ],
  items: {
    'aesthetic-dentistry': {
      ...treatmentsI18n.en.items['aesthetic-dentistry'],
      name: 'Estetik Diş Hekimliği',
      badge: 'Gülüş Estetiği',
      tagline: 'Lazerle Diş Beyazlatma, Dijital Gülüş Tasarımı & Minimal İnvaziv Sanat',
      heroDesc: 'Doğal gülüşünüzü invaziv olmayan estetik işlemlerle yenileyin. Philips Zoom lazer beyazlatma, kompozit bonding ve ağrısız diş eti estetiği ile 1-3 günde parlak bir gülüş.',
      stay: '1 - 3 Gün',
      warranty: '10 Yıl Klinik Garanti'
    },
    'hollywood-smile': {
      ...treatmentsI18n.en.items['hollywood-smile'],
      name: 'Hollywood Smile',
      badge: 'Gülüş Dönüşümü',
      tagline: 'Orijinal Ivoclar E-Max® Porselen Lamine & Dijital Altın Oran Tasarımı',
      heroDesc: "İstanbul'da 5 günde Hollywood standartlarında bir gülüş. 0.3mm mikro prep ve master seramist ile kişiselleştirilmiş ışık geçirgenliğine sahip lamine porselenler.",
      stay: '5 Gün',
      warranty: 'Ömür Boyu Garanti'
    },
    'dental-veneers': {
      ...treatmentsI18n.en.items['dental-veneers'],
      name: 'Zirkonyum Kaplama & Lamine',
      badge: 'Maksimum Dayanıklılık',
      tagline: '1200+ MPa Elmas Dayanımında Katana™ Zirkonyum Restorasyonlar',
      heroDesc: 'Metalsiz, %100 biyo-uyumlu ve diş eti dostu Alman Katana çok katmanlı zirkonyum kaplamalarla doğal diş formunda kusursuz gülüş.',
      stay: '4 - 5 Gün',
      warranty: '20 Yıl Garanti'
    },
    'dental-crowns': {
      ...treatmentsI18n.en.items['dental-crowns'],
      name: 'Diş Kuronları & Köprü',
      badge: 'Tam Koruma & Çiğneme Gücü',
      tagline: 'CAD/CAM Destekli Monolitik Zirkon & E-Max Kuronlar',
      heroDesc: 'Aşırı madde kaybı olan dişlerinizi güçlendiren, doğal diş minesi renginde mikron hassasiyetli kuronlar.',
      stay: '4 - 5 Gün',
      warranty: '15 Yıl Garanti'
    },
    'dental-implants': {
      ...treatmentsI18n.en.items['dental-implants'],
      name: 'Dental İmplantlar & All-on-4/6',
      badge: 'Orijinal İsviçre Straumann®',
      tagline: 'Bilgisayar Destekli Navigasyonlu Dikişsiz İmplant Cerrahisi',
      heroDesc: 'Eksik dişlerinizi ömür boyu garantili İsviçre Straumann implantları ve 48 saatte sabitlenen geçici köprülerle hemen tamamlayın.',
      stay: '5 Gün (Hemen Yükleme)',
      warranty: 'Global Ömür Boyu Pasaport'
    },
    'root-canal': {
      ...treatmentsI18n.en.items['root-canal'],
      name: 'Kanal Tedavisi (Endodonti)',
      badge: 'Ağrısız Diş Kurtarma',
      tagline: 'Mikroskop Destekli Döner Aletli Tek Seans Kanal Tedavisi',
      heroDesc: 'Ağrılı veya iltihaplı dişlerinizi çekilmekten kurtaran, konforlu ve tek seansta tamamlanan mikro-endodontik tedavi.',
      stay: '1 Gün',
      warranty: '10 Yıl Garanti'
    }
  }
};

export const TREATMENT_IMAGES = {
  'aesthetic-dentistry': 'https://dentaktifglobal.com/wp-content/uploads/2024/03/Benefits-of-Hollywood-Smile.webp',
  'hollywood-smile': 'https://dentaktifglobal.com/wp-content/uploads/2024/03/Hollywood-Smile-What-to-Expect.webp',
  'dental-veneers': 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-1024x853-1.webp',
  'dental-crowns': 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Basliksiz-1-1.png',
  'dental-implants': 'https://dentaktifglobal.com/wp-content/uploads/2025/11/DENT-AKTIF-VITO.jpg',
  'root-canal': 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg',
};

export function getTreatmentsData(lang = 'en') {
  return treatmentsI18n[lang] || treatmentsI18n['en'];
}

export function getTreatmentsList(lang = 'en') {
  const data = getTreatmentsData(lang);
  return Object.keys(data.items).map((id) => {
    const item = data.items[id];
    return {
      id,
      category: item.category,
      name: item.name,
      badge: item.badge,
      icon: item.icon,
      tagline: item.tagline,
      description: item.heroDesc,
      duration: item.stay,
      warranty: item.warranty,
      image: TREATMENT_IMAGES[id] || TREATMENT_IMAGES['hollywood-smile'],
      highlights: item.highlights || []
    };
  });
}

export function getTreatmentDetail(treatmentId, lang = 'en') {
  const data = getTreatmentsData(lang);
  const fallbackId = 'hollywood-smile';
  const item = data.items[treatmentId] || data.items[fallbackId];

  return {
    ...item,
    image: TREATMENT_IMAGES[treatmentId] || TREATMENT_IMAGES[fallbackId],
    ui: data.ui,
    vipTabs: data.vipTabs,
    matrixColumns: data.matrixColumns,
    comparisonMatrix: [
      { name: 'Aesthetic Dentistry', strength: 'Natural Enamel', stay: '1 - 3 Days', warranty: '10 Years', translucency: '⭐ ⭐ ⭐ ⭐ ⭐', prep: 'Micro-Invasive' },
      { name: 'Hollywood Smile (E-Max®)', strength: '1000 MPa', stay: '5 Days', warranty: 'Lifetime', translucency: '⭐ ⭐ ⭐ ⭐ ⭐', prep: '0.3mm' },
      { name: 'Dental Zirconium Veneers', strength: '1200+ MPa', stay: '4 - 5 Days', warranty: '20 Years', translucency: '⭐ ⭐ ⭐ ⭐', prep: 'Minimal' },
      { name: 'Dental Crowns (Zirconia)', strength: '1200+ MPa', stay: '4 - 5 Days', warranty: '15 Years', translucency: '⭐ ⭐ ⭐ ⭐', prep: '360° Crown' },
      { name: 'Dental Implants (Straumann®)', strength: 'Titanium-Zirconium', stay: '5 Days', warranty: 'Lifetime', translucency: '⭐ ⭐ ⭐ ⭐ ⭐', prep: 'Flapless' },
      { name: 'Root Canal Treatment', strength: 'Natural Tooth', stay: '1 Day', warranty: '10 Years', translucency: 'Natural', prep: 'Microscopic' },
    ]
  };
}
