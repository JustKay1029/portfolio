import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export function Dock({
  children,
  className = '',
  magnification = 60,
  distance = 120,
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`mx-auto flex h-16 items-end gap-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--glass-bg)] px-3 py-2.5 backdrop-blur-xl shadow-2xl transition-colors ${className}`}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          mouseX,
          magnification,
          distance,
        });
      })}
    </motion.div>
  );
}

export function DockIcon({
  children,
  className = '',
  mouseX,
  magnification = 60,
  distance = 120,
  ...props
}) {
  const ref = useRef(null);

  const defaultSize = 40;
  const distanceCalc = useTransform(mouseX || useMotionValue(Infinity), (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [defaultSize, magnification, defaultSize]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className={`flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-main)] transition-colors hover:border-[#3a31d8]/50 hover:text-[#3a31d8] ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
