import "./about.css";
// import Qualifications from "../qualifications/Qualifications";

import React from "react";

const About = () => {
  return (
    <div id="#about" className="container about-container">
      <div className="skills">
        <div className="skillCard">
          <h2>Data Analysis</h2>
          <p>
            Proficient with data analysis, showcasing insights through
            visualization and data-driven decisions on projects. <br />{" "}
            <span>Technologies i use</span>
          </p>
          <ul>
            <li>SQL (postgresql & Mysql)</li>
            <li>Excel & Google sheets</li>
            <li>PowerBi & Tabulea</li>
            <li>R</li>
          </ul>
        </div>
        <div className="skillCard">
          <h2>Graphics Design</h2>
          <p>
            Skilled in creating visually stunning graphics, blending creativity
            and aesthetics to deliver compelling design in various projects.{" "}
            <br />
            <span>Editors i use</span>
          </p>
          <ul>
            <li>Corel draw</li>
            <li>Photoshop</li>
            <li>Adobe illustrator</li>
          </ul>
        </div>
        <div className="skillCard">
          <h2>Animations</h2>
          <p>
            Proficientin animation, bring characters and stories to life through
            motion and storytelling.
          </p>
          <ul>
            <li>Adobe Aftereffect</li>
            <li>Adobe premium pro</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
