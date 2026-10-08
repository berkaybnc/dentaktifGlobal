'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';

interface TreatmentPlan {
  id: string;
  name: string;
  icon: string;
  label: string;
  costUK: string;
  costUS: string;
  costDE: string;
  costFR: string;
  dentPrice: string;
  savePercent: number;
}

const TREATMENTS: TreatmentPlan[] = [
  {
    id: 'smile',
    name: 'Smile Makeover (20 E-Max Veneers)',
    icon: 'auto_awesome',
    label: 'Smile / Veneers',
    costUK: '£16,000',
    costUS: '$21,000',
    costDE: '€17,500',
    costFR: '€16,000',
    dentPrice: '£4,250',
    savePercent: 73,
  },
  {
    id: 'allon4',
    name: 'All-on-4 / Full Arch Implants',
    icon: 'dentistry',
    label: 'Full Arch Implants',
    costUK: '£22,000',
    costUS: '$28,000',
    costDE: '€23,500',
    costFR: '€22,000',
    dentPrice: '£5,800',
    savePercent: 74,
  },
  {
    id: 'restoration',
    name: 'Full Mouth Monolithic Zirconia',
    icon: 'healing',
    label: 'Restoration',
    costUK: '£19,500',
    costUS: '$25,000',
    costDE: '€21,000',
    costFR: '€19,500',
    dentPrice: '£4,900',
    savePercent: 75,
  },
];

