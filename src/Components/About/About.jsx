import React from "react";
import "./About.css";
import about_img from "./about.png";
import play_icon from "./about.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" />
      </div>
      <div className="about-right">
        <img src={about_img} alt="" />
      </div>
    </div>
  );
};

export default About;
