import React from "react";
import LottieAnimation from "../components/LottieAnimation";
import GSAPAnimation from "../components/GSAPAnimation";
import StarAnimation from "../components/StarAnimation";
import { heartIconAnimation, starIconAnimation } from "../animations/iconAnimation";
import "./Screen.css";

const IconsScreen = () => {
  return (
    <div className="screen icons-screen">
      <div className="screen-container">
        <h1 className="screen-title">Анимированные Иконки</h1>
        <p className="screen-description">Коллекция анимированных иконок, созданных с помощью Lottie и GSAP</p>

        <div className="animations-grid">
          <div className="animation-card-large">
            <h3>Пульсирующее Сердце</h3>
            <p className="animation-description">Lottie анимация</p>
            <div className="animation-wrapper">
              <LottieAnimation animationData={heartIconAnimation} style={{ width: "200px", height: "200px" }} />
            </div>
            <div className="animation-info">
              <span className="badge">Lottie</span>
              <span className="badge">Иконка</span>
            </div>
          </div>

          <div className="animation-card-large">
            <h3>Вращающаяся Звезда</h3>
            <p className="animation-description">GSAP анимация (альтернатива Lottie)</p>
            <div className="animation-wrapper">
              <StarAnimation />
            </div>
            <div className="animation-info">
              <span className="badge">GSAP</span>
              <span className="badge">Иконка</span>
            </div>
          </div>

          <div className="animation-card-large">
            <h3>Пульсирующий Круг</h3>
            <p className="animation-description">GSAP анимация</p>
            <div className="animation-wrapper">
              <GSAPAnimation type="pulse" />
            </div>
            <div className="animation-info">
              <span className="badge">GSAP</span>
              <span className="badge">Иконка</span>
            </div>
          </div>

          <div className="animation-card-large">
            <h3>Прыгающий Мяч</h3>
            <p className="animation-description">GSAP анимация</p>
            <div className="animation-wrapper">
              <GSAPAnimation type="bounce" />
            </div>
            <div className="animation-info">
              <span className="badge">GSAP</span>
              <span className="badge">Иконка</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconsScreen;
