import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Clock className="w-8 h-8" />, number: "25+", label: "Years Experience" },
    { icon: <Users className="w-8 h-8" />, number: "10,000+", label: "Happy Customers" },
    { icon: <Award className="w-8 h-8" />, number: "50,000+", label: "Parts in Stock" },
    { icon: <MapPin className="w-8 h-8" />, number: "3", label: "Locations" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Sunray Motors</h2>
            <p className="text-lg text-gray-600 mb-6">
              For over 25 years, Sunray Motors has been the trusted name in automotive spare parts. 
              What started as a small family business has grown into one of the region's leading 
              suppliers of genuine auto parts and accessories.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We pride ourselves on our extensive inventory, competitive prices, and exceptional 
              customer service. Our team of automotive experts is always ready to help you find 
              the right part for your vehicle, whether it's a common maintenance item or a 
              hard-to-find component.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                <span className="text-gray-700">Genuine OEM and aftermarket parts</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                <span className="text-gray-700">Expert technical support and advice</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                <span className="text-gray-700">Competitive pricing and bulk discounts</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-4"></div>
                <span className="text-gray-700">Fast delivery and installation services</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-blue-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose Sunray Motors?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Quality Assurance</h4>
              <p className="text-gray-600">All parts are sourced from reputable manufacturers and come with warranty protection.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Expert Team</h4>
              <p className="text-gray-600">Our knowledgeable staff has decades of combined experience in the automotive industry.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Fast Service</h4>
              <p className="text-gray-600">Quick turnaround times and efficient service to get you back on the road faster.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;