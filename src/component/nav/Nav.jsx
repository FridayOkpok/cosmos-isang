import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
// import { TiGroupOutline } from "react-icons/ti";
// import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <div className="navigation">
        <a href="#home">
          <AiOutlineHome className="icons active-nav" />
        </a>
        <a href="#contacts">
          <AiOutlineUser className="icons " />
        </a>
        {/* <a href="#members">
          <TiGroupOutline className="icons " />
        </a> */}
        {/* <a href="#home">
          <BiMessageRoundedDots className="icons " />
        </a> */}
        <a href="#fotter">
          <BsArrowDownCircle className="icons " />
        </a>
      </div>
    </>
  );
};

// let icons = document.queryselectorAll(".navigation .icon");
// icons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     changeactive();
//     icon.classList.add("active-nav");
//   });
// });

// function changeactive() {
//   icons.forEach((icon) => {
//     icon.classList.remove("active-nav");
//   });
// }

export default Nav;
