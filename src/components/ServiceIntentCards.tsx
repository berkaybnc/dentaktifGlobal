'use client';

import React from 'react';

export default function ServiceIntentCards() {
  return (
    <section className="w-full bg-white py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Transparent Treatment Pricing */}
          <a
            className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl border border-slate-200 bg-[#FAFBFC] hover:border-primary hover:shadow-premium-hover hover:bg-white transition-all group duration-300"
            href="#cost-calculator-section"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[24px]">payments</span>
            </div>
            <div>
              <h4 className="font-headline text-sm font-bold text-primary group-hover:text-primary-hover">
                Transparent Itemized Estimates
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                Clear hospital package breakdown with 5-star hotel, chauffeur, and laboratory inclusions. Zero hidden fees.
              </p>
            </div>
          </a>

          {/* Card 2: Before & After Archive */}
          <a
            className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl border border-slate-200 bg-[#FAFBFC] hover:border-primary hover:shadow-premium-hover hover:bg-white transition-all group duration-300"
            href="#clinical-cases"
          >
            <div className="w-11 h-11 rounded-xl bg-teal-500/10 text-teal-700 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[24px]">compare</span>
            </div>
            <div>
              <h4 className="font-headline text-sm font-bold text-primary group-hover:text-primary-hover">
                Verified Clinical Cases Archive
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                Unretouched 1:1 macro documentation, shade matching, and healthy biological gum margin adaptation.
              </p>
            </div>
          </a>

          {/* Card 3: 5-Day Journey & Hotel */}
          <a
            className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl border border-slate-200 bg-[#FAFBFC] hover:border-primary hover:shadow-premium-hover hover:bg-white transition-all group duration-300"
            href="#patient-journey"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[24px]">hotel</span>
            </div>
            <div>
              <h4 className="font-headline text-sm font-bold text-primary group-hover:text-primary-hover">
                5-Day All-Inclusive Travel Guide
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                Private Mercedes Vito airport transfers, 5-star Levent partner accommodation, and personal concierge.
              </p>
            </div>
          </a>

          {/* Card 4: Telemedicine Consultation */}
          <a
            className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl border border-slate-200 bg-[#FAFBFC] hover:border-primary hover:shadow-premium-hover hover:bg-white transition-all group duration-300"
            href="https://wa.me/902129008080?text=Hello,%20I%20would%20like%20to%20schedule%20a%20telemedicine%20video%20consultation%20with%20your%20Chief%20Dentist."
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-700 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[24px]">video_chat</span>
            </div>
            <div>
              <h4 className="font-headline text-sm font-bold text-primary group-hover:text-primary-hover">
                Live Video Doctor Teleconsultation
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-snug">
                Direct online video discussion with our Chief Prosthodontist to review your X-rays before traveling.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
