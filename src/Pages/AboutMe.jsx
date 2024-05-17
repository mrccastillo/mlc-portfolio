import "../Styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me" id="home">
      <div className="about-container">
        <div className="marc-photo"></div>
        <div className="about-me-container">
          <h1>MARC LOWEL CASTILLO</h1>
          <p className="highlighted-p position">{"<Front End Developer/>"}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sagittis ligula ac velit feugiat commodo. Pellentesque venenatis
            consectetur semper. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum sagittis ligula ac velit feugiat
            commodo. Pellentesque venenatis consectetur semper.
          </p>
          <div className="skills-container">
            <div className="skill"></div>
            <div className="skill"></div>
            <div className="skill"></div>
            <div className="skill"></div>
            <div className="skill"></div>
            <div className="skill"></div>
            <div className="skill"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
