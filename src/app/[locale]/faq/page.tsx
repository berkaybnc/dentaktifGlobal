'use client';

import React, { useState, useMemo } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';
import { getFaqData } from '@/data/faqData';

export default function FaqPage() {
  const locale = useLocale();
  const { faqs, categories, ui } = getFaqData(locale);

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
    faqs.forEach((item) => {
      all[item.id] = true;
    });
    setOpenIds(all);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.categoryLabel.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen pb-24">
      {/* 1. Page Header & Prestige Badge */}
      <section className="relative bg-gradient-to-b from-white via-[#F0F4F7]/60 to-[#FAFBFC] border-b border-slate-200 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold shadow-xs">
            <span className="material-symbols-outlined text-[16px] text-teal-600">help_center</span>
            <span>{ui.badgeText}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-mono">{ui.countBadge}</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b0d52] tracking-tight">
            {ui.title}
          </h1>

          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {ui.description}
          </p>

          {/* Breadcrumb */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-[#211164] transition-colors">
              {ui.breadcrumbHome}
            </Link>
            <span>/</span>
            <span className="text-[#1b0d52] font-bold">{ui.breadcrumbCurrent}</span>
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
                placeholder={ui.searchPlaceholder}
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
            {categories.map((cat) => (
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
              {ui.expandAll}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={collapseAll}
              className="hover:text-[#211164] transition-colors underline"
            >
              {ui.collapseAll}
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="py-4 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>
            {ui.showing} {filteredFaqs.length} {ui.of} {faqs.length} {ui.answers}
          </span>
          {searchQuery && (
            <span>
              {ui.filteredBy} "{searchQuery}"
            </span>
          )}
        </div>

        {/* 3. Comprehensive FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
              <span className="material-symbols-outlined text-4xl text-slate-400">search_off</span>
              <h3 className="font-headline text-lg font-bold text-slate-800">
                {ui.notFoundTitle}
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                {ui.notFoundDesc}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#211164] text-white font-bold text-xs shadow-md hover:bg-opacity-90 transition-colors"
              >
                {ui.contactDesk}
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
                          {ui.verifiedStandard}
                        </span>
                        <Link
                          href="/contact"
                          className="text-[#211164] font-bold hover:underline"
                        >
                          {ui.contactUs}
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
              {ui.ctaBadge}
            </span>
            <h3 className="font-headline text-xl sm:text-2xl font-black">
              {ui.ctaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              {ui.ctaDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/#consultation-wizard"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#211164] font-extrabold text-xs uppercase tracking-wider shadow-md hover:bg-slate-100 transition-all text-center"
            >
              {ui.ctaBtnPlan}
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all text-center"
            >
              {ui.ctaBtnContact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
