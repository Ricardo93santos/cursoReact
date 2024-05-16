import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Saudacao from './App'
import reportWebVitals from './reportWebVitals';

const saudacao = ReactDOM.createRoot(document.querySelector('.saudacao'));
saudacao.render(
  <React.StrictMode>
    <Saudacao name="Ricardo" />
    <Saudacao name="Aline" />
    <Saudacao name="Asaph" />
    <Saudacao name="Heloisa" />
  </React.StrictMode>
);

reportWebVitals();
