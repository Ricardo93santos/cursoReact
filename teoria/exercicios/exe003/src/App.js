import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {contador:0};
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      if(this.state.contador < this.props.final) {
        this.setState({
          contador: this.state.contador + 1
        });
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render (){
    return(
      <h1>Contador: {this.state.contador}</h1>
    )
  }
}

export default App;