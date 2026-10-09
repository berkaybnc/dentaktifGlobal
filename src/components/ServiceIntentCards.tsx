'use client';

import React from 'react';
import { Link } from '@/navigation';

export default function ServiceIntentCards() {
  return (
    <section className="w-full bg-white py-10 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Transparent Treatment Pricing */}
          <a
            className="flex flex-col justify-between p-5 rounded-2xl border border-slate-200 bg-[#FAFBFC] hover:border-[#1b0d52]/40 hover:shadow-lg hover:bg-white transition-all group duration-300"
            href="#cost-calculator-section"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-black text-[#1b0d52] bg-slate-200/60 px-2 py-0.5 rounded">
                  01
                </span>
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">Pricing</span>
              </div>
              <h4 className="font-headline text-sm font-bold text-[#1b0d52] group-hover:text-primary leading-snug">
                Transparent Itemized Estimates
              </h4>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Clear hospital package breakdown with 5-star hotel, chauffeur, and laboratory inclusions. Zero hidden fees.
              </p>
            </div>
          </a>

          {/* Card 2: Before & After Archive */}
          <a
            className="flex flex-col justify-between p-5 rounded-2xl border border-slate-200 bg-[#FAFBFC] hover:border-[#1b0d52]/40 hover:shadow-lg hover:bg-white transition-all group duration-300"
            href="#clinical-cases"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-black text-[#1b0d52] bg-slate-200/60 px-2 py-0.5 rounded">
                  02
                </span>
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">Results</span>
              </div>
              <h4 className="font-headline text-sm font-bold text-[#1b0d52] group-hover:text-primary leading-snug">
                Verified Clinical Cases Archive
              </h4>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Unretouched 1:1 macro documentation, shade matching, and healthy biological gum margin adaptation.
              </p>
            </div>
          </a>

          {/* Card 3: 5-Day Journey & Hotel */}
          <a
            className="flex flex-col justify-between p-5 rounded-2xl border border-slate-200 bg-[#FAFBFC] hover:border-[#1b0d52]/40 hover:shadow-lg hover:bg-white transition-all group duration-300"
            href="#patient-journey"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-black text-[#1b0d52] bg-slate-200/60 px-2 py-0.5 rounded">
                  03
                </span>
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">Logistics</span>
              </div>
              <h4 className="font-headline text-sm font-bold text-[#1b0d52] group-hover:text-primary leading-snug">
                5-Day All-Inclusive Travel Guide
              </h4>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Private Mercedes Vito airport transfers, 5-star Levent partner accommodation, and personal concierge.
              </p>
            </div>
          </a>

          {/* Card 4: Telemedicine Consultation */}
          <Link
            className="flex flex-col justify-between p-5 rounded-2xl border border-slate-200 bg-[#FAFBFC] hover:border-[#1b0d52]/40 hover:shadow-lg hover:bg-white transition-all group duration-300"
            href="/contact"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-black text-[#1b0d52] bg-slate-200/60 px-2 py-0.5 rounded">
                  04
                </span>
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">Doctor Line</span>
              </div>
              <h4 className="font-headline text-sm font-bold text-[#1b0d52] group-hover:text-primary leading-snug">
                Live Video Doctor Consultation
              </h4>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Direct online discussion with our Chief Prosthodontist to review your dental X-rays before traveling.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
