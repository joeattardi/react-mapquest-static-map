import React from 'react';

import { Link } from 'gatsby';

import Layout from '../../components/Layout';

export default function MapApiPage() {
  return (
    <Layout title="Map API">
      <h1>
        <code>Map</code>
      </h1>

      <p>
        The <code>Map</code> component is the main component used to generate a
        map. It accepts several child components which will be used to construct
        a URL for the MapQuest Static Map API.
      </p>

      <h2>Props</h2>
      <ul>
        <li>
          <code>apiKey</code> (string): Your MapQuest API key. Sign up at{' '}
          <a href="https://developer.mapquest.com/">
            https://developer.mapquest.com/
          </a>
          .
        </li>
        <li>
          <code>boundingBox</code> (array of numbers): A pair of
          latitude/longitude coordinates that define the top left and bottom
          right corners of the area the map should show. This is a single array
          in the format
          <code> [lat1, lng1, lat2, lng2]</code>.
        </li>
        <li>
          <code>center</code> (string): The location the map should be centered
          on. See{' '}
          <a href="https://developer.mapquest.com/documentation/open/static-map-api/v5/map/#formatting-locations">
            https://developer.mapquest.com/documentation/open/static-map-api/v5/map/#formatting-locations
          </a>{' '}
          for supported formats.
        </li>
        <li>
          <code>margin</code> (integer): In some cases when doing a{' '}
          <code>boundingBox</code>, changing the margin can adjust the zoom
          level accordingly when you are out of the bounds of the map.
        </li>
        <li>
          <code>height</code> (integer): The height of the map, in pixels
        </li>
        <li>
          <code>retina</code> (boolean): If <code>true</code>, the map images will have @2x resolution.
        </li>
        <li>
          <code>scalebar</code> (boolean): Whether or not to show a scale bar on
          the map
        </li>
        <li>
          <code>scalebarPosition</code> (string): The position of the scale bar.
          Valid options are <code>bottom</code> and <code>top</code>.
        </li>
        <li>
          <code>type</code> (string): The type of map to display. Valid options
          are:
          <ul>
            <li>
              <code>png</code>
            </li>
            <li>
              <code>jpeg</code>
            </li>
            <li>
              <code>jpg</code>
            </li>
            <li>
              <code>jpg70</code>
            </li>
            <li>
              <code>jpg80</code>
            </li>
            <li>
              <code>jpg90</code>
            </li>
            <li>
              <code>gif</code>
            </li>
          </ul>
        </li>
        <li>
          <code>width</code> (integer): The width of the map, in pixels
        </li>
        <li>
          <code>zoom</code> (integer): The zoom level of the map
        </li>
      </ul>

      <h2>Children</h2>
      <ul>
        <li><Link to="/api/Banner"><code>Banner</code></Link></li>
        <li><Link to="/api/Markers"><code>Markers</code></Link></li>
      </ul>
    </Layout>
  );
}
