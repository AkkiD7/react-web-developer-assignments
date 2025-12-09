import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea904ac66de?q=80&w=2000&auto=format&fit=crop"
          alt="Dubai Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-prop-dark/90 to-prop-blue/80 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded bg-white/10 backdrop-blur border border-white/20 text-prop-gold font-bold tracking-widest text-xs mb-6 uppercase">
            The Future of Real Estate
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            MIDDLE EAST <span className="text-prop-gold">PROPTECH</span><br />
            INNOVATION SUMMIT 2023
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 font-light max-w-3xl mx-auto mb-10">
            Embracing Proptech to drive Innovation in Real Estate
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm border border-white/10">
              <Calendar className="text-prop-gold" />
              <span className="font-semibold">23rd & 24th May 2023</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm border border-white/10">
              <MapPin className="text-prop-gold" />
              <span className="font-semibold">Dubai, UAE</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#sponsor" className="bg-prop-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-yellow-900/20">
              Book Your Pass
            </a>
            <a href="#market" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-prop-dark px-8 py-4 rounded-full font-bold text-lg transition-all">
              Explore Agenda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;