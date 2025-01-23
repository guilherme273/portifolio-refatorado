import { AtSign, Linkedin, Smartphone } from "lucide-react";
import Underline from "../underline/underline";
import "./SectionContactStyle.css";
function SectionContact() {
  return (
    <>
      <div id="contact" className="aboutall fade-in">
        <section className="section-contact">
          <h2>Entrar Em Contato</h2>
          <Underline />
          <div className="contact">
            <div className="info">
              <div className="info-content">
                <div className="div-icon-contact">
                  <AtSign size={35} strokeWidth={1} className="icon-contact" />
                </div>
                <div className="content">
                  <h5>E-mail</h5>
                  <p>guilherme.feitosa.cunha@gmail.com</p>
                </div>
              </div>
              <div className="info-content">
                <div className="div-icon-contact">
                  <Smartphone
                    size={35}
                    strokeWidth={1}
                    className="icon-contact"
                  />
                </div>
                <div className="content">
                  <h5>Telefone</h5>
                  <p>(61) 983612376</p>
                </div>
              </div>
              <div className="info-content">
                <div className="div-icon-contact">
                  <Linkedin
                    size={35}
                    strokeWidth={1}
                    className="icon-contact"
                  />
                </div>
                <div className="content">
                  <h5>Linkedin</h5>
                  <p>www.linkedin.com/in/guilherme-cunha-249529262</p>
                </div>
              </div>
            </div>
            <div className="form-contact">
              <form action="">
                <div className="twoitens">
                  <input type="text" placeholder="Seu Nome" />
                  <input
                    type="text"
                    placeholder="Email, número de telefone ou outro contato."
                  />
                </div>
                <input type="text" placeholder="Motivo" />
                <textarea
                  placeholder="Descrição"
                  name=""
                  rows={5}
                  id=""
                ></textarea>
                <button className="btn">Enviar</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SectionContact;
