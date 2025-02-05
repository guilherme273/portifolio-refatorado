import { AtSign, Linkedin, Smartphone } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Underline from "../underline/Underline.jsx";
import "./SectionContactStyle.css";

function SectionContact() {
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const submit = async (data) => {
    setIsDisabled(true);
    const token = grecaptcha.getResponse();

    if (!token) {
      toast.error("Por favor, complete o reCAPTCHA.");
      setIsDisabled(false);
      return;
    }

    const jsonOBJ = {
      ...data,
      "g-recaptcha-response": token,
    };

    try {
      const response = await fetch("http://localhost:80/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonOBJ),
      });

      const responseData = await response.json();

      toast(responseData.message, {
        autoClose: 5000,
        hideProgressBar: true,
        closeButton: true,
        pauseOnHover: true,
        style: {
          backgroundColor: response.ok ? "#28a745" : "#dc3545",
          color: "white",
          fontWeight: "bold",
        },
      });
    } catch (error) {
      toast.error("Erro ao enviar o formulário. Tente novamente mais tarde.");
    }

    setIsDisabled(false);
  };

  return (
    <div id="contact" className="aboutall fade-in">
      <section className="section-contact">
        <h2>Entrar Em Contato</h2>
        <Underline />
        <div className="contact">
          <div className="info">
            <div className="info-content">
              <AtSign size={35} strokeWidth={1} className="icon-contact" />
              <div className="content">
                <h5>E-mail</h5>
                <p>guilherme.feitosa.cunha@gmail.com</p>
              </div>
            </div>
            <div className="info-content">
              <Smartphone size={35} strokeWidth={1} className="icon-contact" />
              <div className="content">
                <h5>Telefone</h5>
                <p>(61) 983612376</p>
              </div>
            </div>
            <div className="info-content">
              <Linkedin size={35} strokeWidth={1} className="icon-contact" />
              <div className="content">
                <h5>Linkedin</h5>
                <p>www.linkedin.com/in/guilherme-cunha-249529262</p>
              </div>
            </div>
          </div>
          <div className="form-contact">
            <form onSubmit={handleSubmit(submit)}>
              <div className="twoitens">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  maxLength={40}
                  {...register("nome", { required: true })}
                  className={`input ${errors.nome ? "error" : ""}`}
                />
                {errors.nome && <p className="p-error">Nome obrigatório</p>}
                <input
                  type="text"
                  placeholder="Email ou telefone"
                  maxLength={90}
                  {...register("contato", { required: true })}
                  className={`input ${errors.contato ? "error" : ""}`}
                />
                {errors.contato && (
                  <p className="p-error">Contato obrigatório</p>
                )}
              </div>
              <input
                type="text"
                placeholder="Motivo"
                maxLength={90}
                {...register("motivo", { required: true })}
                className={`input ${errors.motivo ? "error" : ""}`}
              />
              {errors.motivo && <p className="p-error">Motivo obrigatório</p>}
              <textarea
                placeholder="Descrição"
                maxLength={490}
                rows={5}
                {...register("descricao", { required: true })}
                className={`input ${errors.descricao ? "error" : ""}`}
              ></textarea>
              {errors.descricao && (
                <p className="p-error">Descrição obrigatória</p>
              )}
              <div
                className="g-recaptcha"
                data-sitekey="6LdRPs0qAAAAAOE1OiikFt4PkBLz-2sPfUTFNZh4"
                data-theme="dark"
              ></div>
              <button
                disabled={isDisabled}
                type="submit"
                className={`btn ${isDisabled ? "disabled" : ""}`}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionContact;
