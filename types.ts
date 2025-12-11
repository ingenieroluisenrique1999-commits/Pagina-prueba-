import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  fullDescription: string; // Revealed on hover
  icon: LucideIcon;
}

export interface Startup {
  id: string;
  name: string;
  description: string;
  logo: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: LucideIcon;
}