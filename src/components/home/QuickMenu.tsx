import { motion } from 'motion/react';
import { UserPlus, UserCheck, Users, ClipboardList, CalendarCheck, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const menus = [
  { name: 'PPDB Online', icon: UserPlus, path: '/ppdb', color: 'bg-teal-500' },
  { name: 'Portal Siswa', icon: UserCheck, path: '#', color: 'bg-blue-500' },
  { name: 'Portal Guru', icon: Users, path: '#', color: 'bg-purple-500' },
  { name: 'E-Rapor', icon: ClipboardList, path: '#', color: 'bg-orange-500' },
  { name: 'Absensi', icon: CalendarCheck, path: '#', color: 'bg-red-500' },
  { name: 'Download', icon: Download, path: '/download', color: 'bg-indigo-500' },
];

export default function QuickMenu() {
  return (
    <section className="relative z-30 -mt-16 container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {menus.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              to={item.path}
              className="group block bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-center border border-gray-50"
            >
              <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <item.icon size={28} />
              </div>
              <span className="font-bold text-gray-700 text-sm md:text-base group-hover:text-primary transition-colors">
                {item.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
