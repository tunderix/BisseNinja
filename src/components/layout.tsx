import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import * as styles from './layout.module.scss';
import { FunctionComponent } from 'react';

type LayoutProps = {
  children: any;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div style={styles}>
        <div className={styles.tableContainer}>
          <div className={styles.board}>Some Div Here! :) CONSTANT</div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
