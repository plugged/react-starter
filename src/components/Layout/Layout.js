import React, { PropTypes } from 'react';
import Header from '../Header';

const Layout = ({ children }) => (
  <div>
    <Header />
    <h1>Hello, world!</h1>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired, //React.PropTypes.element.isRequired
};

export default Layout;
