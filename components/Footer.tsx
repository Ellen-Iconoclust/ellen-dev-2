
import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: true, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        timeZone: 'America/Los_Angeles'
      }) + ' PST');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="pt-20 pb-10 px-8 md:px-16 border-t border-white/5 bg-[#0d0d0d]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 md:gap-10 mb-20">
        <div className="col-span-2">
          <a href="#" className="font-black text-4xl tracking-tighter block mb-8 text-white">
            ELLEN<span className="font-premium-italic text-2xl">©</span>
          </a>
          <p className="text-gray-500 uppercase font-bold text-[10px] tracking-[0.25em] leading-loose max-w-sm">
            Combining rigorous engineering with high-fidelity aesthetics to build the future of the web.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/20">Socials</span>
          <a href="#" className="text-xs uppercase font-bold tracking-widest text-white/60 hover:text-white transition-all w-fit relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">LinkedIn</a>
          <a href="#" className="text-xs uppercase font-bold tracking-widest text-white/60 hover:text-white transition-all w-fit relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">GitHub</a>
          <a href="#" className="text-xs uppercase font-bold tracking-widest text-white/60 hover:text-white transition-all w-fit relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all">Layers</a>
        </div>

        <div className="flex flex-col gap-4 text-right md:text-left">
          <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/20">Location</span>
          <span className="text-xs uppercase font-bold tracking-widest text-white">San Francisco, CA</span>
          <span className="text-xs uppercase font-bold tracking-widest text-white/30">{time}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5">
        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/10">Designed & Developed by Ellen</span>
        <div className="flex gap-10 mt-6 md:mt-0">
          <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/10">Privacy Policy</span>
          <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/10">© 2026 All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
