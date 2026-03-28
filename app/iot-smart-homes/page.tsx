'use client';

import { motion } from 'motion/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MagneticEffect } from '@/components/magnetic-effect';
import { AnimatedBackground } from '@/components/animated-background';
import { 
  Lightbulb, Smartphone, Zap, Shield, Settings, 
  Cloud, Mic, Repeat, CheckCircle2, Quote, ArrowRight, Home 
} from 'lucide-react';

const offers = [
  { icon: Lightbulb, title: "Smart Automation", desc: "Schedule lighting, climate, and appliances to suit your lifestyle." },
  { icon: Smartphone, title: "Remote Control", desc: "Manage devices from your phone—anytime, anywhere." },
  { icon: Zap, title: "Energy Efficiency", desc: "Track energy usage and reduce utility costs." },
  { icon: Shield, title: "Home Security", desc: "Live surveillance, smart locks, and real-time alerts to keep your home secure." },
];

const steps = [
  { icon: Settings, title: "Install", desc: "Install smart sensors, cameras, and controllers." },
  { icon: Cloud, title: "Connect", desc: "Connect via secure cloud-powered IoT platform." },
  { icon: Mic, title: "Control", desc: "Control and monitor from your phone or voice assistant." },
  { icon: Repeat, title: "Automate", desc: "Automate based on your preferences and routines." },
];

const reasons = [
  "Simple setup and seamless integration",
  "Scalable for homes and smart buildings",
  "End-to-end support and customization",
  "Secure, encrypted device communication",
  "Affordable, future-ready technology"
];

export default function IoTSmartHomesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden relative">
      <AnimatedBackground color="blue" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://picsum.photos/seed/smarthome-hero/1920/1080" 
            alt="Smart Home Interior" 
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
              <Home className="w-4 h-4" /> IoT Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Smarter Living <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Begins Here.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              IoT-powered smart home solutions for safety, convenience, and total control—wherever you are.
            </p>
            <MagneticEffect>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]">
                Request a Demo
              </button>
            </MagneticEffect>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What We Offer</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Complete control over your living environment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 border-white/10 hover:border-blue-500/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-900/50 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-600/20 transition-colors">
                  <offer.icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-white">{offer.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{offer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative z-10 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">A seamless journey to a smarter home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 z-0" />
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-slate-950 flex items-center justify-center border-2 border-blue-500/30 mb-6 shadow-xl shadow-blue-900/20">
                  <step.icon className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose & Testimonial */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why Choose Hitrace IoT & Smart Home Solutions?</h2>
              <ul className="space-y-4">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-4 glass p-4 rounded-2xl border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-slate-200 text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="aspect-video rounded-3xl overflow-hidden glass-card border-white/10 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://picsum.photos/seed/smart-home-interior/800/600" 
                  alt="Smart Home Interior" 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" 
                />
              </div>

              <div className="glass-card rounded-3xl p-8 md:p-12 border-blue-500/20 shadow-[0_0_40px_-10px_rgba(37,99,235,0.15)] relative overflow-hidden">
                <Quote className="absolute top-6 left-6 w-20 h-20 text-white/5 rotate-180 pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-2xl font-display font-medium text-white leading-relaxed mb-8 italic">
                    “Hitrace made our home smart—easy to control and totally secure.”
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-xl font-bold text-white">
                      AK
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">Amara K.</div>
                      <div className="text-blue-400 text-sm uppercase tracking-wider font-medium">Homeowner</div>
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
        <div className="absolute inset-0 bg-blue-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Ready to Make Your Home Smarter?</h2>
            <p className="text-xl text-blue-200 mb-10">
              Connect with our team to build a custom smart home system today.
            </p>
            <MagneticEffect>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]">
                Contact Us
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
