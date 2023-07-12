import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import axios from "axios";
import "./Preloader.css";
import { preLoaderAnim } from "../Animations";
import logored from "../Images/logored.svg";
import logobrain from "../Images/logobrain.svg";
import logotext from "../Images/logotext.svg";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  const logotextStyle = {
    width: "100%",
    height: "auto",
    // marginLeft: "auto",
    // marginRight: "4rem",
  };

  const logobrainStyle = {
    width: "60%",
    height: "auto",
    // marginLeft: "auto",
    // marginRight: "4rem",
  };

  return (
    <div className="preloader">
      <div className="texts-container">
        <span className="w-50 items-center">
          <img src={logobrain} loading="lazy" style={logobrainStyle} />
        </span>
        <span className="w-100 items-center">
          <img src={logotext} loading="lazy" style={logotextStyle} />
        </span>
        {/* <span className="pe-4 align-middle">
          Neuroscience Center for Research and Innovation
        </span> */}
        {/* <span className="pe-3">for Research and Innovation</span> */}
        {/* <span className="pe-4">for Research and Innovation</span> */}
        <span className="ps-5 align-middle">KMUTT</span>
      </div>
    </div>
  );
};

export default Preloader;
