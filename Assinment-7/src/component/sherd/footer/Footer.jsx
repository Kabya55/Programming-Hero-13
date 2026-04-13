import React from "react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import Logo from "../../../assets/logo-xl.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#244D3F] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-5">
            <img src={Logo} alt="Logo" />
          </div>

          <p className="text-gray-200 text-sm mb-6">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <p className="text-gray-300 mb-3">Social Links</p>

          <div className="flex justify-center gap-4 mb-10">
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
              <IoLogoInstagram size={18} />
            </a>

            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
              <FaFacebookF size={18} />
            </a>

            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition">
              <FaXTwitter size={18} />
            </a>
          </div>

          <div className="border-t border-gray-400/30 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>© 2026 Kabya. All rights reserved.</p>

            <div className="flex gap-6 mt-3 md:mt-0">
              <a className="hover:text-white transition">Privacy Policy</a>
              <a className="hover:text-white transition">Terms of Service</a>
              <a className="hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
