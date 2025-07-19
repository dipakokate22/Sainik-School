import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import FooterImg from './FooterImg';

// Custom X Icon
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M714.664 522.684L1146.5 0H1035.7L660.168 452.7L363.332 0H0L450.432 660.859L0 1226.37H110.832L510.832 740.93L822.668 1226.37H1200L714.664 522.684ZM562.916 687.859L518.432 626.37L136.916 64.3696H320.168L602.416 501.026L646.9 562.51L1042.08 1166.37H858.832L562.916 687.859Z"/>
  </svg>
);

const Footer = () => {
  return (
    <>
      <FooterImg />
      <section className="bg-[#1C1F22] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-10 pt-[23px] pb-20">
          
          {/* Top Section */}
          <div className="pt-16 flex flex-col lg:flex-row justify-between gap-10 mb-20">
            
            {/* Left */}
            <div className="w-full lg:w-[500px]">
              <h2 className="text-white text-4xl sm:text-5xl mb-6 font-cursive">Logo</h2>
              <p className="text-gray-300 text-base mb-6 leading-relaxed">
                Subscribe to our newsletter for the latest updates on features and releases.
              </p>

              <form className="flex flex-col sm:flex-row gap-2.5 mb-4">
                <input
                  type="email"
                  placeholder="Your email here"
                  className="flex-grow bg-transparent border border-gray-600 rounded-full px-5 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="bg-transparent border border-gray-600 rounded-full px-8 py-3 text-sm text-white whitespace-nowrap hover:bg-white hover:text-black transition-colors"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>

            {/* Right */}
            <div className="w-full lg:w-[652px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                
                {/* Quick Links */}
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-6">Quick Links</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition">Contact Us</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition">Careers</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition">Blog</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition">Support</a></li>
                  </ul>
                </div>

                {/* Connect With Us */}
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-6">Connect With Us</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-gray-300 hover:text-white transition">Newsletter</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition">Events</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition">Resources</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition">Testimonials</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition">FAQ</a></li>
                  </ul>
                </div>

                {/* Follow Us */}
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-6">Follow Us</h3>
                  <ul className="space-y-4 text-sm">
                    <li><a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition"><FaFacebookF /><span>Facebook</span></a></li>
                    <li><a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition"><FaInstagram /><span>Instagram</span></a></li>
                    <li><a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition"><XIcon /><span>X</span></a></li>
                    <li><a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition"><FaLinkedinIn /><span>LinkedIn</span></a></li>
                    <li><a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition"><FaYoutube /><span>YouTube</span></a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-600" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 pt-8 gap-4">
            <p className="text-center">© 2025 Relume. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Cookie Settings</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;