import React from 'react';
import './App.css';

function List(props) {
  const { items } = props;

  return (
    <ul>
      <h1>Lista de Compras</h1>
      {items.map((item, index) => (
        <li className="listItems" key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
