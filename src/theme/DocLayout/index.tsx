import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';
import BookLayout from '../BookLayout';
import styles from './styles.module.css';

export default function DocLayout(props): React.JSX.Element {
  const {pathname} = useLocation();

  // Remove baseUrl from pathname for consistent checking
  const cleanPath = pathname.replace(/^\/ai-native-textbook-docusaurus/, '');

  // Use custom book layout for chapter documentation pages
  // Check if it's a chapter page (contains 'chapter-' or 'part-' in the path)
  const isChapterPage = cleanPath.includes('/docs/part-') &&
                        (cleanPath.includes('chapter-') ||
                         cleanPath.includes('/part-1-') ||
                         cleanPath.includes('/part-2-') ||
                         cleanPath.includes('/part-3-') ||
                         cleanPath.includes('/part-4-') ||
                         cleanPath.includes('/part-5-'));

  // Exclude special pages from book layout
  const isSpecialPage = cleanPath.includes('/intro') ||
                         cleanPath.includes('/CHAPTER_CONTENT_SUMMARY') ||
                         cleanPath.includes('/sample-chapter');

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