import { ChevronRight } from "lucide-react";
import "./SectionAboutStyle.css";
import Underline from "../underline/Underline.jsx";

function SectionAbout() {
  return (
    <>
      <section id="section-about" className="section-about fade-in">
        <div>
          <h2>Sobre</h2>
          <Underline />
        </div>
        <div className="about">
          <img src="/img/profile-img-_3_.png" alt="" />
          <div className="content-about">
            <ul>
              <div className="left-list">
                <li className="li-about">
                  <ChevronRight color="#0d6efd" strokeWidth={2} />
                  <strong className="strong-about">Data de Nascimento:</strong>
                  <span className="span-about">1997</span>
                </li>

                <li className="li-about">
                  <ChevronRight color="#0d6efd" strokeWidth={2} />
                  <strong className="strong-about">Telefone:</strong>
                  <span className="span-about">(61) 983612376</span>
                </li>

                <li className="li-about">
                  <ChevronRight color="#0d6efd" strokeWidth={2} />
                  <strong className="strong-about">Cidade:</strong>
                  <span className="span-about">
                    Jardim Mangueiral- Brasilia DF
                  </span>
                </li>
              </div>
              <div className="rigth-list">
                <li className="li-about">
                  <ChevronRight color="#0d6efd" strokeWidth={2} />
                  <strong className="strong-about">Idade:</strong>
                  <span className="span-about">27</span>
                </li>

                <li className="li-about">
                  <ChevronRight color="#0d6efd" strokeWidth={2} />
                  <strong className="strong-about">E-mail:</strong>
                  <span className="span-about">
                    guilherme.feitosa.cunha@gmail.com
                  </span>
                </li>

                <li className="li-about">
                  <ChevronRight color="#0d6efd" strokeWidth={2} />
                  <strong className="strong-about">Data de Nascimento:</strong>
                  <span className="span-about">1997</span>
                </li>
              </div>
            </ul>
            <p className="paragrafo-about">
              Com habilidades sólidas em PHP, Node.js e outras tecnologias,
              estou preparado para oferecer contribuições significativas no
              desenvolvimento de soluções inovadoras e de alta qualidade.
              Demonstro um compromisso contínuo com a aprendizagem e estou
              sempre buscando aprimorar minhas habilidades. Sou apaixonado por
              colaborar efetivamente em equipe, trabalhando em sintonia para
              alcançar os objetivos do projeto. Estou pronto para enfrentar
              desafios e ajudar a impulsionar o sucesso em qualquer ambiente de
              desenvolvimento.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionAbout;
