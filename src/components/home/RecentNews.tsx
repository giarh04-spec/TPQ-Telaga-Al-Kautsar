import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const news = [
  {
    id: 1,
    title: "Kegiatan MPLS Tahun Pelajaran 2026/2027 Berlangsung Khidmat",
    category: "Kegiatan",
    date: "15 Juli 2026",
    author: "Admin",
    image: "/src/assets/images/school_classroom_1789793256709.jpg",
    excerpt: "Siswa baru SMP Islam Modern Al Fakhir mengikuti kegiatan Masa Pengenalan Lingkungan Sekolah dengan penuh antusias..."
  },
  {
    id: 2,
    title: "Siswa Al Fakhir Raih Medali Emas Olimpiade Matematika Nasional",
    category: "Prestasi",
    date: "10 Juni 2026",
    author: "Humas",
    image: "/src/assets/images/school_building_hero_1789793197466.jpg",
    excerpt: "Prestasi membanggakan kembali diraih oleh santri kami dalam ajang bergengsi tingkat nasional yang diselenggarakan oleh..."
  },
  {
    id: 3,
    title: "Pelaksanaan Program Tahfidz Intensif Libur Semester",
    category: "Program",
    date: "05 Juni 2026",
    author: "Admin",
    image: "/src/assets/images/school_classroom_1789793256709.jpg",
    excerpt: "Mengisi waktu libur dengan hal bermanfaat, para santri mengikuti program tahfidz intensif selama satu pekan penuh..."
  }
];

export default function RecentNews() {
  return (
    <section className="py-24 bg-primary-light/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Update Terbaru</span>
            <h2 className="text-4xl font-heading font-bold text-gray-900">Berita & Artikel</h2>
            <div className="w-24 h-1 bg-primary rounded-full" />
          </div>
          <Link
            to="/berita"
            className="flex items-center space-x-2 text-primary font-bold hover:text-primary-dark transition-colors"
          >
            <span>Lihat Semua Berita</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4 flex-grow flex flex-col">
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{item.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed flex-grow">
                  {item.excerpt}
                </p>
                
                <div className="pt-4 mt-auto">
                  <Link
                    to={`/berita/${item.id}`}
                    className="text-primary font-bold text-sm inline-flex items-center group-hover:underline"
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
