import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./StarAnimation.css";

const StarAnimation = () => {
    const starRef = useRef(null);

    useEffect(() => {
        const star = starRef.current;
        if (!star) return;

        gsap.to(star, {
            rotation: 360,
            duration: 2,
            repeat: -1,
            ease: "linear",
        });

        return () => {
            gsap.killTweensOf(star);
        };
    }, []);

    return (
        <div className="star-animation-container">
            <svg ref={starRef} width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M50 10 L61 38 L90 38 L68 56 L79 84 L50 66 L21 84 L32 56 L10 38 L39 38 Z"
                    fill="#FFD700"
                    stroke="#FFA500"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
};

export default StarAnimation;

