import React, { useState } from "react";
import GSAPAnimation from "../components/GSAPAnimation";
import LottieAnimation from "../components/LottieAnimation";
import { pulseAnimation } from "../animations/otherAnimations";
import "./Screen.css";

const InteractiveScreen = () => {
  const [activeAnimation, setActiveAnimation] = useState(null);

  return (
    <div className="screen interactive-screen">
      <div className="screen-container">
        <h1 className="screen-title">Интерактивные Анимации</h1>
        <p className="screen-description">Анимации, которые реагируют на действия пользователя</p>

        <div className="interactive-section">
          <div className="controls-panel">
            <h3>Выберите анимацию:</h3>
            <div className="control-buttons">
              <button onClick={() => setActiveAnimation("shake")} className={`control-button ${activeAnimation === "shake" ? "active" : ""}`}>
                Тряска
              </button>
              <button onClick={() => setActiveAnimation("pulse")} className={`control-button ${activeAnimation === "pulse" ? "active" : ""}`}>
                Пульсация
              </button>
              <button onClick={() => setActiveAnimation("bounce")} className={`control-button ${activeAnimation === "bounce" ? "active" : ""}`}>
                Прыжок
              </button>
              <button onClick={() => setActiveAnimation("fade")} className={`control-button ${activeAnimation === "fade" ? "active" : ""}`}>
                Затухание
              </button>
            </div>
          </div>

          <div className="animation-display">
            {activeAnimation ? (
              <div className="animation-preview">
                <GSAPAnimation type={activeAnimation} />
                <p className="animation-name">{activeAnimation}</p>
              </div>
            ) : (
              <div className="animation-placeholder">
                <p>Выберите анимацию из панели управления</p>
              </div>
            )}
          </div>
        </div>

        <div className="animations-grid">
          <div className="animation-card-large">
            <h3>Пульсирующий Круг</h3>
            <p className="animation-description">Lottie анимация</p>
            <div className="animation-wrapper">
              <LottieAnimation animationData={pulseAnimation} style={{ width: "200px", height: "200px" }} />
            </div>
            <div className="animation-info">
              <span className="badge">Lottie</span>
              <span className="badge">Интерактивный</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveScreen;
