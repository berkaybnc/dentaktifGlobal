'use client';

import React, { useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    id: 'stay-duration',
    category: 'Travel & Schedule',
    question: 'How many days do I need to stay in Istanbul for a complete treatment?',
    answer:
      'For aesthetic smile makeovers (E-Max® veneers or monolithic zirconia crowns), a 5-day stay is standard. Thanks to our in-house German CAD/CAM milling laboratory, we complete design, chairside trial fitting, and permanent cementation on-site without external laboratory delays. For immediate-load Straumann® All-on-4 or All-on-6 implants, your temporary fixed teeth are placed within 48 to 72 hours during your first 5-day visit.',
  },
  {
    id: 'pain-anesthesia',
    category: 'Clinical & Comfort',
    question: 'Is dental implant surgery or veneer preparation painful?',
    answer:
      'No. All surgical and restorative procedures are performed under advanced computerized painless local anesthesia (painless Wand® micro-delivery) ensuring absolute numbness. For anxious patients or extensive full-mouth surgical rehabilitations, conscious IV sedation is administered by licensed hospital anesthesiologists. Patients experience minimal discomfort and return to their hotel the same afternoon.',
  },
  {
    id: 'material-authenticity',
    category: 'Quality & Materials',
    question: 'Are the materials genuine Swiss Straumann® and Ivoclar Vivadent E-Max®?',
    answer:
      'Yes, 100%. We exclusively use authentic Swiss Straumann® Roxolid and SLAactive implants and genuine Liechtenstein Ivoclar Vivadent E-Max® ingots. Every patient receives an official manufacturer implant passport and holographic warranty card with registered batch serial numbers, verifiable worldwide through Straumann and Ivoclar international registers.',
  },
  {
    id: 'cost-difference',
    category: 'Pricing & Value',
    question: 'Why are Dent Aktif prices up to 70% lower than private clinics in the UK, Germany, or the US?',
    answer:
      'Our hospital eliminates commercial third-party intermediaries and external dental laboratory commissions by fabricating every restoration in our own on-site CAD/CAM ceramic suite. In addition, lower clinical operational overheads in Turkey and official Ministry of Health International Medical Tourism framework incentives (Decree No. 5448) enable us to pass direct hospital savings to international patients without compromising clinical grade.',
  },
  {
    id: 'cross-border-guarantee',
    category: 'Warranty & Follow-up',
    question: 'What happens if I experience any sensitivity or issue after returning home?',
    answer:
      'Our international care does not end when you board your flight. You receive direct access to our Teledentistry Follow-up Desk with scheduled check-ins at 1, 3, 6, and 12 months. In the rare event of mechanical complications, our Lifetime Implant Warranty and 10-Year Porcelain Guarantee cover free revisions at our hospital or through our collaborative partner dental centers in key European hubs.',
  },
  {
    id: 'all-inclusive-inclusions',
    category: 'Hospital Logistics',
    question: 'What exactly is included in the All-Inclusive Hospital Care Package?',
    answer:
      'Our all-inclusive package covers everything required for your medical journey: 5 nights in a luxury 5-star Levent partner hotel, private chauffeured Mercedes-Benz Vito airport and clinic transfers, comprehensive 3D CBCT tomography diagnostics, chairside Master Ceramist try-ins, dedicated native language medical interpreters, and complete post-operative medication kits. There are zero hidden clinic fees.',
  },
  {
    id: 'free-quote-xray',
    category: 'Pre-Travel Triage',
    question: 'How do I obtain a preliminary diagnosis and quote before booking my flights?',
    answer:
      'Simply upload your panoramic dental X-ray (OPG), 3D CBCT scan, or sharp smartphone photos of your smile using our secure triage portal below or send them directly via WhatsApp. Our Chief Oral Surgeon and Prosthodontic Faculty will review your radiographs and provide an itemized, binding treatment plan and exact schedule within 4 to 12 hours.',
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string>('stay-duration');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section className="w-full py-20 bg-white border-b border-slate-200" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-secondary font-extrabold bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
            Clinical Transparency & Patient Guidance
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#211164] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Essential answers regarding our 5-day hospital protocol, painless anesthesia, genuine Swiss Straumann® implants,
            warranty passports, and transparent package inclusions.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#211164]/30 bg-[#FAFBFC] shadow-md shadow-[#211164]/5'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-secondary">
                      {faq.category}
                    </span>
                    <h3 className="font-headline text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#211164] text-white rotate-180'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between flex-wrap gap-2 text-xs">
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        Verified by Hospital Medical Board
                      </span>
                      <a
                        href="https://wa.me/902129008080"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#211164] font-bold hover:underline flex items-center gap-1"
                      >
                        <span>Still have questions? Chat with our doctor</span>
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#211164] to-[#006972] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
          <div>
            <h4 className="font-headline text-base font-extrabold text-white">
              Have specific questions about your dental case?
            </h4>
            <p className="text-xs text-teal-100 mt-1">
              Send your X-rays directly to our Chief Prosthodontist for an immediate personalized review.
            </p>
          </div>
          <a
            href="#consultation-wizard"
            className="shrink-0 px-5 py-3 rounded-xl bg-white text-[#211164] hover:bg-slate-100 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
          >
            Request Free Case Review
          </a>
        </div>
      </div>
    </section>
  );
}
