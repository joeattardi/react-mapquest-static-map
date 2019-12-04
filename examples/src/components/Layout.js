import React, { useEffect } from 'react';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx.min';

import Header from './Header';
import Sidebar from './Sidebar';

import styles from './Layout.module.scss';

export default function Layout({ children }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

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
