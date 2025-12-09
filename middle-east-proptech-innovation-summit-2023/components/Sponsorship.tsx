import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Sponsorship: React.FC = () => {
  return (
    <section id="sponsor" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-prop-dark mb-4">Why Sponsor?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
             Engage with key decision makers such as CEOs, CIOs, and Heads of Property Management to differentiate your solution offerings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
            <h3 className="font-bold text-xl text-prop-blue mb-4">Thought Leadership</h3>
            <p className="text-slate-600 text-sm">Position your company as a leader by delivering a presentation or moderating a panel to a pre-qualified audience.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
            <h3 className="font-bold text-xl text-prop-blue mb-4">Generate Leads</h3>
            <p className="text-slate-600 text-sm">Get right in front of prequalified decision makers based on budget availability and motivation.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
            <h3 className="font-bold text-xl text-prop-blue mb-4">Brand Positioning</h3>
            <p className="text-slate-600 text-sm">Strengthen your brand in front of business owners & technology leaders re-aligning their digital strategies.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-prop-dark to-prop-blue rounded-3xl p-8 md:p-12 text-white relative overflow-hidden text-center">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-4">Book Your Spot Today</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              To find out more about the ROI-driven sponsorship and exhibition opportunities, contact us now.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="tel:+97142434677" className="flex items-center justify-center gap-3 bg-white text-prop-dark px-6 py-4 rounded-full font-bold hover:bg-prop-gold hover:text-white transition-colors">
                <Phone size={20} />
                +971 4 243 4677
              </a>
              <a href="mailto:info@verve-management.com" className="flex items-center justify-center gap-3 bg-prop-gold text-white px-6 py-4 rounded-full font-bold hover:bg-yellow-600 transition-colors">
                <Mail size={20} />
                info@verve-management.com
              </a>
            </div>
          </div>
          
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-prop-teal opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

      </div>
    </section>
  );
};

export default Sponsorship;