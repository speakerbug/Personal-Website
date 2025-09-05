import Image from 'next/image';

export type Award = {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  badge: string;
  description: string;
  presenter: string;
};

export type AwardsSectionProps = {
  title: string;
  awards: Award[];
};

export default function AwardsSection({ title, awards }: AwardsSectionProps) {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="text-center">
          <h2>{title}</h2>
          <div className="row features text-center pt-5">
            {awards.map((a) => (
              <div key={a.title} className="col-lg-4 col-md-6 mb-5">
                <a
                  className="card card-link border-top border-top-lg border-primary h-100 lift"
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-body p-5">
                    <Image
                      className="pb-3"
                      src={a.imgSrc}
                      alt={a.imgAlt}
                      width={75}
                      height={75}
                    />
                    <h6>{a.title}</h6>
                    <div className="badge badge-pill badge-dark font-weight-normal px-3 py-2 mb-2">
                      {a.badge}
                    </div>
                    <p className="card-text">{a.description}</p>
                  </div>
                  <div className="card-footer bg-transparent pt-0 pb-5">
                    <div className="badge badge-pill badge-light font-weight-normal px-3 py-2">
                      {a.presenter}
                    </div>
                  </div>
                </a>
              </div>
            ))}
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
    </section>
  );
}
