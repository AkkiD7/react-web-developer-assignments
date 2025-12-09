import React from 'react';
import { Section } from './Section';
import { TrendingUp, Users, Lightbulb } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

export const Overview: React.FC = () => {
  return (
    <Section id="overview">
      <ScrollAnimation>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Event Overview</h2>
          <div className="h-1 w-20 bg-red-500 mx-auto rounded-full"></div>
        </div>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <ScrollAnimation delay={200}>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              <strong className="text-slate-900">A strong customer experience</strong>, employee experience and customer loyalty program management are the hallmark of many of the world’s most successful brands – setting the bar for organizations across all industries.
            </p>
            <p>
              It’s no secret that over the past two years, customer expectations have evolved – making CX as one of the biggest differentiators between one’s brand and the competition. Two thirds of organizations globally now compete on customer experience alone with <span className="text-red-600 font-bold">87% of business leaders</span> having identified CX as their top growth engine.
            </p>
            <p>
              The <span className="font-semibold text-slate-900">2nd Annual CX & Loyalty Summit MENA 2023</span> shifts focus on innovative approaches that the world’s leading organizations are deploying to manage customer interactions and maximize customer value.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-6">
           <ScrollAnimation delay={300}>
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
               <div className="flex gap-4">
                 <div className="bg-blue-100 p-3 rounded-lg h-fit text-blue-600">
                   <TrendingUp size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg text-slate-900 mb-2">Drive Growth</h3>
                   <p className="text-slate-600 text-sm">Discover how CX is becoming the primary driver for business revenue and sustainable growth.</p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           <ScrollAnimation delay={400}>
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
               <div className="flex gap-4">
                 <div className="bg-red-100 p-3 rounded-lg h-fit text-red-600">
                   <Users size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg text-slate-900 mb-2">Connect & Network</h3>
                   <p className="text-slate-600 text-sm">Network with CXOs, VPs, and Directors from top-tier organizations across the MENA region.</p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>

           <ScrollAnimation delay={500}>
             <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
               <div className="flex gap-4">
                 <div className="bg-amber-100 p-3 rounded-lg h-fit text-amber-600">
                   <Lightbulb size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg text-slate-900 mb-2">Innovation Focus</h3>
                   <p className="text-slate-600 text-sm">Explore digital experiences transforming the way we work, transact, and communicate.</p>
                 </div>
               </div>
             </div>
           </ScrollAnimation>
        </div>
      </div>
    </Section>
  );
};