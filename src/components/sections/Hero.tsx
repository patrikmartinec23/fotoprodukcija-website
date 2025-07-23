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
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
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
                  className="py-0 bg-black hover:bg-black text-white border-none shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                >
                  Do projektov
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="border-2 border-black text-black shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
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
            
            {/* Slide indicators - vertical */}
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-black h-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Minimalist decorative elements */}
            <div className="absolute -top-6 -left-6 w-16 h-16 border border-gray-200 rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-black rounded-full opacity-10"></div>
            <div className="absolute top-12 -right-2 w-12 h-12 border-2 border-gray-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
