'use client';

import React, { useState } from 'react';

interface CaseData {
  name: string;
  id: string;
  treatment: string;
  prep: string;
  shade: string;
  duration: string;
  badgeAfter: string;
  badgeBefore: string;
  quote: string;
  oldPrice: string;
  newPrice: string;
  afterImg: string;
  beforeImg: string;
}

const CASE_DATABASE: Record<string, CaseData> = {
  hollywood: {
    name: 'Sarah M. • London, United Kingdom',
    id: '#DA-8841',
    treatment: '20 Feldspathic E-Max® Veneers (Upper & Lower)',
    prep: '0.3mm Minimal-Invasive Enamel Conditioning',
    shade: 'A3 Vita Classical → BL1 Bleach Natural Gradient',
    duration: '5 Days / 3 Clinical Sessions',
    badgeBefore: 'BEFORE: DENTAL MISALIGNMENT & STAINING',
    badgeAfter: 'AFTER: 20 E-MAX® BL1 NATURAL FINISH',
    quote: '“The attention to detail in replicating my natural tooth anatomy was exceptional. It does not resemble artificial Chiclets; light passes through with lifelike translucency.”',
    oldPrice: '£16,800',
    newPrice: '£4,250',
    // High quality clinical before & aesthetic after smile
    beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
  },
  allon4: {
    name: 'Marcus B. • Munich, Germany',
    id: '#DA-7920',
    treatment: 'All-on-6 Full Arch Swiss Straumann® Implants',
    prep: 'Computer-Guided Flapless 3D Digital Surgery',
    shade: 'A2 Natural Tone Bone-Integrated Hybrid Bridge',
    duration: '6 Days / 4 Clinical Sessions',
    badgeBefore: 'BEFORE: SEVERE BONE LOSS & EDENTULISM',
    badgeAfter: 'AFTER: ALL-ON-6 STRAUMANN® BRIDGE',
    quote: '“The surgical team in Levent solved years of severe bone loss and chewing discomfort in under a week. True Swiss engineering combined with exceptional hospital hospitality.”',
    oldPrice: '€19,500',
    newPrice: '£4,800',
    beforeImg: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
  },
  zirconia: {
    name: 'Chantal R. • Paris, France',
    id: '#DA-6514',
    treatment: '16 Units Monolithic CAD/CAM Katana™ Zirconia',
    prep: '0.5mm Smooth Gingival Margin Laser Contour',
    shade: 'A2 Discolored → BL2 High-Translucency Gradient',
    duration: '5 Days / 3 Clinical Sessions',
    badgeBefore: 'BEFORE: DENTAL WEAR & GINGIVAL RECESSION',
    badgeAfter: 'AFTER: MONOLITHIC KATANA™ ZIRCONIA',
    quote: '“Having the master ceramist consult at my chair for shade grading made all the difference. Seamless margin transition with zero post-treatment sensitivity.”',
    oldPrice: '€14,800',
    newPrice: '£3,900',
    beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80',
  },
};

