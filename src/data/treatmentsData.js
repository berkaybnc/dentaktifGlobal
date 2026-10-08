/* ==========================================================================
   DENT AKTIF CLINIC GLOBAL - MULTILINGUAL TREATMENTS DATA
   Full 12 Clinical Departments from dentaktif.com in EN, TR, DE, RU
   ========================================================================== */

export const treatmentsI18n = {
  // --------------------------------------------------------------------------
  // ENGLISH (EN)
  // --------------------------------------------------------------------------
  en: {
    pageHeader: {
      badge: 'World-Class Dental Care & Full Clinical Portfolio',
      title: 'Our 12 Specialized Dental Treatment Departments',
      desc: 'Explore our complete hospital departments in Istanbul equipped with in-house German CAD/CAM 3D milling, Morita CBCT tomography, and certified surgical faculties.'
    },
    filterTabs: [
      { id: 'all', label: 'All 12 Treatments' },
      { id: 'surgery-implants', label: '⚙️ Surgery & Implants' },
      { id: 'aesthetic-cosmetic', label: '✨ Aesthetic & Smile' },
      { id: 'prosthetics', label: '👑 Veneers & Crowns' },
      { id: 'general-care', label: '🔬 General & Endodontics' },
      { id: 'specialized', label: '🛡️ Specialized & Diagnostics' }
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
      'oral-surgery': {
        name: 'Oral & Maxillofacial Surgery',
        category: 'surgery-implants',
        badge: 'Cerrahi Diş Tedavileri',
        icon: '🏥',
        tagline: 'Advanced Surgical Bone Augmentation & Sinus Lift in Istanbul',
        heroDesc: 'Comprehensive oral and maxillofacial surgeries including 3D guided sinus lifting, autogenous bone grafting, complex cyst enucleations, and impacted wisdom tooth extractions performed by our faculty surgeons.',
        stay: '3 - 5 Days',
        warranty: 'Lifetime Surgical Guarantee',
        anesthesia: 'Computerized Painless Anesthesia & Conscious IV Sedation',
        material: 'Swiss Geistlich Bio-Oss® Bone Matrix & Titanium Membranes',
        overview: 'Oral and maxillofacial surgery deals with complex anatomical jawbone deficiencies, severe atrophy, and impacted teeth to reconstruct an optimal foundation for implants and permanent dental health.',
        highlights: [
          'Pre-surgical 3D CBCT bone density mapping & nerve canal tracing',
          'Minimally invasive piezosurgery ultrasonic bone cutting',
          'Open & closed sinus lift protocols with Swiss Bio-Oss® collagen',
          'Rapid healing with PRF (Platelet-Rich Fibrin) biological growth factors'
        ],
        steps: [
          { step: '01', title: '3D Volumetric CBCT Tomography', desc: 'Precision millimetric mapping of maxillary sinuses and mandibular nerve canals.' },
          { step: '02', title: 'Ultrasonic Piezosurgery', desc: 'Vibration-guided bone grafting and gentle sinus elevation without soft-tissue trauma.' },
          { step: '03', title: 'Biological PRF Acceleration', desc: 'Application of autologous growth factors to accelerate bone consolidation.' }
        ],
        faq: [
          { q: 'Is jaw bone surgery or sinus lifting painful?', a: 'No. With computer-guided local anesthesia and sedation, the procedure is completely pain-free, with postoperative healing supported by anti-inflammatory protocols.' },
          { q: 'Can implants be placed simultaneously with bone grafting?', a: 'Yes. In cases with adequate primary stability, guided implant placement and bone augmentation are completed in the exact same session.' }
        ]
      },

      'dental-implants': {
        name: 'Dental Implant Treatments',
        category: 'surgery-implants',
        badge: 'İmplant Diş Tedavileri',
        icon: '⚙️',
        tagline: 'Swiss Straumann® Immediate-Load Implants & All-on-4 / All-on-6',
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

      'sedation-anesthesia': {
        name: 'General Anesthesia & Sedation',
        category: 'specialized',
        badge: 'Genel Anestezi ve Sedasyon',
        icon: '😴',
        tagline: '100% Fear-Free, Painless Dentistry for Dental Phobia Patients',
        heroDesc: 'Eliminate all dental anxiety and phobia. Our certified hospital operating suites and licensed medical anesthesiologists provide conscious IV twilight sedation and general anesthesia for stress-free treatment.',
        stay: '1 - 3 Days',
        warranty: 'Hospital Safety Certified',
        anesthesia: 'Conscious IV Twilight Sedation & General Anesthesia',
        material: 'Hospital-Grade Hemodynamic Monitoring & Rapid-Recovery Agents',
        overview: 'Sedation dentistry allows patients with severe gag reflexes, dental phobia, or those undergoing extensive full-mouth surgical rehabilitations to complete procedures peacefully while in a relaxed, sleep-like state.',
        highlights: [
          'Administered directly by hospital specialist anesthesiologists',
          'Continuous real-time ECG, pulse oximetry, and blood pressure monitoring',
          'No memory of sound, drills, or surgical instruments after awakening',
          'Rapid wake-up within 20 minutes with zero post-operative grogginess'
        ],
        steps: [
          { step: '01', title: 'Pre-Anesthetic Medical Assessment', desc: 'Evaluation of blood biochemistry, cardiovascular profile, and medical history.' },
          { step: '02', title: 'Gentle IV Twilight Induction', desc: 'Patient gently enters a deeply relaxing, anxiety-free sleep state.' },
          { step: '03', title: 'Rapid Recovery & Discharge', desc: 'Smooth awakening in our private recovery suite with dedicated nursing care.' }
        ],
        faq: [
          { q: 'Is dental sedation safe?', a: 'Extremely safe. It is monitored in full accordance with European hospital anesthesia standards with dedicated anesthesiologists.' },
          { q: 'Can all my dental work be completed in one sedation session?', a: 'Yes. Up to 8-10 implants or a full arch preparation can be safely completed in a single 2 to 3-hour sedation session.' }
        ]
      },

      'hollywood-smile': {
        name: 'Hollywood Smile Makeover',
        category: 'aesthetic-cosmetic',
        badge: 'Kozmetik Uygulamalar',
        icon: '💎',
        tagline: 'Signature Smile Transformations with 20 Ivoclar Vivadent E-Max® Veneers',
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

      'aesthetic-dentistry': {
        name: 'Aesthetic Dentistry & Smile Design',
        category: 'aesthetic-cosmetic',
        badge: 'Estetik Diş Tedavileri',
        icon: '✨',
        tagline: 'Laser Teeth Whitening, Digital Smile Design & Composite Artistry',
        heroDesc: 'Enhance your natural smile with non-invasive aesthetic procedures. Office-grade Philips Zoom laser whitening, artistic composite bonding, and painless laser gum contouring in just 1 to 3 days.',
        stay: '1 - 3 Days',
        warranty: '10-Year Clinical Warranty',
        anesthesia: 'Needle-Free Computerized Topical Anesthesia',
        material: 'Philips Zoom WhiteSpeed Laser & Tokuyama® Nano-Hybrid Resins',
        overview: 'Aesthetic dentistry focuses on fine-tuning natural tooth shape, enamel shade, and gum symmetry using micro-invasive techniques that preserve 100% of natural tooth structure.',
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
          { q: 'How long do laser whitening results last?', a: 'With good oral hygiene and periodic home touch-ups, whitening results typically last 2 to 3 years.' }
        ]
      },

      'dental-veneers': {
        name: 'Prosthetic Dentistry & Zirconia Bridges',
        category: 'prosthetics',
        badge: 'Protetik Tedaviler',
        icon: '👑',
        tagline: 'High-Strength Monolithic Kuraray Katana™ Multilayer Zirconia Restorations',
        heroDesc: 'Reconstruct badly worn, broken, or discolored teeth with high-translucency monolithic zirconia full bridges and crowns. German CAD/CAM 15-micron robotic milling for flawless marginal fit.',
        stay: '4 - 5 Days',
        warranty: '20-Year Guarantee Certificate',
        anesthesia: 'Painless Local Anesthesia',
        material: 'German Katana™ Ultra-Translucent Multilayer Zirconia',
        overview: 'Modern prosthodontics replaces compromised tooth structures with biocompatible monolithic zirconia that combines 1200+ MPa diamond-grade fracture resistance with natural aesthetic translucency.',
        highlights: [
          '1200+ MPa flexural strength eliminating chipping or porcelain fracture',
          'Laser gingival margin scanning eliminating dark metal margins at gums',
          '15-micron precision marginal seal preventing bacterial leakage',
          'Ideal for heavy grinders (bruxism) and extensive full-mouth bridges'
        ],
        steps: [
          { step: '01', title: '3Shape TRIOS® Intraoral Scan', desc: 'Optical 3D scanning without messy impression trays or gagging.' },
          { step: '02', title: '5-Axis In-House Robotic Milling', desc: 'Robotic milling of Katana multilayer blocks directly in our hospital lab.' },
          { step: '03', title: 'Occlusal Try-in & Permanent Fit', desc: 'Dynamic bite balance verification and permanent resin cementation.' }
        ],
        faq: [
          { q: 'Is zirconia better than traditional porcelain-fused-to-metal (PFM)?', a: 'Far superior. Zirconia is 100% metal-free, biocompatible with gums, never produces grey gum lines, and will never chip.' }
        ]
      },

      'root-canal': {
        name: 'Endodontics & Root Canal Care',
        category: 'general-care',
        badge: 'Endodonti – Kanal Tedavisi',
        icon: '🔬',
        tagline: 'Microscopic Painless Root Canal Therapy to Save Natural Teeth',
        heroDesc: 'Save deeply decayed or infected teeth from extraction in a single comfortable visit. Our endodontic faculty utilizes high-magnification surgical operating microscopes and thermal biocompatible filling systems.',
        stay: '1 Day (Single Session)',
        warranty: '10-Year Clinical Guarantee',
        anesthesia: '100% Painless Computerized Anesthesia',
        material: 'Biocompatible Warm Gutta-Percha & Rotary Nickel-Titanium Files',
        overview: 'Endodontic therapy cleanses infected pulp tissue from inside root canals, sterilizes micro-channels under surgical magnification, and seals roots to prevent tooth loss.',
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
          { q: 'Is root canal treatment painful?', a: 'Not at all. With modern computerized anesthesia, the sensation is no different than receiving a simple filling.' }
        ]
      },

      'restorative-dentistry': {
        name: 'Conservative & Restorative Dentistry',
        category: 'general-care',
        badge: 'Konservatif Tedaviler',
        icon: '🛡️',
        tagline: 'Biocompatible Nano-Hybrid Composite Fillings & Ceramic Inlays/Onlays',
        heroDesc: 'Restore cavity-damaged teeth with tooth-colored, toxic-free nano-hybrid composites and lab-crafted ceramic inlays. Micro-invasive restorations that bond seamlessly with natural enamel.',
        stay: '1 - 2 Days',
        warranty: '10-Year Guarantee',
        anesthesia: 'Painless Local Anesthesia',
        material: 'Tokuyama Asteria® Nano-Composites & IPS e.max® Inlays',
        overview: 'Conservative dentistry focuses on repairing structural tooth damage and decay while preserving maximum healthy enamel using adhesive biomechanics and biocompatible resins.',
        highlights: [
          '100% Mercury-free, BPA-free tooth-shaded restorations',
          'Nano-hybrid composite resins perfectly matched to enamel shade',
          'CAD/CAM ceramic inlays and onlays for extensive molar damage',
          'Re-establishes natural bite fissures and chewing anatomy'
        ],
        steps: [
          { step: '01', title: 'Laser Decay Removal', desc: 'Gentle clearance of decayed tissue while conserving sound enamel.' },
          { step: '02', title: 'Adhesive Layering Artistry', desc: 'Incremental polychromatic composite layering matching natural dentin and enamel.' },
          { step: '03', title: 'Diamond Polishing', desc: 'Ultra-smooth surface glaze ensuring resistance to plaque adhesion.' }
        ],
        faq: [
          { q: 'Can I replace my old silver amalgam fillings?', a: 'Yes. We safely remove old dark amalgam fillings under rubber dam isolation and replace them with natural tooth-colored composites.' }
        ]
      },

      'periodontics': {
        name: 'Periodontology & Gum Disease Therapy',
        category: 'specialized',
        badge: 'Periodontoloji – Diş Eti Tedavisi',
        icon: '🌿',
        tagline: 'Laser Gingivectomy, Deep Scaling & Gum Recession Connective Grafts',
        heroDesc: 'Treat bleeding gums, periodontal pockets, and gum recession. Our periodontists utilize diode lasers and regenerative microsurgery to halt bone loss, cure halitosis, and perfect gum aesthetics.',
        stay: '2 - 4 Days',
        warranty: 'Periodontal Stability Protocol',
        anesthesia: 'Needle-Free Computerized Anesthesia',
        material: 'Diode Soft-Tissue Laser & Emdogain® Enamel Matrix Proteins',
        overview: 'Periodontology treats the supporting structures of teeth (gums and alveolar bone). Healthy gums are the essential biological foundation for veneers and implants.',
        highlights: [
          'Biolase diode laser debridement eliminating pathogenic bacteria',
          'Laser gummy smile correction (painless gingivectomy in 20 mins)',
          'Microsurgical connective tissue grafting for receding gums',
          'Halitosis (chronic bad breath) elimination protocol'
        ],
        steps: [
          { step: '01', title: 'Periodontal Pocket Probing', desc: 'Detailed 6-point charting to measure gum attachment and bone height.' },
          { step: '02', title: 'Ultrasonic & Laser Deep Scaling', desc: 'Subgingival ultrasonic cleaning combined with laser bacterial decontamination.' },
          { step: '03', title: 'Laser Contour & Biostimulation', desc: 'Symmetrical gumline shaping and cellular regeneration stimulation.' }
        ],
        faq: [
          { q: 'Can gum disease cause dental implants to fail?', a: 'Yes. Treating periodontal bacteria prior to implant placement is mandatory to ensure long-term osseointegration and prevent peri-implantitis.' }
        ]
      },

      'orthodontics': {
        name: 'Orthodontics & Clear Aligners',
        category: 'specialized',
        badge: 'Ortodonti – Çapraşık Diş Tedavisi',
        icon: '📐',
        tagline: 'Discreet Invisible Clear Aligners & Digital Crowding Correction',
        heroDesc: 'Straighten crooked or misaligned teeth invisibly. Custom 3D laser-printed clear aligners planned digitally with 3Shape software for adults seeking orthodontic harmony without metal brackets.',
        stay: '2 - 3 Days (Initial Planning & Delivery)',
        warranty: 'Orthodontic Alignment Guarantee',
        anesthesia: 'Non-Invasive / Zero Anesthesia Required',
        material: 'Medical-Grade SmartTrack Biocompatible Clear Polyurethane',
        overview: 'Orthodontics aligns teeth and corrects bite discrepancies, establishing ideal aesthetics and protecting teeth from abnormal chewing wear and TMJ jaw pain.',
        highlights: [
          'Virtually invisible clear aligners removable for eating and hygiene',
          '3D digital simulation showing final smile alignment before starting',
          'Accelerated international treatment delivery protocol',
          'Complete set of aligners delivered during your Istanbul visit'
        ],
        steps: [
          { step: '01', title: 'Optical 3D Intraoral Scan', desc: 'Full jaw digital capture without impressions or discomfort.' },
          { step: '02', title: 'Digital Treatment Staging', desc: 'Custom software planning of exact tooth movements and aligner phases.' },
          { step: '03', title: 'Delivery & Wear Protocol', desc: 'Fitting of Phase 1 aligners and delivery of complete travel case series.' }
        ],
        faq: [
          { q: 'Can international patients use clear aligners?', a: 'Yes. After your initial 3-day scan and delivery in Istanbul, progress is easily monitored via remote telemedicine check-ins.' }
        ]
      },

      'pediatric-dentistry': {
        name: 'Pediatric & Family Dental Care',
        category: 'specialized',
        badge: 'Pedodonti – Çocuk Diş Tedavisi',
        icon: '🧸',
        tagline: 'Gentle, Compassionate Oral Care for Children and Visiting Families',
        heroDesc: 'Compassionate pediatric dentistry in a warm, welcoming environment. Preventive fissure sealants, painless computerized milk tooth care, and fluoride therapies for traveling families.',
        stay: '1 - 2 Days',
        warranty: 'Preventive Care Guarantee',
        anesthesia: 'Painless Strawberry-Flavored Topical & Sedation',
        material: 'Bioactive Glass Ionomers & Tooth-Protective Sealants',
        overview: 'Pedodontics safeguards children’s developing teeth, ensuring healthy permanent tooth eruption and fostering lifelong dental confidence without fear.',
        highlights: [
          'Child-friendly treatment rooms with audiovisual entertainment',
          'Non-invasive fissure sealants protecting chewing molars from cavities',
          'Space maintainers preserving alignment for permanent teeth',
          'Painless computerized Wand® anesthesia designed specifically for children'
        ],
        steps: [
          { step: '01', title: 'Friendly Interactive Examination', desc: 'Gentle familiarization with clinic tools in a playful environment.' },
          { step: '02', title: 'Preventive Fluoride & Sealants', desc: 'Protective resin barrier application over molar deep grooves.' },
          { step: '03', title: 'Oral Hygiene Empowerment', desc: 'Personalized brushing guidance and bravery celebration award.' }
        ],
        faq: [
          { q: 'Can families combine adult smile makeovers with children check-ups?', a: 'Absolutely. While parents complete their consultations, our pediatric team cares for children in dedicated suites.' }
        ]
      },

      'digital-radiology': {
        name: 'Dental Radiology & 3D Diagnostics',
        category: 'specialized',
        badge: 'Radyoloji – Ağız İçi Tanı ve Teşhis',
        icon: '📡',
        tagline: 'Ultra Low-Dose Morita 3D CBCT Volumetric Tomography on Premises',
        heroDesc: 'Millimetric pre-surgical diagnostic accuracy. Our hospital features on-site Morita 3D CBCT cone-beam tomography, low-radiation panoramic imaging, and 3Shape TRIOS® optical scanning.',
        stay: 'Same-Day Diagnostics (30 Mins)',
        warranty: 'Radiographic Precision Standard',
        anesthesia: '100% Non-Invasive Digital Scan',
        material: 'Morita Veraview X800 3D Tomography & 3Shape TRIOS® 5',
        overview: 'Advanced dental radiology allows surgeons to inspect nerve pathways, sinus depths, and bone quality in ultra-high 3D volumetric resolution with 80% lower radiation dosage than medical CTs.',
        highlights: [
          'Completed chairside in 14 seconds with instant digital diagnosis',
          '80% lower radiation exposure with pulsed low-dose sensor technology',
          'Full digital export of DICOM files provided on USB for patient records',
          'Zero delay — eliminates waiting days for external imaging centers'
        ],
        steps: [
          { step: '01', title: '14-Second Low-Dose 3D Scan', desc: 'Comfortable standing scan with zero claustrophobia or noise.' },
          { step: '02', title: 'Volumetric Reconstructive Analysis', desc: '3D slicing of bone density, sinus cavities, and nerve pathways.' },
          { step: '03', title: 'Surgeon Consultation & Export', desc: 'Immediate review with Chief Surgeon and provision of DICOM files.' }
        ],
        faq: [
          { q: 'How safe is cone beam 3D tomography compared to hospital CT scans?', a: 'Our Morita dental CBCT delivers up to 80% less radiation than standard medical CTs, equivalent to a normal 3-hour airline flight.' }
        ]
      },

      'dental-crowns': {
        name: 'Dental Crowns & Restorations',
        category: 'prosthetics',
        badge: 'Protetik Tedaviler',
        icon: '👑',
        tagline: 'Precision 360° Full Porcelain & Zirconia Aesthetic Caps',
        heroDesc: 'Rebuild damaged teeth with handcrafted CAD/CAM porcelain and monolithic zirconia crowns. Full 360-degree protection with 15-micron margins for permanent chewing comfort.',
        stay: '4 - 5 Days',
        warranty: '15-Year Manufacturer Warranty',
        anesthesia: 'Painless Local Anesthesia',
        material: 'Ivoclar E-Max® Ceramic & Katana™ Multilayer Zirconia',
        overview: 'Dental crowns enclose severely broken or root-treated teeth, providing full protection against biting fractures while restoring perfect aesthetic smile balance.',
        highlights: [
          'CAD/CAM 15-micron marginal fit preventing decay underneath',
          'Natural light translucency matching neighboring natural teeth',
          'High biocompatibility with zero gum irritation',
          'Quick 4 to 5-day completion in our in-house hospital lab'
        ],
        steps: [
          { step: '01', title: '3D Optical Digital Scan', desc: 'Instant intraoral capture of tooth preparation.' },
          { step: '02', title: 'CAD/CAM Robotic Milling', desc: 'Precision milling from single monolithic ceramic block.' },
          { step: '03', title: 'Permanent Adhesive Bonding', desc: 'High-strength cementation with dynamic bite calibration.' }
        ],
        faq: [
          { q: 'How long do dental crowns last?', a: 'With proper oral hygiene, our monolithic zirconia and E-Max crowns routinely last 15 to 25+ years.' }
        ]
      }
    }
  },

  // --------------------------------------------------------------------------
  // TURKISH (TR)
  // --------------------------------------------------------------------------
  tr: {
    pageHeader: {
      badge: 'Dünya Standartlarında Diş Tedavisi • 12 Klinik Branş',
      title: 'Uzmanlık Alanımız Olan 12 Diş Tedavisi Branşı',
      desc: 'İstanbul Levent\'te en yeni 3D CAD/CAM dijital diş hekimliği teknolojileri ve uzman cerrahlarımızla uygulanan 12 ana klinik branşımızı keşfedin.'
    },
    filterTabs: [
      { id: 'all', label: 'Tüm 12 Tedavi' },
      { id: 'surgery-implants', label: '⚙️ Cerrahi & İmplant' },
      { id: 'aesthetic-cosmetic', label: '✨ Estetik & Gülüş' },
      { id: 'prosthetics', label: '👑 Kaplama & Protez' },
      { id: 'general-care', label: '🔬 Genel & Kanal' },
      { id: 'specialized', label: '🛡️ Uzmanlık & Radyoloji' }
    ],
    ui: {
      stay: 'İstanbul\'da Kalış:',
      warranty: 'Garanti:',
      highlightsTitle: 'Öne Çıkan Özellikler:',
      viewDetails: 'Detayları İncele →',
      bookNow: 'Randevu Al →',
      breadcrumbHome: 'Ana Sayfa',
      breadcrumbTreatments: 'Tedaviler',
      quoteBtn: 'Ücretsiz 3D Fiyat Teklifi Al →',
      whatsappBtn: 'WhatsApp ile Danışın',
      estimatorTitle: 'İnteraktif Tedavi Hesaplayıcı',
      teethCount: 'Hedef Diş Sayısı:',
      teeth: 'Diş',
      vitoTransfer: 'VIP Vito Transfer:',
      vitoIncluded: 'ÜCRETSİZ Dahil',
      hotelStay: '5 Yıldızlı Otel:',
      hotelIncluded: 'ÜCRETSİZ Dahil',
      hotelPartner: 'Özel Anlaşmalı Fiyat',
      whatIs: 'Nedir?',
      keyHighlights: 'Tedavinin Önemli Avantajları',
      insightsBadge: 'Kapsamlı Klinik Bilgiler',
      insightsTitle: 'Detaylı İnceleme ve Rehber:',
      stepBadge: '3 Adımlı Süreç',
      stepTitle: 'İstanbul\'da 3 Adımlı Tedavi Yolculuğunuz',
      vipBadge: 'Her Şey Dahil Sağlık Turizmi',
      vipTitle: 'VIP Konfor & Lüks Ayrıcalıklar',
      vipDesc: 'Tedaviniz boyunca birinci sınıf konaklama, özel şoförlü Mercedes Vito transferleri ve çok dilli hasta rehberi ile stressiz bir deneyim yaşayın.',
      matrixBadge: 'Tedavileri Karşılaştırın',
      matrixTitle: 'Diş Tedavileri Karşılaştırma Tablosu',
      matrixDesc: 'İdeal gülüş tedavinizi seçmek için mekanik dayanıklılık, kalış süresi ve ışık geçirgenliğini karşılaştırın.',
      reviewsBadge: 'Onaylı Hasta Yorumları',
      reviewsTitle: 'Gerçek Hasta Hikayeleri & Deneyimler',
      faqTitle: 'Sıkça Sorulan Sorular',
      bottomCtaTitle: 'Yeni Gülüşünüz İçin Hazır mısınız?',
      bottomCtaDesc: '24 saat içinde kişiye özel 3D tedavi planı ve şeffaf fiyat teklifi almak için formumuzu doldurun veya WhatsApp\'tan bize yazın.',
      bottomCtaBtn: 'Ücretsiz Konsültasyonu Başlat →'
    },
    matrixColumns: {
      procedure: 'Tedavi Adı',
      strength: 'Dayanıklılık / Teknoloji',
      stay: 'Kalış Süresi',
      warranty: 'Garanti',
      translucency: 'Estetik / Şeffaflık',
      prep: 'Diş Hazırlığı'
    },
    vipTabs: [
      {
        title: '01 – Güvenli Medikal Tedavi',
        subtitle: 'Uluslararası Akredite Hekimler',
        desc: 'Avrupa standartlarında sterilizasyon, uzman baş cerrahlar ve uluslararası sağlık turizmi sertifikalı modern klinik güvencesi.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg'
      },
      {
        title: '02 – Konforlu Seyahat & VIP Transfer',
        subtitle: 'Özel Şoförlü Mercedes Vito',
        desc: 'Havalimanı, otel ve klinik arasındaki tüm transferleriniz özel şoförlü VIP Mercedes Vito araçlarımızla konfor içinde gerçekleştirilir.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/11/DENT-AKTIF-VITO.jpg'
      },
      {
        title: '03 – 5 Yıldızlı Boğaz Konaklaması',
        subtitle: 'Lüks Otel & Kişisel Danışman',
        desc: 'İstanbul Boğazı manzaralı 5 yıldızlı anlaşmalı otellerimizde dinlenirken, anadilinizde hizmet veren danışmanınız her adımda yanınızda.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Basliksiz-1-1.png'
      }
    ],
    items: {} // Inherited below
  }
};

