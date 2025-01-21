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
              <House className="icon" size={25} />
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="#section-about">
              <EqualApproximately className="icon" size={25} />
              <span>Sobre</span>
            </a>
          </li>
          <li>
            <a href="#">
              <GraduationCap className="icon" size={25} />
              <span>Formação Acadêmica</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BookText className="icon" size={25} />
              <span>Projetos</span>
            </a>
          </li>

          <li>
            <a href="#">
              <Mail className="icon" size={25} />
              <span>Contato</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
