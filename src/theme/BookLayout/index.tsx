import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BookSidebar from './BookSidebar';
import BookFooter from './BookFooter';
import BookHeader from './BookHeader';
import MobileSidebar from '../../components/MobileSidebar';
import styles from './styles.module.css';

export default function BookLayout({children}): React.JSX.Element {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const windowSize = useWindowSize();
  const isMobile = windowSize === 'mobile';

  // Add class to body to hide default Docusaurus elements
  useEffect(() => {
    document.body.classList.add('book-layout-active');
    return () => {
      document.body.classList.remove('book-layout-active');
    };
  }, []);

  return (
    <div className={styles.bookLayout}>
      <BookHeader onToggleSidebar={() => setIsMobileSidebarOpen(true)} />
      
      <MobileSidebar 
        isOpen={isMobileSidebarOpen} 
        onClose={() => setIsMobileSidebarOpen(false)} 
      >
        <BookSidebar />
      </MobileSidebar>

      <div className={styles.bookContainer}>
        {/* Desktop Sidebar - hidden on mobile via CSS */}
        <aside className={styles.bookSidebar}>
          <BookSidebar />
        </aside>

        <main className={styles.bookMain}>
          <div className={styles.bookContent}>
            {children}
          </div>
        </main>
      </div>
      <BookFooter />
    </div>
  );
}