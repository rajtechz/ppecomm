import React from "react";
import { Twitter, Instagram, Facebook, Youtube, Share2 } from "lucide-react"; // Share2 used instead of Pinterest
import logo from "../../assets/logo/KD.jpeg"; // Replace with your actual logo path

function Footer() {
  return (
    <footer className="bg-black text-white px-6 lg:px-20 py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Info */}
        <div className="md:col-span-1 space-y-4">
          <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-gray-300">
            FOR THE RIGHT <br />
            KIND OF MAN.
          </h2>
          <p className="text-sm text-gray-500">© 2024, Wrogn Powered by TMRW</p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <Instagram className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            <Share2 className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="text-white font-semibold mb-4">HELP</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-gray-200">My Account</li>
            <li className="cursor-pointer hover:text-gray-200">Privacy Policy</li>
            <li className="cursor-pointer hover:text-gray-200">Anti Corruption Policy</li>
            <li className="cursor-pointer hover:text-gray-200">Terms & Conditions</li>
            <li className="cursor-pointer hover:text-gray-200">Contact Us</li>
          </ul>
        </div>

        {/* Order Support Section */}
        <div>
          <h4 className="text-white font-semibold mb-4">ORDER SUPPORT</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-gray-200">Return & Refund Policy</li>
            <li className="cursor-pointer hover:text-gray-200">FAQ</li>
            <li className="cursor-pointer hover:text-gray-200">Shipping Policy</li>
            <li className="cursor-pointer hover:text-gray-200">Cancellation</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h4 className="text-white font-semibold mb-4">ABOUT US</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-gray-200">About Us</li>
            <li className="cursor-pointer hover:text-gray-200">Find a Store</li>
            <li className="cursor-pointer hover:text-gray-200">Blog</li>
            <li className="cursor-pointer hover:text-gray-200">Careers</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
