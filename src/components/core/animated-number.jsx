import React, { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

export function AnimatedNumber({
  value,
  className = '',
  springOptions = {
    mass: 0.8,
    stiffness: 75,
    damping: 15,
  },
}) {
  const spring = useSpring(0, springOptions);
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span className={className}>{display}</motion.span>;
}
