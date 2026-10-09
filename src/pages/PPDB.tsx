import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Upload, Send, Loader2 } from 'lucide-react';
import { db, OperationType, handleFirestoreError } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function PPDB() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [regId, setRegId] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    nik: '',
    nisn: '',
    birthPlace: '',
    birthDate: '',
    gender: 'Laki-laki',
    religion: 'Islam',
    address: '',
    previousSchool: '',
    fatherName: '',
    motherName: '',
    whatsappNumber: '',
    email: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const generatedId = `HA-2026-${Math.floor(Math.random() * 9000) + 1000}`;
      const path = 'ppdb_registrations';
      
      await addDoc(collection(db, path), {
        ...formData,
        registrationId: generatedId,
        status: 'pending',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      
      setRegId(generatedId);
      setStep(3);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'ppdb_registrations');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Penerimaan Peserta Didik Baru
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-light/80 max-w-2xl mx-auto"
          >
            Tahun Pelajaran 2026/2027. Bergabunglah bersama kami mencetak generasi Qur'ani yang unggul dan berkarakter.
          </motion.p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Steps */}
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 -z-10" />
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500'}`}>1</div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500'}`}>2</div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500'}`}>3</div>
          </div>

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl space-y-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Informasi & Persyaratan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-primary flex items-center space-x-2">
                    <CheckCircle size={18} />
                    <span>Persyaratan Umum</span>
                  </h3>
                  <ul className="list-disc pl-6 text-sm text-gray-600 space-y-2">
                    <li>Lulus SD/MI/Sederajat</li>
                    <li>Memiliki Ijazah/SKL</li>
                    <li>Usia maksimal 15 tahun per Juli 2026</li>
                    <li>Sehat jasmani dan rohani</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-primary flex items-center space-x-2">
                    <Upload size={18} />
                    <span>Dokumen Pendukung</span>
                  </h3>
                  <ul className="list-disc pl-6 text-sm text-gray-600 space-y-2">
                    <li>Fotokopi Kartu Keluarga</li>
                    <li>Fotokopi Akta Kelahiran</li>
                    <li>Pas Foto Terbaru (3x4)</li>
                    <li>Sertifikat Prestasi (Jika ada)</li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 text-center">
                <button
                  onClick={() => setStep(2)}
                  className="px-12 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg"
                >
                  MULAI PENDAFTARAN
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl space-y-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Formulir Pendaftaran</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Nama Lengkap</label>
                  <input required name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">NIK (Sesuai KK)</label>
                  <input required name="nik" value={formData.nik} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">NISN</label>
                  <input required name="nisn" value={formData.nisn} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">WhatsApp Aktif</label>
                  <input required name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Asal Sekolah</label>
                  <input required name="previousSchool" value={formData.previousSchool} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Jenis Kelamin</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none">
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>
              </div>

              <div className="pt-8 flex space-x-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/2 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary-light transition-all"
                >
                  KEMBALI
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-1/2 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <>
                      <span>SUBMIT DATA</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}

          {step === 3 && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-xl text-center space-y-6"
            >
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={48} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Pendaftaran Berhasil!</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Terima kasih, <strong>{formData.fullName}</strong>. Data pendaftaran Anda telah kami terima. Panitia akan menghubungi Anda melalui nomor WhatsApp <strong>{formData.whatsappNumber}</strong> untuk tahapan seleksi selanjutnya.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                <span className="text-xs text-gray-400 uppercase font-bold">Nomor Pendaftaran</span>
                <div className="text-2xl font-mono font-bold text-primary mt-1">{regId}</div>
              </div>
              <button
                onClick={() => window.print()}
                className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all"
              >
                CETAK BUKTI PENDAFTARAN
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
