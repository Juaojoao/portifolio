import { useEffect, useState } from "react";

interface HeaderProps {
  dataHeader: {
    id: number;
    title: string;
    path: string;
  }[];
  dataHeaderIcons?: {
    id: number;
    title: string;
    path: string;
    url: string;
  }[];
}

export const Header = ({ dataHeader, dataHeaderIcons }: HeaderProps) => {
  const [isFixed, setIsFixed] = useState(false);
  const [widowWidth, setWidowWidth] = useState(window.innerWidth);
  const [menuMob, setMenuMob] = useState(false);
  const [selectedNav, setSelectedNav] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
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

  const handleClickMenu = () => setMenuMob(!menuMob);
  const handleSelectedNav = (id: number) => {
    if (id === selectedNav) return;
    if (id) {
      setSelectedNav(id);
      setMenuMob(false);
    }
  };

  return (
    <header
      className={`w-full flex justify-center sm:py-4 transition-all ${
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
                  onClick={() => handleSelectedNav(item.id)}
                  href={item.path}
                  className={`text-slate-800 uppercase text-3xl sm:text-xl ${
                    selectedNav === item.id ? "font-bold" : ""
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="icons flex gap-3">
            {dataHeaderIcons?.map((icons) => (
              <li key={icons.id}>
                <a href={icons.url} target="_blank" rel="noreferrer">
                  <img src={icons.path} alt={icons.title} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <>
          <div className="fixed right-0 top-0 p-4 z-20 drop-shadow-lg overflow-hidden">
            <button className="relative group" onClick={handleClickMenu}>
              <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md">
                <div
                  className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${
                    menuMob ? "-rotate-[45deg]" : "rotate-0"
                  } origin-center`}
                >
                  <div
                    className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                      menuMob
                        ? "-rotate-90 h-[1px] -translate-y-[1px]"
                        : "rotate-0"
                    } origin-right delay-75`}
                  ></div>
                  <div className="bg-white h-[1px] rounded"></div>
                  <div
                    className={`bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${
                      menuMob
                        ? "-rotate-90 h-[1px] translate-y-[1px]"
                        : "rotate-0"
                    } origin-left delay-75`}
                  ></div>
                </div>
              </div>
            </button>
          </div>
          <nav
            className={`nav-mob flex flex-col bg-yellow-600 gap-10 w-2/3 h-lvh fixed right-0 top-0 z-10 transform transition-transform duration-300 justify-center items-center ${
              menuMob ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="flex flex-col justify-center items-center gap-6">
              {dataHeader.map((item) => (
                <li key={item.id}>
                  <a
                    onClick={() => handleSelectedNav(item.id)}
                    href={item.path}
                    className={`text-slate-800 uppercase text-3xl sm:text-xl ${
                      selectedNav === item.id ? "font-bold" : ""
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="icons flex gap-10">
              {dataHeaderIcons?.map((icons) => (
                <li key={icons.id}>
                  <a href={icons.url} target="_blank" rel="noreferrer">
                    <img src={icons.path} alt={icons.title} width={60} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};
