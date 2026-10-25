// Footer.tsx
import { Mail, Phone, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black border-t border-white/10 py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              NOVA
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A full-service digital marketing agency focused on measurable outcomes, strategic positioning,
              and performance-driven execution. We integrate brand, creative, advertising, and analytics to
              scale businesses in competitive digital landscapes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/projects" className="block text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:novamedia.manage@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>novamedia.manage@gmail.com</span>
              </a>

              <a
                href="tel:+16478663141"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>+1 (647) 866-3141</span>
              </a>

              <a
                href="tel:+14167207970"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>+1 (416) 720-7970</span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/nova.mediagency?igsh=ZHV6dnhuN25hNHZ3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} NOVA. All rights reserved. Data-Driven Growth. Measurable Results.
          </p>
        </div>
      </div>
    </footer>
  );
}
