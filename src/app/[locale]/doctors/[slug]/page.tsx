import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { getDoctorDetail, getDoctorsList } from '@/data/doctorsData';
import { getDoctorDetailUi } from '@/data/doctorsI18n';
import DoctorDetailClient from './DoctorDetailClient';

export function generateStaticParams() {
  const doctors = getDoctorsList('en');
  const params: Array<{ locale: string; slug: string }> = [];

  for (const locale of locales) {
    for (const doc of doctors) {
      params.push({ locale, slug: doc.id });
    }
  }

  return params;
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const baseUrl = 'https://dentaktifglobal.com';
  const doctor = getDoctorDetail(slug, locale);

  if (!doctor) {
    return {};
  }

  const title = `${doctor.name} (${doctor.academicTitle}) | Dent Aktif Global Istanbul`;
  const description = `${doctor.title} specializing in ${doctor.specialty} at Dent Aktif Global Levent, Istanbul. Official Ministry of Health License: ${doctor.licenseId}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/doctors/${slug}`,
      languages: {
        en: `${baseUrl}/en/doctors/${slug}`,
        tr: `${baseUrl}/tr/doctors/${slug}`,
        de: `${baseUrl}/de/doctors/${slug}`,
        fr: `${baseUrl}/fr/doctors/${slug}`,
        ru: `${baseUrl}/ru/doctors/${slug}`,
        ar: `${baseUrl}/ar/doctors/${slug}`,
        'x-default': `${baseUrl}/en/doctors/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/doctors/${slug}`,
      siteName: 'Dent Aktif Global',
      images: [
        {
          url: doctor.image.startsWith('http') ? doctor.image : `${baseUrl}${doctor.image}`,
          width: 800,
          height: 1066,
          alt: `${doctor.name} - ${doctor.academicTitle}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [doctor.image.startsWith('http') ? doctor.image : `${baseUrl}${doctor.image}`],
    },
  };
}

export default function DoctorDetailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const baseUrl = 'https://dentaktifglobal.com';
  const ui = getDoctorDetailUi(locale);
  const doctor = getDoctorDetail(slug, locale);

  if (!doctor) {
    notFound();
  }

  const otherDoctors = getDoctorsList(locale).filter((d) => d.id !== doctor.id);

  // High-authority Physician Schema for E-E-A-T
  const doctorSchema = {
    '@context': 'https://schema.org',
    '@type': ['Person', 'Physician'],
    '@id': `${baseUrl}/${locale}/doctors/${doctor.id}`,
    name: doctor.name,
    jobTitle: doctor.academicTitle,
    description: doctor.bio,
    image: doctor.image.startsWith('http') ? doctor.image : `${baseUrl}${doctor.image}`,
    medicalSpecialty: doctor.specialty,
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Medical License',
        identifier: doctor.licenseId,
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'Republic of Turkey Ministry of Health',
        },
      },
    ],
    alumniOf: doctor.education.map((edu) => ({
      '@type': 'EducationalOrganization',
      name: edu.institution,
    })),
    worksFor: {
      '@type': 'MedicalClinic',
      name: 'Dent Aktif Global',
      url: baseUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Levent Mah., Beşiktaş',
        addressLocality: 'Istanbul',
        addressCountry: 'TR',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />
      <DoctorDetailClient doctor={doctor} ui={ui} locale={locale} otherDoctors={otherDoctors} />
    </>
  );
}
