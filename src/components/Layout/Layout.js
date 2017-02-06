import React, { PropTypes } from 'react';
import Header from '../Header';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired, //React.PropTypes.element.isRequired
};

export default Layout;
