import React from 'react';
import type { Metadata } from 'next';
import { getTreatmentsList, getTreatmentsData } from '@/data/treatmentsData';
import TreatmentsOverviewClient from './TreatmentsOverviewClient';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const baseUrl = 'https://dentaktifglobal.com';

  const titles: Record<string, string> = {
    en: 'Dental Treatments & Smile Makeover Catalog | Dent Aktif Global Istanbul',
    tr: 'Diş Tedavileri & Gülüş Tasarımı Kataloğu | Dent Aktif Global Levent',
    de: 'Zahnbehandlungen in Istanbul • Veneers & Implantate | Dent Aktif Global',
    ru: 'Стоматологические процедуры и цены в Стамбуле | Dent Aktif Global',
    fr: 'Soins Dentaires & Hollywood Smile à Istanbul | Dent Aktif Global',
    ar: 'علاجات الأسنان وابتسامة هوليوود في إسطنبول | دنت أكتيف جلوبال',
  };

  const descriptions: Record<string, string> = {
    en: 'Explore world-class dental procedures in Istanbul: Hollywood Smile, Swiss Straumann® implants, E-Max® veneers, and All-on-4/6. Up to 70% savings with 5-star hotel package.',
    tr: 'İstanbul Levent\'te A+ diş tedavileri: Hollywood Smile, İsviçre Straumann® implant, E-Max® lamine porselen ve zirkonyum kuron. %70 tasarruf ve 5 yıldızlı otel paketi.',
    de: 'Entdecken Sie erstklassige Zahnbehandlungen in Istanbul: Hollywood Smile, Schweizer Straumann® Implantate, E-Max® Veneers mit lebenslanger Garantie.',
    ru: 'Все виды стоматологического лечения в Стамбуле: Голливудская улыбка, импланты Straumann®, виниры E-Max®. Экономия до 70% с отелем 5*.',
    fr: 'Découvrez nos soins dentaires d\x27excellence à Istanbul: Hollywood Smile, implants Straumann®, facettes E-Max® avec forfait hôtel 5 étoiles inclus.',
    ar: 'استكشف علاجات الأسنان المتميزة في إسطنبول: ابتسامة هوليوود، وزراعة الأسنان Straumann®، وقشور E-Max® مع إقامة 5 نجوم.',
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/treatments`,
      languages: {
        en: `${baseUrl}/en/treatments`,
        tr: `${baseUrl}/tr/treatments`,
        de: `${baseUrl}/de/treatments`,
        fr: `${baseUrl}/fr/treatments`,
        ru: `${baseUrl}/ru/treatments`,
        ar: `${baseUrl}/ar/treatments`,
        'x-default': `${baseUrl}/en/treatments`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/treatments`,
      siteName: 'Dent Aktif Global',
      images: [
        {
          url: `${baseUrl}/images/hero-bg.webp`,
          width: 1200,
          height: 630,
          alt: 'Dent Aktif Global Dental Treatments Catalog Istanbul',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/hero-bg.webp`],
    },
  };
}

export default function TreatmentsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const treatmentsData = getTreatmentsData(locale);
  const allTreatments = getTreatmentsList(locale);

  return (
    <TreatmentsOverviewClient
      treatmentsData={treatmentsData}
      allTreatments={allTreatments}
    />
  );
}
