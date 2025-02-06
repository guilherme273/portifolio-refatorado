import {
  AlignJustify,
  BookText,
  EqualApproximately,
  GraduationCap,
  House,
  Mail,
} from "lucide-react";
import "./HeaderStyle.css";
import { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);
  const [classMobile, setClassMobile] = useState('header');


  const ShowOrToHide = () => {
    setShow(!show);
    if(show){
      setClassMobile('header-inline');
    } else {
      setClassMobile('header');
    }
  }

  return (
    <>
    <button onClick={ShowOrToHide} className="button-bobile-header"><AlignJustify /></button>
    <header className={classMobile}>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#hero">
              <House strokeWidth={1} className="iconicon" size={25} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#section-about">
              <EqualApproximately
                strokeWidth={1}
                className="iconicon"
                size={25}
              />
              <span>Sobre</span>
            </a>
          </li>
          <li>
            <a href="#academyc-formation">
              <GraduationCap strokeWidth={1} className="iconicon" size={25} />
              <span>Formação / Experiências</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <BookText strokeWidth={1} className="iconicon" size={25} />
              <span>Projetos</span>
            </a>
          </li>

          <li>
            <a href="#contact">
              <Mail strokeWidth={1} className="iconicon" size={25} />
              <span>Contato</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;
