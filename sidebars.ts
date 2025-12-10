import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  chaptersSidebar: [
    {
      type: 'category',
      label: 'Part 1: Foundations',
      items: [
        'part-1-foundations/chapter-1-what-is-physical-ai',
        'part-1-foundations/chapter-2-embodied-intelligence',
        'part-1-foundations/chapter-3-sensors-actuators-physical-limits',
      ],
    },
    {
      type: 'category',
      label: 'Part 2: ROS Fundamentals',
      items: [
        'part-2-ros/chapter-4-ros2-fundamentals',
        'part-2-ros/chapter-5-nodes-topics-services-actions',
        'part-2-ros/chapter-6-urdf-robot-description-tf-trees',
      ],
    },
    {
      type: 'category',
      label: 'Part 3: Simulation & Digital Twins',
      items: [
        'part-3-simulation/chapter-7-gazebo-physics-simulation',
        'part-3-simulation/chapter-8-unity-robotics-visualization',
        'part-3-simulation/chapter-9-nvidia-isaac-synthetic-data',
        'part-3-simulation/chapter-10-physics-simulations',
        'part-3-simulation/chapter-11-isaac-sim-platform',
        'part-3-simulation/chapter-12-digital-twin-development',
      ],
    },
    {
      type: 'category',
      label: 'Part 4: Perception & State Estimation',
      items: [
        'part-4-perception/chapter-13-computer-vision-robots',
        'part-4-perception/chapter-14-sensor-fusion-state-estimation',
        'part-4-perception/chapter-15-slam-vslam-navigation',
        'part-4-perception/chapter-16-path-planning-algorithms',
      ],
    },
    {
      type: 'category',
      label: 'Part 5: Embodied Intelligence',
      items: [
        'part-5-embodied-intelligence/chapter-17-vision-language-action-models',
        'part-5-embodied-intelligence/chapter-18-voice-to-action-pipelines-whisper',
        'part-5-embodied-intelligence/chapter-19-cognitive-planning-with-gpt',
        'part-5-embodied-intelligence/chapter-20-the-autonomous-humanoid',
        'part-5-embodied-intelligence/chapter-21-ethical-considerations-in-embodied-ai',
      ],
    },
  ],
};

export default sidebars;
