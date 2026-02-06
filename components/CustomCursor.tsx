
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
      if (previewRef.current) {
        gsap.to(previewRef.current, {
          x: e.clientX + 40,
          y: e.clientY - 200,
          duration: 0.6,
          ease: "power3.out"
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference -translate-x-1/2 -translate-y-1/2" 
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" 
      />
      <div 
        ref={previewRef}
        id="project-preview"
        className="fixed w-72 h-[400px] bg-[#111] pointer-events-none z-50 opacity-0 scale-75 overflow-hidden rounded-xl transition-opacity duration-300"
      >
        <img id="preview-img" src="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Preview" />
      </div>
    </>
  );
};

export default CustomCursor;
