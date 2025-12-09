import { 
  Globe, 
  Cpu, 
  CreditCard, 
  Smile, 
  BarChart3, 
  Layers, 
  Cloud, 
  Coins, 
  Smartphone, 
  Glasses 
} from 'lucide-react';
import { Topic, Role, Reason } from './types';

export const NAV_ITEMS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Topics', href: '#topics' },
  { label: 'Attendees', href: '#attendees' },
  { label: 'Why Attend', href: '#why-attend' },
];

export const TOPICS: Topic[] = [
  { id: 1, title: 'Vision 2030', description: 'Emergence of the Kingdom as a Global Financial Leader', icon: Globe },
  { id: 2, title: 'Digital Transformation', description: 'The Foundational Platform for Achieving Business Agility', icon: Cpu },
  { id: 3, title: 'Payments Today & Tomorrow', description: 'The Future of Digital Payments', icon: CreditCard },
  { id: 4, title: 'Next-Gen CX', description: 'Providing a Seamless Banking Customer Experience', icon: Smile },
  { id: 5, title: 'Data & Analytics', description: 'Providing a 360° Overview to Banks & Customers', icon: BarChart3 },
  { id: 6, title: 'Open Banking', description: 'Inclusive Banking: Bringing Legacy Banks and Fintechs Together', icon: Layers },
  { id: 7, title: 'The Cloud Imperative', description: 'Cloud-Powered Digital Transformation', icon: Cloud },
  { id: 8, title: 'Future of NBFIs', description: 'Revolutionizing the Money Market in KSA', icon: Coins },
  { id: 9, title: 'Digital Only Banks', description: 'The Rise of "Invisible Banks" for Gen-Z', icon: Smartphone },
  { id: 10, title: 'Metaverse Banking', description: 'Experiential Banking in the Metaverse', icon: Glasses },
];

export const ATTENDEES: Role[] = [
  { id: 1, title: 'CIOs, CTOs, Heads of Technology' },
  { id: 2, title: 'Chief Digital Officers' },
  { id: 3, title: 'Chief Marketing Officers' },
  { id: 4, title: 'Heads of Retail Banking' },
  { id: 5, title: 'Heads of Corporate Banking' },
  { id: 6, title: 'Heads of Customer Experience' },
  { id: 7, title: 'Heads of Cards & Payments' },
  { id: 8, title: 'Head of Data & Analytics' },
  { id: 9, title: 'Heads of Governance & Compliance' },
];

export const REASONS: Reason[] = [
  { id: 1, text: 'Gain knowledge and insights from top industry leaders and experts from across the globe.' },
  { id: 2, text: 'Network with industry peers in a solution-oriented environment.' },
  { id: 3, text: 'Discuss significant partnerships and collaborations with industry leaders.' },
];