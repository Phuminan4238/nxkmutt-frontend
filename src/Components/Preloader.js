import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import axios from "axios";
import "./Preloader.css";
import { preLoaderAnim } from "../Animations";
import logored from "../Images/logored.svg";
import logobrain from "../Images/logobrain.svg";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  const logoStyle = {
    width: "60%",
    height: "auto",
    // marginLeft: "auto",
    // marginRight: "4rem",
  };

  return (
    <div className="preloader">
      <div className="texts-container">
        <span className="w-50 items-center">
          <img src={logobrain} loading="lazy" style={logoStyle} />
        </span>
        <span className="pe-4 align-middle">
          Neuroscience Center for Research and Innovation
        </span>
        {/* <span className="pe-3">for Research and Innovation</span> */}
        {/* <span className="pe-4">for Research and Innovation</span> */}
        <span className="ps-2 align-middle">KMUTT</span>
      </div>
    </div>
  );
};

export default Preloader;
