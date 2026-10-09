import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: "Melahirkan Generasi Qur'ani",
    subtitle: "MI HIDAYATUL ATHFAL",
    desc: "Tempat tumbuh dan berkembangnya generasi yang berilmu, berakhlak mulia, mandiri, kreatif, dan siap menghadapi masa depan.",
    image: "/src/assets/images/school_building_hero_1789793197466.jpg",
  },
  {
    title: "Unggul dalam Prestasi dan Karakter",
    subtitle: "PENDIDIKAN BERKUALITAS",
    desc: "Kami berkomitmen memberikan pendidikan yang berkualitas dengan memadukan IPTEK dan IMTAQ.",
    image: "/src/assets/images/school_classroom_1789793256709.jpg",
  },
  {
    title: "Bersama Membangun Masa Depan",
    subtitle: "MI HIDAYATUL ATHFAL",
    desc: "Bergabunglah bersama kami untuk mencetak generasi pemimpin masa depan yang berkarakter Islami.",
    image: "/src/assets/images/school_building_hero_1789793197466.jpg",
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[500px] md:h-[650px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 overlay-teal opacity-90" />
          
          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary-light font-bold tracking-[0.2em] mb-4 text-sm md:text-base uppercase"
            >
              {slides[current].subtitle}
            </motion.span>
            
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight max-w-4xl"
            >
              {slides[current].title}
            </motion.h1>
            
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed font-light"
            >
              {slides[current].desc}
            </motion.p>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link
                to="/tentang/profil"
                className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-primary-light transition-all transform hover:-translate-y-1 shadow-xl"
              >
                Profil Sekolah
              </Link>
              <Link
                to="/ppdb"
                className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark border border-white/20 transition-all transform hover:-translate-y-1 shadow-xl"
              >
                Daftar PPDB
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              current === idx ? "bg-white w-8" : "bg-white/40"
            )}
          />
        ))}
      </div>
    </section>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
