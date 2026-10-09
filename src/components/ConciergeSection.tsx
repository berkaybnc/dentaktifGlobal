'use client';

import React from 'react';
import { Link } from '@/navigation';

interface ConciergeFeature {
  icon: string;
  title: string;
  desc: string;
  badge: string;
}

const CONCIERGE_FEATURES: ConciergeFeature[] = [
  {
    icon: 'support_agent',
    title: 'Dedicated Native Interpreters',
    badge: 'EN • DE • FR • RU • AR',
    desc: 'Bilingual patient coordinators assigned to you 24/7 to guide every clinical consultation, consent, and doctor dialogue.',
  },
  {
    icon: 'monitor_heart',
    title: 'Cross-Border Aftercare Protocol',
    badge: '1, 3, 6, 12 Months',
    desc: 'Structured teledentistry check-ins and direct video reviews with your operating surgeon once you return home.',
  },
  {
    icon: 'directions_car',
    title: 'Private Mercedes-Benz Vito Chauffeur',
    badge: 'Airport & Clinic VIP',
    desc: 'Complimentary chauffeured Mercedes Vito transfers seamlessly bridging your airport arrival, 5-star hotel, and clinic.',
  },
  {
    icon: 'hotel',
    title: '5-Star Luxury Hotel Partner Liaison',
    badge: 'Levent & Bosphorus',
    desc: 'Dedicated concierge desk arranging premium double-room accommodations for you and your companion with zero surcharge.',
  },
];

export default function ConciergeSection() {
  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-white via-[#F0F4F7]/50 to-white border-b border-slate-200 relative overflow-hidden" id="concierge-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200/90 rounded-3xl shadow-[0_20px_60px_-15px_rgba(27,13,82,0.08)] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Top Decorative Gradient Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#1b0d52] via-[#006972] to-emerald-400 absolute top-0 left-0 right-0" />

          {/* Section Header */}
          <div className="space-y-4 max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold shadow-xs">
              <span className="material-symbols-outlined text-[16px] text-teal-600">verified_user</span>
              <span>Official International Patient Department • Decree No: 3359</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-mono">Cert: 2026034015610080000425805</span>
            </div>

            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-black text-[#1b0d52] tracking-tight">
              International Patient Relations & Multilingual Concierge Unit
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              From your initial panoramic radiograph review to long-term post-treatment follow-up in your home country, our specialized International Patient Coordination Department manages every logistical, medical, and linguistic detail.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column (7 cols): 4 VIP Concierge Pillars Grid */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CONCIERGE_FEATURES.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 sm:p-6 rounded-2xl border border-slate-200/90 bg-white hover:border-[#1b0d52]/40 hover:shadow-lg transition-all duration-300 space-y-3 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-[#006972] group-hover:bg-[#1b0d52] group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-teal-800 bg-teal-50/80 px-2 py-0.5 rounded border border-teal-200/60">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="font-headline text-sm sm:text-base font-extrabold text-[#1b0d52] group-hover:text-[#006972] transition-colors leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Patient Reassurance Guarantee Strip */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3 text-xs text-slate-600">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-lg">flight_takeoff</span>
                  <span><strong>All-Inclusive Protocol:</strong> Hotel + Mercedes Chauffeur + All Meds Included.</span>
                </span>
                <span className="font-mono text-[11px] text-[#006972] font-bold hidden sm:inline">
                  Zero Hidden Fees
                </span>
              </div>
            </div>

            {/* Right Column (5 cols): Luxury 24/7 Coordinator Desk Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#1b0d52] via-[#24136e] to-[#006972] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              {/* Background ambient pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[11px] text-teal-300 font-mono uppercase tracking-wider font-extrabold block">
                      Direct International Desk
                    </span>
                    <h3 className="font-headline text-lg sm:text-xl font-bold text-white mt-0.5">
                      Personal Patient Coordinator
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[11px] font-bold text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Now</span>
                  </div>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed">
                  Connect directly with our Chief Medical Concierge for instant radiograph preliminary review, airport schedule coordination, and tailored quotes.
                </p>

                {/* Contact List */}
                <div className="space-y-3 pt-2 text-xs">
                  {/* Phone */}
                  <a
                    href="tel:+902129008080"
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors group"
                  >
                    <span className="material-symbols-outlined text-teal-300 text-xl shrink-0 mt-0.5">call</span>
                    <div>
                      <div className="text-slate-300 text-[11px]">Direct 24/7 Telephone (English & Multilingual):</div>
                      <div className="font-bold text-white group-hover:text-teal-200 text-sm font-mono mt-0.5">
                        +90 (212) 900 8080
                      </div>
                    </div>
                  </a>

                  {/* Contact Direct Action */}
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#1b0d52] font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Connect with Concierge Desk →</span>
                  </Link>

                  {/* Email */}
                  <a
                    href="mailto:intl@dentaktifglobal.com"
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors group"
                  >
                    <span className="material-symbols-outlined text-teal-300 text-xl shrink-0 mt-0.5">mail</span>
                    <div>
                      <div className="text-slate-300 text-[11px]">Diagnostic X-Ray Submission:</div>
                      <div className="font-bold text-white group-hover:text-teal-200 text-xs font-mono mt-0.5">
                        intl@dentaktifglobal.com
                      </div>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="material-symbols-outlined text-teal-300 text-xl shrink-0 mt-0.5">location_on</span>
                    <div>
                      <div className="text-slate-300 text-[11px]">Hospital Campus:</div>
                      <div className="font-medium text-slate-100 text-xs mt-0.5">
                        Buyukdere Ave. No: 173, Levent, Besiktas / Istanbul, Turkey
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Licensure Stamp */}
              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs relative z-10">
                <span className="text-emerald-300 font-bold flex items-center gap-1.5 text-[11px]">
                  <span className="material-symbols-outlined text-base">verified_user</span>
                  <span>Health Tourism Licensed</span>
                </span>
                <span className="font-mono text-slate-200 font-extrabold bg-white/15 px-2.5 py-0.5 rounded text-[11px]">
                  #2026034015610080000425805
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
