import React from 'react';

import { Link } from 'gatsby';

import Layout from '../../components/Layout';

export default function MarkersApiPage() {
  return (
    <Layout title="Markers API">
      <h1>
        <code>Markers</code>
      </h1>

      <p>
        The <code>Markers</code> component is the container for all markers on
        the map.
      </p>

      <h2>Props</h2>
      <ul>
        <li>
          <code>declutter</code> (boolean, default: <code>false</code>): Whether
          or not to declutter the map so that markers close together don't
          overlap.
        </li>
        <li>
          <code>defaultMarker</code> (string): By default, locations are marked
          with a dark gray marker. This default marker style can be overridden
          by setting this prop. For supported formats, see{' '}
          <a href="https://developer.mapquest.com/documentation/open/static-map-api/v5/getting-started/#marker-types">
            https://developer.mapquest.com/documentation/open/static-map-api/v5/getting-started/#marker-types
          </a>
          .
        </li>
      </ul>

      <h2>Children</h2>
      <ul>
        <li>
          <Link to="/api/Marker">
            <code>Marker</code>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
