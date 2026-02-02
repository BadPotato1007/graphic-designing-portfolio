
import { Project, NavLink } from './types';

export const PROJECTS_DATA = [
  {
    id: '1',
    title: 'Karachi Bakery',
    category: 'Marketing Material',
    imageUrl: 'https://i.ibb.co/wZPv8VRK/1-tent-card.jpg',
    color: '#86efac',
    description: 'This is a test :)'
  },
  {
    id: '2',
    title: 'Karachi Bakery',
    category: 'Box Design',
    imageUrl: 'https://github.com/BadPotato1007/graphic-designing-portfolio/blob/main/Box_Mockup_1.jpg?raw=true',
    color: '#93c5fd',
    description: 'this is the second test.'
  },
  {
    id: '3',
    title: 'Lumina Skincare',
    category: 'Branding',
    imageUrl: 'https://picsum.photos/seed/lumina/1200/1200',
    color: '#f9a8d4',
    description: 'High-end branding for a luxury skincare line. Soft pastels combined with bold serif typography create a sense of timeless elegance.'
  },
  {
    id: '4',
    title: 'Echo Wireless',
    category: 'Digital Marketing',
    imageUrl: 'https://picsum.photos/seed/echo/1200/1200',
    color: '#fde047',
    description: 'Social media campaign assets designed to increase engagement among Gen Z audiences, utilizing vibrant gradients and high-energy motion design.'
  },
  {
    id: '5',
    title: 'Symmetry Goods',
    category: 'Packaging Design',
    imageUrl: 'https://picsum.photos/seed/symmetry/1200/1200',
    color: '#d8b4fe',
    description: 'Minimalist geometric packaging for home goods. The design emphasizes the mathematical beauty of the products themselves.'
  },
  {
    id: '6',
    title: 'Orbit Media',
    category: 'Logo Creation',
    imageUrl: 'https://picsum.photos/seed/orbit/1200/1200',
    color: '#fdba74',
    description: 'A playful yet professional logo for a production house, inspired by celestial bodies and the continuous loop of creative storytelling.'
  }
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '#work' },
];
