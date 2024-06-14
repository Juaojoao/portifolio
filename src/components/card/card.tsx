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
    <div
      className="
      shadow-lg w-card h-card max-lg:h-card-lg max-lg:w-card-lg max-md:w-1/3
      max-md:h-card-md rounded-lg bg-white hover:-translate-y-2 transition-all
      max-sm:w-3/4 max-sm:h-card-lg"
    >
      <div className="card-image w-full h-2/5 max-lg:h-1/3 bg-yellow-200 rounded-tl-lg rounded-tr-lg max-md:h-1/6 max-sm:h-1/6">
        {image}
      </div>

      <div className="card-content p-4 flex flex-col gap-4 justify-evenly sm:justify-between h-3/5 max-lg:h-4/6 max-md:h-5/6 max-sm:h-5/6">
        <h2 className="card-title uppercase text-center font-bold text-2xl max-lg:text-xl">
          {name}
        </h2>
        <p className="card-desc font-light text-lg max-lg:text-sm tracking-widest text-center mb-8 max-lg:mb-0 max-md:text-xs max-sm:text-base">
          {description}
        </p>
        <span className="card-tecs sm:text-xs font-light tracking-wide">
          <span className="font-bold sm:text-sm">Tecs: </span>
          {tecs}
        </span>
        <div className="card-view-code-live flex justify-around sm:text-sm max-md:text-xs">
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
