import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0B1A2B] text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-2xl font-bold text-white">DigiTools</h1>
            <p className="text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-4">Product</h2>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-4">Company</h2>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-4">Resources</h2>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-4">Social Links</h2>
            <div className="flex gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black cursor-pointer hover:bg-white">
                <IoLogoInstagram />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black cursor-pointer hover:bg-white">
                <FaFacebook />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black cursor-pointer hover:bg-white">
                <FaXTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-700 mt-12"></div>

        <div className="max-w-6xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
