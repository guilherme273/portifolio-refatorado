import { useEffect } from "react";
import "./SectionHeroStyle.css";
import Typed from "typed.js";
import { Facebook, Github, Instagram, Linkedin, Twitch } from "lucide-react";
function SectionHero() {

  const img = {
    backgroundImage: "url('/img/code-8779051_1280.png')",
    backgroundSize: "cover", // Ajusta a imagem para cobrir todo o espaço
    backgroundPosition: "center", // Centraliza a imagem
    backgroundRepeat: "no-repeat", // Evita repetições
  };
  

  useEffect(() => {
    const options = {
      strings: ["Desenvolvimento Web", "Front end", "Back end"],
      typeSpeed: 90, // Velocidade de digitação
      backSpeed: 30, // Velocidade de apagamento
      backDelay: 1000, // Tempo de espera antes de apagar
      startDelay: 500, // Tempo de espera antes de começar a digitar
      loop: true, // Repetir o efeito
      showCursor: true,
    };

    const typed = new Typed(".typed", options); // Iniciar o efeito de digitação

    // Limpar o Typed.js quando o componente for desmontado
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section id="hero" className="hero fade-in" style={img}>
      <div className="div-hero">
        <h1>Guilherme Feitosa Cunha</h1>
        <p className="typed-p">
          <span className="typed">Desenvolvimento Web</span>
          <span className="typed-cursor typed-cursor--blink" aria-hidden="true">
            |
          </span>
        </p>
        <div className="social-links">
          <a
            href="https://github.com/guilherme273"
            title="Github"
            className="twitter"
          >
            <Github size={23} />
          </a>
          <a
            title="Linkedin"
            href="https://linkedin.com/in/guilherme-cunha-249529262"
            className="facebook"
          >
            <Linkedin size={23} />
          </a>
          <a href="#" className="instagram">
            <Instagram title="Instagram" size={23} />
          </a>
          <a href="#" title="Facebook" className="google-plus">
            <Facebook size={23} />
          </a>
          <a href="#" className="Twitch">
            <Twitch size={23} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
