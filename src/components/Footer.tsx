import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              <span className="text-brand-green">FreshPlate</span><span className="text-brand-orange">GH</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Fresh, hot, and affordable fried rice paired with natural, revitalizing Green Vitality smoothies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-gray-400 hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/order" className="text-gray-400 hover:text-white transition-colors">Order Now</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Contact & Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Kumasi Technical University, Kumasi, Ghana</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0" />
                <span className="text-gray-400">055 082 7113</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Saturday & Sunday Only<br />
                  10:00 AM - 9:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FreshPlate GH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
