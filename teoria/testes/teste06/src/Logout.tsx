import React from "react";
import {Form} from "./Form";

export function Logout(){
  return (
    <Form 
      title="Você está logado!"
      text="Quer sair?"
      status="Logout"
    />
  )
}