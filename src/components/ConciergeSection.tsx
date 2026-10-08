'use client';

import React from 'react';

export default function ConciergeSection() {
  return (
    <section className="w-full py-20 bg-[#F0F4F7]/40 border-b border-slate-200" id="concierge-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200/90 rounded-3xl shadow-md p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Department Description & Services */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">badge</span>
                <span>Official Statutory Unit • Decree No: 3359 / Ministry Health Tourism Directive</span>
              </div>

              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-black text-[#211164] tracking-tight">
                International Patient Relations & Multilingual Concierge Unit
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                From your initial radiographic inquiry to long-term post-treatment follow-up in your home country, our
                specialized International Patient Coordination Department manages every logistical, medical, and linguistic detail.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/70 space-y-1.5">
                  <div className="font-bold text-primary flex items-center gap-2 text-sm font-headline">
                    <span className="material-symbols-outlined text-emerald-600 text-[20px]">support_agent</span>
                    <span>Dedicated Native Interpreters</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Personal coordinators fluent in English, German, French, Russian, and Arabic assigned to each patient 24/7.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/70 space-y-1.5">
                  <div className="font-bold text-primary flex items-center gap-2 text-sm font-headline">
                    <span className="material-symbols-outlined text-emerald-600 text-[20px]">aeromedical</span>
                    <span>Cross-Border Follow-up Protocol</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Structured post-operative teledentistry check-ins at 1, 3, 6, and 12 months with your operating surgeon.
                  </p>
                </div>
              </div>

              {/* Chief Surgeon Info */}
              <div className="pt-2 flex items-center gap-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-base shrink-0">
                  <span className="material-symbols-outlined text-2xl">medical_information</span>
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-slate-900">
                    Dr. Mehmet Yılmaz & Surgical Faculty
                  </h4>
                  <p className="text-xs text-slate-500">
                    Chief Oral & Maxillofacial Surgeon • 18+ Years International Implantology Leadership
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Medical Coordinator Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#211164] via-[#2d1980] to-[#372b7a] text-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-[11px] text-teal-300 font-mono uppercase tracking-wider font-extrabold">
                    International Patient Desk
                  </div>
                  <div className="font-headline text-lg font-bold text-white mt-0.5">
                    Direct Medical Coordinator Line
                  </div>
                </div>
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-teal-300 text-xl shrink-0 mt-0.5">call</span>
                  <div>
                    <div className="text-slate-300 text-[11px]">Direct 24/7 Telephone (English/International):</div>
                    <a className="font-bold text-white hover:text-teal-200 text-sm font-mono" href="tel:+902129008080">
                      +90 (212) 900 8080
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-teal-300 text-xl shrink-0 mt-0.5">mail</span>
                  <div>
                    <div className="text-slate-300 text-[11px]">Medical Records & Diagnostic Submission:</div>
                    <a className="font-bold text-white hover:text-teal-200 text-xs font-mono" href="mailto:intl@dentaktifglobal.com">
                      intl@dentaktifglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-teal-300 text-xl shrink-0 mt-0.5">location_on</span>
                  <div>
                    <div className="text-slate-300 text-[11px]">Hospital Location:</div>
                    <span className="font-medium text-slate-100 text-xs">
                      Buyukdere Cad. No: 173, Levent, Besiktas / Istanbul, Turkey
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs">
                <span className="text-emerald-300 font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">verified_user</span>
                  Govt. Licensed Health Tourism Center
                </span>
                <span className="font-mono text-slate-200 font-extrabold bg-white/10 px-2 py-0.5 rounded">
                  #TR-34-DH-4892
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
