'use client';

import React from 'react';

interface Partner {
  id: string;
  name: string;
  category: string;
  origin: string;
  badge: string;
  icon: string;
}

// Row 1: Global Implant & Aesthetic Technology Brands
const PARTNERS_ROW_1: Partner[] = [
  {
    id: 'straumann',
    name: 'Straumann®',
    category: 'Swiss Dental Implants',
    origin: 'Basel, Switzerland',
    badge: 'PLATINUM PARTNER',
    icon: 'verified',
  },
  {
    id: 'ivoclar',
    name: 'Ivoclar Vivadent®',
    category: 'IPS e.max® Porcelain',
    origin: 'Schaan, Liechtenstein',
    badge: 'CERTIFIED LAB',
    icon: 'auto_awesome',
  },
  {
    id: 'katana',
    name: 'Katana™ Zirconia',
    category: 'Noritake Multi-Layered',
    origin: 'Tokyo, Japan',
    badge: '15-MICRON PRECISION',
    icon: 'layers',
  },
  {
    id: 'sirona',
    name: 'Dentsply Sirona',
    category: 'CAD/CAM Milling Units',
    origin: 'Bensheim, Germany',
    badge: 'DIGITAL SURGERY',
    icon: 'precision_manufacturing',
  },
  {
    id: 'morita',
    name: 'J. Morita 3D CBCT',
    category: 'Volumetric Tomography',
    origin: 'Kyoto, Japan',
    badge: 'ULTRA LOW DOSE',
    icon: 'perm_media',
  },
  {
    id: '3m',
    name: '3M™ ESPE',
    category: 'Bio-Adhesive Restorations',
    origin: 'St. Paul, USA',
    badge: 'BIO-COMPATIBLE',
    icon: 'shield',
  },
  {
    id: 'philips',
    name: 'Philips Zoom!®',
    category: 'Cold-Light Laser Teeth Whitening',
    origin: 'Eindhoven, Netherlands',
    badge: 'CLINICAL GRADE',
    icon: 'flare',
  },
  {
    id: 'nobel',
    name: 'Nobel Biocare™',
    category: 'All-on-4® Pioneer Systems',
    origin: 'Zurich, Switzerland',
    badge: 'GLOBAL LEADER',
    icon: 'workspace_premium',
  },
];

// Row 2: Accreditations, Hospital Licensure & VIP Hospitality
const PARTNERS_ROW_2: Partner[] = [
  {
    id: 'ministry',
    name: 'Ministry of Health & USHAŞ',
    category: 'HealthTürkiye Authorized Center',
    origin: 'Republic of Turkey',
    badge: 'CERT: 2026034015610080000425805',
    icon: 'local_hospital',
  },
  {
    id: 'iti',
    name: 'ITI Foundation',
    category: 'Int. Team for Implantology',
    origin: 'Basel, Switzerland',
    badge: 'FELLOW NETWORK',
    icon: 'school',
  },
  {
    id: 'iso',
    name: 'ISO 9001:2015',
    category: 'Surgical Operatory Quality',
    origin: 'Global Standard',
    badge: 'AUDITED SYSTEM',
    icon: 'fact_check',
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz VIP',
    category: 'Chauffeured Vito Transfer',
    origin: 'Stuttgart, Germany',
    badge: 'AIRPORT & HOTEL',
    icon: 'airport_shuttle',
  },
  {
    id: 'hotel',
    name: '5-Star Partner Hotels',
    category: 'Levent & Bosphorus Suites',
    origin: 'Istanbul, Turkey',
    badge: 'ALL-INCLUSIVE CARE',
    icon: 'hotel',
  },
  {
    id: 'gdpr',
    name: 'EU GDPR Protected',
    category: 'Regulation 2016/679',
    origin: 'European Union',
    badge: 'DATA INTEGRITY',
    icon: 'policy',
  },
  {
    id: 'osstem',
    name: 'Osstem Dental',
    category: 'Guided Flapless Stents',
    origin: 'Seoul, South Korea',
    badge: 'PROVEN OSSEO',
    icon: 'medication',
  },
  {
    id: 'bredent',
    name: 'Bredent Medical',
    category: 'Immediate Fast & Fixed',
    origin: 'Senden, Germany',
    badge: 'SAME-DAY TEETH',
    icon: 'dentistry',
  },
];

export default function PartnerMarquee() {
  const MarqueeRow = ({
    items,
    direction = 'normal',
    speedSeconds = 35,
  }: {
    items: Partner[];
    direction?: 'normal' | 'reverse';
    speedSeconds?: number;
  }) => {
    // Duplicate array to ensure smooth continuous loop
    const displayList = [...items, ...items];

    return (
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_2.5rem,black_calc(100%-2.5rem),transparent)]">
        <div
          className="flex gap-4 w-max hover:[animation-play-state:paused]"
          style={{
            animation: `marquee-smooth ${speedSeconds}s linear infinite ${direction}`,
          }}
        >
          {displayList.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="shrink-0 w-[240px] sm:w-[260px] p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-teal-400/30 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group cursor-default shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-xl bg-teal-500/15 border border-teal-400/30 text-teal-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[19px]">
                    {item.icon}
                  </span>
                </div>
                <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/10 text-emerald-300 border border-emerald-400/20">
                  {item.badge}
                </span>
              </div>

              <div>
                <h4 className="font-headline text-sm font-extrabold text-white group-hover:text-teal-200 transition-colors">
                  {item.name}
                </h4>
                <p className="text-[11px] text-slate-300 font-medium leading-tight mt-0.5">
                  {item.category}
                </p>
                <span className="text-[10px] font-mono text-slate-400 block mt-1.5 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-teal-400" />
                  {item.origin}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-[#120733] border-y border-white/10 py-10 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#2BA598_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-[#006972]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-[#211164]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-4 mb-6 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-teal-300 font-extrabold flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Certified Global Medical Partners & Official Hospital Licensures
        </span>
      </div>

      {/* Two-Row Infinity Loop */}
      <div className="space-y-4">
        {/* Row 1: Forward Direction */}
        <MarqueeRow items={PARTNERS_ROW_1} direction="normal" speedSeconds={40} />
        {/* Row 2: Reverse Direction */}
        <MarqueeRow items={PARTNERS_ROW_2} direction="reverse" speedSeconds={45} />
      </div>
    </section>
  );
}
