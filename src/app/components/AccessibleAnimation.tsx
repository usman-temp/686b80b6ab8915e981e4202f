"use client";

import { ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';

export const AccessibleAnimation = ({ 
  children,
  altText 
}: { 
  children: ReactNode;
  altText?: string;
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div 
      role="img" 
      aria-label={prefersReducedMotion ? altText || '' : undefined}
    >
      {children}
    </div>
  );
};
