import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';

export function Dock({
  children,
  className = '',
  magnification = 62,
  distance = 140,
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`mx-auto flex h-16 items-end gap-2.5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--glass-bg)] px-3 py-2.5 backdrop-blur-xl shadow-2xl transition-colors ${className}`}
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
  magnification = 62,
  distance = 140,
  title,
  href,
  target,
  rel,
  onClick,
  ...props
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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
    stiffness: 220,
    damping: 15,
  });

  // Smooth inner icon scale
  const iconScale = useTransform(width, [defaultSize, magnification], [1, 1.25]);

  const Comp = href ? motion.a : motion.div;

  return (
    <div className="relative flex flex-col items-center">
      {/* Floating macOS Tooltip */}
      <AnimatePresence>
        {isHovered && title && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 px-2.5 py-1 rounded-md bg-zinc-900/90 dark:bg-zinc-100/95 text-white dark:text-zinc-900 text-[10px] font-mono whitespace-nowrap shadow-md pointer-events-none z-50 backdrop-blur-xs"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>

      <Comp
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ width, height: width }}
        className={`flex aspect-square cursor-pointer items-center justify-center rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-main)] transition-colors hover:border-zinc-400 dark:hover:border-zinc-600 ${className}`}
        {...props}
      >
        <motion.div style={{ scale: iconScale }} className="flex items-center justify-center pointer-events-none">
          {children}
        </motion.div>
      </Comp>
    </div>
  );
}
