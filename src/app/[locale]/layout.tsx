import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Plus_Jakarta_Sans, Manrope } from 'next/font/google';
import { locales, Locale } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import '../globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const baseUrl = 'https://dentaktifglobal.com';

  return {
    title: 'Dent Aktif Global • International Oral & Dental Hospital | Levent, Istanbul',
    description:
      'Republic of Turkey Ministry of Health & USHAŞ Licensed International Health Tourism Center (Cert No: 2026034015610080000425805). Guided implant surgery, handcrafted E-Max restorations & 5-day VIP hospital protocol.',
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        de: `${baseUrl}/de`,
        fr: `${baseUrl}/fr`,
        ru: `${baseUrl}/ru`,
      },
    },
    openGraph: {
      title: 'Dent Aktif Global • International Oral & Dental Hospital | Levent, Istanbul',
      description:
        'Republic of Turkey Ministry of Health & USHAŞ Licensed International Health Tourism Center (Cert No: 2026034015610080000425805). Precision Surgical Implantology & Biocompatible Aesthetic Smile Restorations.',
      url: `${baseUrl}/${locale}`,
      siteName: 'Dent Aktif Global',
      locale,
      type: 'website',
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
    <html lang={locale} className={`scroll-smooth ${plusJakartaSans.variable} ${manrope.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
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
