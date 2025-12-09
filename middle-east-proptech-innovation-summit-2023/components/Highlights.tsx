import React from 'react';
import { TOPIC_HIGHLIGHTS } from '../constants';

const Highlights: React.FC = () => {
  return (
    <section id="topics" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-prop-dark mb-4">Topic Highlights</h2>
          <div className="w-24 h-1 bg-prop-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600">
            This forum aims at providing a platform for the regional Real Estate fraternity to discuss the new era of Proptech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TOPIC_HIGHLIGHTS.map((topic, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-prop-gold/50 transition-all group"
            >
              <div className="w-12 h-12 bg-prop-blue/5 rounded-lg flex items-center justify-center text-prop-blue mb-4 group-hover:bg-prop-gold group-hover:text-white transition-colors">
                {topic.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-sm leading-snug">{topic.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;