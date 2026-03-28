'use client';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { MagneticEffect } from './magnetic-effect';

export function Footer() {
  return (
    <footer className="relative z-20 pt-24 pb-12 overflow-hidden">
      {/* Massive CTA Section */}
      <div className="container px-4 md:px-6 mx-auto mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-blue-700 p-12 md:p-20 text-center shadow-2xl shadow-blue-900/50"
        >
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1000/1000')] opacity-10 mix-blend-overlay" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Interested in a tracker installation?
            </h2>
            <p className="text-xl text-blue-100 mb-10 font-medium">
              Talk to us today and let&apos;s optimize your business processes.
            </p>
            <MagneticEffect className="inline-block">
              <button className="px-10 py-5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-full transition-all flex items-center justify-center gap-2 mx-auto group text-lg shadow-2xl shadow-amber-400/20">
                Request a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticEffect>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-[2px] h-6 items-center">
                <div className="w-1 h-full bg-amber-400 rounded-sm" />
                <div className="w-1 h-full bg-amber-400 rounded-sm relative">
                  <div className="absolute top-1/2 left-0 w-3 h-1 bg-amber-400 -translate-y-1/2" />
                </div>
                <div className="w-1 h-full bg-amber-400 rounded-sm ml-2" />
                <div className="w-1 h-full bg-amber-400 rounded-sm" />
              </div>
              <span className="font-display font-black text-xl tracking-wide text-blue-600 uppercase">Hitrace</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              To revolutionize the way businesses manage their fleets, providing real-time insights and actionable data that drive smarter decisions, reduce costs, and improve safety.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '#about' },
                { name: 'Blog', href: '#blog' },
                { name: 'Technical Support', href: '/technical-support' },
                { name: 'Book a Demo', href: '#demo' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">What We Do</h4>
            <ul className="space-y-4">
              {[
                { name: 'Fleet Management', href: '/fleet-management' },
                { name: 'Tracking Solutions', href: '/tracking-solutions' },
                { name: 'Fuel Monitoring', href: '/fuel-monitoring' },
                { name: 'IoT and Smart Homes', href: '/iot-smart-homes' },
                { name: 'Web Services', href: '/web-services' },
                { name: 'Driver Behavior', href: '/driver-behavior' },
                { name: 'White Label', href: '/white-label' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Kasoa, Human Rights Road</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <span>(+233) 20-794-9676</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <a href="mailto:hello@hitracesolutions.com" className="hover:text-amber-400 transition-colors">hello@hitracesolutions.com</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <a href="mailto:support@hitracesolutions.com" className="hover:text-amber-400 transition-colors">support@hitracesolutions.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Hitrace Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social placeholders */}
            <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:text-amber-400 transition-colors cursor-pointer text-slate-400">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </div>
            <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:text-amber-400 transition-colors cursor-pointer text-slate-400">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </div>
            <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center hover:bg-blue-600/20 hover:text-amber-400 transition-colors cursor-pointer text-slate-400">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}