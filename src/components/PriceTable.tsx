'use client';

import React from 'react';

export default function PriceTable() {
  return (
    <section className="w-full py-20 bg-white border-b border-slate-200" id="cost-calculator-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-secondary font-extrabold">
            International Health Tourism Transparency Standard • Decree No. 5448
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-black text-[#211164] tracking-tight">
            International Treatment Cost & Inclusions Reference
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Transparent hospital-direct surgical packages. Luxury boutique hotel accommodation, private chauffeured VIP
            transfers, and official manufacturer warranty passports are bundled with zero hidden surcharges.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 text-left text-xs sm:text-sm bg-white rounded-2xl overflow-hidden shadow-md">
            <thead>
              <tr className="bg-[#0f0728] text-white font-headline">
                <th className="p-4 sm:p-5 font-bold border-r border-slate-800">Hospital Care Package</th>
                <th className="p-4 sm:p-5 font-bold border-r border-slate-800 text-center">UK Harley Street Benchmark</th>
                <th className="p-4 sm:p-5 font-bold border-r border-slate-800 text-center">Germany / Swiss Clinic Benchmark</th>
                <th className="p-4 sm:p-5 font-extrabold text-center bg-[#211164] text-emerald-300 border-l-2 border-emerald-400">
                  Dent Aktif Istanbul (All-Inclusive Care)
                </th>
                <th className="p-4 sm:p-5 font-bold text-center">Net Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {/* Row 1: E-Max Smile Makeover */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-slate-900 border-r border-slate-200">
                  <span className="block text-[#211164] text-sm font-extrabold font-headline">
                    Smile Makeover (20 E-Max® Veneers)
                  </span>
                  <span className="text-[11px] text-slate-500 font-normal leading-tight block mt-0.5">
                    Chairside Master Ceramist try-in + Live Aesthetic Mock-Up + 3D Tomography scan
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-center text-slate-500 border-r border-slate-200 font-medium">
                  £15,000 - £18,500
                </td>
                <td className="p-4 sm:p-5 text-center text-slate-500 border-r border-slate-200 font-medium">
                  €16,500 - €19,500
                </td>
                <td className="p-4 sm:p-5 text-center font-extrabold text-[#211164] bg-[#211164]/5 text-base border-r border-slate-200">
                  £4,250{' '}
                  <span className="block text-[10px] text-emerald-700 font-extrabold uppercase tracking-wide mt-0.5">
                    5-Star Hotel & Chauffeur Included
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-center font-black text-emerald-700 text-sm">
                  ~72% Direct Advantage
                </td>
              </tr>

              {/* Row 2: All-on-4 Straumann Implants */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-slate-900 border-r border-slate-200">
                  <span className="block text-[#211164] text-sm font-extrabold font-headline">
                    All-on-4 Implants (Full Arch - Swiss Straumann®)
                  </span>
                  <span className="text-[11px] text-slate-500 font-normal leading-tight block mt-0.5">
                    Original Straumann SLA implants + Computer-guided digital stent + Fixed temporary & permanent bridge
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-center text-slate-500 border-r border-slate-200 font-medium">
                  £13,500 - £16,800
                </td>
                <td className="p-4 sm:p-5 text-center text-slate-500 border-r border-slate-200 font-medium">
                  €14,000 - €18,000
                </td>
                <td className="p-4 sm:p-5 text-center font-extrabold text-[#211164] bg-[#211164]/5 text-base border-r border-slate-200">
                  £3,950{' '}
                  <span className="block text-[10px] text-emerald-700 font-extrabold uppercase tracking-wide mt-0.5">
                    Hotel + Chauffeur + Passport
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-center font-black text-emerald-700 text-sm">
                  ~70% Direct Advantage
                </td>
              </tr>

              {/* Row 3: Full Mouth Monolithic Zirconia */}
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4 sm:p-5 font-bold text-slate-900 border-r border-slate-200">
                  <span className="block text-[#211164] text-sm font-extrabold font-headline">
                    Monolithic Zirconia (24 Units Full Rehabilitation)
                  </span>
                  <span className="text-[11px] text-slate-500 font-normal leading-tight block mt-0.5">
                    German Katana™ multilayer blocks + CAD/CAM robotic milling + 15-micron precision
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-center text-slate-500 border-r border-slate-200 font-medium">
                  £14,500 - £18,000
                </td>
                <td className="p-4 sm:p-5 text-center text-slate-500 border-r border-slate-200 font-medium">
                  €15,500 - €18,500
                </td>
                <td className="p-4 sm:p-5 text-center font-extrabold text-[#211164] bg-[#211164]/5 text-base border-r border-slate-200">
                  £4,400{' '}
                  <span className="block text-[10px] text-emerald-700 font-extrabold uppercase tracking-wide mt-0.5">
                    Full VIP Hospital Package
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-center font-black text-emerald-700 text-sm">
                  ~74% Direct Advantage
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Evidence of Full International Care Package Amenities */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-600 text-2xl">hotel</span>
            <div>
              <div className="font-bold text-slate-900 font-headline text-xs">5-Star Partner Hotel</div>
              <div className="text-[11px] text-slate-500">4-5 Nights luxury stay in Levent / Bosphorus</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-600 text-2xl">airport_shuttle</span>
            <div>
              <div className="font-bold text-slate-900 font-headline text-xs">VIP Mercedes Vito Chauffeur</div>
              <div className="text-[11px] text-slate-500">Airport (IST/SAW) ↔ Hotel ↔ Hospital clinic</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-600 text-2xl">translate</span>
            <div>
              <div className="font-bold text-slate-900 font-headline text-xs">Dedicated Medical Coordinator</div>
              <div className="text-[11px] text-slate-500">Native EN, DE, FR, RU, AR patient support</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-600 text-2xl">medical_services</span>
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
