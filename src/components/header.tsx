import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './layout.module.scss';
import { FunctionComponent } from 'react';

type HeaderProps = {
  siteTitle: string;
};

const Header: FunctionComponent<HeaderProps> = ({ siteTitle }) => (
  <header
    style={{
      background: 'transparent',
      marginBottom: `1rem`,
      textAlign: 'center'
    }}
  >
    <div className={styles.titleContainer}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
