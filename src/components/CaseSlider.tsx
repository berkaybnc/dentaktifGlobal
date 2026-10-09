'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';

interface CaseData {
  id: string;
  name: string;
  country: string;
  flag: string;
  treatmentTitle: string;
  treatmentSubtitle: string;
  conditionBefore: string;
  conditionAfter: string;
  duration: string;
  warranty: string;
  hotel: string;
  quote: string;
  benchmarkPrice: string;
  dentAktifPrice: string;
  savings: string;
  beforeImg: string;
  afterImg: string;
}

const CASE_DATABASE: Record<string, CaseData> = {
  hollywood: {
    id: '#DA-8841',
    name: 'Sarah M.',
    country: 'London, United Kingdom',
    flag: '🇬🇧',
    treatmentTitle: '20 Handcrafted Ivoclar E-Max® Veneers',
    treatmentSubtitle: 'BL1 Bleach White • Natural Enamel Translucency',
    conditionBefore: 'Severe Staining & Edge Wear',
    conditionAfter: 'Flawless Hollywood Smile Architecture',
    duration: '5 Days / 2 Sessions',
    warranty: 'Lifetime Warranty',
    hotel: '5★ Levent Suite Included',
    quote: '“I hid my smile for over 10 years. In just 5 days in Istanbul, the dentists gave me my confidence back. It looks completely natural, not like fake chiclets!”',
    benchmarkPrice: '£16,800',
    dentAktifPrice: '£4,250',
    savings: 'Save 75% (£12,550)',
    beforeImg: '/images/cases/hollywood-before.jpg',
    afterImg: '/images/cases/hollywood-after.jpg',
  },
  allon4: {
    id: '#DA-7920',
    name: 'Marcus B.',
    country: 'Munich, Germany',
    flag: '🇩🇪',
    treatmentTitle: 'All-on-6 Swiss Straumann® Full Arch',
    treatmentSubtitle: 'Titanium-Zirconium Hybrid Bridge • Computer-Guided',
    conditionBefore: 'Missing Front Teeth & Bone Atrophy',
    conditionAfter: 'Full-Arch Fixed Functional Smile',
    duration: '5 Days (Phase 1 Fixed)',
    warranty: 'Lifetime Straumann®',
    hotel: 'VIP Hotel & Chauffeur',
    quote: '“Years of chewing pain disappeared in less than a week. The German-speaking coordinators and surgical precision at Dent Aktif were world class.”',
    benchmarkPrice: '€19,500',
    dentAktifPrice: '£4,800',
    savings: 'Save 72% (€14,100)',
    beforeImg: '/images/cases/allon6-before.jpg',
    afterImg: '/images/cases/allon6-after.jpg',
  },
  zirconia: {
    id: '#DA-6514',
    name: 'Chantal R.',
    country: 'Paris, France',
    flag: '🇫🇷',
    treatmentTitle: '16 CAD/CAM Katana™ Monolithic Zirconia',
    treatmentSubtitle: '1200+ MPa Diamond Strength • Multi-Layer Gradient',
    conditionBefore: 'Chipped Enamel & Discolored Fillings',
    conditionAfter: 'Ultra-Translucent Natural Aesthetic Smile',
    duration: '5 Days / 3 Sessions',
    warranty: '15-Year Certificate',
    hotel: '5★ Luxury Levent Hotel',
    quote: '“The in-house master ceramist crafted my teeth right at the clinic. The shade transition matches my skin tone seamlessly. Zero sensitivity!”',
    benchmarkPrice: '€14,800',
    dentAktifPrice: '£3,900',
    savings: 'Save 70% (€10,350)',
    beforeImg: '/images/cases/zirconia-before.jpg',
    afterImg: '/images/cases/zirconia-after.jpg',
  },
};

const CATEGORIES = [
  { key: 'hollywood', label: 'Hollywood Smile', subtitle: 'E-Max® Veneers', icon: '💎' },
  { key: 'allon4', label: 'All-on-6 Implants', subtitle: 'Full Arch Restoration', icon: '⚙️' },
  { key: 'zirconia', label: 'Zirconia Crowns', subtitle: 'Monolithic Katana™', icon: '👑' },
];

