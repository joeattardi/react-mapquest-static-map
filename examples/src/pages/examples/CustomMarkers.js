import React from 'react';

import Layout from '../../components/Layout';
import SourceFile from '../../components/SourceFile';

import CustomMarkers from '../../examples/CustomMarkers';
import src from '!!raw-loader!../../examples/CustomMarkers';

export default function CustomMarkersPage() {
  return (
    <Layout>
      <h2>Map With Markers</h2>
      <SourceFile src={src} />
      <CustomMarkers />
    </Layout>
  );
}
