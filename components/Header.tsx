import Link from 'next/link';

export type HeaderProps = {
  brand: string;
  resumeLink: string;
};

export default function Header({ brand, resumeLink }: HeaderProps) {
  return (
    <nav className="navbar navbar-marketing navbar-expand-lg bg-white navbar-light pt-5">
      <div className="container">
        <Link href="/" className="navbar-brand text-dark">
          {brand}
        </Link>
        <Link
          href={resumeLink}
          className="btn btn-primary rounded-pill px-4 ml-lg-4"
          target="_blank"
        >
          Resume<i className="fas fa-download ml-1" />
        </Link>
      </div>
    </nav>
  );
}
