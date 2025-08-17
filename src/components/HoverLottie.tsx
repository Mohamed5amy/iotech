"use client"

// HoverLottie.tsx
import { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface HoverLottieProps {
  icon: object; // Lottie animation data
  w: string | number;
  h: string | number;
  play: boolean;
}

const HoverLottie: React.FC<HoverLottieProps> = ({ icon, w, h, play }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (play) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.stop();
    }
  }, [play]);

  return (
    <div 
      style={{ 
        width: w, 
        height: h, 
        cursor: "pointer", 
        transition: ".5s" 
      }} 
      onMouseEnter={() => lottieRef.current?.play()} 
      onMouseLeave={() => lottieRef.current?.stop()}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={icon}
        autoplay={true}
        loop={false}
        className="transition-all"
      />
    </div>
  );
};

export default HoverLottie;
