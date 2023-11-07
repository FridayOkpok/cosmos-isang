import "./header.css";

import React from "react";

const Header = () => {
  return (
    <>
      <div id="home" className="container header-container">
        <h3>
          {" "}
          <p>
            I<span>'</span>m
          </p>{" "}
          Isang, Cosmos Obodom
          <address>
            {" "}
            A data analyst, Graphics Designer , Business Consultant{" "}
          </address>
        </h3>
      </div>
    </>
  );
};

export default Header;
