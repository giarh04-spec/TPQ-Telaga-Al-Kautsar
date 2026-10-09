import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function PrincipalMessage() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Photo */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-primary-light">
              <img 
                src="/src/assets/images/principal_photo_1789793241171.jpg" 
                alt="Deny Rahmat, S.Sos.I."
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary rounded-3xl -z-0 opacity-20" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full -z-0 opacity-20 animate-pulse" />
          </motion.div>

          {/* Message */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-2">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">Sambutan</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
                Kepala Sekolah
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <h3 className="text-2xl font-bold text-primary-dark">Deny Rahmat, S.Sos.I.</h3>
              <p className="italic font-medium text-primary">"Assalamu'alaikum Warahmatullahi Wabarakatuh."</p>
              <p>
                Selamat datang di website resmi MI Hidayatul Athfal. Website ini menjadi sarana informasi dan komunikasi sekolah bagi siswa, orang tua, guru, alumni, dan masyarakat.
              </p>
              <p>
                Kami berkomitmen memberikan pendidikan yang berkualitas dengan memadukan ilmu pengetahuan, teknologi, karakter, dan nilai-nilai keislaman.
              </p>
              <p className="italic font-medium text-primary">"Wassalamu'alaikum Warahmatullahi Wabarakatuh."</p>
            </div>

            <Link
              to="/tentang/profil"
              className="inline-flex items-center px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 group"
            >
              <span>Baca Selengkapnya</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                →
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
