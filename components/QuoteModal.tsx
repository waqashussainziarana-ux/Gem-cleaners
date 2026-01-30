
import React from 'react';
import { X, Send, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      alert('Thank you! Your quote request has been received.');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors bg-slate-100 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-10">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Request a Free Quote</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
              <input
                required
                type="text"
                placeholder="Enter your name"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</label>
                <input
                  required
                  type="email"
                  placeholder="email@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone</label>
                <input
                  required
                  type="tel"
                  placeholder="07xxx xxxxxx"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service Type</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all appearance-none">
                <option>Deep Cleaning</option>
                <option>End of Tenancy</option>
                <option>Commercial Cleaning</option>
                <option>After Builders</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
              <textarea
                rows={3}
                placeholder="Any specific requirements?"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {submitted ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Get My Free Quote</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
          <p className="mt-6 text-center text-xs text-slate-400">
            We'll get back to you within 24 hours. Guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
