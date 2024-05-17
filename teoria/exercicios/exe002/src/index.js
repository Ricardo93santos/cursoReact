import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './App'
import reportWebVitals from './reportWebVitals';

const listItems = ['Borraça', 'Lápis', 'Caneta', 'Maçã', 'Luva'];
const list = ReactDOM.createRoot(document.querySelector('.list'));
list.render(
  <React.StrictMode>
    <List items={listItems} />
  </React.StrictMode>
)

reportWebVitals();
