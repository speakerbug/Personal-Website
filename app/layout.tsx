import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.css';

export const metadata: Metadata = {
  title: 'Henry Saniuk, Jr. | Full-Stack Web & Mobile Developer',
  description: 'Full-stack web & mobile developer based in Portland, ME. Specializing in modern web technologies, mobile apps, and award-winning projects.',
  keywords: ['web developer', 'mobile developer', 'full-stack developer', 'React', 'Next.js', 'Portland ME', 'Henry Saniuk'],
  authors: [{ name: 'Henry Saniuk, Jr.' }],
  creator: 'Henry Saniuk, Jr.',
  publisher: 'Henry Saniuk, Jr.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://henrysaniuk.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Henry Saniuk, Jr. | Full-Stack Web & Mobile Developer',
    description: 'Full-stack web & mobile developer based in Portland, ME. Specializing in modern web technologies, mobile apps, and award-winning projects.',
    images: [
      {
        url: '/img/headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Henry Saniuk, Jr. - Full-Stack Developer',
      },
    ],
    type: 'website',
    url: 'https://henrysaniuk.com',
    siteName: 'Henry Saniuk, Jr.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henry Saniuk, Jr. | Full-Stack Web & Mobile Developer',
    description: 'Full-stack web & mobile developer based in Portland, ME. Specializing in modern web technologies, mobile apps, and award-winning projects.',
    images: ['/img/headshot.jpg'],
    creator: '@speakerbug',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Henry Saniuk, Jr.',
    jobTitle: 'Full-Stack Web & Mobile Developer',
    description: 'Full-stack web & mobile developer based in Portland, ME. Specializing in modern web technologies, mobile apps, and award-winning projects.',
    image: 'https://henrysaniuk.com/img/headshot.jpg',
    url: 'https://henrysaniuk.com',
    sameAs: [
      'https://linkedin.com/in/henrysaniuk',
      'https://github.com/speakerbug',
      'https://twitter.com/speakerbug',
      'https://instagram.com/henrysaniuk',
      'https://facebook.com/speakerbug',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Portland',
      addressRegion: 'ME',
      addressCountry: 'US',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Harvard University Extension School',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Rochester Institute of Technology',
      },
    ],
    knowsAbout: [
      'Web Development',
      'Mobile Development',
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Full-Stack Development',
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.png" />
        <link rel="canonical" href="https://henrysaniuk.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Henry Saniuk, Jr." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.24.1/feather.min.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body>
        <Header brand="Henry Saniuk, Jr." resumeLink="/pdf/Henry-Saniuk-Resume.pdf" />
        {children}
        <Footer
          brand="Henry Saniuk, Jr."
          socialLinks={[
            { href: 'https://linkedin.com/in/henrysaniuk', icon: 'linkedin' },
            { href: 'https://instagram.com/henrysaniuk', icon: 'instagram' },
            { href: 'https://facebook.com/speakerbug', icon: 'facebook' },
            { href: 'https://github.com/speakerbug', icon: 'github' },
            { href: 'https://twitter.com/speakerbug', icon: 'twitter' },
          ]}
        />
      </body>
    </html>
  );
}
