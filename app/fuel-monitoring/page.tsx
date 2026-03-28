'use client';

import { motion } from 'motion/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MagneticEffect } from '@/components/magnetic-effect';
import { AnimatedBackground } from '@/components/animated-background';
import { 
  Fuel, ShieldCheck, TrendingUp, Activity, 
  Map, Clock, Database, CheckCircle2, 
  ArrowRight, Droplet, Cpu, Car 
} from 'lucide-react';

const reasons = [
  { icon: ShieldCheck, title: "Safeguard Fuel Against Theft", desc: "Fleet managers have valid concerns regarding fuel theft. Implement fuel monitoring systems to identify irregularities and safeguard your assets." },
  { icon: Activity, title: "Improve Driving Culture", desc: "Combine fuel monitoring with driver behavior analysis to identify fuel-wasting habits and promote responsible driving practices." },
  { icon: TrendingUp, title: "Enhance Fuel Efficiency", desc: "Enhance your fleet with immediate insights into fuel consumption trends. Detect inefficiencies and adopt strategies to optimize fuel usage." },
];

const supports = [
  { icon: Map, title: "Aerial perspective", desc: "Track every ounce of filled or used fuel and understand how it impacts your budget in relation to vehicles, drivers, or trips." },
  { icon: Clock, title: "Real-time control", desc: "Easily track fuel consumption and current tank levels with just a few clicks—eliminating the need for manual inspections." },
  { icon: Database, title: "Past records", desc: "Enhance your budget by consistently reviewing fuel data and pinpointing areas for improvement." },
  { icon: CheckCircle2, title: "Accuracy throughout projects", desc: "Receive precise data for different vehicles, regardless of the landscape or project conditions they encounter." },
];

const components = [
  { icon: Droplet, title: "Fuel level sensor", desc: "Monitors the fuel level and its fluctuations in the tank. It interfaces with the GPS tracking device through a digital output. This is currently the most efficient method." },
  { icon: Cpu, title: "Fuel consumption sensor", desc: "Monitors the amount of fuel flowing through a vehicle&apos;s fuel line. The live data is sent directly to the GPS tracking device. Widely used in rail, air, and maritime." },
  { icon: Car, title: "CAN bus", desc: "Transmits live fuel level information from the vehicle&apos;s onboard computer to the satellite monitoring system. Simple to install and maintain." },
];

export default function FuelMonitoringPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden relative">
      <AnimatedBackground color="green" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://picsum.photos/seed/fuel-monitoring/1920/1080" 
            alt="Fuel Monitoring" 
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold tracking-wide uppercase mb-6">
              <Fuel className="w-4 h-4" /> Efficiency Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Intelligent <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Fuel Monitoring.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Monitor fuel usage for each vehicle in your fleet. Utilize fleet fuel tracking to lower expenses, decrease CO2 emissions, and encourage fuel-efficient practices throughout your fleet!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reasons to Utilize */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Reasons to Utilize Fuel Monitoring</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Protect your assets and optimize your bottom line.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 border-white/10 hover:border-green-500/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-900/30 flex items-center justify-center mb-6 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-green-400 group-hover:text-green-300 transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-white">{reason.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Hitrace Supports Fleets */}
      <section className="py-24 relative z-10 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">How Hitrace supports fleets: a reliable fuel monitoring solution.</h2>
              <div className="space-y-6">
                {supports.map((support, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-500/20 flex-shrink-0 mt-1">
                      <support.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{support.title}</h3>
                      <p className="text-slate-400">{support.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div className="h-full rounded-3xl overflow-hidden glass-card border-white/10 shadow-2xl shadow-green-900/20 flex flex-col relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/10 to-transparent z-0" />
                <div className="h-1/2 relative z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://picsum.photos/seed/fuel-features/800/600" 
                    alt="Fuel Monitoring Features" 
                    className="w-full h-full object-cover opacity-80" 
                  />
                </div>
                <div className="p-8 relative z-10 flex-1 flex flex-col justify-center text-center">
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Features of our fuel monitoring system</h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    The fleet fuel monitoring system offers details on fuel refills and withdrawals, including exact date, time, location, starting and ending fuel levels, and volume. The mobile app enables your clients to access this information while on the move.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Fuel Monitoring System Components</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">The hardware that powers our precise tracking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {components.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-colors"
              >
                <comp.icon className="w-10 h-10 text-slate-300 mb-6" />
                <h3 className="text-xl font-display font-bold mb-3 text-white">{comp.title}</h3>
                <p className="text-slate-400 leading-relaxed">{comp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-green-900/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Interested in exploring fuel management in detail?</h2>
            <p className="text-xl text-green-100/80 mb-10">
              Our specialists have created comprehensive guides on fuel monitoring and management to demonstrate how our fuel solutions operate and why integrating fuel tracking into your fleet is crucial.
            </p>
            <MagneticEffect>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-slate-900 rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)]">
                Read more
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
