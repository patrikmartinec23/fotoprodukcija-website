"use client";

import React from 'react';

const PortfolioGrid: React.FC = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Cards - Masonry Grid Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Container with adequate height */}
          <div className="min-h-screen p-8 lg:p-12">
            {/* Header Text */}
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Projekti: Nekateri najnovejši projekti
              </h2>
              <p className="text-gray-600 text-lg">
                Oglejte si primere našega dela in ugotovite, zakaj nas stranke izberejo za svoje najpomembnejše trenutke.
              </p>
            </div>

            {/* Masonry Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
              {/* Left Column */}
              <div className="flex flex-col gap-6">
                {/* Row 1 - Text Card */}
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Studio Fotografiranje</h3>
                  <p className="text-gray-600 mb-4">
                    Profesionalni studio portreti in kreativne seje v nadzorovanem okolju z vrhunsko opremo.
                  </p>
                  <div className="inline-block bg-black text-white px-4 py-2 rounded text-sm font-medium">
                    Več o studiu
                  </div>
                </div>

                {/* Row 2 - Photo Card */}
                <div className="aspect-[3/4] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group relative">
                  <img 
                    src="/images/categories/categories-2.jpg" 
                    alt="Profesionalni portreti"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 shadow-inner-strong"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg tracking-wide">Portreti</p>
                  </div>
                </div>

                {/* Row 3 - Photo Card (Left side only) */}
                <div className="aspect-[3/4] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group relative">
                  <img 
                    src="/images/categories/categories-4.jpg" 
                    alt="Korporativno fotografiranje"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 shadow-inner-strong"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg tracking-wide">Eventi</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6">
                {/* Row 1 - Photo Card */}
                <div className="aspect-[3/4] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group relative">
                  <img 
                    src="/images/categories/categories-1.jpg" 
                    alt="Studio slike"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 shadow-inner-strong"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg tracking-wide">Studio</p>
                  </div>
                </div>

                {/* Row 2 - Photo Card */}
                <div className="aspect-[3/4] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group relative">
                  <img 
                    src="/images/categories/categories-3.jpg" 
                    alt="Porončno fotografiranje"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 shadow-inner-strong"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg tracking-wide">Venčanja</p>
                  </div>
                </div>

                {/* Row 3 - Text Card */}
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pogledajte naš portfolio</h3>
                  <p className="text-gray-600 mb-4">
                    Več kot 200 uspešno izvedenih projektov v zadnjih letih.
                  </p>
                  <div className="inline-block border-2 border-black text-black px-4 py-2 rounded text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300">
                    Portfolio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
