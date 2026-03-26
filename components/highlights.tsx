'use client';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  {
    title: "Perfect fit for any industry",
    description: "The Hitrace fleet management software fits diverse projects, from real-time fleet tracking to full digitalization and business intelligence. We offer customization for local delivery, agriculture, and vehicle leasing.",
    image: "https://picsum.photos/seed/industry-logistics/800/600",
  },
  {
    title: "Seamless API integrations",
    description: "Seamlessly transmit processed data to visualization tools and external systems through APIs. Build tailored solutions and integrate with ERP, BI, and accounting systems.",
    image: "https://picsum.photos/seed/api-code/800/600",
  },
  {
    title: "Hardware-agnostic solution",
    description: "Hitrace integrates with most GPS device models — from small scooter trackers to complex devices with multiple inputs, CAN bus, and OBD support.",
    image: "https://picsum.photos/seed/hardware-gps/800/600",
  },
  {
    title: "Technical consulting & Community",
    description: "Access technical support in five languages, project implementation assistance, and expert-led training. Join the largest network of telematics and IoT experts for knowledge exchange.",
    image: "https://picsum.photos/seed/community-tech/800/600",
  }
];

export function Highlights() {
  return (
    <section className="py-24 relative z-20 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Product Highlights</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Discover the benefits that make Hitrace the ultimate choice for your business.</p>
        </motion.div>

        <div className="space-y-24">
          {highlights.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
              
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-6"
              >
                <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-6 border border-blue-500/20">
                  <CheckCircle2 className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white">{item.title}</h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3 pt-4">
                  {/* Decorative list items to add texture */}
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Advanced Analytics
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Real-time Monitoring
                  </li>
                </ul>
              </motion.div>

              {/* Image / 3D Placeholder */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card border-white/10 p-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent z-10 rounded-3xl pointer-events-none" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                  {/* Floating UI Elements Mockup */}
                  <div className="absolute -bottom-6 -left-6 w-48 h-32 glass rounded-xl border border-white/20 shadow-2xl z-20 hidden md:block animate-pulse" style={{ animationDuration: '4s' }} />
                  <div className="absolute -top-6 -right-6 w-32 h-32 glass rounded-full border border-white/20 shadow-2xl z-20 hidden md:block animate-pulse" style={{ animationDuration: '5s' }} />
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}