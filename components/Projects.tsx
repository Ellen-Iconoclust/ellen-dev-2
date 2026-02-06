
import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface Project {
  id: string;
  number: string;
  title: string;
  tag: string;
  year: string;
  description: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 'aether',
    number: '01',
    title: 'Aether Engine',
    tag: 'Creative Tech',
    year: '2024',
    description: 'A high-performance 3D rendering engine built with WebGL and Rust, designed for real-time generative art installations.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800'
  },
  {
    id: 'nebula',
    number: '02',
    title: 'Nebula Core',
    tag: 'Systems',
    year: '2024',
    description: 'Distributed cloud infrastructure management tool optimized for ultra-low latency data synchronization across global nodes.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800'
  },
  {
    id: 'kinetix',
    number: '03',
    title: 'Kinetix UI',
    tag: 'Design Systems',
    year: '2023',
    description: 'A motion-first design system for enterprise applications, focusing on fluid physics and accessibility.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800'
  },
  {
    id: 'void',
    number: '04',
    title: 'Void Synth',
    tag: 'Audio Web',
    year: '2023',
    description: 'Experimental browser-based polyphonic synthesizer utilizing the Web Audio API for granular synthesis.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800'
  }
];

const Projects: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handlePreview = (imageUrl: string | null) => {
    const preview = document.getElementById('project-preview');
    const previewImg = document.getElementById('preview-img') as HTMLImageElement;
    if (preview && previewImg) {
      if (imageUrl) {
        previewImg.src = imageUrl;
        preview.style.opacity = '1';
        preview.style.transform = 'scale(1)';
      } else {
        preview.style.opacity = '0';
        preview.style.transform = 'scale(0.8)';
      }
    }
  };

  return (
    <section className="py-40 p-8 md:p-16">
      <div className="mb-20">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Selected Works (01 — 04)</span>
      </div>

      <div className="flex flex-col">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="group py-12 md:py-16 border-b border-white/10"
            onMouseEnter={() => handlePreview(project.image)}
            onMouseLeave={() => handlePreview(null)}
          >
            <div 
              className="flex justify-between items-center transition-all hover:px-4 cursor-pointer"
              onClick={() => setActiveId(activeId === project.id ? null : project.id)}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">{project.number}</span>
                <h3 className="text-3xl md:text-7xl font-bold uppercase tracking-tighter group-hover:italic transition-all duration-500 text-white">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] hidden md:block opacity-40 mr-6">
                  {project.tag} / {project.year}
                </span>
                <button 
                  className={`w-10 h-10 border border-white/30 rounded-full flex items-center justify-center transition-all ${activeId === project.id ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}
                >
                  <Info size={16} />
                </button>
              </div>
            </div>
            
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activeId === project.id ? 'max-h-60 mt-8 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="max-w-2xl">
                <p className="text-gray-400 text-sm uppercase tracking-widest leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 md:hidden">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
