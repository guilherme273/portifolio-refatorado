import { ArrowUp } from "lucide-react";
import "./App.css";

import Header from "./comonents/header/Header";
import SectionAbout from "./comonents/sectionAbout/SectionAbout";
import SectionHero from "./comonents/sectionHero/SectionHero";
import SectionSkills from "./comonents/sectionSkills/SectionSkills";
import SectionExperiences from "./comonents/sectionExperiences/sectionExperiences";
import { useEffect } from "react";
import Certificates from "./comonents/sectionCertificates/Certificates";
import SectionCarousel from "./comonents/sectionCarousel/sectionCaroucel";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Para de observar o elemento após a animação
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // O elemento será considerado visível quando 50% dele aparecer na tela
    });

    // Selecione todos os elementos com a classe "fade-in" e inicie a observação
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup: parar de observar quando o componente for desmontado
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <section className="body">
        <Header />
        <SectionHero />
        <SectionAbout />
        <SectionSkills />
        <SectionExperiences />
        <Certificates />
        <SectionCarousel />
        <div className="div-button-up">
          <button onClick={scrollToTop} className="button-up">
            <ArrowUp color="aliceblue" size={30} />
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
