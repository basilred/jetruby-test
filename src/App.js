import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tiles from './Tiles';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Tiles />
      </div>
    );
  }
}

export default App;
