import { ChevronLeft, ChevronRight } from "lucide-react";
import "./sectionCarousel.css";
import { useRef } from "react";
import Underline from "../underline/underline";
import Project from "../projects/Projects";

function SectionCarousel() {
  const cards = useRef(null);

  const scrolLeft = (e) => {
    e.preventDefault();
    cards.current.scrollLeft -= cards.current.offsetWidth;
  };
  const scrolRigth = (e) => {
    e.preventDefault();
    cards.current.scrollLeft += cards.current.offsetWidth;
  };
  return (
    <div id="projects" className="div-carousel fade-in">
      <div>
        <h2>Projetos</h2>
        <Underline />
      </div>

      <div className="cards-carousel" ref={cards}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>

      <div className="buttons">
        <button onClick={(e) => scrolLeft(e)}>
          <ChevronLeft size={40} />
        </button>
        <button onClick={(e) => scrolRigth(e)}>
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default SectionCarousel;
