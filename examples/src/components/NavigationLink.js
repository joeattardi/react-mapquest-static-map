import React from 'react';

import { Link } from 'gatsby';

import styles from './NavigationLink.module.scss';

export default function NavigationLink({ to, children }) {
  return (
    <Link to={to} className={styles.link} activeClassName={styles.active}>
      {children}
    </Link>
  );
}
