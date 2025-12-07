import React from 'react';
import Layout from '@theme/Layout';

export default function AdvancedPath(): React.JSX.Element {
  return (
    <Layout title="Advanced Track" description="Master Physical AI">
      <div className="container margin-vert--lg">
        <h1>Advanced Learning Track</h1>
        <p>Master the state-of-the-art in Embodied AI and Humanoid Robotics.</p>
        <ul>
            <li><a href="/docs/part-5-embodied-intelligence/chapter-17-vision-language-action-models">Chapter 17: VLA Models</a></li>
            <li><a href="/docs/part-5-embodied-intelligence/chapter-20-the-autonomous-humanoid">Chapter 20: The Autonomous Humanoid</a></li>
        </ul>
      </div>
    </Layout>
  );
}
