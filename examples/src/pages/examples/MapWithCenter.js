import React from 'react';

import Layout from '../../components/Layout';
import SourceFile from '../../components/SourceFile';

import MapWithCenter from '../../examples/MapWithCenter';
import src from '!!raw-loader!../../examples/MapWithCenter';


export default function MapWithCenterPage() {
  return (
    <Layout>
      <h2>Map With Center</h2>
      <SourceFile src={src} />
      <MapWithCenter />
    </Layout>
  );
}
