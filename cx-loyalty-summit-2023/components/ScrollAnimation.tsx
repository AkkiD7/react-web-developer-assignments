import React, { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-up' | 'slide-left' | 'slide-right' | 'scale-up' | 'fade-in';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  animation?: AnimationType;
  duration?: number;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-up',
  duration = 1000
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Only animate once
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getInitialClass = () => {
    switch(animation) {
      case 'slide-left': return '-translate-x-20 opacity-0';
      case 'slide-right': return 'translate-x-20 opacity-0';
      case 'scale-up': return 'scale-90 opacity-0';
      case 'fade-in': return 'opacity-0';
      case 'fade-up': default: return 'translate-y-12 opacity-0';
    }
  };

  const getFinalClass = () => {
    switch(animation) {
      case 'scale-up': return 'scale-100 opacity-100';
      default: return 'translate-x-0 translate-y-0 opacity-100';
    }
  };

  const transitionDelay = `${delay}ms`;
  const transitionDuration = `${duration}ms`;

  return (
    <div 
      ref={ref} 
      style={{ transitionDelay, transitionDuration }}
      className={`transform transition-all ease-out will-change-transform ${className} ${isVisible ? getFinalClass() : getInitialClass()}`}
    >
      {children}
    </div>
  );
};