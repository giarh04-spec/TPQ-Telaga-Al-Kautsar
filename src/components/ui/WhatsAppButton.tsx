import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const message = encodeURIComponent("Halo Admin SMP Islam Modern Al Fakhir, saya ingin mendapatkan informasi tentang sekolah.");
  const waUrl = `https://wa.me/6281234567890?text=${message}`;

  return (
    <motion.a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors group"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle size={24} className="fill-white" />
      </motion.div>
      <span className="font-bold text-sm">Hubungi Admin</span>
    </motion.a>
  );
}
