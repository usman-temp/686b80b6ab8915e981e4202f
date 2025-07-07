import { useEffect } from 'react';

export const useAnimationOptimization = () => {
  useEffect(() => {
    const animate = (time: number) => {
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animate);
  }, []);

  const debounce = (func: Function, wait = 100) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  return { debounce };
};
