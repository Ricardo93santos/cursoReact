import React from "react";
import {LogButton} from "./LogButton";

interface ComponetProps {
  title: string;
  text: string;
  status: string;
}
export function Form(props: ComponetProps){
  const { title, text, status } = props;

  return (
    <form>
      <h2>{title}</h2>
      <p>{text}</p>
      <LogButton labelBtn={status}/>
    </form>
  )
}