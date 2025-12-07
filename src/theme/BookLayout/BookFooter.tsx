import React from 'react';
import styles from './styles.module.css';

export default function BookFooter(): React.JSX.Element {
  return (
    <footer className={styles.bookFooter}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          © 2025 AI-Native Textbook. Built with ❤️ for the Physical AI community.
        </p>
        <div className={styles.footerLinks}>
          <a href="https://github.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://discord.com" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
            Discord
          </a>
          <a href="mailto:contact@physicalai.org" className={styles.footerLink}>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}