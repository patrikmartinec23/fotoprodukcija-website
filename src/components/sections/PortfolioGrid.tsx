"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import ProjectModal from '../ui/ProjectModal';
import AnimatedSection from '../ui/AnimatedSection';

const PortfolioGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample project data
  const projects = {
    portrait: {
      id: 1,
      title: 'Poslovni portret Marko',
      category: 'Portreti',
      description: 'Profesionalni portret za LinkedIn profil in korporativno predstavitev. Projekt je vključeval studio fotografiranje z različnimi ozadji in osvetlitvami.',
      date: '2024-02-20',
      client: 'Marko Novak',
      location: 'Studio Ljubljana',
      coverImage: '/images/categories/categories-2.jpg',
      images: [
        { id: 1, src: '/images/categories/categories-2.jpg', alt: 'Glavni portret' },
        { id: 2, src: '/images/categories/categories-1.jpg', alt: 'Alternativna poza' },
        { id: 3, src: '/images/categories/categories-3.jpg', alt: 'Črno-beli portret' },
      ],
      details: [
        'Studio fotografiranje z profesionalno osvetlitvijo',
        '3 različna ozadja',
        'Retuširanje vseh fotografij',
        'Visoka ločljivost za tisk in spletno uporabo'
      ]
    },
    studio: {
      id: 2,
      title: 'Umetnostna inštalacija',
      category: 'Studio',
      description: 'Kreativna studio sešn z umetnostnimi elementi. Projekt je raziskoval igro svetlobe in senc v kombinaciji z modernimi umetnostnimi elementi.',
      date: '2024-03-10',
      client: 'Sara Kovač',
      location: 'Kreativni studio Ljubljana',
      coverImage: '/images/categories/categories-1.jpg',
      images: [
        { id: 1, src: '/images/categories/categories-1.jpg', alt: 'Glavna kompozicija' },
        { id: 2, src: '/images/categories/categories-2.jpg', alt: 'Detail osvetlitve' },
        { id: 3, src: '/images/categories/categories-4.jpg', alt: 'Alternativni kader' },
        { id: 4, src: '/images/categories/categories-3.jpg', alt: 'Končna kompozicija' },
      ],
      details: [
        'Kreativno delo z umetnostnimi elementi',
        'Eksperimentalna osvetlitev',
        'Več kot 50 posnetkov',
        'Unikatne kompozicije'
      ]
    },
    wedding: {
      id: 3,
      title: 'Poroka Luka in Sara',
      category: 'Poroka',
      description: 'Romantična poročna zgodba zajeta skozi objektiv. Celodnevno fotografiranje je vključevalo pripravo, ceremonijo in zabavo.',
      date: '2024-04-12',
      client: 'Luka in Sara',
      location: 'Grad Otočec',
      coverImage: '/images/categories/categories-3.jpg',
      images: [
        { id: 1, src: '/images/categories/categories-3.jpg', alt: 'Poročna prstana' },
        { id: 2, src: '/images/categories/categories-1.jpg', alt: 'Ceremonia' },
        { id: 3, src: '/images/categories/categories-2.jpg', alt: 'Poroka mladoporočenca' },
      ],
      details: [
        'Celodnevno fotografiranje (12 ur)',
        'Več kot 500 posnetkov',
        'Spletna galerija za goste',
        'USB z vsemi fotografijami'
      ]
    },
    event: {
      id: 4,
      title: 'Tech Summit 2024',
      category: 'Eventi',
      description: 'Večdnevna tehnološka konferenca z več kot 200 udeleženci. Fotografiranje je vključevalo predavanja, networking in uradne dogodke.',
      date: '2024-01-30',
      client: 'Tech Summit Ljubljana',
      location: 'Gospodarsko razstavišče',
      coverImage: '/images/categories/categories-4.jpg',
      images: [
        { id: 1, src: '/images/categories/categories-4.jpg', alt: 'Glavna dvorana' },
        { id: 2, src: '/images/categories/categories-1.jpg', alt: 'Predavatelj' },
        { id: 3, src: '/images/categories/categories-2.jpg', alt: 'Networking' },
        { id: 4, src: '/images/categories/categories-3.jpg', alt: 'Razstava' },
      ],
      details: [
        'Tridnevno fotografiranje dogodka',
        'Pokrivanje vseh glavnih aktivnosti',
        'Hitra dostava fotografij istega dne',
        'Več kot 300 profesionalnih posnetkov'
      ]
    }
  };

  const openProject = (projectKey: keyof typeof projects) => {
    setSelectedProject(projects[projectKey]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 py-2 lg:py-4 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Cards - Masonry Grid Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Container with adequate height */}
          <div className="min-h-screen p-8 lg:p-12">
            {/* Header Text */}
            <AnimatedSection animation="slideUp" className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Projekti: Nekateri najnovejši projekti
              </h2>
              <p className="text-gray-600 text-lg mb-8 lg:mb-12">
                Oglejte si primere našega dela in ugotovite, zakaj nas stranke izberejo za svoje najpomembnejše trenutke.
              </p>
            </AnimatedSection>

            {/* Masonry Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
              {/* Left Column */}
              <div className="flex flex-col gap-6">
                {/* Row 1 - Text Card */}
                <AnimatedSection animation="slideUp" delay={200} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Profesionalno Fotografiranje</h3>
                  <p className="text-gray-600 mb-4">
                    Profesionalne fotografske storitve za vsak dogodek. Dolgoletne izkušnje in strast do fotografije.
                  </p>
                  <Link href="/about">
                    <Button variant="primary" size="sm">
                      Več o nas
                    </Button>
                  </Link>
                </AnimatedSection>

                {/* Row 2 - Photo Card */}
                <AnimatedSection animation="scale" delay={400} className="aspect-[3/4] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group relative">
                  <div onClick={() => openProject('portrait')}>
                    <img 
                      src="/images/categories/categories-2.jpg" 
                      alt="Profesionalni portreti"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute inset-0 shadow-inner-strong"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded text-xs font-medium">
                        Portreti
                      </span>
                    </div>
                    
                    {/* Project Title */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg tracking-wide mb-1">Poslovni portret</h4>
                      <p className="text-sm text-gray-200 opacity-90">Korporativna fotografija za LinkedIn profil</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Row 3 - Photo Card (Left side only) */}
                <AnimatedSection animation="slideUp" delay={600} className="aspect-[3/4] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group relative">
                  <div onClick={() => openProject('event')}>
                    <img 
                      src="/images/categories/categories-4.jpg" 
                      alt="Korporativno fotografiranje"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute inset-0 shadow-inner-strong"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded text-xs font-medium">
                        Eventi
                      </span>
                    </div>
                    
                    {/* Project Title */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg tracking-wide mb-1">Tech Summit 2024</h4>
                      <p className="text-sm text-gray-200 opacity-90">Konferenca in networking dogodek</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6">
                {/* Row 1 - Photo Card */}
                <AnimatedSection animation="scale" delay={300} className="aspect-[3/4] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group relative">
                  <div onClick={() => openProject('studio')}>
                    <img 
                      src="/images/categories/categories-1.jpg" 
                      alt="Studio slike"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute inset-0 shadow-inner-strong"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded text-xs font-medium">
                        Studio
                      </span>
                    </div>
                    
                    {/* Project Title */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg tracking-wide mb-1">Umetnostna inštalacija</h4>
                      <p className="text-sm text-gray-200 opacity-90">Osebni studio fotoshoot</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Row 2 - Photo Card */}
                <AnimatedSection animation="slideUp" delay={500} className="aspect-[3/4] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group relative">
                  <div onClick={() => openProject('wedding')}>
                    <img 
                      src="/images/categories/categories-3.jpg" 
                      alt="Porončno fotografiranje"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute inset-0 shadow-inner-strong"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded text-xs font-medium">
                        Poroka
                      </span>
                    </div>
                    
                    {/* Project Title */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg tracking-wide mb-1">Poroka Luka in Sara</h4>
                      <p className="text-sm text-gray-200 opacity-90">Poročna prstana</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Row 3 - Text Card */}
                <AnimatedSection animation="slideUp" delay={700} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Celotna galerija slik</h3>
                  <p className="text-gray-600 mb-4">
                    Več kot 200 uspešno izvedenih projektov v zadnjih letih.
                  </p>
                  <Link href="/gallery">
                    <Button variant="outline" size="sm">
                      Galerija
                    </Button>
                  </Link>
                </AnimatedSection>
              </div>
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

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default PortfolioGrid;
