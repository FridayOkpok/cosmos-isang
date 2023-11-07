import "./members.css";
import React from "react";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Members</h1>
      <div className="members member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name"> Chryz </h1>
          <h3 className="position"> leader </h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            reprehenderit ipsa quam similique, neque dolorum aperiam blanditiis.
            Aut, doloremque quis?
          </h4>
          <a href="#contact" className="contact-member">
            <span> contact </span>
          </a>
        </div>
      </div>
      <div className="members member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name"> Chryz </h1>
          <h3 className="position"> leader </h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            reprehenderit ipsa quam similique, neque dolorum aperiam blanditiis.
            Aut, doloremque quis?
          </h4>
          <a href="#contact" className="contact-member">
            <span> contact </span>
          </a>
        </div>
      </div>
      <div className="members member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name"> Nathaniel </h1>
          <h3 className="position"> SEc </h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            reprehenderit ipsa quam similique, neque dolorum aperiam blanditiis.
            Aut, doloremque quis?
          </h4>
          <a href="#contact" className="contact-member">
            <span> contact </span>
          </a>
        </div>
      </div>
      <div className="members member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name"> james </h1>
          <h3 className="position"> SEc </h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            reprehenderit ipsa quam similique, neque dolorum aperiam blanditiis.
            Aut, doloremque quis?
          </h4>
          <a href="#contact" className="contact-member">
            <span> contact </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