export default function Hero() {
  const locale = useLocale();
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentPlan>(TREATMENTS[0]);
  const [selectedCountry, setSelectedCountry] = useState<string>('UK');
  const [waNumber, setWaNumber] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Dynamic cost calculation based on country
  const getAbroadCost = () => {
    switch (selectedCountry) {
      case 'DE':
        return { cost: selectedTreatment.costDE, label: 'Germany Dental Clinic Benchmark' };
      case 'US':
        return { cost: selectedTreatment.costUS, label: 'US / Canada Private Dental Reference' };
      case 'FR':
        return { cost: selectedTreatment.costFR, label: 'France Private Dental Benchmark' };
      case 'UK':
      default:
        return { cost: selectedTreatment.costUK, label: 'London Private Clinic Benchmark' };
    }
  };

  const abroadData = getAbroadCost();

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waNumber.trim()) return;

    const message = encodeURIComponent(
      `Hello Dent Aktif! I would like to request preliminary doctor evaluation for: ${selectedTreatment.name}. My WhatsApp: ${waNumber}`
    );
    window.open(`https://wa.me/902129008080?text=${message}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#F0F4F7]/40 to-white border-b border-slate-200/80 pt-10 sm:pt-14 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#211164_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Clinical Authority & Hospital Accreditation */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[11px] font-bold text-slate-700">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-primary font-extrabold">18+ Years Chief Surgical Leadership</span>
                <span className="text-slate-300">•</span>
                <span>On-Site German CAD/CAM Lab</span>
                <span className="text-slate-300">•</span>
                <span className="text-secondary font-semibold">Levent, Istanbul</span>
              </div>

              <h1 className="font-headline text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-primary leading-[1.18]">
                Precision Surgical Implantology & Biocompatible Aesthetic Smile Restorations.
              </h1>

              <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Dent Aktif International Surgical Hospital delivers full-mouth oral rehabilitations, guided implant
                surgery, and handcrafted E-Max restorations directly through our in-house German Master Ceramist Suite
                within a seamless 5-day protocol.
              </p>
            </div>

            {/* Realistic Clinic Imagery Showcase */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm group">
                <img
                  alt="Dent Aktif VIP Dental Surgical Suite in Levent"
                  className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XgZ-GBizAlxpwrfcy7NQKXYTAXKR1yw_556uExG9Ca0Z7Vi7bn_pznu7qDggg2ueQTAbto7EJ59loqXubg-1HIPeOMLG6An33a_XsRMjQZxjpwi76t9JwUZDPTLmCPEMObn3TbLxmmv56Ge5y9lH0L738NdbaDobMFXpbcA-yRCpVIMPo9UHXYW2Y0AnWCnYnGd24Gyqs3mwwVcNvUwDdb9Pw3K2rATHfS2gHLhV9XGw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-[11px] font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-teal-300">apartment</span>
                    Levent Panoramic Surgical Suite
                  </span>
                </div>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm group">
                <img
                  alt="German CAD/CAM Ceramic Laboratory Hand Crafting"
                  className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UKMqkmEo_pBGxhCpBes-2HTJXsjJSnJoLNYZvLTahZ04KGGZUsItqbfjhkBbHdRhYlkdWot2BUp9L03EQU9mVZjOgAYhSQW5ZtbX4MAvyigsCYwGMRZFxVbSzmAuraBkUypXaDUznuk6_gA_Uzh4h5U9pkG1CQFeP-jrHg5YloL1Pg-cIBd-JU--MfOaHJLeWFY5wWK4_n8D63i0H2IoPvl9Ew5cLS6SmnOP_J-4PA-g"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-[11px] font-semibold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-emerald-300">biotech</span>
                    On-Site Master Ceramist Lab
                  </span>
                </div>
              </div>
            </div>

            {/* Regulatory Compliance Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium border-t border-slate-200/80">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px] text-emerald-600">verified</span>
                Ministry of Health Auth #TR-34-DH-4892
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px] text-emerald-600">verified</span>
                Official Swiss Straumann® Center of Excellence
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px] text-emerald-600">verified</span>
                Evidence-Based Biological Integration
              </span>
            </div>
          </div>

          {/* Right Column: Compliant Smart Diagnostic & Transparent Package Simulator */}
          <div
            className="lg:col-span-5 bg-white rounded-xl border border-slate-200/90 shadow-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden"
            id="quick-action-hub"
          >
            <div className="absolute top-0 right-0 bg-emerald-50 text-emerald-700 font-mono text-[10px] font-extrabold px-3 py-1 rounded-bl-lg border-b border-l border-emerald-200 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              TRANSPARENT PACKAGE ESTIMATOR
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-mono text-[11px] font-bold text-secondary uppercase tracking-wider">
                  Fast Clinical Inquiry
                </span>
                <h3 className="font-headline text-lg sm:text-xl font-extrabold text-primary">
                  Select Desired Clinical Treatment
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Explore transparent all-inclusive hospital packages with zero hidden fees.
                </p>
              </div>

              {/* Treatment Selector Buttons */}
              <div className="grid grid-cols-3 gap-2">
                {TREATMENTS.map((tr) => (
                  <button
                    key={tr.id}
                    type="button"
                    onClick={() => setSelectedTreatment(tr)}
                    className={`rounded-lg p-2.5 text-center text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 border-2 ${
                      selectedTreatment.id === tr.id
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{tr.icon}</span>
                    <span>{tr.label}</span>
                  </button>
                ))}
              </div>

              {/* Benchmark & International Comparison Reference */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Your Residence Country:</span>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="text-xs font-bold border-slate-300 rounded py-1 px-2 text-slate-800 focus:ring-primary"
                  >
                    <option value="UK">United Kingdom (London Benchmark)</option>
                    <option value="DE">Germany / Austria / Switzerland</option>
                    <option value="US">United States / Canada</option>
                    <option value="FR">France / Belgium / Luxembourg</option>
                  </select>
                </div>

                <div className="flex items-baseline justify-between pt-1 border-t border-slate-200">
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">{abroadData.label}</div>
                    <div className="text-sm line-through text-slate-400 font-bold">{abroadData.cost}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      Dent Aktif All-Inclusive Care
                    </div>
                    <div className="text-2xl font-black text-primary font-headline">
                      {selectedTreatment.dentPrice}
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-emerald-100 rounded-full h-2 overflow-hidden mt-1">
                  <div
                    className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${selectedTreatment.savePercent}%` }}
                  />
                </div>

                <div className="flex justify-between items-center text-[11px] font-semibold text-emerald-800">
                  <span>5-Star Hotel + VIP Mercedes Transfer Included</span>
                  <span>{selectedTreatment.savePercent}% Direct Value Advantage</span>
                </div>
              </div>

              {/* Fast WhatsApp Clinical Inquiry Form */}
              <form onSubmit={handleQuickSubmit} className="space-y-2.5 pt-1">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-lg">
                    phone_iphone
                  </span>
                  <input
                    type="tel"
                    required
                    value={waNumber}
                    onChange={(e) => setWaNumber(e.target.value)}
                    placeholder="WhatsApp Number with Country Code (+44, +1, +49...)"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-md focus:border-primary focus:ring-0"
                  />
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px] text-teal-600">lock</span>
                  GDPR & Health Tourism compliant data processing. Zero spam.
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-md text-xs font-extrabold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">send</span>
                  <span>Request Preliminary Doctor Evaluation</span>
                </button>
              </form>
            </div>

            <div className="mt-3 pt-2 text-center border-t border-slate-100">
              <a
                className="text-[11px] font-bold text-primary hover:underline inline-flex items-center gap-1"
                href="#consultation-wizard"
              >
                Proceed to Detailed 3D X-Ray & Dental Record Upload →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
