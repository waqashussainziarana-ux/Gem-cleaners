
import React from 'react';
import { Users, Star, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Team Members', value: '10+', icon: <Users className="w-6 h-6" /> },
    { label: 'Customer Reviews', value: '50+', icon: <Star className="w-6 h-6" /> },
    { label: 'Years Experience', value: '5+', icon: <Award className="w-6 h-6" /> },
    { label: 'Project Completed', value: '500+', icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            We are dedicated to providing the best cleaning services and ensuring every customer is happy with the results.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform origin-top-right"></div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Our Professional Team" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <span className="block text-4xl font-bold mb-1">5+</span>
                <span className="text-blue-100 font-medium uppercase tracking-wider">Years of Excellence</span>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Refresh Your Space with Professional Cleaners
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Gem Cleaners understands the importance of a clean environment. Our team uses modern equipment and eco-friendly solutions to make your space fresh, sanitized, and sparkling.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether it is your home or a commercial building, we believe that a clean space leads to a healthier and happier life. We treat every property with the utmost care, as if it were our own.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment</h2>
            <p className="text-xl text-slate-600 mb-12">
              Our dedication to quality and professional integrity is what sets us apart. We don't just clean; we transform spaces to ensure safety, hygiene, and comfort.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Quality</h3>
                <p className="text-slate-600">Premium service using industry-leading tools and techniques.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Reliability</h3>
                <p className="text-slate-600">Consistent results and punctual professional teams you can trust.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Eco-Friendly</h3>
                <p className="text-slate-600">Safe, non-toxic cleaning products for your pets and family.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
