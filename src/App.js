import devimg1 from "./webdev1.png";
import projectImg from "./projects.gif";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <div className="landing">
        <div className="landingText">
          <div className="uspbuttonbox">
            <div className="uspButton">Front-End Developer</div>
            <div className="uspButton">Node.js</div>
            <div className="uspButton">DBA</div>
          </div>
          <span>I'm Full-Stack Web Developer.</span>
          <p>
            I design and code beautiful simple things, and I love what I do.
          </p>
        </div>
        <img src={devimg1} alt="" />
      </div>
      <div className="aboutme">
        <div className="uspbox">
          <div className="keybox">
            <h2>UI/UX Design</h2>
            <span>I create design products with unique ideas.</span>
            <p>2 Projects.</p>
          </div>
          <div className="keybox">
            <h2>Web Design</h2>
            <span>I develop Front-End with coding super smooth.</span>
            <p>2 Projects.</p>
          </div>
          <div className="keybox">
            <h2>Mobile App</h2>
            <span>I develop cross-platform rnobile applications.</span>
            <p>2 Projects.</p>
          </div>
        </div>
        <div id="about" className="aboutText">
          <h4>About Me:</h4>
          <h1 style={{ marginBottom: "50px" }}>Hello, I'm Akbar Ahmed</h1>
          <span
            style={{
              color: "#777777",
              fontWeight: "700",
              letterSpacing: "1px",
              fontSize: "1.1em",
              paddingTop: "90px",
            }}
          >
            A skilled Web developer specialising in React, Node.js, and
            JavaScript, I possess a strong technical background and extensive
            experience in building dynamic and interactive web applications With
            expertise in React, a popular JavaScript library for building user
            interfaces, I can develop engaging and responsive front-end
            components that provide an exceptional user experience.
            <br />
            <br />
            Additionally, my knowledge of Node.js, a robust runtime environment
            for JavaScript, enables me to build efficient and scalable
            server-side applications that can handle heavy traffic. As a
            dedicated and detail-oriented developer, I'm committed to delivering
            high-quality software solutions that meet the needs of clients and
            end-user.
          </span>
        </div>
      </div>
      <div className="projects">
        <div className="projectHeading">
          <img src={projectImg} alt="" />
          <h1>Projects</h1>
        </div>
        <div className="projectsGrid">
          <div className="projectid">
            <h2>Cloudy Notes</h2>
          </div>
          <div className="projectid">
            <h2>EnVn</h2>
          </div>
          <div className="projectid">
            <h2>IzuNews</h2>
          </div>
        </div>
      </div>
      <Footer id="" />
    </div>
  );
}

export default App;
