import React from 'react';
import Card from '../ui/Card';

const PortfolioGrid: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Poroka Ana & Marko',
      category: 'Poroke',
      image: '/placeholder-wedding.jpg'
    },
    {
      id: 2,
      title: 'Poslovni portret',
      category: 'Poslovno',
      image: '/placeholder-corporate.jpg'
    },
    {
      id: 3,
      title: 'Družinski portret',
      category: 'Družina',
      image: '/placeholder-family.jpg'
    },
    {
      id: 4,
      title: 'Dogodki',
      category: 'Dogodki',
      image: '/placeholder-event.jpg'
    },
    {
      id: 5,
      title: 'Narava in krajina',
      category: 'Narava',
      image: '/placeholder-nature.jpg'
    },
    {
      id: 6,
      title: 'Modno fotografiranje',
      category: 'Moda',
      image: '/placeholder-fashion.jpg'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Naš portfelj
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oglejte si primere našega dela in ugotovite, zakaj nas stranke izberejo 
            za svoje najpomembnejše trenutke.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden" hover>
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center mb-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-xs">Nadomestna slika</p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Oglejte si celoten portfelj
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
