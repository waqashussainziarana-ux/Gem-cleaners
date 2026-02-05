
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Facebook, ShieldCheck, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.tsx';
import { LOCATIONS } from '../constants.tsx';

const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/447756961307";

  return (
    <footer className="bg-slate-900 text-slate-300 pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand Col */}
          <div className="lg:col-span-1 space-y-10">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-blue-600 p-2.5 rounded-2xl group-hover:rotate-12 transition-transform duration-500">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-black text-white uppercase tracking-tighter">Gem<span className="text-blue-500">Cleaners</span></span>
            </Link>
            <p className="text-slate-500 font-medium leading-relaxed text-lg">
              The premium standard in residential and commercial cleaning across Berkshire and the South East. Vetted, insured, and perfectionist.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/5 p-4 rounded-2xl hover:bg-blue-600 hover:text-white transition-all border border-white/5"><Facebook className="w-5 h-5" /></a>
              <a href={whatsappUrl} className="bg-white/5 p-4 rounded-2xl hover:bg-[#25D366] hover:text-white transition-all border border-white/5"><WhatsAppIcon className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-10">Company</h4>
            <ul className="space-y-6 font-bold">
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Gem Cleaners</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-500 transition-colors">Project Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact & Support</Link></li>
            </ul>
          </div>

          {/* Service Areas Summary (Local Directory Style) */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-10">Local Coverage</h4>
            <div className="space-y-4">
              {LOCATIONS.map((loc, idx) => (
                <div key={idx} className="group">
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{loc.region}</div>
                  <div className="text-xs font-bold leading-relaxed">{loc.areas.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-10">Contact Us</h4>
            <ul className="space-y-8">
              <li className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-500 shrink-0" />
                <span className="text-sm font-bold leading-relaxed text-slate-400">35 Lansdowne Avenue,<br />Slough SL1 3SG, UK</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-500 shrink-0" />
                <a href="tel:+447756961307" className="text-lg font-black text-white hover:text-blue-500 transition-colors tracking-tight">+44 7756 961307</a>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-500 shrink-0" />
                <a href="mailto:info@gemcleaners.co.uk" className="text-sm font-bold text-slate-400 hover:text-blue-500 transition-colors">info@gemcleaners.co.uk</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-8 text-[11px] font-black uppercase tracking-widest text-slate-600">
             <div className="flex items-center space-x-2"><ShieldCheck className="w-4 h-4 text-green-500" /> <span>DBS Vetted Staff</span></div>
             <div className="flex items-center space-x-2"><ShieldCheck className="w-4 h-4 text-green-500" /> <span>Public Liability £5m</span></div>
          </div>
          <div className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-600">
            © {new Date().getFullYear()} Gem Cleaners Slough. Professional Cleaning Excellence.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
