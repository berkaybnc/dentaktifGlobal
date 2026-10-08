'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, Check, ArrowRight, Sparkles, Building2, Plane, Car, Hotel } from 'lucide-react';

interface CountryConfig {
  code: string;
  name: string;
  currency: string;
  symbol: string;
  rates: Record<string, { local: number; istanbul: number }>;
}

const COUNTRIES: CountryConfig[] = [
  {
    code: 'UK',
    name: 'United Kingdom',
    currency: 'GBP',
    symbol: '£',
    rates: {
      hollywood: { local: 14500, istanbul: 4200 },
      allOn4: { local: 16000, istanbul: 4800 },
      allOn6: { local: 21000, istanbul: 5900 },
      singleImplant: { local: 2400, istanbul: 750 },
    },
  },
  {
    code: 'DE',
    name: 'Deutschland',
    currency: 'EUR',
    symbol: '€',
    rates: {
      hollywood: { local: 16500, istanbul: 4600 },
      allOn4: { local: 17500, istanbul: 5200 },
      allOn6: { local: 23500, istanbul: 6500 },
      singleImplant: { local: 2600, istanbul: 820 },
    },
  },
  {
    code: 'US',
    name: 'United States',
    currency: 'USD',
    symbol: '$',
    rates: {
      hollywood: { local: 22000, istanbul: 4900 },
      allOn4: { local: 28000, istanbul: 5800 },
      allOn6: { local: 36000, istanbul: 7200 },
      singleImplant: { local: 3800, istanbul: 890 },
    },
  },
  {
    code: 'FR',
    name: 'France',
    currency: 'EUR',
    symbol: '€',
    rates: {
      hollywood: { local: 15500, istanbul: 4600 },
      allOn4: { local: 17000, istanbul: 5200 },
      allOn6: { local: 22800, istanbul: 6500 },
      singleImplant: { local: 2500, istanbul: 820 },
    },
  },
];

export default function PriceSimulator() {
  const t = useTranslations('simulator');
  const [selectedCountry, setSelectedCountry] = useState<string>('UK');
  const [selectedTreatment, setSelectedTreatment] = useState<string>('hollywood');

  const currentCountry = COUNTRIES.find((c) => c.code === selectedCountry) || COUNTRIES[0];
  const rateData = currentCountry.rates[selectedTreatment] || currentCountry.rates.hollywood;

  const localPrice = rateData.local;
  const istanbulPrice = rateData.istanbul;
  const netSavings = localPrice - istanbulPrice;
  const savingsPercent = Math.round((netSavings / localPrice) * 100);

  return (
    <section id="simulator" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            {t('title')}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden max-w-5xl mx-auto">
          {/* Controls Bar */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-sky-950 text-white">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Country Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sky-300 mb-2">
                  {t('selectCountry')}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {COUNTRIES.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => setSelectedCountry(country.code)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        selectedCountry === country.code
                          ? 'bg-sky-500 text-white shadow-md'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {country.name} ({country.symbol})
                    </button>
                  ))}
                </div>
              </div>

              {/* Treatment Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sky-300 mb-2">
                  {t('selectTreatment')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { key: 'hollywood', label: t('treatments.hollywood') },
                    { key: 'allOn4', label: t('treatments.allOn4') },
                    { key: 'allOn6', label: t('treatments.allOn6') },
                    { key: 'singleImplant', label: t('treatments.singleImplant') },
                  ].map((tr) => (
                    <button
                      key={tr.key}
                      type="button"
                      onClick={() => setSelectedTreatment(tr.key)}
                      className={`px-3 py-2.5 rounded-xl text-left text-xs font-semibold truncate transition-all ${
                        selectedTreatment === tr.key
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {tr.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Calculations & Comparison Grid */}
          <div className="p-6 sm:p-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Local Cost Column */}
              <div className="md:col-span-4 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {t('localBenchmark')} {currentCountry.name}
                </span>
                <div className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-400 font-heading line-through decoration-rose-500/80 decoration-2">
                  {currentCountry.symbol}{localPrice.toLocaleString()}
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Clinic treatment fee only (excluding travel)
                </p>
              </div>

              {/* Dent Aktif Package Column (Highlighted) */}
              <div className="md:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-sky-50 to-white border-2 border-sky-500 text-center relative shadow-lg">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                  VIP All-Inclusive Istanbul
                </div>
                <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                  {t('dentAktifPackage')}
                </span>
                <div className="mt-3 text-4xl sm:text-5xl font-black text-sky-950 font-heading">
                  {currentCountry.symbol}{istanbulPrice.toLocaleString()}
                </div>
                <div className="mt-4 flex items-center justify-center gap-3 text-slate-600 text-xs font-medium">
                  <span className="flex items-center gap-1">
                    <Hotel className="w-3.5 h-3.5 text-sky-600" /> 5★ Hotel
                  </span>
                  <span className="flex items-center gap-1">
                    <Car className="w-3.5 h-3.5 text-sky-600" /> Mercedes Vito
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Straumann®
                  </span>
                </div>
              </div>

              {/* Savings Value KPI */}
              <div className="md:col-span-3 text-center md:text-left space-y-2">
                <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  {t('youSave')}
                </div>
                <div className="text-3xl font-black text-emerald-600 font-heading">
                  {currentCountry.symbol}{netSavings.toLocaleString()}
                </div>
                <div className="text-xs font-semibold text-slate-600">
                  Total saving of <span className="text-emerald-700 font-bold text-sm">%{savingsPercent}</span>
                </div>

                {/* Savings Progress Bar */}
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden mt-3">
                  <div
                    className="bg-emerald-500 h-3 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${savingsPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Package Guarantee Footer */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500 max-w-2xl text-center sm:text-left">
                {t('packageIncludes')}
              </p>
              <a
                href="#triage"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>{t('ctaBook')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
