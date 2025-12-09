import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-prop-dark text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
           <h2 className="text-2xl font-bold font-serif text-white tracking-tight mb-2">
            PROPTECH <span className="text-prop-gold">SUMMIT</span>
          </h2>
          <p className="text-sm">23rd & 24th May 2023 | Dubai, UAE</p>
        </div>
        
        <div className="w-full h-px bg-slate-800 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2023 Verve Management. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;