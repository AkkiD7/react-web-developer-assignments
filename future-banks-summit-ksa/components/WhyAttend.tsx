import React from 'react';
import { REASONS } from '../constants';

const WhyAttend: React.FC = () => {
  return (
    <section id="why-attend" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-blue rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Attend?</h2>
            <div className="space-y-6">
              {REASONS.map((reason) => (
                <div key={reason.id} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center flex-shrink-0 font-bold text-slate-900">
                    {reason.id}
                  </div>
                  <p className="text-lg text-blue-50 leading-relaxed">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img 
              src="https://picsum.photos/800/800?random=2" 
              alt="Networking at Summit" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;