import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Riyadh Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-blue-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 border border-brand-accent text-brand-accent font-semibold text-sm mb-6 uppercase tracking-wider">
            Riyadh, Kingdom of Saudi Arabia
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
            Digital Innovations <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Transforming
            </span>{" "}
            The Kingdom’s <br />
            Banking Landscape
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 font-light">
            Join the 4th Annual Future Banks Summit & Awards 2023.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="text-brand-accent" />
              <span className="font-semibold">September 11th - 12th, 2023</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-500"></div>
            <div className="flex items-center gap-2">
              <MapPin className="text-brand-accent" />
              <span className="font-semibold">Riyadh Marriott Hotel</span>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onRegisterClick}
              className="px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1"
            >
              Reserve Your Spot
            </button>
            <a 
              href="#overview" 
              className="px-8 py-4 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white font-bold rounded-lg backdrop-blur-sm transition-all"
            >
              View Agenda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;