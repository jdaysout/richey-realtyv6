import React from 'react';
import { cn } from '../utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'default' | 'lg' | 'full';
  padding?: boolean;
}

export default function Container({ 
  children, 
  className,
  size = 'default',
  padding = true
}: ContainerProps) {
  return (
    <div className={cn(
      'mx-auto w-full',
      {
        'max-w-3xl': size === 'sm',
        'max-w-7xl': size === 'default',
        'max-w-[90rem]': size === 'lg',
        'px-4 sm:px-6 lg:px-8': padding
      },
      className
    )}>
      {children}
    </div>
  );
}