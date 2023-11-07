import "./App.css";

import React from "react";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Members from "./component/members/Members";
import Contact from "./component/contact/Contact";
import Fotter from "./component/footer/Fotter";

export function App() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Nav />
      <Home />
      <About />
      {/* <Members /> */}
      <Contact />
      <Fotter />
    </>
  );
}
