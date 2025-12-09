import React from 'react';
import { Calendar, MapPin, ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-red-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-slate-200/60 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-red-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-red-100 text-red-600 text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-shadow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            2nd Annual Edition
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tight">
            CX & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500 animate-gradient-x">LOYALTY</span> <br/>
            SUMMIT MENA <span className="relative inline-block">2023 <span className="absolute -bottom-2 left-0 w-full h-2 bg-red-500/30 -skew-x-12"></span></span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-lg border-l-4 border-red-500 pl-6 italic animation-delay-200 animate-fade-in-up opacity-0 font-medium" style={{ animationFillMode: 'forwards' }}>
            "Driving revenue building relations through CX transformation & increased brand Loyalty"
          </p>

          <div className="flex flex-col sm:flex-row gap-8 text-slate-700 font-medium animation-delay-400 animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3 group cursor-default">
              <div className="p-2 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform">
                <Calendar size={20} />
              </div>
              <span>1st - 2nd November 2023</span>
            </div>
            <div className="flex items-center gap-3 group cursor-default">
              <div className="p-2 bg-red-100 text-red-600 rounded-lg group-hover:scale-110 transition-transform">
                <MapPin size={20} />
              </div>
              <span>Dubai, UAE</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animation-delay-400 animate-fade-in-up opacity-0" style={{ animationFillMode: 'forwards' }}>
            <Button onClick={onRegisterClick} className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Register Now <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-red-700/50"></div>
            </Button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-slate-700 hover:text-red-600 transition-colors group">
              <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Watch Teaser</span>
            </button>
          </div>
        </div>

        <div className="relative hidden lg:block animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
           {/* Conceptual representation of the event */}
           <div className="relative z-10 animate-float">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 group border-4 border-white">
               <img 
                 src="https://picsum.photos/seed/dubai/800/600?grayscale" 
                 alt="Dubai Skyline Business" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:filter-none"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex items-end p-8">
                 <div className="text-white transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                   <p className="font-bold text-2xl mb-1">Future of CX</p>
                   <p className="text-sm opacity-80 font-light">Join industry leaders in Dubai</p>
                 </div>
               </div>
             </div>
           </div>
           
           {/* Floating Decorative elements */}
           <div className="absolute -top-10 -right-10 w-24 h-24 bg-slate-900 rounded-2xl -z-10 animate-float-delayed transform rotate-12 opacity-80"></div>
           <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
           <div className="absolute top-1/2 -right-20 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </div>
      </div>
    </div>
  );
};