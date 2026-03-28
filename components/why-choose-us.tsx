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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Choose Our Services</h2>
              <p className="text-slate-400 text-lg max-w-2xl">The core pillars that make us the trusted partner for thousands of businesses.</p>
            </div>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-900/50 flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:border-amber-400/50 transition-all duration-300 shadow-lg">
                    <reason.icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-white">{reason.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[500px] rounded-3xl overflow-hidden glass-card border-white/10 shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://picsum.photos/seed/why-choose-us/800/1000" 
              alt="Why Choose Us" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                <p className="text-lg font-medium text-white italic">
                  "Hitrace has completely transformed how we manage our operations. The ROI was visible within the first month."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 font-bold">
                    JD
                  </div>
                  <div>
                    <div className="font-bold text-white">John Doe</div>
                    <div className="text-sm text-amber-400">Operations Director</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}