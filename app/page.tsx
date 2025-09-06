import Hero from '../components/Hero';
import PortfolioSection from '../components/PortfolioSection';
import AwardsSection from '../components/AwardsSection';
import EducationSection from '../components/EducationSection';

export default function HomePage() {
  return (
    <>
      <Hero
        imageSrc="/img/headshot.jpg"
        title="Hi, I'm Henry!"
        subtitle="I'm a full-stack web & mobile developer based in Portland, ME."
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
