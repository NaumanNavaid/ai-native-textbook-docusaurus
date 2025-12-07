import React, { type ComponentProps } from 'react';
import Footer from '@theme-original/Footer';
import Link from '@docusaurus/Link';
import './styles.css';

type FooterProps = ComponentProps<typeof Footer>;

export default function FooterWrapper(props: FooterProps): React.JSX.Element {
  // Don't render the original footer at all
  // Ensure we don't pass any props that might cause the original footer to render
  console.log('FooterWrapper rendered, not rendering original Footer');
  return <CustomFooter />;
}

function CustomFooter(): React.JSX.Element {
  const currentYear = typeof window !== 'undefined' ? new Date().getFullYear() : 2025;

  return (
    <footer className="nm-custom-footer" data-testid="custom-footer">
      <div className="nm-footer-container">
        <div className="nm-footer-grid">
          {/* Branding Section */}
          <div className="nm-footer-brand">
            <div className="nm-footer-logo">
              <h3>Physical AI & Robotics</h3>
              <p>An AI-Native Engineering Textbook</p>
            </div>
            <p className="nm-footer-description">
              Master the convergence of artificial intelligence and physical robotics
              through comprehensive, hands-on learning experiences.
            </p>
            <div className="nm-footer-stats">
              <div className="nm-stat">
                <div className="nm-stat-number">1000+</div>
                <div className="nm-stat-label">Pages</div>
              </div>
              <div className="nm-stat">
                <div className="nm-stat-number">50+</div>
                <div className="nm-stat-label">Exercises</div>
              </div>
              <div className="nm-stat">
                <div className="nm-stat-number">24/7</div>
                <div className="nm-stat-label">Access</div>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="nm-footer-section">
            <h4 className="nm-footer-heading">Resources</h4>
            <ul className="nm-footer-links">
              <li><Link to="/docs/part-1-foundations/chapter-1-what-is-physical-ai">Foundations</Link></li>
              <li><Link to="/docs/part-2-ros/chapter-4-ros2-fundamentals">ROS & Navigation</Link></li>
              <li><Link to="/docs/part-4-perception/chapter-13-computer-vision-robots">Computer Vision</Link></li>
              <li><Link to="/docs/part-5-embodied-intelligence/chapter-17-vision-language-action-models">Machine Learning</Link></li>
              <li><Link to="/docs/part-3-simulation/chapter-7-gazebo-physics-simulation">Simulation & Control</Link></li>
            </ul>
          </div>

          {/* Learning Paths Section */}
          <div className="nm-footer-section">
            <h4 className="nm-footer-heading">Learning Paths</h4>
            <ul className="nm-footer-links">
              <li><Link to="/beginner">Beginner Track</Link></li>
              <li><Link to="/intermediate">Intermediate Track</Link></li>
              <li><Link to="/advanced">Advanced Track</Link></li>
              <li><Link to="/projects">Hands-on Projects</Link></li>
              <li><Link to="/certification">Certification</Link></li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="nm-footer-section">
            <h4 className="nm-footer-heading">Community</h4>
            <ul className="nm-footer-links">
              <li><a href="https://github.com/NaumanNavaid/ai-native-textbook-docusaurus">GitHub</a></li>
              <li><a href="https://discord.gg/9B6qGRZf">Discord</a></li>
              <li><a href="https://github.com/NaumanNavaid/ai-native-textbook-docusaurus/discussions">Forum</a></li>
              <li><Link to="/contributors">Contributors</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="nm-footer-section nm-footer-newsletter">
            <h4 className="nm-footer-heading">Stay Updated</h4>
            <p className="nm-footer-subtext">Get the latest updates and exclusive content</p>
            <div className="nm-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="nm-newsletter-input"
              />
              <button type="button" className="nm-newsletter-button">
                Subscribe
              </button>
            </div>
            <div className="nm-footer-social">
              <a href="https://github.com/NaumanNavaid/ai-native-textbook-docusaurus" className="nm-social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://twitter.com/NStudio" className="nm-social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/snn-studio" className="nm-social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="nm-footer-bottom">
          <div className="nm-footer-bottom-left">
            <span className="nm-footer-copyright">
              © {currentYear} AI-Native Textbook. All rights reserved. Created by SNN Studio.
            </span>
          </div>
          <div className="nm-footer-bottom-right">
            <Link to="/privacy" className="nm-footer-link">Privacy Policy</Link>
            <span className="nm-footer-separator">•</span>
            <Link to="/terms" className="nm-footer-link">Terms of Service</Link>
            <span className="nm-footer-separator">•</span>
            <Link to="/code-of-conduct" className="nm-footer-link">Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}