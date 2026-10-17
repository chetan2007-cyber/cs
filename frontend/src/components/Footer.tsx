import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 pt-16 pb-12 text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-zinc-950">
              <div className="w-7 h-7 rounded-md bg-zinc-900 text-white flex items-center justify-center font-bold text-xs font-mono">
                WC
              </div>
              <span className="text-lg font-bold tracking-tight">
                WeCove<span className="text-blue-600">.in</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-600 max-w-sm leading-relaxed">
              WeCove.in designs and develops websites, applications, SaaS platforms, and custom software
              for businesses ready to turn ideas into useful digital products.
            </p>
            <div className="pt-2 space-y-2">
              <div className="flex items-center space-x-2.5 text-xs text-zinc-700">
                <Mail className="w-4 h-4 text-blue-600" />
                <a
                  href="mailto:wecove.in@gmail.com"
                  className="hover:text-blue-600 transition-colors font-medium font-mono"
                >
                  wecove.in@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-zinc-700">
                <Phone className="w-4 h-4 text-blue-600" />
                <a
                  href="tel:8660534989"
                  className="hover:text-blue-600 transition-colors font-medium font-mono"
                >
                  +91 8660534989
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4 font-mono">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4 font-mono">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  SaaS Platforms
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  Backend & Cloud Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  UI/UX & Product Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-600 hover:text-zinc-950 transition-colors">
                  MVP Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Case Studies */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4 font-mono">
              Case Studies
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/work/kami"
                  className="text-zinc-600 hover:text-blue-600 flex items-center justify-between group transition-colors"
                >
                  <span className="font-medium text-zinc-900">Kami Print Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work/nova"
                  className="text-zinc-600 hover:text-blue-600 flex items-center justify-between group transition-colors"
                >
                  <span>Nova Concept</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work/flow"
                  className="text-zinc-600 hover:text-blue-600 flex items-center justify-between group transition-colors"
                >
                  <span>Flow Concept</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work/orbit"
                  className="text-zinc-600 hover:text-blue-600 flex items-center justify-between group transition-colors"
                >
                  <span>Orbit Concept</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-zinc-600" />
            <span>© {new Date().getFullYear()} WeCove.in. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span>Independent Software Studio</span>
            <span>•</span>
            <span className="font-mono text-zinc-600">India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
