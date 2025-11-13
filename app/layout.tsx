'use client';

import { usePathname } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

  const canonicalUrl = `https://henrysaniuk.com${pathname === '/' ? '' : pathname.replace(/\/$/, '') + '/'}`;

  const noIndexPrefixes = ['/calendar'];
  const isIndexablePage = !(pathname && noIndexPrefixes.some((prefix) => pathname.startsWith(prefix)));
  const robotsContent = isIndexablePage
    ? 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    : 'noindex, nofollow';

  const commentBlock = `<!--
/*
   Built by Henry Saniuk
   Software Engineer | Problem Solver

   If you're reading this, we probably have similar hobbies.
   Drop me a line: henry@henrysaniuk.com
*/
-->`;

  const jsonLdString = JSON.stringify(jsonLd).replace(/</g, '\\u003c');

  const headContent = [
    commentBlock,
    '<link rel="icon" href="/img/favicon.png" />',
    `<link rel="canonical" href="${canonicalUrl}" />`,
    '<link rel="manifest" href="/manifest.json" />',
    '<link rel="stylesheet" href="/css/main.min.css" />',
    '<meta name="theme-color" content="#000000" />',
    '<meta name="viewport" content="width=device-width, initial-scale=1" />',
    '<meta name="author" content="Henry Saniuk, Jr." />',
    `<meta name="robots" content="${robotsContent}" />`,
    `<meta name="googlebot" content="${robotsContent}" />`,
    `<meta name="bingbot" content="${robotsContent}" />`,
    '<link rel="preconnect" href="https://fonts.googleapis.com" />',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js" crossorigin="anonymous" defer></script>',
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.24.1/feather.min.js" crossorigin="anonymous" defer></script>',
    `<script type="application/ld+json">${jsonLdString}</script>`,
  ].join('\n');

  return (
    <html lang="en">
      <head dangerouslySetInnerHTML={{ __html: headContent }} />
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
