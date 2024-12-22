import React, { useState, useEffect } from 'react';
import { Building2, Users, Mail, Menu, X } from 'lucide-react';
import Logo from './shared/Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offsetTop - 80,
          behavior: 'smooth'
        });
        setIsOpen(false);
      }
    }
  };

  const navItems = [
    { 
      name: 'Properties', 
      href: 'https://www.compass.com/homes-for-sale/_map/mapview=34.0085186,-117.2036143,33.2699418,-118.3571787/', 
      icon: <Building2 className="w-5 h-5" />,
      external: true
    },
    { 
      name: 'About', 
      href: '#about', 
      icon: <Users className="w-5 h-5" />,
      external: false
    },
    { 
      name: 'Contact', 
      href: '#contact', 
      icon: <Mail className="w-5 h-5" />,
      external: false
    },
  ];

  const headerClass = isScrolled 
    ? 'bg-white text-gray-900 shadow-lg'
    : 'bg-black text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Logo isScrolled={isScrolled} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={item.external ? undefined : handleNavClick}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-all duration-300 hover:opacity-80"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-300 hover:opacity-80"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 bg-white text-gray-900 shadow-lg rounded-b-lg overflow-hidden">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={item.external ? undefined : handleNavClick}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-50 rounded-lg transition-all duration-300"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}