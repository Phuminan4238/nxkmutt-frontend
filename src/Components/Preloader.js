import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import axios from "axios";
import "./Preloader.css";
import { preLoaderAnim } from "../Animations";
import logored from "../Images/logored.svg";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  const logoStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>
          <img src={logored} loading="lazy" style={logoStyle} />
        </span>
        <span className="pe-3">Neuroscience Center</span>
        {/* <span className="pe-3">for Research and Innovation</span> */}
        <span>KMUTT</span>
      </div>
    </div>
  );
};

export default Preloader;
