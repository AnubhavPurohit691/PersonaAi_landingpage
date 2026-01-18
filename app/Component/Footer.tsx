import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brown-950 text-cream-100 pt-16 pb-8 border-t border-brown-900">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <h2 className="font-bold text-2xl text-cream-100">PersonaAI</h2>
          <p className="text-brown-200 text-sm leading-relaxed">
            Empowering creators with AI-driven tools to turn imagination into reality. Create, edit, and scale faster than ever.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-brown-200 hover:text-cream-100 transition-colors"><FaTwitter size={20} /></a>
            <a href="#" className="text-brown-200 hover:text-cream-100 transition-colors"><FaInstagram size={20} /></a>
            <a href="#" className="text-brown-200 hover:text-cream-100 transition-colors"><FaLinkedin size={20} /></a>
            <a href="#" className="text-brown-200 hover:text-cream-100 transition-colors"><FaGithub size={20} /></a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h3 className="font-bold mb-4 text-cream-100">Product</h3>
          <ul className="flex flex-col gap-2 text-sm text-brown-200">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Showcase</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h3 className="font-bold mb-4 text-cream-100">Resources</h3>
          <ul className="flex flex-col gap-2 text-sm text-brown-200">
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Guidelines</a></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div>
          <h3 className="font-bold mb-4 text-cream-100">Company</h3>
          <ul className="flex flex-col gap-2 text-sm text-brown-200">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 border-t border-brown-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brown-500">
        <div>&copy; {new Date().getFullYear()} PersonaAI Inc. All rights reserved.</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-cream-100 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cream-100 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
