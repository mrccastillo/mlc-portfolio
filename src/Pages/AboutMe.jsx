import "../Styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me" id="home">
      <div className="about-container">
        <div className="marc-photo"></div>
        <div className="about-me-container">
          <h1>MARC LOWEL CASTILLO</h1>
          <p className="highlighted-p position">{"<Front End Developer/>"}</p>
          <p className="center-text">
            I'm a 17-year-old student at the Polytechnic University of the
            Philippines with a passion for both gaming and coding. Balancing my
            academic pursuits with my love for technology, I find joy in
            creating and problem-solving, whether it's through developing
            software or diving into the latest video games.
          </p>
          <div className="skills-container">
            <div className="skill html"></div>
            <div className="skill css"></div>
            <div className="skill js"></div>
            <div className="skill react"></div>
            <div className="skill node"></div>
            <div className="skill mysql"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
