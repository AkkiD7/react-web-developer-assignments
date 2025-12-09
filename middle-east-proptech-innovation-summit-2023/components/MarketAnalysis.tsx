import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MARKET_STATS, Q2_GROWTH_DATA } from '../constants';

const MarketAnalysis: React.FC = () => {
  return (
    <section id="market" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-prop-dark mb-6 relative inline-block">
              Dubai Real Estate: <br />
              <span className="text-prop-gold">A Global Hub of Resilience</span>
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-prop-gold rounded-full"></span>
            </h2>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Despite global headwinds, the real estate market in Dubai continues to leap over other metropolises amid global economic challenges. The influx of HNWIs and overseas buyers investing in Dubai’s high-end developments has proven the resiliency of the Emirate.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Proptech, a combination of property and technology, is revolutionizing the industry through AI, blockchain, and automation. The rising digital transformation—predictive analytics, asset digitization, and IoT—cannot be ignored.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {MARKET_STATS.map((stat, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="text-4xl font-bold text-prop-blue mb-2">{stat.value}</h3>
                  <p className="font-bold text-slate-800">{stat.label}</p>
                  <p className="text-sm text-slate-500">{stat.subtext}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-prop-blue opacity-20 rounded-full blur-3xl -mr-16 -mt-16"></div>
               
               <h3 className="text-xl font-bold mb-2">Q2 2022 vs Q2 2021 Growth</h3>
               <p className="text-slate-400 text-sm mb-8">Year-over-year performance surge in Dubai Real Estate</p>

               <div className="h-64 w-full">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={Q2_GROWTH_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                     <XAxis type="number" hide />
                     <YAxis dataKey="name" type="category" width={120} tick={{fill: '#94a3b8', fontSize: 12}} />
                     <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                     />
                     <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40}>
                        {Q2_GROWTH_DATA.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 0 ? '#14B8A6' : '#C5A059'} />
                        ))}
                     </Bar>
                   </BarChart>
                 </ResponsiveContainer>
               </div>
               
               <div className="flex gap-6 mt-4 text-sm">
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                   <span className="text-slate-300">Volume Increase (+45.86%)</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 bg-prop-gold rounded-full"></div>
                   <span className="text-slate-300">Value Increase (+61.56%)</span>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;