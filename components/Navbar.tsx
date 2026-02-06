
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <nav className={`fixed top-8 left-0 w-full z-[100] flex justify-center pointer-events-none transition-all duration-500`}>
        <div className={`pointer-events-auto group bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-6 transition-all duration-500 max-w-[90vw] ${isScrolled ? 'py-2 px-4 bg-white/10' : ''}`}>
          
          {/* Logo */}
          <button 
            onClick={() => handleLinkClick('top')}
            className="font-black text-xl tracking-tighter flex items-center gap-2 text-white"
          >
            ELLEN<span className="font-premium-italic text-sm">©</span>
          </button>

          {/* Desktop Links */}
          <div className={`hidden md:flex gap-8 overflow-hidden transition-all duration-500 ${isScrolled ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
            <button onClick={() => handleLinkClick('projects')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">Works</button>
            <button onClick={() => handleLinkClick('inspirations')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">Inspirations</button>
            <button onClick={() => handleLinkClick('contact')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">Contact</button>
          </div>

          {/* Expand on hover when scrolled */}
          {isScrolled && (
            <div className="hidden md:flex group-hover:flex gap-8 overflow-hidden opacity-0 group-hover:opacity-100 group-hover:w-auto w-0 transition-all duration-500 ml-4">
              <button onClick={() => handleLinkClick('projects')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">Works</button>
              <button onClick={() => handleLinkClick('inspirations')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">Inspirations</button>
              <button onClick={() => handleLinkClick('contact')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">Contact</button>
            </div>
          )}

          <div className="hidden md:block h-4 w-[1px] bg-white/20"></div>
          <span className="hidden md:block text-[8px] font-bold uppercase tracking-[0.3em] text-indigo-400 animate-pulse">Available</span>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-1 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-x-4 top-24 md:hidden z-[110] transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col gap-4">
            <button onClick={() => handleLinkClick('projects')} className="text-left text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white p-4 hover:bg-white/5 rounded-xl transition-all">Selected Works</button>
            <button onClick={() => handleLinkClick('inspirations')} className="text-left text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white p-4 hover:bg-white/5 rounded-xl transition-all">Ideology</button>
            <button onClick={() => handleLinkClick('contact')} className="text-left text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white p-4 hover:bg-white/5 rounded-xl transition-all">Connect</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
