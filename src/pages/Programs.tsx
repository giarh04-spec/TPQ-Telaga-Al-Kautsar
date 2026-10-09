import { motion } from 'motion/react';
import { BookMarked, BrainCircuit, Languages, Monitor, Rocket, PenTool, Users, Star } from 'lucide-react';

const programs = [
  {
    title: "Tahfidz Al-Qur'an",
    desc: "Program hafalan Al-Qur'an dengan metode cepat dan tartil. Kami menargetkan santri hafal minimal 3 juz selama masa sekolah dengan tajwid yang benar.",
    icon: BookMarked,
    color: "bg-teal-500",
    features: ["Metode Sabaq, Sabqi, Manzil", "Tasmi' Mingguan", "Ujian Sertifikasi Juz"]
  },
  {
    title: "Literasi Digital & IT",
    desc: "Membekali santri dengan kemampuan teknologi informasi yang relevan. Kurikulum mencakup coding dasar, desain grafis, dan penggunaan AI yang etis.",
    icon: Monitor,
    color: "bg-blue-500",
    features: ["Coding (HTML/CSS/JS)", "Design Graphic (Canva/Figma)", "Internet Safety"]
  },
  {
    title: "Bilingual Program",
    desc: "Penguasaan Bahasa Arab dan Inggris sebagai bahasa pengantar dan komunikasi harian. Melatih kepercayaan diri santri di kancah internasional.",
    icon: Languages,
    color: "bg-purple-500",
    features: ["Arabic/English Day", "Speech Contest", "Native Speaker Session"]
  },
  {
    title: "Entrepreneurship",
    desc: "Menumbuhkan jiwa kewirausahaan melalui proyek nyata. Santri belajar manajemen waktu, keuangan, dan kreativitas dalam membuat produk.",
    icon: Rocket,
    color: "bg-indigo-500",
    features: ["Market Day", "Business Plan Project", "Kunjungan Industri"]
  }
];

export default function Programs() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="bg-primary py-24 text-white text-center">
        <div className="container mx-auto px-4 space-y-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Program Unggulan</h1>
          <p className="text-primary-light/80 max-w-2xl mx-auto text-lg">
            Inovasi pendidikan yang menggabungkan IMTAQ, IPTEK, dan Life Skills untuk masa depan santri.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {programs.map((prog, idx) => (
              <div key={prog.title} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                <motion.div 
                  initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
                >
                  <div className={`${prog.color} p-16 rounded-[3rem] shadow-2xl relative overflow-hidden aspect-square flex items-center justify-center`}>
                    <prog.icon size={120} className="text-white relative z-10" />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ x: idx % 2 === 0 ? 50 : -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 space-y-8"
                >
                  <div className="space-y-4">
                    <h2 className="text-4xl font-heading font-bold text-gray-900">{prog.title}</h2>
                    <div className={`w-20 h-1 ${prog.color} rounded-full`} />
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {prog.desc}
                  </p>

                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-800 flex items-center space-x-2">
                      <Star size={20} className="text-accent" />
                      <span>Keunggulan Program:</span>
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {prog.features.map(feat => (
                        <li key={feat} className="flex items-center space-x-3 text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <div className={`w-2 h-2 rounded-full ${prog.color}`} />
                          <span className="text-sm font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
