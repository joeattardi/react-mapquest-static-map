import React from 'react';

import Layout from '../../components/Layout';
import SourceFile from '../../components/SourceFile';

import BoundingBox from '../../examples/BoundingBox';
import src from '!!raw-loader!../../examples/BoundingBox';

export default function BoundingBoxPage() {
  return (
    <Layout title="Map Bounding Box">
      <h2>Map Bounding Box</h2>
      <SourceFile src={src} />
      <BoundingBox />
    </Layout>
  );
}
