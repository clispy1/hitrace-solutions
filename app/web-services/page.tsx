'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MagneticEffect } from '@/components/magnetic-effect';
import { AnimatedBackground } from '@/components/animated-background';
import { Cta3DBackground } from '@/components/cta-3d';
import { 
  Globe, AppWindow, ShoppingCart, Network, Wrench,
  ShoppingBag, Truck, HeartPulse, Rocket, Building2, GraduationCap,
  Search, PenTool, Code2, TestTube, LifeBuoy,
  Users, RefreshCw, TrendingUp, Server, MessageSquare, ArrowRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const coreServices = [
  {
    icon: Globe,
    title: "Custom Website Development",
    desc: "Responsive, SEO-ready websites built to engage and convert."
  },
  {
    icon: AppWindow,
    title: "Web Application Development",
    desc: "Powerful, cloud-based apps designed for scale and performance."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Fully integrated online stores with secure payments and real-time inventory."
  },
  {
    icon: Network,
    title: "API Development & Integration",
    desc: "Connect your systems with scalable, secure REST and GraphQL APIs."
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing updates, security patches, and performance monitoring."
  }
];

const industries = [
  { icon: ShoppingBag, name: "E-commerce & Retail" },
  { icon: Truck, name: "Logistics & Transportation" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Rocket, name: "Startups & Tech Firms" },
  { icon: Building2, name: "Real Estate" },
  { icon: GraduationCap, name: "Education" }
];

const processSteps = [
  { icon: Search, title: "Discovery", desc: "Understanding your goals and audience." },
  { icon: PenTool, title: "Design", desc: "Wireframes and prototypes for clear vision." },
  { icon: Code2, title: "Development", desc: "Clean, modern code using best practices." },
  { icon: TestTube, title: "Testing", desc: "Speed, security, and cross-device compatibility." },
  { icon: Rocket, title: "Launch", desc: "Go live with confidence and precision." },
  { icon: LifeBuoy, title: "Support", desc: "We’re here to help post-launch." }
];

const whyChooseUs = [
  { icon: Users, text: "Experienced full-stack developers and designers" },
  { icon: RefreshCw, text: "Agile, client-focused approach" },
  { icon: TrendingUp, text: "Scalable solutions for growth" },
  { icon: Server, text: "High-speed hosting and top-tier security" },
  { icon: MessageSquare, text: "Transparent communication and timelines" }
];

export default function WebServicesPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const cards = gsap.utils.toArray('.service-card');
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
            src="https://picsum.photos/seed/web-services-hero/1920/1080" 
            alt="Web Development Services" 
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
              <Code2 className="w-4 h-4" /> Web Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Build, Launch, and <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Scale with Confidence.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Custom web development, fast deployment, and secure, scalable solutions tailored to your business goals.
            </p>
            <MagneticEffect>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]">
                Get Started
              </button>
            </MagneticEffect>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 relative z-10" ref={cardsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Core Web Services</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Comprehensive web solutions to power your digital presence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {coreServices.map((service, index) => (
              <div key={index} className="service-card glass-card rounded-3xl p-8 md:p-10 border-white/10 hover:border-amber-400/30 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/80 flex items-center justify-center mb-6 border border-white/5 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-colors">
                  <service.icon className="w-7 h-7 text-slate-300 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 relative z-10 bg-slate-900/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How We Work</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">A proven process to deliver excellence from concept to launch.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-500/20 text-amber-400 font-bold z-10 shadow-lg">
                    {index + 1}
                  </div>
                  {index !== processSteps.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-blue-500/20 to-transparent mt-2 hidden md:block" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <step.icon className="w-5 h-5 text-blue-400" /> {step.title}
                  </h3>
                  <p className="text-slate-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Why Choose Us */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Industries */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Industries We Serve</h2>
              <p className="text-slate-400 text-lg mb-8">We tailor web solutions for a diverse range of industries:</p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/50 border border-white/5 hover:border-blue-500/30 transition-colors">
                    <industry.icon className="w-6 h-6 text-blue-400" />
                    <span className="font-medium text-slate-200">{industry.name}</span>
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
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 relative z-10">Why Choose Hitrace Web Services</h2>
              <ul className="space-y-6 relative z-10">
                {whyChooseUs.map((item, index) => (
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
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Let’s Build Something Great Together</h2>
            <p className="text-xl text-blue-200 mb-10">
              From concept to code, we deliver web solutions that drive real business results.
            </p>
            <MagneticEffect>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-900 rounded-full text-lg font-bold transition-colors shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)]">
                Book a demo
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
