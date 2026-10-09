'use client';

import React from 'react';

interface Testimonial {
  name: string;
  location: string;
  flag: string;
  treatment: string;
  date: string;
  quote: string;
  verifiedSource: string;
  rating: number;
  highlight: string;
}

const REVIEWS: Testimonial[] = [
  {
    name: 'James Wilson',
    location: 'Manchester, United Kingdom',
    flag: '🇬🇧',
    treatment: '20 Ivoclar E-Max® Veneers (BL1)',
    date: 'Verified Patient • Treated Feb 2025',
    quote:
      '“I was quoted over £17,500 by three private clinics in the UK for a full set of porcelain veneers. At Dent Aktif in Levent, my entire package with 5-star hotel and private chauffeur was £4,250. The master ceramist in their on-site lab crafted each tooth to perfection. The results look completely natural with lifelike translucency.”',
    verifiedSource: 'Trustpilot Verified Review',
    rating: 5,
    highlight: 'Saved ~£13,200 with 5-star luxury care',
  },
  {
    name: 'Anke Becker',
    location: 'Frankfurt, Germany',
    flag: '🇩🇪',
    treatment: 'Swiss Straumann® All-on-6 Rehabilitation',
    date: 'Verified Patient • Treated Jan 2025',
    quote:
      '“German precision right in Istanbul. Having original Swiss Straumann implants with official guarantee passports gave me complete confidence. The surgery was 100% painless thanks to computer-guided digital templates. Dt. Abdullah Ömür and the multilingual team made me feel safe throughout my 5-day journey.”',
    verifiedSource: 'Google Healthcare Verified',
    rating: 5,
    highlight: 'Full chewing strength restored in 5 days',
  },
  {
    name: 'Laurent Dubois',
    location: 'Lyon, France',
    flag: '🇫🇷',
    treatment: '16 Units Katana™ Monolithic Zirconia',
    date: 'Verified Patient • Treated March 2025',
    quote:
      '“L’accueil était exceptionnel du premier jour jusqu’au départ. La clinique est ultra-moderne, les scanners 3D sont impressionnants, et le chauffeur VIP Mercedes nous a conduits partout sans stress. Je recommande Dent Aktif à tous mes amis en France.”',
    verifiedSource: 'Trustpilot Verified Review',
    rating: 5,
    highlight: 'Exceptionnelle clinique & résultat parfait',
  },
  {
    name: 'Emily Campbell',
    location: 'Dublin, Ireland',
    flag: '🇮🇪',
    treatment: 'Hollywood Smile & Laser Gingivectomy',
    date: 'Verified Patient • Treated Nov 2024',
    quote:
      '“I was terrified of dentists for years, but the painless anesthesia and the gentle care of the surgical team completely eliminated my anxiety. My smile looks like something out of a magazine, but it feels like my real natural teeth. Best decision I have ever made.”',
    verifiedSource: 'Trustpilot Verified Review',
    rating: 5,
    highlight: 'Zero pain and life-changing smile confidence',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 bg-[#F0F4F7]/60 border-b border-slate-200" id="patient-reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
            <span className="material-symbols-outlined text-[16px] text-amber-500">star</span>
            <span>Trustpilot ★ 4.9 / 5.0 • 2,400+ Verified International Patient Stories</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-[#211164] tracking-tight">
            Real Patient Experiences & Verified Outcomes
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Read direct clinical feedback from patients who travelled from the UK, Germany, France, Ireland, and across
            Europe to complete their smile rehabilitation at Dent Aktif Hospital.
          </p>
        </div>

        {/* Grid of Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-[#211164] hover:shadow-premium-hover transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Rating stars & flag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-xl" title={review.location}>
                    {review.flag}
                  </span>
                </div>

                {/* Treatment Badge */}
                <div className="inline-block px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200/60 text-[11px] font-bold text-teal-800">
                  {review.treatment}
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  {review.quote}
                </p>
              </div>

              {/* Patient Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-headline text-xs font-bold text-slate-900">
                    {review.name}
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[13px]">verified</span>
                    Verified
                  </span>
                </div>
                <div className="text-[10px] text-slate-400">
                  {review.location}
                </div>
                <div className="text-[10px] font-semibold text-secondary pt-0.5">
                  {review.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-around gap-4 text-xs font-bold text-slate-600">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">verified</span>
            <span>100% Genuine Manufacturer Passports</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">hotel</span>
            <span>5-Star Levent Hotel Accommodations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">airport_shuttle</span>
            <span>VIP Mercedes Vito Transfers Included</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">support_agent</span>
            <span>Lifetime Cross-Border Follow-up Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
