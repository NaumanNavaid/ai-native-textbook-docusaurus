import React from 'react';
import Link from '@docusaurus/Link';
import { BookOpen, Cpu, Zap, Globe, Brain, CircuitBoard, ArrowRight, Clock, BarChart, Users, Target } from 'lucide-react';
import styles from './styles.module.css';

const bookStructure = [
  {
    part: 1,
    title: 'Foundations',
    description: 'Understanding the fundamentals of Physical AI and embodied intelligence',
    icon: <Globe className="w-12 h-12" />,
    color: '#00D9FF',
    chapters: [
      {
        num: 1,
        title: 'What is Physical AI?',
        slug: '/docs/part-1-foundations/chapter-1-what-is-physical-ai',
        duration: '45 min',
        difficulty: 'Beginner'
      },
      {
        num: 2,
        title: 'Embodied Intelligence',
        slug: '/docs/part-1-foundations/chapter-2-embodied-intelligence',
        duration: '60 min',
        difficulty: 'Intermediate'
      },
      {
        num: 3,
        title: 'Sensors, Actuators & Physical Limits',
        slug: '/docs/part-1-foundations/chapter-3-sensors-actuators-physical-limits',
        duration: '75 min',
        difficulty: 'Intermediate'
      },
    ],
    topics: ['Embodied AI concepts', 'Physical constraints', 'Sensor systems', 'Actuator mechanisms'],
    outcomes: ['Understand physical AI principles', 'Design basic embodied systems'],
    estimatedTime: '3 hours'
  },
  {
    part: 2,
    title: 'ROS Fundamentals',
    description: 'Master the Robot Operating System and its core concepts',
    icon: <Cpu className="w-12 h-12" />,
    color: '#FF6B6B',
    chapters: [
      {
        num: 4,
        title: 'ROS2 Fundamentals',
        slug: '/docs/part-2-ros/chapter-4-ros2-fundamentals',
        duration: '90 min',
        difficulty: 'Intermediate'
      },
      {
        num: 5,
        title: 'Nodes, Topics, Services & Actions',
        slug: '/docs/part-2-ros/chapter-5-nodes-topics-services-actions',
        duration: '120 min',
        difficulty: 'Intermediate'
      },
      {
        num: 6,
        title: 'URDF, Robot Description & TF Trees',
        slug: '/docs/part-2-ros/chapter-6-urdf-robot-description-tf-trees',
        duration: '105 min',
        difficulty: 'Advanced'
      },
    ],
    topics: ['ROS2 architecture', 'Communication patterns', 'Robot modeling', 'Coordinate frames'],
    outcomes: ['Build ROS2 applications', 'Design robot models', 'Implement communication'],
    estimatedTime: '5.5 hours'
  },
  {
    part: 3,
    title: 'Simulation & Digital Twins',
    description: 'Create realistic simulations and digital twins for robotic systems',
    icon: <Zap className="w-12 h-12" />,
    color: '#4ECDC4',
    chapters: [
      {
        num: 7,
        title: 'Gazebo Physics Simulation',
        slug: '/docs/part-3-simulation/chapter-7-gazebo-physics-simulation',
        duration: '100 min',
        difficulty: 'Advanced'
      },
      {
        num: 8,
        title: 'Unity Robotics Visualization',
        slug: '/docs/part-3-simulation/chapter-8-unity-robotics-visualization',
        duration: '85 min',
        difficulty: 'Intermediate'
      },
      {
        num: 9,
        title: 'NVIDIA Isaac Synthetic Data',
        slug: '/docs/part-3-simulation/chapter-9-nvidia-isaac-synthetic-data',
        duration: '70 min',
        difficulty: 'Advanced'
      },
      {
        num: 10,
        title: 'Physics Simulations',
        slug: '/docs/part-3-simulation/chapter-10-physics-simulations',
        duration: '95 min',
        difficulty: 'Advanced'
      },
      {
        num: 11,
        title: 'Isaac Sim Platform',
        slug: '/docs/part-3-simulation/chapter-11-isaac-sim-platform',
        duration: '110 min',
        difficulty: 'Advanced'
      },
      {
        num: 12,
        title: 'Digital Twin Development',
        slug: '/docs/part-3-simulation/chapter-12-digital-twin-development',
        duration: '90 min',
        difficulty: 'Advanced'
      },
    ],
    topics: ['Physics engines', '3D visualization', 'Synthetic data', 'Digital twins'],
    outcomes: ['Create realistic simulations', 'Generate training data', 'Build digital twins'],
    estimatedTime: '9 hours'
  },
  {
    part: 4,
    title: 'Perception & State Estimation',
    description: 'Implement perception systems and state estimation for autonomous robots',
    icon: <Brain className="w-12 h-12" />,
    color: '#95E1D3',
    chapters: [
      {
        num: 13,
        title: 'Computer Vision for Robots',
        slug: '/docs/part-4-perception/chapter-13-computer-vision-robots',
        duration: '115 min',
        difficulty: 'Advanced'
      },
      {
        num: 14,
        title: 'Sensor Fusion & State Estimation',
        slug: '/docs/part-4-perception/chapter-14-sensor-fusion-state-estimation',
        duration: '100 min',
        difficulty: 'Advanced'
      },
      {
        num: 15,
        title: 'SLAM, VSLAM & Navigation',
        slug: '/docs/part-4-perception/chapter-15-slam-vslam-navigation',
        duration: '130 min',
        difficulty: 'Expert'
      },
      {
        num: 16,
        title: 'Path Planning Algorithms',
        slug: '/docs/part-4-perception/chapter-16-path-planning-algorithms',
        duration: '95 min',
        difficulty: 'Advanced'
      },
    ],
    topics: ['Computer vision', 'Sensor fusion', 'SLAM algorithms', 'Path planning'],
    outcomes: ['Implement vision systems', 'Fuse sensor data', 'Navigate autonomously'],
    estimatedTime: '7 hours'
  },
  {
    part: 5,
    title: 'Embodied Intelligence',
    description: 'Advanced AI techniques for physical embodiment and autonomous systems',
    icon: <CircuitBoard className="w-12 h-12" />,
    color: '#A8E6CF',
    chapters: [
      {
        num: 17,
        title: 'Vision-Language-Action Models',
        slug: '/docs/part-5-embodied-intelligence/chapter-17-vision-language-action-models',
        duration: '85 min',
        difficulty: 'Expert'
      },
      {
        num: 18,
        title: 'Voice-to-Action Pipelines (Whisper)',
        slug: '/docs/part-5-embodied-intelligence/chapter-18-voice-to-action-pipelines-whisper',
        duration: '75 min',
        difficulty: 'Expert'
      },
      {
        num: 19,
        title: 'Cognitive Planning with GPT',
        slug: '/docs/part-5-embodied-intelligence/chapter-19-cognitive-planning-with-gpt',
        duration: '80 min',
        difficulty: 'Expert'
      },
      {
        num: 20,
        title: 'The Autonomous Humanoid',
        slug: '/docs/part-5-embodied-intelligence/chapter-20-the-autonomous-humanoid',
        duration: '120 min',
        difficulty: 'Expert'
      },
      {
        num: 21,
        title: 'Ethical Considerations in Embodied AI',
        slug: '/docs/part-5-embodied-intelligence/chapter-21-ethical-considerations-in-embodied-ai',
        duration: '90 min',
        difficulty: 'Expert'
      },
    ],
    topics: ['Multimodal AI', 'Language models', 'Cognitive architectures', 'Humanoid robots', 'AI ethics'],
    outcomes: ['Build intelligent agents', 'Implement language understanding', 'Design ethical AI'],
    estimatedTime: '7.5 hours'
  },
];

