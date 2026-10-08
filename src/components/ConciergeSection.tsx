'use client';

import React from 'react';

export default function ConciergeSection() {
  return (
    <section className="w-full py-16 bg-[#F0F4F7]/40 border-b border-slate-200" id="concierge-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Department Description & Services */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-bold">
                <span className="material-symbols-outlined text-[15px]">badge</span>
                <span>Official Unit • Decree No: 3359 / Ministry Health Tourism Directive</span>
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                International Patient Relations & Multilingual Concierge Unit
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From your initial radiographic inquiry to post-treatment follow-up in your home country, our specialized
                International Patient Coordination Department manages every logistical and linguistic detail.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-lg border border-slate-100 bg-slate-50/70 space-y-1">
                  <div className="font-bold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">support_agent</span>
                    <span>Multilingual Patient Coordinators</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">
                    Dedicated native speakers in English, German, French, Russian, and Arabic assigned to each patient.
                  </p>
                </div>
                <div className="p-3 rounded-lg border border-slate-100 bg-slate-50/70 space-y-1">
                  <div className="font-bold text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">aeromedical</span>
                    <span>Cross-Border Follow-up Protocol</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">
                    Structured post-op telemedicine check-ins at 1, 3, 6, and 12 months once you return home.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Medical Coordinator Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#211164] to-[#372b7a] text-white rounded-xl p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <div className="text-[11px] text-teal-300 font-mono uppercase tracking-wider font-bold">
                    International Office Contact
                  </div>
                  <div className="font-headline text-base font-bold text-white">
                    Direct Medical Coordinator Line
                  </div>
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-teal-300 text-lg">call</span>
                  <div>
                    <div className="text-slate-300 text-[10px]">Direct 24/7 Phone (English/International):</div>
                    <a className="font-bold text-white hover:text-teal-200" href="tel:+902129008080">
                      +90 (212) 900 8080
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-teal-300 text-lg">mail</span>
                  <div>
                    <div className="text-slate-300 text-[10px]">Medical Records & Coordination Email:</div>
                    <a className="font-bold text-white hover:text-teal-200" href="mailto:intl@dentaktifglobal.com">
                      intl@dentaktifglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-teal-300 text-lg">location_on</span>
                  <div>
                    <div className="text-slate-300 text-[10px]">Hospital Location:</div>
                    <span className="font-medium text-slate-200">Buyukdere Cad. No: 173, Levent, Besiktas / Istanbul</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                <span className="text-emerald-300 font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  Govt. Licensed Health Tourism Center
                </span>
                <span className="font-mono text-slate-300">#TR-34-DH-4892</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
