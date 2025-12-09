import React from 'react';
import { Lightbulb, Users, Handshake, Search, Layers } from 'lucide-react';
import { WHY_ATTEND_POINTS } from '../constants';

const icons = [Lightbulb, Users, Handshake, Search, Layers];

const WhyAttend: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
             <img 
               src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop" 
               alt="Conference Networking" 
               className="rounded-2xl shadow-2xl object-cover h-[600px] w-full"
             />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-prop-dark mb-6">Why Attend?</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Delegate to discover the best strategies, tools & methods for tapping into the potential of tech-driven management. If you are ready to innovate and join the ranks of the industry thought leaders, register today.
            </p>

            <div className="space-y-8">
              {WHY_ATTEND_POINTS.map((point, idx) => {
                const Icon = icons[idx] || Lightbulb;
                return (
                  <div key={idx} className="flex gap-4 group">
                    <div className="shrink-0 w-12 h-12 bg-prop-gold/10 rounded-full flex items-center justify-center text-prop-gold group-hover:bg-prop-gold group-hover:text-white transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 leading-snug">{point}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyAttend;