import React from 'react';

import Layout from '../../components/Layout';

export default function MarkerApiPage() {
  return (
    <Layout title="Marker API">
      <h1>
        <code>Marker</code>
      </h1>

      <p>
        The <code>Marker</code> component is an individual marker for a location
        on the map.
      </p>

      <h2>Props</h2>

      <ul>
        <li>
          <code>location</code> (string): The location of the marker. See{' '}
          <a href="https://developer.mapquest.com/documentation/open/static-map-api/v5/map/#formatting-locations">
            https://developer.mapquest.com/documentation/open/static-map-api/v5/map/#formatting-locations
          </a>{' '}
          for supported formats.
        </li>
        <li>
          <code>icon</code> (string): The icon to use for this marker. For
          supported formats, see{' '}
          <a href="https://developer.mapquest.com/documentation/open/static-map-api/v5/getting-started/#marker-types">
            https://developer.mapquest.com/documentation/open/static-map-api/v5/getting-started/#marker-types
          </a>.
        </li>
      </ul>
    </Layout>
  );
}
