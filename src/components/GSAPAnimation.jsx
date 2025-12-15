import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./GSAPAnimation.css";

const GSAPAnimation = ({ type, className = "", style = {} }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    switch (type) {
      case "spinner":
        const circle = element.querySelector("circle");
        if (circle) {
          // Анимация вращения контейнера
          gsap.to(element, {
            rotation: 360,
            duration: 1,
            repeat: -1,
            ease: "linear",
          });
          // Анимация stroke-dashoffset для эффекта загрузки
          gsap.to(circle, {
            strokeDashoffset: 0,
            duration: 1.5,
            repeat: -1,
            ease: "power2.inOut",
          });
        } else {
          // Если нет circle, просто вращаем элемент
          gsap.to(element, {
            rotation: 360,
            duration: 1,
            repeat: -1,
            ease: "linear",
          });
        }
        break;

      case "pulse":
        gsap.to(element, {
          scale: 1.2,
          opacity: 0.5,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
        break;

      case "bounce":
        gsap.to(element, {
          y: -20,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
        break;

      case "shake":
        const shakeTimeline = gsap.timeline({ repeat: -1 });
        shakeTimeline
          .to(element, {
            x: 10,
            duration: 0.1,
            ease: "power2.inOut",
          })
          .to(element, {
            x: -10,
            duration: 0.1,
            ease: "power2.inOut",
          })
          .to(element, {
            x: 10,
            duration: 0.1,
            ease: "power2.inOut",
          })
          .to(element, {
            x: -10,
            duration: 0.1,
            ease: "power2.inOut",
          })
          .to(element, {
            x: 0,
            duration: 0.1,
            ease: "power2.inOut",
          })
          .to({}, { duration: 0.5 }); // пауза перед повторением
        break;

      case "fade":
        gsap.to(element, {
          opacity: 0.3,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
        break;

      default:
        break;
    }

    return () => {
      gsap.killTweensOf(element);
    };
  }, [type]);

  return (
    <div ref={elementRef} className={`gsap-animation ${type} ${className}`} style={style}>
      {type === "spinner" && (
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="25" fill="none" stroke="#667eea" strokeWidth="4" strokeDasharray="40" strokeDashoffset="40" strokeLinecap="round" />
        </svg>
      )}
      {type === "pulse" && <div className="pulse-circle"></div>}
      {type === "bounce" && <div className="bounce-ball">⚽</div>}
      {type === "shake" && <div className="shake-icon">📱</div>}
      {type === "fade" && <div className="fade-text">✨</div>}
    </div>
  );
};

export default GSAPAnimation;
