import "./qualifications.css";

import React from "react";

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">My Qualifications</span>
      <div className="qualifications-container">
        <div className="qualifications">
          <div className="content html"></div>
          <h1>HTML</h1>
        </div>
        <div className="qualifications">
          <div className="content CSS"></div>
          <h1>CSS</h1>
        </div>
        <div className="qualifications">
          <div className="content SASS"></div>
          <h1>SASS</h1>
        </div>
        <div className="qualifications">
          <div className="content JavaScript"></div>
          <h1>JavaScript</h1>
        </div>
        <div className="qualifications">
          <div className="content ReactJS"></div>
          <h1>ReactJS</h1>
        </div>
        <div className="qualifications">
          <div className="content NextJS"></div>
          <h1>NextJS</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
