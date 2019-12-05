import React from 'react';

import Layout from '../../components/Layout';
import SourceFile from '../../components/SourceFile';

import MapWithMarkers from '../../examples/MapWithMarkers';
import src from '!!raw-loader!../../examples/MapWithMarkers';

export default function MapWithMarkersPage() {
  return (
    <Layout title="Map With Markers">
      <h2>Map With Markers</h2>
      <SourceFile src={src} />
      <MapWithMarkers />
    </Layout>
  );
}
