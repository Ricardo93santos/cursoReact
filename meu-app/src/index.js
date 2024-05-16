import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Mydiv from './minhaDiv';
import reportWebVitals from './reportWebVitals';

const tst = ReactDOM.createRoot(document.querySelector('.minhaDiv'));
tst.render(
  <React.StrictMode>
    <Mydiv />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
