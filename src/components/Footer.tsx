import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sunray Motors</h3>
                <p className="text-sm text-gray-400">Spare Parts Shop</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for quality automotive spare parts and professional service for over 25 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Engine Parts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Brake System</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Electrical</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Suspension</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Body Parts</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-yellow-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-yellow-400" />
                <span className="text-gray-400">info@sunraymotors.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-yellow-400 mt-1" />
                <span className="text-gray-400">123 Auto Parts Ave<br />Motor City, MC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sunray Motors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;