import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, Users, UserRound, Newspaper, Calendar, Image as ImageIcon, Video, GraduationCap, Settings, LogOut, Menu, X, ClipboardList, MessageSquare, FileText, Lock, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useFirebase } from '../../context/FirebaseContext';
import { db, OperationType, handleFirestoreError } from '../../lib/firebase';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

const adminMenus = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
  { name: 'Data Siswa', icon: Users, path: '/admin/siswa' },
  { name: 'Data Guru', icon: UserRound, path: '/admin/guru' },
  { name: 'PPDB Registrations', icon: ClipboardList, path: '/admin/ppdb' },
  { name: 'Berita & Blog', icon: Newspaper, path: '/admin/berita' },
  { name: 'Agenda Sekolah', icon: Calendar, path: '/admin/agenda' },
  { name: 'Galeri Foto', icon: ImageIcon, path: '/admin/galeri' },
  { name: 'Video Kegiatan', icon: Video, path: '/admin/video' },
  { name: 'Pesan Kontak', icon: MessageSquare, path: '/admin/pesan' },
  { name: 'Dokumen Download', icon: FileText, path: '/admin/dokumen' },
  { name: 'Pengaturan', icon: Settings, path: '/admin/pengaturan' },
];

export default function AdminDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const { user, isAdmin, login, logout } = useFirebase();
  const [registrations, setRegistrations] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) return;

    const q = query(collection(db, 'ppdb_registrations'), orderBy('createdAt', 'desc'), limit(5));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRegistrations(data);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'ppdb_registrations');
    });

    return () => unsubscribe();
  }, [isAdmin]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-12 rounded-[3rem] shadow-2xl text-center space-y-8">
          <div className="w-20 h-20 bg-primary-light rounded-3xl flex items-center justify-center text-primary mx-auto shadow-lg">
            <Lock size={40} />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-heading font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-500 text-sm">Silakan login menggunakan akun Google Anda untuk mengakses dashboard admin.</p>
          </div>
          <button
            onClick={login}
            className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center space-x-3"
          >
            <Globe size={20} />
            <span>Login with Google</span>
          </button>
          <Link to="/" className="inline-block text-sm text-gray-400 hover:text-primary transition-colors">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-12 rounded-[3rem] shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 bg-red-100 rounded-3xl flex items-center justify-center text-red-500 mx-auto shadow-lg">
            <X size={40} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Akses Ditolak</h1>
          <p className="text-gray-500 text-sm">Akun <strong>{user.email}</strong> tidak memiliki hak akses admin. Hubungi Administrator untuk bantuan.</p>
          <button
            onClick={logout}
            className="w-full py-4 bg-gray-100 text-gray-600 font-bold rounded-2xl hover:bg-gray-200 transition-all"
          >
            Logout & Ganti Akun
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="bg-primary-dark text-white flex flex-col shadow-2xl relative z-50"
      >
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          {isSidebarOpen && (
            <div className="font-heading font-bold text-lg tracking-tight">MI HIDAYATUL ATHFAL</div>
          )}
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-white/10 rounded-lg">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-grow py-6 overflow-y-auto scrollbar-hide">
          {adminMenus.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center px-6 py-4 hover:bg-white/5 transition-colors group"
            >
              <item.icon size={22} className="text-primary-light/60 group-hover:text-white" />
              {isSidebarOpen && <span className="ml-4 font-medium text-sm">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-white/10">
          <button 
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="flex items-center w-full px-4 py-3 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-xl transition-all"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="ml-3 font-bold">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="bg-white h-20 shadow-sm flex items-center justify-between px-8">
          <h1 className="text-xl font-bold text-gray-800">Dashboard Overview</h1>
          <div className="flex items-center space-x-4">
            <div className="text-right hidden md:block">
              <div className="text-sm font-bold text-gray-900">{user?.displayName}</div>
              <div className="text-xs text-gray-500">{isAdmin ? 'Super Admin' : 'Staff'}</div>
            </div>
            <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold overflow-hidden">
              {user?.photoURL ? <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" /> : 'HA'}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard label="Total Siswa" value="156" icon={Users} color="bg-blue-500" />
            <StatCard label="PPDB Baru" value={registrations.length.toString()} icon={ClipboardList} color="bg-teal-500" />
            <StatCard label="Pesan Baru" value="0" icon={MessageSquare} color="bg-orange-500" />
            <StatCard label="Total Berita" value="5" icon={Newspaper} color="bg-purple-500" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent PPDB */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-800">Pendaftar PPDB Terbaru</h3>
                <Link to="/admin/ppdb" className="text-xs text-primary font-bold hover:underline">Lihat Semua</Link>
              </div>
              <div className="space-y-4">
                {registrations.length > 0 ? registrations.map((reg) => (
                  <div key={reg.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-xs text-primary shadow-sm">
                        {reg.fullName.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{reg.fullName}</div>
                        <div className="text-xs text-gray-500">{reg.originSchool || reg.previousSchool}</div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-teal-100 text-teal-600 text-[10px] font-bold rounded-full uppercase">{reg.status}</span>
                  </div>
                )) : (
                  <p className="text-sm text-gray-400 text-center py-4">Belum ada pendaftar baru.</p>
                )}
              </div>
            </div>

            {/* Recent Messages */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-800">Pesan Kontak Terbaru</h3>
                <Link to="/admin/pesan" className="text-xs text-primary font-bold hover:underline">Lihat Semua</Link>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-400 text-center py-4">Tidak ada pesan baru.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, color }: { label: string, value: string, icon: any, color: string }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center space-x-6">
      <div className={`${color} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg`}>
        <Icon size={24} />
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">{label}</div>
      </div>
    </div>
  );
}
