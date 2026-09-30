import React, { useState } from 'react';

const treatmentDetailsData = {
  'aesthetic-dentistry': {
    name: 'Aesthetic Dentistry',
    badge: 'Smile Design & Whitening',
    icon: '✨',
    tagline: 'Enhance Your Smile with Professional Aesthetic Dentistry in Turkey',
    heroDesc: 'Restore your oral health with professional aesthetic dentistry procedures in Turkey. Using advanced techniques, we preserve natural tooth structure, enhance tooth color and shape, and eliminate smile insecurities. Enjoy a comfortable, carefully managed procedure designed to preserve function, protect your smile, and deliver lasting relief.',
    stay: '1 - 3 Days',
    warranty: '10 Years Warranty',
    anesthesia: '100% Painless Computerized Anesthesia',
    material: 'Philips Zoom Ultra Laser & Micro-Composite Resins',
    overview: `Aesthetic dentistry involves a range of procedures designed to enhance the visual appearance of your teeth, gums, and smile. From teeth whitening and digital composite bonding to laser gum contouring and porcelain veneers, aesthetic dentistry preserves your natural tooth structure while correcting discolorations, chips, gaps, and misalignment. It combines art and science to deliver a harmonious, glowing smile tailored to your unique facial features.`,
    highlights: [
      'Philips Zoom WhiteSpeed Laser Whitening (up to 8 shades lighter)',
      'Digital Smile Design (DSD) preview before any procedure',
      'Micro-invasive composite bonding with zero enamel grinding',
      'Pain-free laser gum sculpting for symmetrical gum lines'
    ],
    sections: [
      {
        title: 'Ideal Candidates for Aesthetic Dentistry',
        desc: 'Ideal candidates for aesthetic dentistry are individuals looking to improve the appearance of their teeth and smile. This includes those with discoloration, chips, cracks, uneven shapes, misalignment, or gaps between teeth. Suitability depends on factors such as overall oral health, gum condition, and personal aesthetic goals. During a personalized consultation, our experienced dental professionals will thoroughly evaluate your needs and recommend the most effective cosmetic treatments to achieve a natural, beautiful, and confident smile.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg'
      },
      {
        title: 'How Much Does Aesthetic Dentistry Cost?',
        desc: 'The cost of aesthetic dentistry varies depending on the type of procedure, the materials used, the complexity of treatment, and the patient’s overall oral condition. At Dent Aktif Clinic, we offer competitive pricing and flexible payment options (enjoying up to 70% savings compared to your home country) to make treatment more accessible. During your personalized consultation, you will receive a detailed treatment plan and a tailored cost estimate designed to match your individual needs and goals.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2024/03/Benefits-of-Hollywood-Smile.webp'
      },
      {
        title: 'Benefits of Aesthetic Dentistry',
        desc: 'Aesthetic dentistry offers numerous benefits, including enhancing the appearance of teeth, correcting imperfections, and creating a brighter, more harmonious smile. These treatments not only improve confidence but also support oral function by restoring balance and strength. By addressing issues such as discoloration, chips, or misalignment, aesthetic dentistry helps you maintain long-term dental health while achieving a natural and attractive look.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2024/03/Hollywood-Smile-What-to-Expect.webp'
      },
      {
        title: 'Aesthetic Dentistry at Dent Aktif Clinic',
        desc: 'At Dent Aktif Clinic, we provide a personalized and comprehensive journey in aesthetic dentistry. From the initial consultation to detailed aftercare, every step is designed with your comfort and satisfaction in mind. The process involves careful assessment, customized planning, and the precise application of treatments such as veneers, whitening, or crowns—ensuring a seamless experience that enhances your smile’s beauty and boosts your confidence.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-1024x853-1.webp'
      }
    ],
    steps: [
      { step: '01', title: 'Digital Consultation & 3D Scan', desc: 'High-resolution intraoral scanning and shade analysis to design your custom aesthetic plan.' },
      { step: '02', title: 'Laser Whitening or Sculpting', desc: 'In-office laser treatment to brighten enamel or precision laser contouring for ideal gum proportions.' },
      { step: '03', title: 'Composite Artistry & Polishing', desc: 'Direct composite bonding applied by master aesthetic dentists to repair chips and close gaps flawlessly.' }
    ],
    reviews: [
      { name: 'Olivia A.', location: 'Berlin, Germany', badge: 'Trustpilot 5 Stars', comment: 'My Hollywood Smile & Aesthetic Dentistry procedure at DENT AKTIF CLINIC transformed my life. The team was incredibly professional, and the results are stunningly natural. Highly recommended!' },
      { name: 'Harper C.', location: 'London, United Kingdom', badge: 'ProvenExpert 5 Stars', comment: 'I chose DENT AKTIF CLINIC for my smile makeover, and I’m thrilled with the outcomes. The attention and care during treatment made for an excellent experience.' },
      { name: 'Matthew T.', location: 'Paris, France', badge: 'ProvenExpert 5 Stars', comment: 'I refreshed my smile with DENT AKTIF CLINIC, and the results are wonderful. Thanks to the procedure, I look younger and more vibrant!' }
    ],
    faq: [
      { q: 'How long does laser teeth whitening last?', a: 'With proper oral hygiene and avoiding heavy staining foods, results typically last 2 to 3 years.' },
      { q: 'Is aesthetic bonding permanent?', a: 'Composite bonding lasts between 5 to 10 years and can easily be touched up or polished during routine checkups.' }
    ]
  },
  'hollywood-smile': {
    name: 'Hollywood Smile',
    badge: 'Signature Full-Arch Makeover',
    icon: '💎',
    tagline: 'World-Famous 20 E-Max® Porcelain Veneer Complete Transformation in Istanbul',
    heroDesc: 'Achieve a radiant, symmetrical smile with a personalized Hollywood Smile in Turkey. Custom porcelain veneers and 3D digital smile design bring out your natural beauty and boost your confidence. Enjoy a smooth, carefully planned experience designed to deliver a flawless, long-lasting transformation.',
    stay: '5 Days (2 Appointments)',
    warranty: 'Lifetime International Warranty',
    anesthesia: 'Painless Local Anesthesia & Sedation Option',
    material: 'Original Ivoclar Vivadent E-Max® Press Porcelain',
    overview: `A Hollywood Smile is a signature full-arch cosmetic dental restoration that creates a perfectly aligned, bright white, and aesthetically flawless smile using ultra-thin E-Max® porcelain veneers or crowns tailored to your facial structure, lip contours, and skin tone.`,
    highlights: [
      '20 Original Ivoclar Vivadent E-Max® Porcelain Veneers',
      '3D Digital Smile Design with instant trial preview',
      '5-Star Luxury Bosphorus Hotel stay included',
      'VIP Airport & Clinic transfers with private chauffeur (Mercedes Vito)',
      'Includes 3D CBCT Tomography scan and panoramic X-rays'
    ],
    sections: [
      {
        title: 'Ideal Candidates for Hollywood Smile',
        desc: 'Ideal candidates for a Hollywood Smile are individuals with discolored, worn, chipped, uneven, or slightly misaligned teeth who want a complete celebrity smile transformation. Our dental specialists evaluate facial symmetry, tooth length, and shade preferences during a 3D digital mock-up session.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2024/03/Benefits-of-Hollywood-Smile.webp'
      },
      {
        title: 'How Much Does Hollywood Smile Cost in Turkey?',
        desc: 'The cost of a Hollywood Smile in Istanbul depends on the total number of veneers (typically 20 E-Max veneers for full upper and lower arches) and custom design requirements. At Dent Aktif Clinic, international patients save up to 70% compared to Western Europe and UK clinics, with full 5-star hotel accommodation and private VIP Mercedes Vito transfers included.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2024/03/Hollywood-Smile-What-to-Expect.webp'
      },
      {
        title: 'Benefits of a Signature Hollywood Smile',
        desc: 'Hollywood Smile delivers permanent stain resistance, ultra-translucent shade depth matching your natural skin tone, structural enamel reinforcement, and an instant boost in self-confidence for a lifetime.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/11/DENT-AKTIF-VITO.jpg'
      }
    ],
    steps: [
      { step: '01', title: 'Arrival & 3D Digital Mock-Up', desc: 'VIP transfer from Istanbul Airport. Intraoral 3D scanning and custom smile trial in our clinic lounge.' },
      { step: '02', title: 'Minimal Tooth Prep & Temporary Veneers', desc: 'Gentle micro-preparation of enamel followed by fitting comfortable temporary veneers so you can enjoy Istanbul.' },
      { step: '03', title: 'Final E-Max® Permanent Bonding', desc: 'On Day 5, your master-crafted porcelain veneers are permanently bonded and polished to perfection.' }
    ],
    reviews: [
      { name: 'Jack P.', location: 'New York, USA', badge: 'ProvenExpert 5 Stars', comment: 'DENT AKTIF CLINIC did a fantastic job with my Hollywood Smile treatment. The entire process was smooth and comfortable!' }
    ],
    faq: [
      { q: 'Will my teeth be shaved down significantly?', a: 'No! E-Max veneers are ultra-thin (0.3mm to 0.5mm), requiring only micro-preparation of the outer enamel layer.' },
      { q: 'What is included in the VIP Hollywood Smile Package?', a: 'Our package includes 20 E-Max veneers, 5 nights in a 5-star partner hotel, all VIP transfers, X-rays, medication, and lifetime warranty.' }
    ]
  },
  'dental-veneers': {
    name: 'Dental Zirconium Veneers',
    badge: 'Ultra-Durable Translucent Zirconia',
    icon: '🦷',
    tagline: 'High Mechanical Strength Meets Natural Light Translucency in Istanbul',
    heroDesc: 'Transform your smile with ultra-durable translucent German Zirconium veneers in Istanbul. Zirconium veneers provide unmatched durability and natural aesthetic reflection. Perfect for patients seeking strong, stain-resistant veneers that withstand heavy bite forces.',
    stay: '4 - 5 Days',
    warranty: '20 Years Warranty',
    anesthesia: 'Pain-Free Anesthesia System',
    material: 'High-Translucency German Zirconia Blocks',
    overview: `Zirconium dioxide is a biocompatible, metal-free material renowned for its exceptional flexural strength (exceeding 1200 MPa) and light-transmitting properties. Ideal for restoring discolored, misaligned, or fractured teeth while maintaining a 100% natural look without dark metal margins at the gumline.`,
    highlights: [
      '100% Metal-free German Zirconia blocks milled with CAD/CAM precision',
      'Ideal for patients with heavy bruxism (teeth grinding)',
      'Highly resistant to coffee, tea, and tobacco staining',
      'Perfect marginal fit preventing bacteria accumulation'
    ],
    sections: [
      {
        title: 'Ideal Candidates for Zirconium Veneers',
        desc: 'Ideal candidates include patients with severe enamel erosion, heavy intrinsic tooth discoloration, dark underlying tooth structures, or strong jaw bite forces requiring high mechanical resistance.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-1024x853-1.webp'
      },
      {
        title: 'How Much Do Zirconium Veneers Cost?',
        desc: 'German Zirconium veneers provide high-end ceramic durability at transparent, affordable pricing. Patients save up to 70% in Turkey while receiving a 20-year international warranty.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg'
      },
      {
        title: 'Benefits of German Zirconium Veneers',
        desc: 'Combines 100% biocompatible metal-free elements with sub-millimeter robot milling precision, ensuring zero gum discoloration and permanent stain immunity.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2024/03/Benefits-of-Hollywood-Smile.webp'
      }
    ],
    steps: [
      { step: '01', title: 'Digital CAD/CAM Scan', desc: '3D scanning eliminates messy traditional impressions for maximum accuracy.' },
      { step: '02', title: 'Precision Robot Milling', desc: 'Zirconia blocks are computer-milled with sub-millimeter tolerances in our in-house lab.' },
      { step: '03', title: 'Custom Hand-Glazing & Fitting', desc: 'Master dental technicians hand-shade and glaze each crown before final permanent cementing.' }
    ],
    faq: [
      { q: 'Are Zirconium veneers stronger than E-Max?', a: 'Yes, Zirconium has higher flexural strength (over 1200 MPa), making it ideal for molars and strong bite forces.' },
      { q: 'Do Zirconium crowns cause gum allergies?', a: 'No, Zirconia is 100% biocompatible and tissue-friendly with zero risk of allergic reactions.' }
    ]
  },
  'dental-crowns': {
    name: 'Dental Crowns',
    badge: 'Full Arch & Single Tooth Restoration',
    icon: '👑',
    tagline: 'Complete 360-Degree Anatomical Tooth Protection & Restoration',
    heroDesc: 'Restore heavily decayed, cracked, or root-canal-treated teeth with custom-engineered porcelain and zirconia crowns designed for lifetime durability in Istanbul.',
    stay: '4 - 5 Days',
    warranty: '15 Years Warranty',
    anesthesia: 'Computerized Local Anesthesia',
    material: 'Monolithic Zirconia & Layered Porcelain',
    overview: `Dental crowns completely encase compromised teeth, restoring full chewing functionality and original shape. Our crowns are crafted using digital CAD/CAM technology to guarantee immaculate contact points and harmonious bite alignment.`,
    highlights: [
      'Full 360-degree protection for weak or damaged teeth',
      'Seamless aesthetic color integration with adjacent natural teeth',
      'Monolithic Zirconia and E-Max Press ceramic options available',
      'In-house laboratory ensures quick 4-day turnaround time'
    ],
    sections: [
      {
        title: 'Ideal Candidates for Dental Crowns',
        desc: 'Ideal for patients with large decayed areas, broken fillings, cracked enamel structure, or those needing to cap dental implants for full arch chewing functionality.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2024/03/Hollywood-Smile-What-to-Expect.webp'
      },
      {
        title: 'How Much Do Dental Crowns Cost?',
        desc: 'Full coverage crowns at Dent Aktif Clinic offer lifetime durability with up to 70% savings compared to Western countries, backed by a 15-year guarantee.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2024/03/Benefits-of-Hollywood-Smile.webp'
      },
      {
        title: 'Benefits of Full Coverage Dental Crowns',
        desc: 'Protects fragile teeth from fracturing, corrects dark root discoloration, and hand-layered ceramic textures create an undetectable natural look.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg'
      }
    ],
    steps: [
      { step: '01', title: 'Tooth Preparation & Scanning', desc: 'Removing decayed areas and shaping the tooth for a solid crown foundation.' },
      { step: '02', title: 'Temporary Crown Placement', desc: 'Protecting the shaped tooth while your custom crown is crafted.' },
      { step: '03', title: 'Permanent Crown Cementation', desc: 'Verifying bite alignment and permanently bonding the crown.' }
    ],
    faq: [
      { q: 'How long do dental crowns last?', a: 'With proper oral hygiene and regular dental checkups, our dental crowns last 15 to 25+ years.' }
    ]
  },
  'dental-implants': {
    name: 'Dental Implants',
    badge: 'Swiss Straumann® Permanent Restoration',
    icon: '⚙️',
    tagline: 'Lifetime Permanent Root Replacement for Single & Full-Arch Teeth',
    heroDesc: 'Restore your missing teeth permanently with official Swiss Straumann® implants in Turkey. Titanium and ceramic roots fuse naturally with your jawbone to provide permanent structural support.',
    stay: '5 Days (1st Phase)',
    warranty: 'Lifetime International Guarantee',
    anesthesia: 'Sedation & Pain-Free Computerized Local Anesthesia',
    material: 'Swiss Straumann® SLAactive Titanium / Ceramic',
    overview: `Dental implants are the gold standard for missing tooth replacement. Placed surgically into the jawbone, they mimic natural tooth roots and prevent jawbone loss. Whether you need a single implant or a full-arch All-on-4 / All-on-6 restoration, our oral surgeons deliver flawless results.`,
    highlights: [
      'Official Swiss Straumann® Platinum Partner Clinic',
      'Pain-free computer-guided 3D surgical placement',
      'Prevents facial structure sagging & jawbone resorption',
      'Fixed Zirconia bridges provided during osseointegration'
    ],
    sections: [
      {
        title: 'Ideal Candidates for Dental Implants',
        desc: 'Ideal candidates are patients missing one, multiple, or all natural teeth seeking a permanent non-removable fixed restoration with healthy jawbone structure.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-1024x853-1.webp'
      },
      {
        title: 'How Much Do Swiss Straumann Implants Cost?',
        desc: 'Official Swiss Straumann® titanium implants provided at direct clinic partner rates, saving international patients up to 70% with a lifetime international guarantee.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/11/DENT-AKTIF-VITO.jpg'
      },
      {
        title: 'Benefits of Lifetime Dental Implants',
        desc: 'Eliminates loose dentures, prevents jawbone shrinkage, preserves facial contours, and restores 100% natural chewing force.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Basliksiz-1-1.png'
      }
    ],
    steps: [
      { step: '01', title: '3D CBCT Scan & Surgical Guide Design', desc: 'Computerized tomography mapping nerve pathways for pin-point implant accuracy.' },
      { step: '02', title: 'Keyhole Implant Surgery', desc: 'Painless 15-minute surgical placement per implant using micro-incision technique.' },
      { step: '03', title: 'Temporary Crown & Healing Phase', desc: 'Fitting temporary teeth while the implant integrates with the jawbone over 2-3 months.' }
    ],
    faq: [
      { q: 'Is dental implant surgery painful?', a: 'Not at all. With modern computerized local anesthesia and optional sedation, patients feel no pain during the procedure.' },
      { q: 'What is the All-on-4 / All-on-6 technique?', a: 'It allows a full fixed arch of 12-14 teeth to be supported by just 4 or 6 strategically placed implants.' }
    ]
  },
  'root-canal': {
    name: 'Root Canal Treatment',
    badge: 'Painless Microscopic Endodontics',
    icon: '🔬',
    tagline: 'Save Your Natural Tooth with Professional Root Canal Treatment in Turkey',
    heroDesc: 'Restore your oral health with professional root canal treatment in Turkey. Using advanced techniques, we remove infected pulp to save natural teeth and eliminate pain. Enjoy a comfortable, carefully managed procedure designed to preserve function, protect your smile, and deliver lasting relief.',
    stay: '1 Day (Single Session)',
    warranty: '10 Years Warranty',
    anesthesia: '100% Computerized Painless Anesthesia',
    material: 'Biocompatible Gutta-Percha & 3D Rotary Files',
    overview: `Root canal treatment is a specialized procedure designed to save a tooth that is severely decayed or infected. By carefully removing the damaged pulp, cleaning, and sealing the inside, the treatment preserves the natural tooth structure and prevents further complications. The result is restored function, lasting comfort, and protection of your overall oral health.`,
    highlights: [
      'High-magnification surgical microscope for complete canal cleaning',
      'Single-visit treatment completed in under 60 minutes',
      'Instant relief from acute toothache and thermal sensitivity',
      'Biocompatible sealing prevents secondary bacterial infections'
    ],
    sections: [
      {
        title: 'What is Root Canal Treatment?',
        desc: 'Root canal treatment is a dental procedure designed to save teeth that are badly decayed, infected, or damaged. It involves removing the infected pulp from inside the tooth, thoroughly cleaning and disinfecting the canal, and then filling and sealing it to prevent further infection.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-1024x853-1.webp'
      },
      {
        title: 'Ideal Candidates for Root Canal Treatment',
        desc: 'Ideal candidates include individuals experiencing deep tooth decay, severe sensitivity to hot and cold, pain when chewing, swelling around gums, or teeth damaged by trauma.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg'
      },
      {
        title: 'How Much Does Root Canal Treatment Cost?',
        desc: 'Root canal therapy at Dent Aktif Clinic is performed in a single session using computerized painless anesthesia at transparent, affordable international rates.',
        image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Basliksiz-1-1.png'
      }
    ],
    steps: [
      { step: '01', title: 'Digital X-Ray & Painless Anesthesia', desc: 'Targeted computerized anesthesia to ensure complete comfort throughout.' },
      { step: '02', title: 'Microscopic Canal Disinfection', desc: 'Rotary titanium instrumentation cleans and sterilizes infected root canals.' },
      { step: '03', title: 'Biocompatible Thermal Sealing', desc: 'Hermetic filling of root canals followed by a protective tooth restoration.' }
    ],
    faq: [
      { q: 'Will I feel any pain during a root canal?', a: 'No! Computerized local anesthesia numb the tooth completely, making it as comfortable as a standard filling.' }
    ]
  }
};

