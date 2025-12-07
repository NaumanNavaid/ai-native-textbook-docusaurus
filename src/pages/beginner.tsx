import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function BeginnerPath(): React.JSX.Element {
  return (
    <Layout title="Beginner Track" description="Start your journey in Physical AI">
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1 className="margin-bottom--md">Beginner Learning Track</h1>
            <p className="lead margin-bottom--xl">
              Welcome to the beginner track. Here you will learn the fundamental concepts of Physical AI, 
              understand embodied intelligence, and get started with the Robot Operating System (ROS 2).
            </p>

            <div className="card shadow--md margin-bottom--lg">
              <div className="card__header">
                <h3>Foundations</h3>
              </div>
              <div className="card__body">
                <p>Understand the core philosophy and physics behind intelligent robots.</p>
                <ul>
                    <li><Link to="/docs/part-1-foundations/chapter-1-what-is-physical-ai">Chapter 1: What is Physical AI?</Link></li>
                    <li><Link to="/docs/part-1-foundations/chapter-2-embodied-intelligence">Chapter 2: Embodied Intelligence</Link></li>
                </ul>
              </div>
            </div>

            <div className="card shadow--md margin-bottom--lg">
              <div className="card__header">
                <h3>Practical Skills</h3>
              </div>
              <div className="card__body">
                <p>Get your hands dirty with the industry-standard robotics middleware.</p>
                <ul>
                    <li><Link to="/docs/part-2-ros/chapter-4-ros2-fundamentals">Chapter 4: ROS 2 Fundamentals</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
