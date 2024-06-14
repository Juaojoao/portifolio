import { useEffect, useState } from "react";

export const Hero = () => {
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    const fecthUser = async () => {
      const response = await fetch("https://api.github.com/users/Juaojoao");
      const user = await response.json();

      setUserAvatar(user.avatar_url);
    };

    fecthUser();
  }, []);

  return (
    <div className="flex max-lg:flex-col max-lg:gap-10 items-center justify-center">
      <div className="text-hero flex-1 xl:text-5xl max-sm:text-3xl font-medium text-4xl text-center">
        <p>
          Olá 🤠,
          <br />
          Meu nome é {""}
          <span className="text-yellow-600 font-bold">João Vitor</span>.
        </p>
        <p>
          Criando{" "}
          <span className="text-yellow-600 font-bold">experiências</span>
        </p>
        <p>
          digitais que {""}
          <span className="text-yellow-600 font-bold">inspiram</span> e {""}
          <span className="text-yellow-600 font-bold">transformam</span>.
        </p>
      </div>
      <div className="image-hero flex-1">
        <img
          src={userAvatar}
          alt="João Vitor"
          className="rounded-full border-8 w-96 h-96 m-auto border-yellow-600"
        />
      </div>
    </div>
  );
};
