import React from 'react';
import { ATTENDEES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Attendees: React.FC = () => {
  return (
    <section id="attendees" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold uppercase tracking-wider">Networking</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">Who Will You Meet?</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Connect with C-level executives and decision makers shaping the future of banking in the Kingdom.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {ATTENDEES.map((role) => (
            <div key={role.id} className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <CheckCircle2 className="text-brand-accent flex-shrink-0" />
              <span className="font-medium text-lg">{role.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attendees;