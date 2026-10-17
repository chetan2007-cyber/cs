import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/work' },
  { name: 'Process', path: '/process' },
  { name: 'About', path: '/about' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0c]/90 backdrop-blur-md border-b border-[#22252c] py-3.5 shadow-xl text-white'
          : 'bg-[#faf9f5]/85 backdrop-blur-md border-b border-[#e5e4dc]/80 py-4 text-[#090a0c]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center space-x-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#d2fc1e] text-[#090a0c] flex items-center justify-center font-black text-xs font-mono shadow-sm transition-transform group-hover:scale-105">
              WC
            </div>
            <div className="flex items-baseline font-bold text-lg tracking-tight">
              <span className="text-[#090a0c]">WeCove</span>
              <span className="text-[#d2fc1e] font-mono text-sm ml-0.5">.in</span>
            </div>
          </Link>

          {/* Desktop Navigation Links — Dark Pill Capsule */}
          <nav className="hidden md:flex items-center space-x-1 px-2.5 py-1.5 rounded-full bg-[#14161c] border border-[#22252c] shadow-md">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-1 text-xs font-mono font-medium rounded-full transition-all duration-150 ${
                    isActive
                      ? 'bg-[#22252c] text-[#d2fc1e] font-bold shadow-sm'
                      : 'text-[#858994] hover:text-white hover:bg-[#1a1d24]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 bg-[#090a0c] text-[#d2fc1e] hover:bg-[#181a20] border border-[#22252c] hover:border-[#d2fc1e]/50 shadow-sm"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d2fc1e]" />
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#d2fc1e] ${
                scrolled
                  ? 'border-[#22252c] text-white hover:bg-[#14161b]'
                  : 'border-[#e5e4dc] text-[#090a0c] hover:bg-[#f4f3ee]'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className={`md:hidden border-b px-5 pt-3 pb-6 space-y-4 shadow-2xl transition-all ${
          scrolled
            ? 'bg-[#090a0c] border-[#22252c] text-white'
            : 'bg-[#faf9f5] border-[#e5e4dc] text-[#090a0c]'
        }`}>
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#d2fc1e] text-[#090a0c] font-bold'
                      : scrolled
                        ? 'text-[#858994] hover:text-white hover:bg-[#14161b]'
                        : 'text-[#4b4e57] hover:text-[#090a0c] hover:bg-[#f4f3ee]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-[#22252c]/20 flex flex-col space-y-2">
            <Link
              to="/contact"
              className="w-full py-3 px-4 bg-[#090a0c] text-white hover:bg-[#181a20] border border-[#22252c] font-semibold rounded-lg text-center text-xs uppercase font-mono tracking-wider flex items-center justify-center space-x-2 shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d2fc1e]" />
            </Link>
            <div className="text-center text-xs text-[#858994] pt-1 font-mono">
              Direct: <a href="tel:8660534989" className="text-white hover:text-[#d2fc1e] font-medium">+91 8660534989</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
