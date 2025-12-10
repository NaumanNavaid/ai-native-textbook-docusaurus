import React from 'react';
import Layout from '@theme/Layout';
import PartsPageContent from '../theme/PartsPage';

export default function Parts(): React.JSX.Element {
  return (
    <Layout title="Parts" description="All parts of the Physical AI & Humanoid Robotics textbook">
      <PartsPageContent />
    </Layout>
  );
}