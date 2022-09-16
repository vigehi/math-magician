import React from 'react';
import './header.css';
// import { BrowserRouter as Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Edith Magic</h1>
    <ul>
      <a href="/">Home</a>
      <a href="/Calculator">Calculator</a>
      <a href="/Quotes">Quotes</a>
    </ul>
  </header>
);

export default Header;
