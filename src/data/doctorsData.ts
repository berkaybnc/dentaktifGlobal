export interface DoctorDetail {
  id: string;
  name: string;
  title: string;
  specialty: string;
  image: string;
  experience: string;
  licenseId: string;
  languages: string[];
  department: string;
  quote: string;
  bio: string;
  extendedBio: string[];
  education: Array<{ degree: string; institution: string; year: string }>;
  specializations: string[];
  certifications: string[];
  treatedCases: string;
  consultationMsg: string;
}

export const DOCTORS_DATA: Record<string, DoctorDetail> = {
  'abdullah-omur': {
    id: 'abdullah-omur',
    name: 'Dt. Abdullah Ömür',
    title: 'Dental Surgeon & Clinical Director',
    specialty: 'Oral Surgery, Implantology & Complex Smile Reconstruction',
    image: '/images/doctors/dt-abdullah-omur.png',
    experience: '18+ Years Surgical Leadership',
    licenseId: 'MOH Registered Dental Surgeon • Levent Faculty',
    languages: ['English', 'Turkish'],
    department: 'Department of Oral & Maxillofacial Implantology',
    quote: 'Precision surgical implantology is not merely about placing an implant; it is about restoring lifelong chewing function, facial volume, and uncompromised aesthetic confidence.',
    bio: 'Dedicated dental surgeon and clinical director with over 18 years of specialized expertise in computer-guided flapless implant surgery, biological bone regeneration, and full-mouth rehabilitation for international patients.',
    extendedBio: [
      'Dt. Abdullah Ömür serves as the Clinical Director and Chief Oral Surgeon at Dent Aktif International Hospital. With over 18 years of focused clinical experience, he has performed thousands of successful full-arch implant rehabilitations utilizing Swiss Straumann® systems.',
      'A pioneer in 3D digital surgical workflow, Dt. Ömür integrates low-dose Morita CBCT volumetric tomography with computer-generated surgical guides, allowing flapless keyhole implant placements with minimal post-operative discomfort and accelerated healing.',
      'He regularly collaborates with in-house master ceramists to deliver immediate-load temporary prosthetics, enabling overseas patients to walk out of the clinic with fixed teeth within 48 to 72 hours of arrival in Istanbul.'
    ],
    education: [
      { degree: 'Degree in Dental Medicine (BDS)', institution: 'Istanbul University Faculty of Dentistry', year: '2006' },
      { degree: 'Advanced Fellowship in Oral Implantology', institution: 'European Association for Osseointegration (EAO)', year: '2011' },
      { degree: 'Digital Guided Surgery Certification', institution: 'Straumann® Platinum Center of Excellence, Switzerland', year: '2016' }
    ],
    specializations: [
      'Swiss Straumann® Computer-Guided Flapless Implantation',
      'Full-Arch All-on-4 and All-on-6 Immediate Function Protocols',
      '3D Lateral & Crestal Sinus Lift and Bone Matrix Augmentation',
      'Complex Multi-Disciplinary Bite and Occlusion Reconstruction',
      'Piezoelectric Minimally Invasive Surgical Extractions'
    ],
    certifications: [
      'Republic of Turkey Ministry of Health Licensed Dental Surgeon',
      'Swiss Straumann® Platinum Clinical Excellence Certified',
      'International Team for Implantology (ITI) Registered Member',
      'European Association for Osseointegration (EAO) Clinical Affiliate',
      'Advanced Cardiac Life Support (ACLS) & Sedation Safety Certified'
    ],
    treatedCases: '6,500+ Implant Placements',
    consultationMsg: 'Hello Dent Aktif! I would like to consult directly with Clinical Director Dt. Abdullah Ömür regarding dental implant surgery.'
  },
  'hilal-mutlu-er': {
    id: 'hilal-mutlu-er',
    name: 'Dt. Hilal Mutlu Er',
    title: 'Aesthetic & Restorative Dentist',
    specialty: 'Digital Smile Design & Minimal-Invasive Ceramic Veneers',
    image: '/images/doctors/dt-hilal-mutlu-er.png',
    experience: '12+ Years Cosmetic Dentistry Expertise',
    licenseId: 'MOH Registered Dental Surgeon • Levent Faculty',
    languages: ['English', 'Turkish'],
    department: 'Department of Aesthetic Smile Architecture & Prosthetics',
    quote: 'A true Hollywood smile makeover must never look artificial or uniform. It must enhance each patient’s unique facial contours, lip architecture, and natural tooth translucency.',
    bio: 'Specialist in cosmetic smile architecture, minimal-invasive enamel preparation, and handcrafted Ivoclar Vivadent E-Max® veneers with chairside master ceramist try-ins.',
    extendedBio: [
      'Dt. Hilal Mutlu Er leads the Aesthetic Dentistry & Smile Architecture unit at Dent Aktif. Renowned for her artistic precision and meticulous attention to shade layering, she has designed smiles for patients from the UK, Germany, France, and North America.',
      'Her clinical methodology centers on the Digital Smile Design (DSD) protocol, which allows patients to preview and approve their final smile aesthetic via a physical chairside mock-up before any enamel preparation takes place.',
      'Working directly with our on-site 5-axis CAD/CAM milling laboratory, Dt. Mutlu Er specializes in 0.3mm ultra-thin veneers that preserve maximum natural tooth structure while achieving optimal brightness, durability, and biological gum harmony.'
    ],
    education: [
      { degree: 'Degree in Dental Medicine (BDS)', institution: 'Marmara University Faculty of Dentistry', year: '2012' },
      { degree: 'Master Course in Aesthetic Ceramic Restorations', institution: 'Ivoclar Vivadent International Training Center, Liechtenstein', year: '2015' },
      { degree: 'Digital Smile Design (DSD) Certified Master', institution: 'DSD International Academy', year: '2018' }
    ],
    specializations: [
      'Handcrafted Ivoclar Vivadent E-Max® Porcelain Laminate Veneers',
      'Digital Smile Design (DSD) Physical Intraoral Mock-Up Protocols',
      '0.3mm Minimally Invasive Enamel Preservation Preparations',
      'Kuraray Katana™ Monolithic Multi-Layer Zirconia Restorations',
      'Artistic Composite Bonding & Laser Gum Recontouring (Gingivoplasty)'
    ],
    certifications: [
      'Republic of Turkey Ministry of Health Licensed Dental Practitioner',
      'Ivoclar Vivadent Certified Master Aesthetic Clinician',
      'European Academy of Esthetic Dentistry (EAED) Affiliate Member',
      'Turkish Academy of Esthetic Dentistry (EDAD) Active Member',
      'Philips Zoom® Professional In-Office Whitening Certified'
    ],
    treatedCases: '4,200+ Veneer Restorations',
    consultationMsg: 'Hello Dent Aktif! I would like to consult with Dt. Hilal Mutlu Er regarding a Hollywood Smile makeover.'
  },
  'busra-tomo': {
    id: 'busra-tomo',
    name: 'Dt. Büşra Tomo',
    title: 'Specialist Dentist',
    specialty: 'Endodontics & Conservative Tooth Preservation',
    image: '/images/doctors/dt-busra-tomo.png',
    experience: '10+ Years Endodontic & Restorative Focus',
    licenseId: 'MOH Registered Specialist • Levent Faculty',
    languages: ['English', 'Turkish'],
    department: 'Department of Endodontics & Conservative Dentistry',
    quote: 'Preserving a natural tooth is the ultimate triumph in dentistry. With modern microscopic endodontics, we save teeth that were once considered unsalvageable.',
    bio: 'Dedicated specialist in surgical microscopic root canal therapy, pain-free single-visit canal disinfection, and biological restorative preservation.',
    extendedBio: [
      'Dt. Büşra Tomo oversees the Endodontic and Conservative Dentistry department at Dent Aktif Hospital. Her clinical mission is the absolute preservation of natural tooth vitality using surgical operating microscopes and advanced nickel-titanium rotary systems.',
      'She is known for painless single-session root canal therapies, eliminating dental anxiety through computer-controlled Wand® localized anesthesia and bio-ceramic sealing materials that promote apical healing.',
      'Dt. Tomo also collaborates closely with our prosthodontic team to restore root-treated teeth with CAD/CAM ceramic inlays, onlays, and protective zirconia crowns, guaranteeing structural resilience for decades.'
    ],
    education: [
      { degree: 'Degree in Dental Surgery (BDS)', institution: 'Ege University Faculty of Dentistry', year: '2014' },
      { degree: 'Advanced Endodontic Micro-Surgery Residency', institution: 'Turkish Endodontic Society Post-Graduate Program', year: '2017' },
      { degree: 'Bio-Ceramic Sealer & Rotary Instrumentation Fellowship', institution: 'VDW Endodontics Certification, Germany', year: '2020' }
    ],
    specializations: [
      'High-Power Surgical Operating Microscope Root Canal Therapy',
      'Single-Visit Pain-Free Root Disinfection & Warm Gutta-Percha Sealing',
      'Bio-Ceramic Biocompatible Micro-Perforation Repair (MTA)',
      'Complex Root Canal Retreatment & Broken Instrument Retrieval',
      'Conservative Nano-Hybrid Composite Restorations & Ceramic Inlays'
    ],
    certifications: [
      'Republic of Turkey Ministry of Health Licensed Dental Specialist',
      'Turkish Endodontic Society (TED) Active Member',
      'European Society of Endodontology (ESE) Certified Specialist Member',
      'Advanced Rotary Micro-Instrumentation Certified Clinician',
      'Dental Trauma and Emergency Management Certified'
    ],
    treatedCases: '5,000+ Endodontic Treatments',
    consultationMsg: 'Hello Dent Aktif! I would like to consult with Dt. Büşra Tomo regarding microscopic root canal therapy and tooth preservation.'
  }
};

export function getDoctorsList(): DoctorDetail[] {
  return Object.values(DOCTORS_DATA);
}

export function getDoctorDetail(id: string): DoctorDetail | undefined {
  return DOCTORS_DATA[id];
}
