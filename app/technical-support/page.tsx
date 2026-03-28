'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MagneticEffect } from '@/components/magnetic-effect';
import { AnimatedBackground } from '@/components/animated-background';
import { Cta3DBackground } from '@/components/cta-3d';
import { 
  LifeBuoy, MessageSquare, Phone, Mail, 
  FileText, BookOpen, ArrowRight, HelpCircle,
  Ticket, Clock
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const supportChannels = [
  {
    icon: Phone,
    title: "Phone Support",
    desc: "Speak directly with our technical experts for immediate assistance.",
    action: "Call Us",
    detail: "+1 (800) 123-4567",
    color: "blue"
  },
  {
    icon: Mail,
    title: "Email Support",
    desc: "Send us your queries and we'll get back to you within 24 hours.",
    action: "Email Us",
    detail: "support@hitrace.com",
    color: "amber"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    desc: "Chat with our support team in real-time for quick resolutions.",
    action: "Start Chat",
    detail: "Available 24/7",
    color: "green"
  },
  {
    icon: Ticket,
    title: "Submit a Ticket",
    desc: "Log a detailed support request through our customer portal.",
    action: "Open Portal",
    detail: "Track your requests",
    color: "purple"
  }
];

const resources = [
  {
    icon: BookOpen,
    title: "Knowledge Base",
    desc: "Browse our comprehensive library of articles, guides, and tutorials."
  },
  {
    icon: FileText,
    title: "API Documentation",
    desc: "Detailed documentation for developers integrating with our platform."
  },
  {
    icon: HelpCircle,
    title: "Community Forum",
    desc: "Connect with other users, share tips, and find solutions together."
  }
];

export default function TechnicalSupportPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const cards = gsap.utils.toArray('.support-card');
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

    const resourceCards = gsap.utils.toArray('.resource-card');
    gsap.fromTo(resourceCards, 
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: resourcesRef.current,
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
            src="https://picsum.photos/seed/techsupport/1920/1080" 
            alt="Technical Support" 
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
              <LifeBuoy className="w-4 h-4" /> 24/7 Assistance
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              We're Here to <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Help You Succeed.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get the technical support and resources you need to keep your operations running smoothly. Our expert team is always ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-24 relative z-10 bg-slate-900/40" ref={cardsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Contact Support</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Choose the channel that works best for you. We're available around the clock.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {supportChannels.map((channel, index) => (
              <div key={index} className="support-card glass-card rounded-3xl p-8 border-white/10 hover:border-blue-500/30 transition-colors group flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-colors
                  ${channel.color === 'blue' ? 'bg-blue-900/30 border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20' : ''}
                  ${channel.color === 'amber' ? 'bg-amber-900/30 border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20' : ''}
                  ${channel.color === 'green' ? 'bg-emerald-900/30 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20' : ''}
                  ${channel.color === 'purple' ? 'bg-purple-900/30 border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20' : ''}
                `}>
                  <channel.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-white">{channel.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 flex-grow">{channel.desc}</p>
                
                <div className="mt-auto pt-6 border-t border-white/10">
                  <div className="text-sm text-slate-500 mb-2">{channel.detail}</div>
                  <button className="flex items-center gap-2 text-white font-semibold group-hover:text-amber-400 transition-colors">
                    {channel.action} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Service Resources */}
      <section className="py-24 relative z-10" ref={resourcesRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Self-Service Resources</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Find answers quickly with our extensive library of documentation, guides, and community discussions.
              </p>
              <MagneticEffect>
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold transition-colors border border-white/10">
                  Visit Help Center
                </button>
              </MagneticEffect>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="resource-card glass-card rounded-2xl p-6 border-white/10 hover:border-amber-400/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-4 border border-white/5 group-hover:bg-amber-400/10 transition-colors">
                    <resource.icon className="w-6 h-6 text-slate-300 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{resource.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SLA Section */}
      <section className="py-20 relative z-10 overflow-hidden border-y border-blue-500/10">
        <div className="absolute inset-0 bg-slate-950/80" />
        <Cta3DBackground />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 mb-6">
            <Clock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">Our Service Level Agreement</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            We guarantee a 99.9% uptime and a response time of under 1 hour for critical issues. Your operational continuity is our top priority.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
