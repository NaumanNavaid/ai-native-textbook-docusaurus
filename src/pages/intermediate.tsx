import React from 'react';
import Layout from '@theme/Layout';

export default function IntermediatePath(): React.JSX.Element {
  return (
    <Layout title="Intermediate Track" description="Deepen your knowledge">
      <div className="container margin-vert--lg">
        <h1>Intermediate Learning Track</h1>
        <p>Ready for more? Dive into simulation and perception.</p>
         <ul>
            <li><a href="/docs/part-3-simulation/chapter-7-gazebo-physics-simulation">Chapter 7: Gazebo Simulation</a></li>
            <li><a href="/docs/part-4-perception/chapter-13-computer-vision-robots">Chapter 13: Computer Vision</a></li>
        </ul>
      </div>
    </Layout>
  );
}
