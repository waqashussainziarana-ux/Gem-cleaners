
import React from 'react';
import { SERVICES } from '../constants.tsx';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Heart } from 'lucide-react';
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
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/50">
                    {service.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3 text-sm text-slate-500 font-medium">
                      <div className="bg-blue-50 p-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /></div>
                      <span>Industrial Strength Tools</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm text-slate-500 font-medium">
                      <div className="bg-blue-50 p-1 rounded-full"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /></div>
                      <span>Safe, Eco-Friendly Material</span>
                    </li>
                  </ul>
                  <Link 
                    to="/contact" 
                    className="w-full flex items-center justify-center space-x-2 bg-slate-50 hover:bg-blue-600 hover:text-white text-blue-600 py-4 rounded-2xl font-bold transition-all border border-slate-100 hover:border-blue-600"
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

      {/* Service Promise */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Insured & Certified</h4>
              <p className="text-slate-500">Full public liability insurance for your total peace of mind during every job.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Rapid Response</h4>
              <p className="text-slate-500">Emergencies happen. We offer priority booking for urgent cleaning needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">100% Satisfaction</h4>
              <p className="text-slate-500">If you're not happy with the result, we'll return to fix it at no extra cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Focus */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/20 blur-3xl rounded-full translate-x-1/2"></div>
            <div className="flex-1 z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Commercial Partnerships</h2>
              <p className="text-lg text-slate-400 mb-8 max-w-xl">
                We work closely with property managers, estate agents, and facility directors to provide scheduled maintenance and large-scale disinfection. Our specialized bio-misting and sterilization services are perfect for offices and healthcare facilities.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
              >
                Inquire for Business
              </Link>
            </div>
            <div className="flex-1 w-full z-10">
              <img 
                src="https://images.unsplash.com/photo-1497215789701-1b1262d3a015?auto=format&fit=crop&q=80&w=800" 
                alt="Commercial Office Cleaning" 
                className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 w-full object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
