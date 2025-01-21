import { ChevronRight } from "lucide-react";
import "./SectionAboutStyle.css";
function SectionAbout() {
  return (
    <>
      <section id="section-about" className="section-about fade-in">
        <h2>Sobre</h2>
        <div className="about">
          <img src="/public/img/profile-img-_3_.png" alt="" />
          <div className="content-about">
            <ul>
              <div className="left-list">
                <li className="li-about">
                  <ChevronRight color="#0d6efd" strokeWidth={0.7} />
                  <strong>Data de Nascimento:</strong>
                  <span>1997</span>
                </li>

                <li className="li-about">
                  <ChevronRight color="#0d6efd" strokeWidth={0.7} />
                  <strong>Telefone:</strong>
                  <span>(61) 983612376</span>
                </li>

                <li className="li-about">
                  <ChevronRight color="#0d6efd" strokeWidth={0.7} />
                  <strong>Cidade:</strong>
                  <span>Jardim Mangueiral- Brasilia DF</span>
                </li>
              </div>
              <div className="rigth-list">
                <li className="li-about">
                  <ChevronRight color="#0d6efd" strokeWidth={0.7} />
                  <strong>Idade:</strong>
                  <span>27</span>
                </li>

                <li className="li-about">
                  <ChevronRight color="#0d6efd" strokeWidth={0.7} />
                  <strong>E-mail:</strong>
                  <span>guilherme.feitosa.cunha@gmail.com</span>
                </li>

                <li className="li-about">
                  <ChevronRight color="#0d6efd" strokeWidth={0.7} />
                  <strong>Data de Nascimento:</strong>
                  <span>1997</span>
                </li>
              </div>
            </ul>
            <p>
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
