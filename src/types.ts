import { Timestamp } from 'firebase/firestore';

export type UserRole = 'super_admin' | 'admin' | 'teacher' | 'operator';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  createdAt: Timestamp;
}

export interface News {
  id?: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  image: string;
  author: string;
  published: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface PPDBRegistration {
  id?: string;
  registrationNumber: string;
  fullName: string;
  nik: string;
  nisn: string;
  birthPlace: string;
  birthDate: string;
  gender: 'Laki-laki' | 'Perempuan';
  religion: string;
  address: string;
  previousSchool: string;
  fatherName: string;
  motherName: string;
  whatsappNumber: string;
  email: string;
  documents: {
    kk: string;
    birthCertificate: string;
    photo: string;
    others?: string;
  };
  status: 'baru' | 'diverifikasi' | 'lulus' | 'tidak_lulus';
  createdAt: Timestamp;
}

export interface Teacher {
  id?: string;
  name: string;
  nip?: string;
  position: string;
  subject: string;
  photo: string;
  createdAt: Timestamp;
}

export interface Achievement {
  id?: string;
  title: string;
  studentName: string;
  level: string;
  date: string;
  category: 'Akademik' | 'Olahraga' | 'Seni' | 'Keagamaan' | 'Teknologi';
  image: string;
}

export interface GalleryItem {
  id?: string;
  title: string;
  imageUrl: string;
  category: string;
  createdAt: Timestamp;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  whatsapp: string;
  subject: string;
  message: string;
  createdAt: Timestamp;
}
