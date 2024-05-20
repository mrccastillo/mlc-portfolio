import "../Styles/Projects.css";

function Projects(props) {
  return (
    <div className="projects" id="projects">
      <h2 className="project-header">PROJECTS</h2>
      <div className="projects-wrapper">
        <div className="project-container">
          <div className="project-info">
            <h3>DOS 2.0</h3>
            <p className="project-contributor">
              Contributors: Marc Lowel J. Castillo {"(Front End)"}, Sean Paul
              Monton {"(Back End)"}
            </p>
            <p className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              labore sint itaque odio aspernatur ad velit. Amet esse quo cumque,
              saepe, eos recusandae excepturi, consequatur aut eaque aliquam
              natus. Enim?
            </p>
            <div className="tech-stacks">
              <span className="chip purple">CSS</span>
              <span className="chip blue">ReactJS</span>
              <span className="chip cyan">NodeJS</span>
              <span className="chip pink">ExpressJS</span>
              <span className="chip green">MongoDB</span>
            </div>
          </div>
          <div className="project-preview"></div>
        </div>
        <div className="project-container">
          <div className="project-preview"></div>
          <div className="project-info">
            <h3>PRIS</h3>
            <p className="project-contributor">
              Contributors: Marc Lowel J. Castillo {"(Full Stack)"}
            </p>
            <p className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              labore sint itaque odio aspernatur ad velit. Amet esse quo cumque,
              saepe, eos recusandae excepturi, consequatur aut eaque aliquam
              natus. Enim?
            </p>
            <div className="tech-stacks">
              <span className="chip purple">CSS</span>
              <span className="chip blue">ReactJS</span>
              <span className="chip cyan">NodeJS</span>
              <span className="chip pink">ExpressJS</span>
              <span className="chip orange-pink">MYSQL</span>
            </div>
          </div>
        </div>
        <div className="project-container">
          <div className="project-info">
            <h3>Senjo Maps</h3>
            <p className="project-contributor">
              Contributors: Marc Lowel J. Castillo {"(Full Stack)"}
            </p>
            <p className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              labore sint itaque odio aspernatur ad velit. Amet esse quo cumque,
              saepe, eos recusandae excepturi, consequatur aut eaque aliquam
              natus. Enim?
            </p>
            <div className="tech-stacks">
              <span className="chip purple">CSS</span>
              <span className="chip blue">ReactJS</span>
              <span className="chip cyan">Google Cloud API</span>
            </div>
          </div>
          <div className="project-preview"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
