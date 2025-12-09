import React from 'react';
import { 
  Building2, 
  BarChart3, 
  Cpu, 
  Globe2, 
  Key, 
  MessageSquare, 
  ShieldCheck, 
  Smartphone, 
  Users, 
  Wallet 
} from 'lucide-react';
import { NavItem, StatItem, ChartData, TopicItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Market Insights', href: '#market' },
  { label: 'Topics', href: '#topics' },
  { label: 'Who Will You Meet', href: '#attendees' },
  { label: 'Sponsorship', href: '#sponsor' },
];

export const MARKET_STATS: StatItem[] = [
  { label: '2021 Transactions', value: '84,196+', subtext: 'Highest ever recorded' },
  { label: 'Transaction Value', value: 'AED 300B', subtext: 'Total worth in 2021' },
];

export const Q2_GROWTH_DATA: ChartData[] = [
  { name: 'Volume Increase', value: 45.86 },
  { name: 'Value Increase', value: 61.56 },
];

export const WHO_YOU_WILL_MEET = [
  'CEOs / Managing Directors',
  'CTOs / CIOs / Heads of Tech Innovation',
  'Heads of Property Management',
  'Heads of Sales & Marketing',
  'Heads of Investments',
  'Heads of Facility Management',
];

export const INDUSTRIES_COVERED = [
  'Property Developers',
  'Property Management Companies',
  'Real-Estate Consultants',
  'Community Management Companies',
  'Real-Estate Brokers',
  'Investors & VCs',
];

export const TOPIC_HIGHLIGHTS: TopicItem[] = [
  { title: 'Big Data collection & analysis', icon: <BarChart3 className="w-6 h-6" /> },
  { title: 'AI & Cloud-based administration', icon: <Cpu className="w-6 h-6" /> },
  { title: 'Virtual Reality viewing tools', icon: <Globe2 className="w-6 h-6" /> },
  { title: 'Automated Property Management', icon: <Building2 className="w-6 h-6" /> },
  { title: 'Blockchain Real Estate transactions', icon: <ShieldCheck className="w-6 h-6" /> },
  { title: 'IoT Smart Network Devices', icon: <Key className="w-6 h-6" /> },
  { title: 'Chatbots & Customer Experience', icon: <MessageSquare className="w-6 h-6" /> },
  { title: 'Crowdfunding property funding', icon: <Users className="w-6 h-6" /> },
  { title: 'Mobile Apps for Tenants/Landlords', icon: <Smartphone className="w-6 h-6" /> },
  { title: 'Cryptocurrency in Real Estate', icon: <Wallet className="w-6 h-6" /> },
];

export const WHY_ATTEND_POINTS = [
  'Gain Knowledge and Insights from Top Industry Leaders and Experts from across the globe',
  'Network with Industry Peers in a solution-oriented environment',
  'Discuss Significant Partnerships and Collaborations with Industry leaders',
  'Deep Dive into Insights derived from real-time case studies',
  'Build Industry Ecosystem Collaboration to address latest challenges'
];
