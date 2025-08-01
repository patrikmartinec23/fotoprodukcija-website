"use client";
import React from 'react';
import Card from '../ui/Card';
import AnimatedSection from '../ui/AnimatedSection';

const ServiceCards: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Poroka',
      description: 'Profesionalno fotografiranje vašega najpomembnejšega dne. Ujamemo vse čustvene trenutke in podrobnosti.',
      features: ['Celodnevno fotografiranje', 'Spletna galerija', 'Retuširan portfelj', 'USB z vsemi fotografijami'],
      price: 'Od 800€',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Portret',
      description: 'Individualni ali skupinski portreti za osebne ali profesionalne potrebe.',
      features: ['Studio ali lokacija', '1–2 uri fotografiranja', '20+ obdelanih fotografij', 'Različna ozadja'],
      price: 'Od 150€',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Dogodki',
      description: 'Fotografiranje poslovnih dogodkov, praznovanj in zasebnih srečanj.',
      features: ['Sprotno fotografiranje', 'Hitra dostava fotografij', 'Neomejeno število posnetkov', 'Diskretna prisotnost'],
      price: 'Od 300€',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Poslovna fotografija',
      description: 'Profesionalne fotografije za vašo poslovno prisotnost in marketinške materiale.',
      features: ['Portreti zaposlenih', 'Fotografije prostora', 'Marketinški materiali', 'Podpora blagovni znamki'],
      price: 'Od 200€',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Naše storitve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ponujamo širok spekter fotografskih storitev, prilagojenih vašim željam. 
            Vsakemu projektu se posvetimo s pozornostjo in profesionalnostjo.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} animation="scale" delay={index * 200}>
              <Card padding="lg" hover>
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold text-gray-900">
                    {service.price}
                  </span>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                    Več informacij
                  </button>
                </div>
              </div>
            </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fadeIn" delay={800} className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Potrebujete prilagojeno storitev?
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Kontaktirajte nas za ponudbo
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServiceCards;
