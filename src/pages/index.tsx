import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { BookOpen, Cpu, Zap, Globe, Brain, CircuitBoard, ArrowRight, Play, Github, Clock, Star } from 'lucide-react';
import styles from './index.module.css';

const featuredChapters = [
  {
    num: 1,
    title: 'What is Physical AI?',
    slug: '/docs/part-1-foundations/chapter-1-what-is-physical-ai',
    duration: '45 min',
    difficulty: 'Beginner',
    description: 'Introduction to the concept of physical AI and embodied intelligence',
    icon: <Globe className="w-6 h-6" />
  },
  {
    num: 7,
    title: 'Gazebo Physics Simulation',
    slug: '/docs/part-3-simulation/chapter-7-gazebo-physics-simulation',
    duration: '100 min',
    difficulty: 'Advanced',
    description: 'Create realistic physics simulations for robotic systems',
    icon: <Zap className="w-6 h-6" />
  },
  {
    num: 13,
    title: 'Computer Vision for Robots',
    slug: '/docs/part-4-perception/chapter-13-computer-vision-robots',
    duration: '115 min',
    difficulty: 'Advanced',
    description: 'Implement vision systems that allow robots to understand their environment',
    icon: <Brain className="w-6 h-6" />
  },
  {
    num: 20,
    title: 'The Autonomous Humanoid',
    slug: '/docs/part-5-embodied-intelligence/chapter-20-the-autonomous-humanoid',
    duration: '120 min',
    difficulty: 'Expert',
    description: 'Build complete autonomous humanoid robot systems',
    icon: <CircuitBoard className="w-6 h-6" />
  }
];

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics"
      description="An AI-Native Engineering Textbook for building intelligent physical systems">
      <main className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Physical AI &
              <span className={styles.highlight}>Humanoid Robotics</span>
            </h1>
            <p className={styles.heroDescription}>
              An AI-Native Engineering Textbook that teaches you how to build intelligent physical systems that perceive, reason, and act in the real world.
            </p>
            <div className={styles.heroButtons}>
              <Link to="/chapters" className={styles.primaryButton}>
                <BookOpen className="w-5 h-5" />
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/docs/intro" className={styles.secondaryButton}>
                <Play className="w-5 h-5" />
                Introduction
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.visualContainer}>
              <Cpu className={`${styles.icon} ${styles.icon1}`} />
              <Brain className={`${styles.icon} ${styles.icon2}`} />
              <Zap className={`${styles.icon} ${styles.icon3}`} />
              <Globe className={`${styles.icon} ${styles.icon4}`} />
              <CircuitBoard className={`${styles.icon} ${styles.icon5}`} />
            </div>
          </div>
        </div>
      </main>

      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <h2 className={styles.sectionTitle}>What You'll Learn</h2>
          <div className={styles.featuresGrid}>
            <Link to="/parts#part-1" className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Globe className="w-8 h-8" />
              </div>
              <h3 className={styles.featureTitle}>Foundations</h3>
              <p className={styles.featureDescription}>
                Understand the principles of embodied intelligence and how physical systems can exhibit intelligent behavior.
              </p>
              <ul className={styles.featureList}>
                <li>Embodied Intelligence</li>
                <li>Sensors & Actuators</li>
                <li>Physical Limits</li>
              </ul>
              <ArrowRight className={styles.featureArrow} />
            </Link>

            <Link to="/parts#part-2" className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className={styles.featureTitle}>ROS Fundamentals</h3>
              <p className={styles.featureDescription}>
                Master the Robot Operating System and learn to build complex robotic systems.
              </p>
              <ul className={styles.featureList}>
                <li>ROS2 Architecture</li>
                <li>Nodes & Communication</li>
                <li>URDF & TF Trees</li>
              </ul>
              <ArrowRight className={styles.featureArrow} />
            </Link>

            <Link to="/parts#part-3" className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Zap className="w-8 h-8" />
              </div>
              <h3 className={styles.featureTitle}>Simulation</h3>
              <p className={styles.featureDescription}>
                Create realistic simulations and digital twins for testing and development.
              </p>
              <ul className={styles.featureList}>
                <li>Gazebo Physics</li>
                <li>Unity Robotics</li>
                <li>NVIDIA Isaac</li>
              </ul>
              <ArrowRight className={styles.featureArrow} />
            </Link>

            <Link to="/parts#part-4" className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Brain className="w-8 h-8" />
              </div>
              <h3 className={styles.featureTitle}>Perception</h3>
              <p className={styles.featureDescription}>
                Implement perception systems that allow robots to understand their environment.
              </p>
              <ul className={styles.featureList}>
                <li>Computer Vision</li>
                <li>Sensor Fusion</li>
                <li>SLAM & Navigation</li>
              </ul>
              <ArrowRight className={styles.featureArrow} />
            </Link>

            <Link to="/parts#part-5" className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <CircuitBoard className="w-8 h-8" />
              </div>
              <h3 className={styles.featureTitle}>Embodied AI</h3>
              <p className={styles.featureDescription}>
                Advanced AI techniques for physical embodiment and autonomous systems.
              </p>
              <ul className={styles.featureList}>
                <li>Vision-Language Models</li>
                <li>Voice-to-Action</li>
                <li>Cognitive Planning</li>
              </ul>
              <ArrowRight className={styles.featureArrow} />
            </Link>

            <Link to="/chapters" className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className={styles.featureTitle}>All Chapters</h3>
              <p className={styles.featureDescription}>
                Explore all 21 chapters and dive deep into specific topics of interest.
              </p>
              <ul className={styles.featureList}>
                <li>Browse by Chapter</li>
                <li>Track Progress</li>
                <li>Hands-on Examples</li>
              </ul>
              <ArrowRight className={styles.featureArrow} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.chaptersSection}>
        <div className={styles.chaptersContainer}>
          <h2 className={styles.sectionTitle}>Featured Chapters</h2>
          <p className={styles.sectionSubtitle}>
            Start your journey with our most popular chapters, covering key concepts from foundations to advanced topics
          </p>
          <div className={styles.chaptersGrid}>
            {featuredChapters.map((chapter) => (
              <Link key={chapter.num} to={chapter.slug} className={styles.chapterCard}>
                <div className={styles.chapterHeader}>
                  <div className={styles.chapterIcon}>
                    {chapter.icon}
                  </div>
                  <div className={styles.chapterMeta}>
                    <span className={styles.chapterNumber}>Chapter {chapter.num}</span>
                    <span className={`${styles.difficulty} ${styles[chapter.difficulty.toLowerCase()]}`}>
                      {chapter.difficulty}
                    </span>
                  </div>
                </div>
                <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                <p className={styles.chapterDescription}>{chapter.description}</p>
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
          <div className={styles.viewAllChapters}>
            <Link to="/chapters" className={styles.viewAllButton}>
              View All 21 Chapters
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Build the Future of Robotics?</h2>
          <p className={styles.ctaDescription}>
            Join thousands of engineers and researchers building the next generation of intelligent physical systems.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/chapters" className={styles.primaryButton}>
              Start with Chapter 1
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://github.com"
              className={styles.secondaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>21</span>
              <span className={styles.statLabel}>Chapters</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Parts</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>40+</span>
              <span className={styles.statLabel}>Hours</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
