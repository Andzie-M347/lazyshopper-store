import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Styling
import 'bootstrap/dist/css/bootstrap.css';
// import 'animate.css/animate.min.css';
import './assets/css/app.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#app-root')
);
