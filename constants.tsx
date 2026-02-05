
import React from 'react';
import { 
  Sparkles, 
  Droplets, 
  Hammer, 
  Building2, 
  ShieldCheck, 
  Users, 
  Calendar,
  CheckCircle2,
  Star,
  MapPin,
  Clock,
  ShieldAlert,
  Award,
  Zap,
  Flame,
  Key,
  AlertTriangle,
  Waves,
  Home as HomeIcon,
  ShoppingBag,
  Brush
} from 'lucide-react';
import { Testimonial, Service } from './types.ts';

export const SERVICE_RADIUS = "40 Mile Radius";
export const COUNTIES_COVERED = ["Berkshire", "Buckinghamshire", "Oxfordshire"];

export const LOCATIONS = [
  { region: 'Slough (Core)', areas: ['Central Slough', 'Cippenham', 'Chalvey', 'Manor Park', 'Upton', 'Salt Hill'] },
  { region: 'East Slough & S. Bucks', areas: ['Langley', 'Colnbrook', 'Dachet', 'Iver', 'Farnham Royal', 'Stoke Poges'] },
  { region: 'Surrounding Berkshire', areas: ['Windsor', 'Maidenhead', 'Burnham', 'Taplow', 'Eton', 'Bray'] }
];

export const TRUST_INDICATORS = [
  { icon: <ShieldAlert className="w-6 h-6" />, label: 'Fully Insured', sub: 'Up to £5m Public Liability' },
  { icon: <Users className="w-6 h-6" />, label: 'DBS Checked', sub: 'Vetted & Trusted Staff' },
  { icon: <Award className="w-6 h-6" />, label: 'UK Registered', sub: 'Local Business Slough' },
  { icon: <Star className="w-6 h-6" />, label: 'Top Rated', sub: '5-Star Service Rating' }
];

export const SERVICES: Service[] = [
  {
    id: 'oven',
    title: 'Oven cleaning',
    description: 'Specialist deep cleaning for ovens, hobs, and extractors to remove carbon deposits and grease.',
    icon: <Flame />,
    imageUrl: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'carpet',
    title: 'Carpet & Upholstery',
    description: 'Professional steam extraction cleaning for all types of carpets, sofas, and soft furnishings.',
    icon: <Waves />,
    imageUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'domestic',
    title: 'Domestic cleaning',
    description: 'Reliable regular or one-off house cleaning services tailored to your specific household needs.',
    icon: <HomeIcon />,
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'commercial',
    title: 'Commercial cleaning',
    description: 'High-standard cleaning for offices, retail units, and commercial premises across Berkshire.',
    icon: <ShoppingBag />,
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'deep',
    title: 'ONE-OFF Deep Cleans',
    description: 'A heavy-duty, top-to-bottom clean designed to restore your property to pristine condition.',
    icon: <Sparkles />,
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'builders',
    title: 'After Builder Clean',
    description: 'Specialised removal of fine dust, paint splashes, and debris following renovation work.',
    icon: <Hammer />,
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tenancy',
    title: 'End of Tenancy',
    description: 'Comprehensive cleaning service following strict checklists for letting agents and landlords.',
    icon: <Key />,
    imageUrl: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'antiviral',
    title: 'Antiviral Sanitisation',
    description: 'Clinical grade fogging and disinfection to eliminate 99.9% of bacteria and viruses.',
    icon: <ShieldCheck />,
    imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'extreme',
    title: 'Extreme Cleaning',
    description: 'Specialised heavy-duty cleaning for hoarders, biohazard areas, and severely neglected properties.',
    icon: <AlertTriangle />,
    imageUrl: 'https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=800'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Eco-Friendly Products",
    description: "We use premium non-toxic cleaning solutions safe for family, pets, and the environment.",
    icon: <Droplets className="w-5 h-5" />
  },
  {
    title: "Vetted Professionals",
    description: "Our cleaners are reference-checked, DBS-vetted, and undergo intensive internal training.",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "Bespoke Checklists",
    description: "Every clean is guided by a detailed task list tailored to your specific property requirements.",
    icon: <CheckCircle2 className="w-5 h-5" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Slough Resident",
    content: "The end-of-tenancy clean was exceptional. I got my full deposit back with no questions asked. Professional and reliable.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Estate Agent, Windsor",
    content: "We use Gem Cleaners for all our managed properties. Their attention to detail is the best in the Berkshire area.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Business Owner",
    content: "Our office has never looked better. The team is efficient and the sanitisation service gives us peace of mind.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export const GALLERY = [
  { id: 1, title: 'Deep Clean Kitchen', category: 'Deep Clean', url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Office Space Refresh', category: 'Commercial', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Carpet Restoration', category: 'Soft Clean', url: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Pristine Living Area', category: 'Deep Clean', url: 'https://images.unsplash.com/photo-1556911220-e15224bbaf47?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Bathroom Sanitisation', category: 'Deep Clean', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Post-Construction Site', category: 'After Builders', url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800' },
];
