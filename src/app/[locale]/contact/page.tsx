'use client';

import React, { useState } from 'react';
import { Link } from '@/navigation';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('All-on-4 / Full Arch Implants');
  const [patientData, setPatientData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'United Kingdom',
    arrivalMonth: 'Next 30 Days',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientData.fullName || !patientData.phone) return;

    const waText = encodeURIComponent(
      `Hello Dent Aktif International Patient Desk! I am submitting an inquiry via the official Contact page.\n\nName: ${patientData.fullName}\nCountry: ${patientData.country}\nTreatment: ${selectedTreatment}\nTravel Plan: ${patientData.arrivalMonth}\nPhone: ${patientData.phone}\nMessage: ${patientData.message || 'I would like to request a 3D preliminary treatment quote and consultation.'}`
    );
    window.open(`https://wa.me/905521617377?text=${waText}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <main className="w-full min-h-screen bg-[#FAFBFC] text-slate-800 pt-28 pb-20">
      {/* 1. Header & Breadcrumb Hero */}
      <section className="relative w-full bg-gradient-to-b from-[#1b0d52] via-[#211164] to-[#120733] text-white py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#2BA598_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#006972]/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-teal-300">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Contact &amp; International Concierge</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-teal-400/30 text-teal-200 text-xs font-bold font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Republic of Turkey Ministry of Health &amp; USHAŞ Authorized Center</span>
            <span className="text-white/40">•</span>
            <span>Cert No: 2026034015610080000425805</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl">
            Contact Our International Patient Care Team in Istanbul
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed font-normal">
            Connect directly with bilingual clinical coordinators, request a complimentary 3D CBCT treatment evaluation,
            or arrange your 5-day VIP hospital protocol including 5-star hotel accommodations and private Mercedes-Benz Vito transfers.
          </p>
        </div>
      </section>

      {/* 2. Official Health Tourism Authorization Certificate Banner (Regulatory Compliance) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Certificate Thumbnail & Preview Button */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start gap-3">
            <div
              onClick={() => setShowCertModal(true)}
              className="relative w-full max-w-[280px] rounded-2xl overflow-hidden border-2 border-teal-500/40 shadow-lg cursor-pointer group bg-slate-950 aspect-[4/3] flex items-center justify-center"
            >
              <img
                src="/images/health-tourism-certificate.png"
                alt="Republic of Turkey Ministry of Health International Health Tourism Authorization Certificate"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-bold text-white flex items-center gap-1.5 font-headline">
                  <span className="material-symbols-outlined text-teal-300 text-sm">zoom_in</span>
                  Click to View Full Certificate
                </span>
              </div>
            </div>
            <span className="text-[11px] font-mono text-slate-500">
              Official Seal of General Directorate of Health Services
            </span>
          </div>

          {/* Certificate Legal Details & Government Badges */}
          <div className="lg:col-span-8 space-y-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold font-mono">
                ✓ VERIFIED GOVERNMENT LICENSURE
              </span>
              <span className="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold font-mono">
                USHAŞ &amp; HEALTHTÜRKİYE ACCREDITED
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono">
                DECREE NO: 3359
              </span>
            </div>

            <h3 className="font-headline text-lg sm:text-xl font-black text-[#1b0d52]">
              Özel Dentaktif Ağız ve Diş Sağlığı Polikliniği
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              This institution has been authorized by the <strong>Republic of Turkey Ministry of Health - General Directorate of Health Services</strong> to
              conduct international health tourism activities in full compliance with the principles of the
              <em> Regulation on International Health Tourism and Tourist’s Health</em>.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono border-t border-slate-100">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">Certificate Number</span>
                <span className="font-bold text-slate-900 text-[11px] break-all">2026034015610080000425805</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">Document Barcode</span>
                <span className="font-bold text-emerald-700 text-xs">305180775</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">Issue Date</span>
                <span className="font-bold text-slate-900 text-xs">11.02.2026</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">Medical Director</span>
                <span className="font-bold text-slate-900 text-xs">Dt. Abdullah Ömür</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Grid: Contact Form & Channels & Physical Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (7 cols): Consultation & Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#006972] font-extrabold">
                Direct Patient Submission
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-black text-[#1b0d52] tracking-tight">
                Request a Free 3D Treatment Review
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Submit your details and dental history. Our surgical team and patient coordinator will analyze your case and provide an itemized quote within 2 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
                <div className="flex items-center gap-2 font-bold font-headline text-lg text-emerald-800">
                  <span className="material-symbols-outlined text-2xl text-emerald-600">check_circle</span>
                  Inquiry Received &amp; Redirected to WhatsApp
                </div>
                <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                  Thank you! Your patient records have been transmitted to our Chief Clinical Coordinator. You can also contact us immediately on WhatsApp (+90 552 161 73 77).
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={patientData.fullName}
                      onChange={(e) => setPatientData({ ...patientData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={patientData.email}
                      onChange={(e) => setPatientData({ ...patientData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp / Phone (with Country Code) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7123 456789"
                      value={patientData.phone}
                      onChange={(e) => setPatientData({ ...patientData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Country of Residence
                    </label>
                    <select
                      value={patientData.country}
                      onChange={(e) => setPatientData({ ...patientData, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                    >
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Germany">Germany / Deutschland</option>
                      <option value="United States">United States</option>
                      <option value="France">France</option>
                      <option value="Canada">Canada</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Other">Other International</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Procedure of Interest
                    </label>
                    <select
                      value={selectedTreatment}
                      onChange={(e) => setSelectedTreatment(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                    >
                      <option value="All-on-4 / Full Arch Implants">All-on-4 / Full Arch Implants (Straumann®)</option>
                      <option value="Hollywood Smile (E-Max Veneers)">Hollywood Smile (E-Max® Porcelain)</option>
                      <option value="Full Mouth Monolithic Zirconia">Monolithic Katana™ Zirconia Bridges</option>
                      <option value="Single / Multi Dental Implants">Single / Multi Dental Implants</option>
                      <option value="General Smile Renovation">General Smile Renovation &amp; Surgery</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Estimated Travel Timeline
                    </label>
                    <select
                      value={patientData.arrivalMonth}
                      onChange={(e) => setPatientData({ ...patientData, arrivalMonth: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                    >
                      <option value="Next 14 Days">Within 14 Days (Urgent)</option>
                      <option value="Next 30 Days">Within 30 Days</option>
                      <option value="1 to 3 Months">In 1 to 3 Months</option>
                      <option value="Planning Later">Just Exploring Options</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Dental Notes or Questions (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your current tooth condition, previous dental work, or specific requests..."
                    value={patientData.message}
                    onChange={(e) => setPatientData({ ...patientData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50/50"
                  />
                </div>

                <div className="p-3 rounded-xl bg-teal-50/80 border border-teal-200/80 flex items-start gap-2.5 text-xs text-teal-900">
                  <span className="material-symbols-outlined text-teal-600 text-lg shrink-0 mt-0.5">verified_user</span>
                  <div className="text-[11px] leading-relaxed">
                    <strong>256-Bit TLS &amp; EU GDPR Protected:</strong> Your diagnostic records are reviewed exclusively by registered dental surgeons under medical confidentiality. No spam.
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#211164] via-[#2d1980] to-[#006972] text-white font-headline font-bold text-sm shadow-lg hover:shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg text-teal-300">send</span>
                  <span>Transmit Inquiry to Medical Coordinator</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column (5 cols): Official Communication Channels & Location */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Desk */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md space-y-4">
              <h3 className="font-headline text-lg font-black text-[#1b0d52] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                24/7 International Contact Channels
              </h3>

              <div className="space-y-3 text-xs">
                {/* 1. Phone */}
                <a
                  href="tel:+902129008080"
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/70 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-700 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">phone</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Hospital Direct Hotline</span>
                    <span className="font-bold text-sm text-[#1b0d52] font-mono">+90 212 900 80 80</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">Bilingual operators (EN, DE, FR, RU)</span>
                  </div>
                </a>

                {/* 2. WhatsApp */}
                <a
                  href="https://wa.me/905521617377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200/80 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-800 font-bold uppercase block">Instant WhatsApp Doctor Desk</span>
                    <span className="font-bold text-sm text-emerald-900 font-mono">+90 552 161 73 77</span>
                    <span className="text-[10px] text-emerald-700 block mt-0.5">Direct photo &amp; panoramic X-ray chat</span>
                  </div>
                </a>

                {/* 3. Email */}
                <a
                  href="mailto:international@dentaktifglobal.com"
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/70 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-700 flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Clinical Inquiries &amp; CT Scans</span>
                    <span className="font-bold text-xs text-[#1b0d52] font-mono break-all">international@dentaktifglobal.com</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">Official digital case management</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Physical Address & Logistics */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md space-y-4">
              <h3 className="font-headline text-lg font-black text-[#1b0d52] flex items-center gap-2">
                <span className="material-symbols-outlined text-teal-600">location_on</span>
                Hospital Campus &amp; Arrival Logistics
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Registered Clinical Address</span>
                  <div className="font-bold text-slate-900">
                    Özel Dentaktif Ağız ve Diş Sağlığı Polikliniği
                  </div>
                  <div className="text-[11px] text-slate-600 leading-snug">
                    Cevatpaşa District, Eski Edirne Asfaltı St. No:407/409 A-1<br />
                    34045 Bayrampasa, Istanbul, Turkey
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">VIP Surgical &amp; Hotel Liaison Hub</span>
                  <div className="font-bold text-slate-900">
                    Dent Aktif International Suites
                  </div>
                  <div className="text-[11px] text-slate-600 leading-snug">
                    Buyukdere Ave. No: 173, Levent, Besiktas / Istanbul, Turkey
                  </div>
                </div>

                {/* Airport Transit Times */}
                <div className="grid grid-cols-2 gap-2 text-center pt-1 font-mono">
                  <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-900">
                    <span className="text-[10px] text-teal-700 block font-bold">Istanbul Airport (IST)</span>
                    <span className="font-bold text-xs">~28 Min Chauffeur</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-900">
                    <span className="text-[10px] text-teal-700 block font-bold">Sabiha Gökçen (SAW)</span>
                    <span className="font-bold text-xs">~45 Min Chauffeur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. State Incentive & Ministry Legal Compliance Notice Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-teal-300">
              <span className="material-symbols-outlined text-lg text-emerald-400">verified</span>
              <span>REGULATORY COMPLIANCE &amp; INCENTIVE FRAMEWORK</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              Ministry of Trade Decision No: 5448 • Ministry of Health Decree No: 3359
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div>
              <h4 className="font-bold text-white mb-1">International Patient Exclusivity</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Dent Aktif Global is an authorized cross-border health tourism entity. This portal operates strictly for international visitors; no domestic Turkish medical marketing or advertising is conducted on this domain.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Informed Consent &amp; Insurance</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                All dental interventions are preceded by a bilingual Informed Consent Protocol. Operating dental surgeons maintain statutory professional malpractice and medical liability insurance.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Medical Disclaimer</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Website content is provided for informational and logistical guidance only. Diagnostic confirmation and definitive treatment plans require clinical intraoral and 3D radiographic examination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {showCertModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <div>
                <h3 className="font-headline font-bold text-slate-900 text-base">
                  Republic of Turkey Ministry of Health Authorization Certificate
                </h3>
                <span className="text-xs font-mono text-slate-500">
                  Uluslararası Sağlık Turizmi Yetki Belgesi • No: 2026034015610080000425805
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowCertModal(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="w-full max-h-[75vh] overflow-auto rounded-xl border border-slate-200">
              <img
                src="/images/health-tourism-certificate.png"
                alt="Republic of Turkey Ministry of Health International Health Tourism Authorization Certificate"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="font-bold text-emerald-700 font-mono">Barcode: 305180775</span>
                <span>•</span>
                <span>Date: 11.02.2026</span>
              </div>
              <button
                type="button"
                onClick={() => setShowCertModal(false)}
                className="px-4 py-2 rounded-xl bg-[#1b0d52] hover:bg-[#281570] text-white text-xs font-bold"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
