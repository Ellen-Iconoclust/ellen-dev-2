
import React from 'react';

const Marquee: React.FC = () => {
  return (
    <section className="py-40 border-y border-white/5">
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="power-text opacity-10 flex animate-marquee">
          <span>FULL-STACK — CREATIVE ENGINE —&nbsp;</span>
          <span>FULL-STACK — CREATIVE ENGINE —&nbsp;</span>
          <span>FULL-STACK — CREATIVE ENGINE —&nbsp;</span>
          <span>FULL-STACK — CREATIVE ENGINE —&nbsp;</span>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Marquee;
