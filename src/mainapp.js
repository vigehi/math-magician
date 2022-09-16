/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Calc from './components/calc';
import Home from './home';
import Quotes from './quote';

class Mainapp extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="Quotes" element={<Quotes />} />
          <Route path="Calculator" element={<Calc />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default Mainapp;
