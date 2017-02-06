import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <header>Header</header>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
);

export default Header;
