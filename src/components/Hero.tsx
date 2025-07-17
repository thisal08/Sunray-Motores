import React from 'react';
import { Search, Wrench, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Quality Auto Parts for Every Vehicle
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Your trusted partner for genuine spare parts, expert advice, and reliable service. 
              We keep your vehicle running at its best with premium quality parts and professional expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                Browse Parts
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Quote
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <Search className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="font-semibold mb-2">Easy Search</h3>
              <p className="text-sm text-blue-100">Find parts by make, model, or part number</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <Wrench className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="font-semibold mb-2">Expert Service</h3>
              <p className="text-sm text-blue-100">Professional installation and advice</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-blue-100">Quick turnaround on all orders</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-sm text-blue-100">Genuine parts with warranty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;