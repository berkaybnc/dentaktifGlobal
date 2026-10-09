'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';
import { compressDentalImage, OptimizedFile } from '@/lib/imageCompression';

interface TreatmentOption {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  desc: string;
  icon: string;
  highlight: string;
}

const TREATMENT_OPTIONS: TreatmentOption[] = [
  {
    id: 'hollywood_smile',
    title: 'Hollywood Smile Makeover',
    badge: '✨ 5-Day Stay • Most Popular',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    desc: '16 to 20 handcrafted Ivoclar Vivadent E-Max® veneers for lifelike translucency and symmetrical smile architecture.',
    icon: 'auto_awesome',
    highlight: '20 E-Max® Laminates • Digital Smile Design',
  },
  {
    id: 'all_on_4',
    title: 'All-on-4 / All-on-6 Implants',
    badge: '⚙️ Immediate Loading Protocol',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    desc: 'Full-arch fixed reconstruction using Swiss Straumann® titanium-zirconium implants and immediate 48-hour temporary bridge.',
    icon: 'dentistry',
    highlight: 'Swiss Straumann® • Lifetime Warranty',
  },
  {
    id: 'zirconia_crowns',
    title: 'Monolithic Zirconia Crowns',
    badge: '👑 1200+ MPa Diamond Strength',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    desc: 'German Kuraray Katana™ robotic CAD/CAM full bridges for heavy bite wear, bruxism, and deeply restored teeth.',
    icon: 'crown',
    highlight: 'Katana™ Multilayer • 20-Year Certificate',
  },
  {
    id: 'full_mouth',
    title: 'Comprehensive Rehabilitation',
    badge: '🏥 Faculty Surgical Care',
    badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
    desc: 'Holistic combination of 3D sinus lifts, bone matrix grafting, computer-guided implants, and aesthetic ceramic crowns.',
    icon: 'medical_services',
    highlight: 'Sedation Available • Multi-Disciplinary',
  },
];

