'use client';

import { motion } from 'motion/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MagneticEffect } from '@/components/magnetic-effect';
import { 
  MapPin, Box, Truck, Route, AlertTriangle, 
  BarChart, Smartphone, Settings, Cloud, Eye, 
  CheckCircle2, ArrowRight, Crosshair 
} from 'lucide-react';

const whatWeTrack = [
  { icon: Truck, title: "Vehicle Tracking", desc: "Live location, speed, route history, fuel usage, and driver behavior analytics." },
  { icon: Box, title: "Asset Tracking", desc: "Monitor valuable equipment or goods in transit with geo-fencing and movement alerts." },
  { icon: Settings, title: "Fleet Management", desc: "Full platform for dispatch, maintenance alerts, and analytics reporting." },
];

const features = [
  { icon: MapPin, title: "Real-Time GPS Tracking", desc: "Instant visibility into asset or vehicle locations." },
  { icon: Crosshair, title: "Geofencing", desc: "Get alerts when items leave designated areas." },
  { icon: Route, title: "Route Optimization", desc: "Smarter paths for faster, cost-effective operations." },
  { icon: AlertTriangle, title: "Driver Behavior Monitoring", desc: "Track speeding, harsh braking, and idle times." },
  { icon: BarChart, title: "Reporting & Analytics", desc: "Custom dashboards for performance insights." },
  { icon: Smartphone, title: "Mobile App", desc: "Monitor and control on the go." },
];

const steps = [
  { icon: Settings, title: "Install", desc: "Install GPS-enabled trackers on vehicles, assets, or personnel." },
  { icon: Cloud, title: "Connect", desc: "Connect to the Hitrace cloud platform." },
  { icon: Eye, title: "Track & Monitor", desc: "Track & Monitor via web or mobile interface." },
  { icon: AlertTriangle, title: "Act", desc: "Act on real-time alerts and reports." },
];

const industries = [
  "Logistics & Transportation",
  "Construction & Heavy Equipment",
  "Delivery & Courier Services",
  "Field Service Management",
  "Public Safety & Schools"
];

const benefits = [
  "Improved asset visibility and theft prevention",
  "Reduced fuel and maintenance costs",
  "Enhanced driver safety and compliance",
  "Better decision-making with real-time data",
  "Increased operational transparency and customer trust"
];

export default function TrackingSolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://picsum.photos/seed/tracking-hero/1920/1080" 
            alt="Global Tracking" 
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-semibold tracking-wide uppercase mb-6">
              <MapPin className="w-4 h-4" /> Global Tracking
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Track Everything. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Anytime. Anywhere.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Real-time GPS tracking solutions for vehicles, assets, and personnel—engineered for control, efficiency, and security.
            </p>
            <MagneticEffect>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]">
                Get a Demo
              </button>
            </MagneticEffect>
          </motion.div>
        </div>
      </section>

      {/* What We Track */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What We Track</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Comprehensive visibility across your entire operation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whatWeTrack.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 border-white/10 text-center group hover:border-blue-500/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center mx-auto mb-6 border border-blue-500/20 group-hover:bg-blue-600/20 transition-colors">
                  <item.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 relative z-10 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Key Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/5 flex gap-4 items-start hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 z-0" />
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-slate-950 flex items-center justify-center border-2 border-blue-500/30 mb-6 shadow-xl shadow-blue-900/20 text-blue-400">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Benefits Split */}
      <section className="py-24 relative z-10 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card border-white/10 p-2 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://picsum.photos/seed/delivery-logistics/800/600" 
                  alt="Delivery Services" 
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent rounded-3xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Industries We Serve</h3>
                  <div className="flex flex-col gap-2">
                    {industries.map((ind, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-200">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {ind}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Benefits of Hitrace Tracking</h2>
              </div>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4 glass p-4 rounded-2xl border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-slate-200 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Gain Full Control of Your Moving World</h2>
            <p className="text-xl text-blue-200 mb-10">
              Take the first step toward smarter tracking today.
            </p>
            <MagneticEffect>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]">
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
