import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'pepsi-classic',
    name: 'Pepsi Classic',
    description: 'The iconic, bold, and refreshing cola flavor you love.',
    color: '#004B93',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
    category: 'Classic',
  },
  {
    id: 'pepsi-zero-sugar',
    name: 'Pepsi Zero Sugar',
    description: 'Maximum taste, zero sugar. All the bold refreshment without the calories.',
    color: '#0A0A0A',
    image: 'https://images.unsplash.com/photo-1546552356-3ad8968e0e57?auto=format&fit=crop&q=80&w=800',
    category: 'Zero',
  },
  {
    id: 'pepsi-nitro',
    name: 'Nitro Pepsi',
    description: 'Smooth, creamy, and draft-style refreshment with a nitrogen-infused velvety texture.',
    color: '#1a1a1a',
    image: 'https://images.unsplash.com/photo-1629203851020-fdd49bb7f10b?auto=format&fit=crop&q=80&w=800',
    category: 'Limited',
  },
  {
    id: 'pepsi-mango',
    name: 'Pepsi Mango',
    description: 'The perfect splash of fruit flavor meets the bold taste of Pepsi.',
    color: '#FFB800',
    image: 'https://images.unsplash.com/photo-1543251758-c9233ddd3fe9?auto=format&fit=crop&q=80&w=800',
    category: 'Limited',
  }
];

export const CAMPAIGNS = [
  {
    id: '1',
    title: 'Press Play for Pepsi',
    subtitle: 'Unlock exclusive music experiences with Apple Music.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200',
    ctaText: 'Get Started',
  },
  {
    id: '2',
    title: 'The Pepsi Challenge',
    subtitle: 'Take the sip that changed everything.',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=1200',
    ctaText: 'Find Out More',
  }
];

export const MOMENTS = [
  {
    id: 'm1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&q=80&w=800',
    user: '@skater_jake',
    location: 'Venice Beach, CA'
  },
  {
    id: 'm2',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    user: '@festival_vibes',
    location: 'Coachella Valley'
  },
  {
    id: 'm3',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=800',
    user: '@urban_explorer',
    location: 'Tokyo, Japan'
  },
  {
    id: 'm4',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1514525253344-f81f3f776a20?auto=format&fit=crop&q=80&w=800',
    user: '@dj_spark',
    location: 'Berlin, Germany'
  },
  {
    id: 'm5',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1472393365320-dc772fc946da?auto=format&fit=crop&q=80&w=800',
    user: '@nature_soul',
    location: 'Aspen, CO'
  },
  {
    id: 'm6',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
    user: '@night_rider',
    location: 'Seoul, Korea'
  }
];
