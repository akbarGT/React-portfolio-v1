import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("about");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
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
        <span>&lt; Home/ &gt; </span>
        <span href="about" onClick={handleClickScroll}>
          {" "}
          About Me{" "}
        </span>
        <span> Projects </span>
        <span> Certificates </span>
        <span> Download CV </span>
      </div>
    </div>
  );
};

export default Navbar;
