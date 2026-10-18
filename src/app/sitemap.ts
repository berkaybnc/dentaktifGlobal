import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

const BASE_URL = 'https://dentaktifglobal.com';

const PATHS = [
  { path: '', priority: 1.0, changeFrequency: 'daily' as const },
  { path: '/treatments', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/treatments/hollywood-smile', priority: 0.95, changeFrequency: 'weekly' as const },
  { path: '/treatments/dental-implants', priority: 0.95, changeFrequency: 'weekly' as const },
  { path: '/treatments/dental-veneers', priority: 0.95, changeFrequency: 'weekly' as const },
  { path: '/treatments/dental-crowns', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/treatments/aesthetic-dentistry', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/treatments/root-canal', priority: 0.85, changeFrequency: 'weekly' as const },
  { path: '/doctors', priority: 0.85, changeFrequency: 'weekly' as const },
  { path: '/faq', priority: 0.85, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.85, changeFrequency: 'weekly' as const },
  { path: '/patient-rights', priority: 0.5, changeFrequency: 'monthly' as const },
  { path: '/medical-disclosure', priority: 0.5, changeFrequency: 'monthly' as const },
  { path: '/gdpr-policy', priority: 0.5, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const item of PATHS) {
    for (const locale of locales) {
      const url = `${BASE_URL}/${locale}${item.path}`;

      const languagesMap: Record<string, string> = {
        'x-default': `${BASE_URL}/en${item.path}`,
      };

      for (const loc of locales) {
        languagesMap[loc] = `${BASE_URL}/${loc}${item.path}`;
      }

      sitemapEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: item.changeFrequency,
        priority: item.priority,
        alternates: {
          languages: languagesMap,
        },
      });
    }
  }

  return sitemapEntries;
}
