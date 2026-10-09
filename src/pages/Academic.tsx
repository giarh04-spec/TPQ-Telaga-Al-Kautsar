import { motion } from 'motion/react';
import { BookOpen, Laptop, Globe, Users, PenTool, Layout, CheckCircle2 } from 'lucide-react';

const curriculumFeatures = [
  {
    title: "Kurikulum Merdeka",
    desc: "Menerapkan kurikulum nasional terbaru yang berfokus pada materi esensial dan pengembangan karakter.",
    icon: Layout
  },
  {
    title: "Project Based Learning",
    desc: "Pembelajaran berbasis proyek untuk mengasah kreativitas dan kemampuan pemecahan masalah santri.",
    icon: BrainCircuit
  },
  {
    title: "Digital Integration",
    desc: "Pemanfaatan platform digital dalam setiap mata pelajaran untuk literasi teknologi.",
    icon: Laptop
  },
  {
    title: "Al-Qur'an Literacy",
    desc: "Pembelajaran Al-Qur'an harian (Tahfidz & Tahsin) sebagai fondasi utama pendidikan.",
    icon: BookOpen
  }
];

const subjects = [
  "Pendidikan Agama Islam", "Bahasa Indonesia", "Matematika", "IPA (Sains)", "IPS", "Bahasa Inggris", "Bahasa Arab", "Informatika", "PJOK", "Seni Budaya", "Prakarya", "PKn"
];

function BrainCircuit({ size }: { size: number }) {
  return (
    <svg 
      width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0 .94 4.82 2.5 2.5 0 0 0 0 4.28 2.5 2.5 0 0 0-.94 4.82 2.5 2.5 0 0 0 1.98 3 2.5 2.5 0 0 0 4.96-.47" />
      <path d="M12 4.5a2.5 2.5 0 0 1 4.96-.46 2.5 2.5 0 0 1 1.98 3 2.5 2.5 0 0 1-.94 4.82 2.5 2.5 0 0 1 0 4.28 2.5 2.5 0 0 1 .94 4.82 2.5 2.5 0 0 1-1.98 3 2.5 2.5 0 0 1-4.96-.47" />
      <path d="M12 18v4" />
      <path d="M12 2v4" />
      <path d="M12 10v4" />
    </svg>
  );
}

export default function Academic() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="bg-primary py-24 text-white text-center">
        <div className="container mx-auto px-4 space-y-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Akademik</h1>
          <p className="text-primary-light/80 max-w-2xl mx-auto text-lg">
            Sistem pembelajaran modern yang memadukan kurikulum nasional dengan nilai-nilai Islami dan kecakapan abad 21.
          </p>
        </div>
      </section>

      {/* Curriculum Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumFeatures.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center space-y-4"
              >
                <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center text-primary mx-auto">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-24 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <span className="text-primary-light font-bold tracking-widest text-sm uppercase">Kurikulum & Mapel</span>
                <h2 className="text-4xl font-heading font-bold">Mata Pelajaran Utama</h2>
                <p className="text-primary-light/70 leading-relaxed">
                  Kami menyusun mata pelajaran yang seimbang untuk mencetak lulusan yang cerdas secara kognitif dan mulia secara karakter.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subjects.map((sub, idx) => (
                  <motion.div
                    key={sub}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center space-x-3 bg-white/10 p-4 rounded-xl border border-white/10"
                  >
                    <CheckCircle2 size={18} className="text-primary-light" />
                    <span className="font-medium">{sub}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/images/school_classroom_1789793256709.jpg" 
                  alt="Students Studying" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
