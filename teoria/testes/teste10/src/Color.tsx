import React, { useState, ChangeEvent } from "react";

export default function Color() {
  const [color, setColor] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  }
  const divStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: color,
  }

  return (
    <div>
      <label htmlFor="inputColor">Selecione uma cor:</label>
      <input
        type="color"
        value={color}
        onChange={handleChange}
      />
      <div style={divStyle}></div>
      <p>{color}</p>
    </div>
  )

}