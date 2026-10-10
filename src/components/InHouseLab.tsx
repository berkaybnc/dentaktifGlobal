'use client';

import React from 'react';

export default function InHouseLab() {
  return (
    <section className="w-full py-20 bg-[#FAFBFC] border-b border-slate-200" id="in-house-lab">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Ceramist Laboratory Visual */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xl bg-slate-900 group">
              <div className="aspect-4/3 w-full overflow-hidden">
                <img
                  alt="Dent Aktif In-House Master Ceramist Laboratory"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src="/images/in-house-lab.jpg"
                />
              </div>
              <div className="p-4 bg-slate-950 text-white flex flex-wrap items-center justify-between gap-2 text-xs border-t border-white/10">
                <span className="font-mono text-slate-300 font-medium">Ivoclar Vivadent® &amp; 5-Axis Robotic Milling Suite</span>
                <span className="font-bold text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Certified Master Ceramists On-Site
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Lab Quality Differentiators */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
                On-Site Surgical & Ceramic Facility
              </span>
              <h2 className="font-headline text-3xl font-extrabold text-primary tracking-tight">
                Zero Intermediaries. Direct In-House Digital Crafting.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unlike dental clinics that outsource prosthetic fabrication to commercial third parties, Dent Aktif
                fabricates all porcelain veneers, zirconia substructures, and surgical guides directly in our hospital
                building under surgeon supervision.
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-lg">
                <span className="material-symbols-outlined text-primary text-xl">palette</span>
                <div>
                  <h4 className="font-headline text-xs font-bold text-primary">Chairside Shade Characterization</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Our Master Ceramist works directly at your side under surgical operatory light to match natural enamel gradients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border border-slate-200 rounded-lg bg-white">
                <span className="material-symbols-outlined text-primary text-xl">precision_manufacturing</span>
                <div>
                  <h4 className="font-headline text-xs font-bold text-primary">5-Axis German Precision Milling</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    15-micron margin precision eliminating micro-leakage risks and ensuring healthy biological gum integration.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 border border-slate-200 rounded-lg bg-white">
                <span className="material-symbols-outlined text-primary text-xl">brush</span>
                <div>
                  <h4 className="font-headline text-xs font-bold text-primary">Handcrafted Artisanal Glazing</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Custom natural surface textures with depth of translucency, avoiding flat or artificial appearance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
