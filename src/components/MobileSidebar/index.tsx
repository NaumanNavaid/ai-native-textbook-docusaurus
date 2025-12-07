import React, { useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function MobileSidebar({ isOpen, onClose, children }: MobileSidebarProps): React.JSX.Element {
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mobile-sidebar-backdrop"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            className="mobile-sidebar-drawer"
          >
            <div className="mobile-sidebar-content">
              {children}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}