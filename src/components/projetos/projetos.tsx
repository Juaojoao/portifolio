import { Card } from "../card/card";
import { projectData } from "../../data/projects";

export const Projetos = () => {
  return (
    <div className="shadow-xl bg-gray-900 h-full w-full p-4 flex justify-center items-center">
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
