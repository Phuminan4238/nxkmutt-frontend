import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

const Animation = ({ imageUrl }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      setLoaded(true);
    };

    return () => {
      image.onload = null;
    };
  }, [imageUrl]);

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => {
        setLoaded(false);
      }, 1000); // Adjust the fade-out duration (in milliseconds) here

      return () => clearTimeout(timer);
    }
  }, [loaded]);

  return (
    <div className={`preloader ${loaded ? "loaded" : ""}`}>
      <div className="preloader-inner">
        <div className="spinner"></div>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Animation;
