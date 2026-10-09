import { motion } from 'motion/react';
import { Download, FileText, Calendar, ShieldCheck, BookOpen, Clock } from 'lucide-react';

const documents = [
  { id: 1, name: "Kalender Akademik 2026/2027", category: "Kalender", size: "1.2 MB", format: "PDF", date: "20 Juni 2026" },
  { id: 2, name: "Formulir Pendaftaran Offline", category: "PPDB", size: "850 KB", format: "PDF", date: "15 Mei 2026" },
  { id: 3, name: "Tata Tertib Siswa", category: "Tata Tertib", size: "2.1 MB", format: "PDF", date: "01 Juni 2026" },
  { id: 4, name: "Brosur Sekolah 2026", category: "Promosi", size: "5.4 MB", format: "PDF", date: "10 Mei 2026" },
  { id: 5, name: "Jadwal Pelajaran Kelas VII", category: "Jadwal", size: "450 KB", format: "PDF", date: "12 Juli 2026" },
];

export default function Downloads() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-primary py-24 text-white text-center">
        <div className="container mx-auto px-4 space-y-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Download Dokumen</h1>
          <p className="text-primary-light/80 max-w-2xl mx-auto text-lg">
            Unduh formulir, kalender akademik, dan dokumen penting lainnya di sini.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {documents.map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-center space-x-6 w-full">
                  <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                    <FileText size={32} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg text-gray-900">{doc.name}</h3>
                    <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                      <span className="flex items-center space-x-1">
                        <ShieldCheck size={14} />
                        <span>{doc.category}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{doc.date}</span>
                      </span>
                      <span className="font-bold text-primary">{doc.format} • {doc.size}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full md:w-auto px-8 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all flex items-center justify-center space-x-2 shadow-lg shadow-primary/20">
                  <Download size={18} />
                  <span>Download</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
