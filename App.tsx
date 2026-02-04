
import React, { createContext, useContext, useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sparkles, Menu, X, Phone, Lock, Clock } from 'lucide-react';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Gallery from './pages/Gallery.tsx';
import Contact from './pages/Contact.tsx';
import Footer from './components/Footer.tsx';
import QuoteModal from './components/QuoteModal.tsx';

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

const OnHoldOverlay: React.FC = () => (
  <div className="fixed inset-0 z-[9999] bg-slate-900/90 backdrop-blur-xl flex items-center justify-center p-6 text-center">
    <div className="max-w-md w-full bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-white/20 animate-in zoom-in duration-500">
      <div className="bg-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-500/40 relative">
        <Clock className="w-10 h-10 text-white animate-pulse" />
        <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 animate-ping"></div>
      </div>
      <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4 italic">
        Gem <span className="text-blue-600">Cleaners</span>
      </h1>
      <div className="h-1 w-12 bg-blue-600 mx-auto mb-6 rounded-full"></div>
      <h2 className="text-xl font-bold text-slate-800 mb-4">Project Temporarily on Hold</h2>
      <p className="text-slate-500 font-medium leading-relaxed mb-8">
        We are currently updating our systems to serve you better. This project is on hold as per request and will be live again shortly.
      </p>
      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
          <Lock className="w-3 h-3" /> Status: Secure & Restricted
        </p>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Set this to true to put the project on hold
  const isProjectOnHold = true;

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <ModalContext.Provider value={{ openQuoteModal }}>
      <Router>
        <div className={`min-h-screen bg-white flex flex-col font-sans ${isProjectOnHold ? 'overflow-hidden' : ''}`}>
          
          {isProjectOnHold && <OnHoldOverlay />}

          <div className={isProjectOnHold ? 'blur-sm pointer-events-none' : ''}>
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
                    <button
                      onClick={openQuoteModal}
                      className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                    >
                      Free Quote
                    </button>
                  </div>

                  {/* Mobile Actions */}
                  <div className="md:hidden flex items-center space-x-2">
                    <a href="tel:+447756961307" className="p-2 text-blue-600 bg-blue-50 rounded-full">
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
                    <div className="pt-4">
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
          </div>
          
          {/* Quote Request Modal */}
          <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
        </div>
      </Router>
    </ModalContext.Provider>
  );
};

export default App;
