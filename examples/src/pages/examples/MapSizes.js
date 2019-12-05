import React from 'react';

import Layout from '../../components/Layout';
import SourceFile from '../../components/SourceFile';

import MapSizes from '../../examples/MapSizes';
import src from '!!raw-loader!../../examples/MapSizes';

export default function MapSizesPage() {
  return (
    <Layout title="Map Sizes">
      <h2>Map Sizes</h2>
      <SourceFile src={src} />
      <MapSizes />
    </Layout>
  );
}
