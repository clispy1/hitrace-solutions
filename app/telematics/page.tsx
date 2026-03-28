'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MagneticEffect } from '@/components/magnetic-effect';
import { AnimatedBackground } from '@/components/animated-background';
import { Cta3DBackground } from '@/components/cta-3d';
import { 
  MapPin, Wrench, ShieldAlert, Fuel, History, 
  BarChart, Video, Map, Settings, Wifi, 
  LayoutDashboard, TrendingUp, CheckCircle2, Quote,
  ArrowRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  { icon: MapPin, title: "Live GPS Tracking", desc: "Monitor every vehicle’s real-time location." },
  { icon: Wrench, title: "Vehicle Diagnostics", desc: "Get instant alerts for engine faults, maintenance needs, and fuel levels." },
  { icon: ShieldAlert, title: "Driver Behavior Monitoring", desc: "Track speed, harsh braking, acceleration, and idling." },
  { icon: Fuel, title: "Fuel Monitoring", desc: "Monitor every vehicle’s fuel consumption rate." },
  { icon: History, title: "Trip History & Playback", desc: "Review route histories with speed and stop reports." },
  { icon: BarChart, title: "Custom Reports", desc: "Generate automated insights for performance, safety, and compliance." },
  { icon: Video, title: "Ai Video Monitoring", desc: "Utilize cutting-edge AI-driven video technology to safeguard your most valuable assets." },
  { icon: Map, title: "Geofencing", desc: "Create custom zones and receive instant exit/entry notifications." },
];

const steps = [
  { icon: Settings, title: "Install", desc: "Install telematics devices in your vehicles" },
  { icon: Wifi, title: "Transmit", desc: "Transmit data to Hitrace’s secure cloud" },
  { icon: LayoutDashboard, title: "Access", desc: "Access insights from your custom dashboard" },
  { icon: TrendingUp, title: "Take Action", desc: "Take action to reduce risks and boost performance" },
];

const industries = [
  "Logistics & Transport",
  "Public Transportation",
  "Construction & Equipment Fleets",
  "Corporate Vehicle Management",
  "Emergency Services"
];

const benefits = [
  "Lower fuel and maintenance costs",
  "Improve driver safety and compliance",
  "Reduce downtime with proactive maintenance",
  "Boost productivity with smarter routing",
  "Enhance customer satisfaction through ETA accuracy"
];

export default function TelematicsPage() {
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Horizontal scroll for the "How it Works" steps
    const stepCards = gsap.utils.toArray('.step-card');
    
    if (window.innerWidth > 768) {
      gsap.to(stepCards, {
        xPercent: -100 * (stepCards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: stepsContainerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (stepCards.length - 1),
          end: () => "+=" + (stepsContainerRef.current?.offsetWidth || 1000),
        }
      });
    }
  }, { scope: stepsContainerRef });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden relative">
      <AnimatedBackground color="blue" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://picsum.photos/seed/telematics-hero/1920/1080" 
            alt="Telematics Dashboard" 
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-sm font-semibold tracking-wide uppercase mb-6">
              Advanced Telematics
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Smarter Vehicles. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Better Decisions.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Harness real-time data with Hitrace’s advanced telematics solutions to improve fleet performance, safety, and operational efficiency.
            </p>
            <MagneticEffect>
              <button className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)]">
                Request a Demo
              </button>
            </MagneticEffect>
          </motion.div>
        </div>
      </section>

      {/* What is Telematics */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card rounded-3xl p-8 md:p-16 border-white/10 shadow-2xl shadow-blue-900/10 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/10 blur-[100px] rounded-full pointer-events-none" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">What is Telematics?</h2>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Telematics is the fusion of telecommunications and informatics—delivering data from your vehicles to your fingertips. 
                With Hitrace, you get <strong className="text-white font-semibold">real-time insights</strong> into your fleet’s movement, health, and driver behavior.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 relative z-10 bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Key Features</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything you need to manage your fleet effectively.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-amber-400/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-900/50 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-400 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (Horizontal Scroll on Desktop) */}
      <section ref={stepsContainerRef} className="py-24 relative z-10 overflow-hidden md:h-screen md:flex md:items-center bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:absolute md:top-24 md:left-0 md:right-0 md:mb-0 z-20 pointer-events-none">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-slate-400 text-lg">Four simple steps to total fleet control.</p>
          </div>

          <div className="flex flex-col md:flex-row md:w-[300vw] lg:w-[200vw] gap-6 md:gap-0 md:pt-32">
            {steps.map((step, index) => (
              <div key={index} className="step-card md:w-screen md:px-12 lg:px-24 flex items-center justify-center">
                <div className="glass-card rounded-3xl p-8 md:p-12 border-white/10 w-full max-w-2xl relative overflow-hidden group">
                  <div className="absolute -right-10 -top-10 text-9xl font-display font-black text-white/5 group-hover:text-amber-400/5 transition-colors">
                    0{index + 1}
                  </div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-24 h-24 rounded-full bg-blue-600/20 flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                      <step.icon className="w-10 h-10 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-lg text-slate-300">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Benefits Split */}
      <section className="py-24 relative z-10 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image & Industries */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden glass-card border-white/10 p-2 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://picsum.photos/seed/truck-trailers/1920/1080" 
                  alt="Truck vehicle with trailers" 
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent rounded-3xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Industries We Serve</h3>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((ind, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-200">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Benefits */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Benefits of Hitrace Telematics</h2>
                <p className="text-slate-400 text-lg">Transform your operations with measurable ROI and enhanced safety protocols.</p>
              </div>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 glass p-4 rounded-2xl border border-white/5"
                  >
                    <div className="w-8 h-8 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-slate-200 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-16 border-white/10 text-center relative overflow-hidden"
          >
            <Quote className="absolute top-8 left-8 w-24 h-24 text-white/5 rotate-180 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-display font-medium text-white leading-relaxed mb-8 italic">
                “The telematics insights from Hitrace helped us cut fuel costs by 25% and drastically improved our driver performance.”
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold text-white">
                  TE
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-lg">Tayo E.</div>
                  <div className="text-amber-400 text-sm uppercase tracking-wider font-medium">Logistics Supervisor</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-blue-950/80" />
        <Cta3DBackground />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Unlock the Full Potential of Your Fleet</h2>
            <p className="text-xl text-blue-200 mb-10">
              Let’s transform the way you monitor, manage, and maintain your vehicles.
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
