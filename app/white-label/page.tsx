'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MagneticEffect } from '@/components/magnetic-effect';
import { AnimatedBackground } from '@/components/animated-background';
import { 
  Monitor, Smartphone, FileText, Package, Globe, 
  CheckCircle2, TrendingUp, Rocket, Headphones, Code, ShieldCheck,
  MessageSquare, Palette, GraduationCap, ArrowRight, Layers
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const customizableFeatures = [
  {
    icon: Monitor,
    title: "Web Dashboard",
    desc: "Replace logos, colors, and company info to match your brand identity perfectly."
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    desc: "Your icon, name, and UI published directly on Google Play & the App Store."
  },
  {
    icon: FileText,
    title: "Reports",
    desc: "Generate fully branded reports featuring your company name and logo."
  },
  {
    icon: Package,
    title: "Packaging & Onboarding",
    desc: "Custom manuals, support documentation, and comprehensive branding guides."
  },
  {
    icon: Globe,
    title: "Domain & Hosting",
    desc: "Use your custom domain and email addresses for a seamless client experience."
  }
];

const targetAudience = [
  "IoT Providers & Integrators",
  "Fleet Management Companies",
  "Tech Resellers",
  "Security & Smart Home Brands",
  "Software Agencies",
  "Regional Service Providers"
];

const benefits = [
  { icon: TrendingUp, text: "Scalable infrastructure and real-time data" },
  { icon: Rocket, text: "Fast go-to-market with branded assets" },
  { icon: Headphones, text: "Dedicated reseller support & onboarding" },
  { icon: Code, text: "Optional API & third-party integrations" },
  { icon: ShieldCheck, text: "Stay ahead without building from scratch" }
];

const processSteps = [
  { icon: MessageSquare, title: "Demo & Consultation", desc: "We discuss your goals and demonstrate the platform's capabilities." },
  { icon: Palette, title: "Brand Integration", desc: "We apply your logos, colors, and domain to the platform." },
  { icon: GraduationCap, title: "Onboarding & Training", desc: "Comprehensive training for your team to manage the system." },
  { icon: Rocket, title: "Launch & Support", desc: "Go live with your branded solution, backed by our ongoing support." }
];

export default function WhiteLabelPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const cards = gsap.utils.toArray('.feature-card');
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
            src="https://picsum.photos/seed/whitelabel-hero/1920/1080" 
            alt="White Label Platform" 
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
              <Layers className="w-4 h-4" /> Reseller Platform
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Your Brand. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Our Technology.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Launch powerful tracking and IoT solutions under your own brand with Hitrace’s white label platform.
            </p>
            <MagneticEffect>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]">
                Schedule Consultation
              </button>
            </MagneticEffect>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center glass-card p-8 md:p-12 rounded-3xl border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">What is White Labeling?</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              White labeling lets you resell Hitrace’s proven technology with your own brand identity—web dashboards, mobile apps, reports, and more—all fully customizable to provide a seamless experience for your clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You Can Customize */}
      <section className="py-24 relative z-10 bg-slate-900/40" ref={cardsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What You Can Customize</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything you need to make our platform look and feel like your own.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {customizableFeatures.map((feature, index) => (
              <div key={index} className="feature-card glass-card rounded-3xl p-8 md:p-10 border-white/10 hover:border-amber-400/30 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/80 flex items-center justify-center mb-6 border border-white/5 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-colors">
                  <feature.icon className="w-7 h-7 text-slate-300 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For & Why Choose Us */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Who It's For */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Who It’s For</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/50 border border-white/5 hover:border-blue-500/30 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <span className="font-medium text-slate-200">{audience}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 md:p-10 border-amber-400/20 shadow-[0_0_50px_-12px_rgba(251,191,36,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 blur-[100px] rounded-full pointer-events-none" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 relative z-10">Why Choose Hitrace White Label?</h2>
              <ul className="space-y-6 relative z-10">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-lg text-slate-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 relative z-10 bg-slate-900/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Process</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">A streamlined path to launching your branded platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-8 rounded-3xl border-white/10 h-full flex flex-col items-center text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-500/20 mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400">{step.desc}</p>
                </div>
                {/* Connecting Line for Desktop */}
                {index !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent z-0" />
                )}
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Start Your White Label Journey</h2>
            <p className="text-xl text-blue-200 mb-10">
              Let’s Grow Together. We offer cutting-edge telematics and IoT services under your brand—backed by Hitrace’s robust platform.
            </p>
            <MagneticEffect>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)]">
                Talk to us
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
