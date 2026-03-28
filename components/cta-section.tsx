'use client';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Cta3DBackground } from '@/components/cta-3d';
import { MagneticEffect } from '@/components/magnetic-effect';

export function CtaSection() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/80" />
      <Cta3DBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Ready to Transform Your Operations?</h2>
          <p className="text-xl text-blue-200 mb-10">
            Join thousands of businesses worldwide using Hitrace to optimize their fleet and assets.
          </p>
          <MagneticEffect>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)]">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </MagneticEffect>
        </motion.div>
      </div>
    </section>
  );
}
