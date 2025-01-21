import { ChevronLeft, ChevronRight } from "lucide-react";
import "./sectionCarousel.css";
import { useRef } from "react";

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
    <div className="div-carousel">
      <h2>titulo</h2>
      <div className="cards-carousel" ref={cards}>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
        <div className="div-content-card-carousel">dasdassd</div>
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
