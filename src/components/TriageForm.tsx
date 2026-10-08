'use client';

import React, { useState } from 'react';
import { compressDentalImage, OptimizedFile } from '@/lib/imageCompression';

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
    <section className="w-full py-20 bg-[#F0F4F7]/60 border-b border-slate-200" id="consultation-wizard">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="border border-slate-200 rounded-xl bg-white p-6 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Header */}
          <div className="border-b border-slate-100 pb-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
                  Online Clinical Triage
                </span>
                <h2 className="font-headline text-2xl font-extrabold text-primary mt-0.5">
                  Complimentary 3D X-Ray & Dental Record Upload
                </h2>
              </div>
              <div className="text-xs font-mono text-emerald-700 border border-emerald-200 px-3 py-1 rounded bg-emerald-50 flex items-center gap-1.5 self-start sm:self-center">
                <span className="material-symbols-outlined text-sm">lock</span>
                256-Bit SSL & GDPR Compliant
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-1.5">
              Submit your panoramic radiograph or smile photos. Our chief dental prosthodontist will evaluate your case
              within 24 hours with an itemized, binding medical estimate.
            </p>
          </div>

          {/* Step Indicators */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            <div
              onClick={() => setStep(1)}
              className={`text-center cursor-pointer pb-2 border-b-2 transition-all ${
                step === 1 ? 'border-primary' : 'border-slate-200'
              }`}
            >
              <span
                className={`font-mono text-xs ${
                  step === 1 ? 'font-bold text-primary' : 'font-medium text-slate-400'
                }`}
              >
                1. Treatment Type
              </span>
            </div>

            <div
              onClick={() => {
                if (step >= 2) setStep(2);
              }}
              className={`text-center cursor-pointer pb-2 border-b-2 transition-all ${
                step === 2 ? 'border-primary' : 'border-slate-200'
              }`}
            >
              <span
                className={`font-mono text-xs ${
                  step === 2 ? 'font-bold text-primary' : 'font-medium text-slate-400'
                }`}
              >
                2. Patient & Country
              </span>
            </div>

            <div
              onClick={() => {
                if (step >= 3) setStep(3);
              }}
              className={`text-center cursor-pointer pb-2 border-b-2 transition-all ${
                step === 3 ? 'border-primary' : 'border-slate-200'
              }`}
            >
              <span
                className={`font-mono text-xs ${
                  step === 3 ? 'font-bold text-primary' : 'font-medium text-slate-400'
                }`}
              >
                3. Records & Transmit
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* STEP 1: TREATMENT SELECTION */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`border p-3.5 rounded-lg cursor-pointer transition-colors block ${
                      formData.treatment_plan === 'hollywood_smile'
                        ? 'border-primary bg-primary/5'
                        : 'border-slate-200 bg-white hover:border-primary'
                    }`}
                  >
                    <input
                      type="radio"
                      name="treatment_plan"
                      value="hollywood_smile"
                      checked={formData.treatment_plan === 'hollywood_smile'}
                      onChange={(e) => setFormData({ ...formData, treatment_plan: e.target.value })}
                      className="text-primary focus:ring-0 mr-2"
                    />
                    <span className="font-bold text-xs uppercase tracking-wide text-primary">
                      Smile Makeover (E-Max Veneers)
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1">
                      16-20 porcelain laminates for natural aesthetic alignment and shade balance.
                    </p>
                  </label>

                  <label
                    className={`border p-3.5 rounded-lg cursor-pointer transition-colors block ${
                      formData.treatment_plan === 'all_on_4'
                        ? 'border-primary bg-primary/5'
                        : 'border-slate-200 bg-white hover:border-primary'
                    }`}
                  >
                    <input
                      type="radio"
                      name="treatment_plan"
                      value="all_on_4"
                      checked={formData.treatment_plan === 'all_on_4'}
                      onChange={(e) => setFormData({ ...formData, treatment_plan: e.target.value })}
                      className="text-primary focus:ring-0 mr-2"
                    />
                    <span className="font-bold text-xs uppercase tracking-wide text-primary">
                      All-on-4 / All-on-6 Implants
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Full-arch edentulism reconstruction with Swiss Straumann® implants.
                    </p>
                  </label>

                  <label
                    className={`border p-3.5 rounded-lg cursor-pointer transition-colors block ${
                      formData.treatment_plan === 'zirconia_crowns'
                        ? 'border-primary bg-primary/5'
                        : 'border-slate-200 bg-white hover:border-primary'
                    }`}
                  >
                    <input
                      type="radio"
                      name="treatment_plan"
                      value="zirconia_crowns"
                      checked={formData.treatment_plan === 'zirconia_crowns'}
                      onChange={(e) => setFormData({ ...formData, treatment_plan: e.target.value })}
                      className="text-primary focus:ring-0 mr-2"
                    />
                    <span className="font-bold text-xs uppercase tracking-wide text-primary">
                      Monolithic Zirconia Crowns
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1">
                      High-strength restoration for worn, broken, or heavily restored teeth.
                    </p>
                  </label>

                  <label
                    className={`border p-3.5 rounded-lg cursor-pointer transition-colors block ${
                      formData.treatment_plan === 'full_mouth'
                        ? 'border-primary bg-primary/5'
                        : 'border-slate-200 bg-white hover:border-primary'
                    }`}
                  >
                    <input
                      type="radio"
                      name="treatment_plan"
                      value="full_mouth"
                      checked={formData.treatment_plan === 'full_mouth'}
                      onChange={(e) => setFormData({ ...formData, treatment_plan: e.target.value })}
                      className="text-primary focus:ring-0 mr-2"
                    />
                    <span className="font-bold text-xs uppercase tracking-wide text-primary">
                      Comprehensive Oral Rehabilitation
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Combination of sinus augmentation, surgical implants, and aesthetic crowns.
                    </p>
                  </label>
                </div>

                <div className="flex justify-end pt-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-primary text-white hover:bg-opacity-95 transition-all"
                  >
                    Next: Contact Details →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: PATIENT & RESIDENCE INFO */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="font-mono text-[11px] uppercase font-bold text-slate-600">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Smith / Sarah Jenkins"
                      className="w-full h-10 px-3 text-xs border border-slate-300 rounded focus:border-primary focus:ring-0"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[11px] uppercase font-bold text-slate-600">
                      Country of Residence *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full h-10 px-3 text-xs border border-slate-300 rounded focus:border-primary focus:ring-0"
                    >
                      <option value="UK">United Kingdom</option>
                      <option value="US">United States / Canada</option>
                      <option value="DE">Germany / Austria / Switzerland</option>
                      <option value="FR">France / Belgium</option>
                      <option value="GCC">UAE / Saudi Arabia / Qatar / Kuwait</option>
                      <option value="Other">Other Country</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[11px] uppercase font-bold text-slate-600">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 7123 456789"
                      className="w-full h-10 px-3 text-xs border border-slate-300 rounded focus:border-primary focus:ring-0"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[11px] uppercase font-bold text-slate-600">
                      Estimated Travel Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full h-10 px-3 text-xs border border-slate-300 rounded focus:border-primary focus:ring-0"
                    >
                      <option>Within the next 30 days</option>
                      <option>In 1 - 2 months</option>
                      <option>In 3 - 6 months</option>
                      <option>Initial preliminary quote only</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 rounded text-xs font-semibold text-slate-500 hover:text-primary"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (!formData.fullName.trim() || !formData.phone.trim()) {
                        alert('Please fill out your name and phone number.');
                        return;
                      }
                      setStep(3);
                    }}
                    className="px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-primary text-white hover:bg-opacity-95 transition-all"
                  >
                    Next: Upload Dental Records →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: FILE UPLOAD & TRANSMISSION */}
            {step === 3 && (
              <div className="space-y-4">
                <label className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center bg-slate-50 cursor-pointer hover:border-primary transition-colors block">
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf,.dcm"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined text-3xl text-teal-600 mb-1">cloud_upload</span>
                    <span className="text-xs font-bold text-primary uppercase">
                      Attach Panoramic X-Ray or Smile Photos
                    </span>
                    <span className="text-[11px] text-slate-500 mt-0.5">
                      JPEG, PNG, DICOM or PDF (Max 25 MB) - Optional for initial quote
                    </span>
                  </div>
                </label>

                {isCompressing && (
                  <p className="text-xs text-amber-600 font-semibold animate-pulse">
                    Optimizing & compressing files client-side...
                  </p>
                )}

                {/* Uploaded Files */}
                {files.length > 0 && (
                  <div className="space-y-2">
                    {files.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded border border-emerald-300 bg-emerald-50 text-emerald-900 text-xs"
                      >
                        <span className="font-mono font-semibold">{file.originalName}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="text-rose-600 hover:underline font-bold"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* VIP Travel Inclusion Checkbox */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.includeHotel}
                      onChange={(e) => setFormData({ ...formData, includeHotel: e.target.checked })}
                      className="text-primary focus:ring-0 rounded"
                    />
                    <span className="font-semibold text-slate-800">
                      Include 5-Star Boutique Partner Hotel & VIP Airport Chauffeur in proposal
                    </span>
                  </label>
                  <p className="text-[11px] text-slate-500 pl-6">
                    Full concierge and hospital transfer logistics will be bundled directly into your itemized quote.
                  </p>
                </div>

                {/* GDPR Compliance Legal Notice */}
                <div className="text-[11px] text-slate-500 border border-slate-200 rounded p-2.5 bg-white space-y-1">
                  <div className="flex items-center gap-1 font-semibold text-slate-700">
                    <span className="material-symbols-outlined text-teal-600 text-sm">shield</span>
                    <span>GDPR (EU 2016/679) & KVKK No. 6698 Medical Data Notice</span>
                  </div>
                  <p className="leading-relaxed">
                    Medical records submitted are transferred via 256-bit encrypted channels and solely evaluated by
                    licensed healthcare professionals for diagnostic planning. No commercial sharing or unconsented
                    dissemination.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 rounded text-xs font-semibold text-slate-500 hover:text-primary"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 rounded text-xs font-extrabold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? 'Transmitting...' : 'Transmit Records & Request Triage'}
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* SUCCESS CONFIRMATION OVERLAY */}
          {showSuccess && (
            <div className="absolute inset-0 z-50 bg-white/98 rounded-xl p-8 flex flex-col items-center justify-center text-center animate-in fade-in duration-200">
              <span className="material-symbols-outlined text-5xl text-emerald-600 mb-2">check_circle</span>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 font-bold">
                Transmission Confirmed • Reference #{refCode}
              </span>
              <h3 className="font-headline text-2xl font-bold text-primary mt-1 mb-2">
                Medical Records Received Successfully
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
                Thank you, <strong className="text-primary font-semibold">{formData.fullName || 'Patient'}</strong>.
                Our Chief Surgical Prosthodontist and International Coordination Desk are reviewing your case. Your
                itemized treatment plan will be forwarded to your WhatsApp within 24 hours.
              </p>
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-primary text-white hover:bg-opacity-95"
              >
                Submit Another Inquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
