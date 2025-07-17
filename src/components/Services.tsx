import React from 'react';
import { Settings, Search, Truck, Shield, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Part Identification",
      description: "Not sure what part you need? Our experts will help identify the right component for your vehicle."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Installation Service",
      description: "Professional installation by certified mechanics to ensure proper fitting and performance."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Same-day delivery within the city and express shipping nationwide for urgent repairs."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Warranty Support",
      description: "Comprehensive warranty on all parts with hassle-free replacement and support."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Emergency Service",
      description: "24/7 emergency parts supply for breakdown situations and urgent repairs."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Trade Accounts",
      description: "Special pricing and credit terms for garages, mechanics, and fleet operators."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond just selling parts, we provide comprehensive automotive solutions 
            to keep your vehicles running smoothly and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mt-16 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need Expert Advice?</h3>
          <p className="text-xl mb-6 text-blue-100">
            Our experienced team is here to help you find the right parts and solutions for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
              Call Now: 0776024572
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;