import React from 'react';

import Layout from '../../components/Layout';
import SourceFile from '../../components/SourceFile';

import MapWithZoom from '../../examples/MapWithZoom';
import src from '!!raw-loader!../../examples/MapWithZoom';

export default function MapWithZoomPage() {
  return (
    <Layout title="Map With Zoom">
      <h2>Map With Zoom</h2>
      <SourceFile src={src} />
      <MapWithZoom />
    </Layout>
  );
}
