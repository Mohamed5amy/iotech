"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface AnimatedTitleProps {
  children: ReactNode;
  className?: string;
  delay?: boolean;
}

const AnimatedTitle = ({ children, className = "", delay = false }: AnimatedTitleProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let split: SplitText | null = null;
    let anim: gsap.core.Tween | null = null;

    if (titleRef.current) {
      // Detect if the text is Arabic
      const textContent = titleRef.current.textContent || "";
      const isArabic = /[\u0600-\u06FF]/.test(textContent);
      
      // Split text
      split = new SplitText(titleRef.current, {
        type: isArabic ? "words" : "chars,words",
        position: "relative"
      });

      // Animate
      anim = gsap.from(isArabic ? split.words : split.chars, {
        duration: 1.5,
        yPercent: "random(100, -100)",
        rotate: "random(30, -30)",
        opacity: 0,
        delay: delay ? 4 : 0,
        stagger: {
          from: "random",
          amount: 0.6
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=200",
          end: "bottom top",
        }
      });
    }

    return () => {
      // Kill animation
      if (anim) anim.kill();

      // Kill scroll triggers
      ScrollTrigger.getAll().forEach(t => t.kill());

      // Revert SplitText
      if (split) split.revert();
    };
  }, [delay]); // Added delay to dependency array

  return (
    <h3 ref={titleRef} className={className}>
      {children}
    </h3>
  );
};

export default AnimatedTitle;