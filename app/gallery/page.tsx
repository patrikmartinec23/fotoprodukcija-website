'use client';

import Gallery from '../../src/components/sections/Gallery';
import AnimatedSection from '../../src/components/ui/AnimatedSection';

export default function GalleryPage() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 py-2 lg:py-4 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="min-h-screen p-8 lg:p-12">
            {/* Header Text */}
            <AnimatedSection animation="slideUp" className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Galerija
              </h2>
              <p className="text-gray-600 text-lg mb-8 lg:mb-12">
                Oglejte si primere našega dela in ugotovite, zakaj nas stranke izberejo za svoje najpomembnejše trenutke.
              </p>
            </AnimatedSection>

            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
}
