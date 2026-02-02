
import React from 'react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-neutral-950 pt-24 pb-12 px-6 md:px-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xl">
            <p className="text-xl text-neutral-400 mb-4 uppercase tracking-widest font-bold">Contact</p>
            <a 
              href="mailto:preetigupta81@gmail.com" 
              className="text-lg md:text-[34px] font-bold text-white underline decoration-purple-500 underline-offset-8 hover:text-purple-500 transition-colors break-all"
            >
              preetigupta81@gmail.com
            </a>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="text-neutral-500 uppercase text-xs font-bold tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#work" 
                    onClick={(e) => handleScroll(e, '#work')}
                    className="text-white hover:text-purple-500 transition-colors text-lg"
                  >
                    Work
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-neutral-500 uppercase text-xs font-bold tracking-widest mb-6">Connect</h4>
              <ul className="space-y-4">
                <li><a href="https://www.instagram.com/preeti.gupta.28/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500 transition-colors text-lg">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
