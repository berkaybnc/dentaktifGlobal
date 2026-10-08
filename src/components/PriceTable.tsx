'use client';

import React from 'react';

export default function PriceTable() {
  return (
    <section className="w-full py-20 bg-white border-b border-slate-200" id="cost-calculator-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
            International Health Tourism Transparency Standard
          </span>
          <h2 className="font-headline text-3xl font-extrabold text-primary tracking-tight">
            International Treatment Cost & Inclusions Reference
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Transparent hospital-direct care packages. Hotel accommodation, VIP transfers, and official manufacturer
            warranties are fully bundled with zero hidden surcharges.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 text-left text-xs sm:text-sm bg-white rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-900 text-white font-headline">
                <th className="p-4 font-bold border-r border-slate-800">Clinical Package</th>
                <th className="p-4 font-bold border-r border-slate-800 text-center">UK Private Clinic Benchmark</th>
                <th className="p-4 font-bold border-r border-slate-800 text-center">Germany Private Clinic Benchmark</th>
                <th className="p-4 font-extrabold text-center bg-primary text-emerald-300 border-l-2 border-emerald-400">
                  Dent Aktif Istanbul (All-Inclusive Care)
                </th>
                <th className="p-4 font-bold text-center">Value Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {/* Row 1: E-Max Smile Makeover */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold text-slate-800 border-r border-slate-200">
                  <span className="block text-primary">Smile Makeover (20 E-Max Veneers)</span>
                  <span className="text-[11px] text-slate-500 font-normal">Chairside master ceramist try-in + Live Mock-Up included</span>
                </td>
                <td className="p-4 text-center text-slate-500 border-r border-slate-200">£15,000 - £18,000</td>
                <td className="p-4 text-center text-slate-500 border-r border-slate-200">€16,500 - €19,000</td>
                <td className="p-4 text-center font-extrabold text-primary bg-primary/5 text-base border-r border-slate-200">
                  £4,250 <span className="block text-[10px] text-emerald-700 font-bold uppercase">5-Star Hotel & Transfers Included</span>
                </td>
                <td className="p-4 text-center font-extrabold text-emerald-700 text-sm">
                  ~72% Direct Advantage
                </td>
              </tr>

              {/* Row 2: All-on-4 Straumann Implants */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold text-slate-800 border-r border-slate-200">
                  <span className="block text-primary">All-on-4 Implants (Full Arch - Straumann®)</span>
                  <span className="text-[11px] text-slate-500 font-normal">Swiss dental implants + Fixed hybrid prosthesis</span>
                </td>
                <td className="p-4 text-center text-slate-500 border-r border-slate-200">£13,500 - £16,000</td>
                <td className="p-4 text-center text-slate-500 border-r border-slate-200">€14,000 - €17,500</td>
                <td className="p-4 text-center font-extrabold text-primary bg-primary/5 text-base border-r border-slate-200">
                  £3,950 <span className="block text-[10px] text-emerald-700 font-bold uppercase">Hotel + Chauffeur Included</span>
                </td>
                <td className="p-4 text-center font-extrabold text-emerald-700 text-sm">
                  ~70% Direct Advantage
                </td>
              </tr>

              {/* Row 3: Full Mouth Monolithic Zirconia */}
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-bold text-slate-800 border-r border-slate-200">
                  <span className="block text-primary">Monolithic Zirconia (24 Units Full Mouth)</span>
                  <span className="text-[11px] text-slate-500 font-normal">German Katana™ / Ivoclar multilayer blocks</span>
                </td>
                <td className="p-4 text-center text-slate-500 border-r border-slate-200">£14,000 - £17,500</td>
                <td className="p-4 text-center text-slate-500 border-r border-slate-200">€15,000 - €18,000</td>
                <td className="p-4 text-center font-extrabold text-primary bg-primary/5 text-base border-r border-slate-200">
                  £4,400 <span className="block text-[10px] text-emerald-700 font-bold uppercase">Full VIP Package</span>
                </td>
                <td className="p-4 text-center font-extrabold text-emerald-700 text-sm">
                  ~74% Direct Advantage
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Evidence of Full International Care Package Amenities */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-xl">hotel</span>
            <div>
              <div className="font-bold text-slate-800">5-Star Partner Hotel</div>
              <div className="text-[11px] text-slate-500">4-5 Nights in Levent / Bosphorus</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-xl">airport_shuttle</span>
            <div>
              <div className="font-bold text-slate-800">VIP Mercedes Transfers</div>
              <div className="text-[11px] text-slate-500">Airport (IST/SAW) ↔ Hotel ↔ Clinic</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-xl">translate</span>
            <div>
              <div className="font-bold text-slate-800">Dedicated Medical Interpreter</div>
              <div className="text-[11px] text-slate-500">Native EN, DE, FR, RU, AR support</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-emerald-600 text-xl">medical_services</span>
            <div>
              <div className="font-bold text-slate-800">Complete 3D Diagnostics</div>
              <div className="text-[11px] text-slate-500">CBCT scans, medications & warranty passport</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
