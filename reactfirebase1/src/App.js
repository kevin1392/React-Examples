import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyChzphOLuStc1FojgKA8m-opO0UqaLZYEk',
    authDomain: 'reactfirebase1-44cef.firebaseapp.com',
    databaseURL: 'https://reactfirebase1-44cef.firebaseio.com',
    projectId: 'reactfirebase1-44cef',
    storageBucket: 'reactfirebase1-44cef.appspot.com',
    messagingSenderId: '680419448523'
  }

  firebase.initializeApp(config)

class App extends Component {

  constructor(){
    super()
    this.state={
      name: 'KevinR'
    }
  }

  componentWillMount(){
    const nameRef = firebase.database().ref().child('object').child('name')

    nameRef.on('value',(snapshot) => {
      this.setState({
        name: snapshot.val()
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>Hola {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
