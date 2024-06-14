import { Header } from "./components/header/header";
import { dataHeader, dataHeaderIcons } from "./data/data";
import { Section, SectionProps } from "./components/section/section";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Projetos } from "./components/projetos/projetos";
import { Tecnologias } from "./components/tecnologias/tecnologias";

export const App = () => {
  const sections: SectionProps[] = [
    { id: "home", children: <Hero /> },
    { id: "sobre", children: <About /> },
    { id: "tecnologias", children: <Tecnologias /> },
    { id: "projetos", children: <Projetos /> },
  ];

  return (
    <>
      <Header dataHeader={dataHeader} dataHeaderIcons={dataHeaderIcons} />
      <main className="w-full h-full flex flex-col items-center gap-2">
        {sections.map((section) => (
          <Section key={section.id} id={section.id}>
            {section.children}
          </Section>
        ))}
      </main>
    </>
  );
};
