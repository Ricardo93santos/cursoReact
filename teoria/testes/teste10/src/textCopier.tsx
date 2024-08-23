import React, { useState, ChangeEvent } from 'react'

export default function TextCopier() {
  const [text, setText] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }
  return (
    <div>
      <label htmlFor='textCopier'>Digite qualquer coisa:</label>
      <input id='textCopier'
        type='text'
        value={text}
        onChange={handleChange}
      />
      <p>{text}</p>
    </div>
  )
}