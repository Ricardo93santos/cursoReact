import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contador from './App';
import reportWebVitals from './reportWebVitals';

const contador = ReactDOM.createRoot(document.getElementById('contador'));
contador.render(
  <React.StrictMode>
    <Contador final={10} />
    <Contador final={5} />
    <Contador final={23} />
    <Contador final={17} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
