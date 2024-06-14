import { Link } from "react-router-dom";

interface CardProps {
  name: string;
  image: string;
  urlCode: string;
  liveCode: string;
  description: string;
  tecs: string;
}

export const Card = ({
  name,
  image,
  description,
  tecs,
  urlCode,
  liveCode,
}: CardProps) => {
  return (
    <div className="shadow-lg w-card h-card rounded-lg bg-white hover:-translate-y-2 transition-all">
      <div className="card-image w-full h-2/5 bg-yellow-200 rounded-tl-lg rounded-tr-lg">
        {image}
      </div>

      <div className="card-content p-4 flex flex-col gap-4 justify-between h-3/5">
        <h2 className="card-title uppercase text-center font-bold text-2xl">
          {name}
        </h2>
        <p className="card-desc font-light text-lg tracking-widest text-center mb-8">
          {description}
        </p>
        <span className="card-tecs text-xs font-light tracking-wide">
          <span className="font-bold text-sm">Tecs: </span>
          {tecs}
        </span>
        <div className="card-view-code-live flex justify-around text-sm">
          <Link to={liveCode} className="view-live flex gap-2 items-center">
            <img src="/assets/href.svg" alt="hrefIcon" width={20} height={20} />
            <p className="border-b-2">Live Preview.</p>
          </Link>
          <Link to={urlCode} className="view-code flex gap-2 items-center">
            <img
              src="/assets/github.svg"
              alt="githubIcon"
              width={20}
              height={20}
            />
            <p className="border-b-2">Code.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
