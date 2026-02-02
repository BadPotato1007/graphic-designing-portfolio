
import React, { useState } from 'react';
import { PROJECTS_DATA } from '../constants';
import ProjectModal from './ProjectModal';

const ProjectCard: React.FC<{ project: typeof PROJECTS_DATA[0], onSelect: (p: any) => void }> = ({ project, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(project)}
      className="group relative overflow-hidden rounded-2xl bg-neutral-900 aspect-square cursor-pointer"
    >
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-40"
      />
      
      {/* View more info overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8">
         <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-500">
           <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
           </svg>
         </div>
         <span className="text-white font-bold uppercase tracking-widest text-sm">View More Info</span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/90 to-transparent">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-1 block">
          {project.category}
        </span>
        <h3 className="text-2xl font-black font-heading text-white uppercase">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

const WorkGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tighter text-white uppercase leading-none mb-4">
            my <span className="text-purple-500 italic lowercase">work</span>
          </h2>
          <p className="text-neutral-400 max-w-sm text-lg">
            High-impact visual solutions for global brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default WorkGrid;
