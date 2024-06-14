import { FiMail, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Contato = () => {
  return (
    <div className="h-full w-full flex flex-col gap-6 items-center">
      <div className="flex items-center justify-center gap-2">
        <div className="w-11 h-1 bg-yellow-600"></div>
        <h1 className="text-yellow-600 text-2xl lg:text-3xl font-bold">
          CONTATO
        </h1>
        <div className="w-11 h-1 bg-yellow-600"></div>
      </div>
      <div className="contato-info flex flex-col gap-2 items-center">
        <h2 className="text-xl lg:text-2xl font-bold">
          Para qualquer dúvida, entre em contato:
        </h2>
        <div className="flex gap-2">
          <FiMail className="text-yellow-600 text-xl lg:text-2xl" />
          <p className="text-base lg:text-lg text-gray-800">soloqf@gmail.com</p>
        </div>
        <div className="flex gap-2">
          <FiLinkedin className="text-yellow-600 text-xl lg:text-2xl" />
          <Link
            to={"https://www.linkedin.com/in/joaovitor-/"}
            target="_blank"
            className="border-b-2 border-primary-light"
          >
            joaovitor-
          </Link>
        </div>
        <p className="text-base lg:text-lg text-gray-800">
          Me siga no LinkedIn para mais atualizações!
        </p>
      </div>
    </div>
  );
};
