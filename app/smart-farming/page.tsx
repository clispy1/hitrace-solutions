'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MagneticEffect } from '@/components/magnetic-effect';
import { AnimatedBackground } from '@/components/animated-background';
import { Cta3DBackground } from '@/components/cta-3d';
import { 
  Tractor, Database, Calculator, Network, 
  Map, List, CheckSquare, FileText, 
  ArrowRight, Sprout 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  { icon: Tractor, title: "Management of specialized vehicles", desc: "Clients receive precise information regarding the quality and quantity of field operations, along with details about the activities of agricultural vehicles and their operators." },
  { icon: Database, title: "Dependable data", desc: "Hitrace assesses the field cultivations of intricate shapes, accounting for omissions, overlaps, and uncultivated sections within the fields." },
  { icon: Calculator, title: "Automated computations", desc: "The solution determines cultivated field areas, fuel usage, distance traveled, speed, and various other metrics, allowing employees to save time." },
  { icon: Network, title: "API connectivity", desc: "Export data from Hitrace and utilize it in any accounting systems through API integration." },
];

const steps = [
  { icon: Map, title: "Import", desc: "Import geofences as fields; configure trailers, drivers, and units in Hitrace for future use." },
  { icon: List, title: "Catalog", desc: "Complete the catalogs for crops, operations, and crop rotation." },
  { icon: CheckSquare, title: "Verify", desc: "Accept or reject the identified field cultivations." },
  { icon: FileText, title: "Report", desc: "Create and export detailed reports on field operations." },
];

export default function SmartFarmingPage() {
  const benefitsRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const benefitCards = gsap.utils.toArray('.benefit-card');
    gsap.fromTo(benefitCards, 
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        }
      }
    );

    const stepCards = gsap.utils.toArray('.step-card');
    gsap.fromTo(stepCards, 
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: benefitsRef });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden relative">
      <AnimatedBackground color="emerald" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://picsum.photos/seed/smart-farming/1920/1080" 
            alt="Smart Farming" 
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-6">
              <Sprout className="w-4 h-4" /> Agribusiness Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Smart Farming <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">with Hitrace.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Straightforward yet powerful for the agribusiness sector, enabling the management of field activities through telematics data. Gain clear insights into fields, crop rotation, and operations.
            </p>
            <MagneticEffect>
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]">
                Book a Demo
              </button>
            </MagneticEffect>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative z-10" ref={benefitsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Choose Hitrace for Agriculture?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Efficiently plan and enhance your agribusiness processes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="benefit-card glass-card rounded-3xl p-8 border-white/10 hover:border-emerald-500/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-900/30 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative z-10 bg-slate-900/30" ref={stepsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Fleet digitalization and GPS system in agriculture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 z-0" />
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="step-card relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-slate-950 flex items-center justify-center border-2 border-emerald-500/30 mb-6 shadow-xl shadow-emerald-900/20">
                  <step.icon className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden glass-card border-emerald-500/20 shadow-2xl shadow-emerald-900/20 relative flex flex-col md:flex-row items-center">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/10 to-transparent z-0" />
                <div className="w-full md:w-1/2 relative z-10 h-64 md:h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://picsum.photos/seed/smart-farming-features/800/600" 
                    alt="Agricultural GPS System" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </div>
                <div className="w-full md:w-1/2 p-10 md:p-16 relative z-10 text-left">
                  <Sprout className="w-16 h-16 text-emerald-400 mb-6" />
                  <h3 className="text-3xl font-display font-bold text-white mb-6">Features of the Hitrace agricultural GPS system</h3>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Importing and creating fields. Management of crop rotation, a catalog of crops, and a comprehensive history of cultivation for each field.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/80" />
        <Cta3DBackground />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Ready to modernize your farm?</h2>
            <p className="text-xl text-emerald-100/80 mb-10">
              Start tracking and optimizing your agricultural operations with Hitrace today.
            </p>
            <MagneticEffect>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]">
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
