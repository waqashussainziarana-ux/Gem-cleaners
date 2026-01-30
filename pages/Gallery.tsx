import React from 'react';
import { GALLERY } from '../constants.tsx';

const Gallery: React.FC = () => {
  const [filter, setFilter] = React.useState('All');
  const categories = ['All', ...new Set(GALLERY.map(img => img.category))];

  const filteredImages = filter === 'All' 
    ? GALLERY 
    : GALLERY.filter(img => img.category === filter);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Service Gallery</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Take a look at the sparkling results we deliver for our clients every day.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((img) => (
              <div 
                key={img.id} 
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <span className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-1">{img.category}</span>
                  <h3 className="text-white font-bold text-xl">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Want results like these for your space?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Our expert team is ready to provide the same high level of quality for your home or business.
          </p>
          <a
            href="#/contact"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl"
          >
            Book Your Cleaning Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;