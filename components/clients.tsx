'use client';
import { motion } from 'motion/react';

const clients = [
  "Global Logistics Co.",
  "Prime Freight",
  "EcoTransit",
  "Nexus Supply Chain",
  "Apex Delivery",
  "Swift Transport",
  "Meridian Shipping",
  "Atlas Movers"
];

export function Clients() {
  return (
    <section className="py-12 border-y border-white/5 bg-slate-900/20 overflow-hidden relative z-20">
      <div className="container px-4 md:px-6 mx-auto mb-8 text-center">
        <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Trusted by industry leaders worldwide</p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-hidden w-full group">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
        
        {/* Scrolling Content */}
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {/* First Set */}
          <div className="flex items-center gap-16 px-8">
            {clients.map((client, i) => (
              <div key={i} className="text-2xl font-display font-bold text-slate-600 hover:text-amber-400 transition-colors cursor-default">
                {client}
              </div>
            ))}
          </div>
          {/* Duplicate Set for Infinite Loop */}
          <div className="flex items-center gap-16 px-8">
            {clients.map((client, i) => (
              <div key={`dup-${i}`} className="text-2xl font-display font-bold text-slate-600 hover:text-amber-400 transition-colors cursor-default">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}