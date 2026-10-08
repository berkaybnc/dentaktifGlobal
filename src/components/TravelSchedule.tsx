'use client';

import React from 'react';

const DAYS = [
  {
    day: 'Day 01',
    phase: 'Arrival & Diagnostics',
    title: 'VIP Arrival & 3D CBCT Scanning',
    desc: 'Private Mercedes-Benz Vito transfer from Istanbul Airport (IST/SAW) to 5-star partner hotel in Levent. Clinical reception, comprehensive 3D CBCT tomography, digital optical intraoral scanning, and surgical review.',
    metric: '• 45-Min Comprehensive Triage',
    time: 'Morning / Afternoon',
  },
  {
    day: 'Day 02',
    phase: 'Digital Design & Prep',
    title: 'Live Mock-Up & Gentle Preparation',
    desc: 'Live intraoral aesthetic smile mock-up preview. Minimally invasive 0.3mm enamel conditioning or guided flapless implant placement. Immediate placement of aesthetic high-comfort temporary restorations.',
    metric: '• Intraoral Aesthetic Mock-Up',
    time: 'Clinical Appointment 1',
  },
  {
    day: 'Day 03',
    phase: 'Robotic Fabrication',
    title: 'In-House Milling & Leisure Rest',
    desc: 'Relax at your 5-star hotel or enjoy private Bosphorus sightseeing. Inside our hospital lab, German 5-axis milling units and Master Ceramists craft and bake your custom E-Max® or Katana™ restorations.',
    metric: '• In-House Lab Crafting',
    time: 'Lab Day / Free Leisure',
  },
  {
    day: 'Day 04',
    phase: 'Chairside Refinement',
    title: 'Clinical Try-in & Micro-Aesthetics',
    desc: 'Individual try-in session under natural daylight operatory lamps. Master Ceramist chairside shade gradient verification, dynamic bite registration, and personalized patient approval.',
    metric: '• Surgical Loupe Inspection',
    time: 'Clinical Appointment 2',
  },
  {
    day: 'Day 05',
    phase: 'Final Clearance',
    title: 'Permanent Bonding & VIP Farewell',
    desc: 'Permanent adhesive resin cementation under magnification. Issuance of the Official International Warranty Certificate & Straumann® Implant Passport. Chauffeured Mercedes transfer to Istanbul Airport.',
    metric: '• Official Guarantee Passport',
    time: 'Final Check & Departure',
  },
];

export default function TravelSchedule() {
  return (
    <section className="w-full py-20 bg-white border-b border-slate-200" id="patient-journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-secondary font-extrabold">
            Time-Optimized International Hospital Protocol
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-black text-[#211164] tracking-tight">
            Your 5-Day Istanbul Clinical Travel Schedule
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            A seamless, physician-monitored protocol designed to maximize comfort, precision, and efficiency from arrival through departure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {DAYS.map((d) => (
            <div
              key={d.day}
              className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-[#FAFBFC] flex flex-col justify-between hover:border-primary hover:shadow-premium-hover transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-3">
                  <span className="font-headline text-2xl font-black text-[#211164] group-hover:text-primary-hover">
                    {d.day}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-secondary uppercase bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {d.phase}
                  </span>
                </div>
                <h4 className="font-headline text-sm font-bold text-slate-900 mb-2 leading-snug">
                  {d.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {d.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-emerald-700 font-bold">{d.metric}</span>
                <span className="text-slate-400 font-medium">{d.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
