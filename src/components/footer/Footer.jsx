import React from "react";
import { Twitter, Instagram, Facebook, Youtube, Share2, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "../../assets/logo/KD.jpeg";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative z-7 px-8 lg:px-32 xl:px-48 py-16 w-full">
        <div className="w-full mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo & Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img src={logo} alt="Logo" className="w-16 h-16 object-contain rounded-lg shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 animate-pulse"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    KD STYLE
                  </h2>
                  <p className="text-xs text-gray-400">Premium Fashion</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold leading-tight text-gray-100 mb-3">
                  FOR THE RIGHT <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    KIND OF MAN.
                  </span>
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Discover the perfect blend of style and comfort. Elevate your wardrobe with our premium collection.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>support@kdstyle.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>123 Fashion St, Style City</span>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-6 relative">
                  HELP
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                </h4>
                <ul className="space-y-3">
                  {['My Account', 'Privacy Policy', 'Anti Corruption Policy', 'Terms & Conditions', 'Contact Us'].map((item) => (
                    <li key={item} className="group">
                      <a href="#" className="flex items-center text-sm text-gray-400 hover:text-white transition-all duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Order Support Section */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-6 relative">
                  ORDER SUPPORT
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                </h4>
                <ul className="space-y-3">
                  {['Return & Refund Policy', 'FAQ', 'Shipping Policy', 'Cancellation', 'Size Guide'].map((item) => (
                    <li key={item} className="group">
                      <a href="#" className="flex items-center text-sm text-gray-400 hover:text-white transition-all duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* About Us Section */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-6 relative">
                  ABOUT US
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                </h4>
                <ul className="space-y-3">
                  {['About Us', 'Find a Store', 'Blog', 'Careers', 'Press Kit'].map((item) => (
                    <li key={item} className="group">
                      <a href="#" className="flex items-center text-sm text-gray-400 hover:text-white transition-all duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
              <div className="max-w-md">
                <h4 className="text-lg font-bold text-white mb-3">Stay Updated</h4>
                <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for exclusive offers and style tips.</p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-300"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, color: 'hover:text-pink-400' },
                  { icon: Facebook, color: 'hover:text-blue-400' },
                  { icon: Twitter, color: 'hover:text-sky-400' },
                  { icon: Share2, color: 'hover:text-green-400' },
                  { icon: Youtube, color: 'hover:text-red-400' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-gray-700 ${social.color} transform hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <p className="text-sm text-gray-400">© 2024 KD Style. Powered by TMRW</p>
                <div className="flex space-x-4">
                  <span className="text-xs text-gray-500">Privacy</span>
                  <span className="text-xs text-gray-500">Terms</span>
                  <span className="text-xs text-gray-500">Cookies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}

export default Footer;
