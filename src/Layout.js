import React, { PropTypes } from 'react';

const Layout = ({ children }) => (
  <div>
    <h1>Hello, world!</h1>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
