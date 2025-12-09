import React from 'react';
import { Section } from './Section';
import { Share2, Zap, Handshake, Search } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

const reasons = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Gain Knowledge",
    desc: "Insights from Top Industry Leaders and Experts from across the globe.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Network Peers",
    desc: "Connect in a solution-oriented environment with industry peers.",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Partnerships",
    desc: "Discuss Significant Partnerships and Collaborations with Industry leaders.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Deep Dive",
    desc: "Insights derived from real-time case studies to address latest challenges.",
    color: "from-red-400 to-pink-500"
  }
];

export const WhyAttend: React.FC = () => {
  return (
    <Section id="why-attend" bg="dark" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <ScrollAnimation animation="scale-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Attend?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              If you are ready to innovate and join the ranks of the biggest innovators while resonating with compelling reasons to attend, then register today.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <ScrollAnimation key={idx} delay={idx * 150} animation="fade-up">
              <div className="group relative bg-slate-800 p-8 rounded-2xl border border-slate-700 h-full transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-900/50 hover:border-slate-600 overflow-hidden">
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  {reason.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">{reason.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {reason.desc}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </Section>
  );
};