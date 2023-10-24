import React from "react";
import BackgroundImage from "../Assets/about-background-image3.png";
import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container2">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={BackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading3">Não fique fora dessa</h1>
        <div className="about-buttons-container">
          <button className="secondary-button2">Cadastre-se Já</button>
        </div>
      </div>
    </div>
  );
};

export default About;
