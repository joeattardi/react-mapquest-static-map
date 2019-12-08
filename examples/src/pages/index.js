import React from 'react';

import Layout from '../components/Layout';

export default function IndexPage() {
  return (
    <Layout>
      <p>
        This component allows you to add <a href="https://developer.mapquest.com/documentation/static-map-api/v5/">MapQuest static maps</a> to your React
        application.
      </p>

      <p>
        This is an unofficial library and is not affiliated with MapQuest in any way.
      </p>
    </Layout>
  );
}
