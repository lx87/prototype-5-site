import React from "react";
import LottieAnimation from "../components/LottieAnimation";
import GSAPAnimation from "../components/GSAPAnimation";
import StarAnimation from "../components/StarAnimation";
import ProgressBarAnimation from "../components/ProgressBarAnimation";
import { heartIconAnimation, starIconAnimation } from "../animations/iconAnimation";
import { spinnerLoaderAnimation, progressLoaderAnimation } from "../animations/loaderAnimation";
import { pulseAnimation } from "../animations/otherAnimations";
import "./Screen.css";

const ShowcaseScreen = () => {
  return (
    <div className="screen showcase-screen">
      <div className="screen-container">
        <h1 className="screen-title">Галерея Анимаций</h1>
        <p className="screen-description">Полная коллекция всех созданных анимаций в одном месте</p>

        <div className="showcase-grid">
          <div className="showcase-item">
            <h3>Пульсирующее Сердце</h3>
            <div className="showcase-animation">
              <LottieAnimation animationData={heartIconAnimation} style={{ width: "150px", height: "150px" }} />
            </div>
            <div className="showcase-tags">
              <span className="tag">Lottie</span>
              <span className="tag">Иконка</span>
            </div>
          </div>

          <div className="showcase-item">
            <h3>Вращающаяся Звезда</h3>
            <div className="showcase-animation">
              <StarAnimation />
            </div>
            <div className="showcase-tags">
              <span className="tag">GSAP</span>
              <span className="tag">Иконка</span>
            </div>
          </div>

          <div className="showcase-item">
            <h3>Спиннер Лоадер</h3>
            <div className="showcase-animation">
              <LottieAnimation animationData={spinnerLoaderAnimation} style={{ width: "120px", height: "120px" }} />
            </div>
            <div className="showcase-tags">
              <span className="tag">Lottie</span>
              <span className="tag">Лоадер</span>
            </div>
          </div>

          <div className="showcase-item">
            <h3>Прогресс Бар</h3>
            <div className="showcase-animation">
              <ProgressBarAnimation />
            </div>
            <div className="showcase-tags">
              <span className="tag">GSAP</span>
              <span className="tag">Лоадер</span>
            </div>
          </div>

          <div className="showcase-item">
            <h3>Пульсирующий Круг</h3>
            <div className="showcase-animation">
              <LottieAnimation animationData={pulseAnimation} style={{ width: "150px", height: "150px" }} />
            </div>
            <div className="showcase-tags">
              <span className="tag">Lottie</span>
              <span className="tag">Эффект</span>
            </div>
          </div>

          <div className="showcase-item">
            <h3>GSAP Спиннер</h3>
            <div className="showcase-animation">
              <GSAPAnimation type="spinner" />
            </div>
            <div className="showcase-tags">
              <span className="tag">GSAP</span>
              <span className="tag">Лоадер</span>
            </div>
          </div>

          <div className="showcase-item">
            <h3>GSAP Пульсация</h3>
            <div className="showcase-animation">
              <GSAPAnimation type="pulse" />
            </div>
            <div className="showcase-tags">
              <span className="tag">GSAP</span>
              <span className="tag">Эффект</span>
            </div>
          </div>

          <div className="showcase-item">
            <h3>GSAP Прыжок</h3>
            <div className="showcase-animation">
              <GSAPAnimation type="bounce" />
            </div>
            <div className="showcase-tags">
              <span className="tag">GSAP</span>
              <span className="tag">Интерактивный</span>
            </div>
          </div>
        </div>

        <div className="summary-section">
          <h2>Итоги практической работы</h2>
          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-number">5+</div>
              <div className="summary-label">Экранов</div>
            </div>
            <div className="summary-card">
              <div className="summary-number">3+</div>
              <div className="summary-label">Lottie анимации</div>
            </div>
            <div className="summary-card">
              <div className="summary-number">5+</div>
              <div className="summary-label">GSAP анимации</div>
            </div>
            <div className="summary-card">
              <div className="summary-number">2</div>
              <div className="summary-label">Лоадера</div>
            </div>
            <div className="summary-card">
              <div className="summary-number">2+</div>
              <div className="summary-label">Иконки</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseScreen;
