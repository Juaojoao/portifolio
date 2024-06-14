import { useEffect, useState } from "react";

interface HeaderProps {
  dataHeader: {
    id: number;
    title: string;
    path: string;
  }[];
  dataHeaderIcons: {
    id: number;
    title: string;
    path: string;
    url: string;
  }[];
}

export const Header = ({ dataHeader, dataHeaderIcons }: HeaderProps) => {
  const [isFixed, setIsFixed] = useState(false);
  const [widowWidth, setWidowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      // Debounce logic
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setWidowWidth(window.innerWidth);
      }, 100);
    };

    let resizeTimeout: number;

    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        const position = header.offsetTop || 0;
        if (window.pageYOffset > position && widowWidth > 768) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [widowWidth]);

  console.log("renderizou");

  return (
    <header
      className={`w-full flex justify-center py-4 transition-all ${
        isFixed && widowWidth > 768
          ? "fixed bg-white shadow-md top-0 right-0 transition-all z-10"
          : "relative"
      }`}
      id="header"
    >
      {widowWidth > 768 ? (
        <nav className="nav-pc flex gap-6 items-center">
          <ul className="flex gap-6">
            {dataHeader.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="text-slate-800 uppercase text-xl"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="icons flex gap-3">
            {dataHeaderIcons.map((icons) => (
              <li key={icons.id}>
                <a href={icons.url} target="_blank" rel="noreferrer">
                  <img src={icons.path} alt={icons.title} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav className="nav-mob">
          <ul className="flex gap-6">
            {dataHeader.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="text-slate-800 uppercase text-xl"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="icons flex gap-3">
            {dataHeaderIcons.map((icons) => (
              <li key={icons.id}>
                <a href={icons.url} target="_blank" rel="noreferrer">
                  <img src={icons.path} alt={icons.title} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
