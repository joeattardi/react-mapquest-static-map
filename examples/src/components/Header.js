import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import styles from './Header.module.scss';

export default function Header() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header id={styles.header}>
      <h1>{data.site.siteMetadata.title}</h1>
      <a href="https://github.com/joeattardi/react-mapquest-static-map">
        <img src="https://img.shields.io/github/stars/joeattardi/react-mapquest-static-map?style=social" />
      </a>
    </header>
  );
}
