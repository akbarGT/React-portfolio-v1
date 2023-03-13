import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      // 👇Smooth Scroll to the section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="navbar">
        <span
          style={{
            fontSize: "2.5em",
            paddingTop: "0.5%",
            left: "100px",
            position: "absolute",
          }}
          className="logo"
        >
          AKBAR AHMED.
        </span>
        <ul>
          <li>&lt; Home /&gt; </li>
          <li href="about" onClick={handleClickScroll}>
            {" "}
            About Me{" "}
          </li>
          <li> Projects </li>
          <li> Certificates </li>
          <li> Download CV </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
