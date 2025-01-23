import "./PeojectsStyle.css";
function Project() {
  const backgroundimage = {
    backgroundImage: `url('/public/img/image.psd (1).png')`,
  };
  return (
    <>
      <section className="section-projects">
        <div className="card-project">
          <div style={backgroundimage} className="image-project"></div>
          <div className="content-project">
            <h2 className="h2-project">Gflix</h2>

            <p className="p-project">
              projeto feito em node js e react com sistemade autentiação com
              jwt, comunicação de api, ultilização dos principais hooks do react
              como rewck hok form, use state use ref e muito mais...
            </p>
            <button className="button-project">Visitar Projeto</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
