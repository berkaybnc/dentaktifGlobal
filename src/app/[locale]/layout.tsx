import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, Locale } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import JsonLd from '@/components/seo/JsonLd';
import '../globals.css';

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedMeta {
  title: string;
  description: string;
  ogLocale: string;
}

const META_BY_LOCALE: Record<string, LocalizedMeta> = {
  en: {
    title: 'Best Dental Clinic in Turkey • Dent Aktif Global | Hollywood Smile & Implants Istanbul',
    description:
      'Republic of Turkey Ministry of Health & USHAŞ Licensed International Dental Hospital (Cert No: 2026034015610080000425805). Save up to 70% with 5-day Swiss Straumann® implants, authentic Ivoclar E-Max® veneers & 5-star hotel VIP package.',
    ogLocale: 'en_US',
  },
  tr: {
    title: 'Dent Aktif Global • Uluslararası Ağız ve Diş Sağlığı Merkezi | Levent İstanbul',
    description:
      'T.C. Sağlık Bakanlığı ve USHAŞ Uluslararası Sağlık Turizmi Yetki Belgeli (No: 2026034015610080000425805) A+ Diş Hastanesi. 5 günde Hollywood Smile, orijinal Ivoclar E-Max® lamine ve İsviçre Straumann® implant tedavisi.',
    ogLocale: 'tr_TR',
  },
  de: {
    title: 'Beste Zahnklinik Türkei • Dent Aktif Global | Hollywood Smile & Implantate Istanbul',
    description:
      'Offiziell akkreditiertes internationales Zahnzentrum in Istanbul (Levent). Bis zu 70% Ersparnis mit original Schweizer Straumann® Implantaten, Ivoclar E-Max® Veneers in 5 Tagen & All-Inclusive VIP-Service.',
    ogLocale: 'de_DE',
  },
  ru: {
    title: 'Лучшая стоматологическая клиника в Турции • Dent Aktif Global | Стамбул',
    description:
      'Лицензированный Минздравом Турции международный центр стоматологии в Стамбуле (Левент). Голливудская улыбка за 5 дней, швейцарские импланты Straumann®, виниры Ivoclar E-Max® и сервис «Всё включено».',
    ogLocale: 'ru_RU',
  },
  fr: {
    title: 'Meilleure Clinique Dentaire Turquie • Dent Aktif Global | Hollywood Smile Istanbul',
    description:
      'Centre dentaire international agréé par le ministère de la Santé à Istanbul. Économisez jusqu\x27à 70% sur vos implants suisses Straumann® et facettes Ivoclar E-Max® en 5 jours avec forfait VIP hôtel 5 étoiles.',
    ogLocale: 'fr_FR',
  },
  ar: {
    title: 'أفضل عيادة أسنان في تركيا • دنت أكتيف جلوبال | ابتسامة هوليوود وزراعة الأسنان إسطنبول',
    description:
      'مركز دولي معتمد رسمياً من وزارة الصحة التركية ومؤسسة USHAŞ (ترخيص رقم: 2026034015610080000425805). زراعة الأسنان Straumann® السويسرية وقشور E-Max® في 5 أيام مع إقامة 5 نجوم وسيارة خاصة.',
    ogLocale: 'ar_SA',
  },
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const baseUrl = 'https://dentaktifglobal.com';
  const meta = META_BY_LOCALE[locale] || META_BY_LOCALE.en;

  return {
    metadataBase: new URL(baseUrl),
    title: meta.title,
    description: meta.description,
    keywords: [
      'best dental clinic in Turkey',
      'Hollywood smile Istanbul',
      'dental implants Turkey',
      'veneers Turkey',
      'Dent Aktif Global',
      'Türkiye en iyi diş kliniği',
      'İstanbul Hollywood smile',
      'Straumann implant Türkiye',
      'E-Max lamine porselen',
      'Zahnklinik Istanbul',
      'стоматология в стамбуле',
      'clinique dentaire turquie',
      'زراعة الأسنان في تركيا',
      'ابتسامة هوليوود اسطنبول',
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        tr: `${baseUrl}/tr`,
        de: `${baseUrl}/de`,
        fr: `${baseUrl}/fr`,
        ru: `${baseUrl}/ru`,
        ar: `${baseUrl}/ar`,
        'x-default': `${baseUrl}/en`,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon.png', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: '/icon.png',
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}`,
      siteName: 'Dent Aktif Global',
      locale: meta.ogLocale,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/hero-bg.webp`,
          width: 1200,
          height: 630,
          alt: 'Dent Aktif Global • International Oral & Dental Health Clinic Istanbul',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/images/hero-bg.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <JsonLd locale={locale} />
      </head>
      <body className="bg-[#FAFBFC] text-[#0f172a] font-sans antialiased selection:bg-[#211164] selection:text-white min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="w-full pt-[72px] sm:pt-[76px] flex-1">{children}</main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
