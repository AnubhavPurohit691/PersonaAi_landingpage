import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <h2 className="font-bold text-2xl text-white">PersonaAI</h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Empowering creators with AI-driven tools to turn imagination into reality. Create, edit, and scale faster than ever.
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="#" className="text-neutral-400 hover:text-white transition-colors"><FaTwitter size={20} /></Link>
            <Link href="#" className="text-neutral-400 hover:text-white transition-colors"><FaInstagram size={20} /></Link>
            <Link href="#" className="text-neutral-400 hover:text-white transition-colors"><FaLinkedin size={20} /></Link>
            <Link href="#" className="text-neutral-400 hover:text-white transition-colors"><FaGithub size={20} /></Link>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h3 className="font-bold mb-4 text-white">Product</h3>
          <ul className="flex flex-col gap-2 text-sm text-neutral-400">
            <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Showcase</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h3 className="font-bold mb-4 text-white">Resources</h3>
          <ul className="flex flex-col gap-2 text-sm text-neutral-400">
            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Guidelines</Link></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div>
          <h3 className="font-bold mb-4 text-white">Company</h3>
          <ul className="flex flex-col gap-2 text-sm text-neutral-400">
            <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Legal</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
        <div>&copy; {new Date().getFullYear()} PersonaAI Inc. All rights reserved.</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
