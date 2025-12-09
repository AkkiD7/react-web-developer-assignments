import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Topic {
  id: number;
  title: string;
  description?: string;
  icon: LucideIcon;
}

export interface Role {
  id: number;
  title: string;
}

export interface Reason {
  id: number;
  text: string;
}