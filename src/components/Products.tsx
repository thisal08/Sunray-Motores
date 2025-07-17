import React from 'react';
import { Car, Truck, Recycle as Motorcycle, Wrench, Battery, Gauge } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: <Car className="w-12 h-12" />,
      title: "Engine Parts",
      description: "Pistons, gaskets, filters, belts, and complete engine components",
      items: ["Air Filters", "Oil Filters", "Spark Plugs", "Timing Belts", "Gaskets"]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Brake System",
      description: "Complete brake solutions for safety and performance",
      items: ["Brake Pads", "Brake Discs", "Brake Fluid", "Brake Lines", "Calipers"]
    },
    {
      icon: <Battery className="w-12 h-12" />,
      title: "Electrical",
      description: "Batteries, alternators, starters, and electrical components",
      items: ["Car Batteries", "Alternators", "Starters", "Fuses", "Wiring"]
    },
    {
      icon: <Gauge className="w-12 h-12" />,
      title: "Suspension",
      description: "Shocks, struts, springs for smooth and safe driving",
      items: ["Shock Absorbers", "Struts", "Springs", "Bushings", "Ball Joints"]
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Body Parts",
      description: "Exterior and interior components for all vehicle types",
      items: ["Bumpers", "Mirrors", "Lights", "Door Handles", "Trim"]
    },
    {
      icon: <Motorcycle className="w-12 h-12" />,
      title: "Transmission",
      description: "Gearbox parts, clutches, and drivetrain components",
      items: ["Clutch Kits", "Gearbox Oil", "CV Joints", "Drive Shafts", "Differentials"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Product Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stock a comprehensive range of genuine spare parts for all major vehicle brands. 
            From routine maintenance to major repairs, we have what you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                View All Parts →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Can't find what you're looking for?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Request Custom Part
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;