import Link from 'next/link';

export default function CampaignBanner() {
  return (
    <div className="bg-primary text-white text-center py-3">
      <div className="container">
        <p className="mb-0">
          See my name on your ballot?{' '}
          <Link href="/warden" className="text-white font-weight-bold">
            Learn more about me →
          </Link>
        </p>
      </div>
    </div>
  );
}