export default function CaseSlider() {
  const [activeTab, setActiveTab] = useState<string>('hollywood');
  const [sliderVal, setSliderVal] = useState<number>(50);

  const currentCase = CASE_DATABASE[activeTab] || CASE_DATABASE.hollywood;

  return (
    <section className="w-full py-20 bg-[#F0F4F7]/60 border-b border-slate-200" id="clinical-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header & Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-300">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#006699] font-extrabold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#006699] animate-pulse"></span>
              1:1 Clinical Macro Archive • Unfiltered Medical Photography
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-black text-[#211164] tracking-tight">
              Verified Clinical Outcomes & Biological Integration
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Evaluated under cross-polarized studio lighting for natural light translucency, optimal periodontal margin
              adaptation, and permanent biocompatibility.
            </p>
            <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
              <span className="material-symbols-outlined text-sm text-emerald-600">policy</span>
              <span>
                Informed patient consent recorded under EU GDPR & Health Tourism Ethics. Case File verified by Chief Surgeon.
              </span>
            </div>
          </div>

          {/* Treatment Filter Tabs */}
          <div className="inline-flex rounded-xl border border-slate-300 bg-white p-1.5 shadow-sm">
            {[
              { key: 'hollywood', label: 'Hollywood Smile (E-Max®)' },
              { key: 'allon4', label: 'All-on-4 / All-on-6' },
              { key: 'zirconia', label: 'Monolithic Zirconia' },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => {
                  setActiveTab(tab.key);
                  setSliderVal(50);
                }}
                className={`px-4 py-2.5 text-xs uppercase font-extrabold rounded-lg transition-all ${
                  activeTab === tab.key
                    ? 'bg-[#211164] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#211164] hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-8">
          {/* Left: Split Slider Area */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div
              className="relative w-full aspect-[16/10] min-h-[380px] sm:min-h-[440px] rounded-2xl border border-slate-300 overflow-hidden select-none bg-slate-900 shadow-xl group"
              id="case-slider-wrapper"
            >
              {/* AFTER IMAGE (Background / Full Width) */}
              <img
                key={`after-${activeTab}`}
                alt="Post-treatment natural smile outcome"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                src={currentCase.afterImg}
                onError={(e) => {
                  // Fallback to stable smile photo if network issue occurs
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <span className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] sm:text-xs font-bold tracking-wide shadow-md pointer-events-none flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                {currentCase.badgeAfter}
              </span>

              {/* BEFORE IMAGE (Clipped Layer via inset) */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderVal}% 0 0)` }}
              >
                <img
                  key={`before-${activeTab}`}
                  alt="Pre-treatment clinical baseline"
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                  src={currentCase.beforeImg}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <span className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] sm:text-xs font-bold tracking-wide shadow-md pointer-events-none flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  {currentCase.badgeBefore}
                </span>
              </div>

              {/* Split Divider Line & Floating Handle */}
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center -translate-x-1/2"
                style={{ left: `${sliderVal}%` }}
              >
                <div className="w-[3px] h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.9)]" />
                <div className="absolute w-11 h-11 rounded-full bg-white text-[#211164] border-2 border-white shadow-2xl flex items-center justify-center transform transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-[22px] font-bold">swap_horiz</span>
                </div>
              </div>

              {/* Native Range Input for seamless dragging across all browsers & touch devices */}
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

            <div className="flex items-center justify-between pt-3 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#006699]">touch_app</span>
                Drag slider horizontally to review gingival margin finish & natural light reflections
              </span>
              <span className="font-mono text-[11px] text-slate-500 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                Position: {sliderVal}%
              </span>
            </div>
          </div>

          {/* Right: Documented Clinical Case File */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-md">
            <div className="space-y-4">
              <div className="flex items-start justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="font-mono text-[11px] text-[#006699] font-bold tracking-wider uppercase flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-[#006699]">verified_user</span>
                    Official Hospital Case Record
                  </span>
                  <h3 className="font-headline text-lg sm:text-xl font-extrabold text-[#211164] mt-0.5">
                    {currentCase.name}
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">
                  {currentCase.id}
                </span>
              </div>

              {/* Parameters Table */}
              <dl className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <dt className="text-slate-500">Clinical Protocol</dt>
                  <dd className="font-bold text-slate-900 text-right">{currentCase.treatment}</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <dt className="text-slate-500">Preparation Depth</dt>
                  <dd className="font-semibold text-slate-900">{currentCase.prep}</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <dt className="text-slate-500">Shade Transformation</dt>
                  <dd className="font-mono font-bold text-slate-900">{currentCase.shade}</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <dt className="text-slate-500">Hospital Protocol</dt>
                  <dd className="font-bold text-emerald-700">{currentCase.duration}</dd>
                </div>
              </dl>

              {/* Verified Patient Statement */}
              <div className="bg-slate-50 border border-slate-200/90 p-4 rounded-xl text-xs leading-relaxed text-slate-700 space-y-2">
                <p className="italic font-normal">{currentCase.quote}</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    — Verified 12-Month Post-Op Checkup
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    Confirmed Integration
                  </span>
                </div>
              </div>

              {/* Package Reference Snapshot */}
              <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 block text-[11px] font-medium">UK Private Clinic Benchmark</span>
                  <span className="line-through text-slate-400 font-bold">{currentCase.oldPrice}</span>
                </div>
                <div className="text-right">
                  <span className="text-emerald-800 block text-[11px] font-extrabold uppercase tracking-wide">
                    Dent Aktif All-Inclusive Care
                  </span>
                  <span className="text-lg font-black text-[#211164] font-headline">
                    {currentCase.newPrice}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                className="w-full inline-flex items-center justify-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#211164] text-white hover:bg-opacity-95 transition-all shadow-md hover:-translate-y-0.5"
                href="#consultation-wizard"
              >
                Request Similar Diagnostic Evaluation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
