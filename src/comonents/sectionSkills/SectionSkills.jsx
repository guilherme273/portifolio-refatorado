import Underline from "../underline/underline";
import "./SectionSkills.css";
function SectionSkills() {
  return (
    <>
      <section className="section-skills fade-in">
        <div>
          <h2>Habilidades</h2>
          <Underline />
        </div>
        <div className="skills">
          <img
            src="/public/img/prog-nodejs01_icon-icons.com_50781.png"
            alt=""
          />
          <img src="/public/img/OIP (1) (2).png" alt="" />
          <img src="/public/img/php.png" alt="" />
          <img src="/public/img/js.png" alt="" />
          <img src="/public/img/html-5.png" alt="" />
          <img src="/public/img/css-3 (4).png" alt="" />
        </div>
      </section>
    </>
  );
}

export default SectionSkills;
