
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon.tsx';

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
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get a Quote</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-5">
                    <div className="bg-white p-4 rounded-2xl shadow-md text-blue-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Our Location</h3>
                      <p className="text-slate-600">90 Bath Rd, Slough SL1 3SY, United Kingdom</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-5">
                    <div className="bg-white p-4 rounded-2xl shadow-md text-blue-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Phone Number</h3>
                      <a href="tel:+447756961307" className="text-slate-600 hover:text-blue-600">+44 7756961307</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="bg-white p-4 rounded-2xl shadow-md text-[#25D366]">
                      <WhatsAppIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">WhatsApp Chat</h3>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#25D366]">Available for instant messaging</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="bg-white p-4 rounded-2xl shadow-md text-blue-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Email Address</h3>
                      <a href="mailto:info@gemcleaners.co.uk" className="text-slate-600 hover:text-blue-600">info@gemcleaners.co.uk</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="bg-white p-4 rounded-2xl shadow-md text-blue-600">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Working Hours</h3>
                      <p className="text-slate-600">Mon - Sat: 8:00 AM - 6:00 PM</p>
                      <p className="text-slate-600">Sun: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Service Coverage</h3>
                </div>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                  {['Slough Central', 'Windsor', 'Maidenhead', 'Burnham', 'Langley', 'Cippenham', 'Stoke Poges', 'Gerrards Cross'].map((area) => (
                    <div key={area} className="flex items-center space-x-2 text-slate-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs text-slate-400 font-medium italic">Don't see your area? Contact us to see if we can help!</p>
              </div>

              <div className="bg-[#25D366] p-8 rounded-3xl text-white relative overflow-hidden group shadow-lg shadow-green-500/10">
                <WhatsAppIcon className="absolute top-4 right-4 w-12 h-12 text-white opacity-20 group-hover:scale-125 transition-transform duration-500" />
                <h3 className="text-2xl font-bold mb-4">Instant Support via WhatsApp</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Need a quick answer or want to send photos of the space you need cleaned? Message us directly on WhatsApp for the fastest response.
                </p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#25D366] font-bold px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors">
                  Open WhatsApp
                </a>
              </div>
            </div>

            {/* Quote Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 1234 567890"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message / Request Details</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the service you need..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full flex items-center justify-center space-x-2 bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 ${
                    submitted ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
                >
                  {submitted ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed - Updated to 90 Bath Rd, Slough */}
      <section className="h-96 w-full grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 overflow-hidden border-t border-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.743285601234!2d-0.6124564!3d51.5123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766465f24f0c77%3A0x6a6a6a6a6a6a6a6a!2s90%20Bath%20Rd%2C%20Slough%20SL1%203SY%2C%20UK!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Gem Cleaners Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
