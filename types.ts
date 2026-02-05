
import { ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  imageUrl: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
