import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  {
    name: 'Tentang Kami',
    path: '/tentang',
    dropdown: [
      { name: 'Profil Sekolah', path: '/tentang/profil' },
      { name: 'Visi & Misi', path: '/tentang/visi-misi' },
      { name: 'Sejarah', path: '/tentang/sejarah' },
      { name: 'Struktur Organisasi', path: '/tentang/struktur' },
      { name: 'Fasilitas', path: '/tentang/fasilitas' },
      { name: 'Guru & Tenaga Kependidikan', path: '/tentang/guru' },
    ],
  },
  {
    name: 'Akademik',
    path: '/akademik',
    dropdown: [
      { name: 'Kurikulum', path: '/akademik/kurikulum' },
      { name: 'Mata Pelajaran', path: '/akademik/mapel' },
      { name: 'Kalender Akademik', path: '/akademik/kalender' },
    ],
  },
  {
    name: 'Program',
    path: '/program',
    dropdown: [
      { name: "Tahfidz Al-Qur'an", path: '/program/tahfidz' },
      { name: 'Bahasa Arab & Inggris', path: '/program/bahasa' },
      { name: 'Literasi Digital', path: '/program/it' },
      { name: 'Entrepreneurship', path: '/program/entrepreneur' },
    ],
  },
  { name: 'Berita', path: '/berita' },
  { name: 'Galeri', path: '/galeri' },
  { name: 'Kontak', path: '/kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              HA
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-primary leading-tight">
                MI HIDAYATUL
              </span>
              <span className="font-heading font-bold text-xl text-primary-dark leading-tight tracking-wider">
                ATHFAL
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-2 text-sm font-medium transition-colors flex items-center space-x-1',
                      isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                    )
                  }
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown size={14} className={cn("transition-transform", activeDropdown === item.name && "rotate-180")} />}
                </NavLink>

                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-0 w-64 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100"
                      >
                        <div className="py-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary-light hover:text-primary transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <Link
              to="/ppdb"
              className="ml-4 px-6 py-2 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              PPDB 2026/2027
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    to={item.path}
                    className="block text-lg font-bold text-primary hover:text-primary-dark"
                    onClick={() => !item.dropdown && setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 space-y-2 border-l-2 border-primary-light">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block text-gray-600 hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/ppdb"
                className="block w-full py-4 bg-primary text-white text-center font-bold rounded-xl shadow-lg shadow-primary/20"
                onClick={() => setIsOpen(false)}
              >
                DAFTAR PPDB SEKARANG
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
