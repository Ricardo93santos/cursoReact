import React from "react";
import { useState } from 'react';

export default function Count() {
  const [velue, setVelue] = useState(0);
  const [velueZero, setVelueZero] = useState(0);

  function handlClickSoma() {
    setVelue(velue + 1)
  }

  function handlClickZero(){
    setVelue(0)
    setVelueZero(velueZero + 1)
  }
  function handlClickSub(){
    setVelue(velue - 1)
  }
  return (
    <div>
      <button onClick={handlClickSoma}>+</button>
      <button onClick={handlClickZero}>0</button>
      <button onClick={handlClickSub}>-</button>
      <p>Quantidade de vezes clicadas: {velue}</p>
      <p>Quantidade de vezes que o 0 foi clicado: {velueZero}</p>

    </div>
  )
}