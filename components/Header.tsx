import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-2">
            <div className="bg-tech-500 p-1.5 rounded-lg text-white">
              <Zap size={24} fill="currentColor" />
            </div>
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'}`}>
              Cartagena<span className="text-tech-500">Tech</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-tech-500 ${
                  scrolled ? 'text-slate-600' : 'text-slate-100'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button className="bg-tech-500 hover:bg-tech-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-tech-500/30 transform hover:-translate-y-0.5">
              Únete al Ecosistema
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 absolute w-full top-20 left-0 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-tech-500 hover:bg-slate-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-tech-500 text-white px-5 py-3 rounded-lg text-base font-semibold">
              Únete al Ecosistema
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;