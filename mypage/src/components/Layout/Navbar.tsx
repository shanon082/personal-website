'use client';

import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-responsive section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-primary-800" />
            <span className="text-xl font-bold text-primary-900">DevFolio</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link font-medium"
              >
                {item.label}
              </a>
            ))}
            <button className="btn-primary text-sm">
              Download CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="btn-primary w-full">
                Download CV
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;