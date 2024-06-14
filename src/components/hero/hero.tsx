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
      <div className="text-hero flex-1">
        <h1 className="text-6xl font-bold max-lg:text-4xl max-lg:text-center">
          Hi 🤠,
          <br />
          My name is
          <br />
          <span className="text-yellow-600">João Vitor</span>
          <br />i build things for the web
        </h1>
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
