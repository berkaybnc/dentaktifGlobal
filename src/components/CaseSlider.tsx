'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';

interface CaseData {
  id: string;
  categoryTag: string;
  treatmentTitle: string;
  treatmentSubtitle: string;
  indication: string;
  highlights: string[];
  material: string;
  duration: string;
  precision: string;
  warranty: string;
  beforeImg: string;
  afterImg: string;
}

const CASE_DATABASE: Record<string, CaseData> = {
  hollywood: {
    id: '#CASE-8841',
    categoryTag: 'Smile Architecture',
    treatmentTitle: '20 Ivoclar Vivadent® E-Max® Veneers',
    treatmentSubtitle: 'BL1 Bleach White • Natural Enamel Translucency',
    indication: 'Severe staining, incisal wear and uneven tooth proportions.',
    highlights: [
      '3D Intraoral digital scanning & golden-ratio simulation',
      '0.3mm conservative micro-prep with painless anesthesia',
      'In-house master ceramist custom shade layering & glazing',
    ],
    material: 'IPS e.max® Press (Lithium Disilicate)',
    duration: '5 Days / 2 Visits',
    precision: 'Sub-15μm CAD/CAM Fit',
    warranty: 'Lifetime Certificate',
    beforeImg: '/images/cases/hollywood-before.jpg',
    afterImg: '/images/cases/hollywood-after.jpg',
  },
  allon4: {
    id: '#CASE-7920',
    categoryTag: 'Full-Arch Implantology',
    treatmentTitle: 'All-on-6 Swiss Straumann® Full Arch',
    treatmentSubtitle: 'Roxolid® SLA Hybrid Bridge • 3D Guided Navigation',
    indication: 'Missing dentition, bone volume loss, and collapsed vertical bite.',
    highlights: [
      '3D CBCT bone mapping & digital surgical stent guide',
      'Flapless computer-navigated 6x Straumann® placement',
      'Immediate fixed monolithic bridge delivery within 48h',
    ],
    material: 'Swiss Straumann® Roxolid® & Zirconia',
    duration: '5 Days (Immediate Load)',
    precision: '0.1mm 3D Stent Precision',
    warranty: 'Global Lifetime Straumann®',
    beforeImg: '/images/cases/allon6-before.jpg',
    afterImg: '/images/cases/allon6-after.jpg',
  },
  zirconia: {
    id: '#CASE-6514',
    categoryTag: 'Aesthetic Prosthodontics',
    treatmentTitle: '16 CAD/CAM Katana™ Zirconia Crowns',
    treatmentSubtitle: '1200+ MPa Diamond Strength Core • Multi-Layer Gradient',
    indication: 'Defective old metal fillings, chipped enamel and dark margins.',
    highlights: [
      'Digital shade spectrophotometry capturing root-to-tip tones',
      'Conservative preparation preserving dental pulp vitality',
      '5-Axis CNC milling & multi-tone oven glaze sintering',
    ],
    material: 'Katana™ Multi-Layered Zirconia',
    duration: '5 Days / 3 Visits',
    precision: '12-Micron CNC Precision',
    warranty: '15-Year Certificate',
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

  const currentCase = CASE_DATABASE[activeTab] || CASE_DATABASE.hollywood;

  return (
    <section className="w-full py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 border-b border-slate-200" id="clinical-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 1. Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#006972] text-xs font-bold shadow-xs">
            <span className="material-symbols-outlined text-[15px] text-teal-600">verified</span>
            <span>Clinical Portfolio • Authentic Patient Transformations</span>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-black text-[#1b0d52] tracking-tight">
            Before &amp; After Clinical Cases
          </h2>

          {/* Treatment Category Switcher */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
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
                    flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-left transition-all duration-200 border cursor-pointer
                    ${
                      isActive
                        ? 'bg-[#1b0d52] text-white border-[#1b0d52] shadow-md shadow-[#1b0d52]/20 scale-[1.02]'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                    }
                  `}
                >
                  <span className="text-lg shrink-0">{cat.icon}</span>
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

        {/* 2. Main Showcase Grid (Balanced Height) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT: Comparison Slider (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div
              className="relative w-full aspect-4/3 min-h-[320px] sm:min-h-[420px] rounded-3xl border-2 border-slate-300 overflow-hidden select-none bg-slate-950 shadow-xl group"
              id="case-slider-wrapper"
            >
              {/* AFTER IMAGE (Base Layer) */}
              <img
                key={`after-${activeTab}`}
                alt={`${currentCase.treatmentTitle} After`}
                className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
                src={currentCase.afterImg}
              />
              <span className="absolute top-3.5 right-3.5 z-20 px-3 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md border border-emerald-400/40 text-emerald-300 font-mono text-[11px] font-bold tracking-wider shadow-md pointer-events-none flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>AFTER</span>
              </span>

              {/* BEFORE IMAGE (Clipped Layer) */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderVal}% 0 0)` }}
              >
                <img
                  key={`before-${activeTab}`}
                  alt={`${currentCase.treatmentTitle} Before`}
                  className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
                  src={currentCase.beforeImg}
                />
                <span className="absolute top-3.5 left-3.5 z-20 px-3 py-1 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] font-bold tracking-wider shadow-md pointer-events-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>BEFORE</span>
                </span>
              </div>

              {/* Split Divider Line & Floating Handle */}
              <div
                className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center -translate-x-1/2"
                style={{ left: `${sliderVal}%` }}
              >
                <div className="w-[2.5px] h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.9)]" />
                <div className="absolute w-10 h-10 rounded-full bg-white text-[#1b0d52] border-2 border-teal-500 shadow-xl flex items-center justify-center transform transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-[20px] font-black">swap_horiz</span>
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

            {/* Micro Caption bar */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium px-1">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#006972]">drag_indicator</span>
                <span>Drag left or right to compare results</span>
              </span>
              <span className="font-mono text-slate-600 bg-slate-200/70 px-2 py-0.5 rounded text-[10px] font-bold">
                {currentCase.id} • Cross-Polarized Daylight Lighting
              </span>
            </div>
          </div>

          {/* RIGHT: Compact Clean Treatment Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
            
            {/* Header Badge & Title */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 text-[#006972] font-mono text-[10px] font-bold uppercase tracking-wider border border-teal-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  {currentCase.categoryTag}
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">task_alt</span>
                  Completed Case
                </span>
              </div>

              <h3 className="font-headline font-black text-lg sm:text-xl text-[#1b0d52] leading-snug">
                {currentCase.treatmentTitle}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {currentCase.treatmentSubtitle}
              </p>
            </div>

            {/* Baseline Diagnosis (Compact) */}
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-0.5">
                Pre-Op Diagnosis
              </span>
              <span className="text-slate-800 font-medium block leading-snug">
                {currentCase.indication}
              </span>
            </div>

            {/* Applied Treatment Protocol (3 Clean Bullets) */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#006972] font-bold block">
                Applied Clinical Protocol
              </span>
              <div className="space-y-1.5">
                {currentCase.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-4 h-4 rounded-full bg-teal-100 text-[#006972] text-[10px] font-bold flex items-center justify-center shrink-0">
                      ✓
                    </span>
                    <span className="font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compact Technical Specs (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">Material</span>
                <span className="text-xs font-bold text-[#1b0d52] block leading-tight mt-0.5">
                  {currentCase.material}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">Duration</span>
                <span className="text-xs font-bold text-[#1b0d52] block leading-tight mt-0.5">
                  {currentCase.duration}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">Precision</span>
                <span className="text-xs font-bold text-[#1b0d52] block leading-tight mt-0.5">
                  {currentCase.precision}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">Warranty</span>
                <span className="text-xs font-bold text-teal-700 block leading-tight mt-0.5">
                  {currentCase.warranty}
                </span>
              </div>
            </div>

            {/* Direct Consultation CTA */}
            <div className="pt-1">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#211164] to-[#006972] text-white shadow-md shadow-[#211164]/15 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>Get Case Evaluation &amp; 3D Smile Plan</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
