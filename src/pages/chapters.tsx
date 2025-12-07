import React from 'react';
import Layout from '@theme/Layout';
import ChaptersPageContent from '../theme/ChaptersPage';

export default function Chapters(): React.JSX.Element {
  return (
    <Layout title="Chapters" description="All chapters of the Physical AI & Humanoid Robotics textbook">
      <ChaptersPageContent />
    </Layout>
  );
}