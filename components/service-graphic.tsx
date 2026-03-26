'use client';
import { motion } from 'motion/react';
import { Truck, MapPin, Home, Globe, Wifi, Shield, Code, Cpu } from 'lucide-react';

export function ServiceGraphic({ type }: { type: string }) {
  switch (type) {
    case 'fleet':
      return (
        <div className="absolute top-8 right-8 w-32 h-32 opacity-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <motion.div
            animate={{ 
              x: [0, 10, -10, 0],
              y: [0, -5, 5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-amber-400/20 blur-2xl rounded-full" />
            <Truck className="w-16 h-16 text-amber-400 relative z-10" />
            
            {/* Speed lines */}
            <motion.div 
              animate={{ x: [-20, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute right-full top-1/2 w-8 h-0.5 bg-amber-400/50 rounded-full"
            />
            <motion.div 
              animate={{ x: [-30, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
              className="absolute right-[90%] top-1/3 w-6 h-0.5 bg-amber-400/50 rounded-full"
            />
          </motion.div>
        </div>
      );
    
    case 'telematics':
      return (
        <div className="absolute top-8 right-8 w-32 h-32 opacity-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
            
            {/* Radar rings */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                className="absolute w-12 h-12 border border-blue-400 rounded-full"
              />
            ))}
            
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <MapPin className="w-12 h-12 text-blue-400 relative z-10" />
            </motion.div>
          </div>
        </div>
      );

    case 'iot':
      return (
        <div className="absolute top-8 right-8 w-32 h-32 opacity-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full" />
            
            <Home className="w-12 h-12 text-emerald-400 relative z-10" />
            
            {/* Connecting nodes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-2 left-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                <line x1="50" y1="10" x2="80" y2="80" stroke="#34d399" strokeWidth="1" />
                <line x1="80" y1="80" x2="20" y2="80" stroke="#34d399" strokeWidth="1" />
                <line x1="20" y1="80" x2="50" y2="10" stroke="#34d399" strokeWidth="1" />
              </svg>
            </motion.div>
          </div>
        </div>
      );

    case 'web':
      return (
        <div className="absolute top-8 right-8 w-32 h-32 opacity-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full" />
            
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="relative z-10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Globe className="w-16 h-16 text-purple-400" />
            </motion.div>
            
            {/* Floating code elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-4"
            >
              <Code className="w-6 h-6 text-purple-300" />
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 bottom-4"
            >
              <Cpu className="w-6 h-6 text-purple-300" />
            </motion.div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
