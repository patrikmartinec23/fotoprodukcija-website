"use client";
import React, { useState, useEffect } from 'react';
import AnimatedSection from '../ui/AnimatedSection';

interface GalleryImage {
  id: number;
  src: string;
  name: string;
  category: 'events' | 'portreti' | 'poroka' | 'korporativno';
  date: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Sample gallery data - replace with your actual images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: '/images/gallery/event-1.jpg',
      name: 'Tech Conference 2024',
      category: 'events',
      date: '2024-03-15',
      alt: 'Tech conference networking event'
    },
    {
      id: 2,
      src: '/images/gallery/portrait-1.jpg',
      name: 'Poslovni portret Marko',
      category: 'portreti',
      date: '2024-02-20',
      alt: 'Professional business portrait'
    },
    {
      id: 3,
      src: '/images/gallery/wedding-1.jpg',
      name: 'Poroka Ana & Miha',
      category: 'poroka',
      date: '2024-04-12',
      alt: 'Wedding ceremony moment'
    },
    {
      id: 4,
      src: '/images/gallery/corporate-1.jpg',
      name: 'Korporativni team building',
      category: 'korporativno',
      date: '2024-01-30',
      alt: 'Corporate team building event'
    },
    {
      id: 5,
      src: '/images/gallery/portrait-2.jpg',
      name: 'Studio portret Sara',
      category: 'portreti',
      date: '2024-03-05',
      alt: 'Studio portrait session'
    },
    {
      id: 6,
      src: '/images/gallery/event-2.jpg',
      name: 'Galerijska otvoritev',
      category: 'events',
      date: '2024-02-28',
      alt: 'Art gallery opening event'
    }
  ];

  const categories = [
    { value: 'all', label: 'Vse' },
    { value: 'events', label: 'Dogodki' },
    { value: 'portreti', label: 'Portreti' },
    { value: 'poroka', label: 'Poroke' },
    { value: 'korporativno', label: 'Korporativno' }
  ];

  // Filter images by category and search query
  const filteredImages = galleryImages
    .filter(image => {
      const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
      const matchesSearch = image.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Default sort by newest

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentImageIndex + 1) % filteredImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('sl-SI', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {/* Filters */}
      <AnimatedSection animation="fadeIn" delay={200} className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-2 min-w-[200px]">
            <span className="text-sm text-gray-600">Iskanje:</span>
            <input
              type="text"
              placeholder="Iskanje po imenu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-transparent flex-1"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <AnimatedSection
              key={image.id}
              animation="scale"
              delay={index * 100}
            >
              <div 
                className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                onClick={() => openLightbox(image)}
              >
                <div className="aspect-[4/3] bg-gray-200">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay with details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{image.name}</h3>
                    <p className="text-sm text-gray-200">{formatDate(image.date)}</p>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded text-xs font-medium">
                    {categories.find(cat => cat.value === image.category)?.label}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Ni fotografij v tej kategoriji.</p>
          </div>
        )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-200"
            aria-label="Zapri"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation buttons */}
          {filteredImages.length > 1 && (
            <>
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-200"
                aria-label="Prejšnja slika"
              >
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-200"
                aria-label="Naslednja slika"
              >
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image and details */}
          <div className="max-w-5xl max-h-full flex flex-col items-center">
            <div className="relative max-h-[70vh] max-w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Image details */}
            <div className="mt-6 text-center text-white">
              <h2 className="text-2xl font-bold mb-2">{selectedImage.name}</h2>
              <p className="text-gray-300">{formatDate(selectedImage.date)}</p>
              <p className="text-sm text-gray-400 mt-1">
                {categories.find(cat => cat.value === selectedImage.category)?.label}
              </p>
              {filteredImages.length > 1 && (
                <p className="text-xs text-gray-500 mt-2">
                  {currentImageIndex + 1} / {filteredImages.length}
                </p>
              )}
            </div>
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeLightbox}
            aria-label="Zapri galerijo"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
