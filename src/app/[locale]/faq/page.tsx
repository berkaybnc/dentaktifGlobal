'use client';

import React, { useState, useMemo } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';

interface FaqItem {
  id: string;
  category: 'surgery' | 'aesthetic' | 'travel' | 'pricing' | 'warranty' | 'general';
  categoryLabel: string;
  question: string;
  answer: string;
}

const COMPREHENSIVE_FAQS: FaqItem[] = [
  {
    id: 'stay-duration',
    category: 'travel',
    categoryLabel: 'Travel & Logistics',
    question: 'How many days do I need to stay in Istanbul for my treatment?',
    answer:
      'For aesthetic smile makeovers (E-Max® veneers or monolithic zirconia crowns), a 5-day stay is standard. Thanks to our in-house German CAD/CAM milling laboratory, design, chairside trial fittings, and permanent cementation are completed on-site without external laboratory delays. For immediate-load Straumann® All-on-4 or All-on-6 implants, your aesthetic temporary fixed teeth are delivered within 48 to 72 hours during your first 5-day visit.',
  },
  {
    id: 'pain-anesthesia',
    category: 'surgery',
    categoryLabel: 'Implants & Surgery',
    question: 'Is dental implant surgery or veneer preparation painful?',
    answer:
      'No. All surgical and restorative procedures are performed under advanced computerized painless local anesthesia (painless Wand® micro-delivery) ensuring absolute numbness. For anxious patients or extensive full-mouth surgical rehabilitations, conscious IV sedation or general anesthesia is administered by licensed hospital anesthesiologists. Patients experience minimal discomfort and return to their hotel the same afternoon.',
  },
  {
    id: 'material-authenticity',
    category: 'aesthetic',
    categoryLabel: 'Smile & Materials',
    question: 'Are the materials genuine Swiss Straumann® and Ivoclar Vivadent E-Max®?',
    answer:
      'Yes, 100%. We exclusively use authentic Swiss Straumann® Roxolid and SLActive implants and genuine Liechtenstein Ivoclar Vivadent E-Max® ingots. Every patient receives an official manufacturer implant passport and holographic warranty card with registered batch serial numbers, verifiable worldwide through Straumann and Ivoclar international registers.',
  },
  {
    id: 'cost-difference',
    category: 'pricing',
    categoryLabel: 'Cost & Savings',
    question: 'Why are Dent Aktif prices up to 70% lower than private clinics in the UK, Germany, or the US?',
    answer:
      'Our hospital eliminates commercial third-party intermediaries and external dental laboratory commissions by fabricating every restoration in our own on-site CAD/CAM ceramic suite. In addition, lower clinical operational overheads in Turkey and official Ministry of Health International Medical Tourism framework incentives (Decree No. 5448) enable us to pass direct hospital savings to international patients without compromising clinical grade.',
  },
  {
    id: 'all-inclusive-inclusions',
    category: 'travel',
    categoryLabel: 'Travel & Logistics',
    question: 'What exactly is included in the All-Inclusive Hospital Care Package?',
    answer:
      'Our all-inclusive package covers everything required for your medical journey: 5 nights in a luxury 5-star Levent partner hotel, private chauffeured Mercedes-Benz Vito airport and clinic transfers, comprehensive 3D CBCT tomography diagnostics, chairside Master Ceramist try-ins, dedicated native language medical interpreters, and complete post-operative medication kits. There are zero hidden clinic fees.',
  },
  {
    id: 'free-quote-xray',
    category: 'general',
    categoryLabel: 'Consultation & Triage',
    question: 'How do I obtain a preliminary diagnosis and quote before booking my flights?',
    answer:
      'Simply upload your panoramic dental X-ray (OPG), 3D CBCT scan, or sharp smartphone photos of your smile using our secure triage portal or send them directly via WhatsApp. Our Chief Oral Surgeon and Prosthodontic Faculty will review your radiographs and provide an itemized, binding treatment plan and exact schedule within 4 to 12 hours.',
  },
  {
    id: 'cross-border-guarantee',
    category: 'warranty',
    categoryLabel: 'Warranty & Follow-up',
    question: 'What happens if I experience any sensitivity or issue after returning home?',
    answer:
      'Our international care does not end when you board your flight. You receive direct access to our Teledentistry Follow-up Desk with scheduled check-ins at 1, 3, 6, and 12 months. In the rare event of mechanical complications, our Lifetime Implant Warranty and 10-Year Porcelain Guarantee cover free revisions at our hospital or through our collaborative partner dental centers in key European hubs.',
  },
  {
    id: 'bone-loss-implants',
    category: 'surgery',
    categoryLabel: 'Implants & Surgery',
    question: 'Can I get dental implants if I have severe jawbone loss or osteoporosis?',
    answer:
      'Yes. Our oral and maxillofacial surgeons perform advanced 3D-guided sinus lifts and bone grafting with Swiss Geistlich Bio-Oss® matrix. For patients with extreme posterior jawbone atrophy, we utilize tilted implants (All-on-4 / All-on-6 protocols) or zygomatic implants anchored in the cheekbone, completely eliminating the need for prolonged hospital bone hip grafting.',
  },
  {
    id: 'immediate-teeth',
    category: 'surgery',
    categoryLabel: 'Implants & Surgery',
    question: 'Will I be left without teeth at any point during my implant treatment?',
    answer:
      'Never. Under our immediate-loading surgical protocol, temporary fixed aesthetic acrylic bridges are custom-milled and secured to your implants within 48 to 72 hours of surgery. You will board your return flight home with fully functional, natural-looking teeth while osseointegration occurs.',
  },
  {
    id: 'emax-vs-zirconia',
    category: 'aesthetic',
    categoryLabel: 'Smile & Materials',
    question: 'What is the difference between E-Max® veneers and Monolithic Zirconia crowns?',
    answer:
      'E-Max® (lithium disilicate glass ceramic) provides the highest optical translucency, mimicking natural enamel tooth reflection, making it the gold standard for front aesthetic smile makeovers. Monolithic Zirconia (Katana™) offers extraordinary 1200+ MPa fracture resistance, making it ideal for molars, full-arch bridges, and patients with teeth grinding (bruxism). Our ceramists often blend both materials for optimal harmony.',
  },
  {
    id: 'companion-travel',
    category: 'travel',
    categoryLabel: 'Travel & Logistics',
    question: 'Can a companion or family member travel and stay with me in Istanbul?',
    answer:
      'Yes, absolutely. Your companion stays with you in your 5-star hotel double room at no extra charge. Our private Mercedes-Benz Vito airport and clinic transfers accommodate both of you with complete luggage capacity. Our concierge can also arrange sightseeing tours in Istanbul between your clinical appointments.',
  },
  {
    id: 'payment-methods',
    category: 'pricing',
    categoryLabel: 'Cost & Savings',
    question: 'What payment methods and currencies do you accept?',
    answer:
      'We accept British Pounds (GBP £), Euros (EUR €), US Dollars (USD $), and Turkish Lira (TRY ₺). Payments can be made via major credit and debit cards (Visa, MasterCard), international SEPA/SWIFT bank wire transfers, or cash upon arrival at the hospital billing desk. We provide formal itemized medical invoices for private dental insurance reimbursement.',
  },
  {
    id: 'airport-protocol',
    category: 'travel',
    categoryLabel: 'Travel & Logistics',
    question: 'How do the VIP airport pickup and hospital transfers work?',
    answer:
      'Upon landing at Istanbul Airport (IST) or Sabiha Gökçen Airport (SAW), our bilingual private chauffeur greets you outside customs with a personalized name sign. You are escorted to a private, climate-controlled Mercedes-Benz Vito and chauffeured directly to your 5-star hotel. All clinic transit trips are pre-scheduled seamlessly with your personal patient coordinator.',
  },
  {
    id: 'veneer-shave-down',
    category: 'aesthetic',
    categoryLabel: 'Smile & Materials',
    question: 'Do you shave my natural teeth into tiny pegs for veneers?',
    answer:
      'No. We adhere to conservative, minimally invasive preparation protocols. Authentic E-Max® laminate veneers require only 0.3mm to 0.5mm micro-conditioning of the outer enamel—never aggressive "shark teeth" filing. We preserve maximum natural tooth vitality, nerve structures, and long-term biological tooth health.',
  },
  {
    id: 'hospital-credentials',
    category: 'warranty',
    categoryLabel: 'Warranty & Follow-up',
    question: 'Is Dent Aktif officially licensed by the Republic of Turkey Ministry of Health?',
    answer:
      'Yes. Dent Aktif is an officially accredited International Health Tourism Center licensed by the Republic of Turkey Ministry of Health under authorization certificate no. 2026034015610080000425805 (Document Barcode: 305180775) in partnership with USHAŞ & HealthTürkiye. Our clinical facilities undergo regular regulatory hygiene, sterilization, and equipment audits by the Directorate General of Health Services.',
  },
  {
    id: 'smoking-alcohol',
    category: 'general',
    categoryLabel: 'Consultation & Triage',
    question: 'Can I smoke or drink alcohol during and after surgical dental treatment?',
    answer:
      'We strongly recommend abstaining from smoking for at least 72 hours before and 7 days after implant surgery, as nicotine constricts micro-vascular blood vessels and impedes bone osseointegration. Alcohol should be avoided while taking prescribed antibiotic and anti-inflammatory medications.',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'surgery', label: '⚙️ Implants & Surgery' },
  { id: 'aesthetic', label: '✨ Smile & Materials' },
  { id: 'travel', label: '✈️ Travel & 5-Star Hotel' },
  { id: 'pricing', label: '💳 Costs & Payments' },
  { id: 'warranty', label: '🛡️ Guarantees & Follow-up' },
  { id: 'general', label: '📋 Consultation & Triage' },
];

