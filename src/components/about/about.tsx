export const About = () => {
  return (
    <div className="shadow-xl bg-gray-900 h-lvh sm:h-svh w-full p-6 sm:p-4 flex justify-center items-center">
      <div className="sobre">
        <div className="flex items-center justify-center gap-2">
          <div className="w-11 h-1 bg-yellow-600"></div>
          <h1 className="text-yellow-600">SOBRE MIM</h1>
          <div className="w-11 h-1 bg-yellow-600"></div>
        </div>
        <article className="text-white font-light w-3/4 sm:m-auto max-sm:w-full mt-10">
          <p className="leading-7 tracking-widest max-sm:text-sm text-2xl font-light">
            <span className="text-yellow-600"></span>
            Olá! Meu nome é{" "}
            <span className="text-yellow-600 font-light border-b border-yellow-600">
              João Vitor
            </span>{" "}
            e estou muito animado em compartilhar um pouco sobre mim com você.
            <br />
            Desde minha infância, tenho sido fascinado pela tecnologia. Meu
            interesse começou com a montagem e manutenção de computadores, um
            hobby que rapidamente se transformou em uma{" "}
            <span className="text-yellow-600 font-light border-b border-yellow-600">
              paixão pela área de TI.
            </span>
            <br />
            Ao longo dos últimos cinco anos, mergulhei de cabeça nesse mundo
            emocionante, explorando cada aspecto e aprendendo constantemente.
            <span className="text-yellow-600 font-light border-b border-yellow-600">
              Atualmente, estou focado em expandir meu conhecimento em várias
              tecnologias, com um foco especial em NODE.JS e React.
            </span>
            <br />
            Além disso, estou sempre aprimorando minhas habilidades, buscando
            garantir que estou sempre atualizado com as últimas práticas e
            ferramentas da indústria. {""}
            <span className="text-yellow-600 font-light border-b border-yellow-600">
              Eu sou apaixonado por resolver problemas complexos e criar
              soluções inovadoras que impactam positivamente a vida das pessoas.
            </span>
            {""} Estou sempre em busca de novos desafios e oportunidades para
            crescer e aprender. Além da tecnologia, tenho interesse em {""}
            <span className="text-yellow-600 font-light border-b border-yellow-600">
              Games, Filmes, Música e Esportes
            </span>
            . Acredito que é importante manter um equilíbrio saudável entre
            trabalho e vida pessoal. Estou ansioso para compartilhar mais sobre
            meu trabalho e projetos com você. {""}
            <span className="text-yellow-600 font-light border-b border-yellow-600">
              Se você tiver alguma dúvida ou quiser se conectar, não hesite em
              entrar em contato comigo!
            </span>
          </p>
        </article>
      </div>
    </div>
  );
};
