
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Marquee from './components/Marquee.tsx';
import Projects from './components/Projects.tsx';
import Inspirations from './components/Inspirations.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import Background3D from './components/Background3D.tsx';
import Loader from './components/Loader.tsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      gsap.to('.reveal-inner', {
        y: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out"
      });
    }
  }, [loading]);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80; // Standardize offset for sticky header
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    // Use GSAP for guaranteed smooth scrolling across all browsers/devices
    gsap.to(window, {
      duration: 1,
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
