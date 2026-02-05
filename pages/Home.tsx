
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Star, Quote, CheckCircle2, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SERVICES, WHY_CHOOSE_US, TESTIMONIALS } from '../constants.tsx';
import { useModal } from '../App.tsx';

const Home: React.FC = () => {
  const { openQuoteModal } = useModal();

  const steps = [
    { title: 'Book Online', description: 'Fill out our quick quote form or chat via WhatsApp.', icon: <Clock className="w-6 h-6" /> },
    { title: 'Get a Plan', description: 'We tailor a cleaning schedule that fits your lifestyle.', icon: <CheckCircle2 className="w-6 h-6" /> },
    { title: 'Relax & Enjoy', description: 'Our professionals handle the rest while you enjoy your space.', icon: <Sparkles className="w-6 h-6" /> }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-24 pb-32 md:pt-40 md:pb-52">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1920" 
            alt="Cleaning Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-blue-600/30 border border-blue-500/40 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">Slough's Trusted Experts</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              Welcome to <span className="text-blue-600">Gem Cleaners</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
              Professional cleaning that brings a fresh look to your home or business. From deep cleans to commercial maintenance, we make your space shine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openQuoteModal}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center justify-center space-x-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold text-lg text-center transition-all border border-white/20"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-24 bg-white relative -mt-20 rounded-t-[4rem] z-10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Premium Services</h2>
              <p className="text-slate-500 text-lg max-w-xl font-medium">Specialized cleaning solutions tailored to your unique environment.</p>
            </div>
            <Link to="/services" className="text-blue-600 font-bold flex items-center space-x-2 hover:translate-x-1 transition-transform group">
              <span>See all services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map((service) => (
              <div key={service.id} className="group bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-500">
                <div className="mb-8 p-4 bg-white rounded-2xl inline-block shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">{service.description.substring(0, 80)}...</p>
                <Link to="/services" className="inline-flex items-center text-blue-600 font-bold space-x-2">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Simple 3-Step Process</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Getting your space cleaned shouldn't be complicated. We keep it straightforward and professional.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="text-center relative group">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-500 font-medium">{step.description}</p>
                {i < 2 && <ArrowRight className="hidden md:block absolute top-10 -right-6 w-8 h-8 text-slate-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800&h=1000" alt="Professional Cleaner" className="w-full h-auto" />
                <div className="absolute inset-0 bg-blue-600/10"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2rem] shadow-2xl border border-slate-100 hidden md:block animate-bounce-slow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex -space-x-3">
                    {[
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100',
                      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100',
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
                    ].map((url, i) => (
                      <img key={i} src={url} alt="Customer" className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover" />
                    ))}
                  </div>
                  <div className="font-extrabold text-slate-900 text-lg">50+ Reviews</div>
                </div>
                <div className="flex text-yellow-400 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 leading-tight">Why Choose Gem Cleaners?</h2>
              <div className="space-y-10">
                {WHY_CHOOSE_US.map((item, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="mt-1 bg-blue-100 text-blue-600 p-3.5 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-14">
                <button
                  onClick={openQuoteModal}
                  className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-1 transition-all"
                >
                  Get Your Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Area */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 border border-slate-100 flex flex-col md:flex-row items-center gap-12 shadow-sm">
            <div className="flex-1">
              <div className="flex items-center space-x-2 text-blue-600 mb-4">
                <MapPin className="w-6 h-6" />
                <span className="font-bold uppercase tracking-wider text-sm">Service Area</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Serving Slough & Surrounding Areas</h2>
              <p className="text-slate-500 mb-8 font-medium">We are proud to serve Slough and neighboring communities with premium cleaning services. Not sure if we cover your area? Just ask!</p>
              <div className="grid grid-cols-2 gap-4">
                {['Slough Central', 'Windsor', 'Maidenhead', 'Burnham', 'Langley', 'Cippenham'].map((area) => (
                  <div key={area} className="flex items-center space-x-2 text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    <span className="font-semibold">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full h-64 md:h-auto rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5042845662283!2d-0.6133292233816766!3d51.50397577181154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766465f24f0c77%3A0xc39281a17586591!2s35%20Lansdowne%20Ave%2C%20Slough%20SL1%203SG%2C%20UK!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Gem Cleaners Area"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Our Clients Say</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-50 p-10 rounded-[3rem] relative border border-slate-100 hover:shadow-xl transition-all duration-500">
                <Quote className="absolute top-8 right-10 w-12 h-12 text-blue-600/10" />
                <div className="flex text-yellow-400 mb-6 gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 text-lg italic leading-relaxed mb-8">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">Ready for a <span className="text-blue-600">Brighter</span> Space?</h2>
          <p className="text-xl text-slate-400 mb-12 font-medium max-w-2xl mx-auto">
            Experience the difference with Slough's premier cleaning specialists. We're ready when you are.
          </p>
          <button
            onClick={openQuoteModal}
            className="inline-block bg-blue-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/30 active:scale-95"
          >
            Request Your Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
