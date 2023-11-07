import "./contact.css";
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

import React from "react";

const Contact = () => {
  return (
    <div id="contacts" className="container contact-container">
      <h1> contact me </h1>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/cosmos-isang-28ba4a160?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="contact linkedin"
        >
          <div className="iconContainer">
            <FaLinkedin className="icon" />
          </div>
          <h2>
            {" "}
            Linkedin<span>cosmos-isang</span>{" "}
          </h2>
        </a>
        <a href="#" className="contact twitter">
          <div className="iconContainer">
            <FaTwitter className="icon" />
          </div>
          <h2>
            {" "}
            twitter<span> @cosmosisang111 </span>{" "}
          </h2>
        </a>
        <a href="https://wa.me/qr/7FRC64LHZPXKN1" className="contact whatsapp">
          <div className="iconContainer">
            <FaWhatsapp className="icon" />
          </div>
          <h2>
            {" "}
            whatsapp<span> </span>{" "}
          </h2>
        </a>
      </div>
    </div>
  );
};

export default Contact;
