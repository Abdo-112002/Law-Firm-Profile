import type { Metadata, Viewport } from 'next';
import { Amiri, IBM_Plex_Sans_Arabic } from 'next/font/google';
import { jsonLd, siteDescription, siteName, siteTitle, siteUrl } from '@/lib/site';
import './globals.css';

const sans = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], variable: '--font-sans', display: 'swap' });
const serif = Amiri({ subsets: ['arabic'], weight: ['400', '700'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  keywords: ['حمدي البسطويسي', 'محامي', 'مكتب محاماة', 'مستشار قانوني', 'محامي إداري', 'محامي دستورية عليا', 'مجلس الدولة', 'قضايا مدنية', 'أحوال شخصية', 'محامي أسرة', 'قضايا جنائية', 'تأسيس شركات', 'استشارة قانونية', 'محامي في مصر'],
  authors: [{ name: 'حمدي البسطويسي' }],
  creator: 'حمدي البسطويسي',
  category: 'legal',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    url: '/',
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: { card: 'summary', title: siteTitle, description: siteDescription },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0b1220',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ar" dir="rtl" className={`${sans.variable} ${serif.variable}`}>
    <body>
      {children}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    </body>
  </html>;
}
