import React, { useState, createContext, useContext, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

// Pages
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Gallery from './pages/Gallery.tsx';
import Contact from './pages/Contact.tsx';

// Components
import Footer from './components/Footer.tsx';
import QuoteModal from './components/QuoteModal.tsx';

interface ModalContextType {
  openQuoteModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openQuoteModal } = useModal();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                Gem Cleaners
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'text-blue-600' 
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={openQuoteModal}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              Get a Quote
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-xl text-base font-bold ${
                  isActive(link.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                openQuoteModal();
              }}
              className="block w-full text-center mt-4 bg-blue-600 text-white px-3 py-4 rounded-xl font-bold"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalValue = {
    openQuoteModal: () => setIsModalOpen(true)
  };

  return (
    <ModalContext.Provider value={modalValue}>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
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
          <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </Router>
    </ModalContext.Provider>
  );
};

export default App;