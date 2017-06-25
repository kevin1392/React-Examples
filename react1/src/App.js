import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(...arg){
    super(...arg)
    this.state={
      contador:0
    }
  }
  aumentarContador(){
    this.setState({
      contador:this.state.contador+1
    }
    )
  }
  restarContador(){
    this.setState({
      contador:this.state.contador-1
    }
    )
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.aumentarContador.bind(this)}>+</button>
        <button onClick={this.restarContador.bind(this)}>-</button>
        <h1 >Contador {this.state.contador}</h1>
      </div>
    );
  }
}

export default App;
