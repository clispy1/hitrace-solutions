'use client';
import { motion } from 'motion/react';
import { Truck, MapPin, Home, Globe } from 'lucide-react';

const services = [
  {
    title: "Fleet & Fuel Management",
    description: "Fuel represents a significant cost. Track and manage fuel usage and fleet activities with our cost-effective, dependable solutions.",
    icon: Truck,
    colSpan: "md:col-span-2 lg:col-span-2",
    color: "from-emerald-500/20 to-transparent"
  },
  {
    title: "Telematics",
    description: "Gain essential insights by obtaining precise, current information on vehicles, assets, and personnel to optimize efficiency.",
    icon: MapPin,
    colSpan: "md:col-span-1 lg:col-span-1",
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "IoT & Smart Homes",
    description: "Advanced security systems with real-time monitoring, remote access, and automated alerts to keep your home safe.",
    icon: Home,
    colSpan: "md:col-span-1 lg:col-span-1",
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Web Services",
    description: "Custom web solutions, stunning designs, e-commerce, and expert digital media management to amplify your reach.",
    icon: Globe,
    colSpan: "md:col-span-2 lg:col-span-2",
    color: "from-orange-500/20 to-transparent"
  }
];

export function Services() {
  return (
    <section className="py-24 relative z-20" id="services">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Key Functions</h2>
          <p className="text-slate-400 text-lg max-w-2xl">Comprehensive solutions designed to give you complete visibility and control over your operations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 rounded-3xl relative overflow-hidden group ${service.colSpan}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/80 flex items-center justify-center mb-6 border border-white/5 group-hover:border-emerald-500/50 transition-colors shadow-lg">
                  <service.icon className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mt-auto">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