export default function CaseSlider() {
  const [activeTab, setActiveTab] = useState<string>('hollywood');
  const [sliderVal, setSliderVal] = useState<number>(50);
  const [viewMode, setViewMode] = useState<'side-by-side' | 'slider'>('side-by-side');

  const currentCase = CASE_DATABASE[activeTab] || CASE_DATABASE.hollywood;

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 border-b border-slate-200" id="clinical-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 1. Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#006972] text-xs font-bold shadow-xs">
            <span className="material-symbols-outlined text-[16px] text-teal-600">verified</span>
            <span>Real Patient Transformations • 100% Authentic Results</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b0d52] tracking-tight">
            Before &amp; After Smile Gallery
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Witness the life-changing results achieved at our Istanbul hospital in just 5 days. 
            All cases photographed under standardized clinical lighting with zero retouching.
          </p>

          {/* Treatment Category Switcher (Luxury Segmented Pills) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => {
                    setActiveTab(cat.key);
                    setSliderVal(50);
                  }}
                  className={`
                    relative group flex items-center gap-2.5 px-5 py-3 rounded-2xl text-left transition-all duration-200 border
                    ${
                      isActive
                        ? 'bg-[#1b0d52] text-white border-[#1b0d52] shadow-lg shadow-[#1b0d52]/25 scale-[1.02]'
                        : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                    }
                  `}
                >
                  <span className="text-xl shrink-0">{cat.icon}</span>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold leading-tight">
                      {cat.label}
                    </div>
                    <div
                      className={`text-[10px] font-medium leading-tight mt-0.5 ${
                        isActive ? 'text-teal-200 font-bold' : 'text-slate-500'
                      }`}
                    >
                      {cat.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Mode Selector Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">View Mode:</span>
            <div className="inline-flex p-1 rounded-xl bg-slate-200/70 border border-slate-300/80">
              <button
                type="button"
                onClick={() => setViewMode('side-by-side')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'side-by-side'
                    ? 'bg-white text-[#1b0d52] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>◫ Side-by-Side</span>
                <span className="text-[10px] bg-teal-50 text-teal-700 border border-teal-200 px-1.5 py-0.2 rounded font-mono">
                  Recommended
                </span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'slider'
                    ? 'bg-white text-[#1b0d52] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>↔ Interactive Slider</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span>Case File:</span>
            <span className="font-bold text-[#1b0d52] bg-slate-200/60 px-2 py-0.5 rounded border border-slate-300">
              {currentCase.id}
            </span>
          </div>
        </div>

        {/* 3. Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Image Comparison (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {viewMode === 'side-by-side' ? (
              /* SIDE-BY-SIDE MODE */
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* BEFORE CARD */}
                  <div className="group relative rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-950 shadow-md">
                    <div className="aspect-4/3 w-full overflow-hidden">
                      <img
                        key={`side-before-${activeTab}`}
                        src={currentCase.beforeImg}
                        alt={`${currentCase.name} before dental transformation`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>BEFORE</span>
                    </div>
                    {/* Caption Bar */}
                    <div className="p-3 bg-white border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Baseline Condition</span>
                      <span className="text-xs font-extrabold text-slate-800 line-clamp-1">{currentCase.conditionBefore}</span>
                    </div>
                  </div>

                  {/* AFTER CARD */}
                  <div className="group relative rounded-2xl overflow-hidden border-2 border-teal-500/60 bg-slate-950 shadow-lg shadow-teal-500/10">
                    <div className="aspect-4/3 w-full overflow-hidden">
                      <img
                        key={`side-after-${activeTab}`}
                        src={currentCase.afterImg}
                        alt={`${currentCase.name} after completed smile`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md border border-teal-400/40 text-teal-300 font-mono text-xs font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>AFTER</span>
                    </div>
                    {/* Caption Bar */}
                    <div className="p-3 bg-gradient-to-r from-teal-50/80 to-emerald-50/80 border-t border-teal-100">
                      <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Clinical Outcome</span>
                      <span className="text-xs font-extrabold text-[#1b0d52] line-clamp-1">{currentCase.conditionAfter}</span>
                    </div>
                  </div>
                </div>

                <div className="text-center text-xs text-slate-500 pt-1 flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-teal-600">verified</span>
                  <span>Standardized clinical photography with identical lighting and magnification.</span>
                </div>
              </div>
            ) : (
              /* INTERACTIVE SPLIT SLIDER MODE */
              <div className="space-y-3">
                <div
                  className="relative w-full aspect-16/10 min-h-[380px] sm:min-h-[440px] rounded-2xl border-2 border-slate-300 overflow-hidden select-none bg-slate-950 shadow-xl group"
                  id="case-slider-wrapper"
                >
                  {/* AFTER IMAGE (Base Layer) */}
                  <img
                    key={`after-${activeTab}`}
                    alt={`${currentCase.name} after`}
                    className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
                    src={currentCase.afterImg}
                  />
                  <span className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-emerald-400/30 text-emerald-300 font-mono text-xs font-bold tracking-wide shadow-md pointer-events-none flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>AFTER</span>
                  </span>

                  {/* BEFORE IMAGE (Clipped Layer) */}
                  <div
                    className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderVal}% 0 0)` }}
                  >
                    <img
                      key={`before-${activeTab}`}
                      alt={`${currentCase.name} before`}
                      className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
                      src={currentCase.beforeImg}
                    />
                    <span className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold tracking-wide shadow-md pointer-events-none flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>BEFORE</span>
                    </span>
                  </div>

                  {/* Split Divider Line & Floating Handle */}
                  <div
                    className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center -translate-x-1/2"
                    style={{ left: `${sliderVal}%` }}
                  >
                    <div className="w-[3px] h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.9)]" />
                    <div className="absolute w-11 h-11 rounded-full bg-white text-[#1b0d52] border-2 border-white shadow-2xl flex items-center justify-center transform transition-transform group-hover:scale-110">
                      <span className="material-symbols-outlined text-[22px] font-black">swap_horiz</span>
                    </div>
                  </div>

                  {/* Drag Range Input */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderVal}
                    onChange={(e) => setSliderVal(Number(e.target.value))}
                    aria-label="Before and After Split Slider"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40 m-0 p-0"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-[#006972]">drag_indicator</span>
                    <span>Drag slider left or right to inspect the seamless transformation</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-700 font-bold bg-slate-200/80 px-2 py-0.5 rounded border border-slate-300">
                    Reveal: {sliderVal}%
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Modern Patient Case Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xl space-y-6">
            
            {/* Patient Header Profile */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl shadow-xs">
                  {currentCase.flag}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-headline font-black text-lg sm:text-xl text-[#1b0d52]">
                      {currentCase.name}
                    </h3>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs">verified</span>
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">{currentCase.country}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="text-right">
                <div className="text-amber-400 text-sm tracking-tight">★★★★★</div>
                <span className="text-[10px] font-mono font-bold text-slate-400">5.0 / 5.0</span>
              </div>
            </div>

            {/* Treatment Performed Title */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#006972] font-bold block">
                Treatment Performed
              </span>
              <h4 className="font-headline text-base sm:text-lg font-black text-[#1b0d52] leading-snug">
                {currentCase.treatmentTitle}
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                {currentCase.treatmentSubtitle}
              </p>
            </div>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <span className="material-symbols-outlined text-teal-600 text-lg block mb-0.5">schedule</span>
                <span className="text-[10px] text-slate-500 block">Duration</span>
                <strong className="text-xs font-extrabold text-[#1b0d52] block leading-tight mt-0.5">
                  {currentCase.duration}
                </strong>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <span className="material-symbols-outlined text-teal-600 text-lg block mb-0.5">verified_user</span>
                <span className="text-[10px] text-slate-500 block">Warranty</span>
                <strong className="text-xs font-extrabold text-[#1b0d52] block leading-tight mt-0.5">
                  {currentCase.warranty}
                </strong>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <span className="material-symbols-outlined text-teal-600 text-lg block mb-0.5">hotel</span>
                <span className="text-[10px] text-slate-500 block">Hospitality</span>
                <strong className="text-xs font-extrabold text-[#1b0d52] block leading-tight mt-0.5">
                  {currentCase.hotel}
                </strong>
              </div>
            </div>

            {/* Patient Testimonial Quote */}
            <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 relative">
              <span className="text-3xl text-teal-300 font-serif absolute top-2 left-3 leading-none opacity-60">“</span>
              <p className="text-xs text-slate-700 italic pl-5 leading-relaxed font-normal">
                {currentCase.quote}
              </p>
            </div>

            {/* Savings & Pricing Comparison Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50/40 to-slate-50 border border-emerald-200/90 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-500 block font-medium">UK / EU Clinic Benchmark</span>
                <span className="line-through text-slate-400 font-bold text-sm block">{currentCase.benchmarkPrice}</span>
                <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider">
                  {currentCase.savings}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide block">
                  Dent Aktif All-Inclusive
                </span>
                <span className="font-headline text-2xl sm:text-3xl font-black text-[#1b0d52]">
                  {currentCase.dentAktifPrice}
                </span>
                <span className="text-[10px] text-slate-500 block">Hotel + VIP Transfers</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider bg-gradient-to-r from-[#211164] to-[#006972] text-white shadow-lg shadow-[#211164]/20 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <span>Get Your Free Smile Simulation</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
