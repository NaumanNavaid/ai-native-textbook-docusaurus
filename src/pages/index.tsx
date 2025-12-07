import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { BookOpen, Cpu, Zap, Globe, Brain, CircuitBoard, ArrowRight, Play, Github } from 'lucide-react';
import styles from './index.module.css';

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
            <div className={styles.featureCard}>
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
            </div>

            <div className={styles.featureCard}>
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
            </div>

            <div className={styles.featureCard}>
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
            </div>

            <div className={styles.featureCard}>
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
            </div>

            <div className={styles.featureCard}>
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
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className={styles.featureTitle}>Hands-on Projects</h3>
              <p className={styles.featureDescription}>
                Apply your knowledge through practical projects and real-world applications.
              </p>
              <ul className={styles.featureList}>
                <li>Build a Robot Arm</li>
                <li>Create a Digital Twin</li>
                <li>Deploy Humanoid Systems</li>
              </ul>
            </div>
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
              <span className={styles.statNumber}>20</span>
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
