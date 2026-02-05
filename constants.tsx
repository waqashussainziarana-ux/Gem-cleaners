
import React from 'react';
import { 
  Sparkles, 
  Droplets, 
  Hammer, 
  Home, 
  Building2, 
  ShieldCheck, 
  Users, 
  Calendar,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { Testimonial, Service } from './types.ts';

export const SERVICES: Service[] = [
  {
    id: 'deep',
    title: 'Deep Cleaning',
    description: 'Thorough cleaning with specialized tools to remove dirt, stains, and allergens from every corner.',
    icon: <Sparkles className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'specialist',
    title: 'Specialist Cleaning',
    description: 'Handle tough stains like pet stains, wine, or food spills using expert techniques and high-grade solutions.',
    icon: <Droplets className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'construction',
    title: 'Construction Cleaning',
    description: 'Comprehensive cleanup after construction or renovation to make the property move-in ready.',
    icon: <Hammer className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'property',
    title: 'Property Cleaning',
    description: 'Tailored services for property managers and estate agents, perfect for end-of-tenancy requirements.',
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'after-builders',
    title: 'After Builders Cleaning',
    description: 'Post-construction cleaning specifically focused on removing tough marks, fine dust, and debris.',
    icon: <Trash2 className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'disinfection',
    title: 'Disinfection Cleaning',
    description: 'Keep your space safe with clinical sterilization and bio-misting technology.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'domestic-commercial',
    title: 'Domestic & Commercial',
    description: 'Professional cleaning for both residential homes and office environments of all sizes.',
    icon: <Home className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'end-of-tenancy',
    title: 'End of Tenancy Cleaning',
    description: 'Leave your property spotless when moving out to ensure full deposit recovery.',
    icon: <Calendar className="w-8 h-8 text-blue-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=800'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Professionals",
    description: "Skilled technicians for outstanding results.",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "Advanced Techniques",
    description: "Remove stubborn stains and allergens effectively.",
    icon: <CheckCircle2 className="w-5 h-5" />
  },
  {
    title: "Eco-Friendly Products",
    description: "Safe for family, pets, and the planet.",
    icon: <Droplets className="w-5 h-5" />
  },
  {
    title: "Satisfaction Guaranteed",
    description: "Your happiness is our top priority.",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    title: "Customized Solutions",
    description: "We tailor services to your specific needs.",
    icon: <ShieldCheck className="w-5 h-5" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner",
    content: "Gem Cleaners did an incredible job with my deep clean. The kitchen looks brand new, and they were so professional throughout.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Property Manager",
    content: "Reliable and thorough. We use them for all our end-of-tenancy cleans in Slough. Highly recommended for property professionals.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Office Manager",
    content: "Their commercial disinfection service gave our team peace of mind. Exceptional attention to detail and great communication.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const GALLERY = [
  { id: 1, title: 'Deep Clean Result', category: 'Deep Clean', url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Office Space Refresh', category: 'Commercial', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Steam Cleaning', category: 'Soft Clean', url: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Kitchen Restoration', category: 'Deep Clean', url: 'https://images.unsplash.com/photo-1556911220-e15224bbaf47?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Living Area Polish', category: 'Domestic', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Post-Construction', category: 'After Builders', url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800' },
];
