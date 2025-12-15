import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./ProgressBarAnimation.css";

const ProgressBarAnimation = () => {
    const progressRef = useRef(null);

    useEffect(() => {
        const progress = progressRef.current;
        if (!progress) return;

        const timeline = gsap.timeline({ repeat: -1 });

        timeline.to(progress, {
            width: "100%",
            duration: 2,
            ease: "power2.inOut",
        }).to(progress, {
            width: "0%",
            duration: 0.5,
            ease: "power2.inOut",
        });

        return () => {
            timeline.kill();
        };
    }, []);

    return (
        <div className="progress-bar-container">
            <div className="progress-bar-track">
                <div ref={progressRef} className="progress-bar-fill"></div>
            </div>
        </div>
    );
};

export default ProgressBarAnimation;

