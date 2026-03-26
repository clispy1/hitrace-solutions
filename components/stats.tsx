'use client';
import { motion } from 'motion/react';
import { Counter } from './ui/counter';

export function Stats() {
  const stats = [
    { value: 5003, suffix: '+', label: 'Installed Devices' },
    { value: 200, suffix: '+', label: 'Projects Completed' },
    { value: 99.5, suffix: '%', label: 'Success Rate', decimals: 1 },
  ];

  return (
    <section className="relative z-20 -mt-12 mb-12 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 border-white/10 shadow-2xl shadow-blue-900/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0 text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 flex items-center">
                  <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <div className="text-amber-400 font-medium tracking-wide uppercase text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}