'use client';

import React from 'react';

export default function PriceTable() {
  const treatments = [
    {
      id: 'veneers',
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
      badge: 'POPULAR AESTHETIC CHOICE',
      ctaText: 'Request Custom Veneer Blueprint',
      chatMsg: 'Hello Dent Aktif! I would like to get a personalized treatment & technique evaluation for E-Max Veneers.',
    },
    {
      id: 'implants',
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
      badge: 'SURGICAL EXCELLENCE',
      ctaText: 'Consult With Chief Implantologist',
      chatMsg: 'Hello Dent Aktif! I would like to discuss All-on-4/6 implant options with your surgical team.',
    },
    {
      id: 'zirconia',
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
      badge: 'MAXIMUM DURABILITY',
      ctaText: 'Request Zirconia Specification Plan',
      chatMsg: 'Hello Dent Aktif! I would like a custom quote and technical review for Zirconia Crowns.',
    },
  ];

  return (
    <section className="w-full py-20 bg-slate-50 border-b border-slate-200" id="cost-calculator-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#006699] font-extrabold flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#006699] animate-pulse"></span>
            Personalized Clinical Architecture • Transparent European Standards
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-black text-[#211164] tracking-tight">
            Tailored Treatment Plans, Advanced Techniques & Transparent Value
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            No two smiles or bone densities are identical. Instead of misleading generic packages, our oral surgeons design a{' '}
            <strong className="text-slate-900 font-semibold">customized clinical protocol</strong> based on your 3D digital scans — delivering up to 70% savings compared to UK/EU private clinics with zero surprise fees.
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
                Why Medical Integrity Requires a Personalized Diagnostic Review
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                A fixed online number without seeing your X-ray or dental structure often leads to hidden costs upon arrival. At Dent Aktif, our senior surgeons review your photos or OPG/CBCT scans first, explain the exact surgical and aesthetic techniques needed, and issue an all-inclusive, binding treatment plan before you fly.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/905308693368?text=Hello%20Dent%20Aktif!%20I%20would%20like%20a%20free%20pre-diagnostic%20evaluation%20from%20your%20surgeons."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            Send Your Scan / Photo via WhatsApp
          </a>
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
                    Hospital Protocol
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
                    Key Surgical / Lab Technique:
                  </span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                    {item.techniqueHighlight}
                  </span>
                </div>
              </div>

              {/* Card Body / Technique Checklist */}
              <div className="p-6 sm:p-7 space-y-4 flex-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                  What Our Clinical Protocol Includes:
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
                <a
                  href={`https://wa.me/905308693368?text=${encodeURIComponent(item.chatMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#211164] text-white hover:bg-opacity-90 transition-all shadow-md group-hover:shadow-lg"
                >
                  <span className="material-symbols-outlined text-base">calendar_month</span>
                  {item.ctaText}
                </a>

                <a
                  href="#consultation-wizard"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-[11px] font-bold text-slate-600 hover:text-[#211164] transition-colors"
                >
                  <span>Or use our 3-Step Online Form</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Evidence of Full International Care Package Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 text-xs shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">hotel</span>
            </div>
            <div>
              <div className="font-bold text-slate-900 font-headline text-xs">5-Star Partner Hotel</div>
              <div className="text-[11px] text-slate-500">4-5 Nights luxury stay in Levent / Bosphorus</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">airport_shuttle</span>
            </div>
            <div>
              <div className="font-bold text-slate-900 font-headline text-xs">VIP Mercedes Vito Chauffeur</div>
              <div className="text-[11px] text-slate-500">Airport (IST/SAW) ↔ Hotel ↔ Hospital clinic</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">translate</span>
            </div>
            <div>
              <div className="font-bold text-slate-900 font-headline text-xs">Dedicated Medical Coordinator</div>
              <div className="text-[11px] text-slate-500">Native EN, DE, FR, RU, AR patient support</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl">verified_user</span>
            </div>
            <div>
              <div className="font-bold text-slate-900 font-headline text-xs">Comprehensive 3D Diagnostics</div>
              <div className="text-[11px] text-slate-500">CBCT scans, medication kit & warranty passport</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

