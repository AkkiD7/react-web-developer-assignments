import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  onRegisterClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="cursor-pointer">
            <Logo />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-700 hover:text-brand-blue font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onRegisterClick}
              className="bg-brand-blue text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Register Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-brand-blue focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-md"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onRegisterClick();
              }}
              className="block w-full mt-4 text-center bg-brand-blue text-white px-4 py-3 rounded-md font-bold"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;