"use client";
import React, { useState, useEffect } from 'react';

interface ProjectImage {
  id: number;
  src: string;
  alt: string;
}

interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
  client?: string;
  location?: string;
  coverImage: string;
  images: ProjectImage[];
  details: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
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
  }, [isOpen, currentImageIndex, project]);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!project) return;
    
    const newIndex = direction === 'prev' 
      ? (currentImageIndex - 1 + project.images.length) % project.images.length
      : (currentImageIndex + 1) % project.images.length;
    
    setCurrentImageIndex(newIndex);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('sl-SI', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!isOpen || !project) return null;

  const currentImage = project.images[currentImageIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-200"
        aria-label="Zapri"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="max-w-7xl max-h-full w-full flex flex-col lg:flex-row gap-6 overflow-hidden">
        {/* Image Section */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          {/* Navigation buttons */}
          {project.images.length > 1 && (
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

          {/* Main Image */}
          <div className="relative max-h-[70vh] max-w-full">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Image Counter & Thumbnails */}
          {project.images.length > 1 && (
            <div className="mt-4 flex flex-col items-center">
              <p className="text-xs text-gray-400 mb-3">
                {currentImageIndex + 1} / {project.images.length}
              </p>
              
              {/* Thumbnail Navigation */}
              <div className="flex gap-2 max-w-md overflow-x-auto">
                {project.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'border-white shadow-lg' 
                        : 'border-white/30 hover:border-white/60'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Project Details Section */}
        <div className="lg:w-96 bg-white/10 backdrop-blur-md rounded-lg p-6 text-white overflow-y-auto max-h-[80vh]">
          <div className="space-y-6">
            {/* Category Badge */}
            <div className="inline-block">
              <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>

            {/* Project Title */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-300">{formatDate(project.date)}</p>
            </div>

            {/* Project Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">O projektu</h3>
              <p className="text-gray-200 leading-relaxed">{project.description}</p>
            </div>

            {/* Client & Location */}
            {(project.client || project.location) && (
              <div className="grid grid-cols-1 gap-4">
                {project.client && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Stranka</h4>
                    <p className="text-white">{project.client}</p>
                  </div>
                )}
                {project.location && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Lokacija</h4>
                    <p className="text-white">{project.location}</p>
                  </div>
                )}
              </div>
            )}

            {/* Project Details */}
            {project.details.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Podrobnosti</h3>
                <ul className="space-y-2">
                  {project.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-200 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact CTA */}
            <div className="pt-4 border-t border-white/20">
              <p className="text-gray-300 text-sm mb-3">
                Vas zanima podoben projekt?
              </p>
              <button 
                onClick={onClose}
                className="w-full bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Kontaktirajte nas
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onClose}
        aria-label="Zapri modal"
      />
    </div>
  );
};

export default ProjectModal;
