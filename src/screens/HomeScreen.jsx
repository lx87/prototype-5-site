import React from "react";
import { Link } from "react-router-dom";
import LottieAnimation from "../components/LottieAnimation";
import GSAPAnimation from "../components/GSAPAnimation";
import { heartIconAnimation } from "../animations/iconAnimation";
import { spinnerLoaderAnimation } from "../animations/loaderAnimation";
import "./Screen.css";

const HomeScreen = () => {
  return (
    <div className="screen home-screen">
      <div className="screen-container">
        <div className="hero-section">
          <h1 className="hero-title">
            <span className="title-animated">Lottie</span> Анимации
          </h1>
          <p className="hero-subtitle">Изучение веб-анимаций с помощью Lottie и GSAP</p>

          <div className="hero-animations">
            <div className="animation-card">
              <h3>Иконка</h3>
              <div className="animation-wrapper">
                <LottieAnimation animationData={heartIconAnimation} style={{ width: "150px", height: "150px" }} />
              </div>
            </div>

            <div className="animation-card">
              <h3>Лоадер</h3>
              <div className="animation-wrapper">
                <GSAPAnimation type="spinner" />
              </div>
            </div>
          </div>

          <div className="cta-buttons">
            <Link to="/icons" className="cta-button primary">
              Иконки →
            </Link>
            <Link to="/loaders" className="cta-button secondary">
              Лоадеры →
            </Link>
          </div>
        </div>

        <div className="features-section">
          <h2>Особенности проекта</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Lottie Анимации</h3>
              <p>Легкие векторные анимации для веб-проектов</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>GSAP Анимации</h3>
              <p>Мощные JavaScript анимации для интерактивности</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Адаптивный дизайн</h3>
              <p>Работает на всех устройствах</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Современный UI</h3>
              <p>Красивый и интуитивный интерфейс</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
