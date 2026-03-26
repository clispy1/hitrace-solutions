'use client';
import { useRef } from 'react';
import { motion } from 'motion/react';
import { Truck, MapPin, Home, Globe } from 'lucide-react';
import { ServiceGraphic } from './service-graphic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Fleet & Fuel Management",
    description: "Fuel represents a significant cost. Track and manage fuel usage and fleet activities with our cost-effective, dependable solutions.",
    icon: Truck,
    colSpan: "md:col-span-2",
    image: "https://picsum.photos/seed/fleet-trucks/800/600",
    type: "fleet"
  },
  {
    title: "Telematics",
    description: "Gain essential insights by obtaining precise, current information on vehicles, assets, and personnel to optimize efficiency.",
    icon: MapPin,
    colSpan: "md:col-span-1",
    image: "https://picsum.photos/seed/telematics-map/800/600",
    type: "telematics"
  },
  {
    title: "IoT & Smart Homes",
    description: "Advanced security systems with real-time monitoring, remote access, and automated alerts to keep your home safe.",
    icon: Home,
    colSpan: "md:col-span-1",
    image: "https://picsum.photos/seed/smarthome-iot/800/600",
    type: "iot"
  },
  {
    title: "Web Services",
    description: "Custom web solutions, stunning designs, e-commerce, and expert digital media management to amplify your reach.",
    icon: Globe,
    colSpan: "md:col-span-2",
    image: "https://picsum.photos/seed/web-code/800/600",
    type: "web"
  }
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.service-card');
    
    gsap.fromTo(cards, 
      { 
        y: 100, 
        opacity: 0,
        rotationX: -15,
        transformPerspective: 1000
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 relative z-20" id="services">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`service-card glass-card rounded-3xl relative overflow-hidden group min-h-[320px] flex flex-col justify-end ${service.colSpan}`}
            >
              {/* Background Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

              {/* Animated Graphic */}
              <ServiceGraphic type={service.type} />

              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-blue-900/80 flex items-center justify-center mb-auto border border-white/10 group-hover:border-amber-400/50 transition-colors shadow-lg backdrop-blur-md">
                  <service.icon className="w-7 h-7 text-amber-400" />
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}