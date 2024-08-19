import React from "react";

interface TestFormProps {
  message: string;
  children: React.ReactNode;
}

export default function Testform({message, children}: TestFormProps) {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        alert(`${message}`)
      }}>
        <input />
        <button type="submit">{children}</button>
      </form>
    </div>
  )
}