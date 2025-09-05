export type SocialLink = {
  href: string;
  icon: string;
};

export type FooterProps = {
  brand: string;
  socialLinks: SocialLink[];
};

export default function Footer({ brand, socialLinks }: FooterProps) {
  return (
    <footer className="footer pt-10 pb-5 mt-auto bg-dark footer-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 small align-middle">
            <div className="footer-brand">{brand}</div>
            <div className="icon-list-social">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  className="icon-list-social-link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${link.icon}`} />
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-6 text-md-right small align-middle">
            Copyright &copy; {new Date().getFullYear()} by {brand}
          </div>
        </div>
      </div>
    </footer>
  );
}
