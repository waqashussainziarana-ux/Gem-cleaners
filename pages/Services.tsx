
import React from 'react';
import { SERVICES } from '../constants.tsx';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Cleaning Services</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From residential deep cleans to large-scale commercial disinfection, we offer comprehensive solutions for every need.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={(service as any).imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-2xl shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-2 text-sm text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span>Professional Grade Equipment</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span>Eco-Friendly Materials</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span>Trained & Insured Staff</span>
                    </li>
                  </ul>
                  <Link 
                    to="/contact" 
                    className="w-full flex items-center justify-center space-x-2 bg-slate-50 hover:bg-blue-600 hover:text-white text-blue-600 py-4 rounded-2xl font-bold transition-all"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/20 blur-3xl rounded-full translate-x-1/2"></div>
            <div className="flex-1 z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Commercial Partnerships</h2>
              <p className="text-lg text-slate-400 mb-8">
                We work closely with property managers, estate agents, and facility directors to provide scheduled maintenance and large-scale disinfection. Our specialized bio-misting and sterilization services are perfect for offices and healthcare facilities.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all"
              >
                Inquire for Business
              </Link>
            </div>
            <div className="flex-1 w-full z-10">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Commercial Office Cleaning" 
                className="rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 w-full object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
