'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MagneticEffect } from '@/components/magnetic-effect';
import { AnimatedBackground } from '@/components/animated-background';
import { Cta3DBackground } from '@/components/cta-3d';
import { 
  Users, Clock, ShieldAlert, TrendingDown, 
  ListChecks, CalendarClock, PlusCircle, FileBarChart,
  Database, ArrowRight, Wrench
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  {
    icon: Users,
    title: "Oversee multiple fleets",
    desc: "Establish a user hierarchy and allocate responsibilities among employees using access permissions."
  },
  {
    icon: Clock,
    title: "Respond promptly",
    desc: "Evaluate the fleet&apos;s condition—overdue services, financial aspects, and time usage. These factors can be enhanced through timely responses."
  },
  {
    icon: ShieldAlert,
    title: "Reduce the risk",
    desc: "Organize the workload considering the number of vehicles that are currently inoperable or will soon require servicing."
  },
  {
    icon: TrendingDown,
    title: "Evaluate expenses",
    desc: "Invest in high-mileage vehicles that have not experienced breakdowns, and dispose of those that are non-functional and remain in the fleet yard."
  }
];

const operations = [
  { icon: ListChecks, title: "Compile a list of vehicles", desc: "Easily onboard your entire fleet into the system." },
  { icon: CalendarClock, title: "Define service frequency", desc: "Set up maintenance intervals based on mileage or time." },
  { icon: PlusCircle, title: "Add services", desc: "Log specific maintenance tasks, parts, and associated costs." },
  { icon: FileBarChart, title: "Examine procedures", desc: "Use comprehensive reports and alerts to monitor the maintenance lifecycle." },
];

export default function FleetManagementPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const cards = gsap.utils.toArray('.benefit-card');
    gsap.fromTo(cards, 
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: cardsRef });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden relative">
      <AnimatedBackground color="blue" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://picsum.photos/seed/fleet-management-hero/1920/1080" 
            alt="Fleet Management Dashboard" 
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
              <Wrench className="w-4 h-4" /> Maintenance Solution
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Intelligent <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Fleet Management.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Planning, monitoring, and expense tracking. Lower operational costs, prevent major breakdowns, and minimize time spent in service stations. Oversee all types of services and expenses related to individual spare parts, vehicles, and mileage performance.
            </p>
            <MagneticEffect>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]">
                Optimize Your Fleet
              </button>
            </MagneticEffect>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative z-10" ref={cardsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Choose Hitrace?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Take full control of your fleet&apos;s health and operational expenses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card glass-card rounded-3xl p-8 md:p-10 border-white/10 hover:border-amber-400/30 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/80 flex items-center justify-center mb-6 border border-white/5 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-colors">
                  <benefit.icon className="w-7 h-7 text-slate-300 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operation Section */}
      <section className="py-24 relative z-10 bg-slate-900/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Operation of the System</h2>
              <p className="text-slate-400 text-lg mb-10">A streamlined workflow designed to keep your vehicles on the road and out of the shop.</p>
              
              <div className="space-y-8">
                {operations.map((op, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-500/20 text-amber-400 font-bold z-10">
                        {index + 1}
                      </div>
                      {index !== operations.length - 1 && (
                        <div className="w-px h-full bg-gradient-to-b from-blue-500/20 to-transparent mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                        <op.icon className="w-5 h-5 text-blue-400" /> {op.title}
                      </h3>
                      <p className="text-slate-400">{op.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass-card border-white/10 p-2 shadow-2xl shadow-blue-900/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://picsum.photos/seed/fleet-dashboard/800/800" 
                  alt="System Dashboard" 
                  className="w-full h-full object-cover rounded-2xl opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10 rounded-3xl pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Highlight */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-16 border-amber-400/20 shadow-[0_0_50px_-12px_rgba(251,191,36,0.15)] max-w-6xl mx-auto relative overflow-hidden flex flex-col md:flex-row items-center gap-10"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="flex-1 text-center md:text-left relative z-10">
              <Database className="w-16 h-16 text-amber-400 mx-auto md:mx-0 mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">Capabilities of the System</h2>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                Availability of comprehensive data regarding <strong className="text-white font-semibold">mileage</strong>, <strong className="text-white font-semibold">engine hours</strong>, <strong className="text-white font-semibold">services</strong>, and detailed information for each individual vehicle in your fleet.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative z-10">
              <div className="aspect-video rounded-2xl overflow-hidden border border-amber-400/20 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://picsum.photos/seed/fleet-capabilities/800/600" 
                  alt="System Capabilities" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Ready to Lower Operational Costs?</h2>
            <p className="text-xl text-blue-200 mb-10">
              Implement Hitrace&apos;s fleet maintenance management system today.
            </p>
            <MagneticEffect>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)]">
                Start Your Free Trial
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
