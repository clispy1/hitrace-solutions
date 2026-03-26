'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-slate-950 flex flex-col items-center justify-center"
        >
          <div className="flex gap-[2px] h-12 items-center overflow-hidden">
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-2 h-full bg-amber-400 rounded-sm"
            />
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-2 h-full bg-amber-400 rounded-sm relative"
            >
              <div className="absolute top-1/2 left-0 w-6 h-2 bg-amber-400 -translate-y-1/2" />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-2 h-full bg-amber-400 rounded-sm ml-4"
            />
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-2 h-full bg-amber-400 rounded-sm"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, marginTop: 20 }}
            animate={{ opacity: 1, marginTop: 20 }}
            transition={{ delay: 0.8 }}
            className="text-blue-600 font-display font-black tracking-widest uppercase text-xl mt-6"
          >
            HiTrace Solutions
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
