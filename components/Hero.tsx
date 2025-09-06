import Image from 'next/image';

export type HeroProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
};

export default function Hero({ imageSrc, title, subtitle }: HeroProps) {
  return (
    <header className="page-header page-header-light bg-white">
      <div className="page-header-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 text-center">
              <Image
                className="mb-4 rounded-circle"
                src={imageSrc}
                alt={title}
                width={240}
                height={240}
                loading="eager"
              />
              <h1 className="page-header-title">{title}</h1>
              <p className="page-header-text">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="svg-border-rounded text-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144.54 17.34"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" />
        </svg>
      </div>
    </header>
  );
}
