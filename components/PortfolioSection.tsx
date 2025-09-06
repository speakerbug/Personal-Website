import Image from 'next/image';

export type Project = {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
};

export type PortfolioSectionProps = {
  title: string;
  projects: Project[];
};

export default function PortfolioSection({ title, projects }: PortfolioSectionProps) {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10 text-center py-5">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {projects.map((p) => (
            <div key={p.title} className="col-md-6 mb-5">
              <a
                className="card card-portfolio h-100"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="card-img-top"
                  src={p.imgSrc}
                  alt={p.imgAlt}
                  width={700}
                  height={400}
                  loading="lazy"
                />
                <div className="card-body">
                  <div className="card-title">{p.title}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
