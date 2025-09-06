'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CampaignBanner from '../components/CampaignBanner';
import '../styles/styles.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

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
        {pathname !== '/warden' && <CampaignBanner />}
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
