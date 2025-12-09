import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { WHO_YOU_WILL_MEET, INDUSTRIES_COVERED } from '../constants';

const Attendees: React.FC = () => {
  return (
    <section id="attendees" className="py-20 bg-prop-dark text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-prop-blue rounded-full filter blur-[128px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-prop-gold rounded-full filter blur-[128px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Who Will You Meet */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
              <span className="text-prop-gold">01.</span> Who Will You Meet?
            </h2>
            <div className="space-y-4">
              {WHO_YOU_WILL_MEET.map((role, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-prop-gold shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
                  <span className="font-medium text-lg text-slate-200">{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Covered */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
               <span className="text-prop-teal">02.</span> Industries Covered
            </h2>
            <div className="bg-white text-prop-dark rounded-2xl p-8 shadow-2xl">
              <ul className="space-y-4">
                {INDUSTRIES_COVERED.map((industry, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-prop-teal shrink-0 mt-1" size={20} />
                    <span className="font-semibold text-lg">{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Attendees;