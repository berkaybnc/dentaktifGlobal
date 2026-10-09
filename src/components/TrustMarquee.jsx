import React from 'react';

export default function TrustMarquee() {
  const trustBadges = [
    { title: "Ministry of Health & USHAŞ", detail: "Licensed Health Tourism Hospital" },
    { title: "Swiss Straumann® Platinum", detail: "Official Surgical Partner" },
    { title: "ISO 9001:2015 Certified", detail: "International Quality Standards" },
    { title: "Ivoclar Vivadent® E-Max", detail: "Certified Master Ceramist Lab" },
    { title: "Trustpilot 4.9 / 5.0", detail: "2,400+ Verified Patient Reviews" },
    { title: "Lifetime Manufacturer Warranty", detail: "Official Passport & Barcode" }
  ];

  const renderItems = (items) => items.map((item, idx) => (
    <div key={idx} className="flex items-center gap-3 px-6 py-2 border-r border-slate-200/60 last:border-r-0">
      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
      <div>
        <strong className="block text-xs font-bold text-slate-800 whitespace-nowrap">{item.title}</strong>
        <span className="text-[11px] text-slate-500 whitespace-nowrap block">{item.detail}</span>
      </div>
    </div>
  ));

  return (
    <section className="py-4 bg-[#FAFBFC] border-y border-slate-200 overflow-hidden">
      <div className="marquee-container flex">
        <div className="marquee-track flex shrink-0 items-center">
          {renderItems(trustBadges)}
          {renderItems(trustBadges)}
        </div>
      </div>
    </section>
  );
}
