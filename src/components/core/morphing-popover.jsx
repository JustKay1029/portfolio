import React, { createContext, useContext, useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const MorphingPopoverContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  uniqueId: '',
});

export function MorphingPopover({
  children,
  open,
  onOpenChange,
  transition = {
    type: 'spring',
    bounce: 0.05,
    duration: 0.35,
  },
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open !== undefined ? open : internalOpen;
  const setIsOpen = onOpenChange !== undefined ? onOpenChange : setInternalOpen;
  const uniqueId = useId();

  return (
    <MorphingPopoverContext.Provider value={{ isOpen, setIsOpen, uniqueId, transition }}>
      <div className="relative inline-block">{children}</div>
    </MorphingPopoverContext.Provider>
  );
}

export function MorphingPopoverTrigger({ children, className = '', ...props }) {
  const { isOpen, setIsOpen, uniqueId } = useContext(MorphingPopoverContext);

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}

export function MorphingPopoverContent({ children, className = '' }) {
  const { isOpen, setIsOpen, uniqueId, transition } = useContext(MorphingPopoverContext);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs"
            onClick={() => setIsOpen(false)}
          />

          {/* Morphing Dialog */}
          <motion.div
            layoutId={`popover-content-${uniqueId}`}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={transition}
            className={`fixed bottom-24 right-6 sm:right-12 z-50 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-0 shadow-2xl backdrop-blur-xl ${className}`}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
