import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  const scrollToFooter = () => {
    setIsOpen(false);
    const footer = document.getElementById('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white tracking-wider">
            NOVA
          </Link>

          <div className="flex items-center gap-4">
            {/* Call Now - Desktop */}
            <button
              onClick={scrollToFooter}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all text-white"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <div className="space-y-8 text-center">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className="block text-4xl md:text-6xl font-bold text-white hover:text-gray-400 transition-all duration-300 transform hover:translate-x-4"
                style={{
                  animation: isOpen
                    ? `slideIn 0.5s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                {link.name}
              </Link>
            ))}

            {/* Call Now - Mobile */}
            <button
              onClick={scrollToFooter}
              className="flex items-center gap-3 text-4xl md:text-6xl font-bold text-white hover:text-gray-400 transition-all duration-300 transform hover:translate-x-4 md:hidden"
              style={{
                animation: isOpen
                  ? `slideIn 0.5s ease-out ${navLinks.length * 0.1}s both`
                  : 'none',
              }}
            >
              <Phone size={40} />
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
