import "./SectionSkills.css";
import Underline from "../underline/Underline.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons"; // Importe o ícone que você deseja usar

function SectionSkills() {
  return (
    <>
      <section className="section-skills fade-in">
        <div>
          <h2>Habilidades</h2>
          <Underline />
        </div>
        <div className="skills">
          <div className="icon-and-p">
            <FontAwesomeIcon className="icon-skill react" icon={faReact} />
            <p className="p">React</p>
          </div>
          <div className="icon-and-p">
            <FontAwesomeIcon className="icon-skill node" icon={faNode} />
            <p className="p">NodeJS</p>
          </div>
          <div className="icon-and-p">
            <FontAwesomeIcon className="icon-skill php" icon={faPhp} />
            <p className="p">Php</p>
          </div>
          <div className="icon-and-p">
            <FontAwesomeIcon className="icon-skill js" icon={faJs} />
            <p className="p">Java Script</p>
          </div>
          <div className="icon-and-p">
            <FontAwesomeIcon className="icon-skill html" icon={faHtml5} />
            <p className="p">HTML</p>
          </div>

          <div className="icon-and-p">
            <FontAwesomeIcon className="icon-skill" icon={faCss3Alt} />
            <p className="p">CSS</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionSkills;
