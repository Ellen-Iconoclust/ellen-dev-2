
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const count = { val: 0 };
    
    // Animate percentage
    gsap.to(count, {
      val: 100,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => setPercent(Math.floor(count.val)),
      onComplete: () => {
        // Entrance animation for content
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "expo.inOut",
          delay: 0.2,
          onComplete: onComplete
        });
      }
    });

    // Subtle scale effect on text
    if (textRef.current) {
      gsap.fromTo(textRef.current, 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[2000] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
    >
      <div className="text-center">
        <h2 ref={textRef} className="power-text text-white">
          {percent.toString().padStart(2, '0')}
        </h2>
      </div>
    </div>
  );
};

export default Loader;
