'use client';

import React from 'react';
import { Link } from '@/navigation';

export default function AboutPage() {
  const accreditations = [
    {
      title: 'Republic of Turkey Ministry of Health',
      subtitle: 'International Health Tourism Authorized Provider',
      cert: 'Licence No: 2026034015610080000425805',
      logo: '/images/saglikBakanligi.png',
      alt: 'Ministry of Health Turkey Emblem',
    },
    {
      title: 'HealthTürkiye & USHAŞ',
      subtitle: 'State Agency for International Healthcare Services',
      cert: 'Accreditation Framework Decree #3359',
      logo: '/images/heart-of-health1-1logo.svg',
      alt: 'HealthTürkiye Official Logo',
    },
  ];

  const milestones = [
    {
      stat: '15,000+',
      label: 'Completed Smiles',
      desc: 'Treated patients from 48+ countries with zero compromise on clinical safety.',
    },
    {
      stat: '15-Micron',
      label: 'CAD/CAM Precision',
      desc: 'In-house robotic milling laboratory with German and Swiss sintering furnaces.',
    },
    {
      stat: '5 Days',
      label: 'Express Protocol',
      desc: 'From initial 3D optical scan to permanent cementation in just 5 calendar days.',
    },
    {
      stat: '100%',
      label: 'Original Materials',
      desc: 'Certified Swiss Straumann® implants and authentic Ivoclar Vivadent® porcelain.',
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#FAFBFC] text-slate-800 pt-28 pb-20">
      {/* 1. Header & Breadcrumb Hero (Kurumsal Mor Degrade Başlık) */}
      <section className="relative w-full bg-gradient-to-b from-[#1b0d52] via-[#211164] to-[#120733] text-white py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#2BA598_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#006972]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-teal-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">About Us &amp; Medical Faculty</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-teal-400/30 text-teal-200 text-xs font-bold font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Republic of Turkey Ministry of Health &amp; USHAŞ Authorized Center</span>
            <span className="text-white/40">•</span>
            <span>Cert No: 2026034015610080000425805</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl">
            Where World-Class Surgery Meets Master Ceramist Artistry
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed font-normal">
            Dent Aktif International Oral &amp; Dental Hospital is a state-authorized surgical centre in Istanbul, dedicated to international patients seeking life-changing aesthetic and restorative smile rehabilitation.
          </p>
        </div>
      </section>

      {/* 2. Official Ministry of Health & USHAŞ Licensing Showcase Banner (Açık Kurumsal Kart) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#006972] block">
                Official State Accreditations &amp; Licensing
              </span>
              <h2 className="font-headline text-xl sm:text-2xl font-black text-[#1b0d52]">
                Authorized by the Republic of Turkey
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 w-fit">
              Health Tourism Certificate No: 2026034015610080000425805
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accreditations.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-teal-400/50 transition-all flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm border border-slate-200 group-hover:scale-105 transition-transform">
                  <img
                    src={item.logo}
                    alt={item.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    Official Recognition
                  </span>
                  <h3 className="font-headline font-bold text-sm sm:text-base text-[#1b0d52]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-snug">
                    {item.subtitle}
                  </p>
                  <div className="text-[11px] font-mono text-emerald-700 font-bold pt-0.5">
                    {item.cert}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006972] text-sm">shield</span>
              <span>Statutory Medical Malpractice Insurance &amp; EU GDPR Protected</span>
            </div>
            <Link
              href="/contact"
              className="text-[#006972] hover:text-[#1b0d52] font-bold inline-flex items-center gap-1 transition-colors"
            >
              <span>Request Hospital Accreditation File</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Clinical Architecture & Key Numbers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="font-headline text-3xl sm:text-4xl font-black text-[#1b0d52]">
                {item.stat}
              </div>
              <div className="font-bold text-xs sm:text-sm text-[#006972]">
                {item.label}
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Campus & In-House Laboratory Advantage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#006972]">
              The Dental Campus Difference
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl font-black text-[#1b0d52] leading-tight">
              Eliminating Intermediaries With Our Own Master Ceramists
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Most dental clinics outsource prosthetic fabrication to commercial third parties, causing color discrepancies and week-long delays. At Dent Aktif, our master ceramicists sit right next to our surgical operatories.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every smile is crafted under digital microscopes with individual shade layering, customized translucency gradients, and micro-occlusal balancing.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200">
                ✦ 5-Axis CAD/CAM Milling
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200">
                ✦ 3D CBCT Volumetric Scanners
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200">
                ✦ German Sintering Furnaces
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-lg">
            <h3 className="font-headline font-black text-lg text-[#1b0d52]">
              Full Logistics &amp; Concierge Hospitality
            </h3>
            <div className="space-y-3.5 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006972] text-xl shrink-0 mt-0.5">airport_shuttle</span>
                <div>
                  <strong className="text-slate-800 block font-bold">Chauffeured Mercedes-Benz Transfers</strong>
                  <span>Private VIP transport between Istanbul Airport (IST/SAW), your 5-star hotel, and our surgical suites.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006972] text-xl shrink-0 mt-0.5">hotel</span>
                <div>
                  <strong className="text-slate-800 block font-bold">5-Star Partner Hotel Accommodation</strong>
                  <span>Luxury suite accommodation in Levent, Istanbul’s financial and diplomatic quarter.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006972] text-xl shrink-0 mt-0.5">translate</span>
                <div>
                  <strong className="text-slate-800 block font-bold">Multilingual Patient Coordinators</strong>
                  <span>Dedicated coordinators fluent in English, German, French, and Russian assisting every clinical visit.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider bg-gradient-to-r from-[#211164] to-[#006972] text-white shadow-lg shadow-[#211164]/20 hover:scale-[1.01] transition-all"
              >
                <span>Plan Your 5-Day Treatment in Istanbul</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
