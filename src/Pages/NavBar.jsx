import { useState } from "react";
import "../Styles/Nav.css";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const screenSize = window.innerWidth;

  return (
    <div className="navbar">
      <div className="logo"></div>
      {screenSize > 900 ? (
        <div className="links">
          <a href="#home">HOME</a>
          <a href="#projects">PROJECTS</a>
          <a href="#testimonials">TESTIMONIALS</a>
          <a href="#contact">CONTACTS</a>
          <a href="">RESUME</a>
        </div>
      ) : (
        <>
          <div
            className={`hamburger-icon ${isNavOpen && "close-icon"}`}
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          ></div>
          <div className={`links hide ${isNavOpen && "show"}`}>
            <a href="#home">HOME</a>
            <a href="#projects">PROJECTS</a>
            <a href="#testimonials">TESTIMONIALS</a>
            <a href="#contact">CONTACTS</a>
            <a href="">RESUME</a>
          </div>
        </>
      )}
    </div>
  );
}

export default NavBar;
