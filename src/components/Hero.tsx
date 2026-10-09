'use client';

import React from 'react';
import { Link } from '@/navigation';
import { FlipWords } from './FlipWords';

// Marquee Partner Brands & Institutional Accreditations (White/Silver Monochrome Luxury Style)
const MARQUEE_PARTNERS = [
  { name: 'Straumann®', label: 'Swiss Dental Implants', badge: 'PLATINUM PARTNER', icon: 'verified' },
  { name: 'Ivoclar Vivadent®', label: 'IPS e.max® Porcelain', badge: 'CERTIFIED LAB', icon: 'auto_awesome' },
  { name: 'Katana™ Zirconia', label: '15-Micron Precision', badge: 'MONOLITHIC CAD/CAM', icon: 'layers' },
  { name: 'Ministry of Health & USHAŞ', label: 'HealthTürkiye Licensed', badge: 'CERT #2026034015610080000425805', icon: 'local_hospital' },
  { name: 'Dentsply Sirona', label: 'Digital Guided Surgery', badge: '3D NAVIGATION', icon: 'precision_manufacturing' },
  { name: 'J. Morita 3D CBCT', label: 'Volumetric Tomography', badge: 'ON-SITE SCANNING', icon: 'perm_media' },
  { name: 'ISO 9001:2015', label: 'Hospital Quality Standard', badge: 'INTERNATIONAL AUDIT', icon: 'fact_check' },
  { name: 'Mercedes-Benz VIP', label: 'Chauffeured Transfers', badge: 'AIRPORT & HOTEL', icon: 'airport_shuttle' },
  { name: '5-Star Partner Hotels', label: 'Levent & Bosphorus Suites', badge: 'ALL-INCLUSIVE STAY', icon: 'hotel' },
  { name: 'Trustpilot ★ 4.9/5.0', label: '2,400+ Verified Reviews', badge: 'EXCELLENT SCORE', icon: 'star' },
  { name: '3M™ ESPE', label: 'Bio-Adhesive Restorations', badge: 'BIO-COMPATIBLE', icon: 'shield' },
  { name: 'EU GDPR Protected', label: 'Patient Data Privacy', badge: 'REGULATION 2016/679', icon: 'policy' },
];

