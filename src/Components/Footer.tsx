import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import FooterImg from './FooterImg';

// A custom component for the 'X' logo to precisely match the image.
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M714.664 522.684L1146.5 0H1035.7L660.168 452.7L363.332 0H0L450.432 660.859L0 1226.37H110.832L510.832 740.93L822.668 1226.37H1200L714.664 522.684ZM562.916 687.859L518.432 626.37L136.916 64.3696H320.168L602.416 501.026L646.9 562.51L1042.08 1166.37H858.832L562.916 687.859Z"/>
  </svg>
);

const Footer = () => {
  return (
    <>
    <FooterImg/>
    <section className="bg-[#1C1F22] text-white">
      {/* The container's height is now determined by the inner content and spacing. */}
      <div className="max-w-[1440px] mx-auto px-20 pt-[23px] pb-20">
        
        {/* Main Content Area (Two Columns). Added mb-20 for an 80px gap below. */}
        <div className="pt-16 flex justify-between mb-20">
          
          {/* Left Part (500px width) */}
          <div className="w-[500px]">
            {/* Note: Replace with your actual logo component or font */}
            <h2 className="text-white text-5xl mb-6" style={{ fontFamily: 'cursive' }}>Logo</h2>
            
            <p className="text-gray-300 text-[16px] mb-6 text-base leading-relaxed">
              Subscribe to our newsletter for the latest updates on features and releases.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2.5 mb-4">
              <input
                type="email"
                placeholder="Your email here"
                className="flex-grow bg-transparent border border-gray-600 rounded-full px-5 py-3 text-[14px] text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-transparent border border-gray-600 rounded-full px-8 py-3 text-[14px] text-white whitespace-nowrap hover:bg-white hover:text-black transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-[12px] text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>

          {/* Right Part (652px width) */}
          <div className="w-[652px]">
            <div className="grid grid-cols-3 gap-x-8">
              {/* Column 1: Quick Links */}
              <div>
                <h3 className="text-white text-[20px] font-bold text-xl mb-6">Quick Links</h3>
                <ul className="space-y-3 text-[14px]">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>

              {/* Column 2: Connect With Us */}
              <div>
                <h3 className="text-white text-[20px] font-bold text-xl mb-6">Connect With Us</h3>
                <ul className="space-y-3 text-[14px]">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Newsletter</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>

              {/* Column 3: Follow Us */}
              <div>
                <h3 className="text-white text-[20px] font-bold text-xl mb-6">Follow Us</h3>
                <ul className="space-y-4 text-[14px]">
                  <li><a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"><FaFacebookF /><span>Facebook</span></a></li>
                  <li><a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"><FaInstagram /><span>Instagram</span></a></li>
                  <li><a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"><XIcon /><span>X</span></a></li>
                  <li><a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"><FaLinkedinIn /><span>LinkedIn</span></a></li>
                  <li><a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"><FaYoutube /><span>YouTube</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[14px] text-gray-400 pt-8">
          <p className="order-2 sm:order-1 mt-4 sm:mt-0">© 2025 Relume. All rights reserved.</p>
          <div className="flex gap-x-6 gap-y-2 flex-wrap justify-center order-1 sm:order-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
        
      </div>
    </section>
    </>
  );
};

export default Footer;