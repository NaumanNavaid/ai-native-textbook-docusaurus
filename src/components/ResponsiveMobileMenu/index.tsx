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
    const isActive = item.href ? location.pathname === item.href : false;
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

              {/* Quick Actions */}
              <div className="responsive-menu-actions">
                <div className="responsive-menu-actions-divider" />
                <div className="responsive-menu-action-items">
                  <Link
                    to="/search"
                    className="responsive-menu-action-item"
                    onClick={handleNavClick}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span>Search</span>
                  </Link>
                  <a
                    href="https://github.com/NaumanNavaid/ai-native-textbook-docusaurus"
                    className="responsive-menu-action-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleNavClick}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
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