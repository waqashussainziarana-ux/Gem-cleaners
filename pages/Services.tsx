
import React from 'react';
import { SERVICES, LOCATIONS } from '../constants.tsx';
import { ArrowRight, CheckCircle2, Zap, Heart, MapPin, Search, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../App.tsx';

const Services: React.FC = () => {
  const { openQuoteModal } = useModal();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white pt-48 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-600/5 blur-[160px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full mb-10 backdrop-blur-md">
             <Zap className="w-4 h-4 text-blue-400 fill-current" />
             <span className="text-white text-[11px] font-black uppercase tracking-[0.3em]">The Premium Service List</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.9] italic">Cleaning Excellence.</h1>
          <p className="text-2xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Surgical-grade cleaning standards for Berkshire's most demanding homes and businesses.
          </p>
        </div>
      </section>

      {/* STYLIZED BLOCK SERVICES GRID */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SERVICES.map((s) => (
              <div 
                key={s.id} 
                className="group relative flex flex-col justify-between p-10 md:p-14 bg-blue-600 rounded-[3rem] overflow-hidden shadow-xl min-h-[400px]"
              >
                {/* Large Background Icon Style */}
                <div className="absolute left-6 bottom-0 text-white/10 group-hover:text-white/20 transition-all duration-500 transform group-hover:-translate-y-4">
                  {React.cloneElement(s.icon as React.ReactElement, { 
                    className: "w-64 h-64 md:w-80 md:h-80 stroke-[1.5]" 
                  })}
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-right">
                  <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none tracking-tighter mb-6 drop-shadow-md">
                    {s.title.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h2>
                  <p className="text-blue-100/90 text-lg font-bold leading-relaxed max-w-[70%] ml-auto mb-10">
                    {s.description}
                  </p>
                  <button 
                    onClick={openQuoteModal}
                    className="inline-flex items-center space-x-4 bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-slate-50 transition-all shadow-xl active:scale-95"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Service Areas (SEO Reinforcement) */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[5rem] p-16 md:p-24 border border-white/5 flex flex-col lg:flex-row gap-20 items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
            
            <div className="lg:w-2/5 relative z-10 text-center lg:text-left">
              <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-6 block">Our Hub</span>
              <h3 className="text-5xl font-black text-white tracking-tighter mb-10 leading-none italic">Local Focus.<br />Premier Results.</h3>
              <p className="text-slate-400 font-medium mb-12 text-lg leading-relaxed">Our logistics network ensures consistent coverage across the Slough borough and the wider Thames Valley region. Same-day quotes often available.</p>
              
              <div className="inline-flex items-center space-x-5 p-8 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
                <MapPin className="w-10 h-10 text-blue-400" />
                <div className="text-left">
                  <div className="text-white font-black text-lg">Central Berkshire Hub</div>
                  <div className="text-slate-500 text-xs font-black uppercase tracking-widest">Postcodes SL1, SL2, SL3 & Beyond</div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-10 w-full relative z-10">
              {LOCATIONS.map((loc, idx) => (
                <div key={idx} className="bg-white/5 p-12 rounded-[3.5rem] border border-white/5 hover:bg-white/10 transition-all duration-700 group">
                  <h4 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-[2] transition-transform"></div>
                    {loc.region}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {loc.areas.map((area, aidx) => (
                      <span key={aidx} className="px-5 py-2.5 bg-slate-800 text-slate-300 text-[11px] font-black uppercase tracking-widest rounded-xl border border-white/5 hover:bg-blue-600 hover:text-white transition-all cursor-default">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards Summary */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { title: 'The Guarantee', text: 'If you are not 100% satisfied, we return to rectify it within 24 hours at no additional cost.', icon: <Heart className="text-red-500" /> },
              { title: 'The Equipment', text: 'We utilise HEPA-filter vacuums and hospital-grade sanitisation to ensure the highest air quality.', icon: <Zap className="text-blue-500" /> },
              { title: 'The Team', text: 'All cleaning partners are reference-checked, DBS-cleared, and local to the Slough area.', icon: <ShieldCheck className="text-green-500" /> }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-14 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 group text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-10 mx-auto shadow-sm group-hover:scale-110 transition-transform">
                  <div className="scale-[1.8]">{item.icon}</div>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-6 tracking-tight uppercase">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-40 bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-6xl md:text-9xl font-black text-white mb-12 tracking-tighter leading-none italic uppercase">Let's Refresh.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <button 
              onClick={openQuoteModal}
              className="bg-slate-900 text-white px-16 py-7 rounded-[2rem] font-black text-2xl hover:bg-slate-800 transition-all shadow-2xl"
            >
              Get Free Quote
            </button>
            <a 
              href="tel:+447756961307"
              className="bg-white text-blue-600 px-16 py-7 rounded-[2rem] font-black text-2xl hover:bg-slate-50 transition-all shadow-2xl"
            >
              Call an Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
