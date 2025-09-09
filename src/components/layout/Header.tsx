"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Crown, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '/', label: 'Strona Główna' },
    { href: '/jak-sprzedajemy', label: 'Jak Sprzedajemy' },
    { href: '/faq', label: 'FAQ' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-sm border-b-4 border-black shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-12 h-12 mr-3">
              <Image 
                src="/img/logo.png" 
                alt="Dobry Król Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <Link href="/" className="royal-title text-2xl font-bold tracking-tight transition-all duration-300 hover:scale-105">
              <span className="transition-transform duration-300 hover:-translate-y-1">Dobry Król</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className="text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:text-blue-600 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
              <button className="text-sm font-bold px-5 py-2.5 transition-all duration-300 hover:-translate-y-1 neo-border-small bg-yellow-300 text-black relative overflow-hidden group">
                <span className="relative z-10">Rozpocznij Rozmowę</span>
                <span className="absolute inset-0 golden-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="transition-all duration-300 neo-border-small p-1 bg-white text-black hover:-translate-y-1"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-white neo-border transition-all duration-500 ease-in-out ${
        isMenuOpen 
          ? "max-h-64 py-6 opacity-100 transform translate-y-0" 
          : "max-h-0 overflow-hidden opacity-0 transform -translate-y-4"
      }`}>
        <div className="container mx-auto px-4 space-y-6">
          {navigationItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className="block text-black text-lg font-bold hover:translate-x-2 transition-transform duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="block bg-yellow-300 text-black text-center py-3 px-4 font-bold neo-border transition-all duration-300 hover:bg-blue-600 hover:text-white w-full">
            Rozpocznij Rozmowę
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
