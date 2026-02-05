
import React, { createContext, useContext, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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
import BackToTop from './components/BackToTop.tsx';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

interface ModalContextType {
  openQuoteModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  const whatsappUrl = "https://wa.me/447756961307";

  return (
    <ModalContext.Provider value={{ openQuoteModal }}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white flex flex-col font-sans">
          {/* High-End Header */}
          <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-xl shadow-slate-900/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2 group">
                  <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-[15deg] transition-transform duration-500">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-2xl font-black tracking-tighter uppercase transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                    Gem<span className="text-blue-600">Cleaners</span>
                  </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-10">
                  <div className="flex items-center space-x-8">
                    {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                      <Link 
                        key={item} 
                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                        className={`font-black text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-blue-600 ${isScrolled ? 'text-slate-600' : 'text-slate-300 hover:text-white'}`}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                  <div className="h-6 w-px bg-slate-200/20"></div>
                  <div className="flex items-center space-x-6">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[#25D366] hover:scale-105 transition-transform font-black text-xs uppercase tracking-widest">
                      <WhatsAppIcon className="w-5 h-5" />
                      <span>Support</span>
                    </a>
                    <button
                      onClick={openQuoteModal}
                      className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 active:scale-95"
                    >
                      Instant Quote
                    </button>
                  </div>
                </div>

                {/* Mobile Actions */}
                <div className="lg:hidden flex items-center space-x-3">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="p-3 text-white bg-[#25D366] rounded-xl shadow-lg shadow-green-500/20">
                    <WhatsAppIcon className="w-5 h-5" />
                  </a>
                  <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`p-3 rounded-xl transition-colors ${isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white'}`}
                  >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-slate-900 border-t border-white/5 absolute w-full left-0 shadow-2xl animate-in slide-in-from-top duration-300 h-screen overflow-y-auto">
                <div className="px-6 py-10 space-y-6">
                  {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                    <Link 
                      key={item}
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="block text-4xl font-black text-white tracking-tighter hover:text-blue-600 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                  
                  <div className="pt-12 space-y-4">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center space-x-3 bg-[#25D366] text-white px-8 py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-green-600/20 italic">
                      <WhatsAppIcon className="w-6 h-6" />
                      <span>WhatsApp Support</span>
                    </a>
                    <button
                      onClick={() => { openQuoteModal(); setIsMobileMenuOpen(false); }}
                      className="w-full bg-blue-600 text-white px-8 py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-blue-600/30 italic"
                    >
                      Free Quote Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </nav>

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
        </div>
      </Router>
    </ModalContext.Provider>
  );
};

export default App;
