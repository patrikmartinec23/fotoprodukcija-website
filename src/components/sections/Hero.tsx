"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Hero images array
  const heroImages = [
    { src: '/images/hero/hero-1.jpg', alt: 'Studio slike' },
    { src: '/images/hero/hero-2.jpg', alt: 'Profesionalni portreti' },
    { src: '/images/hero/hero-3.jpg', alt: 'Porončno fotografiranje' },
    { src: '/images/hero/hero-4.jpg', alt: 'Korporativno fotografiranje' },
  ];

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white py-16 lg:py-8 overflow-hidden">
      {/* Minimalist background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gray-50/60 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gray-200/30 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content and Featured Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-34 items-center mb-16">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-black">
                  Ujamimo vaše
                </span>
                <span className="block text-gray-700 font-light italic">
                  najlepše trenutke
                </span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed font-light">
                Profesionalne fotografske storitve, ki vsebujejo <em>umetnost</em> iz vsakega kota. 
                Ponudba profesionalnih fotografskih storitev, ki zajemajo vse od <span className="text-black font-medium">portretov</span> do <span className="text-black font-medium">korporativnih dogodkov</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <Link href="/portfolio">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-black hover:bg-gray-700 text-white border-none shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                >
                  Do projektov
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="border-2 border-black text-black hover:bg-black hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Sodelujte z nami
              </Button>
            </div>
            
          </div>

          {/* Main Featured Photo */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-lg overflow-hidden">
              {/* Image slideshow container */}
              <div className="relative h-full">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentImageIndex
                        ? 'opacity-100 transform translate-y-0'
                        : index === (currentImageIndex - 1 + heroImages.length) % heroImages.length
                        ? 'opacity-0 transform -translate-y-full'
                        : 'opacity-0 transform translate-y-full'
                    }`}
                  >
                    {/* Placeholder div - commented out when using real images */}
                    {/* 
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto flex items-center justify-center">
                          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <p className="text-gray-600 text-sm font-medium">{image.alt}</p>
                        <p className="text-gray-500 text-xs">#{index + 1}</p>
                      </div>
                    </div>
                    */}
                    
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-black text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
              {heroImages[currentImageIndex].alt}
            </div>
            
            {/* Slide indicators */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-black w-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Minimalist decorative elements - removed the right circle */}
            <div className="absolute -top-6 -left-6 w-16 h-16 border border-gray-200 rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-black rounded-full opacity-10"></div>
          </div>
        </div>

        {/* Service Cards - Horizontal Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-24">
          {/* Studio photo - categories-1 */}
          <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-150 rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative h-full">
              <img 
                src="/images/categories/categories-1.jpg" 
                alt="Studio slike"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="absolute bottom-3 left-3">
                <p className="text-white text-sm font-medium shadow-text">Studio</p>
              </div>
            </div>
          </div>

          {/* Portraits photo - categories-2 */}
          <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-150 rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative h-full">
              <img 
                src="/images/categories/categories-2.jpg" 
                alt="Profesionalni portreti"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="absolute bottom-3 left-3">
                <p className="text-white text-sm font-medium shadow-text">Portreti</p>
              </div>
            </div>
          </div>

          {/* Wedding photo - categories-3 */}
          <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-150 rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative h-full">
              <img 
                src="/images/categories/categories-3.jpg" 
                alt="Porončno fotografiranje"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="absolute bottom-3 left-3">
                <p className="text-white text-sm font-medium shadow-text">Poroke</p>
              </div>
            </div>
          </div>

          {/* Events photo - categories-4 */}
          <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-150 rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="relative h-full">
              <img 
                src="/images/categories/categories-4.jpg" 
                alt="Korporativno fotografiranje"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="absolute bottom-3 left-3">
                <p className="text-white text-sm font-medium shadow-text">Eventi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
