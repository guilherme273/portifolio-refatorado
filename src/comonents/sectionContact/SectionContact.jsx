import "./SectionContactStyle.css";
function SectionContact() {
  return (
    <>
      <div className="aboutall">
        <section className="section-contact">
          <h2>Entrar Em Contato</h2>

          <div className="contact">
            <div className="info">
              <p>
                Caso queire entrar em contato preencha o formulário que retorno
                assim que possivel
              </p>
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
