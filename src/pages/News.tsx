import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ["Semua", "Kegiatan", "Prestasi", "Program", "Pengumuman"];

const allNews = [
  {
    id: 1,
    title: "Kegiatan MPLS Tahun Pelajaran 2026/2027 Berlangsung Khidmat",
    category: "Kegiatan",
    date: "15 Juli 2026",
    author: "Admin",
    image: "/src/assets/images/school_classroom_1789793256709.jpg",
    excerpt: "Siswa baru SMP Islam Modern Al Fakhir mengikuti kegiatan Masa Pengenalan Lingkungan Sekolah dengan penuh antusias dan semangat..."
  },
  {
    id: 2,
    title: "Siswa Al Fakhir Raih Medali Emas Olimpiade Matematika Nasional",
    category: "Prestasi",
    date: "10 Juni 2026",
    author: "Humas",
    image: "/src/assets/images/school_building_hero_1789793197466.jpg",
    excerpt: "Prestasi membanggakan kembali diraih oleh santri kami dalam ajang bergengsi tingkat nasional yang diselenggarakan di Jakarta..."
  },
  {
    id: 3,
    title: "Pelaksanaan Program Tahfidz Intensif Libur Semester",
    category: "Program",
    date: "05 Juni 2026",
    author: "Admin",
    image: "/src/assets/images/school_classroom_1789793256709.jpg",
    excerpt: "Mengisi waktu libur dengan hal bermanfaat, para santri mengikuti program tahfidz intensif selama satu pekan penuh di lingkungan sekolah..."
  },
  {
    id: 4,
    title: "Update Renovasi Fasilitas Laboratorium Komputer Modern",
    category: "Pengumuman",
    date: "20 Mei 2026",
    author: "Sarpras",
    image: "/src/assets/images/school_building_hero_1789793197466.jpg",
    excerpt: "Guna menunjang program literasi digital, sekolah melakukan upgrade besar-besaran pada fasilitas laboratorium komputer dengan perangkat terbaru..."
  },
  {
    id: 5,
    title: "Pelatihan Kewirausahaan untuk Santri Kelas IX",
    category: "Kegiatan",
    date: "12 Mei 2026",
    author: "Kurikulum",
    image: "/src/assets/images/school_classroom_1789793256709.jpg",
    excerpt: "Santri kelas IX mengikuti workshop kewirausahaan untuk membekali mereka dengan mindset mandiri dan kreatif menghadapi tantangan global..."
  }
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = allNews.filter(item => {
    const matchesCategory = activeCategory === "Semua" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">Berita & Kegiatan</h1>
          <p className="text-primary-light/80 max-w-2xl mx-auto">
            Ikuti terus perkembangan terbaru, pengumuman resmi, dan beragam prestasi dari SMP Islam Modern Al Fakhir.
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="sticky top-20 z-40 bg-white shadow-md py-4 mb-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none text-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </section>

      {/* News Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

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

        {filteredNews.length === 0 && (
          <div className="text-center py-24 space-y-4">
            <div className="text-gray-300 flex justify-center">
              <Search size={64} />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Berita tidak ditemukan</h3>
            <p className="text-gray-500">Coba gunakan kata kunci lain atau filter kategori yang berbeda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
