'use client';

import React from 'react';

export default function ServiceIntentCards() {
  return (
    <section className="w-full bg-white py-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Transparent Treatment Pricing */}
          <a
            className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-[#FAFBFC] hover:border-primary hover:shadow-md hover:bg-white transition-all group"
            href="#cost-calculator-section"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[22px]">payments</span>
            </div>
            <div>
              <h4 className="font-headline text-xs font-bold text-primary">Transparent Itemized Estimates</h4>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                Clear package breakdown with hotel, transfer, and laboratory inclusions.
              </p>
            </div>
          </a>

          {/* Card 2: Before & After Archive */}
          <a
            className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-[#FAFBFC] hover:border-primary hover:shadow-md hover:bg-white transition-all group"
            href="#clinical-cases"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-teal-700 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[22px]">compare</span>
            </div>
            <div>
              <h4 className="font-headline text-xs font-bold text-primary">Verified Clinical Cases Archive</h4>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                Unretouched 1:1 macro documentation, shade matching, and gingival health.
              </p>
            </div>
          </a>

          {/* Card 3: 5-Day Journey & Hotel */}
          <a
            className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-[#FAFBFC] hover:border-primary hover:shadow-md hover:bg-white transition-all group"
            href="#patient-journey"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[22px]">hotel</span>
            </div>
            <div>
              <h4 className="font-headline text-xs font-bold text-primary">5-Day All-Inclusive Travel Guide</h4>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                Chauffeured VIP transfers, 5-star Levent accommodation, and concierge.
              </p>
            </div>
          </a>

          {/* Card 4: Telemedicine Consultation */}
          <a
            className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-[#FAFBFC] hover:border-primary hover:shadow-md hover:bg-white transition-all group"
            href="https://wa.me/902129008080?text=Hello,%20I%20would%20like%20to%20schedule%20a%20telemedicine%20video%20consultation%20with%20your%20Chief%20Dentist."
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-700 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[22px]">video_chat</span>
            </div>
            <div>
              <h4 className="font-headline text-xs font-bold text-primary">Live Video Doctor Teleconsultation</h4>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                Consult with our Chief Dental Surgeon via video call before booking flights.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
