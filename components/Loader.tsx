
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    
    const count = { val: 0 };
    gsap.to(count, {
      val: 100,
      duration: 1.5,
      ease: "power1.inOut",
      onUpdate: () => setPercent(Math.floor(count.val)),
      onComplete: () => {
        gsap.to("#loader", {
          yPercent: -100,
          duration: 1.2,
          ease: "expo.inOut",
          onComplete: onComplete
        });
      }
    });
  }, [onComplete]);

  return (
    <div 
      id="loader" 
      className="fixed inset-0 z-[2000] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
    >
      <div className="text-center">
        <h2 className="power-text text-white">{percent.toString().padStart(2, '0')}</h2>
      </div>
    </div>
  );
};

export default Loader;
