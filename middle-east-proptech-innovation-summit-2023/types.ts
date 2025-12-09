import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface TopicItem {
  title: string;
  icon?: React.ReactNode;
}