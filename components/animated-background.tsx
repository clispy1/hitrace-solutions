'use client';

import { motion } from 'motion/react';

export function AnimatedBackground({ color = 'blue' }: { color?: 'blue' | 'emerald' | 'orange' | 'amber' | 'green' }) {
  const colorMap = {
    blue: ['bg-blue-900/20', 'bg-indigo-900/20'],
    emerald: ['bg-emerald-900/20', 'bg-teal-900/20'],
    orange: ['bg-orange-900/20', 'bg-red-900/20'],
    amber: ['bg-amber-900/20', 'bg-orange-900/20'],
    green: ['bg-green-900/20', 'bg-emerald-900/20'],
  };

  const [color1, color2] = colorMap[color] || colorMap.blue;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
          backgroundSize: '32px 32px' 
        }} 
      />
      
      {/* Animated Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full ${color1} blur-[120px]`}
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 0], 
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full ${color2} blur-[120px]`}
      />
    </div>
  );
}
