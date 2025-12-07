import { useLocation } from '@docusaurus/router';
import { useMemo } from 'react';
import { BookOpen, Cpu, Zap, Globe, Brain, CircuitBoard } from 'lucide-react';

export type PageType = 'main' | 'docs' | 'blog' | 'chapters' | 'book';

export interface NavItem {
  label: string;
  href?: string;
  description?: string;
  items?: NavItem[];
  type?: 'category' | 'link';
  isDefault?: boolean;
}

// Book structure matching BookSidebar
const bookStructure = [
  {
    part: 1,
    title: 'Foundations',
    icon: <Globe className="w-4 h-4" />,
    chapters: [
      { num: 1, title: 'What is Physical AI?', slug: '/docs/part-1-foundations/chapter-1-what-is-physical-ai' },
      { num: 2, title: 'Embodied Intelligence', slug: '/docs/part-1-foundations/chapter-2-embodied-intelligence' },
      { num: 3, title: 'Sensors, Actuators & Physical Limits', slug: '/docs/part-1-foundations/chapter-3-sensors-actuators-physical-limits' },
    ]
  },
  {
    part: 2,
    title: 'ROS Fundamentals',
    icon: <Cpu className="w-4 h-4" />,
    chapters: [
      { num: 4, title: 'ROS2 Fundamentals', slug: '/docs/part-2-ros/chapter-4-ros2-fundamentals' },
      { num: 5, title: 'Nodes, Topics, Services & Actions', slug: '/docs/part-2-ros/chapter-5-nodes-topics-services-actions' },
      { num: 6, title: 'URDF, Robot Description & TF Trees', slug: '/docs/part-2-ros/chapter-6-urdf-robot-description-tf-trees' },
    ]
  },
  {
    part: 3,
    title: 'Simulation & Digital Twins',
    icon: <Zap className="w-4 h-4" />,
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
    icon: <Brain className="w-4 h-4" />,
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
    icon: <CircuitBoard className="w-4 h-4" />,
    chapters: [
      { num: 17, title: 'Vision-Language-Action Models', slug: '/docs/part-5-embodied-intelligence/chapter-17-vision-language-action-models' },
      { num: 18, title: 'Voice-to-Action Pipelines (Whisper)', slug: '/docs/part-5-embodied-intelligence/chapter-18-voice-to-action-pipelines-whisper' },
      { num: 19, title: 'Cognitive Planning with GPT', slug: '/docs/part-5-embodied-intelligence/chapter-19-cognitive-planning-with-gpt' },
      { num: 20, title: 'The Autonomous Humanoid', slug: '/docs/part-5-embodied-intelligence/chapter-20-the-autonomous-humanoid' },
    ]
  },
];

export function usePageDetection(): {
  pageType: PageType;
  isMainPage: boolean;
  isContentPage: boolean;
  contextualNav: NavItem[];
  isBookPage: boolean;
} {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine page type based on current path
  const pageType = useMemo((): PageType => {
    const pathname = location.pathname;

    // Check for main pages
    if (pathname === '/' || pathname === '/index' || pathname === '/about') {
      return 'main';
    }

    // Check for docs pages
    if (pathname.includes('/docs')) {
      return 'docs';
    }

    // Check for chapters page
    if (pathname.includes('/chapters') || pathname.includes('/chapter')) {
      return 'chapters';
    }

    // Check for blog pages
    if (pathname.includes('/blog')) {
      return 'blog';
    }

    // Default to main for unknown paths
    return 'main';
  }, [location.pathname]);

  // Determine if this is a main page or content page
  const isMainPage = pageType === 'main' || pageType === 'chapters';
  const isContentPage = pageType === 'docs' || pageType === 'blog';
  const isBookPage = pageType === 'book';

  // Get hierarchical navigation structure
  const contextualNav = useMemo((): NavItem[] => {
    console.log('Page Detection:', { pathname: location.pathname, pageType, isBookPage });

    if (isBookPage) {
      // Return book navigation for book pages
      const navItems: NavItem[] = [
        {
          label: 'Home',
          href: '/',
          type: 'link'
        },
        {
          label: 'Introduction',
          href: '/docs/intro',
          type: 'link'
        }
      ];

      // Add book structure
      bookStructure.forEach((part) => {
        const partNav: NavItem = {
          type: 'category',
          label: `Part ${part.part}: ${part.title}`,
          items: []
        };

        part.chapters.forEach((chapter) => {
          partNav.items!.push({
            label: `${chapter.num}. ${chapter.title}`,
            href: chapter.slug,
            type: 'link'
          });
        });

        navItems.push(partNav);
      });

      return navItems;
    }

    if (pageType === 'docs') {
      // Return docs navigation for non-book docs pages
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
          label: 'Introduction',
          href: '/docs/intro',
          type: 'link'
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
  }, [pageType, location.pathname, isMainPage, isBookPage]);

  return {
    pageType,
    isMainPage,
    isContentPage,
    contextualNav,
    isBookPage,
  };
}