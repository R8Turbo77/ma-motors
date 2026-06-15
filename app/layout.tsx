import type { Metadata } from 'next';
import './globals.css';
import { AppChrome } from '@/components/AppChrome';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://mamotorsltd.com'),
  title: {
    default: 'MA Motors Slough | Premium Used Cars Bought & Sold',
    template: '%s | MA Motors'
  },
  description: 'MA Motors is a Slough-based used car dealership buying and selling quality prestige vehicles with fair prices, finance options and friendly service.',
  keywords: ['MA Motors', 'used cars Slough', 'premium used cars', 'prestige cars Slough', 'sell my car Slough', 'car finance Slough'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'MA Motors Slough | Premium Used Cars Bought & Sold',
    description: 'Quality used cars, fair prices and exceptional service from MA Motors in Slough.',
    url: 'https://mamotorsltd.com',
    siteName: 'MA Motors',
    type: 'website',
    locale: 'en_GB',
    images: ['/images/stock/audi-a3-black-front.jpg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: site.name,
    url: 'https://mamotorsltd.com',
    telephone: site.phone,
    email: site.email,
    image: 'https://mamotorsltd.com/images/brand/ma-motors-logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 Sharney Avenue',
      addressLocality: 'Slough',
      postalCode: 'SL3 8EB',
      addressCountry: 'GB'
    },
    areaServed: ['Slough', 'Windsor', 'Maidenhead', 'Heathrow', 'Berkshire', 'London'],
    priceRange: '££'
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
