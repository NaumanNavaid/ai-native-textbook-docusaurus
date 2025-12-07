import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';
import BookLayout from '../BookLayout';
import styles from './styles.module.css';

export default function DocLayout(props): React.JSX.Element {
  const {pathname} = useLocation();

  // Use custom book layout for chapter documentation pages
  // Check if it's a chapter page (contains 'chapter-' in the path)
  const isChapterPage = pathname.includes('/docs/part-') && pathname.includes('chapter-');

  // Exclude special pages from book layout
  const isSpecialPage = pathname.includes('/intro') ||
                         pathname.includes('/CHAPTER_CONTENT_SUMMARY') ||
                         pathname.includes('/sample-chapter');

  if (isChapterPage && !isSpecialPage) {
    return (
      <BookLayout>
        {props.children}
      </BookLayout>
    );
  }

  // Default Docusaurus layout for other pages
  return props.children;
}