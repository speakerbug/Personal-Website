import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/styles.css';

export const metadata: Metadata = {
  title: 'Henry Saniuk, Jr.',
  description: 'Full-stack web & mobile developer based in Portland, ME.',
  openGraph: {
    title: 'Henry Saniuk, Jr.',
    description: 'Full-stack web & mobile developer based in Portland, ME.',
    images: ['/img/headshot.jpg'],
    type: 'website',
    url: 'https://example.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henry Saniuk, Jr.',
    description: 'Full-stack web & mobile developer based in Portland, ME.',
    images: ['/img/headshot.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.png" />
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
