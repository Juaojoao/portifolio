import { About } from "../components/about/about";
import { Contato } from "../components/contato/contato";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Hero } from "../components/hero/hero";
import { Projetos } from "../components/projetos/projetos";
import { Section, SectionProps } from "../components/section/section";
import { Tecnologias } from "../components/tecnologias/tecnologias";
import { dataHeader, dataHeaderIcons } from "../data/data";

export const HomePage = () => {
  const sections: SectionProps[] = [
    { id: "home", children: <Hero /> },
    { id: "sobre", children: <About /> },
    { id: "tecnologias", children: <Tecnologias /> },
    { id: "projetos", children: <Projetos /> },
    { id: "contato", children: <Contato /> },
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
      <Footer navProps={dataHeader} />
    </>
  );
};
