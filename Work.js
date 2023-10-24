import React from "react";
import BackgroundImage from "../Assets/about-background-image2.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container"></div>
      <div className="about-section-image-container">
        <img src={BackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">c o m o d i d a d e</p>
        <h1 className="primary-heading3">“C O M O D I D A D E”</h1>
        <p className="primary-heading">Sem necessidade de cadastro</p>
        <p className="primary-text">
          Não precisa se cadastrar é só acessar o menu do seu restaurante
          preferido, escolher seus produtos e correr pro abraço.
        </p>
      </div>
    </div>
  );
};

export default About;
