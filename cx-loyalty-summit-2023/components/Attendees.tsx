import React from 'react';
import { Section } from './Section';
import { Briefcase, Building2, ShoppingBag, Plane, Wifi, Coffee, Globe } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

const jobTitles = [
  "CXOs, VPs, Directors",
  "Chief Marketing Officers",
  "Heads of Customer Experience & UX",
  "Heads of Customer Insights & Analytics",
  "Heads of Digital Transformation",
  "Heads of Customer Loyalty & Brand Loyalty",
  "Heads of Customer Value & Loyalty Partnerships",
  "Heads of Rewards and Loyalty"
];

const industries = [
  { name: "BFSI", icon: <Building2 /> },
  { name: "Retail & E-Commerce", icon: <ShoppingBag /> },
  { name: "Telecommunication", icon: <Wifi /> },
  { name: "Hospitality", icon: <Coffee /> },
  { name: "Travel & Tourism", icon: <Globe /> },
  { name: "Aviation", icon: <Plane /> },
  { name: "FMCG & CPG", icon: <ShoppingBag /> },
  { name: "Others", icon: <Briefcase /> }
];

export const Attendees: React.FC = () => {
  return (
    <Section id="attendees" bg="gray">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Who Will You Meet */}
        <ScrollAnimation animation="slide-left">
          <div className="relative">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 relative inline-block">
              Who Will You Meet?
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-red-500 rounded-full"></div>
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <ul className="space-y-4">
                {jobTitles.map((title, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium border-b border-slate-50 pb-3 last:border-0 last:pb-0 hover:translate-x-2 transition-transform duration-300">
                    <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollAnimation>

        {/* Target Industries */}
        <div>
          <ScrollAnimation animation="slide-right">
             <h2 className="text-3xl font-bold text-slate-900 mb-8 relative inline-block">
              Target Industries
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-red-500 rounded-full"></div>
            </h2>
          </ScrollAnimation>
          
          <div className="grid grid-cols-2 gap-4">
            {industries.map((ind, idx) => (
              <ScrollAnimation key={idx} delay={idx * 50} animation="scale-up">
                <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group cursor-default">
                  <div className="text-slate-400 group-hover:text-red-500 transition-colors mb-3 transform group-hover:scale-125 duration-300 group-hover:rotate-6">
                    {React.cloneElement(ind.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                  <span className="text-center font-semibold text-slate-800 text-sm group-hover:text-slate-900">{ind.name}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};