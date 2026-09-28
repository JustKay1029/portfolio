import React, { useRef, useState, useCallback } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

export function Spotlight({
  className = '',
  size = 200,
  springOptions = { bounce: 0 },
}) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState(null);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  React.useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );

  React.useEffect(() => {
    if (!parentElement) return;

    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);

    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', onEnter);
    parentElement.addEventListener('mouseleave', onLeave);

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', onEnter);
      parentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [parentElement, handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      className={`pointer-events-none absolute rounded-full bg-gradient-to-r ${className}`}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.25s ease',
      }}
    />
  );
}

export function SpotlightBorder({ children, className = '', spotlightClassName = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-b from-[#3a31d8]/30 via-slate-700/20 to-transparent transition-all duration-300 hover:from-[#3a31d8]/60 ${className}`}
    >
      <Spotlight
        className={`from-[#3a31d8] via-[#0600c2] to-cyan-400 blur-2xl opacity-60 ${spotlightClassName}`}
        size={240}
      />
      <div className="relative h-full w-full rounded-[calc(1rem-1px)] bg-[var(--bg-surface)] backdrop-blur-sm transition-colors">
        {children}
      </div>
    </div>
  );
}
