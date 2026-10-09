import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-16 h-16 bg-primary rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center text-white font-bold text-2xl mb-6"
      >
        HA
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="h-1 bg-primary rounded-full"
      />
      <p className="mt-4 text-primary font-bold tracking-widest text-xs uppercase animate-pulse">
        MI HIDAYATUL ATHFAL
      </p>
    </div>
  );
}
