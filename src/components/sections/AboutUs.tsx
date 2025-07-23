import React from 'react';
import Button from '../ui/Button';

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              O FotoProdukciji
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Već više od 10 godina se specijalizujemo za profesionalnu fotografiju 
              koja prevazilazi očekivanja naših klijenata. Naša strast je da uhvatimo emocije, 
              trenutke i priče kroz objektiv.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Verujemo da svaka fotografija priča priču. Naš pristup je 
              personalan, kreativan i tehnički savršen, što garantuje rezultate 
              koje ćete ceniti ceo život.
            </p>
            <Button variant="primary" size="lg">
              Upoznajte naš rad
            </Button>
          </div>
          
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg shadow-lg flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
