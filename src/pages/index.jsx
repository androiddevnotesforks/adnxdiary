import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/HomePage/HeroSection';
import SDKsSection from '../components/HomePage/SDKsSection';
import CommunitySection from '../components/HomePage/CommunitySection';
import HomeFooter from '../components/HomePage/HomeFooter';

export default function Homepage() {
  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <HeroSection />
      <SDKsSection />
      <CommunitySection />

      <HomeFooter />
    </Layout>
  );
}
