import React from "react";

interface EffectButtonProps {
  message: string;
  children: React.ReactNode;
}

export default function EffectButton({message, children}: EffectButtonProps) {
  function handleClick(){
    alert(message)
  }
  return (
    <button onClick={e => {
      e.stopPropagation();
      handleClick();
    }}>
      {children}
    </button>
  )
}