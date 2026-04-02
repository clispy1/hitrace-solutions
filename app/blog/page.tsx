'use client';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { TiltCard } from '@/components/tilt-card';
import Image from 'next/image';

const POSTS = [
  {
    id: 1,
    title: "The Future of AI in Fleet Telematics",
    excerpt: "Discover how artificial intelligence is transforming predictive maintenance and route optimization in modern fleet management.",
    category: "Technology",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/ai-fleet/800/600"
  },
  {
    id: 2,
    title: "Reducing Fuel Costs by 30% with IoT Sensors",
    excerpt: "A deep dive into the mechanics of real-time fuel monitoring and how it prevents theft while optimizing consumption.",
    category: "Case Study",
    date: "Sep 28, 2026",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/fuel/800/600"
  },
  {
    id: 3,
    title: "Smart Farming: Tracking Agricultural Assets",
    excerpt: "How GPS and IoT are helping modern farmers track tractors, monitor soil conditions, and improve crop yields.",
    category: "Industry",
    date: "Sep 15, 2026",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/farming/800/600"
  },
  {
    id: 4,
    title: "Driver Behavior Analytics Explained",
    excerpt: "Understanding the metrics behind harsh braking, rapid acceleration, and how to build a safer driving culture.",
    category: "Safety",
    date: "Aug 30, 2026",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/driver/800/600"
  },
  {
    id: 5,
    title: "Why White-Label Tracking is Booming",
    excerpt: "Explore the business benefits of launching your own branded GPS tracking platform without the development overhead.",
    category: "Business",
    date: "Aug 14, 2026",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/whitelabel/800/600"
  },
  {
    id: 6,
    title: "Securing Your IoT Devices Against Cyber Threats",
    excerpt: "Best practices for ensuring your connected fleet and smart home devices remain secure from external vulnerabilities.",
    category: "Security",
    date: "Jul 22, 2026",
    readTime: "9 min read",
    image: "https://picsum.photos/seed/security/800/600"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-24 relative overflow-hidden">
      {/* 3D Atmospheric Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            y: [0, -50, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] rounded-full bg-blue-600/20 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            y: [0, 50, 0],
            rotate: [0, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -right-[20%] w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[100px]"
        />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="text-sm font-medium tracking-wider text-amber-400 uppercase">Insights & News</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            The Hitrace <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-amber-400">Journal</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-slate-400 leading-relaxed"
          >
            Expert perspectives on telematics, IoT innovation, and the future of connected assets.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="group h-full flex flex-col bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors shadow-2xl relative">
                  
                  {/* 3D Inner Content Wrapper */}
                  <div className="relative h-64 overflow-hidden" style={{ transform: "translateZ(30px)" }}>
                    <div className="absolute inset-0 bg-slate-800 animate-pulse" />
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-semibold text-white uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow" style={{ transform: "translateZ(40px)" }}>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-mono">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-amber-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      Read Article 
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_50px_rgba(251,191,36,0.1)]" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="px-8 py-4 rounded-full glass border border-white/20 text-white font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2 group">
            Load More Articles
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          </button>
        </motion.div>
      </div>
    </main>
  );
}
