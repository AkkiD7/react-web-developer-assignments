import React from 'react';
import { TOPICS } from '../constants';

const Topics: React.FC = () => {
  return (
    <section id="topics" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Topic Highlights</h2>
          <p className="mt-4 text-xl text-slate-600">Exploring the key drivers of the digital banking revolution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOPICS.map((topic) => {
            const Icon = topic.icon;
            return (
              <div 
                key={topic.id}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors text-brand-blue">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{topic.title}</h3>
                <p className="text-slate-600 leading-relaxed">{topic.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Topics;