import React from 'react';

import Layout from '../../components/Layout';
import SourceFile from '../../components/SourceFile';

import CustomBanner from '../../examples/CustomBanner';
import src from '!!raw-loader!../../examples/CustomBanner';

export default function CustomBannerPage() {
  return (
    <Layout title="Custom Banner">
      <h2>Custom Banner</h2>
      <SourceFile src={src} />
      <CustomBanner />
    </Layout>
  );
}
