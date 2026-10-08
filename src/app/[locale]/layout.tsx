import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, Locale } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import CookieBanner from '@/components/CookieBanner';
import '../globals.css';

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
      'Republic of Turkey Ministry of Health Licensed International Health Tourism Provider (Auth No: TR-34-DH-4892). Guided implant surgery, handcrafted E-Max restorations & 5-day VIP hospital protocol.',
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
        'Republic of Turkey Ministry of Health Licensed International Health Tourism Provider (Auth No: TR-34-DH-4892). Precision Surgical Implantology & Biocompatible Aesthetic Smile Restorations.',
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
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAFBFC] text-[#141c27] font-sans antialiased selection:bg-primary selection:text-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="w-full pt-[112px]">{children}</main>
          <Footer />
          <WhatsAppFloating />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