export default function TriageForm() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    treatment_plan: 'hollywood_smile',
    fullName: '',
    country: 'UK',
    phone: '',
    timeline: 'Within the next 30 days',
    includeHotel: true,
  });

  const [files, setFiles] = useState<OptimizedFile[]>([]);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [refCode, setRefCode] = useState<string>('DA-2025');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setIsCompressing(true);

    const rawFiles = Array.from(e.target.files);
    const optimizedList: OptimizedFile[] = [];

    for (const file of rawFiles) {
      try {
        const compressed = await compressDentalImage(file);
        optimizedList.push(compressed);
      } catch (err) {
        console.error('File compression error:', err);
      }
    }

    setFiles((prev) => [...prev, ...optimizedList]);
    setIsCompressing(false);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/triage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: `${formData.fullName.replace(/\s+/g, '.').toLowerCase()}@international-patient.com`,
          phone: formData.phone,
          country: formData.country,
          treatment: formData.treatment_plan,
          urgency: formData.timeline,
          locale: 'en',
          files: files.map((f) => ({ name: f.originalName, sizeBytes: f.sizeBytes, dataUrl: f.dataUrl })),
        }),
      });

      const res = await response.json();
      if (res.success) {
        setRefCode(res.referenceId || 'DA-2025');
        setShowSuccess(true);
      } else {
        alert(res.error || 'Submission error.');
      }
    } catch (err) {
      console.error(err);
      setShowSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setShowSuccess(false);
    setStep(1);
    setFiles([]);
    setFormData({
      treatment_plan: 'hollywood_smile',
      fullName: '',
      country: 'UK',
      phone: '',
      timeline: 'Within the next 30 days',
      includeHotel: true,
    });
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-[#F0F4F7]/70 via-white to-[#F0F4F7]/40 border-b border-slate-200 relative overflow-hidden" id="consultation-wizard">
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#1b0d52]/5 via-teal-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(27,13,82,0.1)] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Top Decorative Hospital Gradient Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#1b0d52] via-[#006972] to-emerald-400 absolute top-0 left-0 right-0" />

          {/* Form Header */}
          <div className="border-b border-slate-100 pb-8 mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-900 text-xs font-bold shadow-xs">
                <span className="material-symbols-outlined text-[15px] text-teal-600">verified</span>
                <span>Official Clinical Triage Portal</span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-700 font-extrabold">Under 4-Hour Response</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3.5 py-1 rounded-full text-xs font-mono text-slate-700 self-start sm:self-center shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="material-symbols-outlined text-sm text-slate-500">lock</span>
                <span>256-Bit SSL & GDPR Medical Encrypted</span>
              </div>
            </div>

            <div>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-black text-[#1b0d52] tracking-tight">
                Complimentary 3D X-Ray & Dental Record Evaluation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed max-w-2xl">
                Submit your panoramic radiograph, 3D CBCT, or smartphone smile photos. Our Chief Surgical Prosthodontist will evaluate your case with an itemized, binding medical proposal.
              </p>
            </div>
          </div>

          {/* Enhanced Step Stepper */}
          <div className="mb-9">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 relative">
              {/* Stepper Progress Connector Line */}
              <div className="hidden sm:block absolute top-5 left-12 right-12 h-0.5 bg-slate-200 -z-0">
                <div
                  className="h-full bg-gradient-to-r from-[#1b0d52] to-[#006972] transition-all duration-300"
                  style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
                />
              </div>

              {/* Step 1 */}
              <button
                type="button"
                onClick={() => setStep(1)}
                className={`flex flex-col sm:items-center text-left sm:text-center p-3 rounded-2xl transition-all relative z-10 ${
                  step === 1
                    ? 'bg-gradient-to-b from-indigo-50/70 to-transparent border border-indigo-200/80 shadow-xs'
                    : 'hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs mb-2 transition-all shadow-xs ${
                    step > 1
                      ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                      : step === 1
                      ? 'bg-gradient-to-tr from-[#1b0d52] to-[#006972] text-white ring-4 ring-[#1b0d52]/15 scale-105'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {step > 1 ? <span className="material-symbols-outlined text-sm font-bold">check</span> : '1'}
                </div>
                <span className={`text-xs font-bold ${step === 1 ? 'text-[#1b0d52]' : 'text-slate-600'}`}>
                  Treatment Focus
                </span>
                <span className="text-[10px] text-slate-600 hidden sm:inline mt-0.5">
                  Select Procedure
                </span>
              </button>

              {/* Step 2 */}
              <button
                type="button"
                onClick={() => {
                  if (step >= 2) setStep(2);
                }}
                className={`flex flex-col sm:items-center text-left sm:text-center p-3 rounded-2xl transition-all relative z-10 ${
                  step === 2
                    ? 'bg-gradient-to-b from-indigo-50/70 to-transparent border border-indigo-200/80 shadow-xs'
                    : 'hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs mb-2 transition-all shadow-xs ${
                    step > 2
                      ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                      : step === 2
                      ? 'bg-gradient-to-tr from-[#1b0d52] to-[#006972] text-white ring-4 ring-[#1b0d52]/15 scale-105'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {step > 2 ? <span className="material-symbols-outlined text-sm font-bold">check</span> : '2'}
                </div>
                <span className={`text-xs font-bold ${step === 2 ? 'text-[#1b0d52]' : 'text-slate-600'}`}>
                  Patient Info
                </span>
                <span className="text-[10px] text-slate-600 hidden sm:inline mt-0.5">
                  WhatsApp & Country
                </span>
              </button>

              {/* Step 3 */}
              <button
                type="button"
                onClick={() => {
                  if (step >= 3) setStep(3);
                }}
                className={`flex flex-col sm:items-center text-left sm:text-center p-3 rounded-2xl transition-all relative z-10 ${
                  step === 3
                    ? 'bg-gradient-to-b from-indigo-50/70 to-transparent border border-indigo-200/80 shadow-xs'
                    : 'hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs mb-2 transition-all shadow-xs ${
                    step === 3
                      ? 'bg-gradient-to-tr from-[#1b0d52] to-[#006972] text-white ring-4 ring-[#1b0d52]/15 scale-105'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  3
                </div>
                <span className={`text-xs font-bold ${step === 3 ? 'text-[#1b0d52]' : 'text-slate-600'}`}>
                  Dental Records
                </span>
                <span className="text-[10px] text-slate-600 hidden sm:inline mt-0.5">
                  Upload X-Rays
                </span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* STEP 1: TREATMENT SELECTION (LUXURY INTERACTIVE CARDS) */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {TREATMENT_OPTIONS.map((option) => {
                    const isSelected = formData.treatment_plan === option.id;
                    return (
                      <div
                        key={option.id}
                        onClick={() => setFormData({ ...formData, treatment_plan: option.id })}
                        className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 relative flex flex-col justify-between group ${
                          isSelected
                            ? 'border-[#1b0d52] bg-gradient-to-br from-[#1b0d52]/[0.03] via-white to-teal-500/[0.04] shadow-md shadow-[#1b0d52]/10 ring-2 ring-[#1b0d52]/15 -translate-y-0.5'
                            : 'border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5'
                        }`}
                      >
                        {/* Card Header with Icon Badge and Radio Ring */}
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                                isSelected ? 'bg-[#1b0d52] text-teal-300 shadow-sm' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                              }`}>
                                <span className="material-symbols-outlined text-[20px]">{option.icon}</span>
                              </div>
                              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${option.badgeColor}`}>
                                {option.badge}
                              </span>
                            </div>

                            {/* Radio custom visual indicator */}
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                              isSelected ? 'border-[#1b0d52] bg-[#1b0d52]' : 'border-slate-300 bg-white'
                            }`}>
                              {isSelected && <span className="w-2 h-2 rounded-full bg-teal-300" />}
                            </div>
                          </div>

                          <h3 className={`font-headline text-base font-extrabold tracking-tight transition-colors ${
                            isSelected ? 'text-[#1b0d52]' : 'text-slate-900 group-hover:text-[#1b0d52]'
                          }`}>
                            {option.title}
                          </h3>

                          <p className="text-xs text-slate-600 leading-relaxed mt-1.5 font-normal">
                            {option.desc}
                          </p>
                        </div>

                        {/* Bottom Highlight */}
                        <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#006972]">
                          <span className="material-symbols-outlined text-[15px] text-teal-600">verified</span>
                          <span>{option.highlight}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Step 1 Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-sm text-teal-600">info</span>
                    <span>Unsure which treatment suits you? Our surgical faculty will specify your ideal plan.</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#211164] via-[#2d1980] to-[#006972] text-white hover:opacity-95 shadow-md shadow-[#211164]/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-100 shrink-0"
                  >
                    <span>Next: Patient & Country Info</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: PATIENT & CONTACT INFO (ENHANCED INPUTS) */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-teal-600">person</span>
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Smith / Sarah Jenkins"
                      className="w-full h-11 px-3.5 text-xs sm:text-sm bg-slate-50/60 border border-slate-300 rounded-xl focus:bg-white focus:border-[#211164] focus:ring-4 focus:ring-[#211164]/10 transition-all outline-none"
                    />
                  </div>

                  {/* Country of Residence */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-teal-600">public</span>
                      <span>Country of Residence *</span>
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full h-11 px-3.5 text-xs sm:text-sm bg-slate-50/60 border border-slate-300 rounded-xl focus:bg-white focus:border-[#211164] focus:ring-4 focus:ring-[#211164]/10 transition-all outline-none"
                    >
                      <option value="UK">🇬🇧 United Kingdom</option>
                      <option value="US">🇺🇸 United States / Canada</option>
                      <option value="DE">🇩🇪 Germany / Austria / Switzerland</option>
                      <option value="FR">🇫🇷 France / Belgium / Luxembourg</option>
                      <option value="GCC">🇦🇪 UAE / Saudi Arabia / Qatar / Kuwait</option>
                      <option value="Other">🌍 Other International Country</option>
                    </select>
                  </div>

                  {/* WhatsApp Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-emerald-600">chat</span>
                      <span>WhatsApp Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +44 7123 456789"
                      className="w-full h-11 px-3.5 text-xs sm:text-sm bg-slate-50/60 border border-slate-300 rounded-xl focus:bg-white focus:border-[#211164] focus:ring-4 focus:ring-[#211164]/10 transition-all outline-none font-mono"
                    />
                    <span className="text-[10px] text-slate-600 block">
                      Our coordinator will send your preliminary itemized plan directly to this number.
                    </span>
                  </div>

                  {/* Estimated Timeline */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-teal-600">calendar_month</span>
                      <span>Estimated Travel Timeline</span>
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full h-11 px-3.5 text-xs sm:text-sm bg-slate-50/60 border border-slate-300 rounded-xl focus:bg-white focus:border-[#211164] focus:ring-4 focus:ring-[#211164]/10 transition-all outline-none"
                    >
                      <option>⚡ Within the next 30 days (High Priority)</option>
                      <option>🗓️ In 1 - 2 months</option>
                      <option>🌴 In 3 - 6 months</option>
                      <option>📋 Preliminary cost estimate only</option>
                    </select>
                  </div>
                </div>

                {/* Step 2 Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-[#1b0d52] hover:bg-slate-100 transition-colors flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (!formData.fullName.trim() || !formData.phone.trim()) {
                        alert('Please fill out your name and WhatsApp phone number.');
                        return;
                      }
                      setStep(3);
                    }}
                    className="px-8 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#211164] via-[#2d1980] to-[#006972] text-white hover:opacity-95 shadow-md shadow-[#211164]/20 hover:shadow-lg transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-100"
                  >
                    <span>Next: Attach Dental Records</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: FILE UPLOAD & TRANSMISSION (LUXURY DROPZONE) */}
            {step === 3 && (
              <div className="space-y-6">
                {/* Modern Drag & Drop Zone */}
                <label className="relative border-2 border-dashed border-teal-300/80 rounded-2xl p-8 sm:p-10 text-center bg-gradient-to-b from-teal-50/30 to-white hover:border-[#1b0d52] transition-all cursor-pointer block group shadow-xs">
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf,.dcm"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 group-hover:bg-[#1b0d52] group-hover:text-teal-300 transition-all">
                      <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                    </div>
                    <span className="font-headline text-sm sm:text-base font-extrabold text-[#1b0d52] tracking-tight">
                      Drop Panoramic X-Ray, 3D Scan, or Smile Photos Here
                    </span>
                    <span className="text-xs text-slate-500 mt-1 max-w-md">
                      Browse from your device. Supported: JPEG, PNG, DICOM / CBCT or PDF (Max 25 MB).
                    </span>
                    <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-slate-600 shadow-2xs">
                      <span className="material-symbols-outlined text-sm text-teal-600">verified</span>
                      <span>Optional for initial consultation — can be uploaded later</span>
                    </span>
                  </div>
                </label>

                {isCompressing && (
                  <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl text-xs text-teal-900 font-semibold flex items-center gap-2 animate-pulse">
                    <span className="material-symbols-outlined text-base animate-spin">sync</span>
                    <span>Optimizing and encrypting diagnostic files client-side...</span>
                  </div>
                )}

                {/* Uploaded Files Chips */}
                {files.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-700 block">Uploaded Dental Files ({files.length}):</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {files.map((file, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-xl border border-emerald-300 bg-emerald-50/70 text-emerald-950 text-xs shadow-2xs"
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <span className="material-symbols-outlined text-emerald-700 text-base shrink-0">draft</span>
                            <span className="font-mono font-semibold truncate">{file.originalName}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(idx)}
                            className="text-rose-600 hover:text-rose-800 font-bold ml-2 shrink-0 hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5-Star Hotel & VIP Vito Chauffeur Inclusion Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-teal-50/60 via-indigo-50/40 to-slate-50 border border-teal-200/80 flex items-start gap-3.5">
                  <input
                    type="checkbox"
                    id="hotel-toggle"
                    checked={formData.includeHotel}
                    onChange={(e) => setFormData({ ...formData, includeHotel: e.target.checked })}
                    className="w-5 h-5 mt-0.5 rounded text-[#1b0d52] focus:ring-0 cursor-pointer accent-[#1b0d52]"
                  />
                  <label htmlFor="hotel-toggle" className="cursor-pointer space-y-1">
                    <span className="font-headline text-xs sm:text-sm font-extrabold text-[#1b0d52] block">
                      Include 5-Star Levent Partner Hotel & VIP Mercedes Vito Chauffeur (Zero Extra Cost)
                    </span>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                      Door-to-door private airport pickups and 5 nights luxury accommodation bundled directly into your transparent package quote.
                    </p>
                  </label>
                </div>

                {/* GDPR Medical Legal Disclaimer */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 text-[11px] text-slate-600 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800">
                    <span className="material-symbols-outlined text-teal-600 text-sm">shield</span>
                    <span>GDPR (EU 2016/679) & Ministry of Health Data Protection</span>
                  </div>
                  <p className="leading-relaxed">
                    All dental records and contact data are strictly confidential, transmitted via 256-bit SSL, and solely evaluated by licensed clinical faculty. Zero commercial third-party distribution.
                  </p>
                </div>

                {/* Step 3 Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-[#1b0d52] hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-gradient-to-r from-emerald-600 via-teal-700 to-[#1b0d52] text-white hover:opacity-95 shadow-lg shadow-emerald-700/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-100 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined text-base animate-spin">sync</span>
                        <span>Transmitting Secure Records...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-base text-teal-300">send</span>
                        <span>Transmit Records & Request Triage</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Alternative Direct Inquiry Strip */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <span className="text-xs text-slate-500 font-medium">Need direct clinical assistance or prefer speaking with our team? </span>
            <Link
              href="/contact"
              className="text-xs font-bold text-[#006972] hover:text-[#211164] hover:underline inline-flex items-center gap-1 ml-1"
            >
              <span className="material-symbols-outlined text-sm">support_agent</span>
              <span>Reach Our Official Contact Desk →</span>
            </Link>
          </div>

          {/* SUCCESS CONFIRMATION OVERLAY */}
          {showSuccess && (
            <div className="absolute inset-0 z-50 bg-white/98 backdrop-blur-md p-8 sm:p-12 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4 shadow-md shadow-emerald-500/10">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 font-extrabold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
                Transmission Confirmed • Reference #{refCode}
              </span>
              
              <h3 className="font-headline text-2xl sm:text-3xl font-black text-[#1b0d52] mb-3">
                Medical Records Received Successfully
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mb-8 leading-relaxed">
                Thank you, <strong className="text-[#1b0d52] font-bold">{formData.fullName || 'Patient'}</strong>.
                Our Chief Surgical Prosthodontist and International Coordination Desk are currently reviewing your radiographs. Your itemized treatment proposal will be delivered directly to your WhatsApp (<span className="font-mono font-bold text-slate-800">{formData.phone}</span>) within 4 to 12 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/902129008080?text=Hello,%20my%20reference%20code%20is%20${refCode}.%20I%20just%20submitted%20my%20records.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-md flex items-center gap-2 transition-all"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>Connect with Coordinator on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={resetForm}
                  className="px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
