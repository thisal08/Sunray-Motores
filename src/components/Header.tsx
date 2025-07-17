import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      {/* Top bar with contact info */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>0776024572</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>info@sunraymotors.com</span>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>191/A/PANCHIKAWATHA, COLOMBO 10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/logo.jpg" 
              alt="Sunray Motors Logo" 
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Sunray Motors</h1>
              <p className="text-sm text-gray-600">Spare Parts Shop</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Products</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">Products</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;