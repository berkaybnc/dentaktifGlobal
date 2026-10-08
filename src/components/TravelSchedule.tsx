'use client';

import React from 'react';

const DAYS = [
  {
    day: 'Day 01',
    phase: 'Arrival',
    title: 'VIP Reception & 3D Diagnostics',
    desc: 'Mercedes-Benz airport transfer to hotel and hospital. Panoramic 3D CBCT tomogram and digital intraoral optical scans.',
    metric: '• 45-Min Comprehensive Triage',
  },
  {
    day: 'Day 02',
    phase: 'Design',
    title: 'Live Mock-Up & Preparation',
    desc: 'Preview your future smile intraorally. Minimal-invasive enamel conditioning and placement of customized temporaries.',
    metric: '• Intraoral Aesthetic Mock-Up',
  },
  {
    day: 'Day 03',
    phase: 'Rest',
    title: 'Istanbul Leisure / Rest Day',
    desc: 'Relax at your 5-star hotel or explore historic Istanbul while our ceramists craft and bake your individual veneers.',
    metric: '• In-House Lab Crafting',
  },
  {
    day: 'Day 04',
    phase: 'Bonding',
    title: 'Permanent Adhesive Bonding',
    desc: 'Precision resin cementation under surgical magnification. Occlusal mastication balance verification and micro-polishing.',
    metric: '• Surgical Loupe Inspection',
  },
  {
    day: 'Day 05',
    phase: 'Departure',
    title: 'Final Clearance & Departure',
    desc: 'Chief Surgeon final review, issuance of the Official Medical Guarantee Passport, and VIP transfer to Istanbul Airport.',
    metric: '• Official Guarantee Passport',
  },
];

export default function TravelSchedule() {
  return (
    <section className="w-full py-20 bg-white border-b border-slate-200" id="patient-journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
            Time-Optimized International Protocol
          </span>
          <h2 className="font-headline text-3xl font-extrabold text-primary tracking-tight">
            Your 5-Day Istanbul Clinical Travel Schedule
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A seamless, physician-monitored protocol designed to maximize comfort from arrival through departure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {DAYS.map((d) => (
            <div
              key={d.day}
              className="p-5 rounded-lg border border-slate-200 bg-[#FAFBFC] flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                  <span className="font-headline text-xl font-extrabold text-primary">{d.day}</span>
                  <span className="text-[10px] font-mono font-bold text-secondary uppercase">{d.phase}</span>
                </div>
                <h4 className="font-headline text-xs font-bold text-primary mb-1">{d.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{d.desc}</p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-200 text-[10px] font-mono text-emerald-700 font-bold">
                {d.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
