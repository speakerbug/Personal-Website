export type EducationItem = {
  school: string;
  link: string;
  degree: string;
  period: string;
};

export type EducationSectionProps = {
  items: EducationItem[];
};

export default function EducationSection({ items }: EducationSectionProps) {
  return (
    <section className="bg-light py-5">
      <div className="container pb-5">
        <div className="text-uppercase-expanded small mb-2">Education</div>
        <hr className="mt-0 mb-5" />
        {items.map((item) => (
          <div key={item.school} className="row mb-3">
            <div className="col-lg-8">
              <h4 className="mb-0">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.school}
                </a>
              </h4>
              <p className="lead">{item.degree}</p>
            </div>
            <div className="col-lg-4 text-lg-right">
              <div className="text-gray-400 small">{item.period}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="svg-border-rounded text-dark">
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
