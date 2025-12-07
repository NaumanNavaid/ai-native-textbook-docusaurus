import React from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function BookBreadcrumbs(): React.JSX.Element {
  const location = useLocation();
  const pathname = location.pathname;

  // Generate breadcrumbs based on the current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    if (pathname.includes('/docs')) {
      breadcrumbs.push({ label: 'Book', href: '/docs/intro' });

      if (pathname.includes('/part-')) {
        // Extract part number
        const partMatch = pathname.match(/\/part-(\d+)/);
        if (partMatch) {
          const partNumber = parseInt(partMatch[1]);
          const partTitles = ['', 'Foundations', 'ROS Fundamentals', 'Simulation & Digital Twins', 'Perception & State Estimation', 'Embodied Intelligence'];
          const partTitle = partTitles[partNumber] || `Part ${partNumber}`;
          breadcrumbs.push({ label: `Part ${partNumber}: ${partTitle}` });
        }

        // Extract chapter number and title
        const chapterMatch = pathname.match(/\/chapter-(\d+)-/);
        if (chapterMatch) {
          const chapterNumber = parseInt(chapterMatch[1]);
          const chapterTitles: { [key: number]: string } = {
            1: 'What is Physical AI?',
            2: 'Embodied Intelligence',
            3: 'Sensors, Actuators & Physical Limits',
            4: 'ROS2 Fundamentals',
            5: 'Nodes, Topics, Services & Actions',
            6: 'URDF, Robot Description & TF Trees',
            7: 'Gazebo Physics Simulation',
            8: 'Unity Robotics Visualization',
            9: 'NVIDIA Isaac Synthetic Data',
            10: 'Physics Simulations',
            11: 'Isaac Sim Platform',
            12: 'Digital Twin Development',
            13: 'Computer Vision for Robots',
            14: 'Sensor Fusion & State Estimation',
            15: 'SLAM, VSLAM & Navigation',
            16: 'Path Planning Algorithms',
            17: 'Vision-Language-Action Models',
            18: 'Voice-to-Action Pipelines (Whisper)',
            19: 'Cognitive Planning with GPT',
            20: 'The Autonomous Humanoid',
          };
          const chapterTitle = chapterTitles[chapterNumber] || `Chapter ${chapterNumber}`;
          breadcrumbs.push({ label: `Chapter ${chapterNumber}: ${chapterTitle}` });
        }
      } else if (pathname.endsWith('/docs/intro')) {
        breadcrumbs.push({ label: 'Introduction' });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't render if we only have "Home"
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className={styles.bookBreadcrumbs} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList}>
        {breadcrumbs.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            {item.href && index < breadcrumbs.length - 1 ? (
              <Link to={item.href} className={styles.breadcrumbLink}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.breadcrumbCurrent}>{item.label}</span>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className={styles.breadcrumbSeparator}>/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}