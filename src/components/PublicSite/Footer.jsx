
import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0056b3] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">ShumAbo Secondary School</h3>
                <p className="text-blue-200">Excellence in Education</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4">
              Committed to providing quality education and nurturing the next generation of leaders in Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/news" className="text-blue-200 hover:text-white transition-colors">News & Events</a></li>
              <li><a href="/academic-policy" className="text-blue-200 hover:text-white transition-colors">Academic Policy</a></li>
              <li><a href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-blue-200">Bahir Dar, Ethiopia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-blue-200">+251 58 220 0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-blue-200">info@shumabo.edu.et</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 ShumAbo Secondary School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
