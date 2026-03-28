'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MagneticEffect } from '@/components/magnetic-effect';
import { AnimatedBackground } from '@/components/animated-background';
import { Check, ArrowRight, Wrench, Truck, Building2, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const pricingPlans = [
  {
    badge: "Basic Plan",
    name: "Track & Go",
    price: "10",
    period: "/ month per vehicle",
    target: "For individual vehicles or basic tracking needs.",
    icon: Truck,
    popular: false,
    features: [
      "Real-time GPS tracking",
      "Basic trip history",
      "Speed monitoring",
      "Access via mobile & web",
      "Email customer support",
      "3 Months History"
    ]
  },
  {
    badge: "Standard Plan",
    name: "Smart Fleet",
    price: "20",
    period: "/ month per vehicle",
    target: "For small to mid-sized fleets.",
    icon: ShieldCheck,
    popular: true,
    features: [
      "Everything in Basic, plus:",
      "90-day trip history",
      "Geo-fence alerts",
      "Ignition status monitoring",
      "Driver behavior alerts (speeding, harsh braking)",
      "Vehicle maintenance reminders",
      "WhatsApp & email support"
    ]
  },
  {
    badge: "Premium Plan",
    name: "Enterprise Control",
    price: "35",
    period: "/ month per vehicle",
    target: "For large fleets and logistics operations.",
    promo: "🔧 Free installation (for 10+ vehicles)",
    icon: Building2,
    popular: false,
    features: [
      "Everything in Standard, plus:",
      "Fuel level & consumption tracking",
      "CAN Bus & engine diagnostics (if supported)",
      "Remote engine shut-off",
      "Route optimization tools",
      "24/7 priority support",
      "Free device replacement (T&Cs apply)"
    ]
  }
];

export default function PricingPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const cards = gsap.utils.toArray('.pricing-card');
    gsap.fromTo(cards, 
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        stagger: 0.15, 
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
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-slate-950 to-slate-950" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Packages for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Vehicle Tracking.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Choose the perfect plan to manage your fleet efficiently. From basic tracking to enterprise-level control, we have a solution for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-12 relative z-10 pb-24" ref={cardsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card relative rounded-3xl p-8 md:p-10 transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-blue-900/40 to-slate-900/80 border-2 border-amber-400 shadow-[0_0_40px_-10px_rgba(251,191,36,0.3)] md:-mt-8' 
                    : 'glass-card border border-white/10 hover:border-blue-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-slate-950 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${plan.popular ? 'bg-amber-400 text-slate-900' : 'bg-blue-900/50 text-blue-400 border border-blue-500/20'}`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{plan.badge}</div>
                    <h3 className="text-2xl font-display font-bold text-white">{plan.name}</h3>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-display font-bold text-white">${plan.price}</span>
                  </div>
                  <div className="text-slate-400 mt-1">{plan.period}</div>
                </div>

                <p className="text-slate-300 mb-6 min-h-[48px]">{plan.target}</p>

                {plan.promo && (
                  <div className="mb-6 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-300 text-sm font-medium w-full">
                    {plan.promo}
                  </div>
                )}

                <div className="h-px w-full bg-white/10 mb-8" />

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-amber-400/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={`text-sm ${fIndex === 0 && feature.includes('Everything in') ? 'font-semibold text-white' : 'text-slate-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 ${
                  plan.popular 
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-900 shadow-lg shadow-amber-400/20' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}>
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Need a Custom Solution?</h2>
            <p className="text-xl text-blue-200 mb-10">
              Have a massive fleet or unique requirements? We can build a tailored package specifically for your business operations.
            </p>
            <MagneticEffect>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-full text-lg font-bold transition-colors shadow-xl">
                Contact Sales
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
