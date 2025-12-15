import React, { useState } from "react";
import LottieAnimation from "../components/LottieAnimation";
import GSAPAnimation from "../components/GSAPAnimation";
import ProgressBarAnimation from "../components/ProgressBarAnimation";
import { spinnerLoaderAnimation, progressLoaderAnimation } from "../animations/loaderAnimation";
import "./Screen.css";

const LoadersScreen = () => {
  const [loading, setLoading] = useState(false);

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="screen loaders-screen">
      <div className="screen-container">
        <h1 className="screen-title">Лоадеры и Индикаторы Загрузки</h1>
        <p className="screen-description">Различные типы лоадеров для отображения процесса загрузки</p>

        <div className="animations-grid">
          <div className="animation-card-large">
            <h3>Спиннер</h3>
            <p className="animation-description">Lottie анимация</p>
            <div className="animation-wrapper">
              <LottieAnimation animationData={spinnerLoaderAnimation} style={{ width: "150px", height: "150px" }} />
            </div>
            <div className="animation-info">
              <span className="badge">Lottie</span>
              <span className="badge">Лоадер</span>
            </div>
          </div>

          <div className="animation-card-large">
            <h3>GSAP Спиннер</h3>
            <p className="animation-description">GSAP анимация</p>
            <div className="animation-wrapper">
              <GSAPAnimation type="spinner" />
            </div>
            <div className="animation-info">
              <span className="badge">GSAP</span>
              <span className="badge">Лоадер</span>
            </div>
          </div>

          <div className="animation-card-large">
            <h3>Прогресс Бар</h3>
            <p className="animation-description">GSAP анимация (альтернатива Lottie)</p>
            <div className="animation-wrapper">
              <ProgressBarAnimation />
            </div>
            <div className="animation-info">
              <span className="badge">GSAP</span>
              <span className="badge">Лоадер</span>
            </div>
          </div>

          <div className="animation-card-large">
            <h3>Интерактивный Лоадер</h3>
            <p className="animation-description">Нажмите кнопку для демонстрации</p>
            <div className="animation-wrapper">
              {loading ? (
                <GSAPAnimation type="spinner" />
              ) : (
                <div className="loader-placeholder">
                  <p>Нажмите кнопку</p>
                </div>
              )}
            </div>
            <button onClick={simulateLoading} className="demo-button" disabled={loading}>
              {loading ? "Загрузка..." : "Запустить загрузку"}
            </button>
            <div className="animation-info">
              <span className="badge">GSAP</span>
              <span className="badge">Интерактивный</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadersScreen;
