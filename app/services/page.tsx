import ServiceCards from '../../src/components/sections/ServiceCards';

export default function Services() {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Naše Usluge
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nudimo kompletnu paletu fotografskih usluga prilagođenih vašim potrebama. 
            Od intimnih portreta do velikih događaja, tu smo da uhvatimo svaki važan trenutak.
          </p>
        </div>
      </div>
      <ServiceCards />
    </div>
  );
}
