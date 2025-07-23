import PortfolioGrid from '../../src/components/sections/PortfolioGrid';

export default function Portfolio() {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Naš Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Istražite našu kolekciju fotografija iz različitih događaja i sesija. 
            Svaka fotografija priča svoju priču i predstavlja trenutak koji traje zauvek.
          </p>
        </div>
      </div>
      <PortfolioGrid />
    </div>
  );
}