export default function FaqPage() {
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'stay-duration': true,
    'pain-anesthesia': true,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    COMPREHENSIVE_FAQS.forEach((item) => {
      all[item.id] = true;
    });
    setOpenIds(all);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  const filteredFaqs = useMemo(() => {
    return COMPREHENSIVE_FAQS.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.categoryLabel.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen pb-24">
      {/* 1. Page Header & Prestige Badge */}
      <section className="relative bg-gradient-to-b from-white via-[#F0F4F7]/60 to-[#FAFBFC] border-b border-slate-200 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold shadow-xs">
            <span className="material-symbols-outlined text-[16px] text-teal-600">help_center</span>
            <span>Official Patient Knowledge Base</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-mono">16+ Verified Clinical Guides</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b0d52] tracking-tight">
            Frequently Asked Questions & Patient Guide
          </h1>

          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our 5-day treatment timeline, Swiss Straumann® implants, E-Max® veneers,
            hotel logistics, and international warranty protocols.
          </p>

          {/* Breadcrumb */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-[#211164] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#1b0d52] font-bold">Frequently Asked Questions</span>
          </div>

          {/* Search Box */}
          <div className="pt-6 max-w-xl mx-auto">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. implants, hotel, pain, warranty, prices)..."
                className="w-full pl-12 pr-10 py-3.5 bg-white rounded-2xl border border-slate-300 shadow-sm focus:border-[#211164] focus:ring-2 focus:ring-[#211164]/20 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Tabs & Controls */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-slate-200">
          {/* Category Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-[#1b0d52] text-white border-[#1b0d52] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Expand/Collapse Controls */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <button
              type="button"
              onClick={expandAll}
              className="hover:text-[#211164] transition-colors underline"
            >
              Expand All
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={collapseAll}
              className="hover:text-[#211164] transition-colors underline"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="py-4 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Showing {filteredFaqs.length} of {COMPREHENSIVE_FAQS.length} answers</span>
          {searchQuery && (
            <span>Filtered by "{searchQuery}"</span>
          )}
        </div>

        {/* 3. Comprehensive FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
              <span className="material-symbols-outlined text-4xl text-slate-400">search_off</span>
              <h3 className="font-headline text-lg font-bold text-slate-800">
                No matching questions found
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                We couldn't find an answer matching your query. Our International Patient Coordinator is online 24/7 on WhatsApp to assist you directly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#211164] text-white font-bold text-xs shadow-md hover:bg-opacity-90 transition-colors"
              >
                Contact Our Patient Desk
              </Link>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#211164]/30 bg-white shadow-md shadow-[#211164]/5'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1.5 pr-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 px-2 py-0.5 rounded bg-teal-50 inline-block">
                        {faq.categoryLabel}
                      </span>
                      <h3 className="font-headline text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 mt-1 ${
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
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs">
                        <span className="text-emerald-700 font-bold flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">verified</span>
                          Verified Medical Standard • Dent Aktif Hospital
                        </span>
                        <Link
                          href="/contact"
                          className="text-[#211164] font-bold hover:underline"
                        >
                          Have a question? Contact us →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* 4. Bottom Consultation & Triage Card */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#211164] via-[#281570] to-[#006972] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-300">
              Personalized Medical Review
            </span>
            <h3 className="font-headline text-xl sm:text-2xl font-black">
              Do you have a question about your specific smile?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              Send your dental X-rays or smile photos for a binding, itemized treatment proposal from our Chief Oral Surgeons within 4 to 12 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/#consultation-wizard"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#211164] font-extrabold text-xs uppercase tracking-wider shadow-md hover:bg-slate-100 transition-all text-center"
            >
              Upload X-Ray / Free Plan
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all text-center"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
