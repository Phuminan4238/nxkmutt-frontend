import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import axios from "axios";
import "./Preloader.css";
import { preLoaderAnim } from "../Animations";
import logored from "../Images/logored.svg";
import logobrain from "../Images/logobrain.svg";
import logotext from "../Images/logotext.svg";
import logokmutt from "../Images/logokmutt.png";

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
    width: "80%",
    height: "auto",
    // marginLeft: "auto",
    // marginRight: "4rem",
  };

  const logokmuttStyle = {
    width: "70%",
    height: "auto",
    // marginLeft: "auto",
    // marginRight: "4rem",
  };

  return (
    <div className="preloader">
      <div className="flex items-center texts-container">
        <span className="w-60 items-center pe-4" style={{ textAlign: "right" }}>
          <img src={logokmutt} loading="lazy" style={logokmuttStyle} />
        </span>
        <span className="w-100 items-center">
          <img src={logored} loading="lazy" style={logobrainStyle} />
        </span>
        {/* <span className="w-100 items-center">
          <img src={logotext} loading="lazy" style={logotextStyle} />
        </span> */}
        {/* <span className="pe-4 align-middle">
          Neuroscience Center for Research and Innovation
        </span> */}
        {/* <span className="ps-5 align-middle">KMUTT</span> */}
      </div>
    </div>
  );
};

export default Preloader;
