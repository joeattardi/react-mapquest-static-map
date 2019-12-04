import React from 'react';

import Layout from '../../components/Layout';
import SourceFile from '../../components/SourceFile';

import BasicBanner from '../../examples/BasicBanner';
import src from '!!raw-loader!../../examples/BasicBanner';

export default function BasicBannerPage() {
  return (
    <Layout>
      <h2>Basic Banner</h2>
      <SourceFile src={src} />
      <BasicBanner />
    </Layout>
  );
}
