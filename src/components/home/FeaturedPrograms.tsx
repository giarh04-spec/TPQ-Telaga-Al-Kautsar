import { motion } from 'motion/react';
import { BookMarked, BrainCircuit, Languages, Monitor, Rocket, PenTool, Music, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: "Tahfidz Al-Qur'an",
    desc: "Program hafalan Al-Qur'an dengan metode cepat dan tartil.",
    icon: BookMarked,
    color: "bg-teal-500"
  },
  {
    title: "Pendidikan Karakter",
    desc: "Membentuk kepribadian Islami yang mandiri dan berintegritas.",
    icon: Users,
    color: "bg-blue-500"
  },
  {
    title: "Bahasa Internasional",
    desc: "Penguasaan Bahasa Arab dan Inggris melalui conversation harian.",
    icon: Languages,
    color: "bg-purple-500"
  },
  {
    title: "Informatika & Teknologi",
    desc: "Kurikulum IT modern mencakup coding, desain, dan literasi digital.",
    icon: Monitor,
    color: "bg-orange-500"
  },
  {
    title: "Entrepreneurship",
    desc: "Menumbuhkan jiwa kewirausahaan dan kreativitas sejak dini.",
    icon: Rocket,
    color: "bg-indigo-500"
  },
  {
    title: "Literasi",
    desc: "Membudayakan membaca dan menulis melalui program literasi kreatif.",
    icon: PenTool,
    color: "bg-red-500"
  }
];

export default function FeaturedPrograms() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <span className="text-primary font-bold tracking-widest text-sm uppercase">Kurikulum & Program</span>
          <h2 className="text-4xl font-heading font-bold text-gray-900">Program Unggulan</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menghadirkan berbagai program unggulan untuk mengembangkan potensi santri secara holistik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <motion.div
              key={prog.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 relative overflow-hidden"
            >
              <div className={`${prog.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform shadow-lg`}>
                <prog.icon size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{prog.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {prog.desc}
              </p>
              <Link
                to="/program"
                className="text-primary font-bold inline-flex items-center group-hover:translate-x-2 transition-transform"
              >
                <span>Selengkapnya</span>
                <span className="ml-2">→</span>
              </Link>
              
              {/* Decorative accent */}
              <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-5 group-hover:scale-150 transition-transform ${prog.color}`} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/program"
            className="px-10 py-4 bg-primary-light text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all shadow-md"
          >
            Lihat Semua Program
          </Link>
        </div>
      </div>
    </section>
  );
}
