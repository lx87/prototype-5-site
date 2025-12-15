import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import "./LottieAnimation.css";

const LottieAnimation = ({ animationData, className = "", loop = true, autoplay = true, style = {} }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!animationData) {
      setError(true);
    }
  }, [animationData]);

  if (error || !animationData) {
    return (
      <div className={`lottie-container ${className}`} style={style}>
        <div style={{ color: "#999", fontSize: "14px" }}>Анимация не загружена</div>
      </div>
    );
  }

  try {
    return (
      <div className={`lottie-container ${className}`} style={style}>
        <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
      </div>
    );
  } catch (err) {
    console.error("Lottie animation error:", err);
    return (
      <div className={`lottie-container ${className}`} style={style}>
        <div style={{ color: "#999", fontSize: "14px" }}>Ошибка загрузки анимации</div>
      </div>
    );
  }
};

export default LottieAnimation;
