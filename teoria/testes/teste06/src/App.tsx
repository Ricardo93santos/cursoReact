import React from 'react';
import {Login} from './Login';
import {Logout} from './Logout';

let logUser = false;

function App() {
  return(
    logUser === false ? <Login /> : <Logout />
  )
  /*
  if(logUser === false) {
    return (
      <Login />
    )
  }else {
    return (
      <Logout />
    )
  }*/
}

export default App