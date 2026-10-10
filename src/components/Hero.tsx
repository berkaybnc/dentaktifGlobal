'use client';

import React from 'react';
import { Link } from '@/navigation';
import { FlipWords } from './FlipWords';

// Static 4-Pillar Prestige & Trust Pillars (Hospital Luxury Benchmark)
const PRESTIGE_PILLARS = [
  {
    icon: 'verified',
    title: 'Swiss Straumann® & Ivoclar Lab',
    label: 'Certified Original Materials & In-House Milling',
  },
  {
    icon: 'bolt',
    title: '5-Day Express Completion',
    label: 'Precision Handcrafted Smiles with Zero Delay',
  },
  {
    icon: 'hotel',
    title: '5★ Partner Hotel & VIP Transfers',
    label: 'Airport & Clinic Chauffeured Mercedes-Benz',
  },
  {
    icon: 'shield',
    title: 'Lifetime Hospital Warranty',
    label: 'Official Global Guarantee Certificate',
  },
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
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-black tracking-tight text-white leading-[1.22]">
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
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-teal-400 font-black inline-block drop-shadow-sm pb-2 -mb-1.5"
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
      {/* 3. STATIC PRESTIGE & TRUST PILLARS (Modern Luxury Glassmorphism)         */}
      {/* ========================================================================= */}
      <div className="w-full relative z-20 border-t border-white/15 bg-slate-950/85 backdrop-blur-xl py-3.5 sm:py-4 shadow-[0_-10px_35px_rgba(0,0,0,0.5)] shrink-0">
        <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {PRESTIGE_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3.5 py-1.5 ${
                  idx > 0 ? 'sm:pl-4 lg:pl-6' : ''
                } group cursor-default`}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-teal-500/10 border border-teal-400/25 flex items-center justify-center text-teal-300 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-cyan-500 group-hover:text-slate-950 transition-all duration-300 shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">{pillar.icon}</span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-headline font-black text-xs sm:text-sm tracking-tight text-white group-hover:text-teal-200 transition-colors truncate">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-300/90 font-medium leading-tight mt-0.5 truncate">
                    {pillar.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
