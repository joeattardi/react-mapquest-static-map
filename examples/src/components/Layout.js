import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';

import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div id={styles.siteContainer}>
      <Header />
      <div id={styles.contentContainer}>
        <Sidebar />
        <main id={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
}
