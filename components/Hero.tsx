
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end p-8 md:p-24 pb-20 pt-48 md:pt-36">
      <div className="mb-12">
        <span className="block mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Software & Creative Engineering</span>
        <h1 className="power-text leading-[0.85] md:leading-[0.85]">
          <span className="overflow-hidden block">
            <span className="reveal-inner block translate-y-full text-[clamp(3rem,12vw,11rem)] md:text-[clamp(2rem,10vw,11rem)]">Design</span>
          </span>
          <span className="overflow-hidden block font-premium-italic text-transparent" style={{ WebkitTextStroke: '1px white' }}>
            <span className="reveal-inner block translate-y-full text-[clamp(3rem,12vw,11rem)] md:text-[clamp(2rem,10vw,11rem)]">& Logic</span>
          </span>
          <span className="overflow-hidden block">
            <span className="reveal-inner block translate-y-full text-[clamp(3rem,12vw,11rem)] md:text-[clamp(2.5rem,12vw,12rem)]">Harmonized</span>
          </span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-end gap-10">
        <p className="max-w-md text-sm font-medium text-gray-400 uppercase tracking-wider leading-relaxed">
          Independent developer focusing on high-end digital experiences and architectural performance. Based in SF, working globally.
        </p>
        <div className="text-right">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
