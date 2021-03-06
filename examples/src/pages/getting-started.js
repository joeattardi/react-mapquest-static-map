import React from 'react';

import Layout from '../components/Layout';
import SourceFile from '../components/SourceFile';

import BaseExample from '../examples/BaseExample';

import src from '!!raw-loader!../examples/BaseExample';

export default function GettingStartedPage() {
  return (
    <Layout title="Getting Started">
      <h1>Getting Started</h1>
      <h2>Sign up for a MapQuest API key</h2>
      <p>
        Sign up at <a href="https://developer.mapquest.com/">https://developer.mapquest.com/</a>.
      </p>

      <h2>Install the package</h2>
      <code>npm install --save @joeattardi/react-mapquest-static-map</code>

      <h2>Example usage</h2>

      <SourceFile src={src} />
      <BaseExample />
    </Layout>
  );
}
