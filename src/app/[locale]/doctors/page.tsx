import React from 'react';
import type { Metadata } from 'next';
import { getDoctorsList } from '@/data/doctorsData';
import { getDoctorsOverviewUi } from '@/data/doctorsI18n';
import DoctorsOverviewClient from './DoctorsOverviewClient';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const baseUrl = 'https://dentaktifglobal.com';

  const titles: Record<string, string> = {
    en: 'Expert Oral Surgeons & Master Ceramists | Dent Aktif Global Istanbul',
    tr: 'Uzman Diş Hekimleri & Çene Cerrahisi Kadrosu | Dent Aktif Global',
    de: 'Zahnärzte & Kieferchirurgen in Istanbul | Dent Aktif Global',
    ru: 'Ведущие стоматологи и хирурги в Стамбуле | Dent Aktif Global',
    fr: 'Chirurgiens-Dentistes & Spécialistes à Istanbul | Dent Aktif Global',
    ar: 'أطباء وجراحو الأسنان في إسطنبول | دنت أكتيف جلوبال',
  };

  const descriptions: Record<string, string> = {
    en: 'Meet our board-certified oral surgeons, prosthodontists, and master ceramists at Dent Aktif Global in Levent, Istanbul. Licensed by Republic of Turkey Ministry of Health.',
    tr: 'Dent Aktif Global Levent hastanesinin T.C. Sağlık Bakanlığı onaylı uzman ağız diş çene cerrahları, protez ve estetik diş hekimleri ile tanışın.',
    de: 'Lernen Sie unsere spezialisierten Kieferchirurgen und Meister-Zahntechniker in Istanbul (Levent) kennen. Höchste medizinische Standards.',
    ru: 'Познакомьтесь с ведущими хирургами-имплантологами и ортопедами клиники Dent Aktif Global в Стамбуле.',
    fr: 'Découvrez notre équipe de chirurgiens-dentistes et prothésistes hautement qualifiés à Istanbul.',
    ar: 'تعرف على نخبة جراحي الفم والأسنان وأخصائيي التعويضات السنية في دنت أكتيف جلوبال إسطنبول.',
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/doctors`,
      languages: {
        en: `${baseUrl}/en/doctors`,
        tr: `${baseUrl}/tr/doctors`,
        de: `${baseUrl}/de/doctors`,
        fr: `${baseUrl}/fr/doctors`,
        ru: `${baseUrl}/ru/doctors`,
        ar: `${baseUrl}/ar/doctors`,
        'x-default': `${baseUrl}/en/doctors`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/doctors`,
      siteName: 'Dent Aktif Global',
      images: [
        {
          url: `${baseUrl}/images/hero-bg.webp`,
          width: 1200,
          height: 630,
          alt: 'Dent Aktif Global Medical Faculty Istanbul',
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

export default function DoctorsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const baseUrl = 'https://dentaktifglobal.com';
  const ui = getDoctorsOverviewUi(locale);
  const doctors = getDoctorsList(locale);

  // Physician Schema for Google E-E-A-T
  const doctorsSchema = {
    '@context': 'https://schema.org',
    '@graph': doctors.map((doc) => ({
      '@type': ['Person', 'Physician'],
      '@id': `${baseUrl}/${locale}/doctors/${doc.id}`,
      name: doc.name,
      jobTitle: doc.academicTitle,
      description: doc.bio,
      image: doc.image.startsWith('http') ? doc.image : `${baseUrl}${doc.image}`,
      medicalSpecialty: doc.specialty,
      worksFor: {
        '@type': 'MedicalClinic',
        name: 'Dent Aktif Global',
        url: baseUrl,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorsSchema) }}
      />
      <DoctorsOverviewClient ui={ui} doctors={doctors} />
    </>
  );
}
