"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector(`a[href="${pathname}"]`) as HTMLElement;
      if (activeLink) {
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        setUnderlineStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
          opacity: 1
        });
      } else {
        setUnderlineStyle(prev => ({ ...prev, opacity: 0 }));
      }
    }
  }, [pathname]);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on homepage, navigate to homepage with hash
      window.location.href = '/#contact-form';
    }
  };

  const navItems = [
    { href: '/', label: 'Domov' },
    { href: '/portfolio', label: 'Projekti' },
    { href: '/services', label: 'Foto' },
    { href: '/about', label: 'O nas' },
    { href: '/contact', label: 'Kontakt' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-black">
              FotoProdukcija
            </div>
          </Link>
          
          {/* Navigation */}
          <nav ref={navRef} className="hidden md:flex space-x-8 relative">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-black transition-colors duration-200 font-medium relative px-2 py-1 ${
                  pathname === item.href ? 'text-black' : 'text-gray-500'
                }`}
              >

                {item.label}
              </Link>
            ))}
            {/* Sliding underline */}
            <div 
              className="absolute bottom-0 h-0.5 bg-black rounded-full transition-all duration-300 ease-out"
              style={{
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`,
                opacity: underlineStyle.opacity
              }}
            />
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="primary" 
              size="sm"
              onClick={scrollToContact}
              className="bg-black hover:bg-gray-700 text-white border-none shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Rezervirajte termin
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-500 hover:text-black transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-500 hover:text-black transition-colors text-lg font-medium ${
                    pathname === item.href ? 'text-black' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => {
                  scrollToContact();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-black hover:bg-gray-700 text-white border-none shadow-lg w-fit"
              >
                Rezervirajte termin
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
