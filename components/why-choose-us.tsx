'use client';
import { motion } from 'motion/react';
import { Award, PiggyBank, Cpu } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "We have more than 15 years of experience in providing Vehicle Tracking & Fleet Management solutions globally."
    },
    {
      icon: PiggyBank,
      title: "Affordability",
      description: "We offer dependable and high-quality GPS hardware and software that remains budget-friendly for everyone."
    },
    {
      icon: Cpu,
      title: "Advanced Technologies",
      description: "Wonderful customer support paired with the most advanced technologies in telematics and IoT."
    }
  ];

  return (
    <section className="py-24 relative z-20 bg-slate-900/30 border-y border-white/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Choose Our Services</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">The core pillars that make us the trusted partner for thousands of businesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center text-center p-8 glass-card rounded-3xl group"
            >
              <div className="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 group-hover:border-emerald-500/50 transition-all duration-300 shadow-lg">
                <reason.icon className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
