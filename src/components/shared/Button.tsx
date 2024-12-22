import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'white';
  icon?: LucideIcon;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  showArrow?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  icon: Icon,
  external,
  className = '',
  onClick,
  disabled = false,
  showArrow = true,
}: ButtonProps) {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const iconClass = (Icon || showArrow) ? 'btn-icon-right' : '';
  
  const Component = href ? motion.a : motion.button;
  
  const props = {
    ...(href ? {
      href,
      target: external ? '_blank' : undefined,
      rel: external ? 'noopener noreferrer' : undefined,
    } : {
      onClick,
      type: 'button',
      disabled,
    }),
    className: `${baseClass} ${variantClass} ${iconClass} ${className}`.trim(),
    whileHover: disabled ? {} : { y: -2 },
    whileTap: disabled ? {} : { y: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <Component {...props}>
      {Icon && <Icon aria-hidden="true" />}
      <span>{children}</span>
      {showArrow && <ArrowRight aria-hidden="true" />}
    </Component>
  );
}