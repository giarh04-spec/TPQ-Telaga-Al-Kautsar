import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Music2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Logo & Desc */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl">
                HA
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight">
                  MI HIDAYATUL
                </span>
                <span className="font-heading font-bold text-xl leading-tight tracking-wider">
                  ATHFAL
                </span>
              </div>
            </div>
            <p className="text-primary-light/80 text-sm leading-relaxed">
              Madrasah Ibtidaiyah yang berkomitmen mencetak generasi Qur'ani yang unggul dalam ilmu pengetahuan dan berkarakter mulia.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg border-b-2 border-primary w-12 pb-2">Menu</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-primary-light transition-colors">Home</Link></li>
              <li><Link to="/tentang/profil" className="hover:text-primary-light transition-colors">Profil Sekolah</Link></li>
              <li><Link to="/program" className="hover:text-primary-light transition-colors">Program Unggulan</Link></li>
              <li><Link to="/berita" className="hover:text-primary-light transition-colors">Berita & Kegiatan</Link></li>
              <li><Link to="/ppdb" className="hover:text-primary-light transition-colors">Informasi PPDB</Link></li>
              <li><Link to="/kontak" className="hover:text-primary-light transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg border-b-2 border-primary w-12 pb-2">Kontak</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-primary-light" />
                <span className="text-primary-light/80">Jl. Hidayatul Athfal No. 123, Kota Pendidikan, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-light" />
                <span className="text-primary-light/80">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-light" />
                <span className="text-primary-light/80">info@mi-hidayatulathfal.sch.id</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Media */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-lg border-b-2 border-primary w-12 pb-2">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Music2 size={20} />
              </a>
            </div>
            <div className="pt-4">
              <p className="text-xs text-primary-light/60">Jam Layanan: Senin - Jumat (07:00 - 15:00)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-primary-light/60">
          <p>© 2026 MI Hidayatul Athfal. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
