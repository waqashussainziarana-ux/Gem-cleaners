
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2, Navigation } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon.tsx';
import { SERVICE_RADIUS, COUNTIES_COVERED } from '../constants.tsx';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      alert('Your message has been sent. We will get back to you shortly!');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappUrl = "https://wa.me/447756961307";

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white pt-48 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-600/5 blur-[160px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">Get a Quote</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Ready to refresh your space? Contact us today for a free, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-10 tracking-tight uppercase">Contact Details</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-5 group">
                    <div className="bg-white p-5 rounded-2xl shadow-md text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 mb-1 uppercase text-sm tracking-widest">Office Location</h3>
                      <p className="text-slate-600 font-bold">90 Bath Rd, Slough SL1 3SY, United Kingdom</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-5 group">
                    <div className="bg-white p-5 rounded-2xl shadow-md text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 mb-1 uppercase text-sm tracking-widest">Phone Number</h3>
                      <a href="tel:+447756961307" className="text-slate-600 font-bold hover:text-blue-600 text-xl tracking-tight">+44 7756961307</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 group">
                    <div className="bg-white p-5 rounded-2xl shadow-md text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                      <WhatsAppIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 mb-1 uppercase text-sm tracking-widest">WhatsApp Chat</h3>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 font-bold hover:text-[#25D366]">Fastest Response Guaranteed</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 group">
                    <div className="bg-white p-5 rounded-2xl shadow-md text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 mb-1 uppercase text-sm tracking-widest">Email Support</h3>
                      <a href="mailto:info@gemcleaners.co.uk" className="text-slate-600 font-bold hover:text-blue-600">info@gemcleaners.co.uk</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Card */}
              <div className="bg-slate-900 p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Navigation className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-10">
                    <div className="bg-blue-600 p-3 rounded-xl">
                      <Navigation className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">Service Radius</h3>
                  </div>
                  <div className="mb-10">
                     <div className="text-5xl font-black text-blue-500 mb-2 italic">{SERVICE_RADIUS}</div>
                     <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Coverage from our Slough Base</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-slate-500 font-black uppercase text-[10px] tracking-widest">Primary Counties Covered:</p>
                    <div className="flex flex-wrap gap-3">
                      {COUNTIES_COVERED.map((county) => (
                        <div key={county} className="flex items-center space-x-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl">
                          <CheckCircle2 className="w-4 h-4 text-blue-500" />
                          <span className="font-bold text-sm tracking-tight">{county}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#25D366] p-10 rounded-[3rem] text-white relative overflow-hidden group shadow-lg shadow-green-500/10">
                <WhatsAppIcon className="absolute top-4 right-4 w-20 h-20 text-white opacity-20 group-hover:scale-125 transition-transform duration-500" />
                <h3 className="text-3xl font-black mb-6 tracking-tight uppercase italic">Instant Support</h3>
                <p className="text-white/90 font-bold leading-relaxed mb-8 text-lg">
                  Need a quick answer or want to send photos of the space you need cleaned? Message us directly.
                </p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#25D366] font-black px-10 py-5 rounded-2xl hover:bg-slate-50 transition-all shadow-xl active:scale-95 uppercase tracking-widest text-sm">
                  Message Us Now
                </a>
              </div>
            </div>

            {/* Quote Form */}
            <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col">
              <h2 className="text-4xl font-black text-slate-900 mb-10 tracking-tighter uppercase italic">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-8 flex-grow">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Request Details</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What can we clean for you today?"
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-all font-bold resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full flex items-center justify-center space-x-3 bg-blue-600 text-white font-black py-6 rounded-[2rem] transition-all shadow-[0_30px_60px_-10px_rgba(37,99,235,0.3)] active:scale-95 text-xl uppercase tracking-widest italic ${
                    submitted ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
                >
                  {submitted ? (
                    <span>Sending Request...</span>
                  ) : (
                    <>
                      <span>Get Instant Response</span>
                      <Send className="w-6 h-6" />
                    </>
                  )}
                </button>
              </form>
              <div className="mt-12 p-8 bg-blue-50 rounded-3xl flex items-center space-x-6">
                 <ShieldCheck className="w-12 h-12 text-blue-600 shrink-0" />
                 <p className="text-blue-900 font-bold text-sm leading-relaxed">
                   Your privacy matters. We never share your data. All inquiries are handled by our local Slough management team.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed - GEM CLEANERS 90 Bath Rd, Slough */}
      <section className="h-[500px] w-full relative overflow-hidden border-t border-slate-200">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur-md px-10 py-5 rounded-[2rem] shadow-2xl border border-slate-100 flex items-center space-x-4 pointer-events-none">
           <MapPin className="w-8 h-8 text-blue-600" />
           <div className="text-left">
              <div className="text-slate-900 font-black text-xl uppercase tracking-tighter">Gem<span className="text-blue-600">Cleaners</span> Headquarters</div>
              <div className="text-slate-500 font-bold text-xs uppercase tracking-widest">90 Bath Rd, Slough SL1 3SY</div>
           </div>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.743285601234!2d-0.6124564!3d51.5123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766465f24f0c77%3A0x2617a944358a9d1d!2s90%20Bath%20Rd%2C%20Slough%20SL1%203SY%2C%20UK!5e0!3m2!1sen!2suk!4v1715000000000!5m2!1sen!2suk" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Gem Cleaners Head Office Slough"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
