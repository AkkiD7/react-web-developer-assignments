import React from 'react';
import { Section } from './Section';
import { CheckCircle2 } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

const topics = [
  "Corporate Culture Focus: Spearheading CX Transformation",
  "Brand communities driving Loyalty, Retention & Advocacy",
  "Delivering the ‘Unattainable’ CX dream",
  "Hyper Personalization Strategies",
  "Improving Customer Experience & Operational Excellence",
  "Using Data, CRM, and Marketing Automation",
  "Multichannel Focus: World-class CX across channels",
  "Driving Loyalty and Revenue through Gamification",
  "Consistent Brand promise across channels",
  "Linking Voice of the Employee and Voice of the Customer",
  "Using social media to improve brand perception",
  "Customer Analytics and Segmentation",
  "Effective complaint handling for Retention",
  "Measuring how loyalty programs boost revenue"
];

export const Topics: React.FC = () => {
  return (
    <Section id="topics">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Topic Highlights</h2>
            <p className="text-slate-600">Explore emerging CX strategies, the latest technologies, and best practices.</p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {topics.map((topic, idx) => (
            <ScrollAnimation key={idx} delay={Math.min(idx * 50, 500)}>
              <div className="flex gap-4 items-start group p-4 rounded-lg hover:bg-slate-50 transition-colors">
                <CheckCircle2 className="text-red-500 flex-shrink-0 mt-1" size={20} />
                <p className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                  {topic}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </Section>
  );
};