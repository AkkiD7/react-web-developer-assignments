import React from 'react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-accent font-bold uppercase tracking-wider mb-2">About The Event</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Shaping the Future of Finance
            </h3>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-4">
                The banking industry worldwide is undergoing phenomenal change, giving banks an opportunity to relook into their existing business models and take a huge leap towards the future. 
              </p>
              <p className="mb-4">
                The <strong className="text-brand-blue">4th Annual Future Banks Summit KSA 2023</strong> will showcase the latest innovations and practical case studies, along with interactive panel discussions designed to guide the banking sector in KSA in identifying the right strategies to overcome long-standing resistance and be future-ready!
              </p>
              <p>
                An exciting and timely conference is on its way, discussing the future of the financial industry in KSA driven by innovation and digital advancements, adoption of AI, metaverse banking, and intelligent automation.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-accent/20 rounded-xl transform rotate-3"></div>
            <img 
              src="https://picsum.photos/800/600?random=1" 
              alt="Conference Discussion" 
              className="relative rounded-xl shadow-2xl w-full object-cover h-[400px]"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm font-bold text-slate-900">"The pandemic has forced digital acceleration at such a massive scale that banks are forced to reimagine their business."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;