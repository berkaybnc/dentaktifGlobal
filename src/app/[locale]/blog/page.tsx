'use client';

import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';
import { BLOG_POSTS, INSTAGRAM_REELS, BlogPost, InstagramReel } from '@/data/blogData';
import InstagramVideoCard from '@/components/InstagramVideoCard';

export default function BlogMediaPage() {
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<'all' | 'articles' | 'videos'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [reels, setReels] = useState<InstagramReel[]>(INSTAGRAM_REELS);

  // Auto-fetch live 4 latest posts/reels from Instagram Graph API
  useEffect(() => {
    let isMounted = true;
    fetch('/api/instagram?limit=4')
      .then((res) => res.json())
      .then((resData) => {
        if (isMounted && resData.success && Array.isArray(resData.data) && resData.data.length > 0) {
          setReels(resData.data);
        }
      })
      .catch((err) => {
        console.warn('Live Instagram fetch fallback to static:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Localization labels
  const UI_TEXT: Record<string, Record<string, string>> = {
    badge: {
      en: 'Clinical Journal & Video Hub',
      tr: 'Klinik Bülten & Video Merkezi',
      de: 'Klinikjournal & Video-Hub',
      ru: 'Клинический журнал и видеогалерея',
      fr: 'Journal Clinique & Vidéos',
      ar: 'المجلة الطبية وقسم الفيديو التفاعلي',
    },
    title: {
      en: 'Dental Tourism Insights & Video Library',
      tr: 'Sağlık Turizmi Rehberi & Video Kütüphanesi',
      de: 'Zahntourismus-Wissen & Videothek',
      ru: 'Стоматологический туризм и видеотека',
      fr: 'Guides de Tourisme Dentaire & Vidéos',
      ar: 'دليل سياحة الأسنان والمكتبة المرئية',
    },
    subtitle: {
      en: 'Discover doctor advice, clinical treatment analyses, and patient transformation reels from Dent Aktif Clinic Global.',
      tr: 'Hekim önerileri, klinik vaka analizleri ve Dent Aktif Global hastalarının dönüşüm videolarını keşfedin.',
      de: 'Fachartikel unserer Chefärzte und Instagram-Reels zu Smile Makeover Verwandlungen in Istanbul.',
      ru: 'Статьи ведущих хирургов и видео трансформаций улыбок пациентов прямо из Стамбула.',
      fr: 'Conseils chirurgicaux et vidéos de transformation de nos patients à Istanbul.',
      ar: 'مقالات طبية متخصصة وفيديوهات تحول الابتسامة الواقعية مباشرة من إنستغرام المستشفى في إسطنبول.',
    },
    tabAll: { en: 'All Media', tr: 'Tüm İçerikler', de: 'Alle Medien', ru: 'Все материалы', fr: 'Tous les médias', ar: 'كافة المحتويات' },
    tabArticles: { en: 'Articles & Guides', tr: 'Makaleler & Rehberler', de: 'Fachartikel', ru: 'Статьи и гайды', fr: 'Articles & Guides', ar: 'المقالات والأدلة' },
    tabVideos: { en: 'Instagram Reels', tr: 'Instagram Reels', de: 'Instagram Videos', ru: 'Instagram Reels', fr: 'Vidéos Instagram', ar: 'فيديوهات إنستغرام' },
    watchReelsTitle: {
      en: 'Dent Aktif on Instagram Reels',
      tr: 'Dent Aktif Instagram Reels Videoları',
      de: 'Dent Aktif auf Instagram Reels',
      ru: 'Dent Aktif в Instagram Reels',
      fr: 'Dent Aktif sur Instagram Reels',
      ar: 'مستشفى دنت أكتيف على إنستغرام ريلز',
    },
    watchReelsDesc: {
      en: 'Short-form surgery overviews, laboratory tours, and genuine patient reactions.',
      tr: 'Kısa operasyon özetleri, laboratuvar çekimleri ve gerçek hasta değerlendirmeleri.',
      de: 'Kurzvideos: Einblicke in Behandlungen, Labor und echte Patientenstimmen.',
      ru: 'Короткие видео: процессы операций, экскурсии в лабораторию и отзывы.',
      fr: 'Visites de laboratoire, explications chirurgicales et réactions de patients.',
      ar: 'جولات حصرية في المختبر، وشرح تفصيلي للعمليات وانطباعات المرضى القادمين من الخارج.',
    },
    followInstagram: {
      en: 'Follow @dentaktifglobal',
      tr: '@dentaktifglobal Takip Et',
      de: '@dentaktifglobal folgen',
      ru: 'Подписаться @dentaktifglobal',
      fr: 'Suivre @dentaktifglobal',
      ar: 'متابعة @dentaktifglobal',
    },
    readArticle: { en: 'Read Full Analysis', tr: 'Detaylı İncele', de: 'Vollständigen Artikel lesen', ru: 'Читать статью', fr: 'Lire l\'article complet', ar: 'قراءة المقال كاملاً' },
    backToArticles: { en: 'Back to Media Hub', tr: 'Medyaya Geri Dön', de: 'Zurück zur Übersicht', ru: 'Назад к статьям', fr: 'Retour aux médias', ar: 'العودة للمقالات' },
    searchPlaceholder: { en: 'Search treatments, implants, veneers...', tr: 'Tedaviler, implantlar, zirkonyum veya lamine ara...', de: 'Suchen nach Implantaten, Veneers...', ru: 'Поиск по статьям и видео...', fr: 'Rechercher un traitement...', ar: 'ابحث عن المقالات أو الفيديوهات...' },
  };

  const t = (key: string) => UI_TEXT[key]?.[locale] || UI_TEXT[key]?.['en'] || key;

  // Filtered Blog Posts
  const filteredArticles = BLOG_POSTS.filter((post) => {
    const postTitle = (post.title[locale] || post.title.en).toLowerCase();
    const postSummary = (post.summary[locale] || post.summary.en).toLowerCase();
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || postTitle.includes(q) || postSummary.includes(q);
    const matchesCat = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  // Filtered Reels (Live from Instagram with static fallback)
  const filteredReels = reels.filter((reel) => {
    const rawTitle = reel.title && typeof reel.title === 'object' ? (reel.title[locale] || reel.title.en || '') : (reel.title || '');
    const rawCaption = reel.caption && typeof reel.caption === 'object' ? (reel.caption[locale] || reel.caption.en || '') : (reel.caption || '');
    const reelTitle = String(rawTitle).toLowerCase();
    const reelCaption = String(rawCaption).toLowerCase();
    const q = searchQuery.toLowerCase().trim();
    return !q || reelTitle.includes(q) || reelCaption.includes(q);
  });

  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen pb-24">
      {/* 1. Page Header */}
      <section className="relative bg-gradient-to-b from-white via-[#F0F4F7]/60 to-[#FAFBFC] border-b border-slate-200 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b0d52] tracking-tight">
            {t('title')}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>


        </div>
      </section>

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
        {/* Article Reader Modal / Full View */}
        {activeArticle ? (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl space-y-8 animate-in fade-in duration-200">
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-800 cursor-pointer px-3.5 py-1.5 rounded-xl bg-teal-50 border border-teal-200/60"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span>{t('backToArticles')}</span>
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                <span className="text-teal-700 font-bold uppercase tracking-wider">{activeArticle.category}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1b0d52] leading-tight">
                {activeArticle.title[locale] || activeArticle.title.en}
              </h2>

              <div className="flex items-center gap-3 pt-2 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-lg">medical_services</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">{activeArticle.author}</div>
                  <div className="text-xs text-slate-500">{activeArticle.authorRole[locale] || activeArticle.authorRole.en}</div>
                </div>
              </div>
            </div>

            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
              <img
                src={activeArticle.heroImage}
                alt={activeArticle.title[locale] || activeArticle.title.en}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose max-w-none text-slate-700 space-y-4 leading-relaxed text-sm sm:text-base">
              {(activeArticle.content[locale] || activeArticle.content.en).map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Related Instagram Video Reels for this article */}
            {activeArticle.relatedInstagramReels && activeArticle.relatedInstagramReels.length > 0 && (
              <div className="pt-8 border-t border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-base font-bold text-slate-900">
                  <span className="material-symbols-outlined text-teal-600">play_circle</span>
                  <span>İlgili Instagram Reels Videoları</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeArticle.relatedInstagramReels.map((reelId) => {
                    const reel = INSTAGRAM_REELS.find((r) => r.id === reelId);
                    if (!reel) return null;
                    return <InstagramVideoCard key={reel.id} reel={reel} locale={locale} />;
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-16 sm:space-y-20">
            {/* INSTAGRAM REELS SHOWCASE SECTION */}
            {(activeTab === 'all' || activeTab === 'videos') && (
              <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-[#bc1888] uppercase tracking-wider mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#bc1888] animate-pulse"></span>
                      <span>Instagram Video Hub</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b0d52]">
                      {t('watchReelsTitle')}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {t('watchReelsDesc')}
                    </p>
                  </div>

                  <a
                    href="https://www.instagram.com/dentaktifglobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white text-xs font-bold shadow-md shadow-pink-500/20 hover:scale-[1.02] transition-all shrink-0 cursor-pointer self-start sm:self-auto"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>{t('followInstagram')}</span>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredReels.map((reel) => (
                    <InstagramVideoCard key={reel.id} reel={reel} locale={locale} />
                  ))}
                </div>
              </section>
            )}

            {/* CLINICAL ARTICLES & GUIDES SECTION */}
            {(activeTab === 'all' || activeTab === 'articles') && (
              <section className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                    <span>Knowledge & Analysis</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b0d52]">
                    {t('tabArticles')}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {filteredArticles.map((article) => {
                    const title = article.title[locale] || article.title.en;
                    const summary = article.summary[locale] || article.summary.en;
                    const authorRole = article.authorRole[locale] || article.authorRole.en;

                    return (
                      <article
                        key={article.id}
                        className="bg-white rounded-3xl border border-slate-200/90 shadow-md shadow-slate-200/50 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-teal-300/80 transition-all duration-300 group"
                      >
                        <div>
                          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                            <img
                              src={article.heroImage}
                              alt={title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>

                          <div className="p-6 space-y-3">
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                              <span>{article.date}</span>
                              <span>•</span>
                              <span>{article.readTime}</span>
                            </div>

                            <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                              {title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                              {summary}
                            </p>
                          </div>
                        </div>

                        <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
                              <span className="material-symbols-outlined text-[15px]">medical_services</span>
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-800">{article.author}</div>
                              <div className="text-[10px] text-slate-400">{authorRole}</div>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              setActiveArticle(article);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="inline-flex items-center gap-1 text-xs font-extrabold text-teal-700 hover:text-teal-800 cursor-pointer"
                          >
                            <span>{t('readArticle')}</span>
                            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
