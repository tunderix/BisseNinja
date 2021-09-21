import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './layout.module.scss';
import { FunctionComponent } from 'react';

type HeaderProps = {
  siteTitle: string;
};

const Header: FunctionComponent<HeaderProps> = ({ siteTitle }) => (
  <header className={styles.titleContainer}>
    <h1>
      <Link className={styles.title} to="/">
        <div className={styles.headerImage} />
      </Link>
    </h1>
  </header>
);

export default Header;
