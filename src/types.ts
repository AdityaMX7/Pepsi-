export interface Product {
  id: string;
  name: string;
  description: string;
  color: string;
  image: string;
  category: 'Classic' | 'Zero' | 'Limited';
}

export interface Moment {
  id: string;
  type: 'image' | 'video';
  url: string;
  user: string;
  location: string;
}

export interface Campaign {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
}
