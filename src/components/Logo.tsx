import React from 'react';
import { 
  BookOpen, 
  Award, 
  Users, 
  CheckCircle, 
  ChevronRight, 
  Send, 
  Menu, 
  X, 
  Heart, 
  Sparkles, 
  GraduationCap, 
  ShieldCheck, 
  Check,
  Clock
} from 'lucide-react';
// I will assume the user has uploaded the image as 'logo.jpg' in the public folder.
// Since I cannot access the file system directly to see if it's there,
// I will instruct the user to ensure it is in /public/logo.jpg.
const Logo = () => (
  <img src="/logo.jpg" alt="TPQ Telaga Al Kautsar" className="w-12 h-12 rounded-full object-cover border border-white/20" />
);

// ... rest of the App code ...
