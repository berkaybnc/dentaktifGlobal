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

// Lightweight dynamic number counter component with easeOut Quartic interpolation
function AnimatedCounter({
  end,
  duration = 1800,
  decimals = 0,
  suffix = '',
}: {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(easeOut * end);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [end, duration]);

  const formatted =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString();

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full -mt-[72px] sm:-mt-[76px] h-screen min-h-[660px] flex flex-col justify-between overflow-hidden bg-slate-950 border-b border-white/10">
      
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
      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-[88px] sm:pt-[96px] lg:pt-[102px] pb-3 sm:pb-4 flex-1 flex flex-col justify-center w-full">
        <div className="max-w-3xl space-y-4 sm:space-y-5 text-left">
          
          {/* Top Accreditation Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>Ministry of Health &amp; USHAŞ Licensed Hospital</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-teal-300 font-semibold text-xs hidden sm:inline">Cert #2026034015610080000425805</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-black tracking-tight text-white leading-[1.15]">
              World-Class Dental Surgery &amp;{' '}
              <br className="hidden sm:inline" />
              <FlipWords
                words={[
                  'Hollywood Smile Design',
                  'Swiss Straumann® Implants',
                  'Ivoclar E-Max® Veneers',
                  'Monolithic Zirconia Crowns',
                  'Full-Mouth Rehabilitation',
                ]}
                duration={2800}
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-teal-400 font-black inline-block drop-shadow-sm"
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

          {/* Single Focused Action Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <Link
              href="/contact"
              className="py-3.5 px-7 sm:px-8 rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 text-[#0d072b] font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-teal-500/25 hover:shadow-teal-400/40 hover:scale-[1.02] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 text-center group w-fit"
            >
              <span>Get Free Quote &amp; 3D Smile Simulation</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Social Proof & Trust Badges (Dynamic Count-Up Numerator) */}
          <div className="pt-3 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-white/15">
            {/* Trustpilot Score Numerator */}
            <div className="flex items-center gap-2.5">
              <div className="flex gap-0.5 text-emerald-400 text-sm">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-white leading-none flex items-center gap-1.5">
                  <span>Trustpilot</span>
                  <span className="text-emerald-400 font-black">
                    <AnimatedCounter end={4.9} decimals={1} /> / 5.0
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-300 font-medium mt-1">
                  <AnimatedCounter end={2400} suffix="+" /> Verified Patient Reviews
                </div>
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="h-7 w-px bg-white/20 hidden sm:block" />

            {/* International Completed Smiles Numerator */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden items-center">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Verified Patient"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-900 object-cover shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Verified Patient"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-900 object-cover shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Verified Patient"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-900 object-cover shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Verified Patient"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-slate-900 object-cover shadow-md"
                />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-white leading-none">
                  <span className="text-teal-300 font-black mr-1">
                    <AnimatedCounter end={15000} suffix="+" />
                  </span>
                  Completed Smiles
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-300 font-medium mt-1">
                  Patients across 48+ Countries
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. BOTTOM OVERLAPPING INFINITY LOOP MARQUEE (Exact Bluesense Pattern)     */}
      {/* ========================================================================= */}
      <div className="w-full relative z-20 border-t border-white/20 bg-slate-950/85 backdrop-blur-md py-4 sm:py-5 overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.4)] shrink-0">
        <div className="flex select-none">
          {/* Track 1 */}
          <div
            className="flex shrink-0 items-center gap-10 sm:gap-12 pr-10 sm:pr-12"
            style={{ animation: 'marquee-smooth 40s linear infinite normal' }}
          >
            {MARQUEE_PARTNERS.map((partner, idx) => (
              <div
                key={`p1-${idx}`}
                className="flex items-center gap-3.5 text-white/90 hover:text-white transition-colors group cursor-default whitespace-nowrap"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-teal-300 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-cyan-500 group-hover:text-slate-950 transition-all shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">{partner.icon}</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2 leading-none">
                    <span className="font-headline font-black text-sm sm:text-base tracking-tight text-white group-hover:text-teal-200 transition-colors">
                      {partner.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold text-teal-300 bg-white/15 px-2 py-0.5 rounded border border-white/15">
                      {partner.badge}
                    </span>
                  </div>
                  <span className="text-xs sm:text-[13px] text-slate-300 font-medium leading-none block mt-1.5">
                    {partner.label}
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-white/25 ml-6 sm:ml-8 shrink-0" />
              </div>
            ))}
          </div>

          {/* Track 2 (Clone for infinite seamless loop) */}
          <div
            className="flex shrink-0 items-center gap-10 sm:gap-12 pr-10 sm:pr-12"
            style={{ animation: 'marquee-smooth 40s linear infinite normal' }}
            aria-hidden="true"
          >
            {MARQUEE_PARTNERS.map((partner, idx) => (
              <div
                key={`p2-${idx}`}
                className="flex items-center gap-3.5 text-white/90 hover:text-white transition-colors group cursor-default whitespace-nowrap"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-teal-300 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-cyan-500 group-hover:text-slate-950 transition-all shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">{partner.icon}</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2 leading-none">
                    <span className="font-headline font-black text-sm sm:text-base tracking-tight text-white group-hover:text-teal-200 transition-colors">
                      {partner.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold text-teal-300 bg-white/15 px-2 py-0.5 rounded border border-white/15">
                      {partner.badge}
                    </span>
                  </div>
                  <span className="text-xs sm:text-[13px] text-slate-300 font-medium leading-none block mt-1.5">
                    {partner.label}
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-white/25 ml-6 sm:ml-8 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
