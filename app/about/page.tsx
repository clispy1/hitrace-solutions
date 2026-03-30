'use client';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/about/1920/1080')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
            >
              Revolutionizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Fleet Management</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              Hitrace Solutions is dedicated to providing real-time insights and actionable data that drive smarter decisions, reduce costs, and improve safety for businesses worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
              <Target className="w-12 h-12 text-blue-400 mb-6" />
              <h2 className="text-3xl font-display font-bold text-white mb-4">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                To empower businesses with cutting-edge telematics and IoT solutions, enabling them to optimize operations, ensure asset security, and achieve unprecedented efficiency in their daily workflows.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full" />
              <Shield className="w-12 h-12 text-amber-400 mb-6" />
              <h2 className="text-3xl font-display font-bold text-white mb-4">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                To be the global leader in smart tracking and fleet management, creating a seamlessly connected world where every asset is visible, secure, and operating at peak performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Why Choose Hitrace</h2>
            <p className="text-slate-400 text-lg">We build solutions that scale with your business, backed by industry-leading technology and exceptional support.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Innovation First', desc: 'Constantly evolving our tech stack to provide the most advanced tracking solutions.' },
              { title: 'Reliability', desc: '99.9% uptime guarantee ensuring you never lose sight of your valuable assets.' },
              { title: 'Customer Centric', desc: '24/7 dedicated support team ready to assist you with any technical challenges.' },
              { title: 'Data Security', desc: 'Enterprise-grade encryption keeping your fleet and business data strictly confidential.' }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
