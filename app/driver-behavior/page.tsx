'use client';

import { motion } from 'motion/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MagneticEffect } from '@/components/magnetic-effect';
import { AnimatedBackground } from '@/components/animated-background';
import { 
  Activity, Fuel, ShieldAlert, Wrench, 
  Users, Settings, ArrowRight, Car 
} from 'lucide-react';

const benefits = [
  { icon: Fuel, title: "Reduction in fuel consumption", desc: "This solution complements the Hitrace fuel monitoring system. By minimizing aggressive driving maneuvers and optimizing vehicle speed, it leads to lower fuel costs and consumption." },
  { icon: ShieldAlert, title: "Enhanced fleet safety", desc: "The driver behavior monitoring system promotes the safety of goods, passengers, and other road users. As a result, it contributes to improved overall road security." },
  { icon: Wrench, title: "Maintenance cost savings", desc: "Implementing this solution enables transport companies to maintain their fleets effectively and decrease the frequency of repairs." },
  { icon: Users, title: "Increased staff efficiency", desc: "Provides companies with organized insights into employee performance. This allows managers to swiftly identify and train underperforming drivers, recognize top performers, and reward them accordingly." },
];

export default function DriverBehaviorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden relative">
      <AnimatedBackground color="orange" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://picsum.photos/seed/driver-behavior/1920/1080" 
            alt="Driver Behavior Monitoring" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold tracking-wide uppercase mb-6">
              <Activity className="w-4 h-4" /> Performance Analytics
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Driver Behavior <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Monitoring.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Assess driver performance by evaluating skills through penalty points for violations such as speeding, excessive acceleration, harsh braking, and accelerating while turning. Practicing professional and cautious driving reduces fuel expenses, prolongs vehicle lifespan, and enhances safety.
            </p>
            <MagneticEffect>
              <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)]">
                Book a Demo
              </button>
            </MagneticEffect>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Monitor Driver Behavior?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Transform your fleet&apos;s safety and efficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 border-white/10 hover:border-orange-500/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-900/30 flex items-center justify-center mb-6 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-orange-400 group-hover:text-orange-300 transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-24 relative z-10 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden glass-card border-orange-500/20 p-10 md:p-16 shadow-2xl shadow-orange-900/20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent z-0" />
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wide uppercase mb-4">
                      <Settings className="w-4 h-4" /> Custom Parameters
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-6">Features of the Hitrace Driver Behavior Monitoring</h3>
                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                      The ability to choose parameters for analyzing driving behavior includes acceleration, braking, speeding, reckless driving, and acceleration during cornering. The system can monitor additional violations based on the sensors that are set up.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 relative">
                    <div className="aspect-video rounded-2xl overflow-hidden border border-orange-500/20 shadow-2xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src="https://picsum.photos/seed/driver-features/800/600" 
                        alt="Driver Behavior Features" 
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-orange-900/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Ready to improve your fleet&apos;s safety?</h2>
            <p className="text-xl text-orange-100/80 mb-10">
              Start monitoring driver behavior today and see an immediate impact on your bottom line.
            </p>
            <MagneticEffect>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-slate-900 rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)]">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </MagneticEffect>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
