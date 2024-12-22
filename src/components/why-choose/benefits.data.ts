import { Home, Lock, MapPin } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: Home,
    title: 'Simplified Buying Process',
    description:
      'Experience a streamlined home-buying journey with our innovative platform and expert guidance at every step.',
  },
  {
    icon: Lock,
    title: 'Exclusive Access',
    description:
      'Get early access to off-market properties and Compass Private Exclusives before they hit the public market.',
  },
  {
    icon: MapPin,
    title: 'Expert Local Knowledge',
    description:
      'Benefit from our deep insights into local markets, trends, and exclusive neighborhood opportunities.',
  },
];