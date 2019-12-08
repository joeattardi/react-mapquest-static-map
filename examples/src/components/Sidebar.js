import React from 'react';

import NavigationLink from './NavigationLink';

import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <div id={styles.sidebar}>
      <nav>
        <h2>About</h2>
        <ul>
          <li>
            <NavigationLink to="/">Home</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/getting-started">
              Getting Started
            </NavigationLink>
          </li>
        </ul>
        <h2>API</h2>
        <ul>
          <li><NavigationLink to="/api/Map">Map</NavigationLink></li>
          <li><NavigationLink to="/api/Banner">Banner</NavigationLink></li>
          <li><NavigationLink to="/api/Markers">Markers</NavigationLink></li>
          <li><NavigationLink to="/api/Marker">Marker</NavigationLink></li>
        </ul>
        <h2>Basic Maps</h2>
        <ul>
          <li>
            <NavigationLink to="/examples/MapWithCenter">
              Map With Center
            </NavigationLink>
          </li>
          <li>
            <NavigationLink to="/examples/MapWithZoom">
              Map With Zoom
            </NavigationLink>
          </li>
          <li>
            <NavigationLink to="/examples/MapSizes">Map Sizes</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/examples/MapTypes">Map Types</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/examples/BoundingBox">
              Map Bounding Box
            </NavigationLink>
          </li>
        </ul>
        <h2>Banner</h2>
        <ul>
          <li>
            <NavigationLink to="/examples/BasicBanner">
              Basic Banner
            </NavigationLink>
          </li>
          <li>
            <NavigationLink to="/examples/CustomBanner">
              Custom Banner
            </NavigationLink>
          </li>
        </ul>
        <h2>Markers</h2>
        <ul>
          <li>
            <NavigationLink to="/examples/MapWithMarkers">
              Map With Markers
            </NavigationLink>
          </li>
          <li>
            <NavigationLink to="/examples/CustomMarkers">
              Custom Markers
            </NavigationLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
