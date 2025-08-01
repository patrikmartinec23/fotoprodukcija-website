"use client";
import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';

const OurStory: React.FC = () => {
  return (
    <AnimatedSection animation="slideUp" delay={300} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Naša zgodba</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Več kot 15 let se posvečam ustvarjanju vizualnih zgodb, ki presegajo trenutek in govorijo o človeški izkušnji. Moja pot me je vodila od športne fotografije do dokumentarnega dela, kjer združujem tehnično natančnost z emocionalnim pristopom k vsaki zgodbi.
      </p>
      <div className="space-y-3">
        <h4 className="font-semibold text-gray-900 text-base">Naše specializacije:</h4>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm">
            Dokumentarna fotografija
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm">
            Športna fotografija
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm">
            Korporativna fotografija
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm">
            Kulturni dogodki
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default OurStory;
