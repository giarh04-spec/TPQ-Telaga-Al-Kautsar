import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Loader2, CheckCircle } from 'lucide-react';
import { db, OperationType, handleFirestoreError } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        status: 'unread',
        createdAt: serverTimestamp(),
      });
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'contacts');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary-dark py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L50 0 L100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Hubungi Kami</h1>
          <p className="text-primary-light/80 max-w-2xl mx-auto text-lg">
            Ada pertanyaan atau butuh informasi lebih lanjut? Silakan hubungi kami melalui formulir di bawah ini atau saluran komunikasi lainnya.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold text-gray-900">Informasi Kontak</h2>
                <div className="w-20 h-1 bg-primary rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 bg-gray-50 rounded-3xl space-y-4 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-2xl flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-gray-800">Alamat Sekolah</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Jl. Al Fakhir No. 123, Kota Pendidikan, Provinsi Jawa Barat, Indonesia 12345
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 bg-gray-50 rounded-3xl space-y-4 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-2xl flex items-center justify-center text-primary">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-gray-800">Telepon & WhatsApp</h3>
                  <p className="text-gray-600 text-sm">
                    Admin: +62 812-3456-7890<br />
                    Humas: +62 812-9876-5432
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 bg-gray-50 rounded-3xl space-y-4 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-2xl flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-gray-800">Email Resmi</h3>
                  <p className="text-gray-600 text-sm">
                    info@alfakhir.sch.id<br />
                    ppdb@alfakhir.sch.id
                  </p>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 bg-gray-50 rounded-3xl space-y-4 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-light rounded-2xl flex items-center justify-center text-primary">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="font-bold text-gray-800">Media Sosial</h3>
                  <p className="text-gray-600 text-sm">
                    IG: @alfakhir.official<br />
                    FB: SMP Islam Al Fakhir
                  </p>
                </motion.div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-3xl overflow-hidden h-80 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <MapPin size={48} className="opacity-20 mb-4" />
                  <span className="font-bold uppercase tracking-widest">Google Maps Sekolah</span>
                </div>
                {/* Real Map Iframe would go here */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.183701625!2d106.71967724214534!3d-6.287632313627763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a0e1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sJakarta!5e0!3m2!1sen!2sid!4v1631234567890!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/50 rounded-bl-full -z-10" />
              
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-heading font-bold text-gray-900">Kirim Pesan</h2>
                  <p className="text-gray-500">Kami akan merespon pesan Anda segera.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Nama Lengkap</label>
                      <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none" placeholder="Masukkan nama Anda" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Nomor WhatsApp</label>
                      <input required name="phone" value={formData.phone} onChange={handleChange} type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none" placeholder="0812..." />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email</label>
                    <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none" placeholder="alamat@email.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Subjek</label>
                    <input required name="subject" value={formData.subject} onChange={handleChange} type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none" placeholder="Tujuan pesan" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Pesan Anda</label>
                    <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none" placeholder="Tuliskan pesan lengkap Anda di sini..."></textarea>
                  </div>

                  {isSuccess && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-50 text-green-600 rounded-2xl flex items-center space-x-2 text-sm font-medium">
                      <CheckCircle size={18} />
                      <span>Pesan Anda telah berhasil terkirim!</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 flex items-center justify-center space-x-2 group disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        <span>Kirim Pesan Sekarang</span>
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
