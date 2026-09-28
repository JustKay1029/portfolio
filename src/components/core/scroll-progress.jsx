import { motion, useScroll, useSpring } from 'motion/react';
import React from 'react';

export function ScrollProgress({
  className = '',
  springOptions = {
    stiffness: 280,
    damping: 18,
    mass: 0.3,
  },
  containerRef,
}) {
  const { scrollYProgress } = useScroll(
    containerRef ? { container: containerRef } : {}
  );

  const scaleX = useSpring(scrollYProgress, springOptions);

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className={`fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none ${className}`}
    />
  );
}
