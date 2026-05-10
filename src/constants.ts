import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'pepsi-classic',
    name: 'Pepsi Classic',
    description: 'The iconic bold, refreshing cola flavor that has defined generations since 1893.',
    color: '#004B93',
    image: '/artifact_4',
    gridPosition: 'left',
    category: 'Classic',
    history: 'Created in 1893 as "Brad\'s Drink," Pepsi has evolved through the decades to become a global cultural icon, known for its bold spirit and connection to music and pop culture.',
    usp: ['Signature Bold Flavor', 'Iconic Heritage', 'Maximum Refreshment', 'Caffeine Kick']
  },
  {
    id: 'pepsi-zero-sugar',
    name: 'Pepsi Zero Sugar',
    description: 'Maximum taste, zero sugar. All the bold refreshment without the calories.',
    color: '#0A0A0A',
    image: '/artifact_4',
    gridPosition: 'center',
    category: 'Zero',
    history: 'Introduced to meet the demand for full flavor without calories, Pepsi Zero Sugar uses a unique blend of sweeteners to achieve an authentic cola taste.',
    usp: ['0 Calories', 'Max Taste', 'Sugar-Free Formula', 'Smooth Finish']
  },
  {
    id: 'diet-pepsi',
    name: 'Diet Pepsi',
    description: 'Light, crisp, and refreshing. The classic sugar-free choice for a brighter day.',
    color: '#8E949E',
    image: '/artifact_4',
    gridPosition: 'right',
    category: 'Zero',
    history: 'Launched in 1964 as the first national diet cola, Diet Pepsi has been the go-to choice for millions seeking light refreshment.',
    usp: ['Crisp Flavor', 'Light Texture', 'Aspartame-Free Options', 'Pure Refreshment']
  },
  {
    id: 'pepsi-wild-cherry',
    name: 'Pepsi Wild Cherry',
    description: 'A burst of real fruit flavor. The perfect blend of Pepsi cola and wild cherry.',
    color: '#8B0000',
    image: '/artifact_2',
    gridPosition: 'left',
    category: 'Classic',
    history: 'First introduced in 1988, Wild Cherry adds a tart and fruity edge to the classic Pepsi formula, making it a fan favorite for flavor lovers.',
    usp: ['Tart Fruit Finish', 'Bold Aroma', 'Perfect Blend', 'Burst of Energy']
  },
  {
    id: 'pepsi-zero-sugar-wild-cherry',
    name: 'Pepsi Zero Sugar Wild Cherry',
    description: 'Maximum wild cherry flavor, zero sugar.',
    color: '#4A0404',
    image: '/artifact_2',
    gridPosition: 'center',
    category: 'Zero',
    history: 'Combining the explosive flavor of wild cherry with the guilt-free technology of Zero Sugar.',
    usp: ['No Sugar', 'Wild Cherry Kick', 'Deep Color', 'Intense Flavor']
  },
  {
    id: 'diet-pepsi-wild-cherry',
    name: 'Diet Pepsi Wild Cherry',
    description: 'Crisp Diet Pepsi meeting the wild tartness of cherry.',
    color: '#A020F0',
    image: '/artifact_2',
    gridPosition: 'right',
    category: 'Zero',
    history: 'The lighthearted alternative for cherry lovers who want to keep things crisp and light.',
    usp: ['Low Calorie', 'Cherry Infused', 'Light & Fruity', 'Refreshing Finish']
  },
  {
    id: 'pepsi-caffeine-free',
    name: 'Pepsi Caffeine Free',
    description: 'All the great taste of Pepsi, none of the caffeine.',
    color: '#EDBB00',
    image: '/artifact_1',
    gridPosition: 'left',
    category: 'Classic',
    history: 'Introduced for late-night enjoyment, Caffeine Free Pepsi provides the signature flavor without the jitters.',
    usp: ['0% Caffeine', 'Original Recipe', 'Anytime Refreshment', 'Bold Gold Label']
  },
  {
    id: 'diet-pepsi-caffeine-free',
    name: 'Diet Pepsi Caffeine Free',
    description: 'The light refreshment of Diet Pepsi, caffeine-free.',
    color: '#E5E5E5',
    image: '/artifact_1',
    gridPosition: 'center',
    category: 'Zero',
    history: 'The ultimate "chill" cola, combining light diet refreshment with a caffeine-free formula.',
    usp: ['Sugar Free', 'Caffeine Free', 'Pure Silver Shine', 'Calorie-Free Joy']
  },
  {
    id: 'pepsi-real-sugar',
    name: 'Pepsi Real Sugar',
    description: 'Made with real sugar for that authentic, throwback taste.',
    color: '#004B93',
    image: '/artifact_1',
    gridPosition: 'right',
    category: 'Classic',
    history: 'A tribute to the original recipe, this variant swaps high fructose corn syrup for real sugar, offering a nostalgic flavor profile.',
    usp: ['Natural Sweetener', 'Vintage Vibe', 'Clean Finish', 'Nostalgic Flavor']
  },
  {
    id: 'pepsi-wild-cherry-cream',
    name: 'Wild Cherry & Cream',
    description: 'A luxurious blend of wild cherry and silky vanilla cream flavor.',
    color: '#C71585',
    image: '/artifact_0',
    gridPosition: 'left',
    category: 'Limited',
    history: 'Part of the "Soda Shop" series, this flavor explores the fusion of fruity cherry and creamy vanilla for a dessert-like experience.',
    usp: ['Creamy Texture', 'Silky Vanilla', 'Wild Cherry Base', 'Gourmet Cola']
  },
  {
    id: 'pepsi-zero-sugar-wild-cherry-cream',
    name: 'Zero Sugar Wild Cherry & Cream',
    description: 'The decadent Cherry & Cream experience, now with zero sugar.',
    color: '#4B0082',
    image: '/artifact_0',
    gridPosition: 'center',
    category: 'Zero',
    history: 'A modern twist on a nostalgic soda shop classic, engineered for maximum flavor without the sugar.',
    usp: ['Indulgent Taste', 'Zero Sugar', 'Velvety Finish', 'Rich Aroma']
  },
  {
    id: 'pepsi-prebiotic',
    name: 'Prebiotic Cola',
    description: 'The future of cola. Infused with prebiotic fibers for digestive wellness.',
    color: '#4682B4',
    image: '/artifact_0',
    gridPosition: 'right',
    category: 'Limited',
    history: 'Innovation meets wellness. This trial variety aims to provide functional benefits while maintaining the flavor you love.',
    usp: ['Digestive Support', 'Low Sugar', 'Added Fiber', 'Health-Conscious']
  },
  {
    id: 'pepsi-prebiotic-cherry-vanilla',
    name: 'Prebiotic Cherry Vanilla',
    description: 'Functional wellness meets the classic duo of cherry and vanilla.',
    color: '#800000',
    image: '/artifact_3',
    gridPosition: 'center',
    category: 'Limited',
    history: 'A sophisticated blend of prebiotic benefits with the world\'s favorite flavor pairing.',
    usp: ['Functional Benefits', 'Natural Flavors', 'Smooth Vanilla', 'Prebiotic Fiber']
  }
];

export const CAMPAIGNS = [
  {
    id: '1',
    title: 'Press Play for Pepsi',
    subtitle: 'Partnering with Apple Music to bring you exclusive content and up to 3 months of free music.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200',
    ctaText: 'Unlock Now',
  },
  {
    id: '2',
    title: 'Pepsi Dig In',
    subtitle: 'Celebrating and supporting Black-owned restaurants across the nation with specialized resources and recognition.',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=1200',
    ctaText: 'Discover More',
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
