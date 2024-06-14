import { Card } from "../card/card";
import { projectData } from "../../data/projects";

export const Projetos = () => {
  return (
    <div className="shadow-xl bg-gray-900 sm:h-lvh w-full p-4 flex justify-center flex-col items-center gap-6">
      <div className="flex items-center justify-center gap-2">
        <div className="w-11 h-1 bg-yellow-600"></div>
        <h1 className="text-yellow-600">PROJETOS</h1>
        <div className="w-11 h-1 bg-yellow-600"></div>
      </div>
      <div className="flex flex-wrap gap-4 w-full items-center justify-center">
        {projectData.length > 0 &&
          projectData.map((project) => (
            <Card
              key={project.id}
              name={project.name}
              image={project.imagem}
              urlCode={project.urlCode}
              liveCode={project.liveCode}
              description={project.Description}
              tecs={project.tecs}
            />
          ))}
      </div>
    </div>
  );
};
