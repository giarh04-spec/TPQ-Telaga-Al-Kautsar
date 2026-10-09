import { motion } from 'motion/react';
import { Target, Compass, BookOpen, UserCircle, Globe, ShieldCheck, Heart, Zap } from 'lucide-react';

const missions = [
  { text: "Menyelenggarakan pendidikan berkualitas.", icon: Zap },
  { text: "Membentuk peserta didik yang berakhlak mulia.", icon: Heart },
  { text: "Mengembangkan potensi akademik dan nonakademik.", icon: Target },
  { text: "Meningkatkan kemampuan teknologi dan literasi digital.", icon: Globe },
  { text: "Membudayakan Al-Qur'an dalam kehidupan sehari-hari.", icon: BookOpen },
  { text: "Mempersiapkan siswa menghadapi perkembangan zaman.", icon: ShieldCheck },
];

export default function VisionMission() {
  return (
    <section className="py-24 bg-primary-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <span className="text-primary font-bold tracking-widest text-sm uppercase">Landasan Kami</span>
          <h2 className="text-4xl font-heading font-bold text-gray-900">Visi & Misi</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Visi */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col justify-center text-center space-y-6"
          >
            <div className="w-20 h-20 bg-primary-light rounded-2xl flex items-center justify-center text-primary mx-auto">
              <Compass size={40} />
            </div>
            <h3 className="text-3xl font-heading font-bold text-primary-dark">VISI</h3>
            <p className="text-xl text-gray-700 leading-relaxed font-medium italic">
              "Menjadi Madrasah Ibtidaiyah yang unggul dalam ilmu pengetahuan, teknologi, karakter, dan akhlak mulia."
            </p>
          </motion.div>

          {/* Misi */}
          <div className="grid grid-cols-1 gap-4">
            {missions.map((mission, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center space-x-6 hover:translate-x-2 transition-transform group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <mission.icon size={24} />
                </div>
                <p className="text-gray-700 font-medium">{mission.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
