import React from "react";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container"></div>
        <div className="home-text-section">
          <h1 className="primary-heading">Não entre nessa</h1>{" "}
          <h1 className="primary-heading2">fila!</h1>
          <p className="primary-text">
            Opss, quer dizer não entre nessa fria.
            <p className="primary-text">Apenas "Pick” e então Pegue.</p>
          </p>
          <button className="secondary-button">
            Download Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