export default function PartsPage(): React.JSX.Element {
  return (
    <div className={styles.partsPage}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <BookOpen className={styles.heroIcon} />
            <h1 className={styles.heroTitle}>Parts Overview</h1>
            <p className={styles.heroDescription}>
              Master Physical AI and Humanoid Robotics through our structured five-part curriculum,
              designed to take you from fundamentals to advanced embodied intelligence
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5</span>
                <span className={styles.statLabel}>Parts</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>21</span>
                <span className={styles.statLabel}>Chapters</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>32+</span>
                <span className={styles.statLabel}>Hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.partsContainer}>
          {bookStructure.map((part) => (
            <div key={part.part} id={`part-${part.part}`} className={styles.partSection}>
              <div className={styles.partHeader} style={{ '--part-color': part.color } as React.CSSProperties}>
                <div className={styles.partIconWrapper}>
                  {part.icon}
                  <span className={styles.partNumber}>Part {part.part}</span>
                </div>
                <div className={styles.partInfo}>
                  <h2 className={styles.partTitle}>{part.title}</h2>
                  <p className={styles.partDescription}>{part.description}</p>
                  <div className={styles.partMeta}>
                    <span className={styles.partDuration}>
                      <Clock className="w-4 h-4" />
                      {part.estimatedTime}
                    </span>
                    <span className={styles.partChapters}>
                      <BookOpen className="w-4 h-4" />
                      {part.chapters.length} Chapters
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.partContent}>
                <div className={styles.partDetails}>
                  <div className={styles.detailSection}>
                    <h3 className={styles.detailTitle}>
                      <Target className="w-5 h-5" />
                      Key Topics
                    </h3>
                    <ul className={styles.topicsList}>
                      {part.topics.map((topic, idx) => (
                        <li key={idx} className={styles.topicItem}>{topic}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detailSection}>
                    <h3 className={styles.detailTitle}>
                      <BarChart className="w-5 h-5" />
                      Learning Outcomes
                    </h3>
                    <ul className={styles.outcomesList}>
                      {part.outcomes.map((outcome, idx) => (
                        <li key={idx} className={styles.outcomeItem}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.chaptersOverview}>
                  <h3 className={styles.chaptersTitle}>Chapters in this Part</h3>
                  <div className={styles.chaptersGrid}>
                    {part.chapters.map((chapter) => (
                      <Link key={chapter.num} to={chapter.slug} className={styles.chapterCard}>
                        <div className={styles.chapterHeader}>
                          <span className={styles.chapterNumber}>Chapter {chapter.num}</span>
                          <span className={`${styles.difficulty} ${styles[chapter.difficulty.toLowerCase()]}`}>
                            {chapter.difficulty}
                          </span>
                        </div>
                        <h4 className={styles.chapterTitle}>{chapter.title}</h4>
                        <div className={styles.chapterFooter}>
                          <span className={styles.duration}>
                            <Clock className="w-4 h-4" />
                            {chapter.duration}
                          </span>
                          <ArrowRight className={styles.arrowIcon} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.navigationSection}>
          <div className={styles.navigationContent}>
            <h2 className={styles.navigationTitle}>Ready to Start Learning?</h2>
            <p className={styles.navigationDescription}>
              Choose your learning path: explore individual parts or dive into specific chapters
            </p>
            <div className={styles.navigationButtons}>
              <Link to="/chapters" className={styles.primaryButton}>
                <BookOpen className="w-5 h-5" />
                View All Chapters
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/docs/intro" className={styles.secondaryButton}>
                <Target className="w-5 h-5" />
                Start with Introduction
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}