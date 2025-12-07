import React, { useState, useEffect, type ComponentProps } from 'react';
import Navbar from '@theme-original/Navbar';
import SearchBar from '@theme/SearchBar';
import ResponsiveMobileMenu from '../../components/ResponsiveMobileMenu';
import { Menu } from 'lucide-react';
import './styles.css';

type NavbarProps = ComponentProps<typeof Navbar>;

export default function NavbarWrapper(props: NavbarProps): React.JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    // Get initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    setCurrentTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setCurrentTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleResponsiveMenu = () => {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <CustomNavbar
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        isResponsiveMenuOpen={isResponsiveMenuOpen}
        toggleResponsiveMenu={toggleResponsiveMenu}
        currentTheme={currentTheme}
        toggleTheme={toggleTheme}
      />
      <ResponsiveMobileMenu
        isOpen={isResponsiveMenuOpen}
        onClose={() => setIsResponsiveMenuOpen(false)}
      />
      <Navbar {...props} style={{ display: 'none' }} />
    </>
  );
}

interface CustomNavbarProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  isResponsiveMenuOpen: boolean;
  toggleResponsiveMenu: () => void;
  currentTheme: string;
  toggleTheme: () => void;
}

function CustomNavbar({ isMobileMenuOpen, toggleMobileMenu, isResponsiveMenuOpen, toggleResponsiveMenu, currentTheme, toggleTheme }: CustomNavbarProps): React.JSX.Element {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Chapters', href: '/chapters' },
    { label: 'Documentation', href: '/docs/intro' },
    { label: 'About', href: '/about' },
  ];

  return (
    <nav className="nm-custom-navbar">
      <div className="nm-navbar-container">
        {/* Logo */}
        <div className="nm-navbar-logo">
          <a href="/" className="nm-logo-link">
            <div className="nm-logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="currentColor"/>
                <path d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16Z"
                      fill="var(--ifm-background-color)"/>
                <path d="M12 16L16 12L20 16M16 12V20"
                      stroke="var(--ifm-color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="nm-logo-text">
              <span className="nm-logo-title">Physical AI</span>
              <span className="nm-logo-subtitle">& Robotics</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="nm-navbar-links">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nm-nav-link"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="nm-navbar-actions">
          {/* Search Button */}
          <div className="nm-search-container" style={{ marginRight: '1rem' }}>
            <SearchBar />
          </div>

          {/* Dark Mode Toggle */}
          <button
            className="nm-action-button color-mode-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {currentTheme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com/NaumanNavaid/hackathon-1"
            className="nm-action-button"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="nm-mobile-menu-toggle"
            onClick={toggleResponsiveMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}