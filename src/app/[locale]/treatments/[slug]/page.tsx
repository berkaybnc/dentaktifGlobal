import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { getTreatmentDetail } from '@/data/treatmentsData';
import TreatmentDetailClient from './TreatmentDetailClient';

const VALID_SLUGS = [
  'aesthetic-dentistry',
  'hollywood-smile',
  'dental-veneers',
  'dental-crowns',
  'dental-implants',
  'root-canal',
] as const;

export function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of locales) {
    for (const slug of VALID_SLUGS) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  if (!VALID_SLUGS.includes(slug as any)) {
    return {};
  }

  const baseUrl = 'https://dentaktifglobal.com';
  const data = getTreatmentDetail(slug, locale);

  const titlesByLocale: Record<string, string> = {
    en: `${data.name} in Istanbul • 5-Day Protocol | Dent Aktif Global`,
    tr: `${data.name} Tedavisi İstanbul | Dent Aktif Global Levent`,
    de: `${data.name} in Istanbul • Schweizer Qualität | Dent Aktif Global`,
    ru: `${data.name} в Стамбуле за 5 дней | Госпиталь Dent Aktif Global`,
    fr: `${data.name} à Istanbul • Garantie 10 Ans | Dent Aktif Global`,
    ar: `${data.name} في إسطنبول • جودة عالمية | دنت أكتيف جلوبال`,
  };

  const title = titlesByLocale[locale] || titlesByLocale.en;
  const description = `${data.heroDesc} Authentic certified materials, in-house CAD/CAM robotics laboratory, and VIP 5-star hotel package in Levent, Istanbul.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/treatments/${slug}`,
      languages: {
        en: `${baseUrl}/en/treatments/${slug}`,
        tr: `${baseUrl}/tr/treatments/${slug}`,
        de: `${baseUrl}/de/treatments/${slug}`,
        fr: `${baseUrl}/fr/treatments/${slug}`,
        ru: `${baseUrl}/ru/treatments/${slug}`,
        ar: `${baseUrl}/ar/treatments/${slug}`,
        'x-default': `${baseUrl}/en/treatments/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/treatments/${slug}`,
      siteName: 'Dent Aktif Global',
      images: [
        {
          url: data.image.startsWith('http') ? data.image : `${baseUrl}${data.image}`,
          width: 1200,
          height: 630,
          alt: `${data.name} - Dent Aktif Global Istanbul`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [data.image.startsWith('http') ? data.image : `${baseUrl}${data.image}`],
    },
  };
}

export default function TreatmentDetailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  if (!VALID_SLUGS.includes(slug as any)) {
    notFound();
  }

  const baseUrl = 'https://dentaktifglobal.com';
  const data = getTreatmentDetail(slug, locale);
  const ui = data.ui;

  // Procedure-specific JSON-LD Schema
  const procedureSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalProcedure',
        name: data.name,
        description: data.overview,
        howPerformed: data.heroDesc,
        procedureType: 'https://schema.org/PercutaneousProcedure',
        bodyLocation: 'Oral cavity and teeth',
        preparation: '3D CBCT tomography diagnostics, smile mock-up, digital bite registration',
        followup: 'Digital occlusal analysis, scheduled teledentistry follow-up, international warranty card',
        performer: {
          '@type': 'MedicalClinic',
          name: 'Dent Aktif Global',
          url: baseUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: ui.breadcrumbHome || 'Home',
            item: `${baseUrl}/${locale}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: ui.breadcrumbTreatments || 'Treatments',
            item: `${baseUrl}/${locale}/treatments`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: data.name,
            item: `${baseUrl}/${locale}/treatments/${slug}`,
          },
        ],
      },
      ...(data.faq && data.faq.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: data.faq.map((item: { q: string; a: string }) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <TreatmentDetailClient data={data} ui={ui} locale={locale} />
    </>
  );
}
