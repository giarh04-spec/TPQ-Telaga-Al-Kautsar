import { Phone, Facebook, Instagram, Youtube, Music2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function TopBar() {
  return (
    <div className="bg-primary py-2 text-white text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div className="flex items-center space-x-4">
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-primary-light transition-colors"
          >
            <Phone size={14} className="fill-white" />
            <span>+62 812-3456-7890</span>
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-primary-light transition-colors">
            <Facebook size={16} />
          </a>
          <a href="#" className="hover:text-primary-light transition-colors">
            <Instagram size={16} />
          </a>
          <a href="#" className="hover:text-primary-light transition-colors">
            <Youtube size={16} />
          </a>
          <a href="#" className="hover:text-primary-light transition-colors">
            <Music2 size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
