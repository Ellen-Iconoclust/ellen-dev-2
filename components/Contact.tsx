
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-60 p-8 md:p-16 text-center">
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 block mb-12">Got a vision?</span>
      <h2 className="power-text mb-20 leading-none text-white">LET'S TALK</h2>
      <a 
        href="mailto:hello@ellen.dev" 
        className="relative px-16 py-6 border border-white/20 rounded-full overflow-hidden inline-block group transition-colors duration-500"
      >
        <span className="relative z-10 font-bold uppercase tracking-[0.2em] text-[10px] text-white group-hover:text-black transition-colors duration-500">
          Start a Project
        </span>
        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
      </a>
    </section>
  );
};

export default Contact;
