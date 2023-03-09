import React from "react";
import "./Navbar.css";

const Navbar = () => {
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
        <span>&lt; Home/ &gt; </span>
        <span href="about"> About Me </span>
        <span> Projects </span>
        <span> Certificates </span>
        <span> Download CV </span>
      </div>
    </div>
  );
};

export default Navbar;
