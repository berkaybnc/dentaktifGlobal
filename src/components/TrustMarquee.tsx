'use client';

import React from 'react';

const TRUST_BADGES = [
  {
    icon: 'verified_user',
    badge: 'Ministry & USHAŞ Licensed',
    title: 'Cert No: 2026034015610080000425805',
    desc: 'Official Republic of Turkey Ministry of Health Provider',
    color: 'emerald',
  },
  {
    icon: 'dentistry',
    badge: 'Swiss Straumann®',
    title: 'Platinum Center Partner',
    desc: 'Original Swiss Roxolid® & SLActive® Guided Implants',
    color: 'blue',
  },
  {
    icon: 'auto_awesome',
    badge: 'Ivoclar Vivadent®',
    title: 'Certified E-Max® Lab',
    desc: '100% Genuine Liechtenstein High-Translucency Ingots',
    color: 'amber',
  },
  {
    icon: 'precision_manufacturing',
    badge: 'German CAD/CAM',
    title: '5-Axis In-House Milling',
    desc: '15-Micron Precision & Chairside Ceramist Try-In',
    color: 'indigo',
  },
  {
    icon: 'verified',
    badge: 'International Warranty',
    title: 'Lifetime Guarantee Passport',
    desc: 'Official Manufacturer Authenticity Cards Provided',
    color: 'teal',
  },
  {
    icon: 'star',
    badge: 'Trustpilot ★ 4.9/5.0',
    title: '2,400+ International Reviews',
    desc: 'Patients from UK, Germany, USA, France & Netherlands',
    color: 'amber',
  },
];

export default function TrustMarquee() {
  return (
    <section className="w-full bg-[#150c3f] text-white py-5 border-y border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {TRUST_BADGES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-xl p-3 flex flex-col justify-between"
            >
              <div className="mb-1.5">
                <span className="text-[9px] font-mono uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded bg-white/10 text-teal-300">
                  {item.badge}
                </span>
              </div>
              <div>
                <h4 className="font-headline text-xs font-bold text-white leading-tight">
                  {item.title}
                </h4>
                <p className="text-[10px] text-slate-300 mt-1 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
