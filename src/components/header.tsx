import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as styles from './layout.module.scss';

type HeaderProps = {
  siteTitle: string;
};

const Header = ({ siteTitle }: HeaderProps) => (
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

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
