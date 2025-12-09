import React from 'react';
import { Section } from './Section';
import { Mic2, UserPlus, Target } from 'lucide-react';
import { Button } from './Button';
import { ScrollAnimation } from './ScrollAnimation';

export const Sponsors: React.FC = () => {
  return (
    <Section id="sponsors" bg="gray" className="overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 relative z-10">
          <ScrollAnimation animation="slide-left">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Why Sponsor?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              The 2nd Annual CX & Loyalty Summit MENA 2023 presents the perfect opportunity for solution providers to engage with key decision-makers to differentiate their product and put forward their value proposition in this crowded marketplace.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-red-500 transform transition-transform hover:scale-105 duration-500">
              <h3 className="font-bold text-xl mb-4">Interested in Sponsoring?</h3>
              <p className="text-slate-600 mb-6 text-sm">Find out more about ROI-driven sponsorship and exhibition opportunities.</p>
              <a href="mailto:info@verve-management.com">
                 <Button fullWidth className="animate-pulse hover:animate-none">Request Sponsorship Kit</Button>
              </a>
            </div>
          </ScrollAnimation>
        </div>

        <div className="lg:col-span-7 grid gap-6 relative z-10">
          <ScrollAnimation delay={200} animation="slide-right">
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row gap-6 items-start hover:shadow-xl transition-all duration-300 hover:-translate-x-2 group">
              <div className="bg-blue-50 p-4 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Mic2 size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Demonstrate Thought Leadership</h3>
                <p className="text-slate-600 text-sm">Position your company as a thought leader by delivering a standalone presentation or moderating a panel discussion to a pre-qualified audience.</p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={300} animation="slide-right">
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row gap-6 items-start hover:shadow-xl transition-all duration-300 hover:-translate-x-2 group">
               <div className="bg-green-50 p-4 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                <UserPlus size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Network & Generate Leads</h3>
                <p className="text-slate-600 text-sm">Optimize networking by getting right in front of key decision makers prequalified based on seniority and budget availability.</p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400} animation="slide-right">
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row gap-6 items-start hover:shadow-xl transition-all duration-300 hover:-translate-x-2 group">
               <div className="bg-purple-50 p-4 rounded-full text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                <Target size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Brand Positioning</h3>
                <p className="text-slate-600 text-sm">Establish, strengthen and re-position your brand in front of CMOs and Heads of CX looking to re-align their strategies.</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </Section>
  );
};