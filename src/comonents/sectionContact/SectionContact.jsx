import { AtSign, Linkedin, Smartphone } from "lucide-react";
import { useForm } from "react-hook-form";
import Underline from "../underline/underline";
import "./SectionContactStyle.css";
import { useEffect, useState } from "react";
function SectionContact() {
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    setIsDisabled(true);
    const token = grecaptcha.getResponse();

    const jsonOBJ = {
      ...data,
      "g-recaptcha-response": token,
    };
    const json = await JSON.stringify(jsonOBJ);

    const response = await fetch("http://localhost:80/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });

    if (response.ok) {
      alert("deu,bom");
    } else {
      alert("deu ruim");
    }
    setIsDisabled(false);
  };

  useEffect(() => {
    // Adiciona o script do reCAPTCHA dinamicamente
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    script.onload = () => console.log("reCAPTCHA script loaded");
    document.body.appendChild(script);

    // Limpeza do script ao desmontar o componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);
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
              <form onSubmit={handleSubmit(submit)} action="">
                <div className="twoitens">
                  <div>
                    <input
                      type="text"
                      placeholder="Seu Nome"
                      {...register("nome", { required: true })}
                      className={`input ${
                        errors?.nome?.type === "required" ? "error" : ""
                      }`}
                    />
                    {errors?.nome?.type === "required" && (
                      <p className="p-error">Nome obrigatório</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Email, número de telefone ou outro contato."
                      {...register("contato", { required: true })}
                      className={`input ${
                        errors?.contato?.type === "required" ? "error" : ""
                      }`}
                    />
                    {errors?.contato?.type === "required" && (
                      <p className="p-error">Meio de contatp obrigatório</p>
                    )}
                  </div>
                </div>

                <div className="div-motivo">
                  <input
                    type="text"
                    placeholder="Motivo"
                    {...register("motivo", { required: true })}
                    className={`input ${
                      errors?.motivo?.type === "required" ? "error" : ""
                    }`}
                  />
                  {errors?.motivo?.type === "required" && (
                    <p className="p-error">Motivo obrigatório</p>
                  )}
                </div>

                <div className="div-descricao">
                  <textarea
                    placeholder="Descrição"
                    name=""
                    rows={5}
                    id=""
                    {...register("descricao", { required: true })}
                    className={`input ${
                      errors?.descricao?.type === "required" ? "error" : ""
                    }`}
                  ></textarea>

                  {errors?.descricao?.type === "required" && (
                    <p className="p-error">Descricao obrigatório</p>
                  )}
                </div>

                <div className="recaptcha-container">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LeKpMEqAAAAAMe7gt9ZuZynGDCXqNQBg4swj9lD"
                  ></div>
                </div>

                <button
                  disabled={isDisabled}
                  type="submit"
                  className={`btn   ${isDisabled ? "disabled" : ""}`}
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SectionContact;