// Mirror items to other locales for 100% multilingual resilience
treatmentsI18n.tr.items = treatmentsI18n.en.items;
treatmentsI18n.de = { ...treatmentsI18n.en, pageHeader: { ...treatmentsI18n.en.pageHeader, title: 'Unsere 12 Spezialisierten Zahnmedizinischen Abteilungen' } };
treatmentsI18n.fr = { ...treatmentsI18n.en, pageHeader: { ...treatmentsI18n.en.pageHeader, title: 'Nos 12 Départements Médicaux Spécialisés' } };
treatmentsI18n.ru = { ...treatmentsI18n.en, pageHeader: { ...treatmentsI18n.en.pageHeader, title: 'Наши 12 Специализированных Отделений Стоматологии' } };

export const TREATMENT_IMAGES = {
  'oral-surgery': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
  'root-canal': 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg',
  'aesthetic-dentistry': 'https://dentaktifglobal.com/wp-content/uploads/2024/03/Benefits-of-Hollywood-Smile.webp',
  'sedation-anesthesia': 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
  'dental-implants': 'https://dentaktifglobal.com/wp-content/uploads/2025/11/DENT-AKTIF-VITO.jpg',
  'restorative-dentistry': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
  'hollywood-smile': 'https://dentaktifglobal.com/wp-content/uploads/2024/03/Hollywood-Smile-What-to-Expect.webp',
  'orthodontics': 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
  'pediatric-dentistry': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
  'periodontics': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
  'dental-veneers': 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-1024x853-1.webp',
  'digital-radiology': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
  'dental-crowns': 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Basliksiz-1-1.png'
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
      { name: 'Hollywood Smile (E-Max®)', strength: '1000 MPa', stay: '5 Days', warranty: 'Lifetime', translucency: '⭐ ⭐ ⭐ ⭐ ⭐', prep: '0.3mm' },
      { name: 'Straumann® Implants (All-on-4)', strength: 'Titanium-Zirconium', stay: '5 Days', warranty: 'Lifetime', translucency: '⭐ ⭐ ⭐ ⭐ ⭐', prep: 'Flapless' },
      { name: 'Katana™ Monolithic Zirconia', strength: '1200+ MPa', stay: '4 - 5 Days', warranty: '20 Years', translucency: '⭐ ⭐ ⭐ ⭐', prep: 'Minimal' },
      { name: 'Aesthetic Dentistry & Whitening', strength: 'Natural Enamel', stay: '1 - 3 Days', warranty: '10 Years', translucency: '⭐ ⭐ ⭐ ⭐ ⭐', prep: 'Micro-Invasive' },
      { name: 'Oral Surgery & Sinus Lift', strength: 'Bone Consolidation', stay: '3 - 5 Days', warranty: 'Lifetime', translucency: 'N/A', prep: 'Surgical Stent' },
      { name: 'Microscopic Root Canal', strength: 'Natural Tooth', stay: '1 Day', warranty: '10 Years', translucency: 'Natural', prep: 'Microscopic' },
      { name: 'Sedation & General Anesthesia', strength: 'Certified Hospital Suite', stay: '1 - 3 Days', warranty: '100% Safe', translucency: 'N/A', prep: 'Zero Anxiety' },
      { name: 'Orthodontics & Clear Aligners', strength: 'Polyurethane', stay: '2 - 3 Days', warranty: 'Aligned', translucency: '⭐ ⭐ ⭐ ⭐ ⭐', prep: 'Zero Bracket' },
      { name: 'Periodontal Laser Gum Care', strength: 'Biolase Diode', stay: '2 - 4 Days', warranty: 'Stable', translucency: 'Natural Pink', prep: 'Laser Wave' },
      { name: 'Conservative Restorations', strength: 'Nano-Hybrid', stay: '1 - 2 Days', warranty: '10 Years', translucency: '⭐ ⭐ ⭐ ⭐', prep: 'Enamel-Preserving' },
      { name: '3D CBCT Volumetric Tomography', strength: 'Morita 800', stay: '30 Mins', warranty: 'Millimetric', translucency: '3D Image', prep: '14 Secs' }
    ]
  };
}
