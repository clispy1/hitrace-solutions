'use client';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section className="py-24 relative z-20">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">See HiTrace in Action</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Watch how our technology transforms fleet management and smart home security.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden glass-card border-white/10 group cursor-pointer shadow-2xl shadow-blue-900/20"
        >
          {/* Video Thumbnail Placeholder */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://picsum.photos/seed/hitrace-video/1920/1080" 
            alt="HiTrace Video Thumbnail" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Pulse effect */}
              <div className="absolute inset-0 bg-amber-400 rounded-full animate-ping opacity-20" />
              <div className="w-20 h-20 md:w-24 md:h-24 glass rounded-full flex items-center justify-center border-white/20 group-hover:border-amber-400/50 group-hover:bg-amber-400/10 transition-all duration-300 backdrop-blur-md">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-amber-400 ml-2" />
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md">
              Overview
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">The Future of Telematics</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}