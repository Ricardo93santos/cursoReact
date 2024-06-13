import PersonalityList from './List'
import React, { Component } from 'react';

class fristTest extends Component {
  render() {
    return(
      <>
        <h1>Estou criando uma lista de personalidades</h1>
        <p>Essa lista é importada de outro componente React chamado List.js</p>
        <PersonalityList />
      </>
    );
  }
}

export default fristTest