
import React, { createContext, useContext, useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sparkles, Menu, X, Phone } from 'lucide-react';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Gallery from './pages/Gallery.tsx';
import Contact from './pages/Contact.tsx';
import Footer from './components/Footer.tsx';
import QuoteModal from './components/QuoteModal.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import WhatsAppIcon from './components/WhatsAppIcon.tsx';

// Define the modal context type for global quote modal management
interface ModalContextType {
  openQuoteModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

/**
 * useModal hook to allow child components to trigger the quote modal.
 */
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  const whatsappUrl = "https://wa.me/447756961307";

  return (
    <ModalContext.Provider value={{ openQuoteModal }}>
      <Router>
        <div className="min-h-screen bg-white flex flex-col font-sans">
          {/* Header & Sticky Navigation */}
          <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-20 items-center">
                {/* Brand Logo */}
                <Link to="/" className="flex items-center space-x-2 group">
                  <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-black text-slate-900 tracking-tight uppercase">
                    Gem<span className="text-blue-600">Cleaners</span>
                  </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                  <Link to="/" className="text-slate-600 hover:text-blue-600 font-bold transition-colors text-sm uppercase tracking-wider">Home</Link>
                  <Link to="/about" className="text-slate-600 hover:text-blue-600 font-bold transition-colors text-sm uppercase tracking-wider">About</Link>
                  <Link to="/services" className="text-slate-600 hover:text-blue-600 font-bold transition-colors text-sm uppercase tracking-wider">Services</Link>
                  <Link to="/gallery" className="text-slate-600 hover:text-blue-600 font-bold transition-colors text-sm uppercase tracking-wider">Gallery</Link>
                  <Link to="/contact" className="text-slate-600 hover:text-blue-600 font-bold transition-colors text-sm uppercase tracking-wider">Contact</Link>
                  <div className="flex items-center space-x-4">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#25D366] hover:text-[#128C7E] transition-colors font-bold">
                      <WhatsAppIcon className="w-5 h-5" />
                      <span className="text-sm">WhatsApp</span>
                    </a>
                    <button
                      onClick={openQuoteModal}
                      className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                    >
                      Free Quote
                    </button>
                  </div>
                </div>

                {/* Mobile Actions */}
                <div className="md:hidden flex items-center space-x-2">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 text-white bg-[#25D366] rounded-full">
                    <WhatsAppIcon className="w-5 h-5" />
                  </a>
                  <a href="tel:+447756961307" className="p-2.5 text-blue-600 bg-blue-50 rounded-full">
                    <Phone className="w-5 h-5" />
                  </a>
                  <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-slate-900 bg-slate-50 rounded-full"
                  >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isMobileMenuOpen && (
              <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-2xl animate-in slide-in-from-top duration-300">
                <div className="px-4 py-6 space-y-2">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-slate-900 font-bold text-lg hover:bg-slate-50 rounded-xl transition-colors">Home</Link>
                  <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-slate-900 font-bold text-lg hover:bg-slate-50 rounded-xl transition-colors">About</Link>
                  <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-slate-900 font-bold text-lg hover:bg-slate-50 rounded-xl transition-colors">Services</Link>
                  <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-slate-900 font-bold text-lg hover:bg-slate-50 rounded-xl transition-colors">Gallery</Link>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-slate-900 font-bold text-lg hover:bg-slate-50 rounded-xl transition-colors">Contact</Link>
                  <div className="pt-4 space-y-3">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center space-x-2 bg-[#25D366] text-white px-6 py-5 rounded-2xl font-black text-lg shadow-xl shadow-green-500/10">
                      <WhatsAppIcon className="w-6 h-6" />
                      <span>WhatsApp Chat</span>
                    </a>
                    <button
                      onClick={() => { openQuoteModal(); setIsMobileMenuOpen(false); }}
                      className="w-full bg-blue-600 text-white px-6 py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-600/20"
                    >
                      Get Your Free Quote
                    </button>
                  </div>
                </div>
              </div>
            )}
          </nav>

          {/* Main Content Area */}
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
          
          {/* Floating WhatsApp Button */}
          <WhatsAppButton />
          
          {/* Quote Request Modal */}
          <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
        </div>
      </Router>
    </ModalContext.Provider>
  );
};

export default App;
