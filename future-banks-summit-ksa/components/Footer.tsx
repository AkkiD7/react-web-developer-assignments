import React from 'react';
import Logo from './Logo';
import { Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

interface FooterProps {
  onRegisterClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onRegisterClick }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6 bg-white w-fit p-2 rounded-lg">
                <Logo />
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              The 4th Annual Future Banks Summit KSA 2023 showcases innovations and strategies for the future of banking in the Kingdom.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#overview" className="hover:text-brand-accent transition-colors">Overview</a></li>
              <li><a href="#topics" className="hover:text-brand-accent transition-colors">Topics</a></li>
              <li><a href="#attendees" className="hover:text-brand-accent transition-colors">Who Will You Meet</a></li>
              <li>
                <button 
                  onClick={onRegisterClick} 
                  className="hover:text-brand-accent transition-colors text-left"
                >
                  Register
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-brand-accent" />
                <span>info@futurebanksummit.com<br/>Riyadh, KSA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2023 Future Banks Summit. All rights reserved.</p>
          <p className="mt-2 md:mt-0">www.ksa.futurebanksummit.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;