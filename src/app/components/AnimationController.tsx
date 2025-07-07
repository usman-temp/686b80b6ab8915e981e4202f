import { createContext, useContext, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type AnimationConfig = {
  duration: number;
  easing: number[];
  disabled: boolean;
};

export const AnimationContext = createContext<AnimationConfig>({
  duration: 0.3,
  easing: [0.4, 0, 0.2, 1],
  disabled: false
});

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersReducedMotion = useReducedMotion();

  const config = useMemo(() => ({
    duration: 0.3,
    easing: [0.4, 0, 0.2, 1],
    disabled: prefersReducedMotion || false
  }), [prefersReducedMotion]);

  return (
    <AnimationContext.Provider value={config}>
      {children}
    </AnimationContext.Provider>
  );
};