export default function TreatmentDetailPage({ treatmentId, onNavigate }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeVipTab, setActiveVipTab] = useState(0);
  const [toothCount, setToothCount] = useState(10);

  const data = treatmentDetailsData[treatmentId] || treatmentDetailsData['aesthetic-dentistry'];

  const vipTabs = [
    {
      title: '01 – Safe Medical Care',
      subtitle: 'Accredited Doctors & Sterilization',
      desc: 'Receive treatment at internationally accredited clinics with senior specialists, ensuring complete safety, hygiene, and European-certified medical standards.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Root-Canal-Treatment-2x-1.jpg'
    },
    {
      title: '02 – Travel & Comfort',
      subtitle: 'VIP Mercedes Vito & 5-Star Hotel',
      desc: 'Enjoy luxury chauffeured Mercedes Vito airport and clinic transfers along with 5-star Bosphorus hotel stays for a stress-free medical vacation.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/11/DENT-AKTIF-VITO.jpg'
    },
    {
      title: '03 – Professional Support',
      subtitle: '3D Scan Lounge & Personal Host',
      desc: 'From high-definition 3D intraoral scans to a dedicated multilingual personal host, our team guides you every step of the way in Istanbul.',
      image: 'https://dentaktifglobal.com/wp-content/uploads/2025/09/Basliksiz-1-1.png'
    }
  ];

  const comparisonMatrix = [
    { name: 'Aesthetic Dentistry', strength: '800 MPa', stay: '1 - 3 Days', warranty: '10 Years', translucency: '⭐ ⭐ ⭐ ⭐ ⭐', prep: 'Micro-Invasive' },
    { name: 'Hollywood Smile', strength: '1000 MPa (E-Max)', stay: '5 Days', warranty: 'Lifetime', translucency: '⭐ ⭐ ⭐ ⭐ ⭐', prep: 'Ultra-Thin 0.3mm' },
    { name: 'Dental Zirconium Veneers', strength: '1200+ MPa', stay: '4 - 5 Days', warranty: '20 Years', translucency: '⭐ ⭐ ⭐ ⭐', prep: 'Minimal Prep' },
    { name: 'Dental Crowns', strength: '1400 MPa', stay: '4 - 5 Days', warranty: '15 Years', translucency: '⭐ ⭐ ⭐ ⭐', prep: '360° Coverage' },
    { name: 'Dental Implants', strength: 'Titanium Root', stay: '5 Days (Phase 1)', warranty: 'Lifetime', translucency: '⭐ ⭐ ⭐ ⭐ ⭐', prep: 'Keyhole Surgery' },
    { name: 'Root Canal Treatment', strength: 'Natural Tooth', stay: '1 Day', warranty: '10 Years', translucency: 'Natural', prep: 'Microscopic' }
  ];

  return (
    <div className="page-treatment-detail section-padding" style={{ paddingTop: '10.5rem' }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          <button onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', color: 'var(--color-brand-primary)', cursor: 'pointer', fontWeight: 600 }}>Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('treatments')} style={{ background: 'none', border: 'none', color: 'var(--color-brand-primary)', cursor: 'pointer', fontWeight: 600 }}>Treatments</button>
          <span>/</span>
          <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>{data.name}</span>
        </div>

        {/* Hero Section Banner */}
        <div className="glass-card" style={{ padding: '3.5rem 3rem', borderRadius: '32px', background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,249,255,0.9))', marginBottom: '3.5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(2,132,199,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: '1 1 500px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(2, 132, 199, 0.08)', color: 'var(--color-brand-primary)', padding: '0.4rem 1.2rem', borderRadius: '99px', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1.25rem', border: '1px solid rgba(2, 132, 199, 0.2)' }}>
                <span>{data.icon}</span> {data.badge}
              </div>

              <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.15, marginBottom: '1rem' }}>
                {data.name}
              </h1>

              <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-brand-primary)', marginBottom: '1.25rem' }}>
                {data.tagline}
              </p>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '650px' }}>
                {data.heroDesc}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate('consultation')} className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                  Get Free Quote & 3D Plan →
                </button>
                <a href="https://wa.me/+905521617377" target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  💬 WhatsApp Us (+90 552 161 7377)
                </a>
              </div>
            </div>

            {/* Quick Specs & Interactive Tooth Calculator */}
            <div className="glass-card" style={{ flex: '0 1 340px', padding: '2rem', borderRadius: '24px', background: 'white', border: '1px solid var(--glass-border-subtle)', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.2rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.6rem' }}>
                Interactive Treatment Estimator
              </h3>

              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                  <span>Target Teeth Count:</span>
                  <span style={{ color: 'var(--color-brand-primary)', fontSize: '1rem' }}>{toothCount} Teeth</span>
                </div>
                <input
                  type="range" min="1" max="20" value={toothCount}
                  onChange={(e) => setToothCount(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--color-brand-primary)' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f8fafc', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>⏱️ Estimated Stay:</span>
                  <strong>{toothCount > 10 ? '5 Days' : data.stay}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f8fafc', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>🚘 VIP Vito Transfer:</span>
                  <strong style={{ color: '#059669' }}>{toothCount >= 6 ? 'FREE Included' : 'Available'}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f8fafc', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>🏨 5-Star Hotel Stay:</span>
                  <strong style={{ color: '#059669' }}>{toothCount >= 10 ? 'FREE Included' : 'Partner Rates'}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>🛡️ Warranty:</span>
                  <strong style={{ color: 'var(--color-brand-gold)' }}>{data.warranty}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What is Treatment Overview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.2rem' }}>What is {data.name}?</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              {data.overview}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', background: 'rgba(2, 132, 199, 0.03)' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.2rem', color: 'var(--color-brand-deep)' }}>Key Procedure Highlights</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', fontSize: '0.98rem', color: 'var(--text-main)' }}>
                  <span style={{ color: 'var(--color-brand-primary)', fontSize: '1.2rem', fontWeight: 'bold' }}>✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dynamic Image & Content Feature Grid (Side-by-Side) */}
        {data.sections && data.sections.length > 0 && (
          <div style={{ marginBottom: '4rem' }}>
            <div className="section-header" style={{ marginBottom: '2.5rem' }}>
              <span className="section-badge">Comprehensive Clinical Insights</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Detailed Overview & Guides for {data.name}</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {data.sections.map((sec, idx) => (
                <div 
                  key={idx} 
                  className="glass-card treatment-feature-card" 
                  style={{ 
                    padding: '2.5rem', borderRadius: '28px', background: 'white',
                    display: 'grid', gridTemplateColumns: idx % 2 === 0 ? '1.2fr 0.8fr' : '0.8fr 1.2fr',
                    gap: '2.5rem', alignItems: 'center'
                  }}
                >
                  <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-brand-deep)', marginBottom: '1rem' }}>
                      {sec.title}
                    </h3>
                    <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                      {sec.desc}
                    </p>
                    <button onClick={() => onNavigate('consultation')} className="btn-secondary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}>
                      Consult Specialist About This →
                    </button>
                  </div>

                  {sec.image && (
                    <div className="treatment-img-wrap" style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                      <img src={sec.image} alt={sec.title} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interactive VIP Health Tourism Experience Carousel Tabs */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-badge">Dent Aktif VIP Experience</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Dent Aktif Clinic 3-Step Health Tourism Journey</h2>
            <p style={{ color: 'var(--text-muted)' }}>Explore our all-inclusive VIP patient experience in Istanbul.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {vipTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveVipTab(i)}
                className={`vip-experience-tab ${activeVipTab === i ? 'active' : ''}`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="glass-card dark-card" style={{ padding: '3rem', borderRadius: '28px', background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: 'white', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--color-brand-gold)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {vipTabs[activeVipTab].subtitle}
              </span>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1rem', color: '#ffffff' }}>
                {vipTabs[activeVipTab].title}
              </h3>
              <p style={{ color: '#e2e8f0', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                {vipTabs[activeVipTab].desc}
              </p>
              <button onClick={() => onNavigate('consultation')} className="btn-primary" style={{ padding: '0.9rem 1.8rem' }}>
                Book Your VIP Package →
              </button>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', height: '300px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <img src={vipTabs[activeVipTab].image} alt={vipTabs[activeVipTab].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Interactive Treatment Comparison Matrix */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-badge">Compare Procedures</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Dental Treatment Comparison Matrix</h2>
            <p style={{ color: 'var(--text-muted)' }}>Compare mechanical strength, stay duration, and translucency to choose your ideal restoration.</p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Procedure Name</th>
                  <th>Flexural Strength</th>
                  <th>Stay in Istanbul</th>
                  <th>Warranty</th>
                  <th>Translucency</th>
                  <th>Tooth Prep</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMatrix.map((item, idx) => (
                  <tr key={idx} style={{ background: item.name === data.name ? 'rgba(2, 132, 199, 0.06)' : 'transparent', fontWeight: item.name === data.name ? 700 : 400 }}>
                    <td>
                      <strong style={{ color: item.name === data.name ? 'var(--color-brand-primary)' : 'var(--text-main)' }}>
                        {item.name} {item.name === data.name && '👈'}
                      </strong>
                    </td>
                    <td>{item.strength}</td>
                    <td>{item.stay}</td>
                    <td><span style={{ color: 'var(--color-brand-gold)', fontWeight: 700 }}>{item.warranty}</span></td>
                    <td>{item.translucency}</td>
                    <td>{item.prep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customer Comments & Verified Patient Reviews */}
        {data.reviews && (
          <div style={{ marginBottom: '4rem' }}>
            <div className="section-header" style={{ marginBottom: '2.5rem' }}>
              <span className="section-badge">Verified Reviews</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Customer Comments & Real Patient Stories</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {data.reviews.map((rev, i) => (
                <div key={i} className="glass-card treatment-feature-card" style={{ padding: '2.2rem', borderRadius: '24px', background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'inline-block', background: 'rgba(217, 119, 6, 0.1)', color: 'var(--color-brand-gold)', padding: '0.3rem 0.8rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '1rem' }}>
                      {rev.badge}
                    </div>
                    <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      "{rev.comment}"
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                    <strong style={{ display: 'block', fontSize: '1.05rem' }}>{rev.name}</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>📍 {rev.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {data.faq && (
          <div style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data.faq.map((f, i) => (
                <div key={i} className="glass-card" style={{ borderRadius: '16px', padding: '1.25rem 1.5rem', cursor: 'pointer' }} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, fontSize: '1.05rem' }}>
                    <span>{f.q}</span>
                    <span style={{ fontSize: '1.4rem', color: 'var(--color-brand-primary)' }}>{activeFaq === i ? '−' : '+'}</span>
                  </div>
                  {activeFaq === i && (
                    <p style={{ marginTop: '0.8rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, borderTop: '1px solid var(--glass-border-subtle)', paddingTop: '0.8rem' }}>
                      {f.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="glass-card" style={{ textAlign: 'center', padding: '3.5rem 2rem', borderRadius: '28px', background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.08), rgba(217, 119, 6, 0.08))' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: '1rem' }}>Ready for Your {data.name} Transformation?</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Fill out our free appointment form or WhatsApp us to get your custom treatment plan within 24 hours.
          </p>
          <button onClick={() => onNavigate('consultation')} className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Start Free Consultation Now →
          </button>
        </div>
      </div>
    </div>
  );
}
