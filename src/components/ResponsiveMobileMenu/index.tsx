import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { usePageDetection, NavItem } from '../../hooks/usePageDetection';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Home, BookOpen, FileText, Hash, X, Menu } from 'lucide-react';
import './styles.css';

interface ResponsiveMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export default function ResponsiveMobileMenu({
  isOpen,
  onClose,
  className = '',
}: ResponsiveMobileMenuProps): React.JSX.Element {
  const location = useLocation();
  const { pageType, contextualNav } = usePageDetection();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Auto-expand current category
  useEffect(() => {
    if (isOpen && contextualNav) {
      const newExpanded = new Set<string>();

      contextualNav.forEach(item => {
        if (item.type === 'category' && item.items) {
          // Check if current page is in this category
          const isInCategory = item.items.some(subItem =>
            subItem.href && location.pathname.includes(subItem.href)
          );
          if (isInCategory) {
            newExpanded.add(item.label);
          }
        }
      });

      setExpandedItems(newExpanded);
    }
  }, [isOpen, contextualNav, location.pathname]);

  // Prevent body scroll when menu is open
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

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(label)) {
        newSet.delete(label);
      } else {
        newSet.add(label);
      }
      return newSet;
    });
  };

  const handleNavClick = () => {
    onClose();
  };

  const renderNavIcon = (label: string) => {
    if (label === 'Home') {
      return <Home className="w-4 h-4" />;
    }
    if (label.includes('Chapters')) {
      return <BookOpen className="w-4 h-4" />;
    }
    if (label.includes('Documentation')) {
      return <FileText className="w-4 h-4" />;
    }
    if (label.includes('Blog') || label.toLowerCase().includes('tag')) {
      return <Hash className="w-4 h-4" />;
    }
    return null;
  };

  const renderNavItem = (item: NavItem, depth: number = 0): React.ReactNode => {
    const isExpanded = expandedItems.has(item.label);
    // Robust active check that handles baseUrl presence
    const isActive = item.href ? location.pathname.endsWith(item.href) : false;
    const hasChildren = item.items && item.items.length > 0;
    const isCategory = item.type === 'category';

    return (
      <motion.div
        key={item.label}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: depth * 0.05 }}
        className={`nav-item-depth-${depth}`}
      >
        {hasChildren ? (
          // Category with children - expandable
          <button
            className={`nav-category ${isExpanded ? 'expanded' : ''}`}
            onClick={() => toggleExpanded(item.label)}
          >
            <div className="nav-category-content">
              <ChevronRight
                className={`nav-category-chevron ${isExpanded ? 'expanded' : ''}`}
              />
              <span className="nav-category-label">{item.label}</span>
            </div>
          </button>
        ) : item.href ? (
          // Link item
          <Link
            to={item.href}
            className={`nav-link ${isActive ? 'active' : ''}`}
            onClick={handleNavClick}
          >
            <div className="nav-link-content">
              <div className="nav-link-icon">
                {renderNavIcon(item.label)}
              </div>
              <span className="nav-link-label">{item.label}</span>
            </div>
          </Link>
        ) : (
          // Category without href or children (shouldn't happen but handle gracefully)
          <div className="nav-category disabled">
            <div className="nav-category-content">
              <ChevronRight className="nav-category-chevron" />
              <span className="nav-category-label">{item.label}</span>
            </div>
          </div>
        )}

        {hasChildren && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="nav-children"
              >
                {item.items!.map(child => renderNavItem(child, depth + 1))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </motion.div>
    );
  };

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
            className="responsive-menu-backdrop"
            onClick={onClose}
          />

          {/* Menu Container */}
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            className={`responsive-menu-container ${className}`}
          >
            {/* Header */}
            <div className="responsive-menu-header">
              <div className="responsive-menu-title">
                <Menu className="w-5 h-5" />
                <span>
                  {pageType === 'docs' ? 'Documentation' : 'Menu'}
                </span>
                <button
                  className="responsive-menu-close-button"
                  onClick={onClose}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Menu Content */}
            <div className="responsive-menu-content">
              <div className="responsive-menu-nav">
                {contextualNav.map(item => renderNavItem(item))}
              </div>
            </div>

            {/* Footer */}
            <div className="responsive-menu-footer">
              <div className="responsive-menu-footer-content">
                <span className="responsive-menu-footer-text">
                  AI-Native Textbook
                </span>
                <span className="responsive-menu-footer-version">
                  v0.0.0
                </span>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}