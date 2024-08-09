import React from "react";
import {Form} from "./Form";

export function Login(){
  return (
    <Form 
      title="Você não está logado!"
      text="Quer entrar?"
      status="Login"
    />
  )
}