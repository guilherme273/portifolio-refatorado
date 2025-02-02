import { ChevronLeft, ChevronRight } from "lucide-react";
import "./sectionCarousel.css";
import { useRef } from "react";
import Underline from "../underline/Underline.jsx";
import Project from "../projects/Projects";

function SectionCarousel() {
  const projects = [
    {
      title: "G Flix",
      urlIMG: "/public/img/g-flix.png",
      description:
        "Projedo desenvolvido e inspirado em plataformas de streaming, com integração de vídeos do YouTube. No front-end, utilizei React com HTML e CSS puro, enquanto o back-end foi construído com Node.js, com interação com banco de dados para gerenciar dados dos usuários e preferências. O sistema conta com autenticação JWT para login seguro, gerando tokens armazenados no localStorage, além de registro de usuários protegido por criptografia com bcrypt. Inclui funcionalidades como curtir vídeos, gerenciar uma aba de favoritos personalizada para cada usuário, e foi desenvolvido utilizando diversos hooks para formulários, rotas, pesquisa e manipulação de elementos.",
      urlProject: "https://jogo-palavra-react.vercel.app/",
    },
    {
      title: "Jogo da Palavra",
      urlIMG: "/public/img/jogo-palavra.png",
      description:
        "Recriei um jogo de adivinhação de palavras que eu costumava jogar bastante, onde o objetivo é descobrir a palavra correta a partir de dicas fornecidas após cada tentativa. A cada letra inserida, o sistema oferece feedback visual: letras corretas no lugar certo são indicadas em verde, e letras existentes, mas fora de lugar, aparecem em amarelo. O jogo foi construído em React, utilizando HTML, CSS e JavaScript puro, com manipulação de elementos através de hooks para uma experiência interativa. A lógica do jogo é bem estruturada, oferecendo um desafio divertido e viciante para passar o tempo.",
      urlProject: "https://jogo-palavra-react.vercel.app/",
    },
  ];
  const cards = useRef(null);

  const scrollLeft = () => {
    cards.current.scrollLeft -= cards.current.offsetWidth;
  };
  const scrollRight = () => {
    cards.current.scrollLeft += cards.current.offsetWidth;
  };

  return (
    <div id="projects" className="div-carousel fade-in">
      <div className="header-carousel">
        <h2>Projetos</h2>
        <Underline />
      </div>

      <div className="cards-carousel" ref={cards}>
        {projects.map((project) => {
          return <Project key={project.urlIMG} proj={project} />;
        })}
      </div>

      <div className="buttons">
        <button onClick={scrollLeft} className="btn-nav">
          <ChevronLeft size={40} />
        </button>
        <button onClick={scrollRight} className="btn-nav">
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default SectionCarousel;
