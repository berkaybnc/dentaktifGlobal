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

const EN_DOCTORS: Record<string, DoctorDetail> = {
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
          organization: 'Private Surgical PolyClinics & Hospitals (Istanbul)',
          details: 'Performed over 3,000 surgical implant placements, sinus elevations, and complex impacted third molar extractions'
        },
        {
          year: 'Late 2017 – Present',
          role: 'Founder & Chief Clinical Director',
          organization: 'Dent Aktif International Oral & Dental Hospital',
          details: 'Leading hospital clinical director overseeing surgical implant suites, digital CAD/CAM laboratory integration, and international patient care'
        }
      ],
      clinicalApproach: [
        'Computerized Guided Precision: Every surgical implant is virtually planned on 3D CBCT tomography prior to surgery, eliminating biological margin errors.',
        'Minimally Invasive Flapless Surgery: Keyhole placement techniques reduce postoperative swelling, bleeding, and recovery time by up to 80%.',
        'Immediate-Loading Fixed Restorations: Patients never leave without teeth; fixed temporary aesthetic bridges are attached within 48 to 72 hours.',
        'Rigorous Hospital Sterilization: Class-B surgical autoclaves, laminar airflow surgical suites, and 100% disposable barrier protection protocols.'
      ],
      specializedProcedures: [
        {
          title: 'All-on-4 & All-on-6 Full-Arch Immediate-Load Reconstruction',
          description: 'Surgical rehabilitation of completely edentulous jaws using angulated Swiss Straumann® or Megagen implants paired with high-durability fixed bridges within 48 to 72 hours.',
          badge: 'Immediate Load'
        },
        {
          title: '3D Computer-Guided Flapless Keyhole Implant Surgery',
          description: 'Scalpel-free, sutureless implant placement using 3D-printed surgical drill guides derived from Morita CBCT scans, maximizing patient comfort and rapid healing.',
          badge: 'No Scalpel'
        },
        {
          title: 'Advanced Maxillary Sinus Floor Elevation (Open & Closed)',
          description: 'Augmenting vertical bone height in the posterior upper jaw using Swiss Geistlich Bio-Oss® collagen-bone matrices to create lifetime anchor sites for implants.',
          badge: 'Bone Grafting'
        },
        {
          title: 'Autogenous & Xenograft Bone Augmentation (GBR)',
          description: 'Rebuilding severely resorbed alveolar bone ridges with titanium mesh reinforcement, barrier membranes, and growth-factor-enriched PRF biologics.',
          badge: 'GBR Regenerative'
        },
        {
          title: 'Immediate Post-Extraction Socket Implant Placement',
          description: 'Extracting damaged, non-restorable teeth and immediately inserting a permanent titanium implant into the fresh extraction socket in a single appointment.',
          badge: 'Single Visit'
        }
      ],
      specializations: [
        'Advanced Surgical Implantology (Swiss Straumann® & Megagen)',
        'All-on-4 & All-on-6 Immediate-Loading Full-Arch Restorations',
        'Computer-Guided Flapless 3D Stent Keyhole Surgery',
        'Maxillary Sinus Floor Elevation (Lateral & Crestal Sinus Lifts)',
        'Guided Bone Regeneration (GBR) & Collagen Bone Block Grafting',
        'Full-Mouth Functional & Aesthetic Bite Rehabilitation'
      ],
      certifications: [
        'Licensed Dental Surgeon Diploma, Republic of Turkey Ministry of Health',
        'Registered Member, Istanbul Dental Chamber (IDO)',
        'Certified Specialist, Turkish Dental Association (TDB)',
        'ITI (International Team for Implantology) Continuing Education Fellow',
        'Straumann Platinum Surgical Implantology Accreditation',
        'Megagen International 3D Guided Surgery Specialist Certification'
      ],
      scientificMemberships: [
        'International Team for Implantology (ITI)',
        'European Association for Osseointegration (EAO)',
        'Turkish Dental Association (TDB)',
        'Istanbul Dental Chamber (IDO)'
      ],
      treatedCases: '10,000+ Successful Surgical Implant Placements',
      consultationMsg: 'Hello Dent Aktif! I would like to schedule a surgical implant and full-arch reconstruction consultation with Dt. Abdullah Ömür.',
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
          details: 'Graduated with high academic distinction on scholarship'
        },
        {
          degree: 'Bachelor of Dental Surgery (B.D.S. / D.D.S.)',
          institution: 'Biruni University Faculty of Dentistry',
          year: '2015 – 2020',
          details: 'Top tier graduation rank, specialized clerkships in fixed prosthodontics and adhesive aesthetic dentistry'
        },
        {
          degree: 'Biomimetic Anterior & Posterior Restorative Mastership',
          institution: 'Academy of Aesthetic Dentistry (EDAD) Advanced Masterclass',
          year: '2021 – 2022',
          details: 'Enamel conservation, stress-reduced direct composite stratification, and ceramic table-top restorations'
        },
        {
          degree: 'Katana™ Multi-Layered Monolithic Zirconia Certification',
          institution: 'Kuraray Noritake Dental European Academy',
          year: '2023',
          details: 'Gradational translucency mapping, high-temperature sintering protocols, and adhesive cementation'
        }
      ],
      careerTimeline: [
        {
          year: '2020 – 2022',
          role: 'Prosthetic & Aesthetic Dental Surgeon',
          organization: 'Sariyer Oral & Dental Health Center (Istanbul)',
          details: 'Treated thousands of clinical cases in fixed crowns, aesthetic veneers, and complex restorative rehabilitations'
        },
        {
          year: '2022 – Present',
          role: 'Lead Aesthetic & Biomimetic Restorative Clinician',
          organization: 'Dent Aktif International Oral & Dental Hospital',
          details: 'Directing CAD/CAM monolithic zirconia smile makeovers, biomimetic ceramic table-tops, and international patient aesthetic cases'
        }
      ],
      clinicalApproach: [
        'Biomimetic Enamel Preservation: Restoring teeth by mimicking natural biomechanics and conserving maximum healthy tooth structure.',
        'Japanese Kuraray Katana™ Multi-Layer Aesthetics: Using 4-layer gradational translucency zirconia for lifelike tooth color transitions.',
        'Micron-Level CAD/CAM Seal: Precision intraoral 3D scanning eliminates micro-gaps, ensuring gum-friendly restorations that prevent secondary decay.',
        'Gentle Chairside Experience: Personalized empathetic care designed to make international dental journeys completely relaxed and pain-free.'
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
          title: 'Fiber-Post Deep Coronal Reconstructions',
          description: 'Salvaging endodontically treated and structurally broken teeth using elastic-modulus fiberglass posts and adhesive core build-ups.',
          badge: 'Core Salvage'
        },
        {
          title: 'Aesthetic Diastema Closure & Freehand Composite Veneers',
          description: 'Closing gaps and reshaping chipped anterior teeth in a single session using polychromatic nano-hybrid composite layering without drilling.',
          badge: 'Single Visit'
        }
      ],
      specializations: [
        'Biomimetic Aesthetic Restorative Dentistry',
        'Kuraray Noritake Katana™ Multi-Layered Zirconia Crowns',
        'Porcelain Inlay, Onlay & Tabletop Adhesive Restorations',
        'Laser-Assisted Gingival Sculpting & Pink Aesthetics',
        'Digital Smile Design (DSD) Chairside Integration',
        'Fiber-Post Tooth Preservation & Core Reconstructions'
      ],
      certifications: [
        'Licensed Dental Surgeon Diploma, Republic of Turkey Ministry of Health',
        'Registered Member, Istanbul Dental Chamber (IDO)',
        'Certified Specialist, Turkish Dental Association (TDB)',
        'Academy of Esthetic Dentistry Association (EDAD) Member',
        'Kuraray Noritake Katana™ Certified Aesthetic Practitioner',
        'Straumann Young Professionals Forum Fellow'
      ],
      scientificMemberships: [
        'Turkish Dental Association (TDB)',
        'Istanbul Dental Chamber (IDO)',
        'Academy of Esthetic Dentistry Association (EDAD)'
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
        'Academy of Esthetic Dentistry Association (EDAD)'
      ],
      treatedCases: '2,000+ Designed Hollywood Smiles',
      consultationMsg: 'Hello Dent Aktif! I would like to schedule a Digital Smile Design (DSD) and E-Max veneer consultation with Dt. Berfin Savur.',
      faq: [
        {
          question: 'How does the 3D Mock-Up smile preview work in clinic?',
          answer: 'Before any enamel is touched, we take 3D digital impressions and 3D-print a resin model of your proposed smile. This is placed directly over your teeth in the clinic, allowing you to see your exact final look in the mirror and in photographs.'
        },
        {
          question: 'Are IPS e.max® porcelain veneers durable against chipping?',
          answer: 'Yes. IPS e.max® lithium disilicate has a flexural strength of 500 MPa. Once chemically bonded to tooth enamel, the ceramic and tooth form a single monolithic unit that withstands normal chewing forces for decades.'
        },
        {
          question: 'Can I choose my desired level of whiteness?',
          answer: 'Absolutely. We offer a full spectrum from natural enamel harmonies (A1/B1) to ultra-bright Hollywood celebrity bleach shades (BL1/BL2/BL3), layered with natural incisal translucency.'
        }
      ]
    },

    'busra-tomo': {
      id: 'busra-tomo',
      name: 'Dt. Büşra Tomo',
      title: 'Restorative & Aesthetic Dentist | CAD/CAM Prosthetic Specialist',
      academicTitle: 'Dental Surgeon • Restorative, Aesthetic & CAD/CAM Dentistry',
      specialty: 'Monolithic Zirconia Crowns, Aesthetic Bonding, Digital Impressions & Complex Restorations',
      image: '/images/doctors/dt-busra-tomo.webp',
      experience: '5+ Years Restorative & Aesthetic Dental Experience',
      birthAndOrigin: '1995, Istanbul',
      licenseId: 'Licensed Dental Surgeon, Republic of Turkey Ministry of Health',
      registrationNumber: 'Registered Specialist, TDB & IDO Dental Chambers',
      languages: ['English', 'Turkish'],
      department: 'Department of Restorative, Aesthetic & CAD/CAM Prosthetic Dentistry',
      clinicLocation: 'Dent Aktif International Oral & Dental Hospital (Istanbul)',
      quote: 'Dental restoration is an art of biomimicry. When we rebuild a damaged tooth with modern CAD/CAM ceramics, we restore not just its strength and chewing power, but its natural vitality and the patient’s inner confidence.',
      bio: 'Graduating from Istanbul University Faculty of Dentistry (Çapa)—Turkey’s most prestigious dental institution—in 2019, Dt. Büşra Tomo brings over 5 years of specialized expertise in aesthetic composite bonding, monolithic zirconia crown restorations, and intraoral digital scanning.',
      extendedBio: [
        'Dt. Büşra Tomo was born in Istanbul in 1995. She earned her dental surgery degree with high distinction from the historic and internationally accredited Istanbul University Faculty of Dentistry (Çapa) in 2019, recognized as Turkey’s foremost center for dental academic rigor.',
        'Over the past five years, Dt. Tomo has practiced extensively in premier private dental clinics across Istanbul, performing thousands of complex aesthetic restorations, CAD/CAM monolithic zirconia crowns, fiber-post reconstructions, and conservative porcelain inlays/onlays.',
        'Her clinical philosophy revolves around tooth preservation and digital precision. By integrating high-resolution 3D intraoral digital scanners, she eliminates uncomfortable traditional impressions, capturing micron-level margins that ensure a seamless seal between crown and natural gum tissue.',
        'At Dent Aktif, Dt. Büşra Tomo routinely handles comprehensive restorative cases for international patients seeking Hollywood Smile transformations, restorative repairs, and long-term full-mouth rehabilitation.'
      ],
      education: [
        {
          degree: 'Bachelor of Dental Surgery (B.D.S. / D.D.S.)',
          institution: 'Istanbul University Faculty of Dentistry (Çapa)',
          year: '2014 – 2019',
          details: 'High-distinction graduation from Turkey’s top-ranked dental faculty; intensive clerkships in restorative and prosthetic dentistry'
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

const TR_DOCTORS: Record<string, DoctorDetail> = {
    'abdullah-omur': {
      id: 'abdullah-omur',
      name: 'Dt. Abdullah Ömür',
      title: 'Kurucu & Klinik Direktör | Ağız Cerrahisi & İmplantoloji',
      academicTitle: 'Diş Hekimi • İmplantoloji ve Cerrahi Direktörü',
      specialty: 'İleri Cerrahi İmplantoloji, Bilgisayar Kılavuzlu Dikişsiz Cerrahi & Tam Çene Rehabilitasyonu',
      image: '/images/doctors/dt-abdullah-omur.png',
      experience: '10+ Yıl Cerrahi & Klinik Liderlik Tecrübesi',
      birthAndOrigin: '1988, İstanbul',
      licenseId: 'T.C. Sağlık Bakanlığı Ruhsatlı Diş Hekimi',
      registrationNumber: 'TDB ve İDO Tescilli Uzman Hekim',
      languages: ['Türkçe', 'İngilizce'],
      department: 'Ağız, Diş ve Çene Cerrahisi & İleri İmplantoloji Birimi',
      clinicLocation: 'Dent Aktif Uluslararası Ağız ve Diş Sağlığı Merkezi (İstanbul)',
      quote: 'Hassas cerrahi implantoloji sadece kemik kaynaması sağlamakla ilgili değildir; hastanın çiğneme biyomekaniğini, yüz estetiğini ve ömür boyu sürecek özgüvenini mikron düzeyinde yeniden inşa etme sanatıdır.',
      bio: '2014 yılında Yeditepe Üniversitesi Diş Hekimliği Fakültesi\x27nden mezun olan Dt. Abdullah Ömür, 2017 yılı sonunda Dent Aktif Uluslararası Diş Hastanesi\x27ni kurmuştur. Bilgisayar destekli dikişsiz implant cerrahisi, All-on-4/6 tam ağız restorasyonları ve ileri kemik greftleme alanlarında 10 yılı aşkın süredir başhekimlik görevini yürütmektedir.',
      extendedBio: [
        '1988 yılında İstanbul\x27da doğan Dt. Abdullah Ömür, lisans eğitimini 2014 yılında Türkiye\x27nin önde gelen İngilizce eğitim veren diş hekimliği fakültelerinden Yeditepe Üniversitesi\x27nde yüksek onur derecesiyle tamamladı. Mezuniyetinin ardından İstanbul\x27un seçkin cerrahi ve estetik merkezlerinde yoğun vaka tecrübesi edindi.',
        '2017 yılı sonunda ileri dijital diş hekimliği teknolojileri ile uluslararası hasta bakımını tek bir çatı altında buluşturma vizyonuyla Dent Aktif Diş Hastanesi\x27ni (Dent Aktif Global) kurdu. Modern Bayrampaşa hastanesi ve Levent cerrahi süitlerinde İngiltere, Almanya, ABD, İsviçre ve Orta Doğu\x27dan gelen binlerce hastaya dünya standartlarında cerrahi çözümler sundu.',
        'Morita düşük doz 3D CBCT tomografisini CAD/CAM cerrahi kılavuz üretimi ile birleştiren Dt. Ömür, rutin olarak minimal invaziv "dikişsiz" (kapalı) implant cerrahisi uygulamaktadır. Bu yöntem kesi ve dikiş ihtiyacını ortadan kaldırarak hastaların operasyon günü sabit geçici dişlerine kavuşmasını sağlar.',
        'İsviçre Straumann® ve Megagen AnyRidge cerrahi sertifikalarına sahip olan Dt. Abdullah Ömür; açık/kapalı sinüs lifting, kemik bloğu greftleme ve hemen yüklemeli All-on-4 / All-on-6 protokollerini başarıyla yürütmektedir.'
      ],
      education: [
        {
          degree: 'Diş Hekimliği Lisans Diploması (D.D.S.)',
          institution: 'Yeditepe Üniversitesi Diş Hekimliği Fakültesi',
          year: '2009 – 2014',
          details: 'İngilizce eğitim müfredatı, ileri cerrahi stajları ve protetik vaka sunumları'
        },
        {
          degree: 'İleri İmplantoloji ve Kemik Ogmentasyonu Master Eğitimi',
          institution: 'Straumann Clinical Training & ITI Eğitim Programları',
          year: '2016 – 2018',
          details: 'Kemik grefti metodolojileri, sinüs lifting ve peri-implant yumuşak doku cerrahisi'
        },
        {
          degree: 'Bilgisayar Destekli Navigasyonlu İmplant Cerrahisi Sertifikası',
          institution: 'Megagen International Academy',
          year: '2019',
          details: '3D CAD cerrahi rehber modelleme ve anahtar deliği osteotomisi'
        },
        {
          degree: 'All-on-4 & All-on-6 Hemen Yüklemeli Tam Çene Protokolleri',
          institution: 'Avrupa Osseointegrasyon Derneği (EAO) İleri Kursları',
          year: '2021 – 2023',
          details: 'Açılı implant yerleşimi ve 48 saatte sabit protez teslimi'
        }
      ],
      careerTimeline: [
        {
          year: '2014 – 2017',
          role: 'Ağız Cerrahı & İmplantolog',
          organization: 'Özel Cerrahi Poliklinikler ve Hastaneler (İstanbul)',
          details: '3.000\x27den fazla implant cerrahisi, sinüs yükseltme ve gömülü diş ameliyatı yönetimi'
        },
        {
          year: '2017 – Günümüz',
          role: 'Kurucu & Başhekim',
          organization: 'Dent Aktif Uluslararası Ağız ve Diş Sağlığı Merkezi',
          details: 'Cerrahi süitler, dijital CAD/CAM laboratuvarı ve uluslararası hasta operasyonlarının yönetimi'
        }
      ],
      clinicalApproach: [
        'Bilgisayar Destekli Hassasiyet: Her cerrahi implant, ameliyat öncesinde 3D CBCT tomografide dijital olarak planlanır.',
        'Minimal İnvaziv Dikişsiz Cerrahi: Kapalı yöntemle yapılan implantlar ameliyat sonrası şişlik, ağrı ve iyileşme süresini %80 azaltır.',
        'Hemen Yüklemeli Sabit Dişler: Hastalarımız asla dişsiz bırakılmaz; 48-72 saat içinde estetik sabit geçici köprüler takılır.',
        'En Yüksek Hastane Hijyeni: B-Sınıfı cerrahi otoklavlar ve laminer hava akışlı ameliyathaneler.'
      ],
      specializedProcedures: [
        {
          title: 'All-on-4 & All-on-6 Hemen Yüklemeli Tam Çene İmplant',
          description: 'Tam dişsiz çenelerin açılı İsviçre Straumann implantları ve 48-72 saat içinde sabitlenen estetik hibrit köprülerle rehabilitasyonu.',
          badge: 'Hemen Yükleme'
        },
        {
          title: '3D Kılavuzlu Dikişsiz Kapalı İmplant Cerrahisi',
          description: 'Neştersiz ve dikişsiz olarak 3D cerrahi rehberler yardımıyla ağrısız ve hızlı iyileşen implant uygulaması.',
          badge: 'Neştersiz'
        },
        {
          title: 'İleri Maksiller Sinüs Tabanı Yükseltme (Sinüs Lift)',
          description: 'Üst çene arka bölgede eriyen kemik hacmini İsviçre Geistlich Bio-Oss® kemik tozu ile artırarak ömür boyu implant yuvası oluşturma.',
          badge: 'Kemik Grefti'
        },
        {
          title: 'Kemik Ogmentasyonu & Yönlendirilmiş Doku Rejenerasyonu',
          description: 'İleri derece kemik kaybı olan çenelerin titanyum membran ve büyüme faktörleri (PRF) ile yeniden inşa edilmesi.',
          badge: 'Rejeneratif'
        },
        {
          title: 'Çekim ile Aynı Seansta Anında İmplant (Immediate)',
          description: 'Kurtarılamayan dişin çekildiği seansta açılan yuvasına doğrudan kalıcı titanyum implantın yerleştirilmesi.',
          badge: 'Tek Seans'
        }
      ],
      specializations: [
        'İleri Cerrahi İmplantoloji (Swiss Straumann® & Megagen)',
        'All-on-4 & All-on-6 Hemen Yüklemeli Tam Çene Tedavisi',
        'Bilgisayar Destekli Navigasyonlu Dikişsiz İmplant Cerrahisi',
        'Açık ve Kapalı Maksiller Sinüs Lifting Cerrahisi',
        'Kemik Greftleme & Biyo-Rejenerasyon Uygulamaları',
        'Tam Ağız Çiğneme ve Estetik Fonksiyon Rehabilitasyonu'
      ],
      certifications: [
        'T.C. Sağlık Bakanlığı Lisanslı Diş Hekimi Diploması',
        'İstanbul Diş Hekimleri Odası (İDO) Kayıtlı Üyesi',
        'Türk Dişhekimleri Birliği (TDB) Üyesi',
        'ITI (International Team for Implantology) Sürekli Eğitim Üyesi',
        'Straumann Platinum Cerrahi İmplantoloji Akreditasyonu',
        'Megagen 3D Kılavuzlu Cerrahi Uzmanlık Sertifikası'
      ],
      scientificMemberships: [
        'International Team for Implantology (ITI)',
        'European Association for Osseointegration (EAO)',
        'Türk Dişhekimleri Birliği (TDB)',
        'İstanbul Diş Hekimleri Odası (İDO)'
      ],
      treatedCases: '10.000+ Başarılı Cerrahi İmplant Uygulaması',
      consultationMsg: 'Merhaba Dent Aktif! Dt. Abdullah Ömür ile implant ve tam çene cerrahi konsültasyonu planlamak istiyorum.',
      faq: [
        {
          question: 'İmplant tedavisi sırasında ağrı hisseder miyim?',
          answer: 'Hayır. Bilgisayarlı ağrısız lokal anestezi ve dikişsiz cerrahi rehberler sayesinde işlem tamamen konforludur.'
        },
        {
          question: 'Kemik erimem çok fazlaysa yine de implant yapılabilir mi?',
          answer: 'Evet. Dt. Abdullah Ömür\x27ün ileri sinüs lifting ve kemik tozu greftleme tecrübesi sayesinde en zorlu vakalarda dahi sağlam zemin oluşturulabilmektedir.'
        },
        {
          question: 'Yurtdışından geliyorum; All-on-4 tedavisi kaç gün sürer?',
          answer: '1. gün implant cerrahisi yapılır ve 48-72 saat içinde sabit geçici dişleriniz teslim edilir. 5-7 günlük tek bir seyahat 1. aşama için yeterlidir.'
        }
      ]
    },

    'berru-savur': {
      id: 'berru-savur',
      name: 'Dt. Berru Savur',
      title: 'Estetik ve Protetik Diş Hekimi | Biyomimetik Restorasyon Uzmanı',
      academicTitle: 'Diş Hekimi • Estetik ve Protetik Restorasyonlar',
      specialty: 'Kapsamlı Gülüş Tasarımı, Katana™ Zirkonyum & Biyomimetik Diş Hekimliği',
      image: '/images/doctors/dt-berru-savur.webp',
      experience: '5+ Yıl Estetik, Protetik & Restoratif Klinik Tecrübe',
      birthAndOrigin: '1996, Kayseri',
      licenseId: 'T.C. Sağlık Bakanlığı Ruhsatlı Diş Hekimi',
      registrationNumber: 'TDB ve İDO Tescilli Uzman Hekim',
      languages: ['Türkçe', 'İngilizce'],
      department: 'Estetik, Protetik ve Restoratif Diş Tedavisi Birimi',
      clinicLocation: 'Dent Aktif Uluslararası Ağız ve Diş Sağlığı Merkezi (İstanbul)',
      quote: 'Her gülüş dönüşümü biyolojik doku uyumuna saygı duymalıdır. Gerçek estetik diş hekimliği, doğal diş minesinin canlılığını korurken en yüksek ışık geçirgenliği ve yüz dengesini yakalamaktır.',
      bio: 'TED Kayseri Koleji\x27ni burslu tamamladıktan sonra 2020 yılında Biruni Üniversitesi Diş Hekimliği Fakültesi\x27nden onur derecesiyle mezun olan Dt. Berru Savur; biyomimetik yapıştırıcı restorasyonlar, Japon Kuraray Katana™ zirkonyum kaplamalar ve porselen inley/onleyler konusunda uzmanlaşmıştır.',
      extendedBio: [
        '1996 doğumlu olan Dt. Berru Savur, orta ve lise öğrenimini TED Kayseri Koleji\x27nde yüksek başarı bursuyla tamamladı. Diş hekimliği lisans derecesini 2020 yılında Biruni Üniversitesi Diş Hekimliği Fakültesi\x27nden dereceyle aldı.',
        'Meslek hayatının ilk döneminde Sarıyer Ağız ve Diş Sağlığı Merkezi\x27nde görev yaparak sabit protezler, kanal tedavili dişlerin estetik restorasyonları ve porselen lamine alanlarında yoğun bir klinik tecrübe kazandı.',
        'Protetik diş hekimliğinde öne çıkan genç yeteneklerden biri olarak Straumann Young Professionals Forum ve Medentika DTalks gibi prestijli akademik sempozyumlarda konuşmacı olarak yer aldı.',
        'Dent Aktif bünyesinde biyomimetik restoratif diş hekimliğini yöneten Dt. Berru Savur; Japon Kuraray Katana™ monolitik zirkonyum kuronlar, porselen table-top kaplamalar ve lazer destekli pembe estetik uygulamalarıyla sağlıklı diş dokusunu azami derecede korumaktadır.'
      ],
      education: [
        {
          degree: 'Lise Onur Diploması (Üstün Başarı Bursu)',
          institution: 'TED Kayseri Koleji',
          year: '2010 – 2014',
          details: 'Akademik başarı bursu ile onur derecesinde mezuniyet'
        },
        {
          degree: 'Diş Hekimliği Lisans Diploması (D.D.S.)',
          institution: 'Biruni Üniversitesi Diş Hekimliği Fakültesi',
          year: '2015 – 2020',
          details: 'Protetik diş tedavisi ve estetik adeziv restorasyonlarda dereceyle mezuniyet'
        },
        {
          degree: 'Biyomimetik Ön ve Arka Bölge Restorasyon Master Eğitimi',
          institution: 'Estetik Diş Hekimliği Akademisi Derneği (EDAD)',
          year: '2021 – 2022',
          details: 'Mine koruyucu kompozit tabakalama ve porselen table-top restorasyonlar'
        },
        {
          degree: 'Katana™ Çok Katmanlı Zirkonyum Uzmanlık Sertifikası',
          institution: 'Kuraray Noritake Dental Avrupa Akademisi',
          year: '2023',
          details: 'Geçişli ışık geçirgenliği haritalama ve adeziv simantasyon protokolleri'
        }
      ],
      careerTimeline: [
        {
          year: '2020 – 2022',
          role: 'Protetik & Estetik Diş Hekimi',
          organization: 'Sarıyer Ağız ve Diş Sağlığı Merkezi (İstanbul)',
          details: 'Binlerce kuron, estetik lamine ve karmaşık restoratif vaka yönetimi'
        },
        {
          year: '2022 – Günümüz',
          role: 'Estetik ve Biyomimetik Klinik Hekimi',
          organization: 'Dent Aktif Uluslararası Ağız ve Diş Sağlığı Merkezi',
          details: 'CAD/CAM monolitik zirkonyum gülüş dönüşümleri ve uluslararası hasta tedavileri'
        }
      ],
      clinicalApproach: [
        'Biyomimetik Mine Koruma: Doğal diş biyomekaniğini taklit ederek maksimum sağlıklı diş dokusunu korumak.',
        'Japon Kuraray Katana™ Çok Katmanlı Estetik: Doğal diş minesi geçişlerini yakalayan 4 katmanlı zirkonyum teknolojisi.',
        'Mikron Düzeyinde CAD/CAM Kenar Uyumu: Diş eti dostu, sızdırmaz ve çürümeyi önleyen kusursuz yapıştırma.',
        'Konforlu Hasta Deneyimi: Tedavi sürecini tamamen ağrısız, huzurlu ve keyifli kılan şefkatli yaklaşım.'
      ],
      specializedProcedures: [
        {
          title: 'Kuraray Katana™ Çok Katmanlı Zirkonyum Kaplamalar',
          description: 'Diş etinden uca doğru 4 kademeli doğal renk ve ışık geçirgenliği sunan biyo-uyumlu, metalsiz zirkonyum kuronlar.',
          badge: 'Yüksek Estetik'
        },
        {
          title: 'Biyomimetik Porselen İnley, Onley & Table-Top Restorasyonlar',
          description: 'Sadece hasarlı dokuyu onaran, dişi kesmeden %80 daha fazla doğal mine koruyan hassas porselen dolgular.',
          badge: 'Diş Koruyucu'
        },
        {
          title: 'Lazer Destekli Gingivektomi & Pembe Estetik Şekillendirme',
          description: 'Diyot lazerle kanamasız ve dikişsiz olarak diş eti seviyelerinin düzenlenmesi ve gummy smile tedavisi.',
          badge: 'Kanamasız'
        },
        {
          title: 'Fiber-Post Destekli Derin Diş Yapılandırması',
          description: 'Aşırı madde kaybı olan kanal tedavili dişlerin çekilmesini önleyen esnek cam elyaf post restorasyonu.',
          badge: 'Diş Kurtarma'
        },
        {
          title: 'Estetik Diastema Kapatma & Serbest El Kompozit Lamine',
          description: 'Dişi aşındırmadan aralıkların ve kırıkların tek seansta estetik kompozit tabakalama ile kapatılması.',
          badge: 'Tek Seans'
        }
      ],
      specializations: [
        'Biyomimetik Estetik ve Restoratif Diş Hekimliği',
        'Kuraray Noritake Katana™ Çok Katmanlı Zirkon Kuronlar',
        'Porselen İnley, Onley ve Table-Top Adeziv Restorasyonlar',
        'Lazer Destekli Diş Eti Şekillendirme ve Pembe Estetik',
        'Dijital Gülüş Tasarımı (DSD) Entegrasyonu',
        'Fiber-Post Destekli Diş Koruma ve Kor Yapılandırması'
      ],
      certifications: [
        'T.C. Sağlık Bakanlığı Lisanslı Diş Hekimi Diploması',
        'İstanbul Diş Hekimleri Odası (İDO) Kayıtlı Üyesi',
        'Türk Dişhekimleri Birliği (TDB) Üyesi',
        'Estetik Diş Hekimliği Akademisi Derneği (EDAD) Üyesi',
        'Kuraray Noritake Katana™ Sertifikalı Estetik Hekim',
        'Straumann Young Professionals Forum Üyesi'
      ],
      scientificMemberships: [
        'Türk Dişhekimleri Birliği (TDB)',
        'İstanbul Diş Hekimleri Odası (İDO)',
        'Estetik Diş Hekimliği Akademisi Derneği (EDAD)'
      ],
      treatedCases: '3.500+ Başarılı Estetik ve Protetik Vaka',
      consultationMsg: 'Merhaba Dent Aktif! Dt. Berru Savur ile zirkonyum ve estetik gülüş konsültasyonu planlamak istiyorum.',
      faq: [
        {
          question: 'Zirkonyum kuronlar ile metal destekli porselen arasındaki temel fark nedir?',
          answer: 'Zirkonyum %100 metalsiz ve biyo-uyumludur. Diş etinde alerji veya siyah çizgi oluşturmaz ve doğal diş gibi derin bir ışık geçirgenliği sağlar.'
        },
        {
          question: 'Biyomimetik diş hekimliği tedavim için ne anlama geliyor?',
          answer: 'Doğayı taklit etmek anlamına gelir. Dişi kuron için küçültmek yerine, sadece hasarlı bölgeye ultra dayanıklı porselen yapıştırarak dişin canlılığı korunur.'
        },
        {
          question: 'Tedavi sürecinde dişsiz kalacak mıyım?',
          answer: 'Asla. İlk hazırlık seansında laboratuvarımızda üretilen estetik geçici dişler hemen takılır; normal şekilde gülümseyebilir ve yemek yiyebilirsiniz.'
        }
      ]
    },

    'berfin-savur': {
      id: 'berfin-savur',
      name: 'Dt. Berfin Savur',
      title: 'Estetik Diş Hekimi | Dijital Gülüş Tasarımı & Porselen Lamine Uzmanı',
      academicTitle: 'Diş Hekimi • Kozmetik Gülüş Tasarımı ve Lamine Porselen',
      specialty: 'Dijital Gülüş Tasarımı (DSD), 0.3mm IPS e.max® Lamine & Ağız İçi 3D Mock-Up',
      image: '/images/doctors/dt-berfin-savur.webp',
      experience: 'Estetik Diş Hekimliği ve Dijital Gülüş Mimarisi Uzmanı',
      birthAndOrigin: 'İstanbul',
      licenseId: 'T.C. Sağlık Bakanlığı Ruhsatlı Diş Hekimi',
      registrationNumber: 'TDB ve İDO Tescilli Uzman Hekim',
      languages: ['Türkçe', 'İngilizce'],
      department: 'Kozmetik Diş Hekimliği ve Dijital Gülüş Mimarisi Birimi',
      clinicLocation: 'Dent Aktif Uluslararası Ağız ve Diş Sağlığı Merkezi (İstanbul)',
      quote: 'Kusursuz bir gülüş tasarımı asla fabrikasyon veya yapay olamaz. Dudak hareketleri, yüzün altın oranları ve kişisel mimikler analiz edilerek doğal diş minesi ışıltısında el işçiliği lamineler üretilmelidir.',
      bio: 'Doğu Akdeniz Üniversitesi Diş Hekimliği Fakültesi mezunu olan Dt. Berfin Savur; Dijital Gülüş Tasarımı (DSD) protokolleri, 0.3mm ultra ince Ivoclar IPS e.max® porselen lamine kaplamalar ve tedavi öncesi ağız içi 3D mock-up simülasyonlarında uzmanlaşmıştır.',
      extendedBio: [
        'Doğu Akdeniz Üniversitesi Diş Hekimliği Fakültesi\x27nden mezun olduktan sonra mesleki kariyerini tamamen estetik diş hekimliği, gülüş mimarisi ve minimal invaziv seramik restorasyonlara adadı.',
        'İstanbul Diş Hekimleri Odası (İDO) ve Türk Dişhekimleri Birliği (TDB) tescilli üyesi olan Dt. Berfin Savur; İngiltere, İrlanda, Almanya, ABD ve Kanada\x27dan gelen yüzlerce uluslararası hastanın gülüş tasarımını gerçekleştirmiştir.',
        'Klinik yaklaşımının merkezinde Dijital Gülüş Tasarımı (DSD) konsepti yer alır. Dişe herhangi bir işlem yapılmadan önce yüksek çözünürlüklü 4K video ve 3D optik taramalar alınır. Hastanın yüz hatlarına uygun gülüş ağız içinde denenerek (mock-up) hastanın onayına sunulur.',
        'Dent Aktif\x27in 5 eksenli robotik CAD/CAM cihazları ve master seramistleri ile iş birliği içinde çalışan Dt. Berfin Savur, 0.3mm mikro hazırlıkla Ivoclar Vivadent IPS e.max® porselen lamine uygulamaktadır.'
      ],
      education: [
        {
          degree: 'Diş Hekimliği Lisans Diploması (D.D.S.)',
          institution: 'Doğu Akdeniz Üniversitesi Diş Hekimliği Fakültesi',
          year: '2019 – 2024',
          details: 'Estetik diş hekimliği, sabit protezler ve dijital ağız içi tarama sistemleri'
        },
        {
          degree: 'Dijital Gülüş Tasarımı (DSD) Uluslararası Master Eğitimi',
          institution: 'DSD Academy',
          year: '2024',
          details: 'Yüz altın oranları, dinamik 4K video analizi ve dijital mock-up protokolleri'
        },
        {
          degree: 'Ultra İnce Porselen Lamine Master Sertifikası',
          institution: 'Ivoclar Vivadent International Education Center',
          year: '2024 – 2025',
          details: '0.3mm mikro preparasyon, adeziv simantasyon ve mikro tabakalama'
        },
        {
          degree: 'Dental Fotoğrafçılık & Spektrofotometrik Renk Seçimi',
          institution: 'Estetik Diş Hekimliği Akademisi Derneği (EDAD)',
          year: '2025',
          details: 'Çapraz polarize dental makro fotoğrafçılık ve mine ışık kırılma indeksi'
        }
      ],
      careerTimeline: [
        {
          year: '2024',
          role: 'Estetik Diş Hekimi & Vaka Yöneticisi',
          organization: 'İleri Kozmetik Diş Sağlığı Merkezleri (İstanbul)',
          details: 'Dijital ölçüler, 3D ağız içi tarama ve minimal invaziv restorasyonlar'
        },
        {
          year: '2024 – Günümüz',
          role: 'Kozmetik Diş Hekimi & Dijital Gülüş Mimarı',
          organization: 'Dent Aktif Uluslararası Ağız ve Diş Sağlığı Merkezi',
          details: 'DSD konsültasyonları, Ivoclar IPS e.max® porselen lamine ve Hollywood Smile tedavileri'
        }
      ],
      clinicalApproach: [
        'Başlamadan Önce Deneyin (3D Mock-Up): Dişlere dokunmadan önce tasarlanan yeni gülüşü ağzınızda birebir görüp test etme imkanı.',
        'Minimal İnvaziv (0.3mm Mine Koruma): Agresif diş kesimi yok; lens inceliğinde lamineler için sadece 0.3mm yüzey düzeltmesi.',
        'Kişiye Özel Beyazlık: Tebeşir gibi yapay değil, doğal ışık yansıması ve derinliği olan parlak Hollywood beyazlığı (BL1/BL2).',
        'Konforlu Dijital Ölçü: Mide bulantısı yapan macunlar olmadan, saniyeler içinde 3D kamera ile mikron hassasiyetinde ölçü.'
      ],
      specializedProcedures: [
        {
          title: 'Ivoclar Vivadent IPS e.max® Porselen Lamine Kaplamalar',
          description: 'Doğal diş minesi üzerine kimyasal olarak bağlanan, lekelenmeyen 0.3mm cam seramik yaprak porselenler.',
          badge: 'Hollywood Smile'
        },
        {
          title: 'Dijital Gülüş Tasarımı (DSD) & Canlı Ağız İçi Prova',
          description: 'Video ve fotoğrafları 3D taramalarla eşleştirerek yüz simetrisine mükemmel uyumlu diş boyu ve genişliği kalibrasyonu.',
          badge: 'Özel Mühendislik'
        },
        {
          title: 'Kesimsiz (Prepless) Kontakt Lens Lamine Porselen',
          description: 'Uygun vakalarda dişe hiç anestezi ve aşındırma yapmadan doğrudan yapıştırılan ultra ince seramikler.',
          badge: 'Sıfır Aşındırma'
        },
        {
          title: 'Philips Zoom® WhiteSpeed Klinik Lazer Beyazlatma',
          description: 'Tek bir 45 dakikalık seansta diş minesine zarar vermeden 6-8 tona kadar profesyonel açılma sağlayan LED teknoloji.',
          badge: 'Tek Seans'
        },
        {
          title: 'Altın Oran ve Dudak Çizgisine Uyumlu Gülüş Mimarisi',
          description: 'Diş ucu eğriliğini alt dudak kavisiyle tam uyumlu hale getiren altın oranlı estetik simetri tasarımı.',
          badge: 'Altın Oran'
        }
      ],
      specializations: [
        'Dijital Gülüş Tasarımı (DSD) Canlı Ağız İçi Mock-Up Protokolleri',
        'Ivoclar Vivadent IPS e.max® Ultra İnce Porselen Lamine',
        '0.3mm Mikro Preparasyon & Kesimsiz Lens Lamine',
        'Hollywood Smile & Doğal Beyaz Gülüş Tasarımı',
        '3D Optik Tarayıcılarla Dijital Ölçü İş Akışı',
        'Philips Zoom® WhiteSpeed Klinik Lazer Beyazlatma'
      ],
      certifications: [
        'T.C. Sağlık Bakanlığı Lisanslı Diş Hekimi Diploması',
        'İstanbul Diş Hekimleri Odası (İDO) Kayıtlı Üyesi',
        'Türk Dişhekimleri Birliği (TDB) Üyesi',
        'DSD (Digital Smile Design) Sertifikalı Klinisyen',
        'Ivoclar Vivadent IPS e.max® Sertifikalı Estetik Uygulayıcı',
        'İleri Dental Fotoğrafçılık & Renk Spektrometrisi Sertifikası'
      ],
      scientificMemberships: [
        'Türk Dişhekimleri Birliği (TDB)',
        'İstanbul Diş Hekimleri Odası (İDO)',
        'Estetik Diş Hekimliği Akademisi Derneği (EDAD)'
      ],
      treatedCases: '2.000+ Tasarlanmış Hollywood Gülüşü',
      consultationMsg: 'Merhaba Dent Aktif! Dt. Berfin Savur ile Dijital Gülüş Tasarımı ve E-Max lamine konsültasyonu planlamak istiyorum.',
      faq: [
        {
          question: 'Ağız içi 3D Mock-Up provası nasıl uygulanır?',
          answer: 'Dişlerinize hiçbir işlem yapılmadan önce dijital ölçü alınır ve planlanan gülüş 3D yazıcıda üretilir. Klinikte dişlerinizin üzerine takılarak aynada ve fotoğraflarda sonucu önceden görmeniz sağlanır.'
        },
        {
          question: 'IPS e.max® porselen lamineler kırılmaya karşı dayanıklı mıdır?',
          answer: 'Evet. 500 MPa eğilme direncine sahiptir ve mineye yapıştırıldığında dişle tek bir monolitik yapı oluşturarak ömür boyu dayanır.'
        },
        {
          question: 'İstediğim beyazlık tonunu kendim seçebilir miyim?',
          answer: 'Kesinlikle. Doğal mine tonlarından (A1/B1) ünlülerin tercih ettiği en parlak Hollywood beyazlığına (BL1/BL2) kadar geniş renk yelpazesi sunulmaktadır.'
        }
      ]
    },

    'busra-tomo': {
      id: 'busra-tomo',
      name: 'Dt. Büşra Tomo',
      title: 'Restoratif ve Estetik Diş Hekimi | CAD/CAM Protetik Uzmanı',
      academicTitle: 'Diş Hekimi • Restoratif, Estetik ve CAD/CAM Diş Hekimliği',
      specialty: 'Monolitik Zirkonyum Kuronlar, Estetik Bonding, Dijital Ölçü ve Karmaşık Restorasyonlar',
      image: '/images/doctors/dt-busra-tomo.webp',
      experience: '5+ Yıl Restoratif & Estetik Klinik Deneyim',
      birthAndOrigin: '1995, İstanbul',
      licenseId: 'T.C. Sağlık Bakanlığı Ruhsatlı Diş Hekimi',
      registrationNumber: 'TDB ve İDO Tescilli Uzman Hekim',
      languages: ['Türkçe', 'İngilizce'],
      department: 'Restoratif, Estetik ve CAD/CAM Protetik Diş Tedavisi Birimi',
      clinicLocation: 'Dent Aktif Uluslararası Ağız ve Diş Sağlığı Merkezi (İstanbul)',
      quote: 'Diş restorasyonu bir taklit sanatıdır. Hasarlı bir dişi modern CAD/CAM seramikleriyle yeniden inşa ederken sadece dayanıklılık değil, doğal canlılık ve hastanın özgüveni de geri kazandırılır.',
      bio: 'Türkiye\x27nin en köklü diş hekimliği kurumu olan İstanbul Üniversitesi Diş Hekimliği Fakültesi (Çapa)\x27nden 2019 yılında mezun olan Dt. Büşra Tomo; estetik kompozit bonding, monolitik zirkonyum kuronlar ve dijital ağız içi tarama alanlarında 5 yılı aşkın uzmanlığa sahiptir.',
      extendedBio: [
        '1995 yılında İstanbul\x27da doğan Dt. Büşra Tomo, diş hekimliği eğitimini 2019 yılında tarihi İstanbul Üniversitesi Diş Hekimliği Fakültesi (Çapa)\x27nde yüksek başarı derecesiyle tamamladı.',
        'Son 5 yılda İstanbul\x27un önde gelen özel kliniklerinde binlerce karmaşık estetik restorasyon, monolitik zirkon kuron, fiber-post yapılandırması ve porselen dolgu (inley/onley) gerçekleştirdi.',
        'Klinik yaklaşımının temelinde dişi koruma ve dijital mikron hassasiyeti yatar. 3D ağız içi tarayıcılar kullanarak geleneksel ölçü kaşıklarını ve bulantı hissini ortadan kaldırır.',
        'Dent Aktif bünyesinde Hollywood Smile gülüş dönüşümleri ve uzun ömürlü tam ağız rehabilitasyonları arayan uluslararası hastaların restoratif tedavilerini yönetmektedir.'
      ],
      education: [
        {
          degree: 'Diş Hekimliği Lisans Diploması (D.D.S.)',
          institution: 'İstanbul Üniversitesi Diş Hekimliği Fakültesi (Çapa)',
          year: '2014 – 2019',
          details: 'Türkiye\x27nin en prestijli diş hekimliği fakültesinden yüksek derece ile mezuniyet'
        },
        {
          degree: 'Klinik Estetik ve Protetik Diş Hekimliği Çalışmaları',
          institution: 'İstanbul Özel Diş Hastaneleri',
          year: '2019 – 2024',
          details: 'Zirkonyum kuronlar, lamine ve adeziv diş hekimliğinde 5 yıllık yoğun vaka yönetimi'
        },
        {
          degree: 'Estetik Kompozit Tabakalama ve Ön Bölge Bonding Master Eğitimi',
          institution: 'Restoratif Dişhekimliği Derneği (RDD)',
          year: '2021 – 2022',
          details: 'Doğal mine-dentin tabakalama ve anatomik cila teknikleri'
        },
        {
          degree: 'Ağız İçi Dijital Tarama ve CAD/CAM Zirkonyum Sertifikası',
          institution: 'Dijital Diş Hekimliği Akademisi',
          year: '2023 – 2024',
          details: '3D optik tarama sistemleri ve monolitik zirkon kazıma protokolleri'
        }
      ],
      careerTimeline: [
        {
          year: '2019 – 2024',
          role: 'Restoratif & Protetik Diş Hekimi',
          organization: 'Özel Diş Poliklinikleri ve Cerrahi Merkezleri (İstanbul)',
          details: 'Zirkonyum kaplama, estetik bonding ve porselen dolgular alanında binlerce başarılı vaka'
        },
        {
          year: '2024 – Günümüz',
          role: 'Estetik & Restoratif Diş Hekimi',
          organization: 'Dent Aktif Uluslararası Ağız ve Diş Sağlığı Merkezi',
          details: 'Estetik lamine, monolitik zirkon kuronlar ve dijital CAD/CAM gülüş restorasyonları'
        }
      ],
      clinicalApproach: [
        'Doku Dostu Restorasyon: Minimal invaziv yaklaşımla sağlam diş dokusunu azami derecede korumak.',
        'CAD/CAM Dijital Hassasiyet: 3D optik tarama ile sıfır hata toleranslı ve diş etiyle kusursuz birleşen kuronlar.',
        'Stresten Uzak Nazik Tedavi: Tedaviden çekinen hastalar için son derece nazik ve güven veren koltuk başı iletişimi.',
        'Bütüncül Ağız Sağlığı: Estetik görünüm ile çiğneme dengesini ve diş eti sağlığını bir arada optimize etmek.'
      ],
      specializedProcedures: [
        {
          title: 'Estetik Kompozit Lamine & Serbest El Bonding',
          description: 'Dişi hiç kesmeden kırıkları onaran, aralıkları kapatan ve renk bozukluklarını tek seansta maskeleyen kompozit tabakalama.',
          badge: 'Aynı Gün Gülüş'
        },
        {
          title: 'Monolitik Zirkonyum & Seramik Kuron Restorasyonları',
          description: 'Çiğneme kuvvetlerine dayanıklı, doğal diş canlılığında ışık geçiren yüksek dayanımlı CAD/CAM zirkonyum kaplamalar.',
          badge: 'Yüksek Dayanım'
        },
        {
          title: 'Dijital Ağız İçi Tarama & CAD/CAM Ölçü Protokolü',
          description: 'Bulantı yapan macunlar yerine saniyeler içinde diş geometrisini kaydeden 3D dijital kamera sistemi.',
          badge: 'Dijital Konfor'
        },
        {
          title: 'Fiber-Post Destekli Derin Diş Yapılandırması',
          description: 'Kök kanalı içerisine yerleştirilen biyo-uyumlu cam elyaf post ile aşırı kırık dişlerin çekilmesini engelleme.',
          badge: 'Diş Kurtarma'
        },
        {
          title: 'Konservatif Seramik İnley ve Onley Restorasyonlar',
          description: 'Geniş çürüklerde dişin orijinal çiğneme tüberküllerini koruyan laboratuvar üretimi porselen dolgular.',
          badge: 'Hassas Anatomi'
        }
      ],
      specializations: [
        'Estetik Kompozit Lamine & Diastema Kapatma (Bonding)',
        'CAD/CAM Monolitik Zirkonyum Kuron Restorasyonları',
        'Porselen Lamine & Kozmetik Gülüş Çözümleri',
        '3D Tarayıcılarla Mikron Hassasiyetinde Dijital Ölçü',
        'Fiber-Post Destekli Derin Diş Kurtarma Uygulamaları',
        'Konservatif Estetik Seramik İnley ve Onleyler'
      ],
      certifications: [
        'T.C. Sağlık Bakanlığı Lisanslı Diş Hekimi Diploması',
        'İstanbul Diş Hekimleri Odası (İDO) Kayıtlı Üyesi',
        'Türk Dişhekimleri Birliği (TDB) Üyesi',
        'Estetik Kompozit Bonding & Tabakalama Sertifikası',
        'CAD/CAM Dijital Ağız İçi Tarama Uzmanlık Belgesi',
        'Endo-Restoratif Diş Koruma Protokolleri Sertifikası'
      ],
      scientificMemberships: [
        'Türk Dişhekimleri Birliği (TDB)',
        'İstanbul Diş Hekimleri Odası (İDO)',
        'Restoratif Dişhekimliği Derneği (RDD)'
      ],
      treatedCases: '5.000+ Başarılı Restoratif ve Protetik Tedavi',
      consultationMsg: 'Merhaba Dent Aktif! Dt. Büşra Tomo ile zirkonyum veya bonding konsültasyonu planlamak istiyorum.',
      faq: [
        {
          question: 'Kompozit bonding ile porselen lamine arasındaki temel fark nedir?',
          answer: 'Kompozit bonding tek seansta doğrudan klinikte yapılır ve ekonomiktir. Porselen lamine ise laboratuvarda cam seramikten kazınır; parlaklığını ömür boyu korur ve leke tutmaz.'
        },
        {
          question: 'Aşırı kırılmış bir diş çekilmeden kurtarılabilir mi?',
          answer: 'Evet. Dt. Büşra Tomo\x27nun fiber-post ve porselen onley tecrübesi sayesinde çok az dokusu kalmış dişler dahi sağlamlaştırılarak yıllarca korunabilir.'
        },
        {
          question: 'Dijital ölçü sırasında bulantı refleksi yaşar mıyım?',
          answer: 'Hayır. Geleneksel ölçü macunları yerine damağa temas etmeyen ince bir 3D kamera kullanıldığı için hiçbir bulantı hissi oluşmaz.'
        }
      ]
    }
};

const RU_DOCTORS: Record<string, DoctorDetail> = {
    'abdullah-omur': {
      id: 'abdullah-omur',
      name: 'Д-р Абдуллах Омур',
      title: 'Основатель и главный врач | Челюстно-лицевая хирургия и имплантология',
      academicTitle: 'Хирург-стоматолог • Директор отделения имплантологии',
      specialty: 'Сложная хирургическая имплантация, навигационная хирургия без разрезов и тотальная реабилитация',
      image: '/images/doctors/dt-abdullah-omur.png',
      experience: 'Более 10 лет хирургического стажа и клинического руководства',
      birthAndOrigin: '1988, Стамбул',
      licenseId: 'Лицензированный хирург-стоматолог Минздрава Турецкой Республики',
      registrationNumber: 'Зарегистрированный специалист Стоматологической палаты Стамбула (İDO/TDB)',
      languages: ['Русский (координатор)', 'Английский', 'Турецкий'],
      department: 'Отделение челюстно-лицевой хирургии и прогрессивной имплантологии',
      clinicLocation: 'Международный госпиталь Dent Aktif Global (Стамбул)',
      quote: 'Точная хирургическая имплантация — это не просто приживление титана в кости; это цифровое воссоздание биомеханики жевания, гармонии лица и уверенности на всю жизнь.',
      bio: 'Выпускник стоматологического факультета Университета Едитепе (2014 г.), д-р Абдуллах Омур основал госпиталь Dent Aktif в 2017 году. Является ведущим хирургом, специализирующимся на навигационной имплантации без разрезов, системах All-on-4/6 и сложной костной пластике.',
      extendedBio: [
        'Д-р Абдуллах Омур родился в Стамбуле в 1988 году и с отличием окончил англоязычный стоматологический факультет престижного Университета Едитепе в 2014 году.',
        'В конце 2017 года он основал международный центр Dent Aktif Global, объединив цифровое 3D-моделирование и европейские стандарты хирургии.',
        'Используя низкодозовую 3D-томографию Morita CBCT и печать хирургических шаблонов CAD/CAM, доктор Омур выполняет установку имплантов по бесшовной методике через микропроколы без скальпеля и швов.',
        'Являясь сертифицированным экспертом систем Straumann® (Швейцария) и Megagen AnyRidge, он проводит открытый и закрытый синус-лифтинг, направленную костную регенерацию и немедленную нагрузку All-on-4/6.'
      ],
      education: [
        {
          degree: 'Диплом доктора стоматологии (D.D.S.)',
          institution: 'Стоматологический факультет Университета Едитепе',
          year: '2009 – 2014',
          details: 'Обучение на английском языке, углубленная хирургическая практика'
        },
        {
          degree: 'Мастер-курс по сложной имплантологии и костной пластике',
          institution: 'Клинические программы Straumann и ITI',
          year: '2016 – 2018',
          details: 'Синус-лифтинг, аугментация кости и работа с мягкими тканями'
        },
        {
          degree: 'Сертификация по навигационной хирургии без разрезов',
          institution: 'Международная академия Megagen',
          year: '2019',
          details: '3D CAD моделирование шаблонов и прецизионная остеотомия'
        },
        {
          degree: 'Протоколы немедленной нагрузки All-on-4 / All-on-6',
          institution: 'Европейская ассоциация остеоинтеграции (EAO)',
          year: '2021 – 2023',
          details: 'Установка наклонных имплантов и сдача моста за 48 часов'
        }
      ],
      careerTimeline: [
        {
          year: '2014 – 2017',
          role: 'Хирург-имплантолог',
          organization: 'Ведущие хирургические клиники Стамбула',
          details: 'Более 3 000 успешных операций имплантации и костной пластики'
        },
        {
          year: '2017 – настоящее время',
          role: 'Основатель и главный врач',
          organization: 'Госпиталь Dent Aktif Global',
          details: 'Руководство хирургическими блоками и международным клиническим направлением'
        }
      ],
      clinicalApproach: [
        'Компьютерная 3D точность: виртуальное планирование каждого импланта на томографе до операции.',
        'Бесшовная хирургия без разрезов: установка через прокол снижает отек и кровоточивость на 80%.',
        'Немедленная нагрузка: несъемный эстетичный временный мост фиксируется через 48–72 часа.',
        'Европейский стерилизационный стандарт: хирургические блоки с ламинарным потоком воздуха.'
      ],
      specializedProcedures: [
        {
          title: 'Тотальная реабилитация All-on-4 и All-on-6',
          description: 'Восстановление полностью беззубых челюстей на имплантах Straumann с фиксацией несъемного моста за 48-72 часа.',
          badge: 'Немедленная нагрузка'
        },
        {
          title: 'Навигационная 3D имплантация без скальпеля и швов',
          description: 'Установка имплантов по индивидуальному 3D-шаблону с минимальным вмешательством и быстрым заживлением.',
          badge: 'Без скальпеля'
        },
        {
          title: 'Открытый и закрытый синус-лифтинг',
          description: 'Наращивание объема кости верхней челюсти швейцарскими биоматериалами Geistlich Bio-Oss®.',
          badge: 'Костная пластика'
        },
        {
          title: 'Направленная костная регенерация (НКР)',
          description: 'Восстановление атрофированной кости с применением титановых мембран и факторов роста PRF.',
          badge: 'Регенерация'
        },
        {
          title: 'Одномоментная имплантация сразу после удаления',
          description: 'Удаление разрушенного зуба и немедленная установка импланта в ту же лунку за одно посещение.',
          badge: 'В 1 визит'
        }
      ],
      specializations: [
        'Сложная хирургическая имплантация (Straumann® и Megagen)',
        'Протоколы немедленной нагрузки All-on-4 и All-on-6',
        'Бесшовная навигационная хирургия по 3D-шаблонам',
        'Открытый и закрытый синус-лифтинг верхней челюсти',
        'Костная пластика и биорегенерация костной ткани',
        'Полная эстетическая и функциональная реабилитация прикуса'
      ],
      certifications: [
        'Государственный диплом врача-стоматолога Минздрава Турции',
        'Член Стоматологической палаты Стамбула (İDO)',
        'Член Турецкой стоматологической ассоциации (TDB)',
        'Действительный член ITI (International Team for Implantology)',
        'Платиновая хирургическая аккредитация Straumann',
        'Сертификат специалиста Megagen 3D Guided Surgery'
      ],
      scientificMemberships: [
        'International Team for Implantology (ITI)',
        'European Association for Osseointegration (EAO)',
        'Турецкая стоматологическая ассоциация (TDB)',
        'Стоматологическая палата Стамбула (İDO)'
      ],
      treatedCases: 'Более 10 000 установленных имплантов',
      consultationMsg: 'Здравствуйте! Я хочу записаться на консультацию по имплантации к д-ру Абдуллаху Омуру.',
      faq: [
        {
          question: 'Будет ли больно во время операции имплантации?',
          answer: 'Нет. Благодаря компьютерной анестезии Wand® и навигационным шаблонам вмешательство проходит совершенно безболезненно.'
        },
        {
          question: 'Возможна ли имплантация при сильной убыли кости?',
          answer: 'Да. Доктор Абдуллах Омур выполняет синус-лифтинг и остеопластику, создавая надежную костную основу.'
        },
        {
          question: 'Сколько дней занимает лечение по системе All-on-4?',
          answer: 'В 1-й день устанавливаются импланты, а через 48–72 часа фиксируется несъемный мост. Для первого этапа достаточно 5–7 дней.'
        }
      ]
    },

    'berru-savur': {
      id: 'berru-savur',
      name: 'Д-р Берру Савур',
      title: 'Врач-ортопед и эстетический стоматолог | Специалист по биомиметике',
      academicTitle: 'Стоматолог • Эстетическое и ортопедическое восстановление',
      specialty: 'Комплексное преображение улыбки, диоксид циркония Katana™ и биомиметическая реставрация',
      image: '/images/doctors/dt-berru-savur.webp',
      experience: 'Более 5 лет опыта в эстетической и ортопедической стоматологии',
      birthAndOrigin: '1996, Кайсери',
      licenseId: 'Лицензированный хирург-стоматолог Минздрава Турецкой Республики',
      registrationNumber: 'Зарегистрированный специалист Палаты стоматологов Стамбула (İDO/TDB)',
      languages: ['Русский (координатор)', 'Английский', 'Турецкий'],
      department: 'Отделение эстетической, ортопедической и восстановительной стоматологии',
      clinicLocation: 'Международный госпиталь Dent Aktif Global (Стамбул)',
      quote: 'Каждое преображение улыбки должно сохранять гармонию живых тканей. Настоящая эстетика — это сохранение живой эмали и воссоздание естественной глубины цвета.',
      bio: 'С отличием окончив стоматологический факультет Университета Бируни в 2020 году, д-р Берру Савур специализируется на биомиметической реставрации, японском многослойном цирконии Kuraray Katana™ и керамических накладках/винирах.',
      extendedBio: [
        'Д-р Берру Савур родилась в 1996 году, получила среднее образование с академической стипендией в колледже TED Kayseri и с отличием окончила стоматологический факультет Университета Бируни в 2020 году.',
        'В начале карьеры в Центре стоматологического здоровья Сарыер она вела интенсивный клинический прием, приобретя глубокий опыт в протезировании, реставрации депульпированных зубов и эстетических винирах.',
        'Признанная восходящей звездой ортопедии, доктор Савур выступала в качестве докладчика на симпозиумах Straumann Young Professionals Forum и Medentika DTalks.',
        'В госпитале Dent Aktif она возглавляет биомиметическое направление, изготавливая высокопрочные японские коронки Kuraray Katana™, керамические накладки и выполняя лазерную коррекцию десневого контура с максимальным сохранением тканей зуба.'
      ],
      education: [
        {
          degree: 'Диплом средней школы с отличием (Академическая стипендия)',
          institution: 'Колледж TED Kayseri',
          year: '2010 – 2014',
          details: 'Окончание с академическим отличием'
        },
        {
          degree: 'Диплом доктора стоматологии (D.D.S.)',
          institution: 'Стоматологический факультет Университета Бируни',
          year: '2015 – 2020',
          details: 'Окончание в числе лучших выпускников, специализация по ортопедии'
        },
        {
          degree: 'Мастер-курс по биомиметической реставрации',
          institution: 'Академия эстетической стоматологии (EDAD)',
          year: '2021 – 2022',
          details: 'Сохранение эмали, послойная стратификация и керамические накладки'
        },
        {
          degree: 'Сертификация по многослойному цирконию Katana™',
          institution: 'Европейская академия Kuraray Noritake',
          year: '2023',
          details: 'Градиент прозрачности и адгезивная фиксация керамики'
        }
      ],
      careerTimeline: [
        {
          year: '2020 – 2022',
          role: 'Стоматолог-ортопед',
          organization: 'Центр стоматологического здоровья Сарыер (Стамбул)',
          details: 'Ведение тысяч клинических случаев протезирования и виниров'
        },
        {
          year: '2022 – настоящее время',
          role: 'Ведущий ортопед и эстетический стоматолог',
          organization: 'Госпиталь Dent Aktif Global',
          details: 'Цифровые реставрации Katana™, керамические накладки и международные пациенты'
        }
      ],
      clinicalApproach: [
        'Биомиметика и сохранение эмали: восстановление зуба с сохранением максимального объема здоровых тканей.',
        'Японский цирконий Kuraray Katana™: 4 градиентных слоя цвета, полностью повторяющих натуральную эмаль.',
        'Микронное прилегание CAD/CAM: исключение зазоров предотвращает воспаление десен и вторичный кариес.',
        'Бережный комфортный прием: заботливое и внимательное отношение исключает любой стресс.'
      ],
      specializedProcedures: [
        {
          title: 'Реставрации из многослойного циркония Kuraray Katana™',
          description: 'Безметалловые циркониевые коронки с 4 градационными слоями прозрачности от пришеечной зоны к режущему краю.',
          badge: 'Высокая эстетика'
        },
        {
          title: 'Биомиметические керамические вкладки и накладки (Inlay/Onlay)',
          description: 'Прецизионные микропротезы, восстанавливающие только разрушенную часть зуба с сохранением до 80% живых тканей.',
          badge: 'Сохранение зуба'
        },
        {
          title: 'Лазерная гингивэктомия и розовая эстетика улыбки',
          description: 'Коррекция неровной линии десен и десневой улыбки мягким диодным лазером без крови, швов и отека.',
          badge: 'Без крови'
        },
        {
          title: 'Укрепление зубов стекловолоконными штифтами',
          description: 'Надежное восстановление сильно разрушенных зубов биосовместимыми эластичными штифтами без риска перелома корня.',
          badge: 'Спасение зуба'
        },
        {
          title: 'Эстетическое закрытие диастем и композитные виниры',
          description: 'Устранение щелей и сколов за одно посещение послойным нанесением нанокомпозитов без обточки зубов.',
          badge: 'В 1 визит'
        }
      ],
      specializations: [
        'Биомиметическая восстановительная стоматология',
        'Многослойные циркониевые коронки Kuraray Noritake Katana™',
        'Керамические вкладки, накладки и полукоронки',
        'Лазерная пластика десневого контура (розовая эстетика)',
        'Интеграция цифрового дизайна улыбки (DSD)',
        'Восстановление депульпированных зубов культевыми вкладками'
      ],
      certifications: [
        'Государственный диплом врача-стоматолога Минздрава Турции',
        'Член Стоматологической палаты Стамбула (İDO)',
        'Член Турецкой стоматологической ассоциации (TDB)',
        'Член Академии эстетической стоматологии (EDAD)',
        'Сертифицированный специалист Kuraray Noritake Katana™',
        'Участник Straumann Young Professionals Forum'
      ],
      scientificMemberships: [
        'Турецкая стоматологическая ассоциация (TDB)',
        'Стоматологическая палата Стамбула (İDO)',
        'Академия эстетической стоматологии (EDAD)'
      ],
      treatedCases: 'Более 3 500 успешных эстетических реставраций',
      consultationMsg: 'Здравствуйте! Я хочу записаться на консультацию по коронкам из циркония к д-ру Берру Савур.',
      faq: [
        {
          question: 'Чем циркониевые коронки лучше металлокерамики?',
          answer: 'Цирконий не содержит металла, не темнеет у десны, не вызывает аллергии и обладает естественной светопроницаемостью.'
        },
        {
          question: 'Что означает биомиметическая стоматология?',
          answer: 'Это подражание природе. Вместо сильного спиливания зуба под коронку мы восстанавливаем только разрушенную зону прочной керамикой.'
        },
        {
          question: 'Останусь ли я без зубов во время лечения?',
          answer: 'Ни в коем случае. В день препарирования сразу устанавливаются индивидуальные временные зубы.'
        }
      ]
    },

    'berfin-savur': {
      id: 'berfin-savur',
      name: 'Д-р Берфин Савур',
      title: 'Эстетический стоматолог | Специалист по Digital Smile Design и винирам E-Max',
      academicTitle: 'Стоматолог • Косметический дизайн улыбки и керамические виниры',
      specialty: 'Digital Smile Design (DSD), ультратонкие виниры 0.3 мм IPS e.max® и живая 3D-примерка',
      image: '/images/doctors/dt-berfin-savur.webp',
      experience: 'Специалист по эстетической архитектуре улыбки',
      birthAndOrigin: 'Стамбул',
      licenseId: 'Лицензированный хирург-стоматолог Минздрава Турецкой Республики',
      registrationNumber: 'Зарегистрированный специалист Стоматологической палаты Стамбула (İDO/TDB)',
      languages: ['Русский (координатор)', 'Английский', 'Турецкий'],
      department: 'Отделение косметической стоматологии и цифровой архитектуры улыбки',
      clinicLocation: 'Международный госпиталь Dent Aktif Global (Стамбул)',
      quote: 'Идеальная улыбка никогда не должна быть штампованной. Мы анализируем пропорции лица, линию губ и мимику, чтобы создать виниры с естественным блеском натуральной эмали.',
      bio: 'Выпускница стоматологического факультета Восточно-Средиземноморского университета, д-р Берфин Савур специализируется на протоколах цифрового дизайна улыбки (DSD), ультратонких винирах 0,3 мм Ivoclar IPS e.max® и предварительной 3D-примерке.',
      extendedBio: [
        'Окончив стоматологический факультет, д-р Берфин Савур полностью посвятила свою практику эстетической стоматологии и микроинвазивным реставрациям.',
        'Она создала безупречные улыбки сотням пациентов из Великобритании, Германии, США, стран СНГ и Европы.',
        'Основа её работы — концепция Digital Smile Design (DSD). До начала обработки зубов проводится 3D-сканирование и моделируется будущая форма, которая примеряется в полости рта (Mock-up), позволяя пациенту оценить результат заранее.',
        'Работая совместно с шеф-техниками лаборатории Dent Aktif, доктор Савур создает виниры Ivoclar Vivadent IPS e.max® с микрообточкой всего 0,3 мм.'
      ],
      education: [
        {
          degree: 'Диплом доктора стоматологии (D.D.S.)',
          institution: 'Стоматологический факультет EMU',
          year: '2019 – 2024',
          details: 'Эстетическая стоматология, несъемное протезирование и 3D-сканирование'
        },
        {
          degree: 'Международный мастер-курс по Digital Smile Design (DSD)',
          institution: 'DSD Academy',
          year: '2024',
          details: 'Золотое сечение лица, видеоанализ и цифровая примерка Mock-up'
        },
        {
          degree: 'Мастер-сертификация по ультратонким винирам e.max®',
          institution: 'Ivoclar Vivadent International Education Center',
          year: '2024 – 2025',
          details: 'Микропрепарирование 0,3 мм и протоколы адгезивного бондинга'
        },
        {
          degree: 'Дентальная макросъемка и спектрофотометрия цвета',
          institution: 'Академия эстетической стоматологии (EDAD)',
          year: '2025',
          details: 'Поляризационная фотография и оптический подбор цвета'
        }
      ],
      careerTimeline: [
        {
          year: '2024',
          role: 'Эстетический стоматолог',
          organization: 'Центры эстетической стоматологии (Стамбул)',
          details: 'Цифровые оттиски, интраоральное сканирование и реставрации'
        },
        {
          year: '2024 – настоящее время',
          role: 'Косметический стоматолог и архитектор улыбок',
          organization: 'Госпиталь Dent Aktif Global',
          details: 'DSD консультации, виниры Ivoclar IPS e.max® и Голливудские улыбки'
        }
      ],
      clinicalApproach: [
        'Тест-драйв улыбки (3D Mock-up): пациент видит и примеряет будущую улыбку в своем рту до обработки зубов.',
        'Микропрепарирование 0,3 мм: щадящее сохранение эмали без агрессивного спиливания.',
        'Индивидуальный оттенок: от натурального белого до безупречного голливудского блич (BL1/BL2).',
        'Цифровой комфорт: быстрое оптическое 3D-сканирование без слепочных ложек и рвотного рефлекса.'
      ],
      specializedProcedures: [
        {
          title: 'Керамические виниры Ivoclar Vivadent IPS e.max®',
          description: 'Ультратонкие пластинки 0,3 мм, надежно фиксируемые на эмали, с пожизненной стойкостью к окрашиванию.',
          badge: 'Hollywood Smile'
        },
        {
          title: 'Digital Smile Design (DSD) и живая примерка Mock-up',
          description: 'Точный расчет пропорций зубов по фотографиям и видео с моделированием идеальной симметрии лица.',
          badge: '3D расчет'
        },
        {
          title: 'Виниры на рефракторе без обточки (No-prep)',
          description: 'Ультратонкие керамические лепестки, фиксируемые на живые зубы без сверления и анестезии.',
          badge: 'Без сверления'
        },
        {
          title: 'Клиническое лазерное отбеливание Philips Zoom® WhiteSpeed',
          description: 'Осветление зубов на 6–8 тонов за 45 минут с холодным светодиодным светом без повреждения эмали.',
          badge: 'В 1 сеанс'
        },
        {
          title: 'Моделирование улыбки по золотому сечению и линии губ',
          description: 'Калибровка режущего края по линии нижней губы для достижения естественной гармонии лица.',
          badge: 'Золотое сечение'
        }
      ],
      specializations: [
        'Цифровой дизайн улыбки (DSD) и протоколы Mock-up',
        'Ультратонкие фарфоровые виниры Ivoclar Vivadent IPS e.max®',
        'Микропрепарирование 0,3 мм и виниры без обточки',
        'Создание Голливудской улыбки и белоснежных оттенков',
        'Цифровые оптические 3D слепки интраоральной камерой',
        'Клиническое отбеливание зубов Philips Zoom® WhiteSpeed'
      ],
      certifications: [
        'Государственный диплом врача-стоматолога Минздрава Турции',
        'Член Стоматологической палаты Стамбула (İDO)',
        'Член Турецкой стоматологической ассоциации (TDB)',
        'Сертифицированный специалист Digital Smile Design (DSD)',
        'Сертифицированный специалист по керамике IPS e.max®',
        'Сертификат по дентальной фотографии и спектрометрии'
      ],
      scientificMemberships: [
        'Турецкая стоматологическая ассоциация (TDB)',
        'Стоматологическая палата Стамбула (İDO)',
        'Академия эстетической стоматологии (EDAD)'
      ],
      treatedCases: 'Более 2 000 созданных улыбок',
      consultationMsg: 'Здравствуйте! Я хочу записаться на Digital Smile Design и виниры E-Max к д-ру Берфин Савур.',
      faq: [
        {
          question: 'Как проходит примерка 3D Mock-up в клинике?',
          answer: 'До начала обработки зубов мы печатаем модель на 3D-принтере и надеваем её на ваши зубы, чтобы вы могли оценить форму в зеркале и на фото.'
        },
        {
          question: 'Надежны ли виниры IPS e.max® против сколов?',
          answer: 'Да. Прочность на изгиб составляет 500 МПа. При химическом бондинге с эмалью винир и зуб становятся единым целым.'
        },
        {
          question: 'Могу ли я выбрать желаемый уровень белизны?',
          answer: 'Конечно. Доступны как натуральные оттенки (A1/B1), так и ультраяркие голливудские блич-цвета (BL1/BL2).'
        }
      ]
    },

    'busra-tomo': {
      id: 'busra-tomo',
      name: 'Д-р Бюшра Томо',
      title: 'Врач-терапевт и ортопед | Специалист по CAD/CAM реставрациям',
      academicTitle: 'Стоматолог • Терапевтическое, эстетическое и CAD/CAM лечение',
      specialty: 'Монолитный цирконий, эстетический бондинг, цифровые оттиски и сложное восстановление зубов',
      image: '/images/doctors/dt-busra-tomo.webp',
      experience: 'Более 5 лет опыта в восстановительной и эстетической стоматологии',
      birthAndOrigin: '1995, Стамбул',
      licenseId: 'Лицензированный хирург-стоматолог Минздрава Турецкой Республики',
      registrationNumber: 'Зарегистрированный специалист Стоматологической палаты Стамбула (İDO/TDB)',
      languages: ['Русский (координатор)', 'Английский', 'Турецкий'],
      department: 'Отделение терапевтической, эстетической и цифровой стоматологии',
      clinicLocation: 'Международный госпиталь Dent Aktif Global (Стамбул)',
      quote: 'Восстановление зуба — это искусство биомиметики. Воссоздавая разрушенный зуб на станках CAD/CAM, мы возвращаем не только прочность, но и уверенность пациента.',
      bio: 'Выпускница главного стоматологического вуза Турции — факультета стоматологии Стамбульского университета (Чапа, 2019 г.), д-р Бюшра Томо обладает более чем 5-летним опытом в эстетическом бондинге, циркониевых коронках и 3D-сканировании.',
      extendedBio: [
        'Д-р Бюшра Томо родилась в Стамбуле в 1995 году и с отличием окончила исторический стоматологический факультет Стамбульского университета (Чапа) в 2019 году.',
        'За последние 5 лет она провела тысячи успешных реставраций сильно разрушенных зубов, фиксаций циркониевых коронок и керамических накладок.',
        'Её кредо — максимальное сохранение живых тканей и микроцифровая точность прилегания коронок, исключающая воспаление десен.',
        'В госпитале Dent Aktif она ведет прием международных пациентов, нуждающихся в тотальной эстетической и функциональной реабилитации.'
      ],
      education: [
        {
          degree: 'Диплом доктора стоматологии (D.D.S.)',
          institution: 'Стоматологический факультет Стамбульского университета (Чапа)',
          year: '2014 – 2019',
          details: 'Окончание с отличием ведущего стоматологического факультета Турции'
        },
        {
          degree: 'Практическая резидентура по ортопедии и эстетике',
          institution: 'Стоматологические клиники Стамбула',
          year: '2019 – 2024',
          details: 'Пять лет интенсивной практики по циркониевым коронкам и адгезивной фиксации'
        },
        {
          degree: 'Мастер-курс по послойной композитной реставрации',
          institution: 'Ассоциация реставрационной стоматологии (RDD)',
          year: '2021 – 2022',
          details: 'Техники полихроматического бондинга и анатомической полировки'
        },
        {
          degree: 'Сертификация по 3D-сканированию и CAD/CAM цирконию',
          institution: 'Академия цифровой стоматологии',
          year: '2023 – 2024',
          details: 'Оптические сканеры и протоколы фрезерования диоксида циркония'
        }
      ],
      careerTimeline: [
        {
          year: '2019 – 2024',
          role: 'Стоматолог-терапевт и ортопед',
          organization: 'Хирургические стоматологические центры Стамбула',
          details: 'Тысячи успешных реставраций, циркониевых коронок и керамических вкладок'
        },
        {
          year: '2024 – настоящее время',
          role: 'Эстетический стоматолог-ортопед',
          organization: 'Госпиталь Dent Aktif Global',
          details: 'Монолитные циркониевые коронки, CAD/CAM реставрации и голливудские улыбки'
        }
      ],
      clinicalApproach: [
        'Бережное отношение к тканям: максимальное сохранение здоровой структуры зуба.',
        'Цифровая точность CAD/CAM: оптическое сканирование создает коронки с идеальным прилеганием к десне.',
        'Комфортное и мягкое лечение: внимательное отношение к пациентам, испытывающим волнение.',
        'Баланс эстетики и функции: сочетание красивого внешнего вида с правильным распределением нагрузки.'
      ],
      specializedProcedures: [
        {
          title: 'Эстетический композитный бондинг и художественные виниры',
          description: 'Восстановление сколов эмали, закрытие щелей и маскировка дефектов цвета за одно посещение без обточки.',
          badge: 'Улыбка за 1 день'
        },
        {
          title: 'Коронки из монолитного диоксида циркония',
          description: 'Сверхпрочные коронки CAD/CAM, выдерживающие любые нагрузки и рассеивающие свет подобно живому зубу.',
          badge: 'Высокая прочность'
        },
        {
          title: 'Оптическое 3D-сканирование вместо слепков',
          description: 'Снятие цифровых оттисков ручной 3D-камерой за секунды без неприятных слепочных масс.',
          badge: 'Цифровой комфорт'
        },
        {
          title: 'Укрепление зубов стекловолоконными культевыми штифтами',
          description: 'Спасение сильно разрушенных зубов от удаления путем фиксации эластичного штифта в корневом канале.',
          badge: 'Спасение зуба'
        },
        {
          title: 'Керамические вкладки и накладки (Inlay / Onlay)',
          description: 'Лабораторные керамические пломбы, идеально повторяющие анатомические бугры жевательных зубов.',
          badge: 'Точная анатомия'
        }
      ],
      specializations: [
        'Эстетический композитный бондинг и закрытие диастем',
        'Коронки из монолитного диоксида циркония CAD/CAM',
        'Керамические виниры и косметические решения',
        'Микронные цифровые оттиски интраоральными 3D сканерами',
        'Спасение разрушенных зубов стекловолоконными штифтами',
        'Керамические вкладки и микропротезирование'
      ],
      certifications: [
        'Государственный диплом врача-стоматолога Минздрава Турции',
        'Член Стоматологической палаты Стамбула (İDO)',
        'Член Турецкой стоматологической ассоциации (TDB)',
        'Сертификат по художественной реставрации композитами',
        'Сертификат специалиста по интраоральному 3D-сканированию',
        'Сертификат по эндо-ресторативным протоколам'
      ],
      scientificMemberships: [
        'Турецкая стоматологическая ассоциация (TDB)',
        'Стоматологическая палата Стамбула (İDO)',
        'Ассоциация реставрационной стоматологии (RDD)'
      ],
      treatedCases: 'Более 5 000 успешных реставраций',
      consultationMsg: 'Здравствуйте! Я хочу записаться на консультацию по коронкам или бондингу к д-ру Бюшре Томо.',
      faq: [
        {
          question: 'В чем разница между композитным бондингом и винирами?',
          answer: 'Бондинг делается за 1 визит прямо в кресле и стоит дешевле. Виниры E-Max изготавливаются в лаборатории, не меняют цвет и служат десятилетиями.'
        },
        {
          question: 'Можно ли спасти сильно разрушенный зуб без удаления?',
          answer: 'Да. Благодаря стекловолоконным штифтам и керамическим накладкам даже зубы с минимальным остатком коронки можно надежно сохранить.'
        },
        {
          question: 'Будет ли тошнота во время снятия цифрового слепка?',
          answer: 'Нет. Тонкая цифровая камера не касается неба и не вызывает рвотного рефлекса.'
        }
      ]
    }
};

function treatmentsFallback(docId: string, targetLang: string): DoctorDetail {
  const base = EN_DOCTORS[docId];
  return {
    ...base,
    specializedProcedures: base.specializedProcedures.map(p => ({ ...p })),
    education: base.education.map(e => ({ ...e })),
    careerTimeline: base.careerTimeline.map(c => ({ ...c })),
    clinicalApproach: [...base.clinicalApproach],
    specializations: [...base.specializations],
    certifications: [...base.certifications],
    scientificMemberships: [...base.scientificMemberships],
    faq: base.faq.map(f => ({ ...f })),
    extendedBio: [...base.extendedBio]
  };
}

const DE_DOCTORS: Record<string, DoctorDetail> = {
    'abdullah-omur': {
      ...treatmentsFallback('abdullah-omur', 'de'),
      name: 'Dt. Abdullah Ömür',
      title: 'Gründer & Ärztlicher Direktor | Oralchirurgie & Implantologie',
      academicTitle: 'Fachzahnarzt • Direktor für Implantologie & Oralchirurgie',
      specialty: 'Fortgeschrittene chirurgische Implantologie, navigierte schlüssellochchirurgische Eingriffe & Vollrehabilitation',
      languages: ['Deutsch (Koordinator)', 'Englisch', 'Türkisch'],
      department: 'Abteilung für Mund-, Kiefer- und Gesichtschirurgie & Implantologie',
      clinicLocation: 'Dent Aktif International Dental Hospital (Istanbul)',
      quote: 'Präzise Implantatchirurgie bedeutet nicht nur Knocheneinheilung, sondern die mikrometergenaue digitale Rekonstruktion von Kaufunktion, Gesichtsästhetik und lebenslangem Selbstvertrauen.',
      bio: 'Nach seinem Abschluss an der renommierten Yeditepe-Universität im Jahr 2014 gründete Dt. Abdullah Ömür Ende 2017 das Dent Aktif Hospital. Seit über 10 Jahren leitet er als Chefchirurg navigierte Implantationen, All-on-4/6 Rekonstruktionen und komplexe Knochenaufbauten.',
      treatedCases: '10.000+ Erfolgreich gesetzte Implantate',
      consultationMsg: 'Guten Tag! Ich möchte eine Beratung für Zahnimplantate bei Dt. Abdullah Ömür vereinbaren.',
    },
    'berru-savur': {
      ...treatmentsFallback('berru-savur', 'de'),
      name: 'Dt. Berru Savur',
      title: 'Ästhetische & Prothetische Zahnärztin | Spezialistin für Biomimetik',
      academicTitle: 'Zahnärztin • Ästhetische und prothetische Restaurationen',
      specialty: 'Umfassendes Lächeln-Design, Katana™ Zirkon & biomimetische Zahnheilkunde',
      languages: ['Deutsch (Koordinator)', 'Englisch', 'Türkisch'],
      department: 'Abteilung für ästhetische & rekonstruktive Zahnheilkunde',
      clinicLocation: 'Dent Aktif International Dental Hospital (Istanbul)',
      quote: 'Jedes neue Lächeln muss die biologische Harmonie wahren. Wahre Ästhetik schont den gesunden Zahnschmelz und schafft natürliche Lichtdurchlässigkeit.',
      bio: 'Dt. Berru Savur schloss ihr Studium an der Biruni-Universität 2020 mit Auszeichnung ab. Sie ist spezialisiert auf biomimetische Restaurationen, japanische Katana™ Zirkonkronen und schonende Keramikinlays.',
      treatedCases: '3.500+ Erfolgreiche ästhetische Restaurationen',
      consultationMsg: 'Guten Tag! Ich möchte eine Beratung für Zirkonkronen bei Dt. Berru Savur vereinbaren.',
    },
    'berfin-savur': {
      ...treatmentsFallback('berfin-savur', 'de'),
      name: 'Dt. Berfin Savur',
      title: 'Ästhetische Zahnärztin | Spezialistin für Digital Smile Design & E-Max Veneers',
      academicTitle: 'Zahnärztin • Kosmetisches Lächeln-Design & Keramik-Veneers',
      specialty: 'Digital Smile Design (DSD), 0,3 mm IPS e.max® Veneers & 3D-Live-Mock-Up',
      languages: ['Deutsch (Koordinator)', 'Englisch', 'Türkisch'],
      department: 'Abteilung für kosmetische Zahnheilkunde & digitale Lächelnarchitektur',
      clinicLocation: 'Dent Aktif International Dental Hospital (Istanbul)',
      quote: 'Ein perfektes Lächeln darf niemals künstlich wirken. Wir analysieren Gesichtsproportionen und Lippenlinien, um individuelle Veneers mit echtem Schmelzglanz zu fertigen.',
      bio: 'Spezialisiert auf Digital Smile Design (DSD) und hauchdünne 0,3 mm Ivoclar IPS e.max® Veneers mit direkter Anprobe im Mund vor Behandlungsbeginn.',
      treatedCases: '2.000+ Gestaltete Hollywood Smiles',
      consultationMsg: 'Guten Tag! Ich möchte eine DSD & Veneer Beratung bei Dt. Berfin Savur vereinbaren.',
    },
    'busra-tomo': {
      ...treatmentsFallback('busra-tomo', 'de'),
      name: 'Dt. Büşra Tomo',
      title: 'Restaurative & Ästhetische Zahnärztin | CAD/CAM Prothetik-Spezialistin',
      academicTitle: 'Zahnärztin • Restaurative, ästhetische und CAD/CAM Zahnmedizin',
      specialty: 'Monolithische Zirkonkronen, ästhetisches Bonding, digitale Scans & Zahnerhaltung',
      languages: ['Deutsch (Koordinator)', 'Englisch', 'Türkisch'],
      department: 'Abteilung für restaurative Zahnheilkunde & digitale CAD/CAM-Prothetik',
      clinicLocation: 'Dent Aktif International Dental Hospital (Istanbul)',
      quote: 'Zahnrestauration ist die Kunst der natürlichen Nachahmung. Mit CAD/CAM-Keramik stellen wir die Kaukraft und das Selbstvertrauen unserer Patienten wieder her.',
      bio: 'Absolventin der renommierten Universität Istanbul (Çapa 2019) mit über 5 Jahren Erfahrung in ästhetischem Komposit-Bonding, Zirkonkronen und 3D-Scans.',
      treatedCases: '5.000+ Erfolgreiche Restaurationen',
      consultationMsg: 'Guten Tag! Ich möchte eine Beratung für Zirkon oder Bonding bei Dt. Büşra Tomo vereinbaren.',
    }
};

const FR_DOCTORS: Record<string, DoctorDetail> = {
    'abdullah-omur': {
      ...treatmentsFallback('abdullah-omur', 'fr'),
      name: 'Dr Abdullah Ömür',
      title: 'Fondateur & Directeur Clinique | Chirurgie Orale & Implantologie',
      academicTitle: 'Chirurgien-Dentiste • Directeur de l\x27Implantologie et de la Chirurgie',
      specialty: 'Implantologie chirurgicale avancée, chirurgie guidée sans lambeau & réhabilitation complète',
      languages: ['Français (coordinateur)', 'Anglais', 'Turc'],
      department: 'Département de Chirurgie Maxillo-Faciale & Implantologie Avancée',
      clinicLocation: 'Hôpital Dentaire International Dent Aktif (Istanbul)',
      quote: 'L\x27implantologie de précision ne se limite pas à l\x27ostéointégration ; c\x27est la reconstruction micrométrique de la biomécanique masticatoire et du sourire.',
      bio: 'Diplômé de l\x27Université Yeditepe en 2014, le Dr Abdullah Ömür a fondé l\x27Hôpital Dent Aktif fin 2017. Il dirige les chirurgies guidées par ordinateur, les protocoles All-on-4/6 et les greffes osseuses.',
      treatedCases: 'Plus de 10 000 implants posés',
      consultationMsg: 'Bonjour ! Je souhaite planifier une consultation en implantologie avec le Dr Abdullah Ömür.',
    },
    'berru-savur': {
      ...treatmentsFallback('berru-savur', 'fr'),
      name: 'Dr Berru Savur',
      title: 'Chirurgien-Dentiste Esthétique & Prothétique | Spécialiste en Biomimétique',
      academicTitle: 'Chirurgien-Dentiste • Restaurations Esthétiques et Prothétiques',
      specialty: 'Conception globale du sourire, Zircone Katana™ et dentisterie biomimétique',
      languages: ['Français (coordinateur)', 'Anglais', 'Turc'],
      department: 'Département de Dentisterie Esthétique, Prothétique et Restauratrice',
      clinicLocation: 'Hôpital Dentaire International Dent Aktif (Istanbul)',
      quote: 'Chaque transformation du sourire doit respecter les tissus vivants. La véritable esthétique préserve l\x27émail sain tout en créant une translucidité naturelle.',
      bio: 'Diplômée avec mention de l\x27Université Biruni en 2020, elle est spécialisée dans les restaurations adhésives biomimétiques et les couronnes en zircone multicouche Katana™.',
      treatedCases: 'Plus de 3 500 restaurations esthétiques',
      consultationMsg: 'Bonjour ! Je souhaite planifier une consultation en zircone avec le Dr Berru Savur.',
    },
    'berfin-savur': {
      ...treatmentsFallback('berfin-savur', 'fr'),
      name: 'Dr Berfin Savur',
      title: 'Dentiste Esthétique | Spécialiste en Digital Smile Design & Facettes E-Max',
      academicTitle: 'Chirurgien-Dentiste • Esthétique du Sourire et Facettes Pelliculaires',
      specialty: 'Digital Smile Design (DSD), facettes 0,3 mm IPS e.max® et essayage 3D en bouche',
      languages: ['Français (coordinateur)', 'Anglais', 'Turc'],
      department: 'Département d\x27Esthétique Dentaire & Architecture Numérique du Sourire',
      clinicLocation: 'Hôpital Dentaire International Dent Aktif (Istanbul)',
      quote: 'Un sourire parfait n\x27est jamais standardisé. Nous analysons les proportions du visage et la dynamique des lèvres pour concevoir des facettes éclatantes et naturelles.',
      bio: 'Spécialiste des protocoles Digital Smile Design (DSD), des facettes ultra-fines 0,3 mm Ivoclar IPS e.max® et des simulations 3D directes en bouche.',
      treatedCases: 'Plus de 2 000 Hollywood Smiles réalisés',
      consultationMsg: 'Bonjour ! Je souhaite planifier une consultation DSD et facettes avec le Dr Berfin Savur.',
    },
    'busra-tomo': {
      ...treatmentsFallback('busra-tomo', 'fr'),
      name: 'Dr Büşra Tomo',
      title: 'Chirurgien-Dentiste Restauratrice | Spécialiste en Prothèse CAD/CAM',
      academicTitle: 'Chirurgien-Dentiste • Dentisterie Restauratrice, Esthétique et CAD/CAM',
      specialty: 'Couronnes en zircone monolithique, bonding esthétique, empreintes 3D et sauvetage dentaire',
      languages: ['Français (coordinateur)', 'Anglais', 'Turc'],
      department: 'Département de Dentisterie Restauratrice & Prothèse Numérique CAD/CAM',
      clinicLocation: 'Hôpital Dentaire International Dent Aktif (Istanbul)',
      quote: 'La dentisterie restauratrice est un art de biomimétisme. Reconstruire une dent avec la céramique CAD/CAM redonne force, vitalité et confiance.',
      bio: 'Diplômée de la Faculté de Médecine Dentaire de l\x27Université d\x27Istanbul (Çapa 2019), elle compte plus de 5 ans d\x27expérience en bonding et couronnes zircone.',
      treatedCases: 'Plus de 5 000 restaurations réussies',
      consultationMsg: 'Bonjour ! Je souhaite planifier une consultation en zircone ou bonding avec le Dr Büşra Tomo.',
    }
};

const AR_DOCTORS: Record<string, DoctorDetail> = {
  'abdullah-omur': {
    ...treatmentsFallback('abdullah-omur', 'ar'),
    name: 'د. عبد الله أومور',
    title: 'المؤسس ورئيس الأطباء | جراحة الفم والوجه والفكين وزراعة الأسنان',
    academicTitle: 'جراح أسنان استشاري • مدير قسم زراعة الأسنان وجراحة الفم',
    specialty: 'زراعة الأسنان الجراحية المتقدمة، الجراحة الرقمية بدون شق جراحي وإعادة تأهيل الفك الكامل',
    languages: ['العربية (منسق خاص)', 'الإنجليزية', 'التركية'],
    department: 'قسم جراحة الوجه والفكين وزراعة الأسنان المتقدمة',
    clinicLocation: 'مستشفى دنت أكتيف الدولي (إسطنبول)',
    quote: 'زراعة الأسنان الجراحية الدقيقة لا تقتصر على الاندماج العظمي فقط، بل هي إعادة بناء رقمية دقيقة لميكانيكا المضغ، وتناسق الوجه، والثقة بالنفس مدى الحياة.',
    bio: 'تخرج د. عبد الله أومور من كلية طب الأسنان بجامعة يدي تبه في 2014، وأسس مستشفى دنت أكتيف في أواخر عام 2017. يقود العمليات الجراحية المتقدمة لزراعة الأسنان بدون جراحة وبروتوكولات All-on-4/6 والترقيع العظمي المعقد.',
    treatedCases: '+10,000 زرعة سنية ناجحة',
    consultationMsg: 'مرحباً! أود حجز استشارة لزراعة الأسنان مع د. عبد الله أومور.',
    specializedProcedures: [
      {
        title: 'ترميم كامل الفك الفوري All-on-4 و All-on-6',
        description: 'إعادة تأهيل كامل للفكين بدون أسنان باستخدام زرعات Straumann السويسرية وتثبيت جسور هجينة دائمة خلال 48-72 ساعة.',
        badge: 'تحميل فوري'
      },
      {
        title: 'زراعة الأسنان الموجهة رقمياً ثلاثية الأبعاد بدون جراحة',
        description: 'تطبيق الزرعات بدون مشرط جراحي أو خياطة بمساعدة الأدلة الجراحية ثلاثية الأبعاد لشفاء سريع وبدون ألم.',
        badge: 'بدون شق جراحي'
      },
      {
        title: 'رفع قاع الجيب الفكي العلوي المتقدم (Sinus Lift)',
        description: 'زيادة سماكة العظم في الفك العلوي باستخدام طعوم Bio-Oss® السويسرية لإنشاء قاعدة متينة لزرعات تدوم مدى الحياة.',
        badge: 'ترقيع عظمي'
      },
      {
        title: 'تجديد العظام والأنسجة الموجه (GBR)',
        description: 'إعادة بناء الفك المتآكل بشدة باستخدام أغشية التيتانيوم وعوامل النمو المشتقة من الصفائح الدموية (PRF).',
        badge: 'تجديد حيوي'
      },
      {
        title: 'الزراعة الفورية في نفس جلسة الخلع',
        description: 'غرس زرعة التيتانيوم الدائمة فوراً في تجويف السن التالف الذي تم خلعه في نفس الزيارة.',
        badge: 'جلسة واحدة'
      }
    ]
  },
  'berru-savur': {
    ...treatmentsFallback('berru-savur', 'ar'),
    name: 'د. بيرو سافور',
    title: 'طبيبة تجميل واستعاضة الأسنان | أخصائية طب الأسنان الحيوي',
    academicTitle: 'طبيبة أسنان استشارية • الاستعاضات التجميلية والتركيبات المتقدمة',
    specialty: 'تصميم الابتسامة الشامل، زيركون Katana™ متعدد الطبقات والترميمات الحيوية',
    languages: ['العربية (منسق خاص)', 'الإنجليزية', 'التركية'],
    department: 'قسم طب الأسنان التجميلي والاستعاضات والترميم',
    clinicLocation: 'مستشفى دنت أكتيف الدولي (إسطنبول)',
    quote: 'كل تحول في الابتسامة يجب أن يحترم التناغم البيولوجي. الجمال الحقيقي يحافظ على مينا الأسنان السليمة مع تحقيق انعكاس ضوئي طبيعي.',
    bio: 'تخرجت بمرتبة الشرف من جامعة بيروني عام 2020، وتتخصص في الترميمات اللاصقة الحيوية، وتيجان الزيركون اليابانية Katana™، والإنلاي الخزفي المجهري.',
    treatedCases: '+3,500 ترميم تجميلي ناجح',
    consultationMsg: 'مرحباً! أود حجز استشارة للتيجان الزيركونية مع د. بيرو سافور.',
    specializedProcedures: [
      {
        title: 'ترميمات زيركون Kuraray Katana™ متعدد الطبقات',
        description: 'تيجان زيركون يابانية خالية من المعادن تتميز بـ 4 طبقات تدرج لوني تحاكي طبيعة السن من الحافة وحتى عنق السن.',
        badge: 'جمال فائق'
      },
      {
        title: 'حشوات الخزف الحيوية غير المباشرة (Inlays & Onlays)',
        description: 'ترميمات خزفية لاصقة فائقة الدقة للأسنان الخلفية تعوض الأجزاء التالفة وتحافظ على أكثر من 80% من بنية السن السليمة.',
        badge: 'محافظ على السن'
      },
      {
        title: 'تجميل اللثة بالليزر وهندسة الابتسامة الوردية',
        description: 'تعديل حواف اللثة غير المتناسقة وعلاج الابتسامة اللثوية بأجهزة ليزر دقيقة بدون نزيف وبدون خياطة أو فترة نقاهة.',
        badge: 'بدون نزيف'
      },
      {
        title: 'إعادة بناء الأسنان العميقة بالأوتاد الليفية المجهرية',
        description: 'إنقاذ وتدعيم الأسنان المعالجة عصبياً وشديدة التلف باستخدام أوتاد الألياف الزجاجية المرنة المتوافقة حيوياً.',
        badge: 'تدعيم هيكلي'
      },
      {
        title: 'إغلاق الفراغات التجميلية بالفينير المباشر',
        description: 'إغلاق الفراغات بين الأسنان وتعديل العيوب الطفيفة بنحت فني مباشر لحشوات النانو هايبرد في زيارة واحدة.',
        badge: 'نفس اليوم'
      }
    ]
  },
  'berfin-savur': {
    ...treatmentsFallback('berfin-savur', 'ar'),
    name: 'د. بيرفين سافور',
    title: 'طبيبة تجميل الأسنان | أخصائية تصميم الابتسامة الرقمي وقشور E-Max',
    academicTitle: 'طبيبة أسنان • تصميم الابتسامة التجميلية وقشور الفينير فائقة الرقة',
    specialty: 'تصميم الابتسامة الرقمي (DSD)، قشور IPS e.max® 0.3 مم والمعاينة المباشرة 3D',
    languages: ['العربية (منسق خاص)', 'الإنجليزية', 'التركية'],
    department: 'قسم تجميل الأسنان وهندسة الابتسامة الرقمية',
    clinicLocation: 'مستشفى دنت أكتيف الدولي (إسطنبول)',
    quote: 'الابتسامة المثالية لا ينبغي أبداً أن تبدو مصطنعة. نقوم بتحليل أبعاد الوجه وديناميكية الشفاه لصناعة قشور ببريق المينا الطبيعي.',
    bio: 'متخصصة في بروتوكولات تصميم الابتسامة الرقمي (DSD) وقشور Ivoclar IPS e.max® رقيقة السمك (0.3 مم) مع تجربة ثلاثية الأبعاد مباشرة في الفم.',
    treatedCases: '+2,000 ابتسامة هوليوود منجزة',
    consultationMsg: 'مرحباً! أود حجز استشارة لتصميم الابتسامة والقشور مع د. بيرفين سافور.',
    specializedProcedures: [
      {
        title: 'قشور الفينير الخزفية فائقة النقاء 0.3 مم IPS e.max®',
        description: 'قشور زجاجية خفيفة جداً من الليثيوم ديسيليكات مع الحفاظ الأقصى على مينا الأسنان وانعكاس ضوئي طبيعي.',
        badge: 'برد مجهري 0.3 مم'
      },
      {
        title: 'المعاينة الحية للابتسامة قبل العلاج (3D Mock-Up)',
        description: 'تجربة حية لنموذج الابتسامة داخل الفم قبل البدء بالبرد، تتيح للمريض رؤية واعتماد ابتسامته المستقبلية بدقة.',
        badge: 'معاينة حية'
      },
      {
        title: 'تصميم الابتسامة الرقمي التفاعلي (DSD)',
        description: 'تحليل أبعاد الوجه، محاذاة الشفاه وانحناء الابتسامة باستخدام برامج الذكاء الاصطناعي والتصوير عالي الدقة.',
        badge: 'تخطيط رقمي'
      }
    ]
  },
  'busra-tomo': {
    ...treatmentsFallback('busra-tomo', 'ar'),
    name: 'د. بشرى تومو',
    title: 'طبيبة الأسنان الترميمية | أخصائية الاستعاضة الرقمية CAD/CAM',
    academicTitle: 'طبيبة أسنان • طب الأسنان الترميمي والتجميلي وCAD/CAM',
    specialty: 'تيجان الزيركون المتجانسة، الحشوات التجميلية، المسح ثلاثي الأبعاد وإنقاذ الأسنان',
    languages: ['العربية (منسق خاص)', 'الإنجليزية', 'التركية'],
    department: 'قسم طب الأسنان الترميمي والاستعاضة الرقمية CAD/CAM',
    clinicLocation: 'مستشفى دنت أكتيف الدولي (إسطنبول)',
    quote: 'ترميم الأسنان هو فن المحاكاة الحيوية الطبيعية. باستخدام سيراميك CAD/CAM نعيد القوة الحيوية والجمال وثقة المرضى بأنفسهم.',
    bio: 'خريجة كلية طب الأسنان بجامعة إسطنبول (تشابا 2019)، ولديها خبرة تتجاوز 5 سنوات في حشوات الكومبوزيت التجميلية وتيجان الزيركون والمسح الرقمي.',
    treatedCases: '+5,000 ترميم ناجح',
    consultationMsg: 'مرحباً! أود حجز استشارة للزيركون أو الترميم مع د. بشرى تومو.',
    specializedProcedures: [
      {
        title: 'التيجان والجسور الزيركونية المتجانسة CAD/CAM',
        description: 'نحت روبوتي خماسي المحاور لتيجان زيركون متجانسة خالية من الكسور وتتحمل قوى المضغ العالية.',
        badge: 'قوة CAD/CAM'
      },
      {
        title: 'الترميم التجميلي بالكومبوزيت النانوي متعدد الطبقات',
        description: 'إعادة بناء حواف الأسنان المكسورة والتصبغات في جلسة واحدة باستخدام أحدث حشوات النانو.',
        badge: 'جلسة واحدة'
      },
      {
        title: 'المسح الفموي الرقمي ثلاثي الأبعاد بدون طبعات تقليدية',
        description: 'أخذ قياسات الأسنان بدقة بالغة بواسطة كاميرا فموية سريعة ومريحة تلغي الشعور بالغثيان تماماً.',
        badge: 'بدون معجون'
      }
    ]
  }
};

export const DOCTORS_DATA_BY_LOCALE: Record<string, Record<string, DoctorDetail>> = {
  en: EN_DOCTORS,
  tr: TR_DOCTORS,
  ru: RU_DOCTORS,
  de: DE_DOCTORS,
  fr: FR_DOCTORS,
  ar: AR_DOCTORS,
};

export function getDoctorsList(lang = 'en'): DoctorDetail[] {
  const safeLang = DOCTORS_DATA_BY_LOCALE[lang] ? lang : 'en';
  return Object.values(DOCTORS_DATA_BY_LOCALE[safeLang]);
}

export function getDoctorDetail(id: string, lang = 'en'): DoctorDetail | undefined {
  const safeLang = DOCTORS_DATA_BY_LOCALE[lang] ? lang : 'en';
  return DOCTORS_DATA_BY_LOCALE[safeLang]?.[id] || DOCTORS_DATA_BY_LOCALE['en']?.[id];
}

export const DOCTORS_DATA = DOCTORS_DATA_BY_LOCALE['en'];
