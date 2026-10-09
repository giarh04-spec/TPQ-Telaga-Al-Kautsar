/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  Users, 
  MapPin, 
  Phone, 
  Clock, 
  Calendar, 
  CheckCircle, 
  ChevronRight, 
  Star, 
  Send, 
  Menu, 
  X, 
  Heart, 
  Sparkles, 
  GraduationCap, 
  ShieldCheck, 
  Check
} from 'lucide-react';

interface RegistrationData {
  fullName: string;
  nickname: string;
  gender: 'L' | 'P';
  age: string;
  parentName: string;
  whatsapp: string;
  program: string;
  address: string;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'tahfidz' | 'tilawah' | 'fiqih' | 'akhlak'>('all');
  const [selectedProgramModal, setSelectedProgramModal] = useState<string | null>(null);
  
  // PPDB Form State
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    nickname: '',
    gender: 'L',
    age: '7',
    parentName: '',
    whatsapp: '',
    program: 'Reguler Tahfidz & Tilawah (Sore)',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    noReg: string;
    date: string;
    data: RegistrationData;
  } | null>(null);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.parentName || !formData.whatsapp) {
      alert('Mohon lengkapi Nama Lengkap Santri, Nama Orang Tua, dan Nomor WhatsApp.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomNo = Math.floor(100000 + Math.random() * 900000);
      setSubmittedTicket({
        noReg: `REG-${randomNo}`,
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        data: { ...formData }
      });
    }, 800);
  };

  const programs = [
    {
      id: 'tahfidz',
      category: 'tahfidz',
      title: 'Tahfidz Al-Qur’an (Juz 30 & 29)',
      desc: 'Program khusus hafalan Al-Qur’an dengan bimbingan talaqqi yang teliti, memastikan makhraj dan tajwid yang benar sejak dini.',
      target: 'Target 1-2 Juz / Tahun',
      schedule: 'Senin - Jumat (15.30 - 17.30 WIB)',
      icon: BookOpen,
      badge: 'Unggulan'
    },
    {
      id: 'tilawah',
      category: 'tilawah',
      title: 'Tilawah & Metode Tartil',
      desc: 'Belajar membaca Al-Qur’an secara fasih menggunakan metode praktis teruji (Iqro / Yanbu’a) dengan nada tartil yang merdu.',
      target: 'Fasih & Bertajwid',
      schedule: 'Senin - Jumat (15.30 - 17.30 WIB)',
      icon: Sparkles,
      badge: 'Populer'
    },
    {
      id: 'fiqih',
      category: 'fiqih',
      title: 'Doa Harian & Fardhu Ain',
      desc: 'Praktik ibadah sehari-hari meliputi tata cara wudhu, gerakan sholat fardhu & sunnah, serta hafalan doa pilihan.',
      target: 'Praktik Ibadah Mandiri',
      schedule: 'Senin & Rabu (Sesi Khusus)',
      icon: GraduationCap,
      badge: 'Dasar'
    },
    {
      id: 'akhlak',
      category: 'akhlak',
      title: 'Akhlakul Karimah & Adab',
      desc: 'Pembentukan karakter Islami, adab kepada orang tua, guru, dan sesama teman melalui kisah teladan Rasulullah SAW.',
      target: 'Karakter Mulia',
      schedule: 'Jumat Sore (Kultum & Muhasabah)',
      icon: Heart,
      badge: 'Esensial'
    }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(p => p.category === activeTab);

  const activities = [
    {
      title: 'Khataman & Wisuda Santri',
      desc: 'Acara tahunan apresiasi bagi santri yang telah menyelesaikan target hafalan dan Iqro.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      tag: 'Kegiatan Tahunan'
    },
    {
      title: 'Kegiatan Belajar Mengaji Harian',
      desc: 'Suasana kelas talaqqi interaktif dengan bimbingan ustadz dan ustadzah yang sabar & telaten.',
      image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80',
      tag: 'Kelas Utama'
    },
    {
      title: 'Pesantren Kilat Ramadhan',
      desc: 'Program intensif pendalaman ilmu agama, buka puasa bersama, dan bakti sosial santri.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
      tag: 'Spiritual Camp'
    },
    {
      title: 'Praktik Ibadah & Doa Bersama',
      desc: 'Membiasakan sholat berjamaah, hafalan doa harian, dan praktik manasik cilik.',
      image: 'https://images.unsplash.com/photo-1584467735811-628489fc667f?auto=format&fit=crop&w=800&q=80',
      tag: 'Praktik Ibadah'
    }
  ];

  const faqs = [
    {
      q: 'Berapa usia minimal anak untuk dapat mendaftar di TPQ Telaga Al Kautsar?',
      a: 'Usia minimal santri adalah 5 tahun (TK Besar / SD kelas 1). Kami menyediakan kelas berjenjang mulai dari tingkat dasar pengenalan huruf hijaiyah hingga tingkat mahir tahfidz.'
    },
    {
      q: 'Bagaimana metode pengajaran Al-Qur’an yang digunakan di sini?',
      a: 'Kami menggunakan metode talaqqi (berkelompok dan privat bergantian) dengan pendekatan interaktif yang menyenangkan, didukung metode bacaan tartil standar.'
    },
    {
      q: 'Apakah ada fasilitas laporan perkembangan hafalan santri untuk orang tua?',
      a: 'Ya, setiap santri memiliki Buku Penghubung Santri yang diisi setiap hari oleh ustadz/ustadzah, serta laporan evaluasi bulanan yang dapat dipantau orang tua.'
    },
    {
      q: 'Bagaimana cara melakukan pembayaran infaq bulanan TPQ?',
      a: 'Infaq bulanan dapat dibayarkan melalui transfer bank syariah resmi TPQ atau tunai melalui sekretariat setiap tanggal 1 sd 10 tiap bulannya.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-950 text-slate-100 font-sans selection:bg-emerald-600 selection:text-white relative overflow-x-hidden">
      
      {/* Background Decorative Islamic geometric glowing accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Announcement Bar */}
      <div className="bg-emerald-900/80 backdrop-blur-md text-emerald-100 px-4 py-2 text-xs md:text-sm font-medium text-center border-b border-emerald-700/40 relative z-50">
        <span>🌙 Pendaftaran Santri Baru (PPDB) Tahun Ajaran 2026/2027 Telah Dibuka! </span>
        <a href="#pendaftaran" className="underline font-semibold ml-2 hover:text-white">Daftar Sekarang →</a>
      </div>

      {/* Top Bar Contract (Zone 1: Brand, Zone 2: Nav, Zone 3: Primary CTA) */}
      <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-12 h-12 rounded-full bg-emerald-600/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:bg-emerald-500 transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight text-white leading-tight">
                TPQ Telaga Al Kautsar
              </div>
              <div className="text-xs text-emerald-300 font-medium tracking-wide">
                Generasi Qur'ani, Cerdas & Berakhlak Mulia
              </div>
            </div>
          </a>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#tentang" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Tentang Kami</a>
            <a href="#program" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Program Unggulan</a>
            <a href="#kurikulum" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Kurikulum</a>
            <a href="#kegiatan" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Galeri & Kegiatan</a>
            <a href="#faq" className="hover:text-white transition-colors whitespace-nowrap shrink-0">FAQ</a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="#pendaftaran" 
              className="px-5 py-2.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md hover:shadow-lg whitespace-nowrap shrink-0"
            >
              Daftar Santri Baru
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 space-y-3">
            <a 
              href="#tentang" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-sm font-medium text-slate-200 hover:text-emerald-400 py-1"
            >
              Tentang Kami
            </a>
            <a 
              href="#program" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-sm font-medium text-slate-200 hover:text-emerald-400 py-1"
            >
              Program Unggulan
            </a>
            <a 
              href="#kurikulum" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-sm font-medium text-slate-200 hover:text-emerald-400 py-1"
            >
              Kurikulum
            </a>
            <a 
              href="#kegiatan" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-sm font-medium text-slate-200 hover:text-emerald-400 py-1"
            >
              Galeri & Kegiatan
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-sm font-medium text-slate-200 hover:text-emerald-400 py-1"
            >
              FAQ
            </a>
          </div>
        )}
      </header>

      {/* Hero Section with Transparent Glass Overlay & Background Photo */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1600&q=80" 
            alt="TPQ Telaga Al Kautsar" 
            className="w-full h-full object-cover opacity-25 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-emerald-950/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-900/60 backdrop-blur-md border border-emerald-500/40 rounded-full px-4 py-1.5 text-xs font-semibold text-emerald-200 tracking-wide uppercase shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Taman Pendidikan Al-Qur'an Telaga Al Kautsar
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-balance">
              Generasi Qur'ani, Cerdas & Berakhlak Mulia
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Mendidik putra-putri tercinta dengan landasan cinta Al-Qur'an, kedisiplinan beribadah, kecerdasan intelektual, serta adab dan budi pekerti luhur untuk masa depan gemilang dunia dan akhirat.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#pendaftaran" 
                className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 text-base"
              >
                Daftar Santri Baru <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="#program" 
                className="px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 transition-all text-base"
              >
                Jelajahi Program
              </a>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-8">
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-amber-400 tabular-nums">250+</div>
                <div className="text-xs text-slate-300 mt-0.5">Santri Aktif Berprestasi</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-amber-400 tabular-nums">15+</div>
                <div className="text-xs text-slate-300 mt-0.5">Ustadz & Ustadzah Hafidz</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-amber-400 tabular-nums">100%</div>
                <div className="text-xs text-slate-300 mt-0.5">Metode Talaqqi & Menyenangkan</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 to-emerald-500 rounded-3xl blur-xl opacity-25"></div>
              <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl text-center space-y-6">
                
                {/* Emblem / Logo Representation */}
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 p-1 flex items-center justify-center shadow-inner">
                  <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-3 text-white text-center border border-white/10">
                    <BookOpen className="w-10 h-10 text-emerald-400 mb-1" />
                    <span className="text-[10px] font-bold tracking-wider uppercase">TPQ</span>
                    <span className="text-[9px] font-semibold text-emerald-300">Al Kautsar</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">TPQ Telaga Al Kautsar</h3>
                  <p className="text-xs text-emerald-300 mt-1 italic">"Mencetak Generasi Cinta Al-Qur'an Sejak Dini"</p>
                </div>

                <div className="space-y-3 text-left text-xs text-slate-200 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Kurikulum Tahfidz & Tilawah Terpadu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Bimbingan Akhlak & Ibadah Praktis Harian</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Lingkungan Belajar Nyaman & Islami</span>
                  </div>
                </div>

                <a 
                  href="#pendaftaran" 
                  className="block w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm transition-colors text-center shadow"
                >
                  Ambil Formulir Pendaftaran
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami Section with Glassmorphism */}
      <section id="tentang" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 tracking-wider uppercase bg-emerald-900/60 backdrop-blur-md px-3 py-1 rounded-md border border-emerald-500/30">
                Tentang Yayasan & TPQ
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Membangun Pondasi Spiritual & Moral Anak Sejak Dini
              </h2>
              <p className="text-slate-300 leading-relaxed text-base">
                TPQ Telaga Al Kautsar hadir sebagai wadah pendidikan Al-Qur'an non-formal yang berdedikasi tinggi untuk membimbing anak-anak usia dini dan sekolah dasar agar fasih membaca Al-Qur'an, menghafal juz amma, serta mengamalkan nilai-nilai akhlakul karimah dalam kehidupan sehari-hari.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    🎯
                  </div>
                  <h4 className="font-bold text-white">Visi Utama</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Menjadi pusat pendidikan Al-Qur'an terdepan yang melahirkan generasi Qur'ani cerdas, berilmu, dan berakhlak mulia.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    🚀
                  </div>
                  <h4 className="font-bold text-white">Misi Nyata</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Menerapkan metode talaqqi interaktif, pembiasaan ibadah fardhu, dan penanaman adab islami yang kuat.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-emerald-900/40 backdrop-blur-md border border-emerald-500/30 text-white p-6 rounded-3xl shadow-xl space-y-3">
                  <GraduationCap className="w-8 h-8 text-amber-400" />
                  <div className="text-2xl font-bold tabular-nums">98%</div>
                  <div className="text-xs text-emerald-200">Tingkat kelulusan baca Al-Qur'an fasih sesuai target usia.</div>
                </div>
                <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 rounded-3xl space-y-3">
                  <ShieldCheck className="w-8 h-8 text-emerald-400" />
                  <div className="text-2xl font-bold text-white tabular-nums">Aman</div>
                  <div className="text-xs text-slate-300">Lingkungan kondusif, ramah anak, dan bebas dari pengaruh negatif.</div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-white p-6 rounded-3xl shadow-xl space-y-3">
                  <Award className="w-8 h-8 text-amber-400" />
                  <div className="text-2xl font-bold tabular-nums">Juara</div>
                  <div className="text-xs text-amber-200 font-medium">Aktif mengirimkan santri di ajang Musabaqah Tilawatil Quran (MTQ) tingkat kecamatan & kota.</div>
                </div>
                <div className="bg-teal-900/40 backdrop-blur-md border border-teal-500/30 p-6 rounded-3xl space-y-3">
                  <Users className="w-8 h-8 text-teal-300" />
                  <div className="text-2xl font-bold text-white tabular-nums">Keluarga</div>
                  <div className="text-xs text-slate-300">Hubungan erat antara pengajar, santri, dan wali santri dalam pembinaan akhlak.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Program Unggulan Section */}
      <section id="program" className="py-24 bg-slate-950/40 backdrop-blur-md border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 tracking-wider uppercase bg-emerald-900/60 backdrop-blur-md px-3 py-1 rounded-md border border-emerald-500/30">
              Kurikulum & Pembelajaran
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Program Unggulan TPQ Telaga Al Kautsar
            </h2>
            <p className="text-slate-300 text-base">
              Dirancang secara sistematis untuk memastikan setiap santri menguasai ilmu Al-Qur'an dan dasar keislaman dengan gembira.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${activeTab === 'all' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white/5 backdrop-blur-md text-slate-300 hover:bg-white/10 border border-white/10'}`}
              >
                Semua Program
              </button>
              <button 
                onClick={() => setActiveTab('tahfidz')}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${activeTab === 'tahfidz' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white/5 backdrop-blur-md text-slate-300 hover:bg-white/10 border border-white/10'}`}
              >
                Tahfidz Al-Qur'an
              </button>
              <button 
                onClick={() => setActiveTab('tilawah')}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${activeTab === 'tilawah' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white/5 backdrop-blur-md text-slate-300 hover:bg-white/10 border border-white/10'}`}
              >
                Tilawah & Tartil
              </button>
              <button 
                onClick={() => setActiveTab('fiqih')}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${activeTab === 'fiqih' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white/5 backdrop-blur-md text-slate-300 hover:bg-white/10 border border-white/10'}`}
              >
                Fiqih & Doa
              </button>
              <button 
                onClick={() => setActiveTab('akhlak')}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${activeTab === 'akhlak' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white/5 backdrop-blur-md text-slate-300 hover:bg-white/10 border border-white/10'}`}
              >
                Akhlak & Adab
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPrograms.map((prog) => {
              const IconComp = prog.icon;
              return (
                <div 
                  key={prog.id}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-emerald-500/50 shadow-xl transition-all flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors border border-emerald-500/30">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-900/60 text-emerald-200 px-2.5 py-1 rounded-full border border-emerald-500/30">
                        {prog.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {prog.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="truncate">{prog.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="font-semibold text-amber-300">{prog.target}</span>
                    </div>

                    <button 
                      onClick={() => setSelectedProgramModal(prog.title)}
                      className="w-full mt-2 py-2.5 bg-white/10 hover:bg-emerald-600 hover:text-white text-slate-200 font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 border border-white/10"
                    >
                      Detail Kurikulum <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kurikulum & Jenjang Belajar */}
      <section id="kurikulum" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 tracking-wider uppercase bg-emerald-900/60 backdrop-blur-md px-3 py-1 rounded-md border border-emerald-500/30">
              Jenjang Pembelajaran
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Tahapan Kelas di TPQ Telaga Al Kautsar
            </h2>
            <p className="text-slate-300 text-base">
              Setiap santri ditempatkan sesuai kemampuan dasar untuk memastikan proses belajar berjalan efektif dan menyenangkan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-4 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl">
                Level 01
              </div>
              <div className="text-emerald-400 font-bold text-sm">Pra-Tahsin & Iqro 1 - 3</div>
              <h3 className="text-2xl font-extrabold text-white">Kelas Dasar</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Pengenalan huruf hijaiyah, makhraj dasar, harokat fathah, kasroh, dhommah, serta bacaan pendek jilid awal.
              </p>
              <ul className="space-y-2 text-xs text-slate-200 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">✓ Pengenalan Huruf Hijaiyah</li>
                <li className="flex items-center gap-2">✓ Buku Iqro Jilid 1 hingga 3</li>
                <li className="flex items-center gap-2">✓ Doa Sehari-hari Pendek</li>
              </ul>
            </div>

            <div className="bg-emerald-900/50 backdrop-blur-xl border border-emerald-500/40 rounded-3xl p-8 space-y-4 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 text-xs font-bold px-4 py-1.5 rounded-bl-2xl">
                Level 02
              </div>
              <div className="text-amber-300 font-bold text-sm">Tahsin Lanjutan & Iqro 4 - 6</div>
              <h3 className="text-2xl font-extrabold text-white">Kelas Menengah</h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                Penyempurnaan bacaan tajwid dasar, mad, nun mati, tanwin, serta mulai transisi membaca Al-Qur'an Mushaf standar.
              </p>
              <ul className="space-y-2 text-xs text-emerald-200 pt-2 border-t border-emerald-500/30">
                <li className="flex items-center gap-2 text-amber-300">✓ Tajwid Praktis & Hukum Nun Sukun</li>
                <li className="flex items-center gap-2 text-amber-300">✓ Transisi ke Mushaf Al-Qur'an</li>
                <li className="flex items-center gap-2 text-amber-300">✓ Praktik Wudhu & Sholat Lengkap</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-4 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl">
                Level 03
              </div>
              <div className="text-emerald-400 font-bold text-sm">Tahfidz Juz 30 & 29</div>
              <h3 className="text-2xl font-extrabold text-white">Kelas Tahfidz</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Fokus hafalan Juz Amma dan surat-surat pilihan, murajaah rutin, serta bimbingan tartil dan adab khataman.
              </p>
              <ul className="space-y-2 text-xs text-slate-200 pt-2 border-t border-white/10">
                <li className="flex items-center gap-2">✓ Hafalan Juz 30 & 29</li>
                <li className="flex items-center gap-2">✓ Murajaah & Tasmi' Berkala</li>
                <li className="flex items-center gap-2">✓ Sertifikat Wisuda Santri</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri & Kegiatan TPQ Section (With Real Photos) */}
      <section id="kegiatan" className="py-24 bg-slate-950/50 backdrop-blur-md border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 tracking-wider uppercase bg-emerald-900/60 backdrop-blur-md px-3 py-1 rounded-md border border-emerald-500/30">
              Aktivitas & Galeri TPQ
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Dokumentasi Kegiatan TPQ Telaga Al Kautsar
            </h2>
            <p className="text-slate-300 text-base">
              Momen kebersamaan, keceriaan, dan kekhusyukan santri dalam menuntut ilmu Al-Qur'an.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((act, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col group"
              >
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={act.image} 
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-slate-950/70 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-semibold text-emerald-300">
                    {act.tag}
                  </div>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">{act.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {act.desc}
                  </p>
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1 pt-2">
                    <span>Dokumentasi Resmi TPQ</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pendaftaran Santri Baru (PPDB Form) */}
      <section id="pendaftaran" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 tracking-wider uppercase bg-emerald-900/60 backdrop-blur-md px-3 py-1 rounded-md border border-emerald-500/30">
              PPDB Online 2026/2027
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Formulir Pendaftaran Santri Baru
            </h2>
            <p className="text-slate-300 text-base">
              Silakan isi formulir di bawah ini untuk mendaftarkan putra-putri Anda. Tim kami akan segera menghubungi Anda via WhatsApp.
            </p>
          </div>

          {submittedTicket ? (
            <div className="bg-emerald-950/80 backdrop-blur-2xl border-2 border-emerald-500 rounded-3xl p-8 lg:p-12 text-center space-y-6 shadow-2xl">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Check className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-500/40">
                  Pendaftaran Berhasil Dikirim
                </span>
                <h3 className="text-2xl font-extrabold text-white">Alhamdulillah, Pendaftaran Tercatat!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Nomor Pendaftaran Anda <strong className="text-amber-400">{submittedTicket.noReg}</strong>. Silakan simpan nomor ini dan tunggu konfirmasi dari admin kami.
                </p>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-left max-w-md mx-auto space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Nama Santri:</span>
                  <span className="font-bold text-white">{submittedTicket.data.fullName} ({submittedTicket.data.nickname})</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Program Pilihan:</span>
                  <span className="font-bold text-emerald-300">{submittedTicket.data.program}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Nama Orang Tua:</span>
                  <span className="font-bold text-white">{submittedTicket.data.parentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">WhatsApp:</span>
                  <span className="font-bold text-white">{submittedTicket.data.whatsapp}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setSubmittedTicket(null)}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs transition-colors shadow"
                >
                  Daftar Santri Lain
                </button>
                <a 
                  href={`https://wa.me/6281234567890?text=Halo%20Admin%20TPQ%20Telaga%20Al%20Kautsar,%20saya%20sudah%20mendaftar%20dengan%20nomor%20${submittedTicket.noReg}%20atas%20nama%20${submittedTicket.data.fullName}.`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs transition-colors shadow flex items-center gap-2 border border-emerald-500/40"
                >
                  <Send className="w-4 h-4" /> Konfirmasi via WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-10 space-y-6 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                    Nama Lengkap Santri <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Contoh: Muhammad Al Fatih"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm bg-slate-900/50 text-white placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                    Nama Panggilan
                  </label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Fatih"
                    value={formData.nickname}
                    onChange={(e) => setFormData({...formData, nickname: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm bg-slate-900/50 text-white placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                    Jenis Kelamin
                  </label>
                  <select 
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value as 'L' | 'P'})}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm bg-slate-900 text-white"
                  >
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                    Usia Santri (Tahun)
                  </label>
                  <input 
                    type="number" 
                    min="4" 
                    max="15"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm bg-slate-900/50 text-white placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                    Nama Orang Tua / Wali <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Contoh: Bpk. Ahmad / Ibu Siti"
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm bg-slate-900/50 text-white placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                    Nomor WhatsApp (Aktif) <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="Contoh: 081234567890"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm bg-slate-900/50 text-white placeholder:text-slate-500"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  Pilihan Program Belajar
                </label>
                <select 
                  value={formData.program}
                  onChange={(e) => setFormData({...formData, program: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm bg-slate-900 text-white"
                >
                  <option value="Reguler Tahfidz & Tilawah (Sore)">Reguler Tahfidz & Tilawah (Senin - Jumat 15.30 - 17.30)</option>
                  <option value="Kelas Intensif Tahfidz Juz 30">Kelas Intensif Tahfidz Juz 30</option>
                  <option value="Kelas Iqro & Dasar Islam">Kelas Iqro & Dasar Islam (Pemula)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  Alamat Domisili Lengkap
                </label>
                <textarea 
                  rows={3}
                  placeholder="Contoh: Jl. Melati No. 12, RT 02/05, Kelurahan..."
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 text-sm bg-slate-900/50 text-white placeholder:text-slate-500"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-base"
              >
                {isSubmitting ? 'Mengirim Data...' : 'Kirim Pendaftaran Sekarang'} <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Testimoni Wali Santri */}
      <section className="py-24 bg-slate-950/70 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 tracking-wider uppercase bg-emerald-900/60 backdrop-blur-md px-3 py-1 rounded-md border border-emerald-500/30">
              Testimoni Wali Santri
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Apa Kata Orang Tua Santri?
            </h2>
            <p className="text-slate-300 text-base">
              Kebanggaan dan kebahagiaan para orang tua melihat perkembangan buah hati di TPQ Telaga Al Kautsar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-4 flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "Alhamdulillah anak saya sekarang jauh lebih rajin sholat 5 waktu dan hafalannya sudah sampai surat Al-Fajr. Ustadz dan ustadzahnya sangat telaten dan sabar."
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="font-bold text-white text-sm">Ibu Hj. Rina Marlina</div>
                <div className="text-xs text-emerald-300">Wali Santri Kelas Tahfidz</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-4 flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "Metode mengajarnya sangat menyenangkan. Anak-anak tidak merasa terbebani tapi justru rindu pergi ke TPQ setiap sore hari."
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="font-bold text-white text-sm">Bpk. H. Hendra Setiawan</div>
                <div className="text-xs text-emerald-300">Wali Santri Kelas Tilawah</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-4 flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  "Selain baca Al-Quran, adab dan tata krama anak saya di rumah banyak berubah menjadi lebih santun terhadap orang tua."
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="font-bold text-white text-sm">Ibu Siti Nur Aisyah</div>
                <div className="text-xs text-emerald-300">Wali Santri Kelas Dasar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 tracking-wider uppercase bg-emerald-900/60 backdrop-blur-md px-3 py-1 rounded-md border border-emerald-500/30">
              Pertanyaan Umum
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Informasi & Tanya Jawab (FAQ)
            </h2>
            <p className="text-slate-300 text-base">
              Hal-hal yang sering ditanyakan seputar pendaftaran dan kegiatan di TPQ Telaga Al Kautsar.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl transition-all shadow-lg"
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left font-bold text-white flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-base">{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-sm transition-transform border border-emerald-500/30 ${isOpen ? 'rotate-180 bg-emerald-600 text-white' : ''}`}>
                      ↓
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kontak & Lokasi Section */}
      <section className="py-24 bg-slate-950/60 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 tracking-wider uppercase bg-emerald-900/60 backdrop-blur-md px-3 py-1 rounded-md border border-emerald-500/30">
                Hubungi Kami
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Kunjungi Sekretariat atau Hubungi Kami
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Kami dengan senang hati menyambut silaturahmi dari para orang tua wali santri yang ingin berkonsultasi langsung mengenai pendidikan Al-Qur'an buah hati.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Alamat Sekretariat</h4>
                    <p className="text-xs text-slate-300 mt-1">Jl. Telaga Al Kautsar Raya No. 10, Komplek Masjid Al-Kautsar, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">WhatsApp / Telepon</h4>
                    <p className="text-xs text-slate-300 mt-1">+62 812-3456-7890 (Ust. Ahmad Fauzi)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Jam Operasional TPQ</h4>
                    <p className="text-xs text-slate-300 mt-1">Senin s.d. Jumat: 15.30 - 17.30 WIB (Sore hari)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white">Kirim Pesan Singkat</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">Nama Anda</label>
                  <input type="text" placeholder="Nama Lengkap" className="w-full mt-1 px-4 py-3 rounded-xl border border-white/20 text-sm bg-slate-900/50 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">Nomor WhatsApp</label>
                  <input type="tel" placeholder="0812xxxx" className="w-full mt-1 px-4 py-3 rounded-xl border border-white/20 text-sm bg-slate-900/50 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wide">Pesan / Pertanyaan</label>
                  <textarea rows={4} placeholder="Tuliskan pertanyaan Anda di sini..." className="w-full mt-1 px-4 py-3 rounded-xl border border-white/20 text-sm bg-slate-900/50 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"></textarea>
                </div>
                <button 
                  onClick={() => alert('Terima kasih! Pesan Anda telah terkirim. Admin kami akan segera merespons.')}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-colors shadow-lg"
                >
                  Kirim Pesan Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Detail Modal */}
      {selectedProgramModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/20 rounded-3xl max-w-lg w-full p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in duration-200 text-white">
            <button 
              onClick={() => setSelectedProgramModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold border border-emerald-500/30">
              📖
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/60 px-2.5 py-1 rounded-md border border-emerald-500/30">
                Detail Kurikulum
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedProgramModal}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Program unggulan di TPQ Telaga Al Kautsar yang dibimbing oleh tenaga pengajar berpengalaman dengan metode talaqqi dan evaluasi harian yang terstruktur.
              </p>
            </div>

            <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Evaluasi bacaan & hafalan setiap pertemuan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Buku penghubung harian orang tua & guru</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Sertifikat kelulusan level setelah ujian komprehensif</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a 
                href="#pendaftaran" 
                onClick={() => setSelectedProgramModal(null)}
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs text-center transition-colors shadow-lg"
              >
                Daftar Program Ini
              </a>
              <button 
                onClick={() => setSelectedProgramModal(null)}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-slate-300 font-semibold rounded-xl text-xs transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quiet Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-base tracking-tight">TPQ Telaga Al Kautsar</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mewujudkan Generasi Qur'ani, Cerdas & Berakhlak Mulia untuk kejayaan umat dan bangsa.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm">Navigasi Utama</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">Program Unggulan</a></li>
              <li><a href="#kurikulum" className="hover:text-white transition-colors">Kurikulum Belajar</a></li>
              <li><a href="#pendaftaran" className="hover:text-white transition-colors">PPDB Online</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm">Program Belajar</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-white transition-colors">Tahfidz Juz 30 & 29</span></li>
              <li><span className="hover:text-white transition-colors">Tilawah & Metode Yanbu'a</span></li>
              <li><span className="hover:text-white transition-colors">Fiqih Ibadah & Doa Harian</span></li>
              <li><span className="hover:text-white transition-colors">Akhlak & Character Building</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm">Sekretariat TPQ</h4>
            <p className="text-xs leading-relaxed text-slate-400">
              Jl. Telaga Al Kautsar Raya No. 10<br />
              Komplek Masjid Al-Kautsar<br />
              WhatsApp: +62 812-3456-7890
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>&copy; 2026 TPQ Telaga Al Kautsar. Seluruh Hak Cipta Dilindungi.</div>
          <div className="flex gap-6">
            <span>Generasi Qur'ani</span>
            <span>Cerdas & Berakhlak Mulia</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
