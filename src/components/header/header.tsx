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

  useEffect(() => {
    const header = document.getElementById("header");

    const scrollCallBack = () => {
      const position = header?.offsetTop || 0;

      if (window.pageYOffset > position) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", scrollCallBack);

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <header
      className={`w-full flex justify-center py-4 transition-all ${
        isFixed
          ? "fixed bg-white shadow-md top-0 right-0 transition-all z-10"
          : ""
      }`}
      id="header"
    >
      <nav className="flex gap-6 items-center">
        <ul className="flex gap-6">
          {dataHeader.map((item) => (
            <li key={item.id}>
              <a href={item.path} className="text-slate-800 uppercase text-xl">
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
    </header>
  );
};
