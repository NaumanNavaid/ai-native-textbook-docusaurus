import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './styles.module.css';
import { BookOpen, Cpu, Zap, Globe, Brain, CircuitBoard, ChevronRight, ChevronDown } from 'lucide-react';

const bookStructure = [
  {
    part: 1,
    title: 'Foundations',
    icon: Globe,
    chapters: [
      { num: 1, title: 'What is Physical AI?', slug: '/docs/part-1-foundations/chapter-1-what-is-physical-ai' },
      { num: 2, title: 'Embodied Intelligence', slug: '/docs/part-1-foundations/chapter-2-embodied-intelligence' },
      { num: 3, title: 'Sensors, Actuators & Physical Limits', slug: '/docs/part-1-foundations/chapter-3-sensors-actuators-physical-limits' },
    ]
  },
  {
    part: 2,
    title: 'ROS Fundamentals',
    icon: Cpu,
    chapters: [
      { num: 4, title: 'ROS2 Fundamentals', slug: '/docs/part-2-ros/chapter-4-ros2-fundamentals' },
      { num: 5, title: 'Nodes, Topics, Services & Actions', slug: '/docs/part-2-ros/chapter-5-nodes-topics-services-actions' },
      { num: 6, title: 'URDF, Robot Description & TF Trees', slug: '/docs/part-2-ros/chapter-6-urdf-robot-description-tf-trees' },
    ]
  },
  {
    part: 3,
    title: 'Simulation & Digital Twins',
    icon: Zap,
    chapters: [
      { num: 7, title: 'Gazebo Physics Simulation', slug: '/docs/part-3-simulation/chapter-7-gazebo-physics-simulation' },
      { num: 8, title: 'Unity Robotics Visualization', slug: '/docs/part-3-simulation/chapter-8-unity-robotics-visualization' },
      { num: 9, title: 'NVIDIA Isaac Synthetic Data', slug: '/docs/part-3-simulation/chapter-9-nvidia-isaac-synthetic-data' },
      { num: 10, title: 'Physics Simulations', slug: '/docs/part-3-simulation/chapter-10-physics-simulations' },
      { num: 11, title: 'Isaac Sim Platform', slug: '/docs/part-3-simulation/chapter-11-isaac-sim-platform' },
      { num: 12, title: 'Digital Twin Development', slug: '/docs/part-3-simulation/chapter-12-digital-twin-development' },
    ]
  },
  {
    part: 4,
    title: 'Perception & State Estimation',
    icon: Brain,
    chapters: [
      { num: 13, title: 'Computer Vision for Robots', slug: '/docs/part-4-perception/chapter-13-computer-vision-robots' },
      { num: 14, title: 'Sensor Fusion & State Estimation', slug: '/docs/part-4-perception/chapter-14-sensor-fusion-state-estimation' },
      { num: 15, title: 'SLAM, VSLAM & Navigation', slug: '/docs/part-4-perception/chapter-15-slam-vslam-navigation' },
      { num: 16, title: 'Path Planning Algorithms', slug: '/docs/part-4-perception/chapter-16-path-planning-algorithms' },
    ]
  },
  {
    part: 5,
    title: 'Embodied Intelligence',
    icon: CircuitBoard,
    chapters: [
      { num: 17, title: 'Vision-Language-Action Models', slug: '/docs/part-5-embodied-intelligence/chapter-17-vision-language-action-models' },
      { num: 18, title: 'Voice-to-Action Pipelines (Whisper)', slug: '/docs/part-5-embodied-intelligence/chapter-18-voice-to-action-pipelines-whisper' },
      { num: 19, title: 'Cognitive Planning with GPT', slug: '/docs/part-5-embodied-intelligence/chapter-19-cognitive-planning-with-gpt' },
      { num: 20, title: 'The Autonomous Humanoid', slug: '/docs/part-5-embodied-intelligence/chapter-20-the-autonomous-humanoid' },
    ]
  },
];

export default function BookSidebar(): React.JSX.Element {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const [expandedParts, setExpandedParts] = useState<Set<number>>(new Set());

  // Auto-expand the part containing the current page
  useEffect(() => {
    const activePart = bookStructure.find(part => 
      part.chapters.some(chapter => currentPath.endsWith(chapter.slug))
    );
    
    if (activePart) {
      setExpandedParts(prev => new Set(prev).add(activePart.part));
    }
  }, [currentPath]);

  const togglePart = (partNum: number) => {
    setExpandedParts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(partNum)) {
        newSet.delete(partNum);
      } else {
        newSet.add(partNum);
      }
      return newSet;
    });
  };

  return (
    <nav className={styles.bookSidebarNav}>
      <div className={styles.bookTitle}>
        <BookOpen className="w-5 h-5" />
        <span>Physical AI Textbook</span>
      </div>

      <div className={styles.bookStructure}>
        {/* Standard Navigation Links */}
        <div className={styles.partSection}>
          <div className={styles.chaptersList}>
            <Link to="/" className={styles.chapterLink}>
              <span className={styles.chapterTitle}>Home</span>
            </Link>
            <Link 
              to="/docs/intro" 
              className={clsx(
                styles.chapterLink,
                currentPath.endsWith('/docs/intro') && styles.chapterLinkActive
              )}
            >
              <span className={styles.chapterTitle}>Introduction</span>
            </Link>
          </div>
        </div>

        {bookStructure.map((part) => {
          const isExpanded = expandedParts.has(part.part);
          const isActivePart = part.chapters.some(chapter => currentPath.endsWith(chapter.slug));
          
          return (
            <div key={part.part} className={clsx(styles.partSection, isActivePart && styles.partSectionActive)}>
              <button 
                className={styles.partHeader}
                onClick={() => togglePart(part.part)}
                aria-expanded={isExpanded}
              >
                <div className={styles.partHeaderContent}>
                  <span className={styles.partIcon}>{React.createElement(part.icon, { className: "w-4 h-4" })}</span>
                  <span className={styles.partTitle}>
                    Part {part.part}: {part.title}
                  </span>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 opacity-50" />
                ) : (
                  <ChevronRight className="w-4 h-4 opacity-50" />
                )}
              </button>
              
              {isExpanded && (
                <div className={styles.chaptersList}>
                  {part.chapters.map((chapter) => {
                    const isActive = currentPath.endsWith(chapter.slug);
                    return (
                      <Link
                        key={chapter.num}
                        to={chapter.slug}
                        className={clsx(
                          styles.chapterLink,
                          isActive && styles.chapterLinkActive
                        )}
                      >
                        <span className={styles.chapterNumber}>{chapter.num}.</span>
                        <span className={styles.chapterTitle}>{chapter.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}