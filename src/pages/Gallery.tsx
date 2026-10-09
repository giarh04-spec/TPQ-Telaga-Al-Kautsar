import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ["Semua", "Kegiatan", "Fasilitas", "Prestasi", "Keagamaan"];

const galleryItems = [
  { id: 1, title: "Gedung Sekolah", category: "Fasilitas", image: "/src/assets/images/school_building_hero_1789793197466.jpg" },
  { id: 2, title: "Suasana Kelas", category: "Kegiatan", image: "/src/assets/images/school_classroom_1789793256709.jpg" },
  { id: 3, title: "Kegiatan MPLS", category: "Kegiatan", image: "/src/assets/images/school_classroom_1789793256709.jpg" },
  { id: 4, title: "Olimpiade Matematika", category: "Prestasi", image: "/src/assets/images/school_building_hero_1789793197466.jpg" },
  { id: 5, title: "Perpustakaan Digital", category: "Fasilitas", image: "/src/assets/images/school_classroom_1789793256709.jpg" },
  { id: 6, title: "Shalat Dhuha Berjamaah", category: "Keagamaan", image: "/src/assets/images/school_building_hero_1789793197466.jpg" },
  { id: 7, title: "Lab Komputer Modern", category: "Fasilitas", image: "/src/assets/images/school_classroom_1789793256709.jpg" },
  { id: 8, title: "Latihan Panahan", category: "Kegiatan", image: "/src/assets/images/school_building_hero_1789793197466.jpg" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(item => 
    activeCategory === "Semua" || item.category === activeCategory
  );

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIdx = filteredItems.findIndex(i => i.id === selectedImage);
      const nextIdx = (currentIdx + 1) % filteredItems.length;
      setSelectedImage(filteredItems[nextIdx].id);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIdx = filteredItems.findIndex(i => i.id === selectedImage);
      const prevIdx = (currentIdx - 1 + filteredItems.length) % filteredItems.length;
      setSelectedImage(filteredItems[prevIdx].id);
    }
  };

  const selectedItem = galleryItems.find(i => i.id === selectedImage);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4 space-y-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Galeri Sekolah</h1>
          <p className="text-primary-light/80 max-w-2xl mx-auto text-lg">
            Dokumentasi beragam kegiatan, fasilitas, dan momen berharga di SMP Islam Modern Al Fakhir.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4 flex justify-center flex-wrap gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeCategory === cat ? 'bg-primary text-white shadow-xl scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg h-64 cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-6 text-center">
                  <div className="bg-white/20 p-3 rounded-full mb-4 backdrop-blur-sm">
                    <Maximize2 size={24} />
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <span className="text-xs uppercase tracking-widest mt-1 opacity-80">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2 bg-white/10 rounded-full"
            >
              <X size={32} />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-4 bg-white/10 rounded-full"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-4 bg-white/10 rounded-full"
            >
              <ChevronRight size={48} />
            </button>

            <div className="max-w-5xl w-full flex flex-col items-center space-y-6">
              <motion.img
                key={selectedImage}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[70vh] w-auto rounded-3xl shadow-2xl"
              />
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                <span className="text-primary-light uppercase tracking-widest text-sm">{selectedItem.category}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
