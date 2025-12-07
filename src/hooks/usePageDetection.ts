import { useLocation } from '@docusaurus/router';
import { useMemo } from 'react';

export type PageType = 'main' | 'docs' | 'blog' | 'chapters';

export interface NavItem {
  label: string;
  href?: string;
  description?: string;
  items?: NavItem[];
  type?: 'category' | 'link';
  isDefault?: boolean;
}

export function usePageDetection(): {
  pageType: PageType;
  isMainPage: boolean;
  isContentPage: boolean;
  contextualNav: NavItem[];
} {
  const location = useLocation();

  // Determine page type based on current path
  const pageType = useMemo((): PageType => {
    const pathname = location.pathname;

    // Check for main pages
    if (pathname === '/' || pathname === '/index' || pathname === '/about') {
      return 'main';
    }

    // Check for chapters page
    if (pathname.startsWith('/chapters') || pathname.startsWith('/chapter')) {
      return 'chapters';
    }

    // Check for docs pages
    if (pathname.startsWith('/docs')) {
      return 'docs';
    }

    // Check for blog pages
    if (pathname.startsWith('/blog')) {
      return 'blog';
    }

    // Default to main for unknown paths
    return 'main';
  }, [location.pathname]);

  // Determine if this is a main page or content page
  const isMainPage = pageType === 'main' || pageType === 'chapters';
  const isContentPage = pageType === 'docs' || pageType === 'blog';

  // Get hierarchical navigation structure
  const contextualNav = useMemo((): NavItem[] => {
    if (pageType === 'docs') {
      // Return the actual docs structure based on files found
      return [
        {
          type: 'category',
          label: 'Part 1: Foundations',
          items: [
            {
              label: 'What is Physical AI?',
              href: '/docs/part-1-foundations/chapter-1-what-is-physical-ai'
            },
            {
              label: 'Embodied Intelligence',
              href: '/docs/part-1-foundations/chapter-2-embodied-intelligence'
            },
            {
              label: 'Sensors, Actuators & Physical Limits',
              href: '/docs/part-1-foundations/chapter-3-sensors-actuators-physical-limits'
            }
          ]
        },
        {
          type: 'category',
          label: 'Part 2: ROS Fundamentals',
          items: [
            {
              label: 'ROS2 Fundamentals',
              href: '/docs/part-2-ros/chapter-4-ros2-fundamentals'
            },
            {
              label: 'Nodes, Topics, Services & Actions',
              href: '/docs/part-2-ros/chapter-5-nodes-topics-services-actions'
            },
            {
              label: 'URDF, Robot Description & TF Trees',
              href: '/docs/part-2-ros/chapter-6-urdf-robot-description-tf-trees'
            }
          ]
        },
        {
          type: 'category',
          label: 'Part 3: Simulation & Digital Twins',
          items: [
            {
              label: 'Gazebo Physics Simulation',
              href: '/docs/part-3-simulation/chapter-7-gazebo-physics-simulation'
            },
            {
              label: 'Unity Robotics Visualization',
              href: '/docs/part-3-simulation/chapter-8-unity-robotics-visualization'
            },
            {
              label: 'NVIDIA Isaac Synthetic Data',
              href: '/docs/part-3-simulation/chapter-9-nvidia-isaac-synthetic-data'
            },
            {
              label: 'Physics Simulations',
              href: '/docs/part-3-simulation/chapter-10-physics-simulations'
            },
            {
              label: 'Isaac Sim Platform',
              href: '/docs/part-3-simulation/chapter-11-isaac-sim-platform'
            },
            {
              label: 'Digital Twin Development',
              href: '/docs/part-3-simulation/chapter-12-digital-twin-development'
            }
          ]
        },
        {
          type: 'category',
          label: 'Part 4: Perception & State Estimation',
          items: [
            {
              label: 'Computer Vision for Robots',
              href: '/docs/part-4-perception/chapter-13-computer-vision-robots'
            },
            {
              label: 'Sensor Fusion and State Estimation',
              href: '/docs/part-4-perception/chapter-14-sensor-fusion-state-estimation'
            },
            {
              label: 'SLAM & VSLAM Navigation',
              href: '/docs/part-4-perception/chapter-15-slam-vslam-navigation'
            },
            {
              label: 'Path Planning Algorithms',
              href: '/docs/part-4-perception/chapter-16-path-planning-algorithms'
            }
          ]
        },
        {
          type: 'category',
          label: 'Part 5: Embodied Intelligence',
          items: [
            {
              label: 'Vision-Language-Action Models',
              href: '/docs/part-5-embodied-intelligence/chapter-17-vision-language-action-models'
            },
            {
              label: 'Voice-to-Action Pipelines with Whisper',
              href: '/docs/part-5-embodied-intelligence/chapter-18-voice-to-action-pipelines-whisper'
            },
            {
              label: 'Cognitive Planning with GPT',
              href: '/docs/part-5-embodied-intelligence/chapter-19-cognitive-planning-with-gpt'
            },
            {
              label: 'The Autonomous Humanoid',
              href: '/docs/part-5-embodied-intelligence/chapter-20-the-autonomous-humanoid'
            }
          ]
        }
      ];
    }

    if (isMainPage) {
      // Main navigation
      return [
        {
          label: 'Home',
          href: '/',
          type: 'link'
        },
        {
          label: 'Chapters',
          href: '/chapters',
          type: 'link'
        },
        {
          label: 'Documentation',
          href: '/docs/intro',
          type: 'link'
        },
        {
          label: 'Blog',
          href: '/blog',
          type: 'link'
        }
      ];
    }

    if (pageType === 'blog') {
      return [
        {
          label: 'Blog',
          type: 'category',
          items: [
            {
              label: 'All Posts',
              href: '/blog'
            },
            {
              label: 'Tags',
              href: '/blog/tags'
            }
          ]
        },
        {
          label: 'Documentation',
          href: '/docs/intro',
          type: 'link'
        },
        {
          label: 'Chapters',
          href: '/chapters',
          type: 'link'
        }
      ];
    }

    // Default navigation
    return [
      {
        label: 'Home',
        href: '/',
        type: 'link'
      },
      {
        label: 'Documentation',
        href: '/docs/intro',
        type: 'link'
      },
      {
          label: 'Chapters',
          href: '/chapters',
          type: 'link'
      }
    ];
  }, [pageType, location.pathname, isMainPage]);

  return {
    pageType,
    isMainPage,
    isContentPage,
    contextualNav,
  };
}