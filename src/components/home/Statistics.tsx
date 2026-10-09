import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
  delay?: number;
}

const StatItem = ({ label, value, suffix = "+", delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 16));
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ delay }}
      className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
    >
      <div className="text-5xl font-heading font-extrabold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-primary-light font-medium tracking-widest uppercase text-xs">
        {label}
      </div>
    </motion.div>
  );
};

export default function Statistics() {
  return (
    <section className="py-24 gradient-teal relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem label="Siswa Aktif" value={100} delay={0} />
          <StatItem label="Guru & Staf" value={20} delay={0.1} />
          <StatItem label="Program Unggulan" value={10} delay={0.2} />
          <StatItem label="Prestasi" value={15} delay={0.3} />
        </div>
      </div>
    </section>
  );
}
