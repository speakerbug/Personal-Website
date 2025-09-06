import Hero from '../components/Hero';
import PortfolioSection from '../components/PortfolioSection';
import AwardsSection from '../components/AwardsSection';
import EducationSection from '../components/EducationSection';

export const metadata = {
  title: 'Henry Saniuk, Jr. | Full-Stack Web & Mobile Developer',
  description:
    'Full-stack web & mobile developer based in South Portland, ME. Specializing in modern web technologies, mobile apps, and award-winning projects.',
  keywords: [
    'web developer',
    'mobile developer',
    'full-stack developer',
    'React',
    'Next.js',
    'Portland ME',
    'Henry Saniuk',
  ],
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
    description:
      'Full-stack web & mobile developer based in South Portland, ME. Specializing in modern web technologies, mobile apps, and award-winning projects.',
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
    description:
      'Full-stack web & mobile developer based in South Portland, ME. Specializing in modern web technologies, mobile apps, and award-winning projects.',
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

export default function HomePage() {
  return (
    <>
      <Hero
        imageSrc="/img/headshot.jpg"
        title="Hi, I'm Henry!"
        subtitle="I'm a full-stack web & mobile developer based in South Portland, ME."
      />
      <PortfolioSection
        title="My Recent Work"
        projects={[
          {
            href: 'https://predictiveindex.com',
            imgSrc: '/img/predictiveindex.png',
            imgAlt: 'Screenshot of PredictiveIndex.com',
            title: 'The Predictive Index',
          },
          {
            href: 'https://www.mos.org',
            imgSrc: '/img/mos.png',
            imgAlt: 'Screenshot of MOS.org',
            title: 'Museum of Science, Boston',
          },
          {
            href: 'https://friendlyu.com',
            imgSrc: '/img/friendlyu.png',
            imgAlt: 'Screenshot of FriendlyU.com',
            title: 'FriendlyU',
          },
          {
            href: 'https://quicktix.org',
            imgSrc: '/img/quicktix.png',
            imgAlt: 'Screenshot of QuickTix.org',
            title: 'QuickTix',
          },
        ]}
      />
      <AwardsSection
        title="Award Winning Projects"
        awards={[
          {
            href: 'https://devpost.com/software/comfort-care',
            imgSrc: '/img/comfortcare.png',
            imgAlt: 'ComfortCare',
            title: 'ComfortCare',
            badge: 'Globally Highlighted Project',
            description:
              'A web app that allows family members to easily upload and share pictures, videos, audio recordings, and music for a loved one in the ICU.',
            presenter: 'Presented by Facebook',
          },
          {
            href: 'https://devpost.com/software/human-2-human-elrvj2',
            imgSrc: '/img/human2human.jpg',
            imgAlt: 'Human2Human',
            title: 'Human2Human',
            badge: 'Best in Show',
            description:
              'A Messenger bot to help refugees and immigrants fill out important documents, find jobs, and connect with a mentor.',
            presenter: 'Presented by Facebook',
          },
          {
            href: 'https://devpost.com/software/comfort-care',
            imgSrc: '/img/dripp.jpg',
            imgAlt: 'Dripp',
            title: 'Dripp',
            badge: 'Audience Choice Award',
            description:
              'A social challenge app that encourages individuals to reduce their water waste by listening to music.',
            presenter: 'Presented by Apple',
          },
        ]}
      />
      <EducationSection
        items={[
          {
            school: 'Harvard University, Extension School',
            link: 'https://extension.harvard.edu',
            degree: 'Master of Liberal Arts, Business Management',
            period: 'Graduated May 2025',
          },
          {
            school: 'Rochester Institute of Technology',
            link: 'https://rit.edu',
            degree: 'Bachelor of Science, Business Management',
            period: 'Graduated May 2019',
          },
          {
            school: 'Sharon High School',
            link: 'https://hs.sharon.k12.ma.us/',
            degree: 'Sharon, MA',
            period: 'Graduated May 2014',
          },
        ]}
      />
    </>
  );
}
