import type { Metadata } from "next";
import { Toaster } from "sonner";
import ClientBody from "../ClientBody";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import Script from "next/script";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: "secret santa generator, free secret santa, gift exchange generator, no email required, secret santa online, random name picker, secret santa organizer, secret santa app",
    metadataBase: new URL('https://secret-santa-generator.net'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'es': '/es',
      },
    },
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      type: "website",
      url: "https://secret-santa-generator.net",
      locale: locale,
      alternateLocale: locale === 'en' ? 'es' : 'en',
    },
  };
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3SZZBZ5VZ9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3SZZBZ5VZ9');
          `}
        </Script>
      </head>
      <ClientBody>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <CookieConsent />
        <Toaster position="top-center" richColors />
      </ClientBody>
    </>
  );
}
