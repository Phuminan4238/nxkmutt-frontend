import React from "react";
import { useState, useEffect, setIsLoaded } from "react";
import axios from "axios";
import "./Preloader.css";
import { preLoaderAnim } from "../Animations";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span className="pe-3">Neuroscience Center</span>
        <span className="pe-3">for Research and Innovation</span>
        <span>KMUTT</span>
      </div>
    </div>
  );
};

export default Preloader;
