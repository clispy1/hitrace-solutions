'use client';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, TrendingUp, ShieldCheck } from 'lucide-react';
import { TiltCard } from '@/components/tilt-card';
import Image from 'next/image';

const CASE_STUDIES = [
  {
    id: 1,
    client: "Logistics Pro Inc.",
    title: "Reducing Fleet Fuel Consumption by 28%",
    description: "How a major logistics provider utilized Hitrace's real-time fuel monitoring and driver behavior analytics to save over $1.2M annually.",
    metrics: [
      { label: "Fuel Saved", value: "28%" },
      { label: "ROI", value: "3.5x" },
      { label: "Accidents", value: "-45%" }
    ],
    image: "https://picsum.photos/seed/logistics/1200/800",
    color: "from-blue-600 to-cyan-400"
  },
  {
    id: 2,
    client: "AgriTech Farms",
    title: "Optimizing Tractor Utilization Across 10,000 Acres",
    description: "Implementing ruggedized IoT sensors on heavy agricultural machinery to track maintenance schedules, idle times, and field coverage.",
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Yield", value: "+12%" },
      { label: "Maintenance", value: "-30%" }
    ],
    image: "https://picsum.photos/seed/tractor/1200/800",
    color: "from-amber-500 to-orange-400"
  },
  {
    id: 3,
    client: "Metro Transit Authority",
    title: "Securing Public Transport with Live Video Telematics",
    description: "Deploying multi-camera MDVR systems across 500 city buses to ensure passenger safety and provide irrefutable evidence for insurance claims.",
    metrics: [
      { label: "Claims Cost", value: "-60%" },
      { label: "Response Time", value: "2 mins" },
      { label: "Passenger Trust", value: "High" }
    ],
    image: "https://picsum.photos/seed/bus/1200/800",
    color: "from-emerald-500 to-teal-400"
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 relative overflow-hidden bg-slate-950">
      {/* 3D Atmospheric Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[800px] h-[800px] rounded-full bg-amber-500/5 blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1000/1000')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <BarChart3 className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium tracking-wider text-slate-300 uppercase">Success Stories</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Results</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            Discover how industry leaders leverage Hitrace Solutions to transform their operations, reduce costs, and scale efficiently.
          </motion.p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-32">
          {CASE_STUDIES.map((study, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={study.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                
                {/* 3D Image Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-1/2"
                >
                  <TiltCard className="aspect-[4/3] rounded-[2.5rem] overflow-hidden relative group">
                    <div className="absolute inset-0 bg-slate-800 animate-pulse" />
                    <Image 
                      src={study.image} 
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-tr ${study.color} mix-blend-overlay opacity-40 group-hover:opacity-20 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80" />
                    
                    {/* Floating Client Badge */}
                    <div 
                      className="absolute bottom-8 left-8 px-6 py-3 rounded-2xl glass border border-white/20 shadow-2xl backdrop-blur-xl"
                      style={{ transform: "translateZ(60px)" }}
                    >
                      <span className="text-sm font-bold text-white uppercase tracking-widest">{study.client}</span>
                    </div>
                  </TiltCard>
                </motion.div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="w-full lg:w-1/2 space-y-8"
                >
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                    {study.title}
                  </h2>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    {study.description}
                  </p>
                  
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/10">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="space-y-2">
                        <div className="text-3xl font-display font-bold text-amber-400">{metric.value}</div>
                        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <button className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-amber-400 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.5)]">
                    Read Full Case Study
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-12 md:p-20 text-center shadow-2xl border border-white/10"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to be our next success story?
            </h2>
            <p className="text-xl text-blue-200 mb-10">
              Join hundreds of companies optimizing their operations with Hitrace.
            </p>
            <button className="px-10 py-5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-full transition-all flex items-center justify-center gap-2 mx-auto group text-lg shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)]">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
