import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // import src/App.js
/* html에서 갱신되는 컴포넌트는 하나의 컴포넌트만 rendering 한다. */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // index.html id = 'root'
);
