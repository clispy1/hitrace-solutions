'use client';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { MagneticEffect } from './magnetic-effect';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            {/* CSS representation of the HiTrace H logo */}
            <div className="flex gap-[2px] h-8 items-center">
              <div className="w-1.5 h-full bg-amber-400 rounded-sm" />
              <div className="w-1.5 h-full bg-amber-400 rounded-sm relative">
                <div className="absolute top-1/2 left-0 w-4 h-1.5 bg-amber-400 -translate-y-1/2" />
              </div>
              <div className="w-1.5 h-full bg-amber-400 rounded-sm ml-2.5" />
              <div className="w-1.5 h-full bg-amber-400 rounded-sm" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-wide text-blue-600 leading-none uppercase">Hitrace</span>
              <span className="font-sans font-semibold text-[0.65rem] tracking-[0.3em] text-blue-600 leading-none mt-1 uppercase">Solutions</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <span className="text-sm text-slate-400">Call Us: (+233) 20-794-9676</span>
              <MagneticEffect>
                <button className="px-5 py-2.5 bg-blue-700 hover:bg-blue-600 text-white rounded-full text-sm font-medium transition-colors shadow-lg shadow-blue-900/20">
                  Book a Demo
                </button>
              </MagneticEffect>
            </div>
            <button
              className="md:hidden p-2 text-slate-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-4">
              <span className="text-sm text-slate-400 px-3">Call Us: (+233) 20-794-9676</span>
              <button className="w-full px-5 py-3 bg-blue-700 text-white rounded-lg text-base font-semibold">
                Book a Demo
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}