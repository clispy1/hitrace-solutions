'use client';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { MagneticEffect } from './magnetic-effect';

const menuItems = [
  { name: 'Home', href: '#' },
  {
    name: 'Services',
    href: '#services',
    subItems: [
      {
        name: 'Telematics',
        href: '#telematics',
        subItems: [
          { name: 'Fleet Management', href: '#fleet-management' },
          { name: 'Fuel Monitoring', href: '#fuel-monitoring' },
          { name: 'Tracking Solutions', href: '#tracking-solutions' },
          { name: 'Driver Behavior Monitoring', href: '#driver-behavior' },
          { name: 'Smart Farming', href: '#smart-farming' },
        ]
      },
      { name: 'IoT And Smart Homes', href: '#iot' },
      {
        name: 'Web Services',
        href: '#web-services',
        subItems: [
          { name: 'Custom Web Solutions', href: '#custom-web' },
          { name: 'E-commerce', href: '#ecommerce' },
          { name: 'Digital Media', href: '#digital-media' },
        ]
      }
    ]
  },
  { name: 'Industries', href: '#industries' },
  { name: 'Pricing', href: '#pricing' },
  {
    name: 'Resources',
    href: '#resources',
    subItems: [
      { name: 'Blog', href: '#blog' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'FAQs', href: '#faqs' },
    ]
  },
];

function DesktopSubNavItem({ item }: { item: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href={item.href} className="flex items-center justify-between px-4 py-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
        {item.name}
        {item.subItems && <ChevronRight className="w-4 h-4 ml-2" />}
      </a>

      <AnimatePresence>
        {isOpen && item.subItems && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-full ml-1 w-64 glass border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50 flex flex-col py-2"
          >
            {item.subItems.map((nestedItem: any) => (
              <a key={nestedItem.name} href={nestedItem.href} className="block px-4 py-3 text-sm text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors">
                {nestedItem.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DesktopNavItem({ item }: { item: any }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.subItems) {
    return (
      <a href={item.href} className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors py-2">
        {item.name}
      </a>
    );
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href={item.href} className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors py-2">
        {item.name}
        <ChevronDown className="w-4 h-4" />
      </a>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: 10, rotateX: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 glass border border-white/10 rounded-2xl overflow-visible shadow-2xl z-50 flex flex-col py-2"
            style={{ perspective: 1000 }}
          >
            {item.subItems.map((subItem: any) => (
              <DesktopSubNavItem key={subItem.name} item={subItem} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({ item, depth = 0 }: { item: any, depth?: number }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.subItems) {
    return (
      <a href={item.href} className={`block py-3 text-base font-medium text-slate-300 hover:text-amber-400 transition-colors ${depth > 0 ? 'pl-4 border-l border-white/10' : ''}`}>
        {item.name}
      </a>
    );
  }

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between py-3 text-base font-medium text-slate-300 hover:text-amber-400 transition-colors ${depth > 0 ? 'pl-4 border-l border-white/10' : ''}`}
      >
        {item.name}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden flex flex-col ml-4"
          >
            {item.subItems.map((subItem: any) => (
              <MobileNavItem key={subItem.name} item={subItem} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            {menuItems.map((link) => (
              <DesktopNavItem key={link.name} item={link} />
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass border-t border-white/10 max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {menuItems.map((link) => (
                <MobileNavItem key={link.name} item={link} />
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
      </AnimatePresence>
    </nav>
  );
}
