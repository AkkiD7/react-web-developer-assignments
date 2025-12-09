import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  onRegisterClick: () => void;
}

const navItems: NavItem[] = [
  { label: 'Overview', href: '#overview' },
  { label: 'Attendees', href: '#attendees' },
  { label: 'Why Attend', href: '#why-attend' },
  { label: 'Topics', href: '#topics' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
           <div className={`font-black text-2xl tracking-tighter transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-slate-900'}`}>
             <span className="text-4xl text-slate-800">CX</span>
             <span className="text-red-500 text-lg mx-1">&</span>
             <span className="text-slate-800">LOYALTY</span>
           </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors ${scrolled ? 'text-slate-600 hover:text-red-600' : 'text-slate-800 hover:text-red-600'}`}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={onRegisterClick}
            className="px-5 py-2 bg-red-600 text-white rounded-full font-bold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 hover:shadow-red-500/40 transform hover:-translate-y-0.5"
          >
            Register Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-800 font-semibold text-lg py-2 border-b border-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => { setIsOpen(false); onRegisterClick(); }}
              className="mt-4 text-center px-5 py-3 bg-red-600 text-white rounded-lg font-bold w-full"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};