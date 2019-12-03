import React from 'react';

import NavigationLink from './NavigationLink';

import styles from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <div id={styles.sidebar}>
      <nav>
        <h2>About</h2>
        <ul>
          <li><NavigationLink to="/">Home</NavigationLink></li>
          <li><NavigationLink to="/getting-started">Getting Started</NavigationLink></li>
        </ul>
        <h2>Examples</h2>
        <ul>
          <li><NavigationLink to="/examples/MapWithCenter">Map With Center</NavigationLink></li>
        </ul>
      </nav>
    </div>
  );
}
