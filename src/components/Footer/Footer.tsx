import React, { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
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
