import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import report from './report';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('main'),
);

report();
