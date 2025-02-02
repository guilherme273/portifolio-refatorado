import {
  BookText,
  EqualApproximately,
  GraduationCap,
  House,
  Mail,
} from "lucide-react";
import "./HeaderStyle.css";

function Header() {
  return (
    <header className="header">
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
  );
}

export default Header;
