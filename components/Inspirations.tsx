
import React from 'react';

const INSPIRATIONS = [
  { name: 'Newton', subtitle: 'Laws of Motion & Logical Foundation', italic: false, pt: false },
  { name: 'Jobs', subtitle: 'Aesthetic Perfection & Product Intuition', italic: true, pt: true },
  { name: 'Guido', subtitle: 'Syntactic Elegance & Pythonic Zen', italic: false, pt: false },
  { name: 'Lovelace', subtitle: 'The First Algorithm & Poetic Science', italic: true, pt: true },
  { name: 'Zuck', subtitle: 'Scale, Velocity & Social Architecture', italic: false, pt: false },
];

const Inspirations: React.FC = () => {
  return (
    <section className="py-40 p-8 md:p-16">
      <div className="mb-20">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Ideological North Stars</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {INSPIRATIONS.map((item, i) => (
          <div 
            key={i} 
            className={`inspiration-card border-l border-white/10 pl-6 pb-12 md:pb-24 ${item.pt ? 'md:pt-16' : ''}`}
          >
            <h4 className={`text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-4 ${item.italic ? 'font-premium-italic' : ''} text-white`}>
              {item.name}
            </h4>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inspirations;
