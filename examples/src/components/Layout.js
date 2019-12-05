import React, { useEffect } from 'react';

import Helmet from 'react-helmet';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx.min';

import Header from './Header';
import Sidebar from './Sidebar';

import styles from './Layout.module.scss';

export default function Layout({ children, title }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div id={styles.siteContainer}>
      <Helmet>
        <title>{title ? `${title} |` : ''} MapQuest Static Maps for React</title>
      </Helmet>
      <Header />
      <div id={styles.contentContainer}>
        <Sidebar />
        <main id={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
}
