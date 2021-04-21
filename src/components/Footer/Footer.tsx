import React, { FunctionComponent } from 'react';

// tslint:disable-next-line:no-empty-interface
interface IFooterProps {}

type FooterProps = IFooterProps;

const Footer: FunctionComponent<FooterProps> = (props) => {
  return (
    <footer
      style={{
        marginTop: `2rem`,
        float: 'right'
      }}
    >
      © {new Date().getFullYear()},{` `}
      <a href="https://github.com/tunderix/">Ioni</a>
    </footer>
  );
};

export default Footer;
