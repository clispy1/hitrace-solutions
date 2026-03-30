'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MagneticEffect } from '@/components/magnetic-effect';
import { AnimatedBackground } from '@/components/animated-background';
import { Cta3DBackground } from '@/components/cta-3d';
import { 
  Truck, Building2, Package, Briefcase, Tractor, 
  Recycle, Ambulance, Pill, Droplet, ArrowRight, Factory
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const industries = [
  {
    title: "Transport & Logistics",
    desc: "Manage your drivers and vehicles with ease, as well as ensure compliance and safety.",
    icon: Truck,
    image: "https://picsum.photos/seed/transport/800/600"
  },
  {
    title: "Construction",
    desc: "Protect and maintain your assets, easily calculate costs, and manage workers.",
    icon: Building2,
    image: "https://picsum.photos/seed/construction/800/600"
  },
  {
    title: "Courier & Delivery",
    desc: "Track your vehicles' live locations, optimise fuel consumption, fleet efficiency, and size.",
    icon: Package,
    image: "https://picsum.photos/seed/courier/800/600"
  },
  {
    title: "Service Providers",
    desc: "Make work easier for every department – managers, field employees, and accountants.",
    icon: Briefcase,
    image: "https://picsum.photos/seed/services/800/600"
  },
  {
    title: "Agriculture",
    desc: "Increase safety and efficiency, speed up administrative tasks and maintenance.",
    icon: Tractor,
    image: "https://picsum.photos/seed/agriculture/800/600"
  },
  {
    title: "Waste Management",
    desc: "Achieve better sustainability, fewer accidents, and more efficient back-office operations.",
    icon: Recycle,
    image: "https://picsum.photos/seed/waste/800/600"
  },
  {
    title: "Emergency Services",
    desc: "Enhance Emergency Response, Optimise Route, & Monitor Driver Behaviour",
    icon: Ambulance,
    image: "https://picsum.photos/seed/emergency/800/600"
  },
  {
    title: "Pharmaceutical",
    desc: "Control Temperature, Manage Drivers, & Track Vehicle in Real-time",
    icon: Pill,
    image: "https://picsum.photos/seed/pharma/800/600"
  },
  {
    title: "Oil & Gas",
    desc: "Control Temperature in Real-Time, Improve Visibility, & Safeguard Cargo",
    icon: Droplet,
    image: "https://picsum.photos/seed/oilgas/800/600"
  }
];

export default function IndustriesPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const cards = gsap.utils.toArray('.industry-card');
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
            src="https://picsum.photos/seed/industries-hero/1920/1080" 
            alt="Industries We Serve" 
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
              <Factory className="w-4 h-4" /> Tailored Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Empowering Every <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Industry We Serve.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              From logistics and construction to healthcare and agriculture, our advanced tracking and IoT solutions are designed to meet the unique challenges of your sector.
            </p>
            <MagneticEffect>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]">
                Find Your Solution
              </button>
            </MagneticEffect>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-24 relative z-10" ref={cardsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Industries We Serve</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Discover how Hitrace can transform your operations with industry-specific tools and insights.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="industry-card glass-card rounded-3xl relative overflow-hidden group min-h-[320px] flex flex-col justify-end border-white/10 hover:border-amber-400/30 transition-colors"
              >
                {/* Background Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

                <div className="relative z-10 p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-blue-900/80 flex items-center justify-center mb-auto border border-white/10 group-hover:border-amber-400/50 transition-colors shadow-lg backdrop-blur-md">
                    <industry.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <div className="mt-8">
                    <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">{industry.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{industry.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Ready to Optimize Your Industry?</h2>
            <p className="text-xl text-blue-200 mb-10">
              Let&apos;s discuss how our tailored solutions can improve your efficiency, safety, and bottom line.
            </p>
            <MagneticEffect>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)]">
                Talk to an Expert
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
