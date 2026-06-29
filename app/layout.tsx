import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.level1pc.com'),
  title: {
    default: 'Level1PC | IT Support & Computer Repair in Brockport, NY',
    template: '%s | Level1PC — IT Support Brockport NY',
  },
  description:
    'Level1PC provides expert IT support, managed services, virus removal, and computer repair in Brockport, NY and Monroe County. Trusted since 2011. No fix, no fee.',
  keywords: [
    'IT Support Brockport NY',
    'Computer Repair Brockport',
    'Managed IT Services Monroe County',
    'Virus Removal Upstate NY',
    'Network Security Brockport',
    'Small Business IT Support',
    'IT Service Brockport New York',
  ],
  authors: [{ name: 'Level1PC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.level1pc.com',
    siteName: 'Level1PC',
    title: 'Level1PC | IT Support & Computer Repair in Brockport, NY',
    description:
      'Expert IT support, managed services, virus removal, and computer repair in Brockport, NY. Trusted since 2011. No fix, no fee guarantee.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Level1PC | IT Support Brockport NY',
    description: 'Expert IT support and computer repair in Brockport, NY since 2011.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Level1PC',
              description:
                'IT Support, Managed Services, Computer Repair, and Virus Removal in Brockport, NY.',
              url: 'https://www.level1pc.com',
              telephone: '+15856323030',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Brockport',
                addressRegion: 'NY',
                postalCode: '14420',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '43.2136',
                longitude: '-77.9380',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '16:00',
                },
              ],
              priceRange: '$$',
              areaServed: {
                '@type': 'AdministrativeArea',
                name: 'Monroe County, NY',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'IT Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed IT Services' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Virus Removal' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Computer Repair' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Network Security' } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
