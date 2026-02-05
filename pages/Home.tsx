
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Star, Quote, CheckCircle2, MapPin, Phone, ShieldCheck, Zap, Mail } from 'lucide-react';
import { SERVICES, WHY_CHOOSE_US, TESTIMONIALS, LOCATIONS, TRUST_INDICATORS } from '../constants.tsx';
import { useModal } from '../App.tsx';

const Home: React.FC = () => {
  const { openQuoteModal } = useModal();

  return (
    <div className="overflow-x-hidden">
      {/* Premium Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-slate-900 pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1920" 
            alt="Premium Home Interior" 
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-blue-600/30 border border-blue-500/40 px-5 py-2.5 rounded-full mb-8 backdrop-blur-xl">
              <div className="flex -space-x-1 mr-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-blue-100 text-[11px] font-black uppercase tracking-[0.25em]">Local Expertise in Slough & Berkshire</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] mb-10 tracking-tighter">
              Exceptional Clean.<br />
              <span className="text-blue-600">No Compromise.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-14 max-w-2xl font-medium leading-relaxed">
              Premium residential and commercial cleaning specialists serving Slough, Windsor, and the surrounding areas. Fully insured, vetted, and perfectionist.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={openQuoteModal}
                className="group relative bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-600/30 active:scale-95 flex items-center justify-center space-x-4"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <a
                href="tel:+447756961307"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-12 py-6 rounded-2xl font-black text-xl text-center transition-all border border-white/10 flex items-center justify-center space-x-4"
              >
                <Phone className="w-6 h-6 text-blue-400" />
                <span>Call Us Today</span>
              </a>
            </div>

            {/* Trust Bar */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-12">
              {TRUST_INDICATORS.map((t, idx) => (
                <div key={idx} className="flex items-center space-x-4 group">
                  <div className="bg-blue-600/20 p-3 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    {t.icon}
                  </div>
                  <div>
                    <div className="text-white font-black text-sm leading-none mb-1 tracking-tight">{t.label}</div>
                    <div className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em]">{t.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RECREATED SERVICES SECTION (STYLIZED BLOCK VERSION) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-4">Our Services</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SERVICES.map((s) => (
              <Link 
                key={s.id} 
                to="/services" 
                className="group relative flex items-center h-64 md:h-72 bg-blue-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-2 active:scale-[0.98]"
              >
                {/* Large Background Icon Style */}
                <div className="absolute left-6 bottom-0 text-white/20 group-hover:text-white/30 transition-all duration-500 transform group-hover:-translate-y-4">
                  {React.cloneElement(s.icon as React.ReactElement, { 
                    className: "w-48 h-48 md:w-56 md:h-56 stroke-[1.5]" 
                  })}
                </div>
                
                {/* Text Content Area */}
                <div className="relative z-10 w-full flex flex-col items-end justify-center px-8 md:px-12 text-right">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-none tracking-tighter break-words max-w-[80%] drop-shadow-lg">
                    {s.title.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>
                </div>
                
                {/* Subtle Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section (SEO + Local Focus) */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <span className="text-blue-600 font-black text-sm uppercase tracking-[0.4em] mb-6 block">Our Reach</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8">Coverage in Slough & Berkshire</h2>
            <p className="text-slate-500 text-xl font-medium max-w-3xl mx-auto">We provide rapid-response cleaning teams across Slough and all neighboring Berkshire areas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {LOCATIONS.map((loc, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[4rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-blue-200 transition-all duration-500 group">
                <div className="flex items-center space-x-5 mb-10">
                  <div className="bg-blue-50 p-4 rounded-3xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter leading-none">{loc.region}</h3>
                </div>
                <div className="space-y-4">
                  {loc.areas.map((area, aidx) => (
                    <div key={aidx} className="flex items-center justify-between text-slate-600 font-bold group/item py-2 border-b border-slate-50 last:border-0">
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="group-hover/item:text-blue-600 transition-colors">{area}</span>
                      </div>
                      <span className="text-[10px] uppercase text-slate-300 font-black tracking-widest opacity-0 group-hover/item:opacity-100 transition-opacity">Local</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 flex flex-col items-center bg-slate-900 rounded-[4rem] p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-8 tracking-tighter">Unsure if we cover your postcode?</h3>
              <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg font-medium">For larger commercial contracts or specialist restoration projects, our teams often travel further across the South East.</p>
              <button onClick={openQuoteModal} className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/30">
                Check Availability Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reputation Section */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <div className="rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] relative z-10 group">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800&h=1000" alt="Professional Cleaner Equipment" className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply group-hover:bg-transparent transition-colors"></div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-16 -left-16 bg-white p-14 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(37,99,235,0.15)] border border-slate-100 z-20 hidden lg:block hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=${i+100}`} alt="Client" className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm" />
                    ))}
                  </div>
                  <div className="font-black text-slate-900 text-xl leading-none">
                    1,200+ <br />
                    <span className="text-slate-400 text-xs uppercase tracking-widest font-black">Happy Clients</span>
                  </div>
                </div>
                <div className="flex text-yellow-400 gap-1.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                </div>
                <div className="text-slate-400 font-black text-[11px] uppercase tracking-[0.3em]">Top Rated Berkshire Agency</div>
              </div>
            </div>

            <div className="pt-20 lg:pt-0">
              <span className="text-blue-600 font-black text-sm uppercase tracking-[0.4em] mb-6 block">Our Distinction</span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-12 leading-none italic">The surgical standard of clean.</h2>
              <div className="space-y-14">
                {WHY_CHOOSE_US.map((item, index) => (
                  <div key={index} className="flex items-start space-x-10 group">
                    <div className="mt-1 bg-slate-900 text-white p-5 rounded-3xl group-hover:bg-blue-600 transition-all duration-500 shadow-xl group-hover:shadow-blue-600/20 group-hover:-translate-y-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed text-lg">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-20">
                <button onClick={openQuoteModal} className="flex items-center space-x-4 text-blue-600 font-black uppercase text-sm tracking-[0.3em] group">
                   <span>Start Your Refresh Today</span>
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Focused CTA */}
      <section className="py-40 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600 rounded-full blur-[160px] opacity-10"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500 rounded-full blur-[160px] opacity-10"></div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-none italic">Experience Perfection.</h2>
          <p className="text-2xl text-slate-400 mb-16 font-medium max-w-3xl mx-auto leading-relaxed">
            Don't settle for "okay". Get the clean that transforms your environment. We're ready when you are.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <button
              onClick={openQuoteModal}
              className="w-full md:w-auto bg-blue-600 text-white px-16 py-7 rounded-[2rem] font-black text-2xl hover:bg-blue-700 transition-all shadow-[0_30px_60px_-10px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Get My Free Quote
            </button>
            <a
              href="tel:+447756961307"
              className="w-full md:w-auto flex items-center justify-center space-x-4 text-white hover:text-blue-400 transition-colors font-black text-xl uppercase tracking-widest"
            >
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <Phone className="w-6 h-6" />
              </div>
              <span>Speak to an expert</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
