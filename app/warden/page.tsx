import Link from 'next/link';

export const metadata = {
  title: 'Henry Saniuk - Candidate for Warden of District 5, South Portland',
  description: 'Learn about Henry Saniuk\'s experience as Ward Clerk for District 5 and his campaign for Warden. Committed to accessible, fair elections in South Portland.',
  keywords: ['Henry Saniuk', 'Ward Clerk', 'Warden', 'District 5', 'South Portland', 'election', 'campaign', 'accessibility'],
  authors: [{ name: 'Henry Saniuk, Jr.' }],
  creator: 'Henry Saniuk, Jr.',
  publisher: 'Henry Saniuk, Jr.',
  metadataBase: new URL('https://henrysaniuk.com'),
  alternates: {
    canonical: '/warden',
  },
  openGraph: {
    title: 'Henry Saniuk - Candidate for Warden of District 5, South Portland',
    description: 'Learn about Henry Saniuk\'s experience as Ward Clerk and his commitment to accessible elections in District 5.',
    images: [
      {
        url: '/img/headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Henry Saniuk - Candidate for Warden of District 5, South Portland',
      },
    ],
    type: 'website',
    url: 'https://henrysaniuk.com/warden',
    siteName: 'Henry Saniuk, Jr.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henry Saniuk - Candidate for Warden of District 5, South Portland',
    description: 'Learn about Henry Saniuk\'s experience as Ward Clerk and his commitment to accessible elections in District 5.',
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

export default function WardenPage() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="text-center mb-4">
            <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Henry Saniuk</span><br />
            <span style={{ fontSize: '1.2rem', color: '#6c757d', fontWeight: 'normal' }}>Candidate for Warden of District 5, South Portland</span>
          </h1>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">About Me</h2>
              <p className="card-text">
                For the last three years, I've had the privilege of serving as Ward Clerk for District 5, and I have been involved in helping run elections since 2014 in both Maine and Massachusetts. I have had the opportunity to wear many hats on Election Day, ranging from managing polling locations, training volunteers, and assisting voters.
              </p>
              <p className="card-text">
                I am a strong advocate for keeping elections free, open, fair, and most importantly, accessible to everyone in our community. If you have any ideas on how we can better make our elections more approachable, please reach out!
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Notable Work in South Portland & Maine Elections</h2>
              <div className="mb-3">
                <h5>Testimony Against LD 1149</h5>
                <p className="card-text">
                  I provided testimony opposing LD 1149, a bill related to elections in Maine.
                </p>
                <a href="https://legislature.maine.gov/legis/bills/getTestimonyDoc.asp?id=10047812" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">Read My Testimony</a>
              </div>
              <div>
                <h5>Multilingual "Vote Here" Signs</h5>
                <p className="card-text">
                  I worked to ensure that every polling location in South Portland now has "Vote Here" signs in four languages to make voting more accessible for all residents.
                </p>
                <div className="text-center mb-3">
                  <img 
                    src="/img/vote-here-sign.webp" 
                    alt="Multilingual Vote Here Sign" 
                    className="img-fluid rounded" 
                    style={{ maxWidth: '300px', border: '2px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">About the Warden Role</h2>
              <p className="card-text">
                The Warden oversees election operations in their district on Election Day, ensuring that voting runs smoothly, polling places are properly staffed, and ballots are handled securely and fairly. As Warden of District 5, I'm committed to making sure our elections remain transparent, well-run, and welcoming to all voters.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/" className="btn btn-outline-primary">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
