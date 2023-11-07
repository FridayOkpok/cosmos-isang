import "./home.css";
import img1 from "../props/IMG_8758.jpeg";
import { BsMouse } from "react-icons/bs";
import Button from "../button/Button";
function Home() {
  return (
    <>
      <div id="home" className="container home-container">
        <div className="logo">
          {/* <div className="main-img">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div> */}

          <img src={img1} alt="" />
        </div>

        <h2>
          <span> About Me </span> <br />
          <p>
            I am a dedicated and highly motivated individual, known for my
            exceptional ability to lead effectively and manage multiple tasks
            with precision. My unwavering commitment to continuous learning and
            growth drives my passion for making a meaningful impact in the
            realms of graphics design, data science, and analysis. I am eager to
            harness my skills and knowledge to excel in these fields and
            contribute to their ever-evolving landscapes.
          </p>
        </h2>
        <Button />
      </div>
    </>
  );
}

// const toggle = document.querySelector(".main-img");
// toggle.addEventListener("click", () => {
//   toggle.classList.toggle("active");
// });

export default Home;
