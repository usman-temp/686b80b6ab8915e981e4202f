"use client";

import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AnimationContext } from './AnimationController';

export const AnimatedComponent = ({ 
  children,
  variants,
  className 
}: {
  children: React.ReactNode;
  variants?: any;
  className?: string;
}) => {
  const { duration, easing, disabled } = useContext(AnimationContext);

  const defaultVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration, ease: easing } 
    },
    exit: { 
      opacity: 0,
      transition: { duration, ease: easing } 
    }
  };

  return (
    <motion.div
      initial={!disabled && "initial"}
      animate={!disabled && "animate"}
      exit={!disabled && "exit"}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
