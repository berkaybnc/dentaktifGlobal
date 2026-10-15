export interface ProcedureDetail {
  title: string;
  description: string;
  badge?: string;
}

export interface CareerMilestone {
  year: string;
  role: string;
  organization: string;
  details: string;
}

export interface DoctorFAQ {
  question: string;
  answer: string;
}

export interface DoctorDetail {
  id: string;
  name: string;
  title: string;
  academicTitle: string;
  specialty: string;
  image: string;
  experience: string;
  birthAndOrigin?: string;
  licenseId: string;
  registrationNumber: string;
  languages: string[];
  department: string;
  clinicLocation: string;
  quote: string;
  bio: string;
  extendedBio: string[];
  education: Array<{ degree: string; institution: string; year: string; details?: string }>;
  careerTimeline: CareerMilestone[];
  clinicalApproach: string[];
  specializedProcedures: ProcedureDetail[];
  specializations: string[];
  certifications: string[];
  scientificMemberships: string[];
  treatedCases: string;
  consultationMsg: string;
  faq: DoctorFAQ[];
}

export const DOCTORS_DATA: Record<string, DoctorDetail> = {
  'abdullah-omur': {
    id: 'abdullah-omur',
    name: 'Dt. Abdullah Ömür',
    title: 'Founder & Clinical Director | Oral Surgery & Implantology',
    academicTitle: 'Dental Surgeon • Director of Implantology & Oral Surgery',
    specialty: 'Advanced Surgical Implantology, Guided Flapless Surgery & Full-Arch Reconstruction',
    image: '/images/doctors/dt-abdullah-omur.png',
    experience: '10+ Years Surgical & Clinical Leadership Experience',
    birthAndOrigin: '1988, Istanbul',
    licenseId: 'Licensed Dental Surgeon, Republic of Turkey Ministry of Health',
    registrationNumber: 'Registered Specialist, TDB & IDO Dental Chambers',
    languages: ['English', 'Turkish'],
    department: 'Department of Oral, Maxillofacial Surgery & Advanced Implantology',
    clinicLocation: 'Dent Aktif International Oral & Dental Hospital (Istanbul)',
    quote: 'Precision surgical implantology is not merely about achieving osseointegration; it is the micron-level digital reconstruction of a patient’s chewing biomechanics, facial aesthetics, and lifelong self-confidence.',
    bio: 'Graduating from Yeditepe University Faculty of Dentistry in 2014, Dt. Abdullah Ömür founded Dent Aktif International Dental Hospital in late 2017. He has served as lead surgical director for over a decade, specializing in computer-guided flapless implantology, All-on-4/6 full-mouth restorations, and complex bone augmentation.',
    extendedBio: [
      'Born in Istanbul in 1988, Dt. Abdullah Ömür completed his undergraduate dental training with high honors at Yeditepe University Faculty of Dentistry in 2014, one of Turkey’s premier English-medium dental schools. Following graduation, he acquired intensive clinical case experience in leading private surgical and aesthetic centers across Istanbul.',
      'In late 2017, with the vision of uniting advanced digital dental robotics and international patient care under one roof, he established Dent Aktif Oral and Dental Hospital (Dent Aktif Global). Across our modern Bayrampaşa hospital and Levent surgical suites, he has delivered world-class surgical solutions to thousands of patients from the UK, Germany, USA, Switzerland, and the Middle East.',
      'Integrating 3D Morita low-dose CBCT volumetric tomography with CAD/CAM surgical guide fabrication, Dt. Ömür routinely performs minimally invasive "flapless" (keyhole) implant surgery. This advanced protocol eliminates extensive incisions and sutures, allowing international patients to resume daily life and receive fixed temporary prostheses on the exact same day without severe edema, pain, or bleeding.',
      'Holding elite surgical certifications in Megagen AnyRidge and Swiss Straumann® SLA/SLActive systems, Dt. Abdullah Ömür personally manages complex bone deficiency cases, performing sinus floor elevation (open & closed sinus lifts), autogenous bone block grafting, and immediate-loading All-on-4 / All-on-6 protocols.'
    ],
    education: [
      {
        degree: 'Bachelor of Dental Surgery (B.D.S. / D.D.S.)',
        institution: 'Yeditepe University Faculty of Dentistry',
        year: '2009 – 2014',
        details: 'English-medium curriculum, advanced oral surgery clerkships, and prosthetic case presentations'
      },
      {
        degree: 'Master Training in Advanced Implantology & Bone Augmentation',
        institution: 'Straumann Clinical Training & ITI Education Programs',
        year: '2016 – 2018',
        details: 'Bone grafting methodologies, lateral & crestal sinus elevation, and peri-implant soft tissue management'
      },
      {
        degree: 'Certification in Computer-Guided Flapless Implant Surgery',
        institution: 'Megagen International Academy & 3D Guided Implantology',
        year: '2019',
        details: 'Surgical guide 3D CAD modeling, micron-level navigation, and keyhole osteotomy'
      },
      {
        degree: 'All-on-4 & All-on-6 Immediate Loading Full-Arch Surgical Protocols',
        institution: 'European Association for Osseointegration (EAO) Advanced Courses',
        year: '2021 – 2023',
        details: 'Angulated implant placement, biomechanical stress distribution, and 48-hour fixed prosthesis delivery'
      }
    ],
    careerTimeline: [
      {
        year: '2014 – 2017',
        role: 'Oral Surgeon & Implantologist',
        organization: 'Leading Private Dental Hospital Groups (Istanbul)',
        details: 'Complex impacted third molar extractions, surgical implant placements, and reconstructive therapies'
      },
      {
        year: '2017 – Present',
        role: 'Founder & Chief Medical Director',
        organization: 'Dent Aktif International Oral & Dental Hospital (Dent Aktif Global)',
        details: 'Hospital founding, oversight of the international health tourism surgical division, and in-house CAD/CAM robotics leadership'
      },
      {
        year: '2018 – Present',
        role: 'International Surgical Case Consultant',
        organization: 'Dent Aktif Global International Patient Services',
        details: '3D virtual surgical planning and execution of 6,500+ overseas patient cases from the UK, Europe, and North America'
      }
    ],
    clinicalApproach: [
      'Minimally Invasive & Flapless Technique: Computer-engineered surgical templates allow implant osteotomies without scalpel incisions or sutures, minimizing tissue trauma.',
      '3D Digital Volumetric Planning: Before touching the patient, 3D Morita CBCT scans simulate bone density, nerve pathways, and precise angulation in virtual software.',
      'Painless Surgery & Patient Comfort: Advanced localized sedation and computer-guided protocols ensure complete patient comfort during surgical procedures.',
      'Same-Day Immediate Loading Teeth: In full-arch edentulous cases with optimal primary stability, fixed temporary teeth are fitted within 24–48 hours of surgery.'
    ],
    specializedProcedures: [
      {
        title: 'Computer-Guided Flapless Implant Surgery (Guided Surgery)',
        description: 'Using 3D Morita CBCT tomographic scans, custom surgical guides position implants with tenth-of-a-millimeter precision, eliminating the need for incisions and stitches.',
        badge: 'Most Popular'
      },
      {
        title: 'All-on-4 & All-on-6 Full-Arch Fixed Implant Rehabilitation',
        description: 'Transforming fully edentulous jaws or terminal dentitions with 4 or 6 titanium implants supporting screw-retained hybrid porcelain bridges in 48–72 hours.',
        badge: 'Surgical Mastery'
      },
      {
        title: 'Sinus Floor Elevation (Open & Closed Sinus Lift)',
        description: 'Restoring lost bone volume in the posterior maxilla through gentle sinus membrane elevation and biocompatible bone graft integration.',
        badge: 'Advanced Surgery'
      },
      {
        title: 'Autogenous & Synthetic Bone Augmentation (GBR)',
        description: 'Rebuilding resorbed alveolar ridges using resorbable collagen membranes and particulate bone matrices to ensure optimal implant foundation.',
        badge: 'Tissue Regeneration'
      },
      {
        title: 'Piezoelectric Atraumatic Ultrasonic Surgery',
        description: 'Utilizing micro-vibrational ultrasound technology to extract impacted wisdom teeth without harming adjacent bone or delicate neural tissue.',
        badge: 'Low Trauma'
      },
      {
        title: 'Megagen AnyRidge & Swiss Straumann® Implant Integration',
        description: 'Implanting world-leading certified Swiss and South Korean titanium fixtures backed by lifetime international manufacturer passports.',
        badge: 'Lifetime Warranty'
      }
    ],
    specializations: [
      'Computer-Guided 3D Flapless Implant Surgery',
      'All-on-4 and All-on-6 Full-Arch Fixed Hybrid Bridges',
      'Open and Closed Sinus Floor Elevation (Sinus Lift)',
      'Guided Bone Regeneration (GBR) & Ridge Augmentation',
      'Piezoelectric Ultrasonic Painless Wisdom Tooth Surgery',
      'Swiss Straumann® SLA/SLActive & Megagen AnyRidge Systems'
    ],
    certifications: [
      'Licensed Dental Surgeon Diploma, Republic of Turkey Ministry of Health',
      'Active Member, International Team for Implantology (ITI)',
      'Clinical Member, European Association for Osseointegration (EAO)',
      'Straumann® Platinum Clinical Provider for Guided Implantology',
      'Megagen International Certified Guided Surgery Clinician',
      'Advanced Cardiovascular Life Support & Conscious Sedation Safety Certificate'
    ],
    scientificMemberships: [
      'Turkish Dental Association (TDB)',
      'Istanbul Dental Chamber (IDO)',
      'International Team for Implantology (ITI - Basel, Switzerland)',
      'European Association for Osseointegration (EAO)',
      'Association of Oral and Maxillofacial Surgery (ACBID)'
    ],
    treatedCases: '6,500+ Successful Implant Cases',
    consultationMsg: 'Hello Dent Aktif! I would like to schedule an implant and oral surgery consultation with Clinical Director Dt. Abdullah Ömür.',
    faq: [
      {
        question: 'Will I experience pain during the dental implant procedure?',
        answer: 'No. With advanced computerized local anaesthesia protocols and 3D flapless surgical guides, the entire procedure is virtually painless. Most patients report only mild pressure sensations during osteotomy.'
      },
      {
        question: 'Can I still receive dental implants if I have severe bone loss?',
        answer: 'Yes. With Dt. Abdullah Ömür’s specialized experience in sinus lifting and guided bone regeneration (GBR), even jaws with extensive bone resorption can be rebuilt with stable foundations for lifetime implants.'
      },
      {
        question: 'I am traveling from abroad; how long does the All-on-4 treatment take?',
        answer: 'Implant placement takes place on Day 1, and your fixed temporary hybrid teeth—crafted in our in-house lab—are seated within 48 to 72 hours. A single 5 to 7-day stay in Istanbul is ideal for stage one.'
      }
    ]
  },

  'berru-savur': {
    id: 'berru-savur',
    name: 'Dt. Berru Savur',
    title: 'Aesthetic & Prosthetic Dentist | Biomimetic Restoration Specialist',
    academicTitle: 'Dental Surgeon • Aesthetic & Prosthetic Restorations',
    specialty: 'Comprehensive Smile Transformations, Katana™ Zirconia & Biomimetic Dentistry',
    image: '/images/doctors/dt-berru-savur.webp',
    experience: '5+ Years Aesthetic, Prosthetic & Restorative Experience',
    birthAndOrigin: '1996, Kayseri',
    licenseId: 'Licensed Dental Surgeon, Republic of Turkey Ministry of Health',
    registrationNumber: 'Registered Specialist, TDB & IDO Dental Chambers',
    languages: ['English', 'Turkish'],
    department: 'Department of Aesthetic, Prosthetic & Restorative Dentistry',
    clinicLocation: 'Dent Aktif International Oral & Dental Hospital (Istanbul)',
    quote: 'Every smile transformation must respect biological tissue harmony. True aesthetic dentistry is about preserving natural enamel vitality while capturing optimal optical translucency and facial balance.',
    bio: 'Graduating from Biruni University Faculty of Dentistry with academic honors in 2020 after graduating on scholarship from TED Kayseri College, Dt. Berru Savur specializes in biomimetic adhesive restorations, Japanese Kuraray Katana™ multi-layered zirconia crowns, and porcelain inlays/onlays.',
    extendedBio: [
      'Dt. Berru Savur was born in 1996 and completed her secondary education with high honors academic scholarships at TED Kayseri College. She earned her Bachelor of Dental Surgery degree with distinction from Biruni University Faculty of Dentistry in 2020.',
      'In her early career at Sariyer Oral & Dental Health Center, she treated high-volume patient cohorts, gaining deep clinical acumen in complex fixed prosthetics, post-and-core restorations on endodontically treated teeth, and aesthetic veneers.',
      'Recognized as an emerging talent in prosthetic dentistry, Dt. Savur was invited as a guest clinician and panelist at prestigious academic symposiums including the Straumann Young Professionals Forum and Medentika DTalks, championing evidence-based, conservative dentistry.',
      'At Dent Aktif, she spearheads biomimetic restorative dentistry. She is renowned for crafting Japanese Kuraray Noritake Katana™ multi-layered monolithic zirconia crowns, porcelain table-tops, and diode laser gingival re-contouring (pink aesthetics) that preserve maximum healthy tooth structure.'
    ],
    education: [
      {
        degree: 'High School Honors Diploma (Academic Excellence Scholarship)',
        institution: 'TED Kayseri College',
        year: '2010 – 2014',
        details: 'Advanced science and English-intensive curriculum'
      },
      {
        degree: 'Bachelor of Dental Surgery (B.D.S. / D.D.S.)',
        institution: 'Biruni University Faculty of Dentistry',
        year: '2015 – 2020',
        details: 'Prosthetic, restorative, and aesthetic clinical clerkships, graduation with honors'
      },
      {
        degree: 'Clinical Prosthetic & Restorative Hospital Practice',
        institution: 'Sariyer Oral & Dental Health Center',
        year: '2020 – 2022',
        details: 'High-density management of fixed prosthetics and conservative aesthetic cases'
      },
      {
        degree: 'Masterclass in Biomimetic Restorative Dentistry & CAD/CAM Zirconia',
        institution: 'Straumann Young Professionals & Katana Dental Academy',
        year: '2022 – 2023',
        details: 'Enamel adhesion protocols, monolithic zirconia optical translucency, and micro-layering'
      }
    ],
    careerTimeline: [
      {
        year: '2020 – 2022',
        role: 'Clinical Dental Surgeon',
        organization: 'Sariyer Oral & Dental Health Hospital (Istanbul)',
        details: 'Broad-spectrum prosthetic rehabilitation, anterior aesthetic crowns, and conservative restorations'
      },
      {
        year: '2022',
        role: 'Guest Clinician & Panelist',
        organization: 'Medentika DTalks & Straumann Young Clinicians Symposium',
        details: 'Next-generation restorative materials and clinical smile transformation case lectures'
      },
      {
        year: '2022 – Present',
        role: 'Aesthetic & Prosthetic Dental Surgeon',
        organization: 'Dent Aktif International Oral & Dental Hospital',
        details: 'Multi-unit smile designs, Katana™ monolithic zirconia crowns, and biomimetic bonded table-tops'
      }
    ],
    clinicalApproach: [
      'Biomimetic Integrity: Utilizing dental ceramics that accurately mimic the modulus of elasticity and light diffusion of natural dental enamel.',
      'Conservative Enamel Preservation: Prioritizing minimal micro-preparation over aggressive tooth reduction to keep natural teeth vital and robust.',
      'Facial & Lip Contour Harmonization: Calibrating the smile line with eye orientation, lip curvature, skin tone, and individual facial symmetry.',
      'Direct In-House Master Ceramist Synergy: Chairside collaboration with our in-house lab technicians for real-time shade matching and shape fine-tuning.'
    ],
    specializedProcedures: [
      {
        title: 'Kuraray Katana™ Multi-Layered Zirconia Restorations',
        description: 'Biocompatible, metal-free zirconia crowns featuring 4 gradational translucency layers that replicate natural tooth gradients from cervical margin to incisal edge.',
        badge: 'High Aesthetics'
      },
      {
        title: 'Biomimetic Indirect Porcelain Inlays, Onlays & Tabletops',
        description: 'Precision bonded ceramic restorations for posterior teeth that replace only decayed or fractured portions, preserving up to 80% more natural tooth structure.',
        badge: 'Tooth-Preserving'
      },
      {
        title: 'Laser-Assisted Gingivectomy & Pink Aesthetic Architecture',
        description: 'Reshaping uneven gum lines and correcting gummy smiles using gentle diode lasers with zero bleeding, sutures, or downtime.',
        badge: 'Zero Bleeding'
      },
      {
        title: 'Comprehensive Multi-Unit Aesthetic Smile Makeovers',
        description: 'Transforming anterior crowding, severe discoloration, and worn dentitions through full-mouth 10–20 unit zirconia and porcelain harmony.',
        badge: 'Total Makeover'
      },
      {
        title: 'Adhesive Aesthetic Composite Bonding & Edge Bonding',
        description: 'Single-visit restorative micro-layering of aesthetic nano-hybrid composites to close gaps (diastema) and repair chipped enamel instantly.',
        badge: 'Same-Day Result'
      }
    ],
    specializations: [
      'Katana™ Multi-Layered Monolithic Zirconia Crowns',
      'Biomimetic Porcelain Inlay, Onlay, and Overlay Restorations',
      'Laser Gingival Contouring (Gingivectomy - Pink Aesthetics)',
      'Conservative Adhesive Dentistry & Aesthetic Composite Bonding',
      'Comprehensive Full-Arch Aesthetic & Functional Rehabilitation',
      'Post-Clear Aligner Aesthetic Prosthetic Finishing'
    ],
    certifications: [
      'Licensed Dental Surgeon Diploma, Republic of Turkey Ministry of Health',
      'Registered Member, Istanbul Dental Chamber (IDO)',
      'Active Participant, Straumann Young Professionals Forum',
      'Advanced Certification in Biomimetic Aesthetic Restorations',
      'Diode Laser Safety & Soft Tissue Micro-Surgery Certificate',
      'Clinical Mastery in CAD/CAM Monolithic Ceramic Restorations'
    ],
    scientificMemberships: [
      'Turkish Dental Association (TDB)',
      'Istanbul Dental Chamber (IDO)',
      'Academy of Esthetic Dentistry Association (EDAD)',
      'Straumann Young Clinicians Network'
    ],
    treatedCases: '3,500+ Successful Aesthetic & Prosthetic Cases',
    consultationMsg: 'Hello Dent Aktif! I would like to schedule a zirconia and comprehensive smile makeover consultation with Dt. Berru Savur.',
    faq: [
      {
        question: 'What is the key difference between zirconia crowns and porcelain-fused-to-metal (PFM)?',
        answer: 'Zirconia is 100% metal-free and biocompatible. It causes no allergic reactions or dark gum line shadows over time. Its high optical translucency mimics natural teeth with vibrant depth rather than an opaque, artificial appearance.'
      },
      {
        question: 'What does biomimetic dentistry mean for my treatment?',
        answer: 'Biomimetic dentistry means mimicking nature. Instead of grinding down healthy tooth structure for traditional crowns, we conservatively bond ultra-strong ceramics only where needed, preserving tooth vitality and nerve health.'
      },
      {
        question: 'Will I be left without teeth during the transformation process?',
        answer: 'Never. Custom precision temporary teeth are fabricated in our in-house milling lab and fitted immediately during the same preparation appointment, allowing you to eat, smile, and socialize normally.'
      }
    ]
  },

  'berfin-savur': {
    id: 'berfin-savur',
    name: 'Dt. Berfin Savur',
    title: 'Aesthetic Dentist | Digital Smile Design & Porcelain Veneer Specialist',
    academicTitle: 'Dental Surgeon • Cosmetic Smile Design & Laminate Veneers',
    specialty: 'Digital Smile Design (DSD), 0.3mm IPS e.max® Veneers & Chairside 3D Mock-Ups',
    image: '/images/doctors/dt-berfin-savur.webp',
    experience: 'Aesthetic Dentistry & Digital Smile Architecture Specialist',
    birthAndOrigin: 'Istanbul',
    licenseId: 'Licensed Dental Surgeon, Republic of Turkey Ministry of Health',
    registrationNumber: 'Registered Specialist, TDB & IDO Dental Chambers',
    languages: ['English', 'Turkish'],
    department: 'Department of Cosmetic Dentistry & Digital Smile Architecture',
    clinicLocation: 'Dent Aktif International Oral & Dental Hospital (Istanbul)',
    quote: 'A flawless smile design can never be standardized or synthetic. By evaluating dynamic lip mobility, facial golden ratios, and individual expressions, we engineer handcrafted veneers that capture the organic radiance of natural enamel.',
    bio: 'Graduating from Eastern Mediterranean University Faculty of Dentistry, Dt. Berfin Savur specializes in Digital Smile Design (DSD) protocols, 0.3mm ultra-thin Ivoclar IPS e.max® porcelain veneers, and pre-treatment 3D intraoral mock-up smile simulations.',
    extendedBio: [
      'After completing her dental surgery degree at Eastern Mediterranean University Faculty of Dentistry, Dt. Berfin Savur devoted her clinical career exclusively to cosmetic dentistry, smile architecture, and minimally invasive ceramic restorations.',
      'An officially registered member of the Istanbul Dental Chamber (IDO) and the Turkish Dental Association (TDB), Dt. Berfin Savur has designed smiles for hundreds of overseas patients from the UK, Ireland, Germany, the USA, and Canada.',
      'The cornerstone of her clinical protocol is the Digital Smile Design (DSD) concept. Before any enamel preparation, high-definition 4K facial videos and 3D optical scans are captured. Using dedicated aesthetic planning software, the prospective smile is 3D-printed into a resin mock-up and transferred directly into the patient’s mouth. Patients can see, speak, test, and approve their future smile before any physical work begins.',
      'Collaborating with Dent Aktif’s in-house 5-axis German CAD/CAM milling robotics and master ceramists, Dt. Berfin Savur crafts Ivoclar Vivadent IPS e.max® lithium disilicate veneers with personalized incisal halo effects, delicate mamelons, and natural fluorescence with as little as 0.3mm micro-preparation.'
    ],
    education: [
      {
        degree: 'Bachelor of Dental Surgery (B.D.S. / D.D.S.)',
        institution: 'Eastern Mediterranean University Faculty of Dentistry',
        year: '2019 – 2024',
        details: 'Aesthetic dentistry, fixed prosthodontics, and digital intraoral scanning systems'
      },
      {
        degree: 'International Master Course in Digital Smile Design (DSD)',
        institution: 'DSD Academy & Aesthetic Dentistry Clinical Programs',
        year: '2024',
        details: 'Facial golden proportions, dynamic 4K video analysis, and digital mock-up workflow'
      },
      {
        degree: 'Ultra-Thin Porcelain Laminate Veneer Master Certification',
        institution: 'Ivoclar Vivadent International Education Center',
        year: '2024 – 2025',
        details: '0.3mm micro-preparation, adhesive cementation protocols, and micro-stratification'
      },
      {
        degree: 'Digital Dental Photography & Spectrophotometric Shade Selection',
        institution: 'Academy of Esthetic Dentistry Association (EDAD)',
        year: '2025',
        details: 'Cross-polarized dental macro-photography and enamel refractive index matching'
      }
    ],
    careerTimeline: [
      {
        year: '2024',
        role: 'Aesthetic Dentistry Resident & Case Manager',
        organization: 'Advanced Cosmetic Dental Centers (Istanbul)',
        details: 'Digital impressions, intraoral 3D scanning, and minimally invasive composite restorations'
      },
      {
        year: '2024 – Present',
        role: 'Cosmetic Dentist & Digital Smile Architect',
        organization: 'Dent Aktif International Oral & Dental Hospital',
        details: 'DSD consultations, Ivoclar IPS e.max® porcelain veneers, and Hollywood Smile transformations for global patients'
      }
    ],
    clinicalApproach: [
      'Test-Drive Before You Start (3D Mock-Up): Patients physically test-drive and approve their prospective smile in their own mouth before any enamel is altered.',
      'Minimally Invasive (0.3mm Enamel Conservation): No aggressive tooth shaving. Only 0.3–0.5 mm surface micro-contouring is performed to seat contact-lens veneers.',
      'Natural Bleach Shade Customization: Delivering bright, confident Hollywood shades (BL1/BL2) with natural depth and translucency rather than flat, chalky opacity.',
      'Digital Impression Comfort: Zero messy trays or gagging; high-speed 3D intraoral digital scanners capture micron-accurate impressions in seconds.'
    ],
    specializedProcedures: [
      {
        title: 'Ivoclar Vivadent IPS e.max® Porcelain Laminate Veneers',
        description: 'Ultra-thin 0.3mm glass-ceramic wafers chemically bonded to natural enamel, guaranteeing permanent stain resistance and vibrant optical refraction.',
        badge: 'Hollywood Smile'
      },
      {
        title: 'Digital Smile Design (DSD) & Chairside Live Mock-Up',
        description: 'Merging video, photography, and 3D intraoral scans to calibrate ideal tooth width, length, and axis for individual facial symmetry before treatment starts.',
        badge: 'Custom Engineered'
      },
      {
        title: 'Prepless (Zero-Shaving) Contact Lens Veneers',
        description: 'Ultra-delicate porcelain laminates bonded directly onto natural enamel without drilling or local anaesthesia in suitable anatomical cases.',
        badge: 'Zero Drilling'
      },
      {
        title: 'Philips Zoom® WhiteSpeed Professional In-Clinic Whitening',
        description: 'Advanced LED accelerator technology that brightens teeth up to 6–8 shades in a single 45-minute clinical session without harming enamel.',
        badge: 'Single Session'
      },
      {
        title: 'Lip-Line & Golden Proportion Calibrated Smile Architecture',
        description: 'Calibrating incisal curvature to perfectly track the lower lip curvature while aligning gingival zenith heights according to golden ratio aesthetics.',
        badge: 'Golden Ratio'
      }
    ],
    specializations: [
      'Digital Smile Design (DSD) Live Intraoral Mock-Up Protocols',
      'Ivoclar Vivadent IPS e.max® Ultra-Thin Porcelain Veneers',
      '0.3mm Micro-Preparation & Prepless Contact Lens Veneers',
      'Hollywood Smile & Natural Radiant White Transformations',
      'Digital Impression Workflow with 3D Optical Scanners',
      'Philips Zoom® WhiteSpeed Clinical Laser Teeth Whitening'
    ],
    certifications: [
      'Licensed Dental Surgeon Diploma, Republic of Turkey Ministry of Health',
      'Registered Member, Istanbul Dental Chamber (IDO)',
      'Certified Member, Turkish Dental Association (TDB)',
      'Digital Smile Design (DSD) Certified Clinician',
      'Ivoclar Vivadent IPS e.max® Certified Aesthetic Ceramic Practitioner',
      'Advanced Dental Photography & Color Spectrometry Certificate'
    ],
    scientificMemberships: [
      'Turkish Dental Association (TDB)',
      'Istanbul Dental Chamber (IDO)',
      'Academy of Esthetic Dentistry Association (EDAD)',
      'Digital Smile Design International Community'
    ],
    treatedCases: '2,800+ Completed Smile Transformations',
    consultationMsg: 'Hello Dent Aktif! I would like to schedule a Digital Smile Design and IPS e.max® veneer consultation with Dt. Berfin Savur.',
    faq: [
      {
        question: 'Can I see what my new smile will look like before touching my teeth?',
        answer: 'Yes! Through our 3D Mock-Up protocol, your custom digital smile design is temporarily transferred directly onto your existing teeth with composite resin. You can view it in the mirror, smile, speak, and make adjustments before proceeding.'
      },
      {
        question: 'Do e.max veneers stain from coffee, red wine, or tobacco?',
        answer: 'No. Ivoclar IPS e.max® is a non-porous lithium disilicate glass ceramic fired in high-temperature sintering furnaces. It is completely stain-resistant and maintains its shine and shade permanently.'
      },
      {
        question: 'How long does a full Hollywood Smile design take in Istanbul?',
        answer: 'Our standard veneer protocol takes just 5 calendar days. Day 1 involves 3D scanning, smile design, and mock-up. Days 2–4 our in-house ceramists craft your individual veneers, and Day 5 is permanent adhesive bonding.'
      }
    ]
  },

  'busra-tomo': {
    id: 'busra-tomo',
    name: 'Dt. Büşra Tomo',
    title: 'Aesthetic & Restorative Dentist | CAD/CAM Smile Specialist',
    academicTitle: 'Dental Surgeon • Restorative & Cosmetic Dentistry',
    specialty: 'Composite Veneers & Bonding, Monolithic Zirconia & Digital Intraoral Scanning',
    image: '/images/doctors/dt-busra-tomo.png',
    experience: '5+ Years Restorative, Cosmetic & Prosthetic Dental Practice',
    birthAndOrigin: 'Istanbul',
    licenseId: 'Licensed Dental Surgeon, Republic of Turkey Ministry of Health',
    registrationNumber: 'Registered Specialist, TDB & IDO Dental Chambers',
    languages: ['English', 'Turkish'],
    department: 'Department of Restorative, Aesthetic Dentistry & CAD/CAM Systems',
    clinicLocation: 'Dent Aktif International Oral & Dental Hospital (Istanbul)',
    quote: 'Preserving natural tooth vitality is paramount. With modern nano-hybrid composites, bio-adhesive ceramics, and digital CAD/CAM precision, we rebuild damaged teeth seamlessly without destructive over-preparation.',
    bio: 'Graduating from Marmara University Faculty of Dentistry in 2019, Dt. Büşra Tomo has extensive experience in freehand composite bonding, monolithic zirconia crowns, 3D intraoral digital impressions, and minimally invasive inlay/onlay restorations.',
    extendedBio: [
      'Dt. Büşra Tomo graduated from Marmara University Faculty of Dentistry, one of Turkey’s leading dental institutions, in 2019. Over the past five years, she has worked in major private dental polyclinics and surgical hospitals in Istanbul.',
      'An active member of the Restorative Dentistry Association (RDD) and registered with the Istanbul Dental Chamber, Dt. Tomo specializes in anterior freehand composite bonding, diastema closures, fiber-post endo-restorative reconstructions, and monolithic CAD/CAM zirconia restorations.',
      'She advocates for conservative, tooth-preserving treatments. Whenever possible, she restores fractured, discolored, or worn teeth using direct aesthetic composites and chairside micro-stratification, providing patients with immediate, single-visit smile enhancements.',
      'In complex multi-unit cases, Dt. Büşra Tomo integrates intraoral digital optical scanning with our in-house German CAD/CAM milling units, ensuring crowns and onlays fit with micron-level margin accuracy and biological gum harmony.'
    ],
    education: [
      {
        degree: 'Bachelor of Dental Surgery (B.D.S. / D.D.S.)',
        institution: 'Marmara University Faculty of Dentistry',
        year: '2014 – 2019',
        details: 'Comprehensive dental surgery curriculum, restorative clinics, and endodontic treatments'
      },
      {
        degree: 'Clinical Aesthetic & Prosthetic Dentistry Fellowship',
        institution: 'Private Dental Hospitals of Istanbul',
        year: '2019 – 2024',
        details: 'Five years of intensive case management in zirconia crowns, laminates, and adhesive dentistry'
      },
      {
        degree: 'Master Training in Aesthetic Composite Stratification & Anterior Bonding',
        institution: 'Restorative Dentistry Association (RDD) Training Curriculum',
        year: '2021 – 2022',
        details: 'Natural enamel-dentin layering, optical refractive index matching, and anatomical polishing'
      },
      {
        degree: 'Intraoral Digital Scanning & CAD/CAM Zirconia Certification',
        institution: 'Academy of Digital Dentistry',
        year: '2023 – 2024',
        details: '3D optical scanning systems, monolithic zirconia milling, and ceramic sintering protocols'
      }
    ],
    careerTimeline: [
      {
        year: '2019 – 2024',
        role: 'Restorative & Prosthetic Dental Surgeon',
        organization: 'Private Dental PolyClinics and Surgical Centers (Istanbul)',
        details: 'Managing thousands of cases in zirconia crowns, aesthetic composite bonding, and porcelain inlays'
      },
      {
        year: '2024 – Present',
        role: 'Aesthetic & Restorative Dental Surgeon',
        organization: 'Dent Aktif International Oral & Dental Hospital',
        details: 'Aesthetic veneers, monolithic zirconia crowns, CAD/CAM digital smile restorations, and preventive care'
      }
    ],
    clinicalApproach: [
      'Tissue-Friendly Restoration: Maximizing the preservation of sound tooth structure through conservative, minimally invasive protocols.',
      'CAD/CAM Digital Precision: 3D optical scanning produces crowns with zero-error tolerances and seamless gumline margins.',
      'Stress-Free & Gentle Care: Empathetic, gentle chairside manner ensures nervous and international patients feel completely comfortable.',
      'Holistic Oral Health: Balancing visual cosmetic smile aesthetics with masticatory chewing stability and periodontal health.'
    ],
    specializedProcedures: [
      {
        title: 'Aesthetic Composite Veneers & Freehand Bonding',
        description: 'Chairside, single-visit adhesive resin layering that repairs chipped enamel, closes gaps, and masks deep discoloration without tooth shaving.',
        badge: 'Same-Day Smile'
      },
      {
        title: 'Monolithic Zirconia & Ceramic Crown Restorations',
        description: 'High-strength, biocompatible CAD/CAM zirconia crowns engineered to withstand chewing forces while diffusing light with natural tooth realism.',
        badge: 'High Durability'
      },
      {
        title: 'Digital Intraoral Scanning & CAD/CAM Impression Protocol',
        description: 'Replacing traditional gag-inducing impression trays with ultra-fast 3D digital cameras that capture tooth geometry in seconds.',
        badge: 'Digital Comfort'
      },
      {
        title: 'Fiber-Post Reinforced Deep Structural Tooth Reconstruction',
        description: 'Reinforcing severely broken-down teeth using biocompatible fiberglass posts anchored in the root canal to avoid unnecessary extractions.',
        badge: 'Tooth Salvage'
      },
      {
        title: 'Conservative Ceramic Inlay & Onlay Restorations',
        description: 'Lab-milled ceramic fillings that restore extensive posterior cavities with original anatomical cusp morphology and superior durability.',
        badge: 'Precision Anatomy'
      }
    ],
    specializations: [
      'Aesthetic Composite Veneers & Diastema Closure (Bonding)',
      'CAD/CAM Monolithic Zirconia Crown Restorations',
      'Porcelain Laminate Veneers & Cosmetic Smile Solutions',
      'Micron-Accurate Digital Impressions with 3D Scanners',
      'Fiber-Post Reinforced Deep Structure Tooth Salvage',
      'Conservative Aesthetic Ceramic Inlays and Onlays'
    ],
    certifications: [
      'Licensed Dental Surgeon Diploma, Republic of Turkey Ministry of Health',
      'Registered Member, Istanbul Dental Chamber (IDO)',
      'Certified Member, Turkish Dental Association (TDB)',
      'Aesthetic Composite Bonding & Layering Certification',
      'CAD/CAM Digital Intraoral Scanning Specialist Certificate',
      'Endo-Restorative Tooth Preservation Protocols Certification'
    ],
    scientificMemberships: [
      'Turkish Dental Association (TDB)',
      'Istanbul Dental Chamber (IDO)',
      'Restorative Dentistry Association (RDD)'
    ],
    treatedCases: '5,000+ Successful Restorative & Prosthetic Treatments',
    consultationMsg: 'Hello Dent Aktif! I would like to schedule an aesthetic bonding, zirconia, or restorative consultation with Dt. Büşra Tomo.',
    faq: [
      {
        question: 'What is the main difference between composite bonding and porcelain veneers?',
        answer: 'Composite bonding is performed directly chairside in a single visit and is highly cost-effective. Porcelain veneers are custom-milled in the lab from lithium disilicate glass ceramic; they offer superior gloss retention, stain resistance, and a significantly longer lifespan.'
      },
      {
        question: 'Can a severely broken or decayed tooth be saved without extraction?',
        answer: 'Yes. With Dt. Büşra Tomo’s expertise in fiber-post reconstructions and ceramic onlays, even teeth with minimal remaining coronal structure can frequently be stabilized and saved for years without extraction.'
      },
      {
        question: 'Will I gag or feel uncomfortable during digital dental impressions?',
        answer: 'No. Traditional messy impression pastes are replaced with a sleek handheld 3D digital camera that hovers gently over your teeth without touching your palate, preventing any nausea or gagging.'
      }
    ]
  }
};

export function getDoctorsList(): DoctorDetail[] {
  return Object.values(DOCTORS_DATA);
}

export function getDoctorDetail(id: string): DoctorDetail | undefined {
  return DOCTORS_DATA[id];
}
