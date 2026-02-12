
import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-neutral-900 rounded-3xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="md:w-2/3 h-full overflow-y-auto bg-neutral-950 flex items-center justify-center">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-auto object-contain max-h-full"
          />
        </div>

        <div className="md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-neutral-900 border-l border-neutral-800 overflow-y-auto">
          <span className="text-sm md:text-base font-bold uppercase tracking-widest text-purple-500 mb-2 block">
            {project.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-heading text-white mb-6 tracking-tighter uppercase leading-tight">
            {project.title}
          </h2>
          
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold mb-1">Brand</p>
            <p className="text-lg text-white font-medium">{project.brand}</p>
          </div>

          <div className="h-px w-12 bg-purple-500 mb-8"></div>

          <button 
            onClick={onClose}
            className="mt-6 w-full py-4 border border-neutral-700 rounded-full text-white font-bold hover:bg-neutral-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
