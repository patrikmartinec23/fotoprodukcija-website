'use client';

import React from 'react';
import AnimatedSection from '../../src/components/ui/AnimatedSection';
import Card from '../../src/components/ui/Card';
import Button from '../../src/components/ui/Button';
import Link from 'next/link';

export default function About() {
  const teamMember = {
    name: 'Miloš Vujinović',
    role: 'Glavni fotograf in direktor',
    specialization: 'Dokumentarna in športna fotografija',
    experience: '15+ let',
    image: '/team/milos.jpg',
    initials: 'MV',
    bio: 'Več kot 15 let se posvečam ustvarjanju vizualnih zgodb, ki presegajo trenutek in govorijo o človeški izkušnji. Moja pot me je vodila od športne fotografije do dokumentarnega dela, kjer združujem tehnično natančnost z emocionalnim pristopom k vsaki zgodbi.',
    specialties: [
      'Dokumentarna fotografija',
      'Športna fotografija', 
      'Korporativna fotografija',
      'Kulturni dogodki'
    ]
  };

  const references = [
    { name: 'F.A. Bobo', type: 'agency', logo: '🏢' },
    { name: 'Fotoklub Maribor', type: 'club', logo: '📸' },
    { name: 'SOPA Images', type: 'agency', logo: '🏢' },
    { name: 'Sportida', type: 'media', logo: '📺' },
    { name: 'RTVSlo', type: 'media', logo: '📺' },
    { name: 'Večer', type: 'newspaper', logo: '📰' },
    { name: 'Delo', type: 'newspaper', logo: '📰' },
    { name: 'Primorske novice', type: 'newspaper', logo: '📰' },
    { name: 'Družina', type: 'magazine', logo: '📖' },
    { name: 'Mladina', type: 'magazine', logo: '📖' },
    { name: 'Dnevnik', type: 'newspaper', logo: '📰' },
    { name: 'Zurnal24', type: 'media', logo: '📺' }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 pt-2 lg:pt-4 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="min-h-screen p-8 lg:p-12">
            {/* Header Text */}
            <AnimatedSection animation="slideUp" className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Spoznajte naš studio
              </h2>
              <p className="text-gray-600 text-lg mb-8 lg:mb-12">
                Smo izkušeni v fotografiji, saj že več kot 10 let ustvarjamo nepozabne vizualne zgodbe. 
                Naša strast je ujemanje pristnih trenutkov in pretvarjanje vaših najlepših spominov v trajne umetnine.
              </p>
            </AnimatedSection>

            {/* Main Content Layout */}
            <div className="space-y-8">
              {/* Top Row - Photo + Two Cards */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                {/* Photo Card */}
                <AnimatedSection animation="scale" delay={200} className="md:col-span-2 aspect-[3/5] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative">
                  <img 
                    src={teamMember.image} 
                    alt={teamMember.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-5xl font-bold" style={{display: 'none'}}>
                    {teamMember.initials}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 shadow-inner-strong"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      Glavni fotograf
                    </span>
                  </div>
                  
                  {/* Project Title */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold text-lg tracking-wide mb-1">{teamMember.name}</h4>
                    <p className="text-sm text-gray-200 opacity-90">{teamMember.specialization}</p>
                    <p className="text-xs text-gray-300 opacity-75">{teamMember.experience}</p>
                  </div>
                </AnimatedSection>

                {/* Right Cards Container */}
                <div className="md:col-span-3 flex flex-col gap-4 h-full">
                  {/* Naša zgodba Card */}
                  <AnimatedSection animation="slideUp" delay={300} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Naša zgodba</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {teamMember.bio}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 text-base">Naše specializacije:</h4>
                      <div className="flex flex-wrap gap-2">
                        {teamMember.specialties.map((specialty, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>

                  {/* Naša izkušnja Card */}
                  <AnimatedSection animation="slideUp" delay={500} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Naša izkušnja</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <h4 className="font-bold text-gray-900 text-2xl mb-1">15+</h4>
                        <p className="text-gray-600 text-xs">let fotografske izkušnje</p>
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-gray-900 text-2xl mb-1">500+</h4>
                        <p className="text-gray-600 text-xs">uspešnih projektov</p>
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-gray-900 text-2xl mb-1">12</h4>
                        <p className="text-gray-600 text-xs">medijskih partnerstev</p>
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-gray-900 text-2xl mb-1">100%</h4>
                        <p className="text-gray-600 text-xs">zadovoljnih strank</p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>

              {/* References Section */}
              <AnimatedSection 
                animation="fadeIn"
                className="relative py-12 bg-gray-900 rounded-lg"
              >
                <div className="max-w-6xl mx-auto px-6 text-center">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    Naše reference
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Zaupanje vodilnih slovenskih medijev in agencij
                  </p>
                  
                  {/* Horizontal Moving Track */}
                  <div className="relative">
                    <div className="flex overflow-hidden">
                      <div className="flex animate-scroll">
                        {/* First set */}
                        {references.map((ref, index) => (
                          <div 
                            key={`first-${ref.name}`}
                            className="flex-shrink-0 mx-4"
                          >
                            <div className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6 rounded-lg w-40 h-28 flex flex-col justify-center hover:bg-white/20 transition-all duration-300">
                              <div className="text-2xl mb-2">{ref.logo}</div>
                              <h4 className="font-medium text-white text-sm">
                                {ref.name.split(' ')[0]}
                              </h4>
                            </div>
                          </div>
                        ))}
                        {/* Second set for seamless loop */}
                        {references.map((ref, index) => (
                          <div 
                            key={`second-${ref.name}`}
                            className="flex-shrink-0 mx-4"
                          >
                            <div className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6 rounded-lg w-40 h-28 flex flex-col justify-center hover:bg-white/20 transition-all duration-300">
                              <div className="text-2xl mb-2">{ref.logo}</div>
                              <h4 className="font-medium text-white text-sm">
                                {ref.name.split(' ')[0]}
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </div>

      {/* Call to Action Section - Transition to Footer */}
      <AnimatedSection 
        animation="fadeIn"
        className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Spremljajte naše delo
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Oglejte si našo celotno galerijo projektov in se prepričajte o kakovosti našega dela. 
            Pripraveni smo ustvariti tudi vašo vizualno zgodbo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link href="/gallery">
              <Button className="bg-black hover:bg-gray-800 text-white px-10 py-5 text-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Oglejte si galerijo
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-gray-800 text-gray-800 px-10 py-5 text-xl transition-all duration-300">
                Kontaktirajte nas
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