export default function Hero() {
  return (
    <section className="relative w-full -mt-[116px] h-screen min-h-[660px] flex flex-col justify-between overflow-hidden bg-slate-950 border-b border-white/10">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC VIDEO BACKGROUND LAYER (Exact Bluesense Atmosphere)          */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-patient.jpg"
          className="w-full h-full object-cover object-center scale-105"
        >
          <source src="/agiz-dis.mov" type="video/quicktime" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-dentist-examining-a-patients-teeth-42686-large.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Dark Gradient Layers for Crisp Text Readability */}
        {/* Lateral gradient: heavy on left, reveals video in center & right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/45" />
        {/* Top-down gradient: blends smoothly with navbar and bottom edge */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/95" />
      </div>

      {/* ========================================================================= */}
      {/* 2. FOREGROUND CONTENT: Prestige Identity, Value Proposition & Dual CTAs   */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-[124px] sm:pt-[132px] lg:pt-[136px] pb-3 sm:pb-4 flex-1 flex flex-col justify-center w-full">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          
          {/* Top Accreditation Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>Ministry of Health &amp; USHAŞ Licensed Hospital</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-teal-300 font-mono text-[11px] hidden sm:inline">Cert #2026034015610080000425805</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1.5">
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-black tracking-tight text-white leading-[1.14]">
              World-Class Dental Surgery &amp;{' '}
              <FlipWords
                words={[
                  'Hollywood Smile Design',
                  'Swiss Straumann® Implants',
                  'Ivoclar E-Max® Veneers',
                  'Monolithic Zirconia Crowns',
                  'Full-Mouth Rehabilitation',
                ]}
                duration={2800}
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-200 font-black px-1"
              />
            </h1>
            <div className="text-xs sm:text-base font-extrabold text-teal-300 tracking-wide flex items-center gap-2 pt-0.5">
              <span>✦ Handcrafted Smiles in Just 5 Days</span>
              <span className="text-white/40">•</span>
              <span className="text-slate-300 font-medium">Levent Surgical Hospital, Istanbul</span>
            </div>
          </div>

          {/* Editorial Description */}
          <p className="font-sans text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed font-normal max-w-2xl text-shadow-sm">
            Dent Aktif International Oral &amp; Dental Hospital delivers full-arch Swiss Straumann® implant surgeries 
            and handcrafted Ivoclar E-Max® veneers directly through our in-house master ceramist laboratory. 
            All-inclusive hospital packages with 5-star hotel accommodation and chauffeured Mercedes-Benz VIP transfers.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            {/* Primary Action */}
            <Link
              href="/contact"
              className="py-3.5 px-6 sm:px-7 rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 text-[#0d072b] font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-teal-500/25 hover:shadow-teal-400/40 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-center group"
            >
              <span>Get Free Quote &amp; 3D Smile Simulation</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>

            {/* Secondary WhatsApp Line */}
            <a
              href="https://wa.me/905521617377"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-center shrink-0"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp Doctor Line</span>
            </a>
          </div>

          {/* Social Proof & Trust Badges */}
          <div className="pt-2.5 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-white/15">
            {/* Trustpilot Score */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-emerald-400 text-xs sm:text-sm">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <div>
                <div className="text-[11px] sm:text-xs font-black text-white leading-none">
                  Trustpilot <strong className="text-emerald-400">4.9 / 5.0</strong>
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-300 font-medium mt-0.5">
                  2,400+ Verified Patient Reviews
                </div>
              </div>
            </div>

            {/* International Completed Smiles Counter */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5 overflow-hidden">
                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 border border-white text-[10px] sm:text-xs">🇬🇧</span>
                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 border border-white text-[10px] sm:text-xs">🇩🇪</span>
                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 border border-white text-[10px] sm:text-xs">🇫🇷</span>
                <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 border border-white text-[10px] sm:text-xs">🇺🇸</span>
              </div>
              <div>
                <div className="text-[11px] sm:text-xs font-extrabold text-white leading-none">
                  15,000+ Completed Smiles
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-300 font-medium mt-0.5">
                  Patients across 48+ Countries
                </div>
              </div>
            </div>

            {/* Price Value Highlight */}
            <div className="hidden md:flex items-center gap-1.5 text-xs font-bold text-teal-300 bg-teal-950/60 border border-teal-500/30 px-3 py-1 rounded-xl">
              <span>💰</span>
              <span>Save up to 75% vs UK &amp; EU Clinics</span>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. BOTTOM OVERLAPPING INFINITY LOOP MARQUEE (Exact Bluesense Pattern)     */}
      {/* ========================================================================= */}
      <div className="w-full relative z-20 border-t border-white/15 bg-slate-950/80 backdrop-blur-md py-3 sm:py-3.5 overflow-hidden shadow-2xl shrink-0">
        <div className="flex select-none">
          {/* Track 1 */}
          <div
            className="flex shrink-0 items-center gap-8 pr-8"
            style={{ animation: 'marquee-smooth 40s linear infinite normal' }}
          >
            {MARQUEE_PARTNERS.map((partner, idx) => (
              <div
                key={`p1-${idx}`}
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group cursor-default whitespace-nowrap"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-teal-300 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all shrink-0">
                  <span className="material-symbols-outlined text-lg">{partner.icon}</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5 leading-none">
                    <span className="font-headline font-black text-xs tracking-tight text-white group-hover:text-teal-200 transition-colors">
                      {partner.name}
                    </span>
                    <span className="text-[9px] font-mono font-bold text-teal-300 bg-white/10 px-1.5 py-0.2 rounded border border-white/10">
                      {partner.badge}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-300 font-medium leading-none block mt-1">
                    {partner.label}
                  </span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 ml-4 shrink-0" />
              </div>
            ))}
          </div>

          {/* Track 2 (Clone for infinite seamless loop) */}
          <div
            className="flex shrink-0 items-center gap-8 pr-8"
            style={{ animation: 'marquee-smooth 40s linear infinite normal' }}
            aria-hidden="true"
          >
            {MARQUEE_PARTNERS.map((partner, idx) => (
              <div
                key={`p2-${idx}`}
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group cursor-default whitespace-nowrap"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-teal-300 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all shrink-0">
                  <span className="material-symbols-outlined text-lg">{partner.icon}</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5 leading-none">
                    <span className="font-headline font-black text-xs tracking-tight text-white group-hover:text-teal-200 transition-colors">
                      {partner.name}
                    </span>
                    <span className="text-[9px] font-mono font-bold text-teal-300 bg-white/10 px-1.5 py-0.2 rounded border border-white/10">
                      {partner.badge}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-300 font-medium leading-none block mt-1">
                    {partner.label}
                  </span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 ml-4 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
