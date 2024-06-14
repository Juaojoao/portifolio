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
        <div className="footer-header flex sm:justify-end justify-center items-center max-sm:flex-col mb-14 gap-2 sm:gap-16">
          <p>Email@email.com</p>
          <div className="footer-icons flex gap-2">
            <img src="/assets/github.svg" alt="githubIcon" />
            <img src="/assets/linkedin.svg" alt="linkedinIcon" />
          </div>
        </div>
        <div className="divisor w-full h-px bg-primary-light"></div>
        <div className="footer-footer flex justify-between my-16 flex-wrap max-lg:gap-4 max-lg:justify-center">
          <nav>
            <ul className="flex gap-4 max-sm:flex-wrap max-sm:justify-center">
              {navProps.map((nav) => (
                <li key={nav.id}>
                  <a href={nav.path} className="text-slate-800 text-lg">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-text max-sm:text-center">
            <p>
              Desenhado e construído por{" "}
              <span className="text-yellow-600">João Vitor</span> com Amor ❤️ &
              Café ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
