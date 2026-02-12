
import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-20 overflow-hidden bg-mesh">
      {/* Decorative Floating Shapes */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-neutral-800 rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-neutral-800 rounded-full opacity-30 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black font-heading leading-tight md:leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-neutral-500">
            CRAFTING UNIQUE <br className="hidden md:block" /> 
            <span className="italic text-purple-500 font-light">VISUAL</span> STORIES
          </h1>

          <div className="max-w-3xl">
            <p className="text-lg md:text-2xl text-neutral-400 font-light leading-relaxed">
              I’m a freelance designer <span className="text-white font-medium">with over 20 years of experience</span>, specializing in <span className="text-white font-medium">packaging design</span>, <span className="text-white font-medium">logo creation</span>, <span className="text-white font-medium">branding</span>, and <span className="text-white font-medium">digital marketing</span>. I collaborate closely with brands <span className="text-white font-medium">across the globe</span>, to shape early ideas into strong, cohesive visual narratives. By combining creative thinking with strategic insight, I help businesses develop identities that are genuine, impactful, and built to last.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <a 
              href="#work" 
              onClick={(e) => handleScroll(e, 'work')}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-purple-600 rounded-full hover:bg-purple-700 shadow-xl shadow-purple-950/20"
            >
              View My Portfolio
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="mailto:preetigupta81@gmail.com" className="px-8 py-4 font-bold text-neutral-300 border border-neutral-800 rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Playful Floating Elements (Decorative only) */}
      <div className="absolute left-10 bottom-20 opacity-40 animate-bounce delay-100 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>
      <div className="absolute right-20 top-40 opacity-40 animate-spin-slow hidden lg:block">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect x="5" y="5" width="20" height="20" stroke="#3b82f6" strokeWidth="2" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
