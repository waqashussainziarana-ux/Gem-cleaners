
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Facebook } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.tsx';

const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  const whatsappUrl = "https://wa.me/447756961307";

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white uppercase tracking-tight">Gem<span className="text-blue-500">Cleaners</span></span>
            </Link>
            <p className="text-slate-400 leading-relaxed font-medium">
              Your Trusted Partner in Professional Cleaning Services. We bring a fresh, clean look to your space, ensuring every corner shines with perfection.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://fb.com/gemcleaners" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 p-2.5 rounded-xl hover:text-blue-500 hover:bg-slate-700 transition-all border border-slate-700"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2.5 rounded-xl hover:text-[#25D366] hover:bg-slate-700 transition-all border border-slate-700"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4 font-medium">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-500 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-6 font-medium">
              <li className="flex items-start space-x-3">
                <div className="bg-blue-600/10 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                </div>
                <span>35 Lansdowne Avenue,<br />Slough SL1 3SG, UK</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-blue-600/10 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                </div>
                <a href="tel:+447756961307" className="hover:text-blue-500 transition-colors">+44 7756961307</a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-green-600/10 p-2 rounded-lg">
                  <WhatsAppIcon className="w-5 h-5 text-green-500 shrink-0" />
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">WhatsApp Chat</a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-blue-600/10 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                </div>
                <a href="mailto:info@gemcleaners.co.uk" className="hover:text-blue-500 transition-colors text-sm truncate">info@gemcleaners.co.uk</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Newsletter</h3>
            <p className="text-slate-400 mb-6 font-medium">Subscribe for cleaning tips and special offers directly to your inbox.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-600/10 uppercase tracking-widest text-xs"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800/50 text-center text-slate-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} Gem Cleaners. All rights reserved. Professional Cleaning Services in Slough.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
