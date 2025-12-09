import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-black text-2xl tracking-tighter text-white">
             <span>CX</span>
             <span className="text-red-500 text-lg mx-1">&</span>
             <span>LOYALTY</span>
            </div>
            <p className="text-slate-400 text-sm">
              Driving revenue building relations through CX transformation & increased brand Loyalty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#overview" className="hover:text-red-500 transition-colors">Overview</a></li>
              <li><a href="#topics" className="hover:text-red-500 transition-colors">Agenda Topics</a></li>
              <li><a href="#sponsors" className="hover:text-red-500 transition-colors">Sponsorship</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-500" />
                <a href="tel:+97142434677" className="hover:text-white transition-colors">+971 4 243 4677</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-500" />
                <a href="mailto:info@verve-management.com" className="hover:text-white transition-colors">info@verve-management.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={18} className="text-red-500" />
                <a href="https://www.cxloyaltymena.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">www.cxloyaltymena.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; 2023 Verve Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};