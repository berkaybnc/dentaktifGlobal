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

// Mirror translations for other locales
treatmentsI18n.de = { ...treatmentsI18n.en, pageHeader: { ...treatmentsI18n.en.pageHeader, title: 'Unsere Spezialisierten Abteilungen für Zahnbehandlung' } };
treatmentsI18n.fr = { ...treatmentsI18n.en, pageHeader: { ...treatmentsI18n.en.pageHeader, title: 'Nos Départements Spécialisés de Soins Dentaires' } };
treatmentsI18n.ru = { ...treatmentsI18n.en, pageHeader: { ...treatmentsI18n.en.pageHeader, title: 'Наши Специализированные Отделения Стоматологии' } };

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
