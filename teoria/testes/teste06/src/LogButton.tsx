import React from "react";
interface ComponentProps {
  labelBtn: string;
}

export function LogButton(props: ComponentProps){
  const { labelBtn } = props;
  return (
    <>
      <button>{ labelBtn }</button>
    </>
  )
}