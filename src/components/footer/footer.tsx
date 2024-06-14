interface FooterProps {
  navProps: navProps[];
}

interface navProps {
  id: number;
  title: string;
  path: string;
}

export const Footer = ({ navProps }: FooterProps) => {
  return (
    <footer className="p-4">
      <div className="container m-auto">
        <div className="footer-header flex justify-end items-center mb-14 gap-16">
          <p>Email@email.com</p>
          <div className="footer-icons flex gap-2">
            <img src="/assets/github.svg" alt="githubIcon" />
            <img src="/assets/linkedin.svg" alt="linkedinIcon" />
          </div>
        </div>
        <div className="divisor w-full h-px bg-primary-light"></div>
        <div className="footer-footer flex justify-between my-16 flex-wrap max-lg:gap-4 max-lg:justify-center">
          <nav>
            <ul className="flex gap-4">
              {navProps.map((nav) => (
                <li key={nav.id}>
                  <a href={nav.path} className="text-slate-800 text-lg">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-text">
            <p>Designed and built by Pavan MG with Love & Coffee</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
