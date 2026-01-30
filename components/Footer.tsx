
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">Gem Cleaners</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Your Trusted Partner in Professional Cleaning Services. We bring a fresh, clean look to your space, ensuring every corner shines.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-500 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>35 Lansdowne Avenue,<br />Slough SL1 3SG, UK</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:+447756961307" className="hover:text-blue-500 transition-colors">+44 7756961307</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:info@gemcleaners.co.uk" className="hover:text-blue-500 transition-colors">info@gemcleaners.co.uk</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-slate-400 mb-4">Subscribe for cleaning tips and special offers.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Gem Cleaners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
