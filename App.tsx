
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Projects from './components/Projects';
import Inspirations from './components/Inspirations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Background3D from './components/Background3D';
import Loader from './components/Loader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial entrance animations
    if (!loading) {
      gsap.to('.reveal-inner', {
        y: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out"
      });
    }
  }, [loading]);

  // Global scroll function to be used by Navbar and other components
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Offset for the sticky navbar
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    // Fixed: Standardized scrolling for both mobile and desktop
    // This ensures that even if ScrollTrigger or other plugins are active, we scroll to the right spot.
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Fallback using GSAP if native smooth scroll is interrupted or needs more control
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: offsetPosition, autoKill: false },
      ease: "power3.inOut"
    });
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <CustomCursor />
          <Background3D />
          <Navbar onNavigate={scrollToSection} />
          
          <main id="smooth-content">
            <Hero />
            <Marquee />
            <div id="projects">
              <Projects />
            </div>
            <div id="inspirations">
              <Inspirations />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <Footer />
          </main>
        </>
      )}
    </div>
  );
};

export default App;
