import { motion } from 'motion/react';
import { Award, BookOpen, Clock, Users, Building, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-heading font-bold"
          >
            Profil Sekolah
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-primary-light/80 max-w-2xl mx-auto text-lg"
          >
            Mengenal lebih dekat MI Hidayatul Athfal, pusat pendidikan Islam yang memadukan keilmuan modern dengan karakter Islami.
          </motion.p>
        </div>
      </section>

      {/* History */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">Sejarah</span>
                <h2 className="text-4xl font-heading font-bold text-gray-900 leading-tight">Membangun Generasi Madani</h2>
                <div className="w-20 h-1 bg-primary rounded-full" />
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                MI Hidayatul Athfal didirikan pada tahun 2015 dengan visi besar untuk menciptakan lembaga pendidikan yang tidak hanya unggul secara akademis, tetapi juga kuat secara spiritual.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Berawal dari semangat para pendidik dan tokoh masyarakat untuk menghadirkan sekolah yang relevan dengan perkembangan zaman namun tetap berpijak pada nilai-nilai Al-Qur'an dan As-Sunnah.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">2015</div>
                    <div className="text-xs text-gray-500 uppercase">Tahun Berdiri</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">A</div>
                    <div className="text-xs text-gray-500 uppercase">Akreditasi</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50"
              >
                <img 
                  src="/src/assets/images/school_building_hero_1789793197466.jpg" 
                  alt="School Building" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Details Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-3xl shadow-xl border border-gray-100 space-y-4 text-center">
              <div className="w-16 h-16 bg-teal-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Building size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Identitas Sekolah</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>NPSN:</strong> 12345678</p>
                <p><strong>Status:</strong> Swasta</p>
                <p><strong>Kurikulum:</strong> Merdeka</p>
              </div>
            </div>

            <div className="p-10 bg-white rounded-3xl shadow-xl border border-gray-100 space-y-4 text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sumber Daya</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>Tenaga Pendidik:</strong> 25 Orang</p>
                <p><strong>Tenaga Kependidikan:</strong> 8 Orang</p>
                <p><strong>Total Siswa:</strong> 150+ Siswa</p>
              </div>
            </div>

            <div className="p-10 bg-white rounded-3xl shadow-xl border border-gray-100 space-y-4 text-center">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Akreditasi & Izin</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>Akreditasi:</strong> A (Unggul)</p>
                <p><strong>SK Izin:</strong> 421/123/DISDIK/2015</p>
                <p><strong>Tanggal SK:</strong> 12 Mei 2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
