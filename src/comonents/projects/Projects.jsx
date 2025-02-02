import "./PeojectsStyle.css";
function Project({ proj }) {
  const backgroundimage = {
    backgroundImage: `url(${proj.urlIMG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  return (
    <>
      <section className="section-projects">
        <div className="card-project">
          <div style={backgroundimage} className="image-project"></div>
          <div className="content-project">
            <h2 className="h2-project">{proj.title}</h2>

            <p className="p-project">{proj.description}</p>

            <a className="button-project" href={proj.urlProject}>
              Visitar Projeto
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
