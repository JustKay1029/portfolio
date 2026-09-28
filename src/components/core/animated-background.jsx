import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className = '',
  transition = {
    type: 'spring',
    bounce: 0.15,
    duration: 0.4,
  },
  enableHover = false,
}) {
  const [activeId, setActiveId] = useState(defaultValue);

  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const id = child.props['data-id'] || String(index);
        const isActive = activeId === id;

        const interactionProps = enableHover
          ? {
              onMouseEnter: () => {
                setActiveId(id);
                onValueChange?.(id);
              },
            }
          : {
              onClick: (e) => {
                child.props.onClick?.(e);
                setActiveId(id);
                onValueChange?.(id);
              },
            };

        return React.cloneElement(
          child,
          {
            key: id,
            className: `relative ${child.props.className || ''}`,
            'aria-selected': isActive,
            ...interactionProps,
          },
          <>
            {isActive && (
              <motion.div
                layoutId="animated-background-indicator"
                className={`absolute inset-0 rounded-xl bg-[#3a31d8]/15 border border-[#3a31d8]/40 dark:bg-[#3a31d8]/20 dark:border-[#3a31d8]/50 ${className}`}
                transition={transition}
                initial={false}
              />
            )}
            <span className="relative z-10">{child.props.children}</span>
          </>
        );
      })}
    </>
  );
}
