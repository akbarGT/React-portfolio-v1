import React from "react";
import "./Footer.css";
import gitIcon from "./images/github.png";
import linkedinIcon from "./images/linkedin.png";
import twitterIcon from "./images/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <h3 style={{ color: "white" }}>
        COPYRIGHT © 2023 AKBAR AHMED - ALL RIGHTS RESERVED.
      </h3>
      <div className="socials">
        <img src={twitterIcon} alt="" />
        <img src={linkedinIcon} alt="" />
        <img src={gitIcon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
