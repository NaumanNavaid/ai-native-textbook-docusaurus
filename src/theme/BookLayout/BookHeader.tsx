import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { BookOpen, Home, Menu } from 'lucide-react';
import styles from './styles.module.css';

interface BookHeaderProps {
  onToggleSidebar?: () => void;
}

export default function BookHeader({ onToggleSidebar }: BookHeaderProps): React.JSX.Element {
  return (
    <header className={styles.bookHeader}>
      <div className={styles.headerContent}>
        <div className={styles.leftContent}>
          <button 
            className={styles.mobileMenuButton}
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <Link to="/" className={styles.logoLink}>
            <BookOpen className="w-6 h-6" />
            <span className={styles.logoText}>Physical AI & Humanoid Robotics</span>
          </Link>
        </div>

        <nav className={styles.headerNav}>
          <Link to="/" className={styles.navLink}>
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link to="/docs" className={styles.navLink}>
            <BookOpen className="w-4 h-4" />
            <span>Chapters</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